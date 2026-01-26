"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { CheckCircle2 } from "lucide-react";

export default function ServicesList() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-float transition-all border border-border/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left - Icon & Title */}
                <div className="space-y-4">
                  <div className="text-6xl">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  {service.popular && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      ⭐ Popular
                    </span>
                  )}
                </div>

                {/* Middle - Description */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      What&apos;s Included:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Link href="/contact">
            <Button size="lg">Get Started</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
