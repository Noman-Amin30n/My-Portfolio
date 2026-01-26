"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import { Sparkles } from "lucide-react";

export default function SkillsSection() {
  const categories = Object.entries(skillCategories);

  return (
    <section className="py-24 bg-gradient-peach relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm shadow-soft mb-6 border border-border/50">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-navy uppercase tracking-wider">
              Tech Stack
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-lg text-slate-light max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build exceptional web applications.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map(([key, category], catIndex) => {
            const categorySkills = skills.filter((s) => s.category === key);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-card shadow-card flex items-center justify-center text-2xl border border-border/50">
                    {category.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-navy">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-transparent ml-4" />
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, index) => {
                    const proficiency = skill.proficiency || 75;
                    const isHighProficiency = proficiency >= 85;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        whileHover={{ scale: 1.08, y: -4 }}
                        className="group relative"
                      >
                        {/* Skill Badge */}
                        <div className="relative px-5 py-2.5 rounded-xl bg-linear-to-br from-card via-card to-card/90 shadow-card hover:shadow-float transition-all duration-300 cursor-default border border-border/50 hover:border-primary/20 overflow-hidden">
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                          {/* High proficiency indicator */}
                          {isHighProficiency && (
                            <div className="absolute top-1 right-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            </div>
                          )}

                          {/* Skill name */}
                          <span className="relative font-semibold text-navy group-hover:text-primary transition-colors duration-300">
                            {skill.name}
                          </span>

                          {/* Proficiency bar (visible on hover) */}
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${proficiency}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="h-full bg-linear-to-r from-primary to-primary-light"
                            />
                          </div>
                        </div>

                        {/* Tooltip on hover */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-card text-[11px] font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                          {proficiency}% proficiency
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
