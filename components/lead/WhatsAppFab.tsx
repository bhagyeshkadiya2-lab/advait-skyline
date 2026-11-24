'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { usePathname } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

export default function WhatsAppFab() {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  // Show tooltip after 4s delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!tooltipDismissed) {
        setShowTooltip(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [tooltipDismissed]);

  // Page-aware messaging
  let message = 'Hello, I am interested in Advait Skyline (Naroli). Please share details.';
  let sourceRef = 'fab-home';

  if (pathname.includes('1-bhk')) {
    message = 'Hello, I am interested in the 1 BHK flats with 575 sq. ft. built-up area at Advait Skyline (Naroli). Please share floor plans and affordable pricing details.';
    sourceRef = 'fab-1bhk-page';
  } else if (pathname.includes('2-bhk')) {
    message = 'Hello, I am interested in the 2 BHK flats with 652 sq. ft. built-up area at Advait Skyline (Naroli). Please share floor plans and affordable pricing details.';
    sourceRef = 'fab-2bhk-page';
  } else if (pathname.includes('commercial')) {
    message = 'Hello, I am interested in the commercial retail shops and offices at Advait Skyline (Naroli). Please share availability and details.';
    sourceRef = 'fab-commercial-page';
  } else if (pathname.includes('amenities')) {
    message = 'Hello, I am interested in the 39+ amenities at Advait Skyline (Naroli). Please share brochure.';
    sourceRef = 'fab-amenities-page';
  } else if (pathname.includes('contact')) {
    message = 'Hello, I would like to schedule a site visit to Advait Skyline at Naroli–Bhilad Checkpost.';
    sourceRef = 'fab-contact-page';
  }

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message,
    sourceRef,
  });

  const handleClick = () => {
    pushDataLayerEvent('whatsapp_click', {
      cta_location: 'floating_fab',
      page_type: pathname,
    });
  };

  return (
    <aside
      aria-label="Instant WhatsApp Assistance"
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40 flex items-center gap-3 select-none"
    >
      {/* 4s Delayed Tooltip */}
      {showTooltip && (
        <div className="relative bg-[#1E130C] border border-[#D9A21B]/40 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="font-sans font-medium">Chat on WhatsApp</span>
          <button
            type="button"
            onClick={() => {
              setShowTooltip(false);
              setTooltipDismissed(true);
            }}
            aria-label="Dismiss Tooltip"
            className="text-[#EADFCB]/60 hover:text-white transition-colors"
          >
            <X size={13} />
          </button>
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1E130C] border-t border-r border-[#D9A21B]/40 rotate-45" />
        </div>
      )}

      {/* Floating 56px WhatsApp Button with Gold Pulse Ring */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Direct WhatsApp Chat with Advait Skyline Sales"
        className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group shrink-0"
      >
        {/* Pulsing Gold Halo Ring (triggers every 6s) */}
        <span className="absolute inset-0 rounded-full border-2 border-[#D9A21B] animate-ping opacity-60 pointer-events-none" style={{ animationDuration: '6s' }} />

        {/* WhatsApp Icon */}
        <MessageSquare size={26} className="fill-white" />
      </a>
    </aside>
  );
}
