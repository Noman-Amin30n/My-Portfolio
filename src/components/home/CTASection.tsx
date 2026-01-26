"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/buttons/MagneticButton";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready To Get
              <br />
              <span className="text-primary">Started?</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Let&apos;s build something amazing together!
            </p>
          </motion.div>

          {/* Right - CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MagneticButton strength={0.4}>
              <Link href="/contact">
                <Button size="lg" className="group text-lg px-8">
                  Hire Me Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
