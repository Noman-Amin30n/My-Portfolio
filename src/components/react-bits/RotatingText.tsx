"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  items: string[];
  trigger?: "auto" | "scroll"; // Auto rotate or scroll based
  interval?: number; // Time in ms for auto rotation
  stagger?: number; // Stagger time for characters
  color?: string; // Text color
  className?: string;
  onHover?: boolean; // If true, only rotates on hover (overrides auto)
}

const RotatingText: React.FC<RotatingTextProps> = ({
  items,
  trigger = "auto",
  interval = 3000,
  stagger = 0.05,
  color = "inherit",
  className = "",
  onHover = false,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (onHover || trigger !== "auto") return;

    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [trigger, interval, items.length, onHover]);

  return (
    <div
      className={`relative inline-block overflow-hidden h-[1.2em] align-top ${className}`}
      style={{ color }}
      onMouseEnter={() => {
        if (onHover) setIndex((prev) => (prev + 1) % items.length);
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 15,
            mass: 1,
          }}
          className="absolute inset-0 whitespace-nowrap"
        >
          {items[index]}
        </motion.div>
        {/* Invisible spacer to maintain width/height */}
        <div className="opacity-0 pointer-events-none">{items[index]}</div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
