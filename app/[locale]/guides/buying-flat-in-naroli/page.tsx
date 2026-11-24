import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { MapPin, Clock, Train, ArrowLeft, MessageSquare } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { PROJECT_DATA } from '@/lib/project-data';
import { buildWhatsAppLink } from '@/lib/tracking';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/guides/buying-flat-in-naroli',
    customTitle: 'Buying a Flat in Naroli: Buyer Checklist & Location Guide',
    customDescription:
      'Complete homebuyer checklist for buying 1 & 2 BHK flats in Naroli, Dadra & Nagar Haveli: connectivity to Bhilad, Vapi, NH-48, civic amenities, and real estate growth factors.',
  });
}

export default async function BuyingFlatInNaroliPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I read the Naroli homebuyer guide and would like to explore 1 & 2 BHK flats at Advait Skyline.",
    sourceRef: 'guide-buying-flat-in-naroli',
  });

  return (
    <article className="w-full bg-[#FBF8F2] text-[#2A1F18] py-28 px-4 sm:px-6">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Guides', item: '/guides' },
          { name: 'Buying a Flat in Naroli', item: '/guides/buying-flat-in-naroli' },
        ]}
      />

      <div className="max-w-3xl mx-auto space-y-10 bg-white border border-[#7B4F2E]/20 rounded-3xl p-8 sm:p-14 shadow-sm">
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#7B4F2E] hover:text-[#1E130C]"
        >
          <ArrowLeft size={14} />
          <span>Back to All Guides</span>
        </Link>

        <div className="space-y-3 border-b border-[#7B4F2E]/20 pb-8">
          <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#7B4F2E] block">
            Location & Lifestyle Guide
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#1E130C] leading-tight">
            Buying a Flat in Naroli: Complete Buyer Checklist & Location Guide
          </h1>
          <p className="text-xs font-sans text-[#2A1F18]/60">
            Published by Dhanasvi Infra Advisory · 5 min read
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm font-sans leading-relaxed text-[#2A1F18]/85 text-justify">
          <p>
            The Naroli–Bhilad corridor along the southern border of Gujarat and Dadra & Nagar Haveli is witnessing sustained residential growth. Driven by industrial employment in Silvassa, commercial connectivity toward Vapi, and direct rail access via Western Railway at Bhilad Station, homebuyers are increasingly turning toward thoughtfully planned gated communities.
          </p>

          <h2 className="font-display text-2xl font-bold text-[#1E130C] pt-4">
            Key Advantages of the Naroli–Bhilad Checkpost
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Immediate Border Connectivity:</strong> Positioned just 200 meters from the checkpost, residents enjoy rapid transit across state borders without entering congested urban town centers.</li>
            <li><strong>Western Railway Mainline Reach:</strong> Bhilad Railway Station is reachable in approximately 10 minutes (5.1 km), providing frequent suburban and express trains towards Mumbai and Surat.</li>
            <li><strong>Industrial Employment Hubs:</strong> Proximate to Silvassa’s key corporate manufacturing belts while maintaining a serene residential environment.</li>
            <li><strong>Comprehensive Civic Infrastructure:</strong> Schools (Naroli High School, 4 min), healthcare (Primary Health Centre, 5 min; Namo Medical Institute, 21 min), and banking facilities (SBI, BOB, HDFC, 3 min) are within minutes.</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-[#1E130C] pt-4">
            What Homebuyers Must Verify Before Booking
          </h2>
          <p>
            When purchasing an apartment in Dadra & Nagar Haveli, verify that the project possesses a valid RERA registration number, sanctioned municipal drawings, clear title clearances from chartered advocates, and formal pre-approvals from leading nationalized home loan lenders.
          </p>

          <div className="p-6 rounded-2xl bg-[#1E130C] text-[#EADFCB] space-y-3 not-italic">
            <h3 className="font-display text-xl font-bold text-white">
              Explore Advait Skyline at Naroli–Bhilad Checkpost
            </h3>
            <p className="text-xs text-[#EADFCB]/80 leading-relaxed">
              Featuring 1 BHK (511 sq. ft.) and 2 BHK (573 sq. ft.) residences with 39+ lifestyle amenities and G+1 commercial storefronts.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all mt-2"
            >
              <MessageSquare size={15} />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
