'use client';

import React from 'react';
import { Check, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { buildWhatsAppLink, trackEvent } from '@/lib/tracking';
import { BrochureDownloadButton } from '@/components/lead/BrochureDownloadModal';

interface PropertyComparisonTableProps {
  className?: string;
}

export default function PropertyComparisonTable({ className = '' }: PropertyComparisonTableProps) {
  const wa1BhkUrl = buildWhatsAppLink({
    phone: SITE_CONFIG.contact.whatsappNumber,
    message:
      'Hello, I am interested in the 1 BHK flat at Advait Skyline, Naroli, with 575 sq. ft. built-up area. Please share the latest price, availability and site visit details.',
    sourceRef: 'comparison-1bhk-cta',
  });

  const wa2BhkUrl = buildWhatsAppLink({
    phone: SITE_CONFIG.contact.whatsappNumber,
    message:
      'Hello, I am interested in the 2 BHK flat at Advait Skyline, Naroli, with 652 sq. ft. built-up area. Please share the latest price, availability and site visit details.',
    sourceRef: 'comparison-2bhk-cta',
  });

  const comparisonRows = [
    {
      feature: 'Built-up Area',
      oneBhk: '575 sq. ft.',
      twoBhk: '652 sq. ft.',
      highlight: true,
    },
    {
      feature: 'Carpet Area (Sanctioned Plan)',
      oneBhk: '511 sq. ft. (Subject to verification)',
      twoBhk: '573 sq. ft. (Subject to verification)',
      highlight: true,
    },
    {
      feature: 'Bedrooms & Bathrooms',
      oneBhk: '1 Bedroom + 2 Full Bathrooms',
      twoBhk: '2 Bedrooms + 2 Full Bathrooms',
    },
    {
      feature: 'Balcony & Wash Area',
      oneBhk: "4'0\" Wide Balcony + Dedicated Wash Area",
      twoBhk: "5'6\" Wide Sunset Balcony + Dedicated Wash Area",
    },
    {
      feature: 'Pricing Positioning',
      oneBhk: 'Affordable Pricing',
      twoBhk: 'Affordable Pricing',
      highlight: true,
    },
    {
      feature: 'Parking Allocation',
      oneBhk: 'Individual Parking (Allocation terms apply)',
      twoBhk: 'Individual Parking (Allocation terms apply)',
    },
    {
      feature: 'Project Lifestyle Amenities',
      oneBhk: '39+ Amenities (Pool, dual gyms, turf cricket, etc.)',
      twoBhk: '39+ Amenities (Pool, dual gyms, turf cricket, etc.)',
    },
    {
      feature: 'Possession Target',
      oneBhk: 'Before March 2028',
      twoBhk: 'Before March 2028',
    },
    {
      feature: 'Best Suited For',
      oneBhk: 'Small families, young couples & first-time homebuyers',
      twoBhk: 'Growing families, salaried professionals & upgraders',
    },
  ];

  return (
    <section
      aria-label="Advait Skyline 1 BHK vs 2 BHK Property Comparison Table"
      className={`w-full py-16 sm:py-20 bg-white border-y border-[#7B4F2E]/20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#7B4F2E]">
              Configuration Comparison
            </span>
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E130C]">
            1 BHK vs 2 BHK Flat Comparison
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#2A1F18]/80 max-w-2xl mx-auto leading-relaxed">
            Compare built-up areas, approved carpet layouts, parking, and family suitability at Advait Skyline on Naroli–Silvassa Main Road.
          </p>
        </div>

        {/* Semantic Accessible Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-[#7B4F2E]/30 bg-[#FBF8F2] shadow-md">
          <table className="w-full text-left border-collapse font-sans text-xs sm:text-sm">
            <caption className="sr-only">
              Advait Skyline 1 BHK vs 2 BHK property specification comparison table
            </caption>
            <thead>
              <tr className="border-b border-[#7B4F2E]/30 bg-[#1E130C] text-white">
                <th scope="col" className="py-4 px-4 sm:px-6 font-bold uppercase tracking-wider text-[11px] text-[#F2D27A] w-1/3">
                  Specification / Feature
                </th>
                <th scope="col" className="py-4 px-4 sm:px-6 font-bold uppercase tracking-wider text-xs sm:text-sm text-white w-1/3 border-l border-[#7B4F2E]/40">
                  <div className="flex flex-col">
                    <span className="font-display text-lg sm:text-xl font-bold text-[#F2D27A]">1 BHK Residence</span>
                    <span className="text-[11px] text-[#EADFCB]/80 font-normal">575 Sq. Ft. Built-up</span>
                  </div>
                </th>
                <th scope="col" className="py-4 px-4 sm:px-6 font-bold uppercase tracking-wider text-xs sm:text-sm text-white w-1/3 border-l border-[#7B4F2E]/40">
                  <div className="flex flex-col">
                    <span className="font-display text-lg sm:text-xl font-bold text-[#F2D27A]">2 BHK Residence</span>
                    <span className="text-[11px] text-[#EADFCB]/80 font-normal">652 Sq. Ft. Built-up</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#7B4F2E]/20">
              {comparisonRows.map((row, index) => (
                <tr
                  key={index}
                  className={`hover:bg-[#EADFCB]/30 transition-colors ${
                    row.highlight ? 'bg-[#F2D27A]/10 font-semibold' : ''
                  }`}
                >
                  <th scope="row" className="py-3.5 px-4 sm:px-6 font-semibold text-[#1E130C] text-xs sm:text-sm">
                    {row.feature}
                  </th>
                  <td className="py-3.5 px-4 sm:px-6 text-[#2A1F18] border-l border-[#7B4F2E]/20">
                    {row.oneBhk}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-[#2A1F18] border-l border-[#7B4F2E]/20">
                    {row.twoBhk}
                  </td>
                </tr>
              ))}
              {/* Call to Action Row */}
              <tr className="bg-[#1E130C]/5 border-t-2 border-[#7B4F2E]/40">
                <th scope="row" className="py-4 px-4 sm:px-6 font-bold text-[#1E130C] uppercase tracking-wider text-xs">
                  Enquiry &amp; Pricing
                </th>
                <td className="py-4 px-4 sm:px-6 border-l border-[#7B4F2E]/20">
                  <div className="flex flex-col gap-2">
                    <a
                      href={wa1BhkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent('price_enquiry', { configuration: '1bhk', source: 'comparison_table' })
                      }
                      className="min-h-[44px] px-4 py-2.5 rounded-lg bg-gold-gradient text-[#1E130C] font-bold text-xs uppercase tracking-wider shadow-sm hover:brightness-105 flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
                    >
                      <MessageSquare size={13} />
                      <span>Get 1 BHK Price</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </td>
                <td className="py-4 px-4 sm:px-6 border-l border-[#7B4F2E]/20">
                  <div className="flex flex-col gap-2">
                    <a
                      href={wa2BhkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent('price_enquiry', { configuration: '2bhk', source: 'comparison_table' })
                      }
                      className="min-h-[44px] px-4 py-2.5 rounded-lg bg-[#271910] text-[#F2D27A] border border-[#D9A21B]/40 hover:bg-[#7B4F2E] font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
                    >
                      <MessageSquare size={13} />
                      <span>Get 2 BHK Price</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Disclaimer Note */}
        <p className="text-[11px] text-[#2A1F18]/70 font-sans text-center max-w-2xl mx-auto leading-relaxed">
          * Note: Built-up areas (575 sq. ft. for 1 BHK, 652 sq. ft. for 2 BHK) are developer-specified. Carpet areas (511 and 573 sq. ft.) are subject to final municipal and RERA document verification. Individual parking is subject to allocation terms.
        </p>

      </div>
    </section>
  );
}
