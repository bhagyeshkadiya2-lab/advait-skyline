import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Calendar, ShieldCheck, CheckCircle2, Clock, MapPin, MessageSquare } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import LeadForm from '@/components/lead/LeadForm';
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
    path: '/construction-updates',
    customTitle: 'Advait Skyline Construction Updates & Milestones | Dhanasvi Infra',
    customDescription:
      'Official structural construction progress and quarterly milestone reports for Advait Skyline (RERA PM3000002600013) on Naroli–Silvassa main road, Dadra & Nagar Haveli.',
  });
}

export default async function ConstructionUpdatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const MILESTONES = [
    {
      phase: 'Phase 1: Foundation & Basement Engineering',
      status: 'Completed',
      date: 'Q4 2024',
      description: 'Excavation, double-basement retaining wall build, seismic foundation piling, and sub-grade waterproofing completed per structural engineer specifications.',
    },
    {
      phase: 'Phase 2: Commercial Plinth & Podium Slabs',
      status: 'Completed',
      date: 'Q2 2025',
      description: 'Ground floor retail frontage (Shops 1–20), entrance foyer, 1st floor retail plate, and 2nd floor office slabs completed with high-grade RCC.',
    },
    {
      phase: 'Phase 3: Superstructure Slabs & Tower Elevation',
      status: 'Under Construction',
      date: 'Active Milestone 2026',
      description: 'Vertical G+14 residential tower RCC framing in active progression across three tower wings under continuous chartered engineer inspections.',
    },
    {
      phase: 'Phase 4: Brickwork, Internal Putty & Mechanical Finishes',
      status: 'Upcoming',
      date: 'Scheduled 2026–2027',
      description: 'Concealed CPVC plumbing, electrical conduits, double-coat wall putty, waterproof door frames, and high-speed elevator installations.',
    },
  ];

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I would like to receive the latest construction update and site progress photos for Advait Skyline.",
    sourceRef: 'construction-updates-page',
  });

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Construction Updates', item: '/construction-updates' },
        ]}
      />

      {/* Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Project Transparency</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Advait Skyline <span className="text-gold-gradient">Construction Updates</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-2xl leading-relaxed">
            Transparent, milestone-based progress reporting adhering to Dadra & Nagar Haveli RERA compliance and rigorous structural audits.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#EADFCB]/70 pt-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-[#F2D27A]" />
              RERA Reg: {PROJECT_DATA.identity.reraNumber}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-[#F2D27A]" />
              Last Updated: May 2026
            </span>
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="py-20 sm:py-28 max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-[#7B4F2E]/20">
          {MILESTONES.map((m, idx) => (
            <div key={idx} className="relative flex items-start gap-6 pl-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 ${
                  m.status === 'Completed'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : m.status === 'Under Construction'
                    ? 'bg-[#7B4F2E] text-[#F2D27A] ring-4 ring-[#D9A21B]/30'
                    : 'bg-[#EADFCB] text-[#7B4F2E]'
                }`}
              >
                {m.status === 'Completed' ? <CheckCircle2 size={20} /> : <Clock size={18} />}
              </div>

              <div className="flex-1 bg-white border border-[#7B4F2E]/15 rounded-2xl p-6 shadow-sm space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-sans uppercase font-bold text-[#7B4F2E] tracking-wider">
                    {m.date}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-sans uppercase font-bold tracking-wider ${
                      m.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : m.status === 'Under Construction'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#1E130C]">
                  {m.phase}
                </h3>

                <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-[#1E130C] text-[#EADFCB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-xl font-bold text-white">
              Request On-Site Video Walkthrough
            </h4>
            <p className="text-xs text-[#EADFCB]/75 font-sans">
              Our site engineers capture weekly drone snapshots and high-definition video walkthroughs.
            </p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shrink-0 hover:brightness-105 transition-all flex items-center gap-2"
          >
            <MessageSquare size={16} />
            <span>Get Site Video on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
