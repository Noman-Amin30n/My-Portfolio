import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "ai-chat-platform",
    title: "AI Chat Platform",
    description:
      "An AI-powered chat application with context-aware conversations",
    longDescription:
      "A modern chat platform integrating generative AI for intelligent, context-aware conversations. Built with Next.js 16, featuring real-time messaging, and AI-powered response generation.",
    challenge:
      "Creating a seamless chat experience that maintains context across conversations while ensuring fast response times and scalability.",
    solution:
      "Implemented efficient context management using Vercel AI SDK, optimized prompts for better responses",
    results: [
      "Sub-second response times for AI messages",
      "Scalable architecture supporting concurrent users",
      "Intuitive UI with real-time updates",
    ],
    image: "/projects/ai-chat-1.png",
    images: [
      "/projects/ai-chat-1.png",
      "/projects/ai-chat-2.png",
    ],
    tags: ["Next.js", "TypeScript", "AI", "Vercel AI SDK"],
    category: "ai",
    link: "https://ai-chats-next.vercel.app/",
    github: "https://github.com/Noman-Amin30n/AI-Chats-Next",
    featured: true,
    year: "2025",
  },
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce with Dashboard",
    description: "Full-stack e-commerce store with admin dashboard for store management",
    longDescription:
      "A comprehensive e-commerce store with admin dashboard for managing e-commerce operations, including product management, order tracking, analytics, and customer management. Built with modern technologies for optimal performance.",
    challenge:
      "Building a e-store with admin dashboard that handles large datasets efficiently while providing real-time updates and an intuitive interface for managing complex e-commerce operations.",
    solution:
      "Implemented efficient data fetching strategies, server-side rendering for better performance, and real-time updates using API polling. Created reusable components for consistent UI.",
    results: [
      "Handles 10,000+ products smoothly",
      "Real-time order tracking and updates",
      "Comprehensive analytics with charts",
      "Responsive design for mobile management",
    ],
    image: "/projects/ecommerce.png",
    images: ["/projects/ecommerce-1.png", "/projects/ecommerce-2.png", "/projects/ecommerce-3.png", "/projects/ecommerce-4.png"],
    tags: ["React", "Next.js", "TypeScript", "MongoDB"],
    category: "fullstack",
    link: "https://ecommerce-next-seven-alpha.vercel.app/",
    github: "https://github.com/Noman-Amin30n/Ecommerce_Next",
    featured: true,
    year: "2025",
  },
  {
    id: "code-snippets-manager",
    title: "Code Snippets Manager",
    description: "Full-stack snippet management platform with syntax highlighting",
    longDescription:
      "A comprehensive platform for developers to create, and manage code snippets. Features include secure user authentication, a powerful code editor with syntax highlighting for multiple languages, and full CRUD functionality.",
    challenge:
      "Building a performant code editor that supports various programming languages while ensuring data persistence and secure user access.",
    solution:
      "Utilized Monaco Editor for the core editing experience, implemented Next Auth for authentication, and used MongoDB for efficient database operations and snippet management.",
    results: [
      "Syntax highlighting for different languages",
      "Secure user authentication and authorization",
      "Real-time snippet management (CRUD)",
      "Clean, intuitive developer interface",
    ],
    image: "/projects/snippets.png",
    images: [
      "/projects/snippets-1.png",
      "/projects/snippets-2.png",
    ],
    tags: ["Next.js", "TypeScript", "Monaco Editor", "Next Auth", "MongoDB"],
    category: "fullstack",
    link: "https://snippets-app-dun.vercel.app/",
    github: "https://github.com/Noman-Amin30n/Snippets-app",
    featured: true,
    year: "2025",
  },
  {
    id: "amazon-homepage-clone",
    title: "Amazon Homepage Clone",
    description: "Pixel-perfect Amazon homepage recreation using vanilla technologies",
    longDescription:
      "A comprehensive frontend project focused on replicating the complex layout and interactive elements of the Amazon homepage. This project emphasizes CSS mastery and vanilla JavaScript functionality.",
    challenge:
      "Recreating a highly complex, responsive layout with multiple nested components and interactive elements without the aid of modern frameworks.",
    solution:
      "Leveraged advanced CSS Grid and Flexbox techniques for the layout, and implemented custom JavaScript for the hero slider and navigation dropdowns.",
    results: [
      "Fully responsive layout across all devices",
      "Interactive hero image carousel",
      "Complex multi-level navigation menu",
      "Optimized performance with vanilla JS",
    ],
    image: "/projects/amazon.png",
    images: ["/projects/amazon.png"],
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    link: "https://amazon-rosy-three.vercel.app/",
    github: "https://github.com/Noman-Amin30n/Amazon-clone",
    featured: false,
    year: "2025",
  },
  {
    id: "gmail-clone",
    title: "Gmail Inbox Clone",
    description: "Pixel-perfect Gmail inbox recreation using HTML, CSS and JavaScript",
    longDescription:
      "A detailed frontend project focused on replicating the Gmail inbox interface. This project emphasizes CSS layout techniques, sidebar navigation, and responsive design using HTML, CSS and JavaScript.",
    challenge:
      "Recreating the complex, multi-pane layout of Gmail with its specific spacing, icons, and interactive hover states.",
    solution:
      "Utilized CSS Grid for the main layout structure and Flexbox for individual components. Implemented JavaScript for dynamic interactions and UI state management.",
    results: [
      "Responsive multi-pane layout",
      "Accurate Gmail styling and iconography",
      "Interactive sidebar and email list items",
      "Dynamic UI updates with JavaScript",
    ],
    image: "/projects/gmail.png",
    images: ["/projects/gmail.png"],
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    link: "https://smit-assignments-delta.vercel.app/HTML/gmail/index.html",
    github: "https://github.com/Noman-Amin30n/SMIT-Assignments/tree/main/HTML/gmail",
    featured: false,
    year: "2025",
  },
  {
    id: "landing-page",
    title: "Modern Landing Page",
    description: "Responsive landing page with Bootstrap carousel integration",
    longDescription:
      "A professional landing page designed for high conversion, featuring a responsive layout and a Bootstrap slider in the hero section. Built using HTML, CSS, and Bootstrap for a polished look and feel.",
    challenge:
      "Implementing a dynamic hero section using Bootstrap while maintaining a unique design language through custom CSS overrides.",
    solution:
      "Leveraged Bootstrap's carousel component, enhanced with custom CSS for typography, spacing, and brand-specific styling.",
    results: [
      "Fully responsive hero slider",
      "Clean, professional aesthetic",
      "Optimized for mobile and desktop",
      "Fast loading and SEO friendly",
    ],
    image: "/projects/landing-page.png",
    images: ["/projects/landing-page.png"],
    tags: ["HTML", "CSS", "Bootstrap"],
    category: "frontend",
    link: "https://smit-assignments-delta.vercel.app/HTML/landing%20page%201/index.html",
    github: "https://github.com/Noman-Amin30n/SMIT-Assignments/tree/main/HTML/landing%20page%201",
    featured: false,
    year: "2025",
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// Helper function to get projects by category
export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter((p) => p.category === category);
