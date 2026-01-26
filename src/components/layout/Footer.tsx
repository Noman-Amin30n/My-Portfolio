"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { personalInfo, socialLinks } from "@/data/personal";

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
};

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {personalInfo.name.split(" ")[0]}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {personalInfo.role}
            </p>
            <p className="text-muted-foreground/80 text-sm">
              Building modern, scalable, and AI-powered web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-muted-foreground text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-primary transition-colors"
              >
                {personalInfo.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground/80 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. All rights
              reserved.
            </p>
            <p className="text-muted-foreground/80 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
              using Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
