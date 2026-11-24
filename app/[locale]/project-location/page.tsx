import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import ConnectivityRadial from '@/components/sections/ConnectivityRadial';
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
    path: '/project-location',
    customTitle: 'Project Location & Connectivity | Advait Skyline Naroli–Bhilad Checkpost',
    customDescription:
      'Explore location advantage of Advait Skyline: 200m from Naroli–Bhilad Checkpost on Naroli–Silvassa main road. Transit times to Bhilad Station, Vapi, Silvassa Stadium, and NH-48.',
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

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <LeadForm />
      </section>
    </div>
  );
}
