import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "ai-chat-platform",
    title: "AI Chat Platform",
    description:
      "An AI-powered chat application with context-aware conversations",
    longDescription:
      "A modern chat platform integrating generative AI for intelligent, context-aware conversations. Built with Next.js 14, featuring real-time messaging, user authentication, and AI-powered response generation.",
    challenge:
      "Creating a seamless chat experience that maintains context across conversations while ensuring fast response times and scalability.",
    solution:
      "Implemented efficient context management using Vercel AI SDK, optimized prompts for better responses, and architected a scalable backend with MongoDB for conversation storage.",
    results: [
      "Sub-second response times for AI messages",
      "Context retention across multiple conversations",
      "Scalable architecture supporting concurrent users",
      "Intuitive UI with real-time updates",
    ],
    image: "/projects/ai-chat.png",
    images: [
      "/projects/ai-chat-1.png",
      "/projects/ai-chat-2.png",
      "/projects/ai-chat-3.png",
    ],
    tags: ["Next.js", "TypeScript", "AI", "MongoDB", "Vercel AI SDK"],
    category: "ai",
    link: "https://your-project.vercel.app",
    github: "https://github.com/yourusername/ai-chat-platform",
    featured: true,
    year: "2025",
  },
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description: "Full-stack admin dashboard for e-commerce management",
    longDescription:
      "A comprehensive admin dashboard for managing e-commerce operations, including product management, order tracking, analytics, and customer management. Built with modern technologies for optimal performance.",
    challenge:
      "Building a dashboard that handles large datasets efficiently while providing real-time updates and an intuitive interface for managing complex e-commerce operations.",
    solution:
      "Implemented efficient data fetching strategies, server-side rendering for better performance, and real-time updates using API polling. Created reusable components for consistent UI.",
    results: [
      "Handles 10,000+ products smoothly",
      "Real-time order tracking and updates",
      "Comprehensive analytics with charts",
      "Responsive design for mobile management",
    ],
    image: "/projects/ecommerce.png",
    images: ["/projects/ecommerce-1.png", "/projects/ecommerce-2.png"],
    tags: ["React", "Next.js", "TypeScript", "MongoDB", "Express"],
    category: "fullstack",
    link: "https://your-dashboard.vercel.app",
    github: "https://github.com/yourusername/ecommerce-dashboard",
    featured: true,
    year: "2024",
  },
  {
    id: "portfolio-animated",
    title: "Animated Portfolio Site",
    description: "High-performance portfolio with luxury scroll animations",
    longDescription:
      "A stunning portfolio website featuring smooth scroll-based animations, magnetic interactions, and a custom cursor. Built with performance and accessibility in mind.",
    challenge:
      "Creating complex animations that feel premium while maintaining excellent performance and accessibility standards.",
    solution:
      "Used GSAP for efficient scroll animations, Framer Motion for micro-interactions, implemented reduced motion support, and optimized asset loading.",
    results: [
      "95+ Lighthouse performance score",
      "100 accessibility score",
      "Smooth 60fps animations",
      "Full keyboard navigation support",
    ],
    image: "/projects/portfolio.png",
    images: [
      "/projects/portfolio-1.png",
      "/projects/portfolio-2.png",
      "/projects/portfolio-3.png",
    ],
    tags: ["Next.js", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS"],
    category: "frontend",
    link: "https://animated-portfolio.vercel.app",
    github: "https://github.com/yourusername/animated-portfolio",
    featured: true,
    year: "2025",
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription:
      "A full-featured task management application supporting team collaboration, real-time updates, drag-and-drop task organization, and comprehensive project tracking.",
    challenge:
      "Building a real-time collaborative platform that syncs data across multiple users while handling conflicts and maintaining data integrity.",
    solution:
      "Implemented optimistic UI updates, efficient state management, and proper conflict resolution. Used MongoDB for flexible data modeling.",
    results: [
      "Real-time collaboration for teams",
      "Drag-and-drop task organization",
      "Complete project analytics",
      "Mobile-responsive interface",
    ],
    image: "/projects/task-app.png",
    images: ["/projects/task-app-1.png", "/projects/task-app-2.png"],
    tags: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
    category: "fullstack",
    link: "https://task-manager.vercel.app",
    github: "https://github.com/yourusername/task-manager",
    featured: false,
    year: "2024",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Beautiful weather forecast application with animations",
    longDescription:
      "An elegant weather dashboard providing detailed forecasts, interactive maps, and beautiful visualizations. Features smooth animations and intuitive data presentation.",
    challenge:
      "Presenting complex weather data in an accessible, visually appealing way while maintaining fast load times.",
    solution:
      "Designed custom data visualizations, implemented efficient API caching, and created smooth transition animations between weather states.",
    results: [
      "Intuitive weather data presentation",
      "Smooth animated transitions",
      "Location-based forecasts",
      "Offline data caching",
    ],
    image: "/projects/weather.png",
    images: ["/projects/weather-1.png", "/projects/weather-2.png"],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "API Integration",
    ],
    category: "frontend",
    link: "https://weather-dashboard.vercel.app",
    github: "https://github.com/yourusername/weather-dashboard",
    featured: false,
    year: "2024",
  },
  {
    id: "blog-platform",
    title: "Modern Blog Platform",
    description: "SEO-optimized blog platform with markdown support",
    longDescription:
      "A full-featured blogging platform with markdown support, syntax highlighting, SEO optimization, and a beautiful reading experience. Built for speed and discoverability.",
    challenge:
      "Creating a blog platform that ranks well in search engines while providing an excellent reading experience and easy content management.",
    solution:
      "Implemented static generation for blog posts, comprehensive SEO meta tags, structured data markup, and optimized image loading.",
    results: [
      "100 SEO score on Lighthouse",
      "Sub-1s page load times",
      "Full markdown support",
      "Syntax highlighting for code",
      "Automatic sitemap generation",
    ],
    image: "/projects/blog.png",
    images: ["/projects/blog-1.png", "/projects/blog-2.png"],
    tags: ["Next.js", "TypeScript", "MDX", "SEO", "Tailwind CSS"],
    category: "web-app",
    link: "https://blog-platform.vercel.app",
    github: "https://github.com/yourusername/blog-platform",
    featured: false,
    year: "2024",
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// Helper function to get projects by category
export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter((p) => p.category === category);
