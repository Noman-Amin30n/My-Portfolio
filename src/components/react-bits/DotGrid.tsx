"use client";
import React, { useRef, useEffect } from "react";

interface DotGridProps {
  color?: string;
  gridSize?: number;
  gap?: number;
  dotSize?: number;
  className?: string;
  fadeDistance?: number;
}

const DotGrid: React.FC<DotGridProps> = ({
  color = "#cbd5e1", // slate-300 default
  gridSize = 40,
  gap = 20,
  dotSize = 1,
  className = "",
  fadeDistance = 200,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Subtle hover effect - slightly larger dots near mouse
          let currentDotSize = dotSize;
          let opacity = 0.2; // Base opacity

          if (distance < fadeDistance) {
            const scale = (fadeDistance - distance) / fadeDistance;
            currentDotSize = dotSize + scale * 1.5;
            opacity = 0.2 + scale * 0.3;
          }

          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(x, y, currentDotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, gap, dotSize, fadeDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 pointer-events-none ${className}`}
    />
  );
};

export default DotGrid;
