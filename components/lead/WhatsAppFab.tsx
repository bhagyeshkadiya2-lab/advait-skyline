'use client';

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { usePathname } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

export default function WhatsAppFab() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);

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
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center select-none group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Sleek Tooltip: Appears smoothly on hover, zero automatic screen collision */}
      <div
        className={`mr-3 bg-[#160E09]/95 backdrop-blur-md border border-[#D9A21B]/45 text-white text-xs px-3.5 py-1.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.85)] flex items-center gap-2 pointer-events-none transition-all duration-200 ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-sans font-medium text-[#F2D27A]">Chat on WhatsApp</span>
      </div>

      {/* Floating 54px WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Direct WhatsApp Chat with Advait Skyline Sales"
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.65)] transition-all duration-300 hover:scale-108 active:scale-95 shrink-0"
      >
        {/* Subtle glowing beacon dot (no oversized ping ring) */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#D9A21B] rounded-full border-2 border-[#1E130C] flex items-center justify-center shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </span>

        {/* WhatsApp Icon */}
        <MessageSquare size={24} className="fill-white" />
      </a>
    </aside>
  );
}
