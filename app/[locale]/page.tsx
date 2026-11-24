import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import HeroStage from '@/components/sections/HeroStage';
import TrustBar from '@/components/sections/TrustBar';
import IntroSection from '@/components/sections/IntroSection';
import StatsRow from '@/components/sections/StatsRow';
import AmenityExplorer from '@/components/sections/AmenityExplorer';
import ResidenceShowcase from '@/components/sections/ResidenceShowcase';
import CommercialSection from '@/components/sections/CommercialSection';
import ConnectivityRadial from '@/components/sections/ConnectivityRadial';
import FloorPlansSection from '@/components/sections/FloorPlansSection';
import SpecificationsSection from '@/components/sections/SpecificationsSection';
import FaqSection from '@/components/sections/FaqSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

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

      {/* 5. 39+ Lifestyle Amenities Master Explorer */}
      <AmenityExplorer />

      {/* 6. Residences 1 & 2 BHK Showcase & Dimensions */}
      <ResidenceShowcase />

      {/* 7. Commercial Retail Façade & 11 Use-Cases Grid */}
      <CommercialSection />

      {/* 8. Connectivity Radial Diagram & Transit Table */}
      <ConnectivityRadial />

      {/* 9. Floor Plans Interactive Tabs & Lightbox */}
      <FloorPlansSection />

      {/* 10. Technical Engineering Specifications Accordion */}
      <SpecificationsSection />

      {/* 11. 8 Core Homepage FAQs (AEO & Bot SEO-first) */}
      <FaqSection />

      {/* 12. Final Experience CTA & Integrated Lead Capture */}
      <FinalCtaSection />
    </div>
  );
}
