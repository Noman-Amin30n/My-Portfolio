"use client";

import React from "react";
import Link from "next/link";
import FloatingCard from "@/components/cards/FloatingCard";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import Squares from "@/components/react-bits/Squares";

export default function ServicesSection() {
  // Show only first 3 services on home page
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="rgba(255, 107, 53, 0.2)"
          hoverFillColor="#ff6b35"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Service Cards */}
          <div className="space-y-6">
            {featuredServices.map((service, index) => (
              <FloatingCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
                className="w-full"
              />
            ))}
          </div>

          {/* Right - Heading & Description */}
          <div className="lg:sticky lg:top-32 self-start h-fit space-y-6">
            <ScrollReveal direction="left" className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                My Awesome
                <br />
                <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg text-slate-light leading-relaxed mb-8">
                I provide a wide range of web development services, from
                building beautiful user interfaces to developing robust backend
                systems and integrating intelligent AI features. Each project is
                crafted with attention to detail, performance, and user
                experience.
              </p>
              <Link href="/services">
                <Button size="lg">View All Services</Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
