import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { BookOpen, ArrowRight, ShieldCheck, Landmark, Home } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/guides',
    customTitle: 'Real Estate Buyer Guides | Advait Skyline — Naroli, D&NH',
    customDescription:
      'Educational homebuyer guides for purchasing flats in Naroli, understanding RERA compliance in Dadra & Nagar Haveli, and applying for bank home loans.',
  });
}

export default async function GuidesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const GUIDES = [
    {
      slug: '/guides/buying-flat-in-naroli',
      title: 'Buying a Flat in Naroli: Complete Buyer Checklist & Location Guide',
      category: 'Location & Lifestyle',
      readTime: '5 min read',
      summary: 'Explore why Naroli–Bhilad is emerging as a preferred residential hub connecting Gujarat and D&NH, including connectivity to Bhilad Station, Vapi, and local civic amenities.',
    },
    {
      slug: '/guides/rera-property-guide',
      title: 'RERA Compliance Guide: What Buyers Must Check in Dadra & Nagar Haveli',
      category: 'Legal & Safety',
      readTime: '6 min read',
      summary: 'Understand RERA protections, sanctioned carpet area definitions, construction stages, and how to verify registration number PM3000002600013 on the official regulatory portal.',
    },
    {
      slug: '/guides/home-loan-guide',
      title: 'Home Loan Guide for 1 & 2 BHK Apartments: Eligibility & Bank Approvals',
      category: 'Finance & Banking',
      readTime: '4 min read',
      summary: 'Step-by-step documentation, interest rate benchmarks, PMAY credit assistance, and bank loan approvals with nationalized banks (SBI, BOB, HDFC) at Advait Skyline.',
    },
  ];

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Buyer Guides', item: '/guides' },
        ]}
      />

      {/* Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Buyer Knowledge Base</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Real Estate <span className="text-gold-gradient">Buyer Guides</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-2xl leading-relaxed">
            Essential educational articles on property diligence, location advantages, RERA protections, and bank financing in the Naroli–Silvassa corridor.
          </p>
        </div>
      </section>

      {/* Guides List */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 gap-6">
          {GUIDES.map((guide, idx) => (
            <Link
              key={idx}
              href={guide.slug}
              className="p-6 sm:p-8 rounded-2xl border border-[#7B4F2E]/20 bg-white hover:border-[#D9A21B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-sans text-[#7B4F2E] font-semibold">
                  <span>{guide.category}</span>
                  <span className="text-[#2A1F18]/50">{guide.readTime}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1E130C] group-hover:text-[#7B4F2E] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                  {guide.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-[#7B4F2E]/10 flex items-center justify-between text-xs font-sans font-bold text-[#7B4F2E] group-hover:text-[#D9A21B]">
                <span>Read Full Guide</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
