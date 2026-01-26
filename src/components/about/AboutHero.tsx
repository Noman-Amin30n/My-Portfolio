"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

export default function AboutHero() {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground transition-colors duration-300">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
            {personalInfo.bio}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
