"use client";

import React from "react";
import { Sparkles, Trophy, Handshake, Gem } from "lucide-react";
import RevealLine from "@/components/motion/RevealLine";
import FloatingEntrance from "@/components/motion/FloatingEntrance";
import MagneticCard from "@/components/motion/MagneticCard";

const BUILDER_VALUES = [
  {
    icon: Handshake,
    title: "Honesty in Commitment",
    desc: "We adhere strictly to registered plans and guarantee crystal-clear paperwork and timely handovers.",
  },
  {
    icon: Trophy,
    title: "Premium Construction Quality",
    desc: "We source certified high-grade components and enforce rigid engineering inspections at every slab.",
  },
  {
    icon: Gem,
    title: "Future-Value Driven Planning",
    desc: "We select high-potential bypass hubs to ensure your asset experiences robust compounding growth.",
  },
];

export default function Builder() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Stylized Builder Logo/Crest representation */}
        <FloatingEntrance delay={0.1}>
          <div className="mb-6 w-20 h-20 rounded-2xl bg-white border border-brand-copper/35 flex items-center justify-center text-brand-copper shadow-md rotate-45 group hover:rotate-90 transition-transform duration-500">
            <div className="-rotate-45">
              <Sparkles size={36} className="text-brand-copper fill-brand-gold/10" />
            </div>
          </div>
        </FloatingEntrance>

        {/* Builder Name Label */}
        <FloatingEntrance delay={0.2}>
          <span className="text-brand-copper text-label-caps text-xs tracking-[0.25em] font-bold mb-3 block">
            DHANASVI INFRA
          </span>
        </FloatingEntrance>

        <RevealLine className="mb-6 mx-auto" width="w-24" />

        {/* Section Heading */}
        <FloatingEntrance delay={0.3}>
          <h2 className="text-brand-primaryBrown text-section-h2 mb-8 font-display font-semibold">
            Where Quality Meets Trust
          </h2>
        </FloatingEntrance>

        {/* Builder Narrative Copy */}
        <FloatingEntrance delay={0.4}>
          <div className="text-brand-charcoal text-body-custom space-y-6 max-w-3xl mb-16 leading-relaxed text-justify md:text-center">
            <p>
              At <strong className="text-brand-primaryBrown font-semibold">Dhanasvi Infra</strong>,
              we believe that a home is not just a layout of bricks and concrete, but a permanent
              sanctuary of peace, community, and security. We have built our reputation in the Dadra
              & Nagar Haveli region by strictly honoring our specifications, timelines, and legal
              RERA guidelines.
            </p>
            <p>
              Our vision for Advait Skyline was to establish a benchmark development that seamlessly
              integrates high-end luxury housing with thriving retail spaces. Guided by structural
              rigor, material excellence, and customer-first support, we invite you to elevate your everyday
              with us.
            </p>
          </div>
        </FloatingEntrance>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          {BUILDER_VALUES.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <FloatingEntrance key={idx} delay={0.45 + idx * 0.1}>
                <MagneticCard className="h-full bg-white border-l-4 border-l-brand-copper border-y border-r border-brand-copper/15 hover:border-brand-copper p-6 rounded-r-xl rounded-l shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start">
                  <div className="w-9 h-9 rounded-lg bg-brand-cream flex items-center justify-center text-brand-copper mb-4">
                    <IconComponent size={18} />
                  </div>
                  <h3 className="text-brand-primaryBrown font-body text-sm font-bold mb-2">
                    {val.title}
                  </h3>
                  <p className="text-brand-charcoal/80 font-body text-xs leading-relaxed">
                    {val.desc}
                  </p>
                </MagneticCard>
              </FloatingEntrance>
            );
          })}
        </div>
      </div>
    </section>
  );
}
