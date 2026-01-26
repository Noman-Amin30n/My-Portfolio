// Core data types for the portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  image: string;
  images: string[];
  tags: string[];
  category: "web-app" | "ai" | "frontend" | "fullstack" | "other";
  link?: string;
  github?: string;
  featured: boolean;
  year?: string;
  client?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // emoji
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "ai" | "tools" | "design";
  icon?: string;
  proficiency?: number; // 1-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface WorkHistory {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}
