"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function PageLoader() {
  const isReduced = useReducedMotion();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Optimized 1.0s splash screen duration to drastically improve mobile PageSpeed LCP/FCP metrics
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isReduced) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
          className="hidden lg:flex fixed inset-0 z-[99999] flex-col items-center justify-center bg-brand-deepBrown"
        >
          <div className="text-center flex flex-col items-center max-w-sm px-6">
            {/* Logo image styled as a premium gold-rimmed textured plaque */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, y: -30, rotateX: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative w-[220px] h-[200px] mb-6 rounded-3xl overflow-hidden border-2 border-brand-gold shadow-2xl bg-brand-charcoal"
            >
              <Image
                src="/logo.png"
                alt="Advait Skyline Premium Logo Plaque"
                fill
                priority
                sizes="220px"
                className="object-cover"
              />
            </motion.div>

            {/* Tagline fading up with a 0.8s delay after logo settles */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              className="text-brand-copper font-body text-xs font-semibold uppercase tracking-[0.25em]"
            >
              Elevate Your Everyday
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
