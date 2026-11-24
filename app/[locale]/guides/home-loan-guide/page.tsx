import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Landmark, Check, ArrowLeft, MessageSquare } from 'lucide-react';
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
    path: '/guides/home-loan-guide',
    customTitle: 'Home Loan Guide for 1 & 2 BHK Flats | Advait Skyline Naroli',
    customDescription:
      'Home loan eligibility guide for purchasing flats in Dadra & Nagar Haveli: bank approval checklist, salary criteria, EMI calculations, and nationalized bank pre-approvals at Advait Skyline.',
  });
}

export default async function HomeLoanGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I read the Home Loan Guide and would like assistance with bank loan pre-approvals for Advait Skyline.",
    sourceRef: 'guide-home-loan',
  });

  return (
    <article className="w-full bg-[#FBF8F2] text-[#2A1F18] py-28 px-4 sm:px-6">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Guides', item: '/guides' },
          { name: 'Home Loan Guide', item: '/guides/home-loan-guide' },
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
            Finance & Banking Assistance
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#1E130C] leading-tight">
            Home Loan Guide for 1 & 2 BHK Apartments: Eligibility & Bank Approvals
          </h1>
          <p className="text-xs font-sans text-[#2A1F18]/60">
            Published by Dhanasvi Infra Financial Desk · 4 min read
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm font-sans leading-relaxed text-[#2A1F18]/85 text-justify">
          <p>
            Securing an optimal home loan is a key step in owning your dream residence. At Advait Skyline, our residential towers are pre-approved by leading public and private sector banks (including State Bank of India, Bank of Baroda, and HDFC Bank), enabling streamlined mortgage sanctions.
          </p>

          <h2 className="font-display text-2xl font-bold text-[#1E130C] pt-4">
            Key Documents Required for Home Loan Application
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>KYC Documents:</strong> PAN card, Aadhaar card, and passport-size photographs.</li>
            <li><strong>Income Proof (Salaried):</strong> Last 3 months&apos; salary slips, Form 16 for the past 2 assessment years, and 6 months of bank account statements showing salary credits.</li>
            <li><strong>Income Proof (Self-Employed / Business):</strong> ITR filings with computation of income for the last 2 years, Profit & Loss balance sheets certified by a CA, and 12 months&apos; current bank statements.</li>
            <li><strong>Property Documents:</strong> Allotment letter, formal builder-buyer agreement, and RERA registration certificate (provided directly by Dhanasvi Infra).</li>
          </ul>

          <h2 className="font-display text-2xl font-bold text-[#1E130C] pt-4">
            Loan-to-Value (LTV) Ratios
          </h2>
          <p>
            Under Reserve Bank of India (RBI) guidelines, banks can sanction up to 80% to 90% of the agreement value for properties, subject to applicant income eligibility and credit bureau (CIBIL) score benchmarks (typically 750+ for preferential interest rates).
          </p>

          <div className="p-6 rounded-2xl bg-[#1E130C] text-[#EADFCB] space-y-3 not-italic">
            <h3 className="font-display text-xl font-bold text-white">
              Get Complimentary Bank Loan Desk Assistance
            </h3>
            <p className="text-xs text-[#EADFCB]/80 leading-relaxed">
              Our in-house finance desk helps purchasers compare EMI scenarios, collect documents, and submit applications directly to banking partners without brokerage fees.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all mt-2"
            >
              <MessageSquare size={15} />
              <span>Connect with Loan Desk</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
