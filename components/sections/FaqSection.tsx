'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FaqSection() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    { q: t('q6'), a: t('a6') },
    { q: t('q7'), a: t('a7') },
    { q: t('q8'), a: t('a8') },
    { q: t('q9'), a: t('a9') },
    { q: t('q10'), a: t('a10') },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      aria-label="Frequently Asked Questions"
      className="py-24 sm:py-32 bg-[#1E130C] text-[#EADFCB] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-texture-espresso opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#D9A21B]" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#F2D27A]">
              {t('eyebrow')}
            </span>
            <span className="w-6 h-[1.5px] bg-[#D9A21B]" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            {t('title')}
          </h2>
        </div>

        {/* 
          AEO-Optimized FAQ Accordion:
          All answers are present in the server HTML (SSR) for search crawlers, curl, and AI search engines.
        */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-[#7B4F2E]/40 bg-[#271910] rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#1E130C]/40 transition-colors"
                >
                  <span className="font-sans text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#F2D27A] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Always rendered in DOM — toggled via CSS hidden/block so answers exist in server HTML */}
                <div
                  className={`px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#EADFCB]/85 font-sans leading-relaxed border-t border-[#7B4F2E]/20 bg-[#1E130C]/30 ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
