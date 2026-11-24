'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowUpRight, Compass, Building, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';

export default function IntroSection() {
  const t = useTranslations('intro');

  return (
    <section className="py-24 sm:py-32 bg-[#FBF8F2] text-[#2A1F18] relative overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-texture-cream pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Asymmetric Editorial Copy (55%) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Section Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#7B4F2E]" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#7B4F2E]">
                {t('eyebrow')}
              </span>
            </div>

            {/* H2 Title */}
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#1E130C] leading-[1.15]">
              {t('title')}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#2A1F18]/85 font-sans leading-relaxed">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
            </div>

            {/* Architectural Highlights Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 w-full">
              <div className="p-4 rounded-lg border border-[#7B4F2E]/15 bg-white shadow-xs">
                <div className="flex items-center gap-2.5 text-[#7B4F2E] font-bold text-sm mb-1">
                  <Compass size={18} className="text-[#D9A21B]" />
                  <span>Strategic Junction Hub</span>
                </div>
                <p className="text-xs text-[#2A1F18]/70 leading-relaxed font-sans">
                  Direct arterial frontage connecting Bhilad Railway Station (5.1 km), Vapi (16 km), and Silvassa (9.8 km).
                </p>
              </div>

              <div className="p-4 rounded-lg border border-[#7B4F2E]/15 bg-white shadow-xs">
                <div className="flex items-center gap-2.5 text-[#7B4F2E] font-bold text-sm mb-1">
                  <ShieldCheck size={18} className="text-[#D9A21B]" />
                  <span>Certified Engineering Rigor</span>
                </div>
                <p className="text-xs text-[#2A1F18]/70 leading-relaxed font-sans">
                  Designed by Takshashila Architects and engineered by Janak Bhavsar for seismic stability.
                </p>
              </div>
            </div>

            {/* Read more button */}
            <div className="pt-2">
              <Link
                href="/about-dhanasvi-infra"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-[#7B4F2E] hover:text-[#1E130C] border-b-2 border-[#D9A21B] pb-1 transition-colors"
              >
                <span>Learn More About Dhanasvi Infra</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Stacked Overlapping Renders (45%) */}
          <div className="lg:col-span-5 relative">
            {/* Base Primary Render Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#7B4F2E]/20 shadow-xl bg-[#1E130C]"
            >
              <Image
                src="/about-bg.jpg"
                alt="Advait Skyline Street View and Architectural Perspective"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E130C]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-display text-xl font-bold block">G+14 Living & Retail</span>
                <span className="text-xs text-[#EADFCB]/80 font-sans">Vadfaliya, Naroli–Silvassa Main Road</span>
              </div>
            </motion.div>

            {/* Overlapping Floating Secondary Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden sm:block absolute -bottom-8 -left-8 bg-white border border-[#D9A21B]/40 rounded-xl p-5 shadow-2xl max-w-[220px]"
            >
              <span className="font-display text-3xl font-bold text-[#7B4F2E] block">
                200 m
              </span>
              <span className="font-sans text-xs uppercase tracking-wider text-[#2A1F18]/80 font-semibold block pt-1">
                From Checkpost
              </span>
              <span className="text-[11px] text-[#2A1F18]/60 font-sans block pt-0.5">
                Gujarat & D&NH border gateway
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
