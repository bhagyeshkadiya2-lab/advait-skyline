'use client';

import React, { useState } from 'react';
import {
  Building2,
  LayoutGrid,
  ChefHat,
  DoorClosed,
  Grid3X3,
  Zap,
  ArrowUpDown,
  Droplet,
  Paintbrush,
  Flame,
  ChevronDown,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { PROJECT_DATA } from '@/lib/project-data';

const SPEC_ICONS: Record<string, React.ElementType> = {
  Building2,
  LayoutGrid,
  ChefHat,
  DoorClosed,
  Grid3X3,
  Zap,
  ArrowUpDown,
  Droplet,
  Paintbrush,
  Flame,
};

export default function SpecificationsSection() {
  const t = useTranslations('specifications');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FBF8F2] text-[#2A1F18] relative overflow-hidden">
      <div className="absolute inset-0 bg-texture-cream opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#7B4F2E]/20 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#7B4F2E]" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#7B4F2E]">
                {t('eyebrow')}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#1E130C] leading-[1.12]">
              {t('title')}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#2A1F18]/80 max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* Specifications Accordion (Semantic details/summary for instant SEO & Bot reading) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECT_DATA.specifications.map((spec, idx) => {
            const IconComp = SPEC_ICONS[spec.icon] || Building2;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-[#7B4F2E]/20 bg-white rounded-xl overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FBF8F2] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#EADFCB]/60 text-[#7B4F2E] flex items-center justify-center shrink-0">
                      <IconComp size={18} />
                    </div>
                    <span className="font-sans text-sm sm:text-base font-bold text-[#1E130C]">
                      {spec.title}
                    </span>
                  </div>

                  <ChevronDown
                    size={18}
                    className={`text-[#7B4F2E] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed border-t border-[#7B4F2E]/10 bg-[#FBF8F2]/40">
                    {spec.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Brand Partners Showcase (Subject to developer confirmation) */}
        <div className="pt-8 border-t border-[#7B4F2E]/20 space-y-4 text-center">
          <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#7B4F2E] block">
            Quality Material Sourcing Partners
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-2">
            {PROJECT_DATA.brandPartners.map((brand, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-lg bg-white border border-[#7B4F2E]/15 shadow-xs text-xs font-sans font-bold text-[#7B4F2E] tracking-wider uppercase"
              >
                {brand.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
