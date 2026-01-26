"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/types";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-medium mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </Button>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </a>
              )}
            </div>

            {project.year && (
              <div className="flex items-center gap-2 text-slate-light">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video bg-gradient-to-br from-primary/20 via-peach/20 to-lavender/30 rounded-2xl shadow-float flex items-center justify-center"
          >
            <div className="text-9xl">
              {project.category === "ai" && "🤖"}
              {project.category === "fullstack" && "💻"}
              {project.category === "frontend" && "🎨"}
              {project.category === "web-app" && "🌐"}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  About the Project
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>

              {project.challenge && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    🎯 Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </motion.div>
              )}

              {project.solution && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    💡 Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>
              )}

              {project.results && project.results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-peach rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    ✨ Results
                  </h3>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl">✓</span>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card rounded-2xl p-6 shadow-card sticky top-24 border border-border/50"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.category && (
                  <>
                    <h3 className="text-xl font-bold text-foreground mb-2 mt-6">
                      Category
                    </h3>
                    <span className="inline-block px-3 py-1.5 rounded-lg bg-gradient-peach text-foreground text-sm font-medium capitalize">
                      {project.category.replace("-", " ")}
                    </span>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Interested in working together?
            </h2>
            <Link href="/contact">
              <Button size="lg">Get In Touch</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
