import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import AmenityExplorer from '@/components/sections/AmenityExplorer';
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
    path: '/amenities',
    customTitle: '39+ Amenities at Advait Skyline | Resort Pool, Gym, Box Cricket Naroli',
    customDescription:
      'Explore 39+ lifestyle amenities at Advait Skyline, Naroli–Bhilad Checkpost: swimming pool, separate gyms, turf box cricket, mini theater, club house, gardens.',
  });
}

export default async function AmenitiesPage({
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
          { name: '39+ Amenities', item: '/amenities' },
        ]}
      />

      {/* SEO H1 — visually integrated into the section header */}
      <h1 className="sr-only">39+ Lifestyle Amenities at Advait Skyline, Naroli</h1>

      {/* Standalone Master Amenity Explorer */}
      <AmenityExplorer />

      {/* Inquiry Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <LeadForm />
      </section>
    </div>
  );
}
