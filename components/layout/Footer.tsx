'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent } from '@/lib/tracking';
import SocialLinks from '@/components/ui/SocialLinks';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#1E130C] text-[#EADFCB] pt-20 pb-12 border-t border-[#7B4F2E]/40 relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B4F2E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A21B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Brand Banner Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-[#7B4F2E]/30">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#271910] border border-[#D9A21B]/40 shrink-0">
              <Image
                src="/logo.png"
                alt="Advait Skyline Logo"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-display text-2xl font-bold text-white block">
                {PROJECT_DATA.identity.name}
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D9A21B] font-sans">
                {PROJECT_DATA.identity.developerTagline}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-sans text-[#EADFCB]/70 tracking-widest uppercase">
              Tagline:
            </span>
            <span className="font-display text-lg text-[#F2D27A] italic">
              &ldquo;{PROJECT_DATA.identity.tagline}&rdquo;
            </span>
          </div>
        </div>

        {/* Geographic Disambiguation Notice */}
        <div className="py-4 border-b border-[#7B4F2E]/30 text-xs sm:text-sm font-sans text-[#EADFCB]/85 flex items-center gap-2">
          <MapPin size={15} className="text-[#F2D27A] shrink-0" />
          <span>
            <strong>Location Clarification:</strong> Advait Skyline is in Naroli, near Silvassa, Dadra &amp; Nagar Haveli (not Narol, Ahmedabad).
          </span>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-[#7B4F2E]/30">
          {/* Col 1: RERA Compliance */}
          <div className="flex flex-col items-start space-y-4">
            <h4 className="text-white font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#F2D27A]" />
              {t('projectHeading')}
            </h4>
            <div className="space-y-3 text-xs text-[#EADFCB]/80 font-sans leading-relaxed">
              <p>
                <span className="block text-[#EADFCB]/50 uppercase text-[10px] tracking-wider font-semibold">
                  RERA Registration
                </span>
                <strong className="text-[#F2D27A] font-semibold text-sm">
                  {PROJECT_DATA.identity.reraNumber}
                </strong>
              </p>
              <p>
                <span className="block text-[#EADFCB]/50 uppercase text-[10px] tracking-wider font-semibold">
                  Architect
                </span>
                <span className="text-white">
                  Takshashila Architects ({PROJECT_DATA.team.architect.name})
                </span>
              </p>
              <p>
                <span className="block text-[#EADFCB]/50 uppercase text-[10px] tracking-wider font-semibold">
                  Structural Engineer
                </span>
                <span className="text-white">
                  {PROJECT_DATA.team.structuralConsultant.name}
                </span>
              </p>
            </div>
          </div>

          {/* Col 2: Site Address (NAP) */}
          <div className="flex flex-col items-start space-y-4">
            <h4 className="text-white font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <MapPin size={16} className="text-[#F2D27A]" />
              {t('siteAddressHeading')}
            </h4>
            <address className="not-italic text-xs text-[#EADFCB]/80 font-sans leading-relaxed space-y-2">
              <p className="text-white font-semibold">Advait Skyline</p>
              <p>{PROJECT_DATA.contact.siteAddress}</p>
              <p className="text-[#D9A21B] font-medium pt-1">
                {PROJECT_DATA.contact.streetFrontage} (200 m from Checkpost)
              </p>
              <div className="flex flex-col gap-1 pt-2">
                <Link
                  href="/directions"
                  className="inline-flex items-center gap-1 text-[#F2D27A] hover:underline text-xs font-semibold"
                >
                  <span>Directions &amp; Commute Guide →</span>
                </Link>
                <a
                  href={PROJECT_DATA.contact.geoCoordinates.googleMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#EADFCB]/70 hover:text-white pt-0.5 text-xs font-semibold"
                >
                  <span>Verified Google Maps Listing</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </address>
          </div>

          {/* Col 3: Direct Enquiries */}
          <div className="flex flex-col items-start space-y-4">
            <h4 className="text-white font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Phone size={16} className="text-[#F2D27A]" />
              {t('contactHeading')}
            </h4>
            <div className="space-y-3 text-xs text-[#EADFCB]/80 font-sans leading-relaxed">
              <p>
                <span className="block text-[#EADFCB]/50 uppercase text-[10px] tracking-wider font-semibold">
                  Designated WhatsApp Lead
                </span>
                <a
                  href={`https://wa.me/${PROJECT_DATA.contact.whatsappLeadNumber.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'footer' })}
                  className="text-[#F2D27A] hover:underline font-bold text-sm"
                >
                  {PROJECT_DATA.contact.whatsappFormatted}
                </a>
              </p>
              <p>
                <span className="block text-[#EADFCB]/50 uppercase text-[10px] tracking-wider font-semibold">
                  Brochure Office Inquiries
                </span>
                <span className="text-white">
                  +91 99090 62363 / +91 99090 72363
                </span>
              </p>
              <p>
                <span className="block text-[#EADFCB]/50 uppercase text-[10px] tracking-wider font-semibold">
                  Official Email
                </span>
                <a
                  href={`mailto:${PROJECT_DATA.contact.email}`}
                  className="text-white hover:text-[#F2D27A] transition-colors"
                >
                  {PROJECT_DATA.contact.email}
                </a>
              </p>
              <div className="pt-2">
                <span className="block text-[#EADFCB]/50 uppercase text-[10px] tracking-wider font-semibold mb-2">
                  Official Social Channels
                </span>
                <SocialLinks variant="footer" />
              </div>
            </div>
          </div>

          {/* Col 4: Quick Navigation & Legal */}
          <div className="flex flex-col items-start space-y-4">
            <h4 className="text-white font-sans text-xs font-bold uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#EADFCB]/80 font-sans">
              <li>
                <Link href="/1-bhk-flats-naroli" className="hover:text-[#F2D27A] transition-colors">
                  1 BHK Flats in Naroli
                </Link>
              </li>
              <li>
                <Link href="/2-bhk-flats-naroli" className="hover:text-[#F2D27A] transition-colors">
                  2 BHK Flats in Naroli
                </Link>
              </li>
              <li>
                <Link href="/1-bhk-vs-2-bhk" className="hover:text-[#F2D27A] transition-colors">
                  1 BHK vs 2 BHK Comparison
                </Link>
              </li>
              <li>
                <Link href="/flats-near-silvassa" className="hover:text-[#F2D27A] transition-colors">
                  Flats Near Silvassa
                </Link>
              </li>
              <li>
                <Link href="/flats-near-bhilad-vapi" className="hover:text-[#F2D27A] transition-colors">
                  Flats Near Bhilad & Vapi
                </Link>
              </li>
              <li>
                <Link href="/directions" className="hover:text-[#F2D27A] transition-colors">
                  Directions &amp; Commute Guide
                </Link>
              </li>
              <li>
                <Link href="/price-and-payment-plan" className="hover:text-[#F2D27A] transition-colors">
                  Price & Payment Plan
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#F2D27A] transition-colors">
                  Real Estate Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/commercial-shops-naroli" className="hover:text-[#F2D27A] transition-colors">
                  Commercial Shops & Offices
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="hover:text-[#F2D27A] transition-colors">
                  39+ Lifestyle Amenities
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#F2D27A] transition-colors">
                  Privacy Policy (DPDP Act)
                </Link>
              </li>
              <li>
                <Link href="/terms-and-disclaimer" className="hover:text-[#F2D27A] transition-colors">
                  Terms & RERA Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Bottom Row */}
        <div className="pt-10 flex flex-col gap-6 text-[11px] text-[#EADFCB]/60 font-sans leading-relaxed">
          <p>{PROJECT_DATA.disclaimerText}</p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#7B4F2E]/20 text-[10px] uppercase tracking-wider text-[#EADFCB]/50">
            <span>
              © {new Date().getFullYear()} {PROJECT_DATA.identity.legalEntity}. All Rights Reserved.
            </span>
            <span>
              Naroli–Bhilad Checkpost, Dadra & Nagar Haveli – 396235
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
