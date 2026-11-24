'use client';

import React, { useEffect, useRef } from 'react';
import { animate, useInView } from 'motion/react';

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/**
 * Reusable SEO-Safe Counter Component:
 * - Server HTML and no-JS text = final value ONLY (no "0+39" or "G+0").
 * - Animates once smoothly when entering viewport via requestAnimationFrame.
 * - Respects prefers-reduced-motion.
 */
export function Counter({ value, prefix = '', suffix = '', className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => {
        node.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
      onComplete: () => {
        node.textContent = `${prefix}${value}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix]);

  // Server HTML and no-JS text = final value only.
  return (
    <span ref={ref} className={className}>
      {`${prefix}${value}${suffix}`}
    </span>
  );
}

export default function StatsRow() {
  return (
    <section
      aria-label="Advait Skyline Quantitative Metrics"
      className="w-full bg-[#1E130C] border-y border-[#7B4F2E]/40 py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-texture-espresso opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#7B4F2E]/30">
          
          {/* Stat 1: 39+ Lifestyle Amenities */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 relative group">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2D27A] mb-2 leading-none">
              <Counter value={39} suffix="+" />
            </div>
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white block mb-1">
              Lifestyle Amenities
            </span>
            <span className="font-sans text-[11px] text-[#EADFCB]/70 tracking-wide block max-w-[200px]">
              Swimming pool, dual gyms, turf cricket &amp; mini cinema
            </span>
          </div>

          {/* Stat 2: G+14 Landmark Floors (Static text, not counter) */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 relative group">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2D27A] mb-2 leading-none">
              <span>G+14</span>
            </div>
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white block mb-1">
              Landmark Floors
            </span>
            <span className="font-sans text-[11px] text-[#EADFCB]/70 tracking-wide block max-w-[200px]">
              Residential and commercial development
            </span>
          </div>

          {/* Stat 3: 200m From Checkpost */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 relative group">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2D27A] mb-2 leading-none">
              <Counter value={200} suffix=" m" />
            </div>
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white block mb-1">
              From Checkpost
            </span>
            <span className="font-sans text-[11px] text-[#EADFCB]/70 tracking-wide block max-w-[200px]">
              Naroli–Bhilad Checkpost border crossing
            </span>
          </div>

          {/* Stat 4: 20 Ground Retail Shops */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 relative group">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2D27A] mb-2 leading-none">
              <Counter value={20} />
            </div>
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white block mb-1">
              Ground Retail Shops
            </span>
            <span className="font-sans text-[11px] text-[#EADFCB]/70 tracking-wide block max-w-[200px]">
              5-foot wide customer otta on main road
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
