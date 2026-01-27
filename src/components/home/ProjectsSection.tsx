"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";
import ScrollReveal from "@/components/react-bits/ScrollReveal";

export default function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my latest work showcasing modern web development, AI
            integration, and beautiful user experiences.
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View All Projects
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
