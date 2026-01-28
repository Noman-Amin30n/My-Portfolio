"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import Image from "next/image";

export default function StatsSection() {
  const benefits = ["High Quality Works", "Commitment", "Always Active"];

  return (
    <section className="py-24 bg-gradient-peach">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Clients Get Always
              <br />
              Exceptional Works
              <br />
              From Me
            </h2>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-lg font-medium text-foreground"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 shadow-float inline-block border border-border/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">📈</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Available for</p>
                  <p className="font-semibold text-foreground">
                    Freelance Work
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Visual */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-lavender/30 shadow-float">
                <Image
                  src="/images/stats-image-3.png" // User will update this manually
                  alt="Stats Image"
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-float border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    ✅
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Best Design</p>
                    <p className="font-bold text-foreground">Award 2025</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
