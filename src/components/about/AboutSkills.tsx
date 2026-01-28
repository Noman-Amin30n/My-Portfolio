"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";

export default function AboutSkills() {
  const categories = Object.entries(skillCategories);

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
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build modern web applications
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map(([key, category], catIndex) => {
            const categorySkills = skills.filter((s) => s.category === key);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
              >
                <div className="flex flex-col gap-3 mb-6">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[150px] h-auto rounded-lg"
                  >
                    <source src={category.icon} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="group"
                    >
                      <div className="px-4 py-3 rounded-xl bg-gradient-to-br from-cream/50 to-peach/50 dark:from-slate/10 dark:to-slate/5 group-hover:from-primary group-hover:to-primary-light transition-all cursor-default border border-border/10">
                        <span className="font-medium text-foreground/80 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
