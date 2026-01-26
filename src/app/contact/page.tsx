import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact | Muhammad Noman Ameen",
  description:
    "Get in touch for web development projects, collaborations, or inquiries. Let's build something amazing together!",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ContactHero />
        <div className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
