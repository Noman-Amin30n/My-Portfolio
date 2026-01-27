"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/buttons/MagneticButton";
import { personalInfo } from "@/data/personal";
import DotGrid from "@/components/react-bits/DotGrid";
import RotatingText from "@/components/react-bits/RotatingText";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <DotGrid
          color="#a0aec0"
          gridSize={40}
          gap={25}
          dotSize={1.5}
          fadeDistance={250}
          className="opacity-40"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl z-0"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-lavender rounded-full blur-3xl z-0"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm shadow-soft text-sm font-medium border border-border/50">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight">
                Hi! I Am
                <br />
                <span className="bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-slate flex items-center gap-2">
                <span>I am a</span>
                <RotatingText
                  items={[
                    "Frontend Developer",
                    "UI/UX Designer",
                    "Creative Thinker",
                    "Problem Solver",
                  ]}
                  interval={2500}
                  className="text-primary font-bold"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-light leading-relaxed max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Hire Me
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </MagneticButton>
              <Link href="/projects">
                <Button size="lg" variant="outline">
                  View Projects
                </Button>
              </Link>
            </motion.div>

            {/* Stats/Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-card shadow-soft flex items-center justify-center border border-border/50">
                  💼
                </div>
                <div>
                  <p className="text-sm text-slate-light">Available for</p>
                  <p className="font-semibold text-navy">Freelance Work</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image & Floating Elements */}
          <div className="relative lg:block hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative z-10 w-[400px] h-[400px] mx-auto">
                <div className="flex items-end w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 to-lavender/30 backdrop-blur-sm shadow-float">
                  <Image
                    src="/images/hero-bg-2.png" // User will update this manually
                    alt={personalInfo.name}
                    width={500}
                    height={500}
                    className="object-contain rounded-b-3xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-10 -right-10 bg-card rounded-2xl p-4 shadow-float border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    🏆
                  </div>
                  <div>
                    <p className="text-xs text-slate-light">Best Design</p>
                    <p className="font-bold text-navy">Award 2025</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute bottom-10 -left-10 bg-card rounded-2xl p-4 shadow-float border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    📊
                  </div>
                  <div>
                    <p className="text-xs text-slate-light">Projects</p>
                    <p className="font-bold text-navy">Completed</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
