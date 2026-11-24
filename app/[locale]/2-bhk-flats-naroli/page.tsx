import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import { Check, ShieldCheck, MapPin, MessageSquare, ArrowRight, Clock, Users, Home, Compass } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import LeadForm from '@/components/lead/LeadForm';
import ProjectFactSheet from '@/components/sections/ProjectFactSheet';
import PropertyComparisonTable from '@/components/sections/PropertyComparisonTable';
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
    customTitle: 'Affordable 2 BHK Flats in Naroli near Silvassa | Advait Skyline',
    customDescription:
      'Affordable 2 BHK flats in Naroli near Silvassa with 652 sq. ft. built-up area (573 sq. ft. carpet). 16ft living hall, sunset balcony, 39+ amenities & individual parking.',
    ogImage: '/2bhk-layout.jpg',
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
    message: 'Hello, I am interested in the 2 BHK flats (573 sq. ft. carpet) at Advait Skyline, Naroli. Please share current pricing and payment plan details.',
    sourceRef: '2bhk-page',
  });

  const twoBhkFaqs = [
    {
      question: 'What is the sanctioned carpet area of 2 BHK residences at Advait Skyline?',
      answer: 'The sanctioned carpet area is 573 sq. ft. (53.23 sq. m.) measured plaster-to-plaster as per approved architectural plans under RERA registration number PM3000002600013.',
    },
    {
      question: 'What are the dimensions of the living room and sunset balcony?',
      answer: 'The living hall spans an impressive 16\'0" × 10\'6", offering seamless entertaining and dining space, and opens directly into a generous 5\'6" wide private sunset balcony.',
    },
    {
      question: 'How many bathrooms and air conditioning points are provided?',
      answer: 'The 2 BHK layout features 2 bathrooms (an attached master bathroom 7\'0" × 4\'0" and a common bathroom 4\'0" × 6\'0") along with 3 dedicated pre-installed AC electrical points.',
    },
    {
      question: 'What is the price of a 2 BHK apartment at Advait Skyline?',
      answer: 'Advait Skyline offers 2 BHK homes positioned at affordable prices. Interested homebuyers can obtain the developer-direct price quote, floor-wise cost breakdown, and approved payment milestones by contacting the sales team on WhatsApp at +91 99090 72390.',
    },
    {
      question: 'Are home loans pre-approved for Advait Skyline?',
      answer: 'Home loans are available from leading nationalized and private banking partners (such as SBI, Bank of Baroda, and HDFC), subject to individual borrower eligibility and documentation.',
    },
    {
      question: 'How far is the project from Silvassa city center?',
      answer: 'Advait Skyline is located on the Naroli–Silvassa main road, roughly 10 km (~13 minutes drive) from Silvassa Sports Stadium and municipal administrative offices.',
    },
  ];

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        type="unit"
        unitData={{
          name: 'Affordable 2 BHK Flats in Naroli near Silvassa | Advait Skyline',
          description: 'Affordable 2 BHK flat with 652 sq. ft. built-up area (573 sq. ft. carpet), 16ft living hall, 5\'6" sunset balcony, individual parking, and 2 bathrooms at Naroli–Bhilad Checkpost, near Silvassa.',
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
            <span>Affordable Housing · G+14</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Affordable 2 BHK Flats in <span className="text-gold-gradient">Naroli</span> — 652 Sq. Ft. Built-up Area
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-3xl leading-relaxed">
            Generous 652 sq. ft. built-up residences (573 sq. ft. carpet area, subject to document verification) featuring a 16-foot long grand living room, 5&apos;6&quot; wide sundeck balcony, 3 pre-installed AC points, individual parking, and 2 full bathrooms. Located on Naroli–Silvassa main road, 200 m from Naroli–Bhilad Checkpost, offering 39+ lifestyle amenities across 328 units with possession targeted before March 2028.
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

        {/* Section 1: Who This Flat Suits & Lifestyle */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Family Living &amp; Prestige
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Who Is the 573 Sq. Ft. 2 BHK Ideal For?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#2A1F18]/80 leading-relaxed max-w-4xl">
              Engineered for growing families and modern households requiring independent bedrooms, entertaining space, and dedicated work-from-home versatility. The 2 BHK residence at Advait Skyline combines generous room volumes with high cross-ventilation and panoramic countryside views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#7B4F2E]">
                <Users size={20} />
                <h3 className="font-bold text-base text-[#1E130C]">Growing Families</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#2A1F18]/75 leading-relaxed font-sans">
                Separate master and secondary bedrooms ensure privacy for parents and children, with ample wardrobe alcoves and two full bathrooms to streamline morning routines.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#7B4F2E]">
                <Home size={20} />
                <h3 className="font-bold text-base text-[#1E130C]">Entertaining &amp; Leisure</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#2A1F18]/75 leading-relaxed font-sans">
                The 16-foot long living hall and 5&apos;6&quot; wide sunset balcony offer an ideal setting for hosting festive gatherings, extended family dinners, and relaxed evening tea.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#7B4F2E]">
                <Compass size={20} />
                <h3 className="font-bold text-base text-[#1E130C]">Corporate Commuters</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#2A1F18]/75 leading-relaxed font-sans">
                Positioned 10 minutes from Bhilad Railway Station and 13 minutes from Silvassa, offering seamless connectivity for senior managers commuting across regional industrial zones.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Detailed Architectural Walkthrough & Render */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Space Planning &amp; Flow
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Architectural Layout Walkthrough
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#2A1F18]/80 leading-relaxed max-w-4xl">
              Upon entry, a dedicated foyer (4&apos;0&quot; &times; 4&apos;4&frac12;&quot;) creates a welcoming transition into the grand 16&apos;0&quot; &times; 10&apos;6&quot; living hall. Large anodized aluminum sliding glass windows usher in natural sunlight and open directly onto the wide 5&apos;6&quot; sundeck balcony. The private bedroom wing features a master bedroom (10&apos;9&quot; &times; 10&apos;0&quot;) with an attached bathroom (7&apos;0&quot; &times; 4&apos;0&quot;) and a second bedroom (9&apos;0&quot; &times; 10&apos;0&quot;) adjacent to the common bathroom (4&apos;0&quot; &times; 6&apos;0&quot;). The kitchen (9&apos;0&quot; &times; 7&apos;0&quot;) is complemented by a 3&apos;6&quot; wide utility wash area.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#7B4F2E]/30 bg-[#1E130C] shadow-xl">
              <Image
                src={unit.renderPath}
                alt="Advait Skyline 2 BHK 573 sq ft carpet architectural floor plan layout Naroli"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold block mb-1">
                  Approved Dimensions
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E130C]">
                  573 Sq. Ft. Room Schedule
                </h3>
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
                  Standard Specifications
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
        </section>

        {/* Section 3: Verified Project Fact Sheet */}
        <section>
          <ProjectFactSheet highlightUnit="2-bhk" />
        </section>

        {/* Section 4: Commute & Daily Travel Times */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#7B4F2E]">
              Commute Advantages
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Strategic Transit from Naroli–Bhilad Checkpost
            </h2>
            <p className="text-xs text-[#2A1F18]/65 font-sans">
              approx. travel time; actual time depends on traffic. Verified from project brochure and map records. Last updated: November 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#7B4F2E]/20 space-y-1">
              <span className="text-xs text-[#7B4F2E] font-bold uppercase tracking-wider block">Bhilad Checkpost</span>
              <p className="font-display text-2xl font-bold text-[#1E130C]">200 m / 1 min</p>
              <p className="text-xs text-[#2A1F18]/70">Immediate walking reach across border junction.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#7B4F2E]/20 space-y-1">
              <span className="text-xs text-[#7B4F2E] font-bold uppercase tracking-wider block">Bhilad Railway Station</span>
              <p className="font-display text-2xl font-bold text-[#1E130C]">5.1 km / 10 min</p>
              <p className="text-xs text-[#2A1F18]/70">Western Railway main line to Mumbai &amp; Surat.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#7B4F2E]/20 space-y-1">
              <span className="text-xs text-[#7B4F2E] font-bold uppercase tracking-wider block">Silvassa Sports Stadium</span>
              <p className="font-display text-2xl font-bold text-[#1E130C]">9.8 km / 13 min</p>
              <p className="text-xs text-[#2A1F18]/70">Fast uncongested highway drive to Silvassa center.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#7B4F2E]/20 space-y-1">
              <span className="text-xs text-[#7B4F2E] font-bold uppercase tracking-wider block">Vapi City &amp; NH-48</span>
              <p className="font-display text-2xl font-bold text-[#1E130C]">16.0 km / 25 min</p>
              <p className="text-xs text-[#2A1F18]/70">Commercial center, retail malls &amp; express trains.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Page-Specific FAQs */}
        <section className="bg-white border border-[#7B4F2E]/20 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#7B4F2E]">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E130C]">
              Questions About 2 BHK Flats at Advait Skyline
            </h2>
          </div>
          <div className="divide-y divide-[#7B4F2E]/15">
            {twoBhkFaqs.map((faq, idx) => (
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

        {/* Section 6: Cross-Links to Other Configurations & Highlights */}
        <section className="p-8 rounded-2xl bg-[#1E130C] text-[#EADFCB] space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#D9A21B] font-bold">
              Explore More Options
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Looking for 1 BHK or Commercial Spaces?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <Link
              href="/1-bhk-flats-naroli"
              className="p-5 rounded-xl bg-[#271910] border border-[#7B4F2E]/40 hover:border-[#D9A21B] transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-[#F2D27A] font-bold block mb-1">1 BHK Configuration</span>
                <p className="text-sm text-white font-semibold group-hover:text-[#F2D27A] transition-colors">
                  511 Sq. Ft. Smart Residences
                </p>
                <p className="text-xs text-[#EADFCB]/70 mt-1">2 bathrooms, private foyer &amp; balcony.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-[#D9A21B] font-bold mt-4">
                View 1 BHK Details <ArrowRight size={13} />
              </span>
            </Link>

            <Link
              href="/amenities"
              className="p-5 rounded-xl bg-[#271910] border border-[#7B4F2E]/40 hover:border-[#D9A21B] transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-[#F2D27A] font-bold block mb-1">Clubhouse &amp; Sports</span>
                <p className="text-sm text-white font-semibold group-hover:text-[#F2D27A] transition-colors">
                  39+ Lifestyle Amenities
                </p>
                <p className="text-xs text-[#EADFCB]/70 mt-1">Resort swimming pool, dual gyms, turf cricket.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-[#D9A21B] font-bold mt-4">
                Explore Amenities <ArrowRight size={13} />
              </span>
            </Link>

            <Link
              href="/flats-near-silvassa"
              className="p-5 rounded-xl bg-[#271910] border border-[#7B4F2E]/40 hover:border-[#D9A21B] transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-[#F2D27A] font-bold block mb-1">Silvassa Commuters</span>
                <p className="text-sm text-white font-semibold group-hover:text-[#F2D27A] transition-colors">
                  Flats Near Silvassa
                </p>
                <p className="text-xs text-[#EADFCB]/70 mt-1">~10 km via Naroli–Silvassa main road.</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-[#D9A21B] font-bold mt-4">
                View Silvassa Guide <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </section>

        {/* Configuration Comparison Table */}
        <PropertyComparisonTable />

        {/* Section 7: Lead Enquiry Form Embed */}
        <section className="pt-6 border-t border-[#7B4F2E]/20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-display text-3xl font-bold text-[#1E130C]">
              Request 2 BHK Price &amp; Sanctioned Drawings
            </h3>
            <p className="text-sm font-sans text-[#2A1F18]/80 leading-relaxed">
              We provide transparent developer-direct pricing, individual parking, bank loan assistance from nationalized banks (SBI, BOB, HDFC), and on-site inspection tours. Affordable pricing positioned for modern growing families. Get the full price sheet on WhatsApp.
            </p>
            <div className="p-4 rounded-xl border border-[#7B4F2E]/20 bg-white space-y-2 text-xs font-sans">
              <p>✓ 16-foot long grand living room with ample entertainment wall space.</p>
              <p>✓ 3 Dedicated AC electrical points installed for hassle-free move-in.</p>
              <p>✓ Home loans available from leading banks (subject to eligibility).</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <LeadForm defaultInterest="2bhk" />
          </div>
        </section>

      </div>
    </div>
  );
}
