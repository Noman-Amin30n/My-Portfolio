"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./buttons/MagneticButton";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <MagneticButton strength={0.4}>
      <motion.button
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative rounded-full p-2.5 transition-colors bg-secondary hover:bg-primary/10 border border-border/50 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
      >
        <div className="relative h-6 w-6 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {theme === "light" ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Sun className="h-5 w-5 text-primary" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: -90, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Moon className="h-5 w-5 text-primary" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <span className="sr-only">Toggle theme</span>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          layoutId="glow"
        />
      </motion.button>
    </MagneticButton>
  );
}
