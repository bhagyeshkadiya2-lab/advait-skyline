import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Store, Briefcase, Building, Check, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import LeadForm from '@/components/lead/LeadForm';
import { buildWhatsAppLink } from '@/lib/tracking';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/commercial-shops-naroli',
    customTitle: 'Commercial Shops in Naroli–Bhilad | Advait Skyline Retail & Offices',
    customDescription:
      'Prime ground-floor retail shops (1–20) with 5ft otta and 2nd-floor executive office suites on Naroli–Silvassa main road, 200m from Naroli–Bhilad Checkpost.',
  });
}

export default async function CommercialPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I am interested in commercial retail shops and office spaces at Advait Skyline (Naroli). Please share available configurations and pricing.",
    sourceRef: 'commercial-page',
  });

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Commercial Shops in Naroli', item: '/commercial-shops-naroli' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Commercial Real Estate Hub</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Commercial Shops & Offices in <span className="text-gold-gradient">Naroli–Bhilad</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-2xl leading-relaxed">
            Direct arterial exposure on the Naroli–Silvassa main road, situated just 200 meters from the Naroli–Bhilad Checkpost with massive transit footfall.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 transition-all flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Get Price on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-md border border-[#D9A21B] text-[#F2D27A] hover:bg-[#D9A21B]/15 font-sans font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Book Commercial Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Three Commercial Levels */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECT_DATA.commercial.levels.map((lvl, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-[#7B4F2E]/20 bg-white shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-xs uppercase font-sans font-bold text-[#7B4F2E] tracking-widest block">
                  Level {idx + 1}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E130C]">
                  {lvl.level}
                </h3>
                <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                  {lvl.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#7B4F2E]/10 flex items-center justify-between text-xs text-[#7B4F2E] font-semibold">
                <span>RERA Compliant Layout</span>
                <span>Inquire →</span>
              </div>
            </div>
          ))}
        </div>

        {/* 11 Use Cases Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1E130C] text-[#EADFCB] space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#F2D27A] font-bold block">
              Flexible Space Allocation
            </span>
            <h2 className="font-display text-3xl font-bold text-white">
              Approved Commercial Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {PROJECT_DATA.commercial.useCases.map((uc) => (
              <div
                key={uc.id}
                className="p-4 rounded-xl border border-[#7B4F2E]/40 bg-[#271910] text-xs font-sans text-white flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#7B4F2E]/40 flex items-center justify-center text-[#F2D27A] shrink-0">
                  <Store size={16} />
                </div>
                <span>{uc.label}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#EADFCB]/60 font-sans border-t border-[#7B4F2E]/30 pt-4">
            {PROJECT_DATA.commercial.complianceNotice}
          </p>
        </div>

        {/* Lead Form Section */}
        <div className="pt-8 border-t border-[#7B4F2E]/20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-3xl font-bold text-[#1E130C]">
              Book an On-Site Commercial Inspection
            </h3>
            <p className="text-sm font-sans text-[#2A1F18]/80 leading-relaxed">
              Meet our commercial sales directors at the Naroli checkpost site office to review floor plate options, power load allocations, and sign-up terms.
            </p>
          </div>
          <div className="lg:col-span-6">
            <LeadForm defaultInterest="shop" />
          </div>
        </div>
      </section>
    </div>
  );
}
