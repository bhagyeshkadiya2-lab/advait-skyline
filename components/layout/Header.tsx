'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

const NAV_LINKS = [
  { href: '/', labelKey: 'home' },
  { href: '/1-bhk-flats-naroli', labelKey: 'oneBhk' },
  { href: '/2-bhk-flats-naroli', labelKey: 'twoBhk' },
  { href: '/amenities', labelKey: 'amenities' },
  { href: '/floor-plans', labelKey: 'floorPlans' },
  { href: '/commercial-shops-naroli', labelKey: 'commercial' },
  { href: '/project-location', labelKey: 'location' },
  { href: '/gallery', labelKey: 'gallery' },
  { href: '/about-dhanasvi-infra', labelKey: 'about' },
  { href: '/contact', labelKey: 'contact' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const waLeadUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I would like to schedule a site visit to Advait Skyline.",
    sourceRef: 'header-cta',
  });

  return (
    <header
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        isSticky
          ? 'bg-[#1E130C]/95 backdrop-blur-md shadow-lg border-b border-[#7B4F2E]/30 py-3'
          : 'bg-[#1E130C] border-b border-[#7B4F2E]/20 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-[#271910] border border-[#D9A21B]/40 group-hover:border-[#F2D27A] transition-colors shrink-0">
            <Image
              src="/logo.png"
              alt="Advait Skyline Logo"
              fill
              sizes="44px"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white leading-tight group-hover:text-[#F2D27A] transition-colors">
              {PROJECT_DATA.identity.name}
            </span>
            <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#D9A21B]">
              by Dhanasvi Infra
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs xl:text-sm font-sans tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#F2D27A] font-semibold'
                    : 'text-[#EADFCB]/85 hover:text-[#F2D27A]'
                }`}
              >
                {t(link.labelKey)}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F2D27A] to-[#D9A21B] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Gold-outline Site Visit Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            onClick={() => pushDataLayerEvent('site_visit_request', { cta_location: 'header_nav' })}
            className="px-5 py-2.5 rounded-md border border-[#D9A21B] text-[#F2D27A] hover:bg-[#D9A21B] hover:text-[#1E130C] font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center gap-1.5"
          >
            <span>{t('bookVisitBtn')}</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher className="sm:hidden" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('close') : t('menu')}
            className="p-2 rounded-md border border-[#7B4F2E]/40 text-[#F2D27A] hover:bg-[#7B4F2E]/30 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-[#1E130C]/98 backdrop-blur-xl z-50 lg:hidden flex flex-col justify-between p-6 overflow-y-auto">
          <div className="flex flex-col gap-5 pt-4">
            <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#D9A21B]">
              Navigation
            </span>
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-display text-xl transition-colors ${
                    pathname === link.href ? 'text-[#F2D27A] font-bold' : 'text-[#EADFCB] hover:text-[#F2D27A]'
                  }`}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#7B4F2E]/40 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#EADFCB]/70">Change Language:</span>
              <LanguageSwitcher />
            </div>

            <a
              href={waLeadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'mobile_menu' })}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md font-sans text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare size={18} />
              <span>Get Price on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
                pushDataLayerEvent('site_visit_request', { cta_location: 'mobile_menu_cta' });
              }}
              className="w-full py-3 border border-[#D9A21B] text-[#F2D27A] rounded-md font-sans text-xs font-semibold uppercase tracking-wider text-center"
            >
              {t('bookVisitBtn')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
