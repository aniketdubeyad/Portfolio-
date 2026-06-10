"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
};

export function GlassCard({ children, className, interactive = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn("glass overflow-hidden rounded-3xl", className)}
      whileHover={interactive ? { y: -6, rotateX: 1.5, rotateY: -1.5 } : undefined}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      onMouseMove={(event) => {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        target.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }}
    >
      {children}
    </motion.div>
  );
}
