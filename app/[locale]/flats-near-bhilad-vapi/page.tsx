import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Train, Clock, MapPin, Check, ShieldCheck, MessageSquare, ArrowRight, Briefcase, Factory } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import LeadForm from '@/components/lead/LeadForm';
import ProjectFactSheet from '@/components/sections/ProjectFactSheet';
import { buildWhatsAppLink } from '@/lib/tracking';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/flats-near-bhilad-vapi',
    customTitle: 'Flats Near Bhilad & Vapi | Advait Skyline – 200m from Checkpost',
    customDescription:
      '1 & 2 BHK flats near Bhilad station (5.1 km) and Vapi (16 km). G+14 development at Naroli–Bhilad Checkpost, DNH with 39+ amenities for industrial commuters.',
  });
}

export default async function FlatsNearBhiladVapiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: 'Hello, I am interested in flats near Bhilad and Vapi at Advait Skyline, Naroli. Please share floor plans, pricing, and commute details.',
    sourceRef: 'flats-near-bhilad-vapi-page',
  });

  const industrialZones = [
    { name: 'Naroli Industrial Corridor', distance: '1.5 km', time: '3 min', desc: 'Major textiles, packaging, and chemical manufacturing facilities.' },
    { name: 'Bhilad GIDC & Station Area', distance: '5.1 km', time: '10 min', desc: 'Direct access to Western Railway main line and local business hub.' },
    { name: 'Sarigam GIDC Belt', distance: '9.5 km', time: '14 min', desc: 'Heavy chemical, dyes, and pharmaceutical manufacturing plants.' },
    { name: 'Vapi GIDC & Commercial City', distance: '16.0 km', time: '25 min', desc: 'One of Asia’s largest industrial hubs with full commercial infrastructure.' },
  ];

  const commuterFaqs = [
    {
      question: 'How close is Advait Skyline to Bhilad Railway Station?',
      answer: 'Advait Skyline is located 5.1 km from Bhilad Railway Station (approximately 10 minutes drive along the Naroli–Silvassa main road and checkpost crossing).',
    },
    {
      question: 'Can residents easily commute to Vapi and Sarigam GIDC from here?',
      answer: 'Yes. The project is situated at the border junction 200 meters from Naroli–Bhilad Checkpost, providing quick 14-minute access to Sarigam GIDC and 25-minute access to Vapi via NH-48.',
    },
    {
      question: 'What flat sizes are available for commuter households?',
      answer: 'Advait Skyline offers 1 BHK flats (511 sq. ft. carpet area) and 2 BHK flats (573 sq. ft. carpet area) featuring 2 bathrooms, balconies, and access to 39+ lifestyle amenities.',
    },
    {
      question: 'What is the starting price for flats near Bhilad & Vapi at Advait Skyline?',
      answer: 'Starting from {price} onwards. Interested buyers can receive the complete cost breakdown and payment milestone schedule directly on WhatsApp.',
    },
  ];

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        type="faq"
        customFaqs={commuterFaqs}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Flats Near Bhilad & Vapi', item: '/flats-near-bhilad-vapi' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Industrial Commuter Focus · G+14</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Flats Near <span className="text-gold-gradient">Bhilad &amp; Vapi</span> (Naroli Checkpost)
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-3xl leading-relaxed">
            Strategically located just 200 m from Naroli–Bhilad Checkpost, 5.1 km from Bhilad Railway Station, and 16 km from Vapi. Designed for plant managers, industrial professionals, and frequent railway commuters seeking high-quality gated living with 39+ amenities. Advait Skyline is in Naroli, near Silvassa, Dadra &amp; Nagar Haveli (not Narol, Ahmedabad).
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
              Book a Site Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-20">

        {/* Section 1: Industrial Corridors & Commute Times */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Regional Employment Hubs
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Direct Connectivity to Major Manufacturing Clusters
            </h2>
            <p className="text-xs sm:text-sm text-[#2A1F18]/75 font-sans max-w-3xl">
              Eliminate hours of grueling daily traffic. Residing at Advait Skyline positions you right at the Gujarat–Dadra &amp; Nagar Haveli gateway, granting lightning-fast access to key manufacturing and commercial hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrialZones.map((zone, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-[#7B4F2E]">
                  <Factory size={18} />
                  <h3 className="font-bold text-sm text-[#1E130C]">{zone.name}</h3>
                </div>
                <p className="font-display text-2xl font-bold text-[#7B4F2E]">{zone.distance}</p>
                <p className="text-xs font-semibold text-[#1E130C]">approx. {zone.time} drive</p>
                <p className="text-xs text-[#2A1F18]/70 font-sans pt-1 border-t border-[#7B4F2E]/10">
                  {zone.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Verified Project Fact Sheet */}
        <section>
          <ProjectFactSheet />
        </section>

        {/* Section 3: Configurations Breakdown */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Available Units
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              1 &amp; 2 BHK Approved Residences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-4">
              <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold uppercase tracking-wider">
                1 BHK Residence
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1E130C]">511 Sq. Ft. Carpet Area</h3>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                2 bathrooms, private entrance foyer, 4-foot wide balcony, utility wash area, and 2 AC points. Starting from &#123;price&#125; onwards.
              </p>
              <Link
                href="/1-bhk-flats-naroli"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B4F2E] hover:underline uppercase tracking-wider"
              >
                <span>Explore 1 BHK Walkthrough</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-4">
              <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold uppercase tracking-wider">
                2 BHK Residence
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1E130C]">573 Sq. Ft. Carpet Area</h3>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                16-foot long living hall, 5&apos;6&quot; wide sunset balcony, 2 bathrooms, utility wash area, and 3 AC points. Starting from &#123;price&#125; onwards.
              </p>
              <Link
                href="/2-bhk-flats-naroli"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B4F2E] hover:underline uppercase tracking-wider"
              >
                <span>Explore 2 BHK Walkthrough</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="bg-white border border-[#7B4F2E]/20 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E130C]">
            Frequently Asked Questions — Flats Near Bhilad &amp; Vapi
          </h2>
          <div className="divide-y divide-[#7B4F2E]/15">
            {commuterFaqs.map((faq, idx) => (
              <div key={idx} className="py-4 space-y-2">
                <h3 className="font-sans text-sm sm:text-base font-bold text-[#1E130C]">
                  {faq.question}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#2A1F18]/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Lead Form */}
        <section className="max-w-4xl mx-auto">
          <LeadForm />
        </section>

      </div>
    </div>
  );
}
