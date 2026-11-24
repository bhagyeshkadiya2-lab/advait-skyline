import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { ShieldCheck, Sparkles, Building, Compass, Phone, Mail, MapPin } from 'lucide-react';
import { PROJECT_DATA } from '@/lib/project-data';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import LeadForm from '@/components/lead/LeadForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/about-dhanasvi-infra',
    customTitle: 'About Dhanasvi Infra | Real Estate Developers Dadra & Nagar Haveli',
    customDescription:
      'Learn about Dhanasvi Infra, the developer of Advait Skyline: registered partnership firm, commitment to structural quality, TAKSHASHILA Architects, and chartered engineering excellence.',
  });
}

export default async function AboutDhanasviPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'About Dhanasvi Infra', item: '/about-dhanasvi-infra' },
        ]}
      />

      {/* Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Developer Profile</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Where Quality Meets Trust — <span className="text-gold-gradient">Dhanasvi Infra</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-2xl leading-relaxed">
            A real-estate partnership firm based in Vadfaliya, Dadra & Nagar Haveli, dedicated to regulatory compliance, honest engineering, and landmark mixed developments.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-[#7B4F2E]/20 bg-white shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EADFCB]/60 text-[#7B4F2E] flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#1E130C]">
              Honesty in Commitment
            </h3>
            <p className="text-sm font-sans text-[#2A1F18]/80 leading-relaxed">
              We adhere strictly to sanctioned municipal plans and guarantee crystal-clear title documentation, bank approval clearances, and transparent handovers.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[#7B4F2E]/20 bg-white shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EADFCB]/60 text-[#7B4F2E] flex items-center justify-center">
              <Sparkles size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#1E130C]">
              Premium Construction
            </h3>
            <p className="text-sm font-sans text-[#2A1F18]/80 leading-relaxed">
              Quality-controlled earthquake-resistant RCC framework designed by leading structural consultants, paired with top branded fittings and acrylic exterior coatings.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[#7B4F2E]/20 bg-white shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#EADFCB]/60 text-[#7B4F2E] flex items-center justify-center">
              <Compass size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#1E130C]">
              Future-Value Driven Planning
            </h3>
            <p className="text-sm font-sans text-[#2A1F18]/80 leading-relaxed">
              We select strategic transit arterial hubs like the Naroli–Bhilad Checkpost to ensure lasting residential tranquility and strong commercial retail footfall.
            </p>
          </div>
        </div>

        {/* Dhanasvi Infra Sales Office & Experience Center */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold block">
              On-Site Experience Center
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E130C]">
              Visit Our Sales Office at Naroli–Bhilad Checkpost
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#7B4F2E]/20 shadow-md group">
              <Image
                src="/real-site/sales-office-entrance.webp"
                alt="Dhanasvi Infra Sales Office Glass Entrance"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-sans text-white font-semibold">Corporate Experience Entrance</span>
              </div>
            </div>

            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#7B4F2E]/20 shadow-md group">
              <Image
                src="/real-site/sales-office-lounge.webp"
                alt="Client Consultation Lounge & Discussion Room"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-sans text-white font-semibold">Client Consultation Lounge</span>
              </div>
            </div>

            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#7B4F2E]/20 shadow-md group">
              <Image
                src="/real-site/sales-office-branding.webp"
                alt="Dhanasvi Infra Gold Logo & Architectural Model View"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-sans text-white font-semibold">Advait Skyline Project Gallery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Consultant Credits */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1E130C] text-[#EADFCB] space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#F2D27A] font-bold block">
              Architectural & Engineering Vision
            </span>
            <h2 className="font-display text-3xl font-bold text-white">
              Consultant Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl border border-[#7B4F2E]/40 bg-[#271910] space-y-2">
              <span className="text-xs font-sans uppercase font-bold text-[#F2D27A] block">
                Project Architect
              </span>
              <h4 className="font-display text-xl font-bold text-white">
                {PROJECT_DATA.team.architect.name} ({PROJECT_DATA.team.architect.credentials})
              </h4>
              <p className="text-xs text-[#EADFCB]/80 font-sans">
                {PROJECT_DATA.team.architect.firm} · {PROJECT_DATA.team.architect.location}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#7B4F2E]/40 bg-[#271910] space-y-2">
              <span className="text-xs font-sans uppercase font-bold text-[#F2D27A] block">
                Chartered Structural Engineer
              </span>
              <h4 className="font-display text-xl font-bold text-white">
                {PROJECT_DATA.team.structuralConsultant.name}
              </h4>
              <p className="text-xs text-[#EADFCB]/80 font-sans">
                {PROJECT_DATA.team.structuralConsultant.credentials} · {PROJECT_DATA.team.structuralConsultant.location}
              </p>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        <div className="pt-8 border-t border-[#7B4F2E]/20 max-w-4xl mx-auto">
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
