"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floorplans" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isReduced = useReducedMotion();

  // Scroll tracking for logo shrink and backgrounds
  const { scrollY } = useScroll();
  
  // Smoothly maps scroll offset [0 to 100] to a scale [1.0 down to 0.7]
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.7]);
  const logoY = useTransform(scrollY, [0, 100], [0, -2]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stagger entry configurations for mobile drawer
  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" as const },
        opacity: { duration: 0.2 },
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: isScrolled ? "#6B3A1F" : "rgba(107, 58, 31, 0)",
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.15)" : "none",
        }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all ${
          isScrolled ? "backdrop-blur-md py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo container styled as a premium compact gold-rimmed plaque */}
          <a href="#overview" className="flex items-center gap-2 hover-trigger">
            <motion.div
              style={{
                scale: isReduced ? 1 : logoScale,
                y: isReduced ? 0 : logoY,
                transformOrigin: "left center",
              }}
              className="relative w-[44px] h-[40px] rounded-lg overflow-hidden border border-brand-gold shadow-md bg-brand-charcoal transition-all duration-300"
            >
              <Image
                src="/logo.png"
                alt="Advait Skyline Logo"
                fill
                priority
                sizes="44px"
                className="object-cover"
              />
            </motion.div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-white font-body text-sm font-medium tracking-wide uppercase group py-1 hover-trigger"
              >
                {item.label}
                {/* Horizontal line expanding from left */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-copper transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right CTA Button & Hamburger */}
          <div className="flex items-center gap-4">
            <a href="tel:+919909062363" className="hover-trigger" aria-label="Call to book a site visit at Advait Skyline">
              <motion.button
                whileHover={{ scale: isReduced ? 1 : 1.05 }}
                whileTap={{ scale: isReduced ? 1 : 0.97 }}
                className="hidden md:flex items-center gap-2 bg-brand-copper text-white font-body text-xs font-semibold uppercase tracking-wider rounded-full px-6 py-2.5 shadow-lg border border-brand-copper/30 transition-all duration-300 hover:bg-brand-copper/90"
              >
                <PhoneCall size={14} className="text-white" />
                Book a Visit
              </motion.button>
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white hover-trigger p-2 focus:outline-none focus:ring-1 focus:ring-brand-copper/40 rounded"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="absolute top-full left-0 right-0 w-full bg-brand-deepBrown border-t border-brand-primaryBrown/20 shadow-2xl overflow-hidden lg:hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.label} variants={itemVariants}>
                    <a
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block text-white font-body text-base font-semibold tracking-wide uppercase hover:text-brand-copper transition-colors py-2 border-b border-white/5"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-2">
                  <a href="tel:+919909062363" onClick={() => setIsMobileOpen(false)} aria-label="Call to book a site visit at Advait Skyline">
                    <button className="w-full flex items-center justify-center gap-3 bg-brand-copper text-white font-body text-sm font-bold uppercase tracking-widest rounded-full py-3.5 shadow-md">
                      <PhoneCall size={16} />
                      Book a Visit
                    </button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
