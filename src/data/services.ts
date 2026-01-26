import { Service } from "./types";

export const services: Service[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Web Development",
    description:
      "Building complete web applications from frontend to backend, with clean architecture, scalable code, and modern technologies like React, Next.js, Express, and MongoDB.",
    icon: "💻",
    features: [
      "Modern React & Next.js applications",
      "RESTful API design and development",
      "Database design with MongoDB & Mongoose",
      "Responsive and accessible UI",
      "Performance optimization",
      "Full application deployment",
    ],
    popular: true,
  },
  {
    id: "frontend-dev",
    title: "Frontend UI Development",
    description:
      "Creating beautiful, intuitive user interfaces with attention to detail, accessibility, and performance. Specialized in React, TypeScript, and modern CSS frameworks.",
    icon: "🎨",
    features: [
      "Component-based architecture",
      "Responsive design implementation",
      "TypeScript for type safety",
      "Tailwind CSS & shadcn/ui",
      "Cross-browser compatibility",
      "Accessibility (WCAG) compliance",
    ],
  },
  {
    id: "ai-features",
    title: "AI-Powered Web Features",
    description:
      "Integrating intelligent features into web applications using agentic and generative AI systems. Building AI-driven experiences with modern tools and prompt engineering.",
    icon: "🤖",
    features: [
      "Agentic AI integration",
      "Vercel AI SDK implementation",
      "Generative AI workflows",
      "Prompt & context engineering",
      "AI-enhanced user experiences",
      "Intelligent automation features",
    ],
    popular: true,
  },
  {
    id: "backend-dev",
    title: "Backend API Development",
    description:
      "Designing and building robust backend systems and RESTful APIs with Node.js, Express, and MongoDB. Focus on security, scalability, and clean architecture.",
    icon: "⚙️",
    features: [
      "RESTful API architecture",
      "Authentication & authorization",
      "Database modeling & optimization",
      "Error handling & validation",
      "API documentation",
      "Server deployment & monitoring",
    ],
  },
  {
    id: "ui-animations",
    title: "UI Animation & Interactions",
    description:
      "Enhancing user experiences with smooth, purposeful animations and micro-interactions using GSAP, Framer Motion, and modern CSS techniques.",
    icon: "✨",
    features: [
      "GSAP scroll-based animations",
      "Framer Motion interactions",
      "Micro-interactions & hover effects",
      "Page transitions",
      "Performance-conscious animations",
      "Reduced motion support",
    ],
  },
];
