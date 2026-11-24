'use client';

import React from 'react';
import { ShieldCheck, Building2, Store, Sparkles, Zap, ArrowUpDown, Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TrustBar() {
  const t = useTranslations('trustBar');

  const TRUST_ITEMS = [
    { icon: ShieldCheck, label: t('rera') },
    { icon: Building2, label: t('structure') },
    { icon: Sparkles, label: t('configs') },
    { icon: Store, label: t('commercial') },
    { icon: Sparkles, label: t('amenities') },
    { icon: Eye, label: t('security') },
    { icon: Zap, label: t('power') },
    { icon: ArrowUpDown, label: t('elevators') },
  ];

  return (
    <div
      aria-label="Core Project Highlights Marquee"
      className="w-full bg-[#271910] border-y border-[#7B4F2E]/30 py-4 overflow-hidden relative group"
    >
      {/* Decorative gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#271910] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#271910] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track — Pauses on hover */}
      <div className="flex w-max items-center animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] space-x-10">
        {[...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 text-xs font-sans uppercase tracking-[0.18em] text-[#EADFCB]/85 whitespace-nowrap"
            >
              <Icon size={14} className="text-[#F2D27A] shrink-0" />
              <span>{item.label}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9A21B]/40 ml-4 shrink-0" />
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
}
