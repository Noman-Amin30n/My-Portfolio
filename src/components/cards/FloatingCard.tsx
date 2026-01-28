"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  icon?: string;
  className?: string;
  delay?: number;
}

export default function FloatingCard({
  children,
  title,
  description,
  icon,
  className,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={cn("group", className)}
    >
      <Card className="h-full border-0">
        {(title || icon) && (
          <CardHeader>
            {icon && (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[120px] h-auto rounded-lg"
              >
                <source src={icon} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}
            {title && <CardTitle>{title}</CardTitle>}
            {description && (
              <CardDescription className="mt-2">{description}</CardDescription>
            )}
          </CardHeader>
        )}
        {children && <CardContent>{children}</CardContent>}
      </Card>
    </motion.div>
  );
}
