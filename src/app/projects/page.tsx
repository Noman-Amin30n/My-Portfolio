import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Muhammad Noman Ameen",
  description:
    "Explore my portfolio of web development projects featuring modern applications, AI integration, and beautiful user experiences.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
