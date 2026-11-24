'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { pushDataLayerEvent } from '@/lib/tracking';

const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हिं' },
  { code: 'gu', label: 'ગુ' },
] as const;

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: 'en' | 'hi' | 'gu') => {
    if (newLocale === currentLocale) return;

    pushDataLayerEvent('language_switch', {
      previous_locale: currentLocale,
      new_locale: newLocale,
      page_path: pathname,
    });

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={`inline-flex items-center gap-1.5 text-xs font-medium tracking-wide ${className}`}>
      {LOCALES.map((loc, idx) => {
        const isActive = loc.code === currentLocale;
        return (
          <React.Fragment key={loc.code}>
            <button
              type="button"
              onClick={() => handleLocaleChange(loc.code)}
              aria-label={`Switch language to ${loc.label}`}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                isActive
                  ? 'bg-[#7B4F2E] text-[#F2D27A] font-bold shadow-xs'
                  : 'text-[#EADFCB]/80 hover:text-[#F2D27A]'
              }`}
            >
              {loc.label}
            </button>
            {idx < LOCALES.length - 1 && (
              <span className="text-[#EADFCB]/30 select-none">|</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
