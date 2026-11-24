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
import { buildWhatsAppLink } from '@/lib/tracking';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/flats-near-silvassa',
    customTitle: 'Flats Near Silvassa – Naroli Road | Advait Skyline',
    customDescription:
      'Explore 1 & 2 BHK flats near Silvassa on Naroli–Silvassa main road (~10 km from Silvassa). G+14 tower by Dhanasvi Infra, 39+ amenities, verified commute times.',
  });
}

export default async function FlatsNearSilvassaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: 'Hello, I am inquiring about flats near Silvassa at Advait Skyline, Naroli. Please share floor plans, location details, and pricing.',
    sourceRef: 'flats-near-silvassa-page',
  });

  const commutePoints = [
    { destination: 'Naroli–Bhilad Checkpost', distance: '200 m', time: '1 min', note: 'Immediate walking distance on main road' },
    { destination: 'Naroli High School', distance: '2.4 km', time: '4 min', note: 'Secondary schooling & educational center' },
    { destination: 'Banks (SBI / BOB / HDFC)', distance: '2.5 km', time: '3 min', note: 'ATM & retail banking facilities' },
    { destination: 'Bhilad Railway Station', distance: '5.1 km', time: '10 min', note: 'Direct Western Railway main line trains' },
    { destination: 'Silvassa Sports Stadium', distance: '9.8 km', time: '13 min', note: 'Silvassa municipal athletic center' },
    { destination: 'Central Silvassa (approx.)', distance: '~10 km', time: '14 min', note: 'Administrative & cultural center of D&NH' },
    { destination: 'Namo Medical Education Institute', distance: '14.0 km', time: '21 min', note: 'Tertiary medical college & hospital' },
    { destination: 'Vapi Railway Station & NH-48', distance: '16.0 km', time: '25 min', note: 'Express train hub and Mumbai–Surat highway' },
  ];

  const pageFaqs = [
    {
      question: 'Where is Advait Skyline located relative to Silvassa?',
      answer: 'Advait Skyline is located on the Naroli–Silvassa main road in Naroli, Dadra & Nagar Haveli (PIN 396235), approximately 10 km from central Silvassa (about a 13 to 15 minute drive). It is situated 200 meters from the Naroli–Bhilad Checkpost.',
    },
    {
      question: 'Is Advait Skyline located in Silvassa city?',
      answer: 'No. Advait Skyline is in Naroli, Dadra & Nagar Haveli, near Silvassa. It provides close proximity and smooth highway commute to Silvassa while offering direct access to Bhilad Railway Station.',
    },
    {
      question: 'What flat configurations are available near Silvassa at Advait Skyline?',
      answer: 'Advait Skyline offers 1 BHK flats (511 sq. ft. carpet area) and 2 BHK flats (573 sq. ft. carpet area) as per approved plans, along with 39+ lifestyle amenities and ground-floor retail shops.',
    },
    {
      question: 'How does commuting from Naroli to Silvassa work?',
      answer: 'The project sits directly on the Naroli–Silvassa main road. Daily commute to Silvassa takes approximately 13 to 15 minutes by four-wheeler or two-wheeler under typical traffic conditions.',
    },
  ];

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        type="faq"
        customFaqs={pageFaqs}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Flats Near Silvassa', item: '/flats-near-silvassa' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Strategic Location Advantage</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Flats Near Silvassa — <span className="text-gold-gradient">Naroli Road</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-3xl leading-relaxed">
            Advait Skyline is located in Naroli, approximately 10 km from Silvassa along the Naroli–Silvassa main road (about a 13-minute drive). Enjoy 1 &amp; 2 BHK modern homes with 39+ amenities, peaceful surroundings, and rapid access to both Silvassa and Bhilad Railway Station.
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-20">

        {/* Location Honesty & Proximity Overview */}
        <section className="bg-white border border-[#7B4F2E]/20 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#7B4F2E]">
              Location Clarity &amp; Distance
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              About 10 km from Silvassa, 200 m from Naroli–Bhilad Checkpost
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#2A1F18]/80 leading-relaxed max-w-4xl">
            Advait Skyline is developed by Dhanasvi Infra at Vadfaliya, Naroli, Dadra &amp; Nagar Haveli. It is situated directly on the Naroli–Silvassa main road, approximately 200 meters from the Naroli–Bhilad Checkpost. The project is approximately 10 km from Silvassa city center and offers a fast, uncongested daily drive of roughly 13 to 15 minutes to Silvassa Stadium and civic offices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl bg-[#FBF8F2] border border-[#7B4F2E]/15 space-y-2">
              <div className="flex items-center gap-2 text-[#7B4F2E]">
                <Car size={20} />
                <h3 className="font-bold text-sm text-[#1E130C]">Silvassa Drive</h3>
              </div>
              <p className="font-display text-2xl font-bold text-[#7B4F2E]">~13–15 min</p>
              <p className="text-xs text-[#2A1F18]/70 font-sans">
                Direct 4-lane connectivity along Naroli–Silvassa highway (approx. 10 km).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FBF8F2] border border-[#7B4F2E]/15 space-y-2">
              <div className="flex items-center gap-2 text-[#7B4F2E]">
                <Train size={20} />
                <h3 className="font-bold text-sm text-[#1E130C]">Bhilad Station</h3>
              </div>
              <p className="font-display text-2xl font-bold text-[#7B4F2E]">5.1 km / 10 min</p>
              <p className="text-xs text-[#2A1F18]/70 font-sans">
                Quick transit to Western Railway main line towards Mumbai and Surat.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FBF8F2] border border-[#7B4F2E]/15 space-y-2">
              <div className="flex items-center gap-2 text-[#7B4F2E]">
                <Building2 size={20} />
                <h3 className="font-bold text-sm text-[#1E130C]">G+14 Community</h3>
              </div>
              <p className="font-display text-2xl font-bold text-[#7B4F2E]">39+ Amenities</p>
              <p className="text-xs text-[#2A1F18]/70 font-sans">
                Resort pool, dual gyms, turf box cricket, and 20 ground retail shops.
              </p>
            </div>
          </div>
        </section>

        {/* Verified Commute Table */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#7B4F2E]">
              Verified Travel Times
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Commute from Advait Skyline, Naroli
            </h2>
            <p className="text-xs text-[#2A1F18]/65 font-sans">
              approx. travel time; actual time depends on traffic. Verified from project brochure and map data. Last updated: November 2026.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#7B4F2E]/20 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
              <thead>
                <tr className="bg-[#1E130C] text-[#F2D27A] border-b border-[#7B4F2E]/30">
                  <th className="py-3.5 px-4 sm:px-6 font-bold">Key Landmark / Destination</th>
                  <th className="py-3.5 px-4 font-bold">Distance</th>
                  <th className="py-3.5 px-4 font-bold">Approx. Time</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold">Connectivity Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7B4F2E]/10 text-[#2A1F18]/85">
                {commutePoints.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FBF8F2] transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#1E130C]">{row.destination}</td>
                    <td className="py-3 px-4 font-display font-bold text-[#7B4F2E]">{row.distance}</td>
                    <td className="py-3 px-4">{row.time}</td>
                    <td className="py-3 px-4 sm:px-6 text-xs text-[#2A1F18]/70">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who This Location Suits */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#7B4F2E]">
              Target Profile
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Who Is This Location Best Suited For?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-[#7B4F2E]/20 shadow-sm space-y-3">
              <h3 className="font-display text-lg font-bold text-[#1E130C]">
                Silvassa &amp; Naroli Working Professionals
              </h3>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 leading-relaxed font-sans">
                Ideal for managers, engineers, and executives working in Naroli or Silvassa industrial estates who desire a modern high-rise lifestyle without central city traffic congestion.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#7B4F2E]/20 shadow-sm space-y-3">
              <h3 className="font-display text-lg font-bold text-[#1E130C]">
                Frequent Commuters to Bhilad &amp; Mumbai
              </h3>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 leading-relaxed font-sans">
                At just 5.1 km from Bhilad Railway Station, residents can easily catch daily Western Railway trains to Vapi, Surat, and Mumbai, saving significant transit time compared to living in Silvassa city.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#7B4F2E]/20 shadow-sm space-y-3">
              <h3 className="font-display text-lg font-bold text-[#1E130C]">
                Families Seeking Complete Gated Amenities
              </h3>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 leading-relaxed font-sans">
                Families enjoy 39+ lifestyle amenities right at home—swimming pool, separate gyms, children play parks, mini theater, and 24&times;7 security—offering a comprehensive resort-style living experience.
              </p>
            </div>
          </div>
        </section>

        {/* Configurations Breakdown */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#7B4F2E]">
              Approved Floor Plans
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Available Configurations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-sm space-y-4">
              <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold font-sans uppercase tracking-wider">
                1 BHK Residence
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1E130C]">575 Sq. Ft. Built-up Area</h3>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                Spacious 1 BHK (511 sq. ft. carpet area) with 2 full bathrooms, private entrance foyer, 4-foot wide balcony, utility wash area, and 2 AC points.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/1-bhk-flats-naroli"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B4F2E] hover:underline uppercase tracking-wider"
                >
                  <span>Explore 1 BHK Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-sm space-y-4">
              <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold font-sans uppercase tracking-wider">
                2 BHK Residence
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1E130C]">652 Sq. Ft. Built-up Area</h3>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                Luxury 2 BHK (573 sq. ft. carpet area) featuring a 16-foot long grand living room, 5&apos;6&quot; wide sunset balcony, 2 bathrooms, utility area, and 3 AC points.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/2-bhk-flats-naroli"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B4F2E] hover:underline uppercase tracking-wider"
                >
                  <span>Explore 2 BHK Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white border border-[#7B4F2E]/20 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E130C]">
            Frequently Asked Questions — Flats Near Silvassa
          </h2>
          <div className="divide-y divide-[#7B4F2E]/15">
            {pageFaqs.map((faq, idx) => (
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

        {/* Lead Form */}
        <section className="max-w-4xl mx-auto">
          <LeadForm />
        </section>

      </div>
    </div>
  );
}
