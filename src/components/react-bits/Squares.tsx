"use client";
import React, { useRef, useEffect } from "react";

interface SquaresProps {
  direction?: "diagonal" | "up" | "down" | "right" | "left";
  speed?: number;
  borderColor?: string;
  hoverFillColor?: string;
  squareSize?: number;
  className?: string;
}

const Squares: React.FC<SquaresProps> = ({
  direction = "diagonal",
  speed = 0.5,
  borderColor = "#333",
  hoverFillColor = "#222",
  squareSize = 40,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let requestRef: number;
    let numSquaresX = 0;
    let numSquaresY = 0;
    const gridOffset = { x: 0, y: 0 };
    const mousePosition = { x: -1000, y: -1000 }; // offscreen initially

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY = Math.ceil(canvas.height / squareSize) + 1;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move grid based on direction
      const step = speed;
      switch (direction) {
        case "right":
          gridOffset.x = (gridOffset.x - step) % squareSize;
          break;
        case "left":
          gridOffset.x = (gridOffset.x + step) % squareSize;
          break;
        case "up":
          gridOffset.y = (gridOffset.y + step) % squareSize;
          break;
        case "down":
          gridOffset.y = (gridOffset.y - step) % squareSize;
          break;
        case "diagonal":
          gridOffset.x = (gridOffset.x - step) % squareSize;
          gridOffset.y = (gridOffset.y - step) % squareSize;
          break;
      }

      ctx.lineWidth = 0.5; // thinner lines for elegance

      for (let x = 0; x < numSquaresX; x++) {
        for (let y = 0; y < numSquaresY; y++) {
          const squareX = x * squareSize + (gridOffset.x % squareSize);
          const squareY = y * squareSize + (gridOffset.y % squareSize);

          if (
            direction === "right" ||
            direction === "left" ||
            direction === "diagonal"
          ) {
            if (squareX < -squareSize) continue;
            if (squareX > canvas.width) continue;
          }
          if (
            direction === "up" ||
            direction === "down" ||
            direction === "diagonal"
          ) {
            if (squareY < -squareSize) continue;
            if (squareY > canvas.height) continue;
          }

          const isHovered =
            mousePosition.x > squareX &&
            mousePosition.x < squareX + squareSize &&
            mousePosition.y > squareY &&
            mousePosition.y < squareY + squareSize;

          if (isHovered) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
          }

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      requestRef = requestAnimationFrame(draw);
    };

    const handleWindowMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mousePosition.x = e.clientX - rect.left;
        mousePosition.y = e.clientY - rect.top;
      } else {
        mousePosition.x = -1000;
        mousePosition.y = -1000;
      }
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleWindowMouseMove);

    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleWindowMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return (
    <canvas ref={canvasRef} className={`block w-full h-full ${className}`} />
  );
};

export default Squares;
