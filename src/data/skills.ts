import { Skill } from "./types";

export const skills: Skill[] = [
  // Frontend Technologies
  { name: "HTML5", category: "frontend", proficiency: 95 },
  { name: "CSS3", category: "frontend", proficiency: 95 },
  { name: "JavaScript (ES6+)", category: "frontend", proficiency: 90 },
  { name: "TypeScript", category: "frontend", proficiency: 90 },
  { name: "React.js", category: "frontend", proficiency: 90 },
  { name: "Next.js (App Router)", category: "frontend", proficiency: 90 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 95 },
  { name: "shadcn/ui", category: "frontend", proficiency: 85 },

  // Backend & Databases
  { name: "Node.js", category: "backend", proficiency: 85 },
  { name: "Express.js", category: "backend", proficiency: 85 },
  { name: "MongoDB", category: "backend", proficiency: 85 },
  { name: "Mongoose", category: "backend", proficiency: 85 },
  { name: "RESTful APIs", category: "backend", proficiency: 90 },

  // AI & Modern Tooling
  { name: "Vercel AI SDK", category: "ai", proficiency: 80 },
  { name: "Agentic AI Systems", category: "ai", proficiency: 80 },
  { name: "Generative AI Workflows", category: "ai", proficiency: 80 },
  { name: "Prompt Engineering", category: "ai", proficiency: 85 },
  { name: "Context Management", category: "ai", proficiency: 80 },

  // Animation & UI Enhancements
  { name: "GSAP (ScrollTrigger)", category: "frontend", proficiency: 75 },
  { name: "Framer Motion", category: "frontend", proficiency: 80 },
  { name: "Swiper.js", category: "frontend", proficiency: 75 },

  // Tools & Platforms
  { name: "Git", category: "tools", proficiency: 90 },
  { name: "GitHub", category: "tools", proficiency: 90 },
  { name: "Vercel", category: "tools", proficiency: 85 },
  { name: "npm", category: "tools", proficiency: 90 },

  // Design & Collaboration
  { name: "Figma", category: "design", proficiency: 70 },
];

export const skillCategories = {
  frontend: {
    title: "Frontend Technologies",
    icon: "🎨",
    emoji: "💻",
  },
  backend: {
    title: "Backend & Databases",
    icon: "⚙️",
    emoji: "🗄️",
  },
  ai: {
    title: "AI & Modern Tooling",
    icon: "🤖",
    emoji: "🧠",
  },
  tools: {
    title: "Developer Tools & Platforms",
    icon: "🧰",
    emoji: "🔧",
  },
  design: {
    title: "Design & Collaboration",
    icon: "🎨",
    emoji: "✨",
  },
};
