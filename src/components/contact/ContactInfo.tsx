"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/personal";
import { Github, Linkedin, Twitter, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Get in Touch
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          I&apos;m currently available for freelance work and exciting projects.
          If you have a project in mind or just want to say hi, feel free to
          reach out!
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              Email
            </h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-base text-muted-foreground hover:text-primary transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {personalInfo.location && (
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                Location
              </h3>
              <p className="text-base text-muted-foreground">
                {personalInfo.location}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-base font-semibold text-foreground mb-4">
          Connect on Social Media
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.platform}
                href={social.url}
                target={social.platform === "Email" ? undefined : "_blank"}
                rel={
                  social.platform === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-float hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110 border border-border/50"
                aria-label={social.platform}
              >
                <Icon className="w-5 h-5 pointer-events-none" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Availability Badge */}
      <div className="bg-gradient-peach rounded-2xl p-6 border border-border/20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">
              Available for Work
            </h3>
            <p className="text-sm text-muted-foreground">
              Open to new opportunities
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
