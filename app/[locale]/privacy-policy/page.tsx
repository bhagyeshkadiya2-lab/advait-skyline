import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ShieldCheck, Calendar, Globe, Mail } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { PROJECT_DATA } from '@/lib/project-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/privacy-policy',
    customTitle: 'Privacy Policy | Advait Skyline — Dhanasvi Infra',
    customDescription:
      'Privacy policy for Advait Skyline in compliance with the Digital Personal Data Protection Act (DPDP Act 2023). Learn how your data is secured and processed.',
  });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18] py-28 px-4 sm:px-6">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Privacy Policy', item: '/privacy-policy' },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-10 bg-white border border-[#7B4F2E]/20 rounded-3xl p-8 sm:p-14 shadow-sm">
        <div className="space-y-3 border-b border-[#7B4F2E]/20 pb-8">
          <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#7B4F2E] block">
            Legal Compliance
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#1E130C]">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#2A1F18]/70 pt-1">
            <span>Last Updated: 28 May 2026</span>
            <span>·</span>
            <span>Compliance: Digital Personal Data Protection Act (DPDP Act, 2023)</span>
          </div>
        </div>

        <div className="space-y-8 text-xs sm:text-sm font-sans leading-relaxed text-[#2A1F18]/85 text-justify">
          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              1. Introduction & Data Fiduciary
            </h2>
            <p>
              This Privacy Policy outlines how <strong>Dhanasvi Infra</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), as the Data Fiduciary, collects, uses, stores, and protects personal data obtained through our official project website (<strong>https://www.advaitskyline.com</strong>), WhatsApp communications, and on-site enquiries for the <strong>Advait Skyline</strong> development located at Naroli–Bhilad Checkpost, Vadfaliya, Dadra & Nagar Haveli – 396235.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              2. Personal Data We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact Information:</strong> Full name, 10-digit mobile phone number, WhatsApp contact identifier, and email address.</li>
              <li><strong>Project Preferences:</strong> Selected configuration interest (1 BHK, 2 BHK, commercial retail shop, or commercial office) and preferred site inspection date.</li>
              <li><strong>Technical Identifiers:</strong> First-party analytical metrics, IP address, device viewport, and digital marketing source tags (UTM source, campaign, fbclid).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              3. Purpose & Legal Basis of Processing
            </h2>
            <p>
              Your data is collected strictly on the basis of your explicit consent and legitimate inquiry interests:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To provide requested brochures, layout plans, and pricing quotations.</li>
              <li>To coordinate guided on-site property walkthroughs with our sales managers.</li>
              <li>To comply with regulatory documentation as mandated by Real Estate Regulatory Authority (RERA) norms.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              4. Cookies, Google Tag Manager & Meta Pixel
            </h2>
            <p>
              We deploy privacy-safe cookies and analytics scripts (Google Tag Manager GTM-WBBMP8KS, GA4, Meta Pixel 920062824418320) to understand user interactions and optimize website delivery. We enforce strict Zero-PII policies: personal identifiers like your name, phone number, or email are never transmitted into analytical event parameters.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              5. Data Retention & Security
            </h2>
            <p>
              Personal data is stored on encrypted, access-restricted databases and retained only for the duration necessary to satisfy inquiry management and statutory auditing requirements. We never sell, lease, or monetize your contact information with unauthorized third-party broker networks.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              6. Your Rights & Grievance Redressal
            </h2>
            <p>
              Under India&apos;s DPDP Act 2023, you have the right to access, rectify, or request the deletion of your personal data, or withdraw your communication consent at any time. For privacy inquiries or grievance redressal, please contact our Data Officer at:
            </p>
            <div className="p-4 rounded-xl bg-[#FBF8F2] border border-[#7B4F2E]/20 space-y-1 text-xs">
              <p><strong>Grievance Officer:</strong> Dhanasvi Infra Privacy Desk</p>
              <p><strong>Email:</strong> Dhanasviinfra@gmail.com</p>
              <p><strong>Site Address:</strong> Naroli–Bhilad Checkpost, Vadfaliya, Dadra & Nagar Haveli – 396235</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
