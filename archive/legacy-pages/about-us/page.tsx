"use client";

import React from "react";
import { ShieldCheck, Sparkles, TrendingUp, MapPin, Building, ArrowLeft } from "lucide-react";
import RevealLine from "@/components/motion/RevealLine";
import FloatingEntrance from "@/components/motion/FloatingEntrance";
import MagneticCard from "@/components/motion/MagneticCard";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Honesty in Commitment",
    desc: "We stand for absolute transparency, clear RERA compliance, and consistent project updates.",
  },
  {
    icon: Sparkles,
    title: "Premium Construction Quality",
    desc: "Uncompromised building materials, earthquake-resistant RCC architecture, and elegant interior fittings.",
  },
  {
    icon: TrendingUp,
    title: "Future-Value Driven Planning",
    desc: "Selecting prime growth locations like the Naroli–Bhilad Checkpost to ensure high capital growth.",
  },
];

export default function AboutUs() {
  return (
    <section className="pt-32 pb-24 bg-brand-cream relative min-h-screen overflow-hidden">
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-copper/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <FloatingEntrance delay={0.05}>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-brand-copper hover:text-brand-primaryBrown transition-colors font-body text-sm font-bold uppercase tracking-wider mb-8 hover-trigger"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </FloatingEntrance>

        {/* Page Header */}
        <div className="mb-16">
          <RevealLine className="mb-4" width="w-32" />
          <FloatingEntrance delay={0.1}>
            <h1 className="text-brand-primaryBrown text-display-hero font-display font-bold mb-4">
              About Us
            </h1>
            <p className="text-brand-copper font-body text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
              DHANASVI INFRA · ELEGANT SPACES, SMART INVESTMENT
            </p>
          </FloatingEntrance>
        </div>

        {/* Main Grid: Project and Developer Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Section 1: About Advait Skyline */}
          <div className="md:col-span-6 flex flex-col justify-between bg-white border border-brand-copper/20 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-copper mb-6">
                <Building size={24} />
              </div>
              <h2 className="text-brand-primaryBrown font-display text-2xl md:text-3xl font-bold mb-4">
                About Advait Skyline
              </h2>
              <div className="text-brand-charcoal/80 font-body text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  <strong className="text-brand-primaryBrown font-semibold">Advait Skyline</strong> is an ultra-premium residential and commercial landmark project developed by <strong className="text-brand-primaryBrown font-semibold">Dhanasvi Infra</strong>, situated strategically at the prominent Naroli–Bhilad Checkpost, Dadra & Nagar Haveli.
                </p>
                <p>
                  Boasting a towering <strong className="text-brand-primaryBrown font-semibold">G+14 floors</strong> architectural marvel, this development integrates luxury, tranquility, and robust structural build. It features exquisitely designed <strong className="text-brand-primaryBrown font-semibold">1 & 2 BHK luxury apartments</strong> alongside premium commercial shops that promise exceptional visibility for high-class retail storefronts.
                </p>
                <p className="text-xs font-bold text-brand-gold uppercase tracking-wider bg-brand-deepBrown/5 p-3 rounded-lg border border-brand-gold/20 inline-block">
                  RERA Registered: PM3000002600013
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: About Dhanasvi Infra */}
          <div className="md:col-span-6 flex flex-col justify-between bg-white border border-brand-copper/20 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-copper mb-6">
                <ShieldCheck size={24} />
              </div>
              <h2 className="text-brand-primaryBrown font-display text-2xl md:text-3xl font-bold mb-4">
                About Dhanasvi Infra
              </h2>
              <div className="text-brand-charcoal/80 font-body text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  As a highly trusted real estate pioneer in the Dadra & Nagar Haveli union territory, <strong className="text-brand-primaryBrown font-semibold">Dhanasvi Infra</strong> is passionately committed to delivering quality construction, complete regulatory transparency, and uncompromised timelines.
                </p>
                <p>
                  Structured as a legally registered <strong className="text-brand-primaryBrown font-semibold">Partnership Firm</strong>, our business values transparency and long-term customer relationships. We ensure full RERA compliance and rigorous construction standards for every single development.
                </p>
                <div className="pt-2 border-t border-brand-cream space-y-2 text-xs md:text-sm">
                  <p className="text-brand-charcoal/60">
                    <strong className="text-brand-primaryBrown font-semibold">Legal Structure:</strong> Partnership Firm
                  </p>
                  <p className="text-brand-charcoal/60">
                    <strong className="text-brand-primaryBrown font-semibold">GSTIN:</strong> 26AAYFD6311R1ZM
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 3: Our Values */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <RevealLine className="mx-auto mb-4" width="w-24" />
            <h2 className="text-brand-primaryBrown text-section-h2 mb-4 font-display font-semibold">
              Our Values
            </h2>
            <p className="text-brand-charcoal/70 font-body text-sm">
              The foundational pillars that guide Dhanasvi Infra in constructing smart investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <FloatingEntrance key={idx} delay={0.2 + idx * 0.1}>
                  <MagneticCard className="h-full bg-white border border-brand-copper/30 hover:border-brand-copper p-6 rounded-2xl transition-all duration-300 flex flex-col items-start shadow-sm hover:shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-copper mb-4">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-brand-primaryBrown font-body text-base font-bold mb-2">
                      {val.title}
                    </h3>
                    <p className="text-brand-charcoal/80 font-body text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </MagneticCard>
                </FloatingEntrance>
              );
            })}
          </div>
        </div>

        {/* Section 4: Our Office Address */}
        <FloatingEntrance delay={0.5}>
          <div className="bg-brand-deepBrown text-brand-cream rounded-[2rem] p-8 md:p-10 border border-brand-gold/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="block text-brand-gold font-body text-[10px] uppercase font-bold tracking-[0.2em] mb-2">
                  Head Office Address
                </span>
                <h3 className="text-white font-display text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                  <MapPin size={20} className="text-brand-gold" />
                  Dhanasvi Infra Office
                </h3>
                <p className="text-brand-cream/80 font-body text-sm md:text-base leading-relaxed max-w-2xl">
                  Shop No.1, Survey No.685, Naroli Check Post, Opp Pushpak Hotel, Vadfaliya, Naroli, Dadra And Nagar Haveli - 396235
                </p>
              </div>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center bg-brand-copper hover:bg-brand-copper/90 text-white font-body text-xs font-semibold uppercase tracking-wider rounded-full px-6 py-3 transition-colors border border-brand-copper/30 shadow-lg shrink-0"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </FloatingEntrance>

      </div>
    </section>
  );
}
