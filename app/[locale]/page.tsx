import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import HeroStage from '@/components/sections/HeroStage';
import TrustBar from '@/components/sections/TrustBar';
import IntroSection from '@/components/sections/IntroSection';
import StatsRow from '@/components/sections/StatsRow';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full">
      {/* 1. Cinematic Hero with 39+ Rotating Badge, Pointer Tilt, Parallax */}
      <HeroStage />

      {/* 2. Trust Highlights Slow Marquee */}
      <TrustBar />

      {/* 3. Architectural Overview & Mixed-Use Destination */}
      <IntroSection />

      {/* 4. SEO-Safe Quantifiable Highlights */}
      <StatsRow />
    </div>
  );
}
