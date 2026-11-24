'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react';
import LeadForm from '@/components/lead/LeadForm';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

export default function FinalCtaSection() {
  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I would like to schedule a site visit to Advait Skyline.",
    sourceRef: 'final-cta-section',
  });

  return (
    <section className="py-24 sm:py-32 bg-[#FBF8F2] text-[#2A1F18] relative overflow-hidden">
      <div className="absolute inset-0 bg-texture-cream opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Credentials & Site Visit Invitation (50%) */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-[#7B4F2E]" />
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#7B4F2E]">
                  09 / Experience Advait Skyline
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#1E130C] leading-[1.12]">
                Visit Advait Skyline Today
              </h2>
              <p className="font-sans text-base text-[#2A1F18]/85 leading-relaxed">
                Connect directly with our project advisory team to schedule an on-site walkthrough, review floor layout blueprints, or secure priority retail storefront allotment.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-[#7B4F2E]/20 bg-white shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EADFCB]/60 text-[#7B4F2E] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase font-bold text-[#7B4F2E] tracking-wider mb-1">
                    Site Sales Office Address
                  </h4>
                  <p className="font-sans text-sm text-[#1E130C] font-semibold leading-relaxed">
                    {PROJECT_DATA.contact.siteAddress}
                  </p>
                  <span className="text-xs text-[#2A1F18]/70 block pt-0.5">
                    {PROJECT_DATA.contact.streetFrontage} · 200 m from Checkpost
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#7B4F2E]/20 bg-white shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#EADFCB]/60 text-[#7B4F2E] flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase font-bold text-[#7B4F2E] tracking-wider mb-1">
                    Direct Phone Lines
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#1E130C]">
                    <a
                      href={`tel:${PROJECT_DATA.contact.primaryCallNumber}`}
                      onClick={() => pushDataLayerEvent('phone_click', { cta_location: 'final_cta' })}
                      className="hover:text-[#7B4F2E] transition-colors"
                    >
                      +91 99090 72363
                    </a>
                    <span>/</span>
                    <a
                      href="tel:+919909062363"
                      onClick={() => pushDataLayerEvent('phone_click', { cta_location: 'final_cta' })}
                      className="hover:text-[#7B4F2E] transition-colors"
                    >
                      +91 99090 62363
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[#7B4F2E]/20 bg-white shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase font-bold text-emerald-700 tracking-wider mb-1">
                    Designated WhatsApp Desk
                  </h4>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'final_cta_card' })}
                    className="font-sans text-sm font-bold text-[#1E130C] hover:underline"
                  >
                    {PROJECT_DATA.contact.whatsappFormatted}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Embedded Interactive Lead Form (50%) */}
          <div className="lg:col-span-6">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
