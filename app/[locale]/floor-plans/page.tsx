import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import FloorPlansSection from '@/components/sections/FloorPlansSection';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import LeadForm from '@/components/lead/LeadForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/floor-plans',
    customTitle: '1 & 2 BHK Floor Plans & Layouts | Advait Skyline Naroli',
    customDescription:
      'View technical 2D and 3D architectural floor plans for 1 BHK (575 sq. ft.), 2 BHK (652 sq. ft.), and commercial shops at Advait Skyline, Naroli near Silvassa.',
  });
}

export default async function FloorPlansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full bg-[#1E130C] text-[#EADFCB]">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Floor Plans', item: '/floor-plans' },
        ]}
      />

      {/* SEO H1 — visually integrated into the section header */}
      <h1 className="sr-only">Floor Plans &amp; Layouts – 1 BHK, 2 BHK &amp; Shops at Advait Skyline</h1>

      <FloorPlansSection />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <LeadForm />
      </section>
    </div>
  );
}
