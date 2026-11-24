import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Check, ShieldCheck, MapPin, MessageSquare, Maximize2, ArrowRight } from 'lucide-react';
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
    path: '/2-bhk-flats-naroli',
    customTitle: '2 BHK Flats in Naroli–Bhilad | Advait Skyline by Dhanasvi Infra',
    customDescription:
      '573 sq. ft. carpet 2 BHK luxury residences on Naroli–Silvassa main road, 200m from Naroli–Bhilad Checkpost. 16ft living hall, 5\'6" sunset balcony, 2 bathrooms, 3 AC points.',
  });
}

export default async function TwoBhkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const unit = PROJECT_DATA.residential.twoBhk;
  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I am interested in the 2 BHK luxury flats (573 sq. ft.) at Advait Skyline (Naroli). Please share floor plans and price details.",
    sourceRef: '2bhk-page',
  });

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        type="unit"
        unitData={{
          name: '2 BHK Luxury Residence — Advait Skyline',
          description: 'Spacious 2 BHK flat with 573 sq. ft. carpet area, 16ft living hall, 5\'6" wide sundeck balcony, and 2 bathrooms at Naroli–Bhilad Checkpost.',
          numberOfRooms: '2 BHK',
          floorSizeSqFt: 573,
        }}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: '2 BHK Flats in Naroli', item: '/2-bhk-flats-naroli' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Luxury Collection</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            2 BHK Luxury Residences in <span className="text-gold-gradient">Naroli–Bhilad</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-2xl leading-relaxed">
            Generous 573 sq. ft. carpet homes featuring a 16-foot long grand living room, 5&apos;6&quot; wide sundeck balcony, 3 pre-installed AC points, and 2 bathrooms.
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

      {/* Main Breakdown Section */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Render & Dimension Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#7B4F2E]/30 bg-[#1E130C] shadow-xl">
            <Image
              src={unit.renderPath}
              alt="2 BHK Isometric 3D Architectural Layout"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold block mb-1">
                Room Dimensions Schedule
              </span>
              <h2 className="font-display text-3xl font-bold text-[#1E130C]">
                573 Sq. Ft. Sanctioned Carpet Area
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {unit.rooms.map((r, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-[#7B4F2E]/15 bg-white shadow-xs">
                  <span className="text-[11px] font-sans uppercase font-bold text-[#7B4F2E] block">
                    {r.name}
                  </span>
                  <span className="font-display text-base font-bold text-[#1E130C] block mt-0.5">
                    {r.dimensions}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-2 border-t border-[#7B4F2E]/20">
              <span className="text-xs uppercase font-sans tracking-wider font-bold text-[#2A1F18]/70 block mb-2">
                Included Features
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#2A1F18]/85">
                {unit.keyFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check size={14} className="text-[#D9A21B] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lead Enquiry Form Embed */}
        <div className="pt-10 border-t border-[#7B4F2E]/20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-3xl font-bold text-[#1E130C]">
              Request 2 BHK Pricing & Site Visit Tour
            </h3>
            <p className="text-sm font-sans text-[#2A1F18]/80 leading-relaxed">
              Experience the spacious master bedroom, wide sunset balcony, and natural cross-ventilation in person at our site office.
            </p>
            <div className="p-4 rounded-xl border border-[#7B4F2E]/20 bg-white space-y-2 text-xs font-sans">
              <p>✓ 16-foot long grand living room with ample entertainment wall space.</p>
              <p>✓ 3 Dedicated AC points installed for hassle-free move-in.</p>
              <p>✓ Instant pricing sent via WhatsApp upon query.</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <LeadForm defaultInterest="2bhk" />
          </div>
        </div>

      </section>
    </div>
  );
}
