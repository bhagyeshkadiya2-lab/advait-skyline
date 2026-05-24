"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const isReduced = useReducedMotion();

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25 
          }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 p-3.5 rounded-full bg-brand-primaryBrown/90 hover:bg-brand-copper text-white border border-brand-gold/40 backdrop-blur-sm shadow-xl hover:shadow-[0_0_20px_rgba(201,151,58,0.5)] transition-colors duration-300 hover-trigger group focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
          aria-label="Scroll to top"
        >
          {/* subtle bounce arrow on hover */}
          <motion.div
            animate={isReduced ? {} : { y: [0, -3, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center justify-center text-white"
          >
            <ArrowUp size={20} className="stroke-[2.5]" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
