"use client";

import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticCard({
  children,
  className = "",
  onClick,
}: MagneticCardProps) {
  const isReduced = useReducedMotion();

  const hoverEffect = isReduced
    ? {}
    : {
        y: -8,
        scale: 1.02,
      };

  return (
    <motion.div
      whileHover={hoverEffect}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`${className} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
