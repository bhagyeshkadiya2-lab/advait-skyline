"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RevealLine from "@/components/motion/RevealLine";
import FloatingEntrance from "@/components/motion/FloatingEntrance";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type TabType = "1bhk" | "2bhk";

const FLOOR_PLANS_DATA = {
  "1bhk": {
    title: "Premium 1 BHK Residence",
    carpetArea: "485 Sq. Ft.",
    isometricImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    layoutImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
    dimensions: [
      { name: "Bedroom", size: "10'0\" × 11'0\"" },
      { name: "Living Hall", size: "10'0\" × 15'9\"" },
      { name: "Kitchen", size: "8'9\" × 7'0\"" },
      { name: "Balcony", size: "4'0\" Wide" },
      { name: "Toilets", size: "2 Units (Bath + WC)" },
      { name: "Foyer Entry", size: "4'0\" × 4'0\"" },
    ],
    features: ["2 AC Points", "False Ceiling Lights", "Bigger Balcony", "Ample Storage Area"],
  },
  "2bhk": {
    title: "Luxury 2 BHK Residence",
    carpetArea: "720 Sq. Ft.",
    isometricImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80",
    layoutImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80",
    dimensions: [
      { name: "Master Bedroom", size: "10'9\" × 10'0\"" },
      { name: "Common Bedroom", size: "9'0\" × 10'0\"" },
      { name: "Grand Living Hall", size: "16'0\" × 10'6\"" },
      { name: "Modular Kitchen", size: "9'0\" × 7'0\"" },
      { name: "Bigger Balcony", size: "5'6\" Wide" },
      { name: "Attached Toilets", size: "2 Luxurious Units" },
    ],
    features: ["3 AC Points", "Recessed Ceiling Lights", "Wide Sundeck Balcony", "Premium Walk-in Nook"],
  },
};

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState<TabType>("1bhk");
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const isReduced = useReducedMotion();

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab) return;
    setDirection(tab === "2bhk" ? 1 : -1);
    setActiveTab(tab);
  };

  // Sliding configurations for tab content transition
  const tabVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 28 },
        opacity: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 28 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const activeData = FLOOR_PLANS_DATA[activeTab];

  return (
    <section id="floorplans" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <RevealLine className="mb-4 mx-auto" width="w-24" />
          <FloatingEntrance delay={0.1}>
            <h2 className="text-brand-primaryBrown text-section-h2 mb-6 font-display font-semibold">
              Thoughtfully Designed Spaces
            </h2>
          </FloatingEntrance>

          {/* Toggle pills */}
          <FloatingEntrance delay={0.2} className="relative z-10">
            <div className="bg-brand-primaryBrown/10 border border-brand-copper/20 p-1.5 rounded-full inline-flex">
              <button
                onClick={() => handleTabChange("1bhk")}
                className={`px-8 py-2.5 rounded-full font-body text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover-trigger ${
                  activeTab === "1bhk"
                    ? "bg-brand-primaryBrown text-white shadow-md"
                    : "text-brand-primaryBrown/70 hover:text-brand-primaryBrown"
                }`}
              >
                1 BHK
              </button>
              <button
                onClick={() => handleTabChange("2bhk")}
                className={`px-8 py-2.5 rounded-full font-body text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover-trigger ${
                  activeTab === "2bhk"
                    ? "bg-brand-primaryBrown text-white shadow-md"
                    : "text-brand-primaryBrown/70 hover:text-brand-primaryBrown"
                }`}
              >
                2 BHK
              </button>
            </div>
          </FloatingEntrance>
        </div>

        {/* Tab Content wrapped in AnimatePresence for slide animations */}
        <div className="min-h-[580px] relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              variants={isReduced ? {} : tabVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* 3D Plan (7 cols on Desktop) */}
              <div className="lg:col-span-7 flex flex-col items-center">
                <FloatingEntrance delay={0.15} className="w-full">
                  <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-white border border-brand-copper/15">
                    <Image
                      src={activeData.isometricImage}
                      alt={`${activeData.title} 3D Isometric Rendering`}
                      fill
                      sizes="(max-width: 768px) 100vw, 680px"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-brand-primaryBrown text-white px-4 py-1.5 rounded-full">
                      <span className="text-[10px] md:text-xs font-semibold tracking-wider font-body uppercase">
                        3D Perspective View
                      </span>
                    </div>
                  </div>
                </FloatingEntrance>
              </div>

              {/* Specs & Dimensions (5 cols on Desktop) */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <span className="text-brand-copper text-label-caps text-xs tracking-widest font-bold mb-2">
                  Carpet Area: {activeData.carpetArea}
                </span>
                <h3 className="text-brand-primaryBrown font-display text-3xl font-bold mb-6">
                  {activeData.title}
                </h3>

                {/* Dimensions List with Left copper borders */}
                <div className="w-full flex flex-col gap-4 mb-8">
                  {activeData.dimensions.map((dim, idx) => (
                    <div
                      key={idx}
                      className="pl-4 border-l-2 border-brand-copper/60 flex items-center justify-between py-1 bg-white/30 rounded-r-lg hover:bg-white/50 transition-colors"
                    >
                      <span className="text-brand-charcoal font-body text-sm font-semibold">
                        {dim.name}
                      </span>
                      <span className="text-brand-primaryBrown font-body text-xs md:text-sm font-bold pr-4">
                        {dim.size}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Badges strip below */}
                <div className="flex flex-wrap gap-2.5 mb-10 w-full">
                  {activeData.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-brand-charcoal border border-brand-copper/20 rounded-full px-4 py-1.5 font-body text-[10px] md:text-xs font-semibold shadow-sm hover:border-brand-copper transition-colors"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Smaller 2D Layout Blueprint */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full pt-6 border-t border-brand-copper/15">
                  <div className="flex flex-col items-start max-w-sm">
                    <span className="text-brand-primaryBrown font-body text-xs font-bold uppercase tracking-wider mb-2">
                      2D Blueprint
                    </span>
                    <p className="text-brand-charcoal/70 font-body text-xs leading-relaxed">
                      Optimized layout prioritizing natural cross-ventilation & spacious foyer entry.
                    </p>
                  </div>
                  <div className="relative w-full sm:w-36 h-36 sm:h-24 rounded-xl overflow-hidden border border-brand-copper/20 shadow-sm sm:ml-auto bg-white aspect-[16/9] sm:aspect-auto">
                    <Image
                      src={activeData.layoutImage}
                      alt={`${activeData.title} 2D Layout Blueprint`}
                      fill
                      sizes="(max-width: 640px) 100vw, 144px"
                      className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
