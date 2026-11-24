import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ShieldAlert, FileText, ExternalLink } from 'lucide-react';
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
    path: '/terms-and-disclaimer',
    customTitle: 'Terms & Disclaimer | Advait Skyline — Dhanasvi Infra',
    customDescription:
      'Official statutory RERA disclaimer, terms of use, and architectural guidance notes for Advait Skyline (RERA PM3000002600013) by Dhanasvi Infra.',
  });
}

export default async function TermsAndDisclaimerPage({
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
          { name: 'Terms & Disclaimer', item: '/terms-and-disclaimer' },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-10 bg-white border border-[#7B4F2E]/20 rounded-3xl p-8 sm:p-14 shadow-sm">
        <div className="space-y-3 border-b border-[#7B4F2E]/20 pb-8">
          <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#7B4F2E] block">
            Statutory Legal Notice
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#1E130C]">
            Terms & RERA Disclaimer
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-[#2A1F18]/70 pt-1">
            <span className="font-semibold text-[#7B4F2E]">
              Project RERA: {PROJECT_DATA.identity.reraNumber}
            </span>
            <span>·</span>
            <span>Dhanasvi Infra, Vadfaliya</span>
          </div>
        </div>

        <div className="space-y-8 text-xs sm:text-sm font-sans leading-relaxed text-[#2A1F18]/85 text-justify">
          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              1. Brochure & Website Disclaimer (Verbatim)
            </h2>
            <div className="p-5 rounded-2xl bg-[#FBF8F2] border border-[#D9A21B]/40 italic space-y-2">
              <p>
                &ldquo;{PROJECT_DATA.disclaimerText}&rdquo;
              </p>
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              2. Artistic Renderings & Indicative Imagery
            </h2>
            <p>
              All 3D elevations, visual walkthroughs, isometric plans, mock interiors, lighting effects, landscape treatments, and surrounding vistas depicted on this website are artistic impressions designed for presentation and general guidance only. They do not constitute an explicit warranty or guarantee of actual finishing or surrounding views. Actual completed building facades and materials are subject to architectural modifications and engineering feasibility.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              3. Measurement & Carpet Area Specifications
            </h2>
            <p>
              Carpet areas stated (e.g. 511 sq. ft. for 1 BHK, 573 sq. ft. for 2 BHK) represent net usable floor areas measured plaster-to-plaster in accordance with Real Estate Regulatory Authority (RERA) provisions. Room furniture layouts, sanitary fixtures, and electronic appliances shown in diagrams are indicative illustrations to demonstrate space utilization and are not supplied with the standard unit allotment unless explicitly agreed in the formal registered sale agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              4. No Financial Returns or Price Guarantee
            </h2>
            <p>
              Neither Dhanasvi Infra nor its marketing representatives make any claims or guarantees of fixed capital appreciation, rental yield percentages, or commercial returns. Real estate investments are subject to market conditions. Intending purchasers are advised to conduct independent legal, financial, and regulatory diligence before entering into any binding purchase agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-xl font-bold text-[#1E130C]">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              Any disputes or claims arising out of the use of this website or marketing collaterals shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Dadra & Nagar Haveli.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
