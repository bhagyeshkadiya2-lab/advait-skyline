"use client";

import React from "react";
import CounterStat from "@/components/motion/CounterStat";
import FloatingEntrance from "@/components/motion/FloatingEntrance";

const STATS_DATA = [
  {
    value: 39,
    suffix: "+",
    prefix: "",
    label: "Lifestyle Amenities",
  },
  {
    value: 14,
    suffix: "",
    prefix: "G+",
    label: "Sleek Skyscraper Floors",
  },
  {
    value: 12,
    suffix: "+",
    prefix: "",
    label: "Commercial Retail Shops",
  },
  {
    value: 200,
    suffix: "m",
    prefix: "",
    label: "From Bhilad Checkpost",
  },
];

export default function Stats() {
  return (
    <section className="bg-brand-deepBrown py-16 md:py-24 border-y border-brand-copper/20 relative overflow-hidden">
      {/* Decorative light overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FloatingEntrance delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16 lg:gap-y-0 text-center">
            {STATS_DATA.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center px-4 ${
                  idx !== STATS_DATA.length - 1
                    ? "lg:border-r border-brand-copper/30"
                    : ""
                } ${
                  // Subtle border separating grid squares on mobile
                  idx % 2 === 0 ? "border-r border-brand-copper/20 lg:border-r-0" : ""
                }`}
              >
                {/* Scroll-triggered Counter Number */}
                <CounterStat
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="text-brand-gold text-stat-number font-display font-bold leading-none mb-3 inline-block"
                />

                {/* Subtitle label */}
                <span className="text-brand-cream/80 text-label-caps text-xs tracking-[0.15em] max-w-[180px] leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FloatingEntrance>
      </div>
    </section>
  );
}
