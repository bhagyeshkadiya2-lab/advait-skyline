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
    customTitle: 'Advait Skyline Floor Plans | 1 & 2 BHK Layouts, Shops & Offices Naroli',
    customDescription:
      'View technical 2D and 3D architectural floor plans for 1 BHK (511 sq. ft.), 2 BHK (573 sq. ft.), ground floor retail shops 1–20, and 2nd floor offices at Advait Skyline.',
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

      <FloorPlansSection />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <LeadForm />
      </section>
    </div>
  );
}
