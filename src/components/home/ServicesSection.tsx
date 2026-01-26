"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import FloatingCard from "@/components/cards/FloatingCard";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export default function ServicesSection() {
  // Show only first 3 services on home page
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          <div className="lg:sticky lg:top-32 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
