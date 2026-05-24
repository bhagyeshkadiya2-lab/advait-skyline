"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold z-[10000] pointer-events-none"
    />
  );
}
