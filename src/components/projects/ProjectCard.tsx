"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/types";
import StarBorder from "@/components/react-bits/StarBorder";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      <div className={`relative h-full ${project.featured ? "p-[1px]" : ""}`}>
        {project.featured && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden -z-10">
            <div className="absolute inset-0 w-[200%] h-[200%] animate-star-movement -left-[50%] -top-[50%] bg-gradient-to-br from-transparent via-primary/50 to-transparent opacity-70"></div>
          </div>
        )}

        {project.featured ? (
          <StarBorder
            className="h-full w-full !p-0 !bg-transparent rounded-2xl"
            color="var(--pk-primary)"
            speed="5s"
          >
            <div className="bg-card rounded-[19px] overflow-hidden shadow-card hover:shadow-float transition-all h-full flex flex-col items-start text-left w-full">
              <CardContent
                project={project}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                hasMultipleImages={hasMultipleImages}
              />
            </div>
          </StarBorder>
        ) : (
          <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-float transition-all hover:-translate-y-2 h-full flex flex-col border border-border/50">
            <CardContent
              project={project}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              hasMultipleImages={hasMultipleImages}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

const CardContent = ({
  project,
  isHovered,
  hasMultipleImages,
}: {
  project: Project;
  isHovered: boolean;
  setIsHovered?: React.Dispatch<React.SetStateAction<boolean>>;
  hasMultipleImages: boolean;
}) => (
  <>
    {/* Project Image/Slider */}
    <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/10 via-peach/10 to-lavender/20 w-full">
      {hasMultipleImages ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="h-full w-full project-swiper"
        >
          {project.images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={
              project.image || project.images[0] || "/placeholder-project.png"
            }
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 z-30 ${
          isHovered
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg bg-card/90 hover:bg-card transition-colors border border-border/20"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5 text-foreground" />
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg bg-card/90 hover:bg-card transition-colors border border-border/20"
              aria-label="View Live Site"
            >
              <ExternalLink className="w-5 h-5 text-foreground" />
            </Link>
          )}
        </div>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold shadow-lg z-10">
          ⭐ Featured
        </div>
      )}
    </div>

    {/* Project Info */}
    <div className="p-6 flex-1 flex flex-col w-full">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs text-muted-foreground">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* View Details Button */}
      <Link href={`/projects/${project.id}`} className="w-full">
        <Button variant="outline" size="sm" className="w-full group/btn">
          View Details
          <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  </>
);
