import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { MapPin, Clock, Check, ShieldCheck, MessageSquare, ArrowRight, Car, Train, Building2 } from 'lucide-react';
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
    path: '/flats-in-silvassa',
    customTitle: "Flats in Silvassa & Naroli | Buyer's Guide – Advait Skyline",
    customDescription:
      "Buyer's guide for flats in Silvassa and Naroli, DNH. Compare central Silvassa vs Naroli road: commute times, property rates, amenities, and RERA verified homes.",
  });
}

export default async function FlatsInSilvassaGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: 'Hello, I am reading the Silvassa vs Naroli Property Guide and would like pricing and project details for Advait Skyline.',
    sourceRef: 'flats-in-silvassa-guide',
  });

  const comparisonRows = [
    {
      attribute: 'Distance to Silvassa Center',
      silvassaCity: 'Within city limits (0–3 km)',
      naroliRoad: 'Approx. 10 km (~13 min direct highway drive)',
      winner: 'Advait Skyline (quick highway transit without city jams)',
    },
    {
      attribute: 'Proximity to Bhilad Railway Station',
      silvassaCity: '15 to 20 km (35–45 min commute)',
      naroliRoad: '5.1 km (~10 min drive to station)',
      winner: 'Advait Skyline (30 min faster to Western Railway mainline)',
    },
    {
      attribute: 'Living Density & Traffic',
      silvassaCity: 'High congestion, narrow inner roads, scarce parking',
      naroliRoad: 'Wide 4-lane main road frontage, peaceful open green environs',
      winner: 'Advait Skyline (resort living with 39+ amenities)',
    },
    {
      attribute: 'Community Amenities',
      silvassaCity: 'Standalone older buildings with limited parking and no pool',
      naroliRoad: 'G+14 gated society with swimming pool, dual gyms, turf cricket',
      winner: 'Advait Skyline (complete lifestyle ecosystem)',
    },
    {
      attribute: 'Value per Square Foot',
      silvassaCity: 'Premium land costs with higher entry ticket size',
      naroliRoad: 'High-value affordable pricing with individual parking and 39+ amenities',
      winner: 'Advait Skyline (superior carpet area for budget)',
    },
  ];

  const silvassaFaqs = [
    {
      question: 'Is Advait Skyline located directly inside Silvassa city?',
      answer: 'No. Advait Skyline is located in Naroli, Dadra & Nagar Haveli (PIN 396235), approximately 10 km from Silvassa city center along the Naroli–Silvassa main road (about 13 minutes drive). It is situated 200 meters from the Naroli–Bhilad Checkpost.',
    },
    {
      question: 'Why choose a flat on Naroli–Silvassa road over central Silvassa?',
      answer: 'Living on the Naroli corridor gives residents a fast 13-minute commute into Silvassa while being just 5.1 km (~10 minutes) from Bhilad Railway Station. Residents enjoy a G+14 gated development with 39+ amenities and cleaner, less congested surroundings.',
    },
    {
      question: 'What configurations are offered at Advait Skyline near Silvassa?',
      answer: 'The project offers approved 1 BHK (511 sq. ft. carpet area) and 2 BHK (573 sq. ft. carpet area) residences as well as ground-floor retail shops (Shops 1–20) and commercial offices.',
    },
    {
      question: 'Is public transit available between Naroli and Silvassa?',
      answer: 'Yes. Regular state transport buses, local shuttles, and autorickshaws ply continuously along the Naroli–Silvassa highway, connecting residents to central government offices, markets, and colleges.',
    },
  ];

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        type="faq"
        customFaqs={silvassaFaqs}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Flats in Silvassa Guide', item: '/flats-in-silvassa' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Regional Buyer Guide · D&amp;NH</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Flats in <span className="text-gold-gradient">Silvassa &amp; Naroli</span>: Buyer&apos;s Comparison
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-3xl leading-relaxed">
            Planning to purchase an apartment in Silvassa or Dadra &amp; Nagar Haveli? Discover why savvy homebuyers and corporate commuters choose Advait Skyline on Naroli–Silvassa Main Road—roughly 10 km from Silvassa Stadium and just 5.1 km from Bhilad Railway Station. Advait Skyline is in Naroli, near Silvassa, Dadra &amp; Nagar Haveli (not Narol, Ahmedabad).
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

        {/* Section 1: Detailed Comparison Table */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Comparative Analysis
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Central Silvassa vs. Naroli Highway Corridor
            </h2>
            <p className="text-xs sm:text-sm text-[#2A1F18]/75 font-sans max-w-3xl">
              An objective evaluation of daily transit, quality of life, infrastructure, and property values for homebuyers in Dadra &amp; Nagar Haveli.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#7B4F2E]/20 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
              <thead>
                <tr className="bg-[#1E130C] text-[#F2D27A] border-b border-[#7B4F2E]/30">
                  <th className="py-3.5 px-4 sm:px-6 font-bold w-1/4">Evaluation Factor</th>
                  <th className="py-3.5 px-4 font-bold w-1/3">Central Silvassa City</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold w-1/3">Advait Skyline (Naroli Road)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7B4F2E]/10 text-[#2A1F18]/85">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FBF8F2] transition-colors">
                    <th scope="row" className="py-3.5 px-4 sm:px-6 font-semibold text-[#1E130C] align-top">{row.attribute}</th>
                    <td className="py-3.5 px-4 align-top text-[#2A1F18]/70">{row.silvassaCity}</td>
                    <td className="py-3.5 px-4 sm:px-6 align-top font-medium text-[#7B4F2E]">{row.naroliRoad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Drive Time & Distance Matrix */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Transit Matrix
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Drive Times to Silvassa Civic &amp; Commercial Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#7B4F2E]/20 space-y-1">
              <span className="text-xs text-[#7B4F2E] font-bold uppercase tracking-wider block">Silvassa Sports Stadium</span>
              <p className="font-display text-2xl font-bold text-[#1E130C]">9.8 km / ~13 min</p>
              <p className="text-xs text-[#2A1F18]/70 font-sans">Athletic stadium and recreational grounds.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#7B4F2E]/20 space-y-1">
              <span className="text-xs text-[#7B4F2E] font-bold uppercase tracking-wider block">Namo Medical Institute</span>
              <p className="font-display text-2xl font-bold text-[#1E130C]">14.0 km / ~21 min</p>
              <p className="text-xs text-[#2A1F18]/70 font-sans">Tertiary multi-speciality hospital &amp; college.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#7B4F2E]/20 space-y-1">
              <span className="text-xs text-[#7B4F2E] font-bold uppercase tracking-wider block">Bhilad Railway Station</span>
              <p className="font-display text-2xl font-bold text-[#1E130C]">5.1 km / ~10 min</p>
              <p className="text-xs text-[#2A1F18]/70 font-sans">Direct mainline connectivity to Mumbai &amp; Surat.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#7B4F2E]/20 space-y-1">
              <span className="text-xs text-[#7B4F2E] font-bold uppercase tracking-wider block">Vapi Commercial Junction</span>
              <p className="font-display text-2xl font-bold text-[#1E130C]">16.0 km / ~25 min</p>
              <p className="text-xs text-[#2A1F18]/70 font-sans">Vande Bharat express station and NH-48 corridor.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Project Fact Sheet Embed */}
        <section>
          <ProjectFactSheet />
        </section>

        {/* Section 4: Available Configurations Overview */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Available Units
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              1 BHK &amp; 2 BHK Approved Residences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-4">
              <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold uppercase tracking-wider">
                1 BHK Residence
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1E130C]">575 Sq. Ft. Built-up Area</h3>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                511 sq. ft. carpet area, 2 full bathrooms, private entrance foyer, 4-foot wide balcony, utility wash area, individual parking, and affordable pricing.
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
              <h3 className="font-display text-2xl font-bold text-[#1E130C]">652 Sq. Ft. Built-up Area</h3>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                573 sq. ft. carpet area, 16-foot long living hall, 5&apos;6&quot; wide sunset balcony, 2 bathrooms, utility wash area, individual parking, and affordable pricing.
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

        {/* Section 5: FAQs */}
        <section className="bg-white border border-[#7B4F2E]/20 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E130C]">
            Frequently Asked Questions — Flats in Silvassa &amp; Naroli
          </h2>
          <div className="divide-y divide-[#7B4F2E]/15">
            {silvassaFaqs.map((faq, idx) => (
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

        {/* Section 6: Lead Form */}
        <section className="max-w-4xl mx-auto">
          <LeadForm />
        </section>

      </div>
    </div>
  );
}
