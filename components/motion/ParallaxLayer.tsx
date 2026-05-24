"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed: number; // e.g. 0.3 for slow background, 0.15 for medium building, 0 for foreground
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed,
  className = "",
}: ParallaxLayerProps) {
  const isReduced = useReducedMotion();
  const { scrollY } = useScroll();

  // Maps scrollY position directly to translation coordinates to prevent layout reflows
  const y = useTransform(scrollY, (latest) => (isReduced ? 0 : latest * speed));

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
