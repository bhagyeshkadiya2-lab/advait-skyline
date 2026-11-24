import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import {
  MapPin,
  Navigation,
  Train,
  Car,
  Bus,
  Clock,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ExternalLink,
} from 'lucide-react';
import { PROJECT_DATA } from '@/lib/project-data';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { COMMUTE_CORRIDORS, DIRECTIONS_FAQS } from '@/data/directions';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import GoogleMapsEmbed from '@/components/sections/GoogleMapsEmbed';
import LeadForm from '@/components/lead/LeadForm';
import { BrochureDownloadButton } from '@/components/lead/BrochureDownloadModal';
import { Link } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/directions',
    customTitle: 'Directions & Commute Guide to Advait Skyline | Naroli–Bhilad Checkpost',
    customDescription:
      'Step-by-step directions to Advait Skyline on Naroli–Silvassa Main Road, 200m from Naroli–Bhilad Checkpost (DNH). Travel times from Bhilad Station (5.1 km), Silvassa (9.8 km) and Vapi (16 km).',
  });
}

export default async function DirectionsPage({
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
          { name: 'Location & Connectivity', item: '/project-location' },
          { name: 'Directions & Commute Guide', item: '/directions' },
        ]}
        faqItems={DIRECTIONS_FAQS}
      />

      {/* Hero Section */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <Navigation size={14} className="text-[#D9A21B]" />
            <span>Transit &amp; Route Navigation</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl">
            Directions &amp; Commute Guide to <span className="text-gold-gradient">Advait Skyline</span>
          </h1>

          <div className="speakable-summary p-4 rounded-xl bg-[#271910] border border-[#D9A21B]/40 max-w-2xl text-xs sm:text-sm text-[#EADFCB]/90 font-sans leading-relaxed">
            <strong className="text-[#F2D27A] block mb-1">Important Location Disambiguation:</strong>
            Advait Skyline is located on the Naroli–Silvassa Main Road, 200 m from the Naroli–Bhilad Checkpost, Dadra &amp; Nagar Haveli (396235).{' '}
            <span className="text-white font-semibold underline decoration-[#D9A21B]">This project is near Silvassa, DNH (not Narol, Ahmedabad).</span>
          </div>

          {/* Quick Action Navigation CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={SITE_CONFIG.geo.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-6 py-3.5 rounded-xl bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
            >
              <Navigation size={15} className="fill-[#1E130C]" />
              <span>Start Live GPS Navigation (Google Maps)</span>
              <ArrowUpRight size={14} />
            </a>

            <BrochureDownloadButton variant="outline" className="min-h-[44px] px-6 py-3.5">
              Download Location Map (PDF)
            </BrochureDownloadButton>
          </div>
        </div>
      </section>

      {/* 4 Commute Corridors */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1.5px] bg-[#7B4F2E]" />
            <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#7B4F2E]">
              Commuter Hubs &amp; Travel Corridors
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E130C]">
            How to Reach Advait Skyline From Key Cities
          </h2>
          <p className="text-sm sm:text-base text-[#2A1F18]/80 font-sans leading-relaxed">
            Whether arriving via Western Railway at Bhilad, driving from central Silvassa, or commuting from Vapi’s industrial belt, reaching Advait Skyline is smooth and direct.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMMUTE_CORRIDORS.map((corridor) => (
            <div
              key={corridor.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#7B4F2E]/20 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-sans uppercase font-bold text-[#7B4F2E] tracking-wider block">
                      {corridor.mode}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1E130C] mt-1">
                      {corridor.title}
                    </h3>
                  </div>
                  <div className="text-right shrink-0 bg-[#EADFCB]/50 px-3 py-1.5 rounded-xl border border-[#7B4F2E]/20">
                    <span className="font-display text-xl font-bold text-[#7B4F2E] block leading-none">
                      {corridor.time}
                    </span>
                    <span className="text-[11px] font-sans text-[#2A1F18]/70 font-semibold">
                      {corridor.distance}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono bg-[#FBF8F2] p-2.5 rounded-lg border border-[#7B4F2E]/15 text-[#7B4F2E] font-medium">
                  {corridor.route}
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-sans uppercase font-bold text-[#1E130C] tracking-wide">
                    Step-by-Step Directions:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#2A1F18]/80 font-sans">
                    {corridor.highlights.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#7B4F2E]/15 text-[#7B4F2E] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#7B4F2E]/15 bg-[#FBF8F2] -mx-6 -mb-6 p-4 sm:-mx-8 sm:-mb-8 sm:p-6 rounded-b-3xl">
                <div className="flex items-start gap-2 text-xs text-[#2A1F18]/85 font-sans">
                  <Bus size={15} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#1E130C]">Public Transit Note:</strong> {corridor.transitTip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Connectivity Table (From Brochure Page 21) */}
      <section id="project-fact-sheet" className="py-20 bg-[#1E130C] text-[#EADFCB] relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#F2D27A] block">
              Official Project Fact Sheet · Page 21
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Key Landmark Distances &amp; Commute Times
            </h2>
            <p className="text-sm text-[#EADFCB]/80 font-sans leading-relaxed">
              All distances and driving times verified from the official Advait Skyline project brochure and Google Maps transit telemetry.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#7B4F2E]/40 bg-[#271910] shadow-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
              <caption className="sr-only">Advait Skyline transit connectivity distances and commute times from brochure page 21</caption>
              <thead>
                <tr className="border-b border-[#7B4F2E]/40 bg-[#1E130C] text-[#F2D27A] uppercase tracking-wider text-[11px] font-bold">
                  <th scope="col" className="py-3.5 px-4 sm:px-6">Destination Landmark</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6">Category</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6">Distance</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6">Drive Time</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6">Transit Corridor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7B4F2E]/25">
                {PROJECT_DATA.connectivity.map((item, index) => (
                  <tr key={index} className="hover:bg-[#1E130C]/60 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-white flex items-center gap-2">
                      <MapPin size={14} className="text-[#D9A21B] shrink-0" />
                      <span>{item.name}</span>
                    </td>
                    <td className="py-3 px-4 sm:px-6 uppercase tracking-wider text-[11px] text-[#EADFCB]/70">
                      {item.category}
                    </td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-[#F2D27A] font-bold">
                      {item.distance}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-white font-medium">
                      approx. {item.time}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-[12px] text-[#EADFCB]/75">
                      {item.approxNote || 'Naroli–Silvassa Highway'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Google Map Embed */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#7B4F2E] block">
            Google Maps Verification
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E130C]">
            Live Location &amp; Satellite View
          </h2>
          <p className="text-sm text-[#2A1F18]/80 font-sans">
            Pinpoint accuracy on Naroli–Silvassa Main Road, opposite Vadfaliya.
          </p>
        </div>

        <GoogleMapsEmbed />
      </section>

      {/* Answer-First FAQs */}
      <section className="py-20 bg-white border-t border-[#7B4F2E]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="space-y-3 text-center">
            <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#7B4F2E] block">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E130C]">
              Directions &amp; Location FAQs
            </h2>
            <p className="text-sm text-[#2A1F18]/80 font-sans">
              Concise answers to common traveler and homebuyer navigation queries.
            </p>
          </div>

          <div className="space-y-4">
            {DIRECTIONS_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[#7B4F2E]/20 bg-[#FBF8F2] space-y-2.5"
              >
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#1E130C] flex items-start gap-2.5">
                  <span className="text-[#7B4F2E] font-bold text-base">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#2A1F18]/85 font-sans leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Visit Booking Form */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase font-sans font-bold tracking-widest text-[#7B4F2E] block">
            Plan Your Visit
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E130C]">
            Schedule an Accompanied Site Tour
          </h2>
          <p className="text-sm text-[#2A1F18]/80 font-sans max-w-md mx-auto">
            Book a convenient time slot. Our sales team will receive you at the sales gallery and provide a private tour.
          </p>
        </div>

        <LeadForm />
      </section>
    </div>
  );
}
