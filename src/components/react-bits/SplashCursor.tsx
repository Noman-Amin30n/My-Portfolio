"use client";
import { useEffect } from "react";

interface SplashCursorProps {
  color?: string; // Color of the splash
  size?: number; // Size of the splash effect
  splashCount?: number; // Number of splash particles
  splashDuration?: number; // Duration of the splash animation
}

function SplashCursor({
  color = "#2563eb", // Default blue-600 to match primary theme often
  size = 20,
  splashCount = 8,
  splashDuration = 600,
}: SplashCursorProps) {
  useEffect(() => {
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Check if device is mobile (touch) - simplistic check
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    let particles: HTMLDivElement[] = [];

    const createSplash = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      for (let i = 0; i < splashCount; i++) {
        const particle = document.createElement("div");
        document.body.appendChild(particle);
        particles.push(particle);

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * size;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.position = "fixed";
        particle.style.left = `${clientX}px`;
        particle.style.top = `${clientY}px`;
        particle.style.width = `${Math.random() * 6 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = color;
        particle.style.borderRadius = "50%";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "9999";
        particle.style.transform = "translate(-50%, -50%)";
        
        // Animation
        const animation = particle.animate(
          [
            { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
            {
              transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`,
              opacity: 0,
            },
          ],
          {
            duration: splashDuration,
            easing: "cubic-bezier(0, .9, .57, 1)",
          }
        );

        animation.onfinish = () => {
          particle.remove();
          particles = particles.filter((p) => p !== particle);
        };
      }
    };

    window.addEventListener("click", createSplash);

    return () => {
      window.removeEventListener("click", createSplash);
      particles.forEach((p) => p.remove());
    };
  }, [color, size, splashCount, splashDuration]);

  return null;
}

export default SplashCursor;
