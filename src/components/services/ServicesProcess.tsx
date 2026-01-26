"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding your goals, requirements, and target audience",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating a detailed roadmap and technical architecture",
      icon: "📋",
    },
    {
      number: "03",
      title: "Development",
      description: "Building your application with clean, scalable code",
      icon: "⚙️",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "Thorough testing for quality, performance, and accessibility",
      icon: "🧪",
    },
    {
      number: "05",
      title: "Launch",
      description: "Deploying your application and ensuring smooth operation",
      icon: "🚀",
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing maintenance and updates as needed",
      icon: "💬",
    },
  ];

  return (
    <section className="py-24 bg-gradient-peach">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to deliver high-quality results every time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-float transition-all border border-border/50"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary font-bold text-2xl">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
