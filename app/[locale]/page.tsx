import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { setRequestLocale } from 'next-intl/server';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({ locale, path: '/' });
}
import HeroStage from '@/components/sections/HeroStage';
import TrustBar from '@/components/sections/TrustBar';
import IntroSection from '@/components/sections/IntroSection';
import StatsRow from '@/components/sections/StatsRow';
import AmenityExplorer from '@/components/sections/AmenityExplorer';
import ResidenceShowcase from '@/components/sections/ResidenceShowcase';
import CommercialSection from '@/components/sections/CommercialSection';
import ConnectivityRadial from '@/components/sections/ConnectivityRadial';
import SpecificationsSection from '@/components/sections/SpecificationsSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';
import ProjectFactSheet from '@/components/sections/ProjectFactSheet';

// Lazy-load below-the-fold interactive media and 3D widgets to keep initial JS bundle lean and minimize TBT
const Cinematic3DReels = dynamic(() => import('@/components/sections/Cinematic3DReels'), {
  loading: () => <div className="py-24 bg-[#120B07] min-h-[480px]" />,
});

const SampleFlat3DWalkthrough = dynamic(() => import('@/components/sections/SampleFlat3DWalkthrough'), {
  loading: () => <div className="py-24 bg-[#1E130C] min-h-[520px]" />,
});

const FloorPlansSection = dynamic(() => import('@/components/sections/FloorPlansSection'), {
  loading: () => <div className="py-24 bg-[#1E130C] min-h-[480px]" />,
});

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full">
      <JsonLd locale={locale} type="home" />
      {/* 1. Cinematic Hero with 39+ Rotating Badge, Day/Night Toggle, Pointer Tilt */}
      <HeroStage />

      {/* 2. Trust Highlights Slow Marquee */}
      <TrustBar />

      {/* Semantic Project Fact Sheet at a Glance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ProjectFactSheet />
      </div>

      {/* 3. 3D Architectural Cinematic Video Reels (High-Impact Visual Engagement) */}
      <Cinematic3DReels />

      {/* 4. Architectural Overview & Mixed-Use Destination */}
      <IntroSection />

      {/* 5. SEO-Safe Quantifiable Highlights */}
      <StatsRow />

      {/* 6. 39+ Lifestyle Amenities Master Explorer (Ultra-HD 3D Cards) */}
      <AmenityExplorer />

      {/* 7. Residences 1 & 2 BHK Showcase & Dimensions */}
      <ResidenceShowcase />

      {/* 8. Interactive 3D Spatial Sample Flat Walkthrough (Real Furnished Unit) */}
      <SampleFlat3DWalkthrough />

      {/* 9. Floor Plans Interactive Tabs & Lightbox (Paired with Residences) */}
      <FloorPlansSection />

      {/* 10. Commercial Retail Façade & 11 Use-Cases Grid */}
      <CommercialSection />

      {/* 11. Connectivity Radial Diagram & Transit Table */}
      <ConnectivityRadial />

      {/* 12. Technical Engineering Specifications Accordion */}
      <SpecificationsSection />

      {/* 13. 8 Core Homepage FAQs (AEO & Bot SEO-first) */}
      <FaqSection />

      {/* 14. Final Experience CTA & Integrated Lead Capture */}
      <FinalCtaSection />
    </div>
  );
}
