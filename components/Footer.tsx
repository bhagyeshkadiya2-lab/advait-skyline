"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {

  return (
    <footer id="contact" className="bg-brand-deepBrown text-brand-cream pt-20 pb-10 border-t border-brand-primaryBrown/30 relative overflow-hidden">
      {/* Visual backdrop details */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-copper/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Row: Plaque Logo & Tagline */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-brand-cream/10">
          <div className="relative w-[88px] h-[80px] rounded-xl overflow-hidden border border-brand-gold shadow-md bg-brand-charcoal">
            <Image
              src="/logo.png"
              alt="Advait Skyline Logo"
              fill
              sizes="88px"
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-brand-copper font-body text-xs md:text-sm font-bold uppercase tracking-[0.25em]">
              Elevate Your Everyday
            </span>
          </div>
        </div>

        {/* Middle Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Column 1: Project Details */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-body text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-gold" />
              Project Compliance
            </h4>
            <ul className="space-y-4 font-body text-sm text-brand-cream/80">
              <li>
                <span className="block text-brand-cream/50 text-[10px] uppercase font-bold tracking-wider">
                  MAHA RERA Registration No.
                </span>
                <strong className="text-brand-gold font-semibold">PM3000002600013</strong>
              </li>
              <li>
                <span className="block text-brand-cream/50 text-[10px] uppercase font-bold tracking-wider">
                  Project Architect
                </span>
                <span className="text-white font-medium">Parul Kansara (Vapi)</span>
              </li>
              <li>
                <span className="block text-brand-cream/50 text-[10px] uppercase font-bold tracking-wider">
                  Developer
                </span>
                <span className="text-white font-medium">Dhanasvi Infra, Vadfaliya</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Site Address */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-body text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <MapPin size={16} className="text-brand-gold" />
              Location & Site Address
            </h4>
            <div className="font-body text-sm text-brand-cream/80 leading-relaxed">
              <span className="block text-brand-cream/50 text-[10px] uppercase font-bold tracking-wider mb-1">
                Advait Skyline Site
              </span>
              <p className="text-white font-medium mb-3">
                Naroli–Bhilad Checkpost, Vadfaliya,<br />
                Dadra & Nagar Haveli - 396235
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-brand-copper hover:underline cursor-pointer">
                Get Driving Directions &rarr;
              </span>
            </div>
          </div>

          {/* Column 3: Booking & Sales Contacts */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-body text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <Phone size={16} className="text-brand-gold" />
              Booking & Sales Inquiries
            </h4>
            <ul className="space-y-4 font-body text-sm text-brand-cream/80 w-full">
              <li>
                <span className="block text-brand-cream/50 text-[10px] uppercase font-bold tracking-wider mb-1">
                  Sales Hotlines
                </span>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="tel:+919909062363"
                    className="text-white font-bold hover:text-brand-copper transition-colors inline-flex items-center gap-2 hover-trigger"
                  >
                    +91 99090 62363
                  </a>
                  <a
                    href="tel:+919909072363"
                    className="text-white font-bold hover:text-brand-copper transition-colors inline-flex items-center gap-2 hover-trigger"
                  >
                    +91 99090 72363
                  </a>
                </div>
              </li>
              <li>
                <span className="block text-brand-cream/50 text-[10px] uppercase font-bold tracking-wider mb-1">
                  Email Correspondence
                </span>
                <a
                  href="mailto:Dhanasviinfra@gmail.com"
                  className="text-white font-medium hover:text-brand-copper transition-colors inline-flex items-center gap-2 hover-trigger"
                >
                  Dhanasviinfra@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-brand-cream/40 font-body text-[13px]">
            Designed by Dhanasvi Infra · © {new Date().getFullYear()} All rights reserved.
          </p>
          <span className="text-brand-cream/40 font-body text-xs">
            Dadra & Nagar Haveli Union Territory
          </span>
        </div>

        {/* Builder Legal Disclaimer */}
        <div className="mt-8 pt-6 border-t border-brand-cream/5 text-[11px] text-brand-cream/30 font-body leading-relaxed text-justify">
          <p>
            <strong>Disclaimer:</strong> The content, images, floor plans, dimensions, renderings, structures, 
            and descriptions displayed on this website are purely conceptual, illustrative, and artistic representations 
            designed for marketing purposes. Actual layouts, materials, features, and specs are subject to changes 
            mandated by competent municipal planning boards or local Dadra & Nagar Haveli real estate regulatory authorities 
            (RERA). This website does not constitute a legally binding sales offer, prospectus, or credit contract. All metrics 
            are approximate. Sales are governed strictly by the formal written deeds and covenants in the bipartite Agreement for Sale.
          </p>
        </div>

      </div>
    </footer>
  );
}
