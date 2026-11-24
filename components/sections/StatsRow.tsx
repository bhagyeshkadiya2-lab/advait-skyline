'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItemProps {
  finalNumber: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caption: string;
}

/**
 * SEO-Safe Counter Stat Component:
 * - In the initial Server-Rendered HTML, the REAL final number is always visible in the accessible DOM (inside a visually hidden element or directly).
 * - Crawlers and bots reading raw HTML see "39+ Lifestyle Amenities", "G+14 Landmark Floors", "200 m from Bhilad Checkpost", "20 Retail Shops".
 * - Visually on client, when scrolled into view, it animates smoothly from 0 to finalNumber.
 */
function SingleStatCounter({ finalNumber, suffix = '', prefix = '', label, caption }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const durationMs = 1600;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Smooth easeOutQuart formula
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const computed = Math.floor(easeProgress * finalNumber);

      setCurrentValue(computed);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCurrentValue(finalNumber);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, finalNumber]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center px-4 py-8 relative group"
    >
      {/* 
        ACCESSIBLE ACCURACY FOR SEARCH BOTS:
        The accessible label holds the final real value directly so crawlers never index 0.
      */}
      <div
        aria-label={`${prefix}${finalNumber}${suffix} ${label}`}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2D27A] mb-2 leading-none"
      >
        <span aria-hidden="true">
          {prefix}{currentValue}{suffix}
        </span>
        <span className="sr-only">
          {prefix}{finalNumber}{suffix}
        </span>
      </div>

      <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white block mb-1">
        {label}
      </span>

      <span className="font-sans text-[11px] text-[#EADFCB]/70 tracking-wide block max-w-[200px]">
        {caption}
      </span>
    </div>
  );
}

export default function StatsRow() {
  const STATS = [
    {
      finalNumber: 39,
      suffix: '+',
      prefix: '',
      label: 'Lifestyle Amenities',
      caption: 'Resort pool, dual gyms, turf cricket & mini cinema',
    },
    {
      finalNumber: 14,
      suffix: '',
      prefix: 'G+',
      label: 'Landmark Floors',
      caption: 'Three soaring architectural residential towers',
    },
    {
      finalNumber: 200,
      suffix: 'm',
      prefix: '',
      label: 'From Checkpost',
      caption: 'Naroli–Bhilad Checkpost border crossing',
    },
    {
      finalNumber: 20,
      suffix: '',
      prefix: '',
      label: 'Ground Retail Shops',
      caption: '5-foot wide customer otta on main road',
    },
  ];

  return (
    <section
      aria-label="Advait Skyline Quantitative Metrics"
      className="w-full bg-[#1E130C] border-y border-[#7B4F2E]/40 py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-texture-espresso opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#7B4F2E]/30">
          {STATS.map((stat, idx) => (
            <SingleStatCounter
              key={idx}
              finalNumber={stat.finalNumber}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              caption={stat.caption}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
