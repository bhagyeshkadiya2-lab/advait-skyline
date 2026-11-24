import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import ConnectivityRadial from '@/components/sections/ConnectivityRadial';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import LeadForm from '@/components/lead/LeadForm';
import GoogleMapsEmbed from '@/components/sections/GoogleMapsEmbed';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/project-location',
    customTitle: 'Location & Connectivity | Advait Skyline Naroli–Silvassa',
    customDescription:
      'Explore location benefits of Advait Skyline: 200m from Naroli–Bhilad Checkpost on main road. Rapid transit to Bhilad Station, Vapi, and central Silvassa.',
  });
}

export default async function ProjectLocationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Location & Connectivity', item: '/project-location' },
        ]}
      />

      {/* SEO H1 — visually integrated into the section header */}
      <h1 className="sr-only">Project Location &amp; Connectivity – Advait Skyline, Naroli–Bhilad</h1>

      <ConnectivityRadial />

      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        <GoogleMapsEmbed />
        <div className="max-w-4xl mx-auto">
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
