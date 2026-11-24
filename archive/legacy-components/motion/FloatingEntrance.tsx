"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface FloatingEntranceProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FloatingEntrance({
  children,
  delay = 0,
  className = "",
}: FloatingEntranceProps) {
  const isReduced = useReducedMotion();

  const variants = isReduced
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.3, delay },
        },
      }
    : {
        hidden: { opacity: 0, y: 60, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
            delay: delay,
          },
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
