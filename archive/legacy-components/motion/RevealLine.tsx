"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface RevealLineProps {
  className?: string;
  width?: string;
}

export default function RevealLine({ className = "", width = "w-24" }: RevealLineProps) {
  const isReduced = useReducedMotion();

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  if (isReduced) {
    return <div className={`h-[1px] bg-brand-copper ${width} ${className}`} />;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={lineVariants}
      style={{ originX: 0 }}
      className={`h-[1px] bg-brand-copper ${width} ${className}`}
    />
  );
}
