import React from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ShieldCheck, Sparkles, Building2, MapPin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full">
      {/* Hero placeholder section for Phase 1 verification */}
      <section className="relative w-full min-h-[85vh] bg-[#1E130C] text-white flex items-center justify-center py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D9A21B]/40 bg-[#7B4F2E]/20 text-[#F2D27A] text-xs font-medium tracking-wide">
            <MapPin size={14} className="text-[#D9A21B]" />
            <span>Naroli–Silvassa Main Road · 200 m from Naroli–Bhilad Checkpost</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            1 & 2 BHK Flats and Commercial Shops in{' '}
            <span className="text-gold-gradient">Naroli–Bhilad</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-3xl mx-auto leading-relaxed">
            A G+14 residential and commercial landmark with 39+ lifestyle amenities by Dhanasvi Infra.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
            <div className="px-6 py-4 rounded-xl border border-[#7B4F2E]/40 bg-[#271910] text-center min-w-[130px]">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2D27A] block">39+</span>
              <span className="text-xs uppercase tracking-wider text-[#EADFCB]/70 font-sans">Amenities</span>
            </div>
            <div className="px-6 py-4 rounded-xl border border-[#7B4F2E]/40 bg-[#271910] text-center min-w-[130px]">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2D27A] block">G+14</span>
              <span className="text-xs uppercase tracking-wider text-[#EADFCB]/70 font-sans">Floors</span>
            </div>
            <div className="px-6 py-4 rounded-xl border border-[#7B4F2E]/40 bg-[#271910] text-center min-w-[130px]">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#F2D27A] block">200 m</span>
              <span className="text-xs uppercase tracking-wider text-[#EADFCB]/70 font-sans">To Checkpost</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`https://wa.me/${PROJECT_DATA.contact.whatsappLeadNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Hello, I am interested in Advait Skyline (Naroli). Please share details.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-sm tracking-wide shadow-lg hover:brightness-105 transition-all"
            >
              Get Price on WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-md border border-[#D9A21B] text-[#F2D27A] hover:bg-[#D9A21B]/10 font-sans font-semibold text-sm tracking-wide transition-all"
            >
              Book a Site Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
