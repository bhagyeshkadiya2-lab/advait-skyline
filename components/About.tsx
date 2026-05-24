"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import RevealLine from "@/components/motion/RevealLine";
import FloatingEntrance from "@/components/motion/FloatingEntrance";
import MagneticCard from "@/components/motion/MagneticCard";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Honesty in Commitment",
    desc: "Complete transparency in RERA filings, specifications, and timelines.",
  },
  {
    icon: Sparkles,
    title: "Premium Construction",
    desc: "Uncompromising build quality, earthquake-resistant RCC, and luxury fittings.",
  },
  {
    icon: TrendingUp,
    title: "Future-Value Planning",
    desc: "Located strategically at the D&NH checkpost, yielding strong asset appreciation.",
  },
];

export default function About() {
  const isReduced = useReducedMotion();

  // Floating continuous loop variants
  const floatVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column - 60% Space on Large screens */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Copper Reveal Line */}
          <RevealLine className="mb-4" width="w-24" />

          {/* Heading */}
          <FloatingEntrance delay={0.1}>
            <h2 className="text-brand-primaryBrown text-section-h2 mb-6 font-display font-semibold">
              A Complete Destination for Living & Business
            </h2>
          </FloatingEntrance>

          {/* Body Paragraphs */}
          <FloatingEntrance delay={0.2}>
            <div className="text-brand-charcoal text-body-custom space-y-6 mb-12">
              <p>
                Rising majestically in the heart of the strategic Naroli–Bhilad region,{" "}
                <strong className="text-brand-primaryBrown font-semibold">Advait Skyline</strong>{" "}
                represents a visionary residential and commercial development by Dhanasvi Infra.
                Designed for those who seek high-value lifestyle upgrades, our premium 1 & 2 BHK
                apartments combine refined aesthetics with thoughtful structural utility.
              </p>
              <p>
                Whether you want to build a peaceful sanctuary for your family or establish a
                high-visibility storefront at a bustling intersection, this project matches your
                highest goals. Discover a rich, active community complete with 39+ world-class amenities,
                designed with durability, beauty, and absolute precision.
              </p>
            </div>
          </FloatingEntrance>

          {/* 3 Principle Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {PRINCIPLES.map((princ, idx) => {
              const IconComponent = princ.icon;
              return (
                <FloatingEntrance key={idx} delay={0.3 + idx * 0.1}>
                  <MagneticCard className="h-full bg-white border border-brand-copper/30 hover:border-brand-copper p-6 rounded-2xl transition-all duration-300 flex flex-col items-start shadow-sm hover:shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-copper mb-4">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-brand-primaryBrown font-body text-base font-bold mb-2">
                      {princ.title}
                    </h3>
                    <p className="text-brand-charcoal/80 font-body text-sm leading-relaxed">
                      {princ.desc}
                    </p>
                  </MagneticCard>
                </FloatingEntrance>
              );
            })}
          </div>
        </div>

        {/* Right Column - 40% Space on Large screens */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <FloatingEntrance delay={0.3} className="w-full max-w-[420px]">
            <motion.div
              variants={isReduced ? {} : floatVariants}
              animate="animate"
              className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50"
            >
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Advait Skyline Majestic Aerial View Render"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deepBrown/50 via-transparent to-transparent" />
            </motion.div>
          </FloatingEntrance>
        </div>
      </div>
    </section>
  );
}
