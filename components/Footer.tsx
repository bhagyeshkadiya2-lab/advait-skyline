"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, ShieldCheck } from "lucide-react";

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

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

        {/* Middle Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 py-16">
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
                    href="https://wa.me/919909062363?text=Hello%20Advait%20Skyline%2C%20I%20have%20an%20inquiry%20regarding%20the%20property.%20Please%20connect%20with%20me."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:text-brand-copper transition-colors inline-flex items-center gap-2 hover-trigger"
                  >
                    +91 99090 62363 (WhatsApp)
                  </a>
                  <a
                    href="tel:+919909072363"
                    className="text-white font-bold hover:text-brand-copper transition-colors inline-flex items-center gap-2 hover-trigger"
                  >
                    +91 99090 72363 (Call)
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

          {/* Column 4: Quick Links & Social Connect */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-body text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-gold" />
              Quick Links
            </h4>
            <ul className="space-y-4 font-body text-sm text-brand-cream/80">
              <li>
                <a href="/about-us" className="text-white font-medium hover:text-brand-copper transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-white font-medium hover:text-brand-copper transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-white font-medium hover:text-brand-copper transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <div className="mt-6 w-full">
              <span className="block text-brand-cream/50 text-[10px] uppercase font-bold tracking-wider mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/advaitskyline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-brand-copper/30 flex items-center justify-center text-brand-cream hover:text-brand-copper hover:border-brand-copper hover:bg-white/10 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61590554242765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-brand-copper/30 flex items-center justify-center text-brand-cream hover:text-brand-copper hover:border-brand-copper hover:bg-white/10 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-brand-cream/40 font-body text-[13px]">
            Copyright © DHANASVI INFRA All rights reserved.
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
