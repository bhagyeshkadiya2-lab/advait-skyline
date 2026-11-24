import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import {
  Check,
  ShieldCheck,
  MapPin,
  MessageSquare,
  ArrowRight,
  Clock,
  Users,
  Home,
  Layers,
  Sparkles,
  TrendingUp,
  Scale,
  Building2,
  FileText,
  BadgeCheck,
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import PropertyComparisonTable from '@/components/sections/PropertyComparisonTable';
import { BrochureDownloadButton } from '@/components/lead/BrochureDownloadModal';
import { buildWhatsAppLink } from '@/lib/tracking';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/1-bhk-vs-2-bhk',
    customTitle: '1 BHK vs 2 BHK Flats in Naroli Comparison Guide | Advait Skyline',
    customDescription:
      'Compare 1 BHK (575 sq. ft. built-up) vs 2 BHK (652 sq. ft. built-up) at Advait Skyline, Naroli. Floor plan differences, affordability, rental yield, and floor matrix.',
    ogImage: '/images/building/elevation-twilight.webp',
  });
}

export default async function OneBhkVsTwoBhkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const waCompareUrl = buildWhatsAppLink({
    phone: SITE_CONFIG.contact.whatsappNumber,
    message:
      'Hello, I am comparing 1 BHK (575 sq. ft.) and 2 BHK (652 sq. ft.) at Advait Skyline, Naroli. Please share current pricing and payment plan details.',
    sourceRef: 'comparison-page-main',
  });

  const comparisonFaqs = [
    {
      question: 'What is the main difference between 1 BHK and 2 BHK at Advait Skyline?',
      answer:
        'The 1 BHK features 575 sq. ft. built-up area (511 sq. ft. carpet area, subject to document verification) with 1 bedroom and 2 full bathrooms. The 2 BHK offers 652 sq. ft. built-up area (573 sq. ft. carpet area, subject to document verification) with 2 bedrooms, an expanded 16-foot living hall, a wider 5\'6" sunset balcony, and 2 full bathrooms.',
    },
    {
      question: 'Do both 1 BHK and 2 BHK include 2 separate bathrooms?',
      answer:
        'Yes. Both 1 BHK and 2 BHK apartments at Advait Skyline are thoughtfully engineered with 2 separate full bathrooms (master attached and common guest bathroom), ensuring exceptional privacy and convenience rarely found in compact layouts.',
    },
    {
      question: 'Which configuration offers better rental return in Naroli?',
      answer:
        '1 BHK units typically offer a slightly higher percentage rental yield due to lower acquisition capital and robust demand from single executives, plant engineers, and commuter couples in the Naroli, Bhilad, and Silvassa industrial corridors. 2 BHK units provide higher absolute monthly rental income, longer tenant retention, and superior long-term capital appreciation for families.',
    },
    {
      question: 'Are both configurations eligible for bank home loans?',
      answer:
        'Yes. Advait Skyline is a RERA-registered G+14 project (RERA No: PM3000002600013) with approvals from leading nationalized and private banks (including SBI, Bank of Baroda, HDFC, and ICICI), offering loan assistance up to 80–90% subject to borrower eligibility.',
    },
    {
      question: 'Are individual parking spaces provided with both 1 BHK and 2 BHK?',
      answer:
        'Yes. Individual parking is available across the development subject to allocation terms and registered agreement specifications.',
    },
    {
      question: 'When is the possession target for Advait Skyline?',
      answer:
        'The possession target is before March 2028 as per construction scheduling and registered agreement for sale terms.',
    },
  ];

  return (
    <>
      <JsonLd
        locale={locale}
        type="faq"
        faqItems={comparisonFaqs}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: '1 BHK vs 2 BHK Comparison', item: '/1-bhk-vs-2-bhk' },
        ]}
      />

      <main className="min-h-screen bg-[#FDFBF7] text-[#1E130C]">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#1E130C] border-b border-[#7B4F2E]/30 py-3 text-xs font-sans">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[#EADFCB]/70">
            <Link href="/" className="hover:text-[#F2D27A] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#EADFCB]/50">Residences</span>
            <span>/</span>
            <span className="text-[#F2D27A] font-medium">1 BHK vs 2 BHK Comparison</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#1E130C] via-[#2A1910] to-[#1E130C] text-[#EADFCB] py-14 sm:py-20 border-b border-[#7B4F2E]/30">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7B4F2E]/40 border border-[#D9A21B]/40 text-[#F2D27A] text-xs font-sans tracking-wide">
                <Scale size={14} className="text-[#F2D27A]" />
                <span>Buyer Decision Matrix · G+14 Approved Residences</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                1 BHK vs 2 BHK Flats in Naroli — Complete Floor Plan &amp; Value Guide
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#EADFCB]/85 leading-relaxed">
                Choosing between a 575 sq. ft. built-up 1 BHK and a 652 sq. ft. built-up 2 BHK at Advait Skyline?
                Compare room dimensions, living space flexibility, monthly affordability, rental yield, and long-term
                appreciation to make an informed real estate investment on Naroli–Silvassa Main Road.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href={waCompareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#D9A21B] to-[#F2D27A] text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all"
                >
                  <MessageSquare size={16} />
                  <span>Get Comparative Price Quote on WhatsApp</span>
                </a>
                <BrochureDownloadButton
                  variant="outline"
                  defaultConfig="1bhk"
                  className="border-[#D9A21B]/60 text-[#F2D27A] hover:bg-[#D9A21B]/15 text-xs font-bold uppercase tracking-wider px-5 py-3"
                >
                  Download Full Floor Plan PDF
                </BrochureDownloadButton>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Highlights Matrix */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white border border-[#7B4F2E]/20 rounded-xl p-4 shadow-sm text-center">
              <span className="block text-xs uppercase font-sans text-[#7B4F2E] font-bold">1 BHK Built-up</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-[#1E130C]">575 Sq. Ft.</span>
              <span className="block text-[11px] text-[#2A1F18]/60 mt-0.5">511 Sq. Ft. Carpet</span>
            </div>
            <div className="bg-white border border-[#7B4F2E]/20 rounded-xl p-4 shadow-sm text-center">
              <span className="block text-xs uppercase font-sans text-[#7B4F2E] font-bold">2 BHK Built-up</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-[#1E130C]">652 Sq. Ft.</span>
              <span className="block text-[11px] text-[#2A1F18]/60 mt-0.5">573 Sq. Ft. Carpet</span>
            </div>
            <div className="bg-white border border-[#7B4F2E]/20 rounded-xl p-4 shadow-sm text-center">
              <span className="block text-xs uppercase font-sans text-[#7B4F2E] font-bold">Both Units Include</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-[#1E130C]">2 Bathrooms</span>
              <span className="block text-[11px] text-[#2A1F18]/60 mt-0.5">Master + Common Bath</span>
            </div>
            <div className="bg-white border border-[#7B4F2E]/20 rounded-xl p-4 shadow-sm text-center">
              <span className="block text-xs uppercase font-sans text-[#7B4F2E] font-bold">Possession Target</span>
              <span className="font-display text-xl sm:text-2xl font-bold text-[#1E130C]">Before Mar 2028</span>
              <span className="block text-[11px] text-[#2A1F18]/60 mt-0.5">RERA Registered</span>
            </div>
          </div>
        </section>

        {/* Embedded Property Comparison Table */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <PropertyComparisonTable />
        </section>

        {/* Detailed Side-by-Side Architectural Analysis */}
        <section className="bg-white border-y border-[#7B4F2E]/15 py-14">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
                Detailed Space Planning
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
                Layout &amp; Architectural Differences
              </h2>
              <p className="text-xs sm:text-sm text-[#2A1F18]/70 font-sans">
                Both layouts are designed by Takshashila Architects with zero dead space, cross-ventilation, and dual bathrooms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 1 BHK Card */}
              <div className="p-8 rounded-2xl bg-[#FDFBF7] border border-[#7B4F2E]/25 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold uppercase tracking-wider">
                    Smart 1 BHK Residence
                  </span>
                  <span className="text-xs font-mono text-[#7B4F2E] font-bold">575 Sq. Ft. Built-up</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-[#1E130C]">
                    Compact Luxury with 2 Bathrooms
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2A1F18]/80 leading-relaxed font-sans">
                    Engineered to feel like a boutique suite. Uniquely incorporates an attached master bathroom plus an independent guest bathroom, ensuring dinner guests never intrude into your bedroom suite.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#2A1F18]/85 font-sans">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                    <span><strong>Carpet Area:</strong> 511 sq. ft. (Subject to document verification)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                    <span><strong>Living Area:</strong> 16-foot living hall opening to a private 4&apos; wide balcony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                    <span><strong>Kitchen &amp; Utility:</strong> Granite platform with dedicated utility wash area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                    <span><strong>Bathrooms:</strong> 2 full bathrooms (master 6&apos;0&quot; × 4&apos;0&quot; + common 6&apos;0&quot; × 4&apos;0&quot;)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                    <span><strong>Electrical:</strong> 2 AC points pre-wired for split air conditioning</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/1-bhk-flats-naroli"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B4F2E] hover:underline uppercase tracking-wider"
                  >
                    <span>View Dedicated 1 BHK Floor Plan &amp; Gallery</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* 2 BHK Card */}
              <div className="p-8 rounded-2xl bg-[#FDFBF7] border-2 border-[#D9A21B]/60 shadow-md space-y-6 relative">
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#D9A21B] to-[#F2D27A] text-[#1E130C] px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Most Popular for Families
                </div>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold uppercase tracking-wider">
                    Spacious 2 BHK Residence
                  </span>
                  <span className="text-xs font-mono text-[#7B4F2E] font-bold">652 Sq. Ft. Built-up</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-[#1E130C]">
                    Expanded Living with Sunset Balcony
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2A1F18]/80 leading-relaxed font-sans">
                    Designed for long-term comfort. Features a sprawling living room, an expansive 5&apos;6&quot; wide sunset balcony overlooking open greens, two dedicated bedrooms, and full dual bathroom amenities.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#2A1F18]/85 font-sans">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                    <span><strong>Carpet Area:</strong> 573 sq. ft. (Subject to document verification)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                    <span><strong>Living Area:</strong> 16-foot long hall opening to an expansive 5&apos;6&quot; sunset balcony</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                    <span><strong>Bedrooms:</strong> Master bedroom (10&apos;0&quot; × 11&apos;0&quot;) + second bedroom / kids room</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                    <span><strong>Bathrooms:</strong> Attached master bathroom + common guest bathroom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-[#7B4F2E] shrink-0 mt-0.5" />
                    <span><strong>Electrical:</strong> 3 AC points pre-wired for split air conditioning</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Link
                    href="/2-bhk-flats-naroli"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B4F2E] hover:underline uppercase tracking-wider"
                  >
                    <span>View Dedicated 2 BHK Floor Plan &amp; Gallery</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle & Buyer Profile Fit Section */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Target Lifestyle Match
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Which Configuration Is Right For You?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#7B4F2E]/20 rounded-2xl p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EADFCB] text-[#7B4F2E] flex items-center justify-center font-bold">
                  <Users size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#1E130C]">Choose 1 BHK If You Are:</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B4F2E] mt-2 shrink-0" />
                  <span><strong>First-time Homebuyer:</strong> Looking for minimal upfront capital, manageable monthly EMIs, and an affordable entry point into real estate ownership.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B4F2E] mt-2 shrink-0" />
                  <span><strong>Industrial Commuter or Bachelor:</strong> Working in Naroli, Bhilad, Sarigam, or Vapi GIDC who needs a secure, amenity-rich gated society close to the highway.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B4F2E] mt-2 shrink-0" />
                  <span><strong>Real Estate Investor:</strong> Prioritizing high rental yield percentage, rapid tenant turnaround, and strong demand from corporate executives.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[#7B4F2E]/20 rounded-2xl p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EADFCB] text-[#7B4F2E] flex items-center justify-center font-bold">
                  <Home size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#1E130C]">Choose 2 BHK If You Are:</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B4F2E] mt-2 shrink-0" />
                  <span><strong>Growing Nuclear Family:</strong> Requiring a dedicated second bedroom for children, visiting parents, or home study with complete privacy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B4F2E] mt-2 shrink-0" />
                  <span><strong>Long-Term Owner Occupier:</strong> Seeking a permanent family residence with an expansive 5&apos;6&quot; balcony and lifestyle amenities to grow into over the next 10–15 years.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B4F2E] mt-2 shrink-0" />
                  <span><strong>Work-From-Home Professional:</strong> Needing a quiet dedicated workstation or consulting office space separate from the main living area.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Investment & Rental Potential Section */}
        <section className="bg-gradient-to-r from-[#2A1910] to-[#1E130C] text-[#EADFCB] py-14">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs uppercase font-sans tracking-widest text-[#D9A21B] font-bold">
                Commercial &amp; Rental Feasibility
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
                Investment Potential in the Naroli Industrial Belt
              </h2>
              <p className="text-xs sm:text-sm text-[#EADFCB]/80 font-sans leading-relaxed">
                Situated just 200 meters from the Naroli–Bhilad Checkpost, Advait Skyline captures consistent rental demand from over 300+ manufacturing facilities across Naroli, Bhilad, and Vapi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <TrendingUp size={24} className="text-[#F2D27A]" />
                <h4 className="font-display text-lg font-bold text-white">High Tenant Demand</h4>
                <p className="text-xs text-[#EADFCB]/80 leading-relaxed font-sans">
                  Steady demand from plant managers, pharmaceutical professionals, and engineers seeking organized modern housing with 24/7 security.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <Sparkles size={24} className="text-[#F2D27A]" />
                <h4 className="font-display text-lg font-bold text-white">G+14 Amenity Premium</h4>
                <p className="text-xs text-[#EADFCB]/80 leading-relaxed font-sans">
                  Properties with 39+ amenities, box cricket, swimming pool, and dedicated clubhouse command a 15–25% rent premium over unorganized buildings.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <Building2 size={24} className="text-[#F2D27A]" />
                <h4 className="font-display text-lg font-bold text-white">Capital Appreciation</h4>
                <p className="text-xs text-[#EADFCB]/80 leading-relaxed font-sans">
                  Highway frontage on Naroli–Silvassa road and proximity to the Mumbai–Delhi corridor guarantee robust long-term resale value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E130C]">
              1 BHK vs 2 BHK Decision Questions
            </h2>
          </div>

          <div className="bg-white border border-[#7B4F2E]/20 rounded-2xl p-6 sm:p-10 shadow-sm divide-y divide-[#7B4F2E]/15">
            {comparisonFaqs.map((faq, idx) => (
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

        {/* Bottom CTA Card */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-gradient-to-r from-[#1E130C] via-[#382317] to-[#1E130C] rounded-2xl p-8 sm:p-12 text-[#EADFCB] border border-[#7B4F2E]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-xs uppercase font-sans tracking-widest text-[#D9A21B] font-bold">
                Experience the Difference in Person
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Book a Guided Sample Flat Site Visit
              </h3>
              <p className="text-xs sm:text-sm text-[#EADFCB]/80 font-sans">
                Walk through both 1 BHK and 2 BHK layouts at our on-site sales office (Naroli–Silvassa Main Road, 200m from checkpost).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#D9A21B] text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#F2D27A] transition-all"
              >
                <span>Schedule Site Visit</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={waCompareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#D9A21B]/60 text-[#F2D27A] font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#D9A21B]/15 transition-all"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
