"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  LayoutGrid,
  ChefHat,
  DoorClosed,
  Grid3X3,
  Zap,
  ArrowUpDown,
  Droplet,
} from "lucide-react";
import RevealLine from "@/components/motion/RevealLine";
import FloatingEntrance from "@/components/motion/FloatingEntrance";
import MagneticCard from "@/components/motion/MagneticCard";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const SPECIFICATIONS_ITEMS = [
  {
    icon: Building2,
    title: "Structure",
    desc: "RCC earthquake-resistant framed structural build designed by leading structural consultants.",
  },
  {
    icon: LayoutGrid,
    title: "Flooring",
    desc: "Premium double-charged vitrified floor tiles (800×800mm) with elegant skirting in all rooms.",
  },
  {
    icon: ChefHat,
    title: "Kitchen",
    desc: "Polished granite stone platforms fitted with a premium stainless steel sink and glazed tile dado.",
  },
  {
    icon: DoorClosed,
    title: "Doors",
    desc: "Sturdy polished natural stone frames fitted with high-durability waterproof laminated flush doors.",
  },
  {
    icon: Grid3X3,
    title: "Windows",
    desc: "Powder-coated anodized aluminium sliding windows with high-grade safety grills and mosquito nets.",
  },
  {
    icon: Zap,
    title: "Electrical",
    desc: "Concealed copper wiring with ELCB protection and premium branded modular switches.",
  },
  {
    icon: ArrowUpDown,
    title: "Elevators / Lift",
    desc: "Branded automated high-speed passenger elevator plus one large stretcher lift per building wings.",
  },
  {
    icon: Droplet,
    title: "Plumbing",
    desc: "Concealed internal piping using Astral pipes, complete with premium branded CP fittings.",
  },
];

const BRAND_PARTNERS = [
  { name: "VARMORA", color: "text-rose-600" },
  { name: "L&T", color: "text-blue-700" },
  { name: "RR KABEL", color: "text-red-600" },
  { name: "ARIS", color: "text-amber-600" },
  { name: "ASTRAL PIPES", color: "text-cyan-700" },
  { name: "HAVELLS", color: "text-red-500" },
  { name: "PRINCE PIPES", color: "text-blue-600" },
];

export default function Specifications() {
  const isReduced = useReducedMotion();

  return (
    <section id="specs" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Title */}
        <div className="flex flex-col items-start mb-16">
          <RevealLine className="mb-4" width="w-24" />
          
          <FloatingEntrance delay={0.1}>
            <h2 className="text-brand-primaryBrown text-section-h2 mb-4 font-display font-semibold">
              Built to Last
            </h2>
          </FloatingEntrance>
          
          <FloatingEntrance delay={0.2}>
            <p className="text-brand-charcoal/70 font-body text-section-h3 font-medium">
              Sturdy structural design engineered with premium luxury materials
            </p>
          </FloatingEntrance>
        </div>

        {/* 4-column grid (2x4 on mobile, 4 columns on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {SPECIFICATIONS_ITEMS.map((spec, idx) => {
            const IconComponent = spec.icon;
            return (
              <FloatingEntrance key={idx} delay={0.1 + idx * 0.08}>
                <MagneticCard className="h-full bg-brand-cream border border-brand-copper/20 hover:border-brand-copper p-6 rounded-2xl shadow-sm hover:shadow transition-all duration-300 flex flex-col items-start">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-copper mb-4 border border-brand-copper/15">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-brand-primaryBrown font-body text-base font-bold mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-brand-charcoal/80 font-body text-xs md:text-sm leading-relaxed">
                    {spec.desc}
                  </p>
                </MagneticCard>
              </FloatingEntrance>
            );
          })}
        </div>

        {/* Brand Logos Strip */}
        <div className="pt-12 border-t border-brand-cream border-2 rounded-3xl p-8 bg-brand-cream/35">
          <FloatingEntrance delay={0.2} className="mb-8">
            <h4 className="text-brand-primaryBrown/80 font-body text-xs font-bold uppercase tracking-[0.2em] text-center">
              Our Trusted Material & Construction Partners
            </h4>
          </FloatingEntrance>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {BRAND_PARTNERS.map((brand, idx) => (
              <FloatingEntrance key={idx} delay={0.25 + idx * 0.06}>
                <motion.div
                  whileHover={{ scale: isReduced ? 1 : 1.08 }}
                  className="flex items-center justify-center px-4 py-2 hover-trigger"
                >
                  <span className="text-brand-charcoal font-display text-sm md:text-lg font-extrabold tracking-widest opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer">
                    {brand.name}
                  </span>
                </motion.div>
              </FloatingEntrance>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
