import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ShieldCheck, MessageSquare, Check, Phone, FileText, ArrowRight, IndianRupee } from 'lucide-react';
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
    path: '/price-and-payment-plan',
    customTitle: 'Price & Payment Plan | Advait Skyline Naroli–Silvassa',
    customDescription:
      'Transparent pricing structure and flexible payment milestones for 1 & 2 BHK flats at Advait Skyline, Naroli. Starting from {price} onwards. Inquire on WhatsApp.',
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
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: 'Hello, I would like to receive the official Price Sheet and Construction-Linked Payment Plan for Advait Skyline.',
    sourceRef: 'price-and-payment-plan-page',
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
      question: 'What is the starting price of flats at Advait Skyline?',
      answer: 'Starting from {price} onwards. Contact our sales office on WhatsApp at +91 99090 72390 for the comprehensive unit-specific price sheet and floor-rise schedules.',
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
        customFaqs={pricingFaqs}
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
            Price &amp; <span className="text-gold-gradient">Payment Plans</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-3xl leading-relaxed">
            Starting from &#123;price&#125; onwards. Get the full price sheet on WhatsApp. We provide transparent, construction-linked milestone schedules and banking tie-ups for 1 BHK (511 sq. ft.) and 2 BHK (573 sq. ft.) residences. Advait Skyline is in Naroli, near Silvassa, Dadra &amp; Nagar Haveli (not Narol, Ahmedabad).
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 transition-all flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Get Full Price Sheet on WhatsApp</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-4">
              <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold uppercase tracking-wider">
                1 BHK Residence
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1E130C]">511 Sq. Ft. Carpet Area</h3>
              <p className="font-display text-xl font-bold text-[#7B4F2E]">
                Starting from &#123;price&#125; onwards
              </p>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                Includes private foyer, living room, modern kitchen, 2 bathrooms, utility wash area, and 2 AC electrical points.
              </p>
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B4F2E] hover:underline uppercase tracking-wider"
                >
                  <span>Request 1 BHK Cost Sheet on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#7B4F2E]/20 shadow-xs space-y-4">
              <span className="px-3 py-1 rounded bg-[#EADFCB] text-[#7B4F2E] text-xs font-bold uppercase tracking-wider">
                2 BHK Residence
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1E130C]">573 Sq. Ft. Carpet Area</h3>
              <p className="font-display text-xl font-bold text-[#7B4F2E]">
                Starting from &#123;price&#125; onwards
              </p>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                Features 16-foot living hall, 5&apos;6&quot; wide sunset balcony, 2 bedrooms, 2 bathrooms, wash area, and 3 AC points.
              </p>
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7B4F2E] hover:underline uppercase tracking-wider"
                >
                  <span>Request 2 BHK Cost Sheet on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
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
                  <th className="py-3.5 px-4 sm:px-6 font-bold w-1/3">Milestone Stage</th>
                  <th className="py-3.5 px-4 font-bold w-1/6">Installment</th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold w-1/2">Milestone Description</th>
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
