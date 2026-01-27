"use client";
import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 3,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, transparent 40%, rgba(255, 255, 255, 0.8) 50%, transparent 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        display: "inline-block",
        animation: disabled
          ? "none"
          : `shine ${animationDuration} linear infinite`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
