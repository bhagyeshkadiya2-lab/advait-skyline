import React from 'react';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PROJECT_DATA } from '@/lib/project-data';
import { createPageMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import LeadForm from '@/components/lead/LeadForm';
import GoogleMapsEmbed from '@/components/sections/GoogleMapsEmbed';
import { buildWhatsAppLink } from '@/lib/tracking';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({
    locale,
    path: '/contact',
    customTitle: 'Contact Advait Skyline | Site Visits & Sales Office Naroli–Bhilad',
    customDescription:
      'Contact Dhanasvi Infra for Advait Skyline: schedule site visits, get price on WhatsApp (+91 99090 72390), or visit our sales gallery at Naroli–Bhilad Checkpost, Dadra & Nagar Haveli.',
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I would like to schedule a site visit or enquire about flats at Advait Skyline.",
    sourceRef: 'contact-page-primary',
  });

  return (
    <div className="w-full bg-[#FBF8F2] text-[#2A1F18]">
      <JsonLd
        locale={locale}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Contact Us', item: '/contact' },
        ]}
      />

      {/* Header */}
      <section className="bg-[#1E130C] text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span>Connect with Us</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl">
            Visit Advait Skyline <span className="text-gold-gradient">Sales Office</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-[#EADFCB]/85 max-w-2xl leading-relaxed">
            We invite you to tour the site, inspect sample mockups, and discuss flexible booking terms at our sales gallery at the Naroli–Bhilad Checkpost.
          </p>
        </div>
      </section>

      {/* Contact Grid & Form */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-[#7B4F2E]/20 bg-white shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EADFCB]/60 text-[#7B4F2E] flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1E130C]">
                Site & Sales Gallery
              </h3>
              <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                {PROJECT_DATA.contact.siteAddress}
              </p>
              <a
                href={PROJECT_DATA.contact.geoCoordinates.googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#7B4F2E] hover:underline pt-1"
              >
                <span>Open Google Maps</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-[#7B4F2E]/20 bg-white shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                <MessageSquare size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1E130C]">
                Official WhatsApp Desk
              </h3>
              <p className="text-xs text-[#2A1F18]/70 font-sans">
                Fastest channel for instant brochures, price quotes, and video walkthroughs.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-bold text-emerald-700 hover:underline"
              >
                {PROJECT_DATA.contact.whatsappFormatted}
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-[#7B4F2E]/20 bg-white shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EADFCB]/60 text-[#7B4F2E] flex items-center justify-center">
                <Phone size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1E130C]">
                Office Phone Lines
              </h3>
              <div className="flex flex-col gap-1 text-sm font-semibold text-[#1E130C]">
                <a href="tel:+919909072363" className="hover:text-[#7B4F2E]">
                  +91 99090 72363
                </a>
                <a href="tel:+919909062363" className="hover:text-[#7B4F2E]">
                  +91 99090 62363
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#7B4F2E]/20 bg-white shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#EADFCB]/60 text-[#7B4F2E] flex items-center justify-center">
                <Mail size={20} />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1E130C]">
                Email Correspondence
              </h3>
              <a href={`mailto:${PROJECT_DATA.contact.email}`} className="text-sm font-semibold text-[#7B4F2E] hover:underline">
                {PROJECT_DATA.contact.email}
              </a>
            </div>
          </div>

          {/* Right Lead Form */}
          <div className="lg:col-span-7">
            <LeadForm />
          </div>

        </div>

        {/* Interactive Google Maps Embed with Verified Place Link */}
        <div className="mt-14 sm:mt-20">
          <GoogleMapsEmbed />
        </div>
      </section>
    </div>
  );
}
