import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ShieldCheck, MessageSquare, Check, Phone, FileText, ArrowRight, IndianRupee, Building2 } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import LeadForm from '@/components/lead/LeadForm';
import ProjectFactSheet from '@/components/sections/ProjectFactSheet';
import PropertyComparisonTable from '@/components/sections/PropertyComparisonTable';
import EmiCalculator from '@/components/lead/EmiCalculator';
import { buildWhatsAppLink } from '@/lib/tracking';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/price-and-payment-plan',
    customTitle: 'Affordable Price & Payment Plan | Advait Skyline Naroli–Silvassa',
    customDescription:
      'Affordable 1 & 2 BHK flats (575 & 652 sq. ft. built-up) at Advait Skyline, Naroli. Transparent payment milestones, individual parking, and latest prices on WhatsApp.',
  });
}

export default async function PriceAndPaymentPlanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const waUrl = buildWhatsAppLink({
    phone: SITE_CONFIG.contact.whatsappNumber,
    message: 'Hello, I would like to receive the official Price Sheet and Construction-Linked Payment Plan for Advait Skyline.',
    sourceRef: 'price-and-payment-plan-page',
  });

  const wa1BhkUrl = buildWhatsAppLink({
    phone: SITE_CONFIG.contact.whatsappNumber,
    message: 'Hello, I am interested in the 1 BHK flat (575 sq. ft. built-up) at Advait Skyline. Please share latest pricing and payment plan.',
    sourceRef: 'price-page-1bhk',
  });

  const wa2BhkUrl = buildWhatsAppLink({
    phone: SITE_CONFIG.contact.whatsappNumber,
    message: 'Hello, I am interested in the 2 BHK flat (652 sq. ft. built-up) at Advait Skyline. Please share latest pricing and payment plan.',
    sourceRef: 'price-page-2bhk',
  });

  const waCommUrl = buildWhatsAppLink({
    phone: SITE_CONFIG.contact.whatsappNumber,
    message: 'Hello, I am interested in commercial retail shops / offices at Advait Skyline. Please share commercial pricing and floor plans.',
    sourceRef: 'price-page-commercial',
  });

  const milestones = [
    { stage: '1. Booking & Expression of Interest', percentage: '10%', desc: 'Initial booking token upon flat selection and allotment confirmation.' },
    { stage: '2. Agreement for Sale (RERA Registration)', percentage: '10%', desc: 'Upon completion of plinth and formal execution of registered sale agreement.' },
    { stage: '3. Structural Slabs (G+14 Progression)', percentage: '45%', desc: 'Disbursed in transparent installments upon completion of successive residential slabs.' },
    { stage: '4. Walls, Plaster & Plumbing', percentage: '15%', desc: 'Upon completion of internal brick masonry, external plaster, and plumbing rough-ins.' },
    { stage: '5. Flooring, Electrics & External Paint', percentage: '15%', desc: 'Upon laying vitrified tiles, electrical wiring, sanitary fixtures, and final paint.' },
    { stage: '6. Notice of Possession & Handover', percentage: '5%', desc: 'Final balance due on delivery of keys and possession notice under RERA rules.' },
  ];

  const pricingFaqs = [
    {
      question: 'What is the price of flats in Advait Skyline?',
      answer: 'Advait Skyline offers 1 BHK and 2 BHK homes positioned at affordable prices. Contact the official sales team at +91 99090 72390 on WhatsApp for the latest selling price, availability, payment terms and applicable statutory charges.',
    },
    {
      question: 'What payment plans are offered for Advait Skyline?',
      answer: 'We provide a RERA-compliant Construction-Linked Payment (CLP) plan, where payments are linked directly to verified on-site structural milestones and slab completion.',
    },
    {
      question: 'Which banks provide home loan approvals for Advait Skyline?',
      answer: 'Home loans are available from major nationalized and private financial institutions including State Bank of India (SBI), Bank of Baroda, and HDFC, subject to eligibility.',
    },
    {
      question: 'Are there any hidden costs beyond the published price sheet?',
      answer: 'No. Dhanasvi Infra maintains a strict policy of 100% price transparency. Statutory charges (GST, stamp duty, registration fees, and electricity meter connection) are itemized clearly.',
    },
  ];

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        type="faq"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Price & Payment Plan', item: '/price-and-payment-plan' },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Developer-Direct Pricing · RERA Registered</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Affordable Price &amp; <span className="text-gold-gradient">Payment Plans</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-3xl leading-relaxed">
            Advait Skyline offers affordable 1 &amp; 2 BHK homes with 575 and 652 sq. ft. built-up area on Naroli–Silvassa Main Road, 200 m from Naroli–Bhilad Checkpost. Transparent construction-linked milestones, individual parking, and banking assistance across 328 units (possession target before March 2028).
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 transition-all flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Get Latest Price on WhatsApp</span>
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

        {/* Pricing Cards */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Configuration Pricing
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Transparent Pricing Structure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1 BHK */}
            <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold uppercase tracking-wider">
                  1 BHK Residence
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E130C]">575 Sq. Ft. Built-up</h3>
                <div className="text-xs text-[#2A1F18]/70 font-sans">
                  Carpet area: 511 sq. ft. (Subject to document verification)
                </div>
                <p className="font-display text-xl font-bold text-[#7B4F2E]">
                  Affordable Pricing
                </p>
                <p className="text-xs text-[#2A1F18]/80 font-sans leading-relaxed">
                  Includes private entrance foyer, living room, modern kitchen, 2 full bathrooms, utility wash area, individual parking, and 2 AC points.
                </p>
              </div>
              <div className="pt-4 border-t border-[#7B4F2E]/15">
                <a
                  href={wa1BhkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gold-gradient text-[#1E130C] font-bold text-xs uppercase tracking-wider shadow-sm hover:brightness-105 flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageSquare size={14} />
                  <span>Get Latest Price</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* 2 BHK */}
            <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold uppercase tracking-wider">
                  2 BHK Residence
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E130C]">652 Sq. Ft. Built-up</h3>
                <div className="text-xs text-[#2A1F18]/70 font-sans">
                  Carpet area: 573 sq. ft. (Subject to document verification)
                </div>
                <p className="font-display text-xl font-bold text-[#7B4F2E]">
                  Affordable Pricing
                </p>
                <p className="text-xs text-[#2A1F18]/80 font-sans leading-relaxed">
                  Features 16-foot long living hall, 5&apos;6&quot; wide sunset balcony, 2 master bedrooms, 2 full bathrooms, individual parking, and 3 AC points.
                </p>
              </div>
              <div className="pt-4 border-t border-[#7B4F2E]/15">
                <a
                  href={wa2BhkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#271910] text-[#F2D27A] border border-[#D9A21B]/40 hover:bg-[#7B4F2E] font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare size={14} />
                  <span>Get Latest Price</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Commercial Spaces */}
            <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded bg-[#1E130C] text-[#F2D27A] text-xs font-bold uppercase tracking-wider">
                  Commercial Spaces
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E130C]">Retail Shops &amp; Offices</h3>
                <div className="text-xs text-[#2A1F18]/70 font-sans">
                  Ground shops (1–20) &amp; 2nd floor offices (1–6)
                </div>
                <p className="font-display text-xl font-bold text-[#7B4F2E]">
                  Contact Sales Team
                </p>
                <p className="text-xs text-[#2A1F18]/80 font-sans leading-relaxed">
                  Prime commercial frontage on Naroli–Silvassa main road with 5-foot wide customer otta, continuous vehicular footfall, and dedicated parking.
                </p>
              </div>
              <div className="pt-4 border-t border-[#7B4F2E]/15">
                <a
                  href={waCommUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#1E130C] text-white hover:bg-[#7B4F2E] font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Building2 size={14} className="text-[#F2D27A]" />
                  <span>Request Commercial Pricing</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Property Comparison Table */}
        <PropertyComparisonTable />

        {/* Interactive EMI Calculator Widget */}
        <section className="space-y-6">
          <EmiCalculator />
        </section>

        {/* Milestone Schedule */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-sans tracking-widest text-[#7B4F2E] font-bold">
              Construction-Linked Plan
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1E130C]">
              Standard Payment Milestone Schedule
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#7B4F2E]/20 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
              <thead>
                <tr className="bg-[#1E130C] text-[#F2D27A] border-b border-[#7B4F2E]/30">
                  <th scope="col" className="py-3.5 px-4 sm:px-6 font-bold w-1/3">Milestone Stage</th>
                  <th scope="col" className="py-3.5 px-4 font-bold w-1/6">Installment</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6 font-bold w-1/2">Milestone Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7B4F2E]/10 text-[#2A1F18]/85">
                {milestones.map((m, idx) => (
                  <tr key={idx} className="hover:bg-[#FBF8F2] transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-[#1E130C]">{m.stage}</td>
                    <td className="py-3 px-4 font-display font-bold text-[#7B4F2E]">{m.percentage}</td>
                    <td className="py-3 px-4 sm:px-6 text-xs text-[#2A1F18]/70">{m.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Project Fact Sheet Embed */}
        <section>
          <ProjectFactSheet />
        </section>

        {/* FAQs */}
        <section className="bg-white border border-[#7B4F2E]/20 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E130C]">
            Frequently Asked Questions — Price &amp; Payment Plan
          </h2>
          <div className="divide-y divide-[#7B4F2E]/15">
            {pricingFaqs.map((faq, idx) => (
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
