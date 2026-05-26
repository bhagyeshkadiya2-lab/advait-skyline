"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParallaxLayer from "@/components/motion/ParallaxLayer";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const PARTICLES = [
  { left: "12%", top: "22%", size: 6, duration: 4.8, delay: 0 },
  { left: "28%", top: "48%", size: 4, duration: 5.4, delay: 0.4 },
  { left: "45%", top: "18%", size: 8, duration: 3.9, delay: 0.8 },
  { left: "58%", top: "62%", size: 5, duration: 6.2, delay: 1.2 },
  { left: "72%", top: "32%", size: 7, duration: 4.5, delay: 1.6 },
  { left: "88%", top: "78%", size: 4, duration: 5.2, delay: 2.0 },
  { left: "18%", top: "82%", size: 5, duration: 5.0, delay: 2.4 },
  { left: "32%", top: "68%", size: 8, duration: 5.8, delay: 2.8 },
  { left: "62%", top: "28%", size: 6, duration: 3.6, delay: 3.2 },
  { left: "82%", top: "12%", size: 5, duration: 6.0, delay: 3.6 },
  { left: "92%", top: "42%", size: 7, duration: 4.2, delay: 4.0 },
  { left: "52%", top: "88%", size: 6, duration: 4.8, delay: 4.4 },
];

const STAT_PILLS = [
  { label: "39 Lifestyle Amenities", delay: 0.1 },
  { label: "G+14 Floors", delay: 0.2 },
  { label: "1 & 2 BHK", delay: 0.3 },
  { label: "RERA Registered", delay: 0.4 },
];

export default function Hero() {
  const isReduced = useReducedMotion();

  // Individual words to animate staggered entrance
  const words = ["Elevate", "Your", "Everyday"];

  const wordContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="overview"
      className="relative w-full min-h-[100svh] bg-brand-charcoal"
    >
      {/* LAYER 1: Parallax Background Atmosphere (speed 0.3) */}
      <ParallaxLayer speed={0.3} className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#2C180E] opacity-70" />
        {/* Subtle abstract gold dust overlay (Optimized sizing for mobile performance) - Disabled on mobile (hidden lg:block) to prevent bandwidth downloads */}
        <div 
          className="hidden lg:block absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=75')` }}
        />
      </ParallaxLayer>

      {/* LAYER 2: Parallax Building Render (speed 0.15) */}
      <ParallaxLayer speed={0.15} className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="Advait Skyline Premium Residential Skyscraper Render"
          fill
          priority
          sizes="(max-width: 768px) 480px, 100vw"
          className="object-cover object-center"
        />
        {/* Ambient Gradient Overlay: Darker deep brown at bottom, fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deepBrown via-brand-deepBrown/40 to-transparent z-15" />
        {/* Responsive Premium Left-to-Right & Top-to-Bottom Shadow Vignette: Darkens background strictly behind the text overlay while keeping the building render and sunset sky bright and beautiful */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/75 via-brand-charcoal/45 to-brand-charcoal/80 lg:bg-gradient-to-r lg:from-brand-charcoal/90 lg:via-brand-charcoal/40 lg:to-transparent z-15" />
      </ParallaxLayer>

      {/* FLOATING PARTICLES (staggered weightless dots) - Disabled on mobile (hidden lg:block) to optimize CPU/Speed Index */}
      {!isReduced && (
        <div className="hidden lg:block absolute inset-0 w-full h-full z-20 pointer-events-none">
          {PARTICLES.map((p, idx) => (
            <motion.div
              key={idx}
              style={{
                position: "absolute",
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                backgroundColor: "#C9973A", // brand.gold
                borderRadius: "50%",
                opacity: 0.3,
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* LAYER 3: Foreground Text Content */}
      <div className="relative w-full min-h-[100dvh] lg:min-h-0 lg:h-full flex flex-col justify-between z-30 max-w-7xl mx-auto px-6 pt-24 pb-8 lg:pt-24 lg:pb-6">
        <div className="flex-1 flex flex-col justify-center items-start max-w-3xl lg:max-w-4xl xl:max-w-5xl py-2 lg:py-0">
          {/* MAHA RERA Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mb-3 lg:mb-4 bg-brand-primaryBrown/40 border border-brand-gold/30 backdrop-blur px-4 py-1.5 rounded-full inline-flex items-center"
          >
            <span className="text-brand-gold font-body text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">
              MAHA RERA · PM3000002600013
            </span>
          </motion.div>

          {/* Styled Brand Tagline Sub-header */}
          <motion.h2
            variants={wordContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-brand-cream text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight mb-2 tracking-tight flex flex-wrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {words.map((word, index) => (
              <span 
                key={index} 
                className="inline-block overflow-hidden pb-1 mr-2 md:mr-3"
              >
                <motion.span
                  variants={wordVariants}
                  className={`inline-block font-display font-bold ${
                    word === "Everyday" ? "text-brand-gold" : ""
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          {/* High-Impact SEO H1 Main Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-display font-extrabold tracking-tight leading-[1.15] mb-4 lg:mb-5 text-left drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)]"
          >
            Premium 1 & 2 BHK Homes & Shops <br className="hidden md:inline" />
            <span className="text-brand-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">at Naroli–Bhilad, Dadra & Nagar Haveli</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.95 }}
            className="text-brand-cream font-body text-xs md:text-sm lg:text-base font-semibold tracking-widest uppercase mb-5 lg:mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Peaceful Living, Smart Investment
          </motion.p>

          {/* Side-by-side Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
            className="flex flex-wrap gap-3 lg:gap-4"
          >
            <a href="#about" className="hover-trigger">
              <motion.button
                whileHover={{ y: -4, scale: 1.03 }}
                className="bg-brand-copper hover:bg-brand-copper/90 text-white font-body text-xs md:text-sm font-bold uppercase tracking-wider px-6 py-3 lg:px-8 lg:py-3.5 rounded-full shadow-xl transition-all duration-300"
              >
                Explore Project
              </motion.button>
            </a>

            <a href="#floorplans" className="hover-trigger">
              <motion.button
                whileHover={{ y: -4, scale: 1.03 }}
                className="border border-brand-cream text-brand-cream hover:bg-white/10 font-body text-xs md:text-sm font-bold uppercase tracking-wider px-6 py-3 lg:px-8 lg:py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm"
              >
                View Floor Plans
              </motion.button>
            </a>

            <a
              href="https://wa.me/919909062363?text=Hello%2C%20I%20am%20interested%20in%20Advait%20Skyline%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="hover-trigger"
            >
              <motion.button
                whileHover={{ y: -4, scale: 1.03 }}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-body text-xs md:text-sm font-bold uppercase tracking-wider px-6 py-3 lg:px-8 lg:py-3.5 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.012 14.096.993 11.474.993c-5.462 0-9.911 4.412-9.915 9.841-.001 1.737.478 3.43 1.387 4.935L1.878 20.3l4.769-1.248zM17.487 14.4c-.327-.162-1.928-.94-2.224-1.047-.297-.108-.512-.162-.729.162-.217.324-.838 1.047-1.028 1.262-.19.216-.381.243-.709.082-.327-.162-1.382-.505-2.633-1.611-.973-.865-1.63-1.933-1.82-2.257-.19-.324-.02-.499.143-.66.147-.144.327-.378.49-.567.163-.189.217-.324.327-.54.109-.216.054-.405-.027-.567-.08-.162-.729-1.74-.997-2.39-.263-.629-.53-.54-.729-.55l-.62-.01c-.217 0-.569.081-.866.405-.297.324-1.135 1.107-1.135 2.7s1.162 3.132 1.325 3.348c.163.216 2.288 3.467 5.541 4.853.774.33 1.378.527 1.849.675.779.245 1.488.211 2.049.128.625-.093 1.928-.782 2.2-1.5s.272-1.334.19-1.458c-.08-.124-.296-.217-.624-.378z" />
                </svg>
                WhatsApp Chat
              </motion.button>
            </a>
          </motion.div>

          {/* Mobile Stat Pills Grid (Inline on mobile, hidden on desktop) */}
          <div className="grid grid-cols-2 gap-2 mt-6 w-full lg:hidden">
            {STAT_PILLS.map((pill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] as const,
                  delay: 1.15 + pill.delay,
                }}
                className="bg-brand-charcoal/50 border border-white/20 backdrop-blur-md rounded-full px-4 py-2.5 text-center shadow-lg"
              >
                <span className="text-white font-body text-xs font-semibold tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  {pill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Elements: Scroll Mouse & Stat Pills Strip (Shown only on Desktop) */}
        <div className="hidden lg:flex w-full items-center justify-between gap-6 pt-4 border-t border-white/15 z-40">
          {/* Scroll Mouse Indicator */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1.5 bg-brand-charcoal/30 backdrop-blur-sm">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
            <span className="text-white/80 text-[10px] uppercase font-bold tracking-widest font-body drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)]">
              Scroll to explore
            </span>
          </div>

          {/* Stat Pills Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {STAT_PILLS.map((pill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1] as const,
                  delay: 1.3 + pill.delay,
                }}
                className="bg-brand-charcoal/50 border border-white/25 backdrop-blur-md rounded-full px-5 py-2 hover:bg-brand-charcoal/70 transition-colors shadow-lg"
              >
                <span className="text-white font-body text-xs font-semibold tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  {pill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
