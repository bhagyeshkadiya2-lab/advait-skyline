'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Briefcase,
  Stethoscope,
  Store,
  Utensils,
  Dumbbell,
  ShoppingBag,
  Gem,
  Landmark,
  GraduationCap,
  Scissors,
  Coffee,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

const USE_CASE_ICONS: Record<string, React.ElementType> = {
  Briefcase,
  Stethoscope,
  Store,
  Utensils,
  Dumbbell,
  ShoppingBag,
  Gem,
  Landmark,
  GraduationCap,
  Scissors,
  Coffee,
};

export default function CommercialSection() {
  const t = useTranslations('commercial');

  const waLeadUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I am interested in commercial retail shops and office spaces at Advait Skyline (Naroli). Please share available configurations and details.",
    sourceRef: 'commercial-section-cta',
  });

  return (
    <section className="py-24 sm:py-32 bg-[#1E130C] text-[#EADFCB] relative overflow-hidden">
      <div className="absolute inset-0 bg-texture-espresso opacity-40 pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#7B4F2E]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#7B4F2E]/30 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#F2D27A]">
                {t('eyebrow')}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              {t('title')}
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/commercial-shops-naroli"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#D9A21B] text-[#F2D27A] hover:bg-[#D9A21B] hover:text-[#1E130C] font-sans text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>{t('cta')}</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Content Grid: Left Retail Façade Card | Right Use-Case Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Retail Façade Visual Showcase (45%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#D9A21B]/30 shadow-2xl bg-[#271910] group"
          >
            <Image
              src="/commercial-bg.jpg"
              alt="Advait Skyline Retail Façade and Commercial Streetfront"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E130C] via-[#1E130C]/25 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-[11px] font-sans uppercase font-bold tracking-widest text-[#F2D27A] block">
                Ground Floor Retail Frontage
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Shops 1 to 20 with 5&apos; Wide Otta
              </h3>
              <p className="text-xs text-[#EADFCB]/85 font-sans leading-relaxed">
                Direct frontage on the Naroli–Silvassa main road with high regional vehicular footfall.
              </p>
            </div>
          </motion.div>

          {/* Right: Commercial Opportunities & 11 Use-Case Animated Grid (55%) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <p className="font-sans text-base sm:text-lg text-[#EADFCB]/90 leading-relaxed">
                {t('description')}
              </p>
              <div className="p-4 rounded-xl border border-[#7B4F2E]/40 bg-[#271910]/60 text-xs text-[#EADFCB]/80 font-sans leading-relaxed">
                <strong className="text-white block mb-1">Three Dedicated Business Levels:</strong>
                Ground Floor retail shops, 1st Floor flexible commercial showrooms, and 2nd Floor peaceful professional offices with attached balconies.
              </div>
            </div>

            {/* 11 Use-Case Badges Grid */}
            <div className="space-y-3">
              <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#F2D27A] block">
                Ideal Commercial Use Cases (Brochure Recommended)
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PROJECT_DATA.commercial.useCases.map((uc) => {
                  const Icon = USE_CASE_ICONS[uc.icon] || Store;
                  return (
                    <div
                      key={uc.id}
                      className="p-3 rounded-lg border border-[#7B4F2E]/30 bg-[#271910]/40 hover:border-[#D9A21B]/60 hover:bg-[#271910] transition-colors flex items-center gap-2.5 text-xs text-white font-sans"
                    >
                      <Icon size={16} className="text-[#F2D27A] shrink-0" />
                      <span className="truncate">{uc.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compliance notice & CTA */}
            <div className="pt-2 border-t border-[#7B4F2E]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] text-[#EADFCB]/60 font-sans leading-relaxed">
                {t('notice')}
              </p>

              <a
                href={waLeadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'commercial_section', configuration: 'commercial' })}
                className="px-6 py-3 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 shrink-0 flex items-center gap-2"
              >
                <MessageSquare size={16} />
                <span>Get Commercial Details</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
