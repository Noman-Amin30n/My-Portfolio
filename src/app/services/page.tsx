import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesProcess from "@/components/services/ServicesProcess";

export const metadata: Metadata = {
  title: "Services | Muhammad Noman Ameen",
  description:
    "Full-stack web development, AI integration, frontend development, and more. Professional web development services.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ServicesHero />
        <ServicesList />
        <ServicesProcess />
      </main>
      <Footer />
    </>
  );
}
