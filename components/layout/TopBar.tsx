'use client';

import React, { useEffect, useState } from 'react';
import { Phone, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent } from '@/lib/tracking';

export default function TopBar() {
  const t = useTranslations('topbar');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Official Compliance & Contact Bar"
      className={`w-full bg-[#1E130C] border-b border-[#7B4F2E]/30 text-[#EADFCB] text-xs transition-all duration-300 z-50 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden py-0 border-b-0' : 'h-10 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: RERA compliance statement */}
        <div className="flex items-center gap-2 font-medium tracking-wide truncate">
          <ShieldCheck size={14} className="text-[#F2D27A] shrink-0" />
          <span className="truncate">
            <strong className="text-[#F2D27A]">MAHA RERA: {PROJECT_DATA.identity.reraNumber}</strong> · Naroli–Bhilad Checkpost
          </span>
        </div>

        {/* Right: Language switcher & phone call */}
        <div className="flex items-center gap-4 shrink-0">
          <LanguageSwitcher />

          <a
            href={`tel:${PROJECT_DATA.contact.primaryCallNumber}`}
            onClick={() => pushDataLayerEvent('phone_click', { cta_location: 'topbar' })}
            className="hidden sm:inline-flex items-center gap-1.5 text-[#F2D27A] hover:text-white transition-colors font-medium tracking-wide"
          >
            <Phone size={13} />
            <span>{t('callUs')}</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
