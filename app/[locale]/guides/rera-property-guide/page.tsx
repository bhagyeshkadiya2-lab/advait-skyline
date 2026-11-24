import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ShieldCheck, FileCheck, ArrowLeft, MessageSquare } from 'lucide-react';
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
    path: '/guides/rera-property-guide',
    customTitle: 'RERA Property Guide: Due Diligence in Dadra & Nagar Haveli',
    customDescription:
      'Understanding RERA compliance in Dadra & Nagar Haveli: how to check sanctioned carpet area, escrow accounts, construction stages, and RERA registration PM3000002600013.',
  });
}

export default async function ReraPropertyGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I read the RERA guide and would like to review the official RERA documentation for Advait Skyline.",
    sourceRef: 'guide-rera-property',
  });

  return (
    <article className="w-full bg-[#FBF8F2] text-[#2A1F18] py-28 px-4 sm:px-6">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Guides', item: '/guides' },
          { name: 'RERA Compliance Guide', item: '/guides/rera-property-guide' },
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
            Legal & Regulatory Due Diligence
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#1E130C] leading-tight">
            RERA Compliance Guide: What Property Buyers Must Check
          </h1>
          <p className="text-xs font-sans text-[#2A1F18]/60">
            Published by Dhanasvi Infra Legal Compliance · 6 min read
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm font-sans leading-relaxed text-[#2A1F18]/85 text-justify">
          <p>
            The Real Estate (Regulation and Development) Act (RERA) was enacted to protect property purchasers and introduce transparency into real estate transactions across India. Whether you are investing in a 1 BHK starter flat, a 2 BHK family residence, or a commercial shop, checking RERA compliances is your first line of financial protection.
          </p>

          <h2 className="font-display text-2xl font-bold text-[#1E130C] pt-4">
            1. Carpet Area vs Built-Up Area
          </h2>
          <p>
            Under RERA, developers are legally required to sell properties strictly on <strong>net usable carpet area</strong>, measured plaster-to-plaster within internal walls. Super built-up percentages cannot be used as ambiguous pricing metrics. For instance, at Advait Skyline, units are sanctioned at exact carpet measurements: 511 sq. ft. for 1 BHK and 573 sq. ft. for 2 BHK.
          </p>

          <h2 className="font-display text-2xl font-bold text-[#1E130C] pt-4">
            2. 70% Escrow Account Protection
          </h2>
          <p>
            RERA mandates that 70% of all customer funds collected for a project must be deposited into a dedicated bank escrow account, withdrawable only in proportion to completed construction certified by structural engineers and chartered accountants. This prevents funds from being diverted to unrelated developments.
          </p>

          <h2 className="font-display text-2xl font-bold text-[#1E130C] pt-4">
            3. Verifying RERA Registration Number
          </h2>
          <p>
            Always verify that the developer quotes an official registration number on all brochures, websites, and hoardings. Advait Skyline is registered under RERA ID <strong>PM3000002600013</strong>. Prospective buyers can verify quarterly progress reports and approved building plans directly through regulatory filings.
          </p>

          <div className="p-6 rounded-2xl bg-[#1E130C] text-[#EADFCB] space-y-3 not-italic">
            <h3 className="font-display text-xl font-bold text-white">
              Verify Advait Skyline Documentation
            </h3>
            <p className="text-xs text-[#EADFCB]/80 leading-relaxed">
              Our site relationship managers maintain a complete physical dossier of RERA approvals, architect blueprints, and structural certifications for buyer inspection.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all mt-2"
            >
              <MessageSquare size={15} />
              <span>Request RERA Dossier</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
