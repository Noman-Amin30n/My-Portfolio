"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground transition-colors duration-300">
            Let&apos;s <span className="text-primary">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you. Fill out the form below and I&apos;ll get back to you as
            soon as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
