'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Phone, Calendar } from 'lucide-react';
import { Link, usePathname } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

export default function MobileStickyBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hides on scroll down, shows on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I am interested in Advait Skyline (Naroli). Please share details.",
    sourceRef: 'mobile-sticky-bar',
  });

  return (
    <nav
      aria-label="Mobile Quick Engagement Bar"
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#1E130C]/95 backdrop-blur-md border-t border-[#7B4F2E]/40 px-3 py-2.5 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="grid grid-cols-3 gap-2">
        {/* WhatsApp Button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'mobile_sticky_bar' })}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-emerald-600 text-white font-sans text-[11px] font-bold shadow-xs active:scale-95 transition-transform"
        >
          <MessageSquare size={16} className="fill-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${PROJECT_DATA.contact.primaryCallNumber}`}
          onClick={() => pushDataLayerEvent('phone_click', { cta_location: 'mobile_sticky_bar' })}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-[#271910] border border-[#7B4F2E]/50 text-[#F2D27A] font-sans text-[11px] font-bold shadow-xs active:scale-95 transition-transform"
        >
          <Phone size={16} className="mb-0.5" />
          <span>Call Us</span>
        </a>

        {/* Site Visit Button */}
        <Link
          href="/contact"
          onClick={() => pushDataLayerEvent('site_visit_request', { cta_location: 'mobile_sticky_bar' })}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-gold-gradient text-[#1E130C] font-sans text-[11px] font-bold shadow-xs active:scale-95 transition-transform"
        >
          <Calendar size={16} className="mb-0.5" />
          <span>Site Visit</span>
        </Link>
      </div>
    </nav>
  );
}
