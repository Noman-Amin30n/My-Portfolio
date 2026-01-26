import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Noman Ameen | Full-Stack Developer & AI Engineer",
  description:
    "Full-stack web developer specializing in modern, scalable, and AI-powered web applications. Expert in React, Next.js, TypeScript, and Agentic AI systems.",
  keywords: [
    "Full-Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Muhammad Noman Ameen",
  ],
  authors: [{ name: "Muhammad Noman Ameen" }],
  creator: "Muhammad Noman Ameen",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Noman Ameen | Full-Stack Developer & AI Engineer",
    description:
      "Full-stack web developer specializing in modern, scalable, and AI-powered web applications.",
    siteName: "Muhammad Noman Ameen Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Noman Ameen | Full-Stack Developer & AI Engineer",
    description:
      "Full-stack web developer specializing in modern, scalable, and AI-powered web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem("theme");
                  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
