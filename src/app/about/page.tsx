import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutSkills from "@/components/about/AboutSkills";

export const metadata: Metadata = {
  title: "About Me | Muhammad Noman Ameen",
  description:
    "Learn more about Muhammad Noman Ameen - Full-stack web developer specializing in modern, scalable, and AI-powered applications.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <AboutHero />
        <AboutStory />
        <AboutSkills />
      </main>
      <Footer />
    </>
  );
}
