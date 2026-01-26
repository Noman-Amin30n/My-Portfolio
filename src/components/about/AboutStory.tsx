"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";

export default function AboutStory() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-foreground mb-8">
            My <span className="text-primary">Journey</span>
          </h2>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {personalInfo.professionalStory
              .split("\n\n")
              .map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-muted-foreground leading-relaxed mb-6"
                >
                  {paragraph}
                </motion.p>
              ))}
          </div>

          {/* Values/Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-gradient-peach rounded-2xl p-8 border border-border/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What I Value
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Quality Code",
                  description:
                    "Clean, maintainable, and scalable code that stands the test of time",
                },
                {
                  icon: "⚡",
                  title: "Performance",
                  description:
                    "Fast, optimized applications that provide excellent user experiences",
                },
                {
                  icon: "♿",
                  title: "Accessibility",
                  description:
                    "Inclusive design that works for everyone, regardless of ability",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h4 className="font-bold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
