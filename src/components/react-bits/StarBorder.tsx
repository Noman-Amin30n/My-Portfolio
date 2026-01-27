"use client";
import React from "react";

type StarBorderProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  color?: string;
  speed?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T>) => {
  const Component = as || "button";
  return (
    <Component
      className={`relative inline-block py-px overflow-hidden rounded-[20px] ${className}`}
      {...props}
    >
      <div
        className="absolute inset-0 w-[300%] h-[300%] opacity-70 animate-star-movement -left-full -top-full rounded-[20px]"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 50%, ${color} 100%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-10 bg-card border border-border text-foreground rounded-[20px] w-full h-full">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
