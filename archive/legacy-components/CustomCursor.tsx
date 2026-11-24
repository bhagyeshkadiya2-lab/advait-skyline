"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function CustomCursor() {
  const isReduced = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Custom spring mechanics for trailing inertia
  const springConfig = { damping: 35, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable on touch screens (tablets, mobiles)
    const isTouch = window.matchMedia("(max-pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);
    document.documentElement.classList.add("has-custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      // Offset position by half of cursor width/height to center it on the tip
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    // Statically detect button/anchor elements and triggers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest(".hover-trigger");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [mouseX, mouseY]);

  if (isReduced || !isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        width: isHovered ? 40 : 20,
        height: isHovered ? 40 : 20,
        backgroundColor: isHovered ? "rgba(196, 132, 58, 0.85)" : "rgba(196, 132, 58, 0.4)", // copper/85 vs copper/40
        // Seamlessly adjust alignment margins as cursor size increases
        marginLeft: isHovered ? -10 : 0,
        marginTop: isHovered ? -10 : 0,
      }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border border-brand-gold/30 mix-blend-difference"
      animate={{
        scale: 1,
      }}
      transition={{ type: "spring", stiffness: 450, damping: 25 }}
    />
  );
}
