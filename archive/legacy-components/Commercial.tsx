"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Stethoscope,
  Store,
  Utensils,
  Dumbbell,
  ShoppingBag,
  Gem,
  Landmark,
  GraduationCap,
  Scissors,
  Coffee,
} from "lucide-react";
import RevealLine from "@/components/motion/RevealLine";
import FloatingEntrance from "@/components/motion/FloatingEntrance";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const USE_CASES = [
  { icon: Briefcase, label: "Corporate Office" },
  { icon: Stethoscope, label: "Modern Hospital" },
  { icon: Store, label: "Premium Showroom" },
  { icon: Utensils, label: "Luxury Restaurant" },
  { icon: Dumbbell, label: "Fitness Gym" },
  { icon: ShoppingBag, label: "Super Market" },
  { icon: Gem, label: "Jewellery Shop" },
  { icon: Landmark, label: "National Bank" },
  { icon: GraduationCap, label: "Tuition Classes" },
  { icon: Scissors, label: "Styling Saloon" },
  { icon: Coffee, label: "Dairy & Café Shop" },
];

export default function Commercial() {
  const isReduced = useReducedMotion();

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="bg-brand-primaryBrown py-24 relative overflow-hidden text-white">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-copper/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-deepBrown/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column - Shopfront Render Image (45% space) */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center w-full">
          <FloatingEntrance delay={0.1} className="w-full max-w-[420px]">
            <motion.div
              variants={isReduced ? {} : floatVariants}
              animate="animate"
              className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <Image
                src="/commercial-bg.jpg"
                alt="Advait Skyline Premium Commercial Shopfront Render"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                loading="lazy"
                className="object-cover"
              />
              {/* Golden metallic gradient tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deepBrown/60 via-brand-primaryBrown/15 to-transparent z-10" />
            </motion.div>
          </FloatingEntrance>
        </div>

        {/* Right Column - Copy & Grid (55% space) */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
          {/* Section Divider Reveal */}
          <RevealLine className="mb-4 bg-brand-copper" width="w-24" />

          {/* Heading */}
          <FloatingEntrance delay={0.2}>
            <h2 className="text-white text-section-h2 mb-6 font-display font-semibold">
              The New Edge of Commercial Opportunity
            </h2>
          </FloatingEntrance>

          {/* Body Paragraph */}
          <FloatingEntrance delay={0.3}>
            <p className="text-brand-cream/90 text-body-custom mb-10 max-w-2xl leading-relaxed">
              Whether you are expanding a proprietary brand storefront or seeking high-yield capital
              appreciation, our street-facing G+1 retail and commercial zone is built to deliver.
              Advait Skyline leverages massive regional commuter footfall at the Naroli–Bhilad Checkpost,
              offering your business premium roadside exposure, modern glass facades, high ceilings,
              and dedicated customer parking slots.
            </p>
          </FloatingEntrance>

          {/* Use Case Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {USE_CASES.map((uc, idx) => {
              const IconComp = uc.icon;
              return (
                <FloatingEntrance key={idx} delay={0.15 + idx * 0.05}>
                  <motion.div
                    whileHover={{
                      backgroundColor: "rgba(196, 132, 58, 0.35)", // brand.copper/35
                      borderColor: "#C4843A", // brand.copper
                      scale: isReduced ? 1 : 1.04,
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-3 rounded-full cursor-pointer hover-trigger shadow-sm"
                  >
                    <div className="text-brand-gold">
                      <IconComp size={16} />
                    </div>
                    <span className="text-white font-body text-xs font-semibold tracking-wide">
                      {uc.label}
                    </span>
                  </motion.div>
                </FloatingEntrance>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
