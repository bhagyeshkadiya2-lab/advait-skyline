'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Menu,
  X,
  ArrowUpRight,
  MessageSquare,
  ChevronDown,
  Home,
  Layers,
  Sparkles,
  Compass,
  Building2,
  Phone,
  MapPin,
  Banknote,
  Train,
  BookOpen,
  Navigation,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import SocialLinks from '@/components/ui/SocialLinks';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [residencesDropdownOpen, setResidencesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setResidencesDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setResidencesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setResidencesDropdownOpen(false);
    }, 180);
  };

  const isResidencesActive =
    pathname === '/1-bhk-flats-naroli' ||
    pathname === '/2-bhk-flats-naroli' ||
    pathname === '/floor-plans' ||
    pathname === '/flats-in-silvassa' ||
    pathname === '/flats-near-silvassa' ||
    pathname === '/flats-near-bhilad-vapi' ||
    pathname === '/price-and-payment-plan';

  const waLeadUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: 'Hello, I would like to schedule a site visit to Advait Skyline.',
    sourceRef: 'header-cta',
  });

  return (
    <header
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        isSticky
          ? 'bg-[#1E130C]/95 backdrop-blur-md shadow-xl border-b border-[#7B4F2E]/40 py-2.5'
          : 'bg-[#1E130C] border-b border-[#7B4F2E]/25 py-3.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-[#271910] border border-[#D9A21B]/40 group-hover:border-[#F2D27A] transition-colors shrink-0 shadow-sm">
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
            <span className="font-display text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white leading-tight group-hover:text-[#F2D27A] transition-colors whitespace-nowrap">
              {PROJECT_DATA.identity.name}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.22em] text-[#D9A21B] whitespace-nowrap">
              by Dhanasvi Infra
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-2.5 xl:gap-5 2xl:gap-6"
        >
          {/* Home Link */}
          <Link
            href="/"
            className={`h-9 flex items-center px-1 text-xs xl:text-sm font-sans tracking-wide transition-colors relative whitespace-nowrap ${
              pathname === '/'
                ? 'text-[#F2D27A] font-semibold'
                : 'text-[#EADFCB]/85 hover:text-[#F2D27A]'
            }`}
          >
            <span>{t('home')}</span>
            {pathname === '/' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D9A21B] via-[#F2D27A] to-[#D9A21B] rounded-full shadow-[0_0_8px_rgba(217,162,27,0.7)]" />
            )}
          </Link>

          {/* Residences Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setResidencesDropdownOpen(!residencesDropdownOpen)}
              aria-expanded={residencesDropdownOpen}
              className={`h-9 flex items-center gap-1.5 px-1 text-xs xl:text-sm font-sans tracking-wide transition-colors relative whitespace-nowrap cursor-pointer ${
                isResidencesActive
                  ? 'text-[#F2D27A] font-semibold'
                  : 'text-[#EADFCB]/85 hover:text-[#F2D27A]'
              }`}
            >
              <span>{t('residences')}</span>
              <ChevronDown
                size={14}
                className={`text-[#D9A21B] transition-transform duration-200 ${
                  residencesDropdownOpen ? 'rotate-180 text-[#F2D27A]' : ''
                }`}
              />
              {isResidencesActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D9A21B] via-[#F2D27A] to-[#D9A21B] rounded-full shadow-[0_0_8px_rgba(217,162,27,0.7)]" />
              )}
            </button>

            {/* Dropdown Menu Glass Card */}
            {residencesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="bg-[#1E130C]/98 backdrop-blur-xl border border-[#7B4F2E]/60 rounded-xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#D9A21B] px-3 pt-1 pb-1 font-semibold">
                    Residential Options · G+14
                  </span>

                  {/* 1 BHK Link */}
                  <Link
                    href="/1-bhk-flats-naroli"
                    className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                      pathname === '/1-bhk-flats-naroli'
                        ? 'bg-[#2E1E14] border border-[#D9A21B]/40 text-[#F2D27A]'
                        : 'hover:bg-[#2A1B12] text-[#EADFCB] hover:text-[#F2D27A]'
                    }`}
                  >
                    <div className="p-2 rounded-md bg-[#382317] border border-[#D9A21B]/30 text-[#F2D27A] shrink-0 mt-0.5">
                      <Home size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold leading-tight">
                        {t('oneBhk')}
                      </span>
                      <span className="text-[11px] text-[#EADFCB]/70 leading-normal mt-0.5">
                        {t('oneBhkSub')}
                      </span>
                    </div>
                  </Link>

                  {/* 2 BHK Link */}
                  <Link
                    href="/2-bhk-flats-naroli"
                    className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                      pathname === '/2-bhk-flats-naroli'
                        ? 'bg-[#2E1E14] border border-[#D9A21B]/40 text-[#F2D27A]'
                        : 'hover:bg-[#2A1B12] text-[#EADFCB] hover:text-[#F2D27A]'
                    }`}
                  >
                    <div className="p-2 rounded-md bg-[#382317] border border-[#D9A21B]/30 text-[#F2D27A] shrink-0 mt-0.5">
                      <Layers size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold leading-tight">
                        {t('twoBhk')}
                      </span>
                      <span className="text-[11px] text-[#EADFCB]/70 leading-normal mt-0.5">
                        {t('twoBhkSub')}
                      </span>
                    </div>
                  </Link>

                  {/* Flats Near Silvassa Link */}
                  <Link
                    href="/flats-near-silvassa"
                    className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                      pathname === '/flats-near-silvassa'
                        ? 'bg-[#2E1E14] border border-[#D9A21B]/40 text-[#F2D27A]'
                        : 'hover:bg-[#2A1B12] text-[#EADFCB] hover:text-[#F2D27A]'
                    }`}
                  >
                    <div className="p-2 rounded-md bg-[#382317] border border-[#D9A21B]/30 text-[#F2D27A] shrink-0 mt-0.5">
                      <MapPin size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold leading-tight">
                        Flats Near Silvassa
                      </span>
                      <span className="text-[11px] text-[#EADFCB]/70 leading-normal mt-0.5">
                        ~10 km via Naroli–Silvassa Main Road
                      </span>
                    </div>
                  </Link>

                  {/* Flats Near Bhilad & Vapi Link */}
                  <Link
                    href="/flats-near-bhilad-vapi"
                    className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                      pathname === '/flats-near-bhilad-vapi'
                        ? 'bg-[#2E1E14] border border-[#D9A21B]/40 text-[#F2D27A]'
                        : 'hover:bg-[#2A1B12] text-[#EADFCB] hover:text-[#F2D27A]'
                    }`}
                  >
                    <div className="p-2 rounded-md bg-[#382317] border border-[#D9A21B]/30 text-[#F2D27A] shrink-0 mt-0.5">
                      <Train size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold leading-tight">
                        Flats Near Bhilad & Vapi
                      </span>
                      <span className="text-[11px] text-[#EADFCB]/70 leading-normal mt-0.5">
                        5.1 km to Bhilad Stn · Industrial Transit
                      </span>
                    </div>
                  </Link>

                  {/* Price & Payment Plan Link */}
                  <Link
                    href="/price-and-payment-plan"
                    className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                      pathname === '/price-and-payment-plan'
                        ? 'bg-[#2E1E14] border border-[#D9A21B]/40 text-[#F2D27A]'
                        : 'hover:bg-[#2A1B12] text-[#EADFCB] hover:text-[#F2D27A]'
                    }`}
                  >
                    <div className="p-2 rounded-md bg-[#382317] border border-[#D9A21B]/30 text-[#F2D27A] shrink-0 mt-0.5">
                      <Banknote size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold leading-tight">
                        Price & Payment Plan
                      </span>
                      <span className="text-[11px] text-[#EADFCB]/70 leading-normal mt-0.5">
                        Construction-linked milestones & sheet
                      </span>
                    </div>
                  </Link>

                  {/* Directions & Commute Link */}
                  <Link
                    href="/directions"
                    className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                      pathname === '/directions'
                        ? 'bg-[#2E1E14] border border-[#D9A21B]/40 text-[#F2D27A]'
                        : 'hover:bg-[#2A1B12] text-[#EADFCB] hover:text-[#F2D27A]'
                    }`}
                  >
                    <div className="p-2 rounded-md bg-[#382317] border border-[#D9A21B]/30 text-[#F2D27A] shrink-0 mt-0.5">
                      <Navigation size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold leading-tight">
                        Directions &amp; Commute
                      </span>
                      <span className="text-[11px] text-[#EADFCB]/70 leading-normal mt-0.5">
                        Route guide from Bhilad, Silvassa &amp; Vapi
                      </span>
                    </div>
                  </Link>

                  <div className="h-[1px] bg-[#7B4F2E]/40 my-1" />

                  {/* Floor Plans Link */}
                  <Link
                    href="/floor-plans"
                    className={`flex items-start gap-3 p-2.5 rounded-lg transition-all ${
                      pathname === '/floor-plans'
                        ? 'bg-[#2E1E14] border border-[#D9A21B]/40 text-[#F2D27A]'
                        : 'hover:bg-[#2A1B12] text-[#EADFCB] hover:text-[#F2D27A]'
                    }`}
                  >
                    <div className="p-2 rounded-md bg-[#382317] border border-[#D9A21B]/30 text-[#F2D27A] shrink-0 mt-0.5">
                      <Compass size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold leading-tight">
                        {t('floorPlans')}
                      </span>
                      <span className="text-[11px] text-[#EADFCB]/70 leading-normal mt-0.5">
                        {t('floorPlansSub')}
                      </span>
                    </div>
                  </Link>

                  {/* 3D Virtual Tour Anchor Link */}
                  <Link
                    href="/#sample-flat-tour"
                    className="flex items-start gap-3 p-2.5 rounded-lg transition-all hover:bg-[#2A1B12] text-[#EADFCB] hover:text-[#F2D27A]"
                  >
                    <div className="p-2 rounded-md bg-[#382317] border border-[#D9A21B]/30 text-[#F2D27A] shrink-0 mt-0.5">
                      <Sparkles size={15} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold leading-tight flex items-center gap-1.5">
                        <span>{t('sampleTour')}</span>
                        <span className="px-1.5 py-0.2 bg-[#D9A21B]/20 text-[#F2D27A] text-[9px] uppercase tracking-wider rounded font-mono font-bold">
                          3D
                        </span>
                      </span>
                      <span className="text-[11px] text-[#EADFCB]/70 leading-normal mt-0.5">
                        {t('sampleTourSub')}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Amenities Link with Gold Pill Badge */}
          <Link
            href="/amenities"
            className={`h-9 flex items-center gap-1.5 px-1 text-xs xl:text-sm font-sans tracking-wide transition-colors relative whitespace-nowrap ${
              pathname === '/amenities'
                ? 'text-[#F2D27A] font-semibold'
                : 'text-[#EADFCB]/85 hover:text-[#F2D27A]'
            }`}
          >
            <span>{t('amenities')}</span>
            <span className="px-1.5 py-0.5 rounded-full bg-[#D9A21B]/20 border border-[#D9A21B]/40 text-[#F2D27A] text-[10px] font-bold tracking-tight">
              39+
            </span>
            {pathname === '/amenities' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D9A21B] via-[#F2D27A] to-[#D9A21B] rounded-full shadow-[0_0_8px_rgba(217,162,27,0.7)]" />
            )}
          </Link>

          {/* Commercial Shops Link */}
          <Link
            href="/commercial-shops-naroli"
            className={`h-9 flex items-center px-1 text-xs xl:text-sm font-sans tracking-wide transition-colors relative whitespace-nowrap ${
              pathname === '/commercial-shops-naroli'
                ? 'text-[#F2D27A] font-semibold'
                : 'text-[#EADFCB]/85 hover:text-[#F2D27A]'
            }`}
          >
            <span>{t('commercial')}</span>
            {pathname === '/commercial-shops-naroli' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D9A21B] via-[#F2D27A] to-[#D9A21B] rounded-full shadow-[0_0_8px_rgba(217,162,27,0.7)]" />
            )}
          </Link>

          {/* Location Link */}
          <Link
            href="/project-location"
            className={`h-9 flex items-center px-1 text-xs xl:text-sm font-sans tracking-wide transition-colors relative whitespace-nowrap ${
              pathname === '/project-location'
                ? 'text-[#F2D27A] font-semibold'
                : 'text-[#EADFCB]/85 hover:text-[#F2D27A]'
            }`}
          >
            <span>{t('location')}</span>
            {pathname === '/project-location' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D9A21B] via-[#F2D27A] to-[#D9A21B] rounded-full shadow-[0_0_8px_rgba(217,162,27,0.7)]" />
            )}
          </Link>

          {/* Gallery Link */}
          <Link
            href="/gallery"
            className={`h-9 flex items-center px-1 text-xs xl:text-sm font-sans tracking-wide transition-colors relative whitespace-nowrap ${
              pathname === '/gallery'
                ? 'text-[#F2D27A] font-semibold'
                : 'text-[#EADFCB]/85 hover:text-[#F2D27A]'
            }`}
          >
            <span>{t('gallery')}</span>
            {pathname === '/gallery' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D9A21B] via-[#F2D27A] to-[#D9A21B] rounded-full shadow-[0_0_8px_rgba(217,162,27,0.7)]" />
            )}
          </Link>

          {/* Blog & Real Estate Insights Link */}
          <Link
            href="/blog"
            className={`h-9 flex items-center px-1 text-xs xl:text-sm font-sans tracking-wide transition-colors relative whitespace-nowrap ${
              pathname.startsWith('/blog')
                ? 'text-[#F2D27A] font-semibold'
                : 'text-[#EADFCB]/85 hover:text-[#F2D27A]'
            }`}
          >
            <span>Blog</span>
            {pathname.startsWith('/blog') && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D9A21B] via-[#F2D27A] to-[#D9A21B] rounded-full shadow-[0_0_8px_rgba(217,162,27,0.7)]" />
            )}
          </Link>

          {/* About Dhanasvi Link */}
          <Link
            href="/about-dhanasvi-infra"
            className={`h-9 flex items-center px-1 text-xs xl:text-sm font-sans tracking-wide transition-colors relative whitespace-nowrap ${
              pathname === '/about-dhanasvi-infra'
                ? 'text-[#F2D27A] font-semibold'
                : 'text-[#EADFCB]/85 hover:text-[#F2D27A]'
            }`}
          >
            <span>
              {t('about') === 'About Dhanasvi' ? (
                <>
                  About<span className="hidden xl:inline"> Dhanasvi</span>
                </>
              ) : (
                t('about')
              )}
            </span>
            {pathname === '/about-dhanasvi-infra' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D9A21B] via-[#F2D27A] to-[#D9A21B] rounded-full shadow-[0_0_8px_rgba(217,162,27,0.7)]" />
            )}
          </Link>

          {/* Contact Link */}
          <Link
            href="/contact"
            className={`h-9 flex items-center px-1 text-xs xl:text-sm font-sans tracking-wide transition-colors relative whitespace-nowrap ${
              pathname === '/contact'
                ? 'text-[#F2D27A] font-semibold'
                : 'text-[#EADFCB]/85 hover:text-[#F2D27A]'
            }`}
          >
            <span>{t('contact')}</span>
            {pathname === '/contact' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#D9A21B] via-[#F2D27A] to-[#D9A21B] rounded-full shadow-[0_0_8px_rgba(217,162,27,0.7)]" />
            )}
          </Link>
        </nav>

        {/* Right Action: Luxury Gold Site Visit Button */}
        <div className="hidden lg:flex items-center shrink-0 ml-2 xl:ml-3">
          <Link
            href="/contact"
            onClick={() =>
              pushDataLayerEvent('site_visit_request', { cta_location: 'header_nav' })
            }
            className="group relative px-3.5 xl:px-4.5 py-2 xl:py-2.5 rounded-lg border border-[#D9A21B] bg-gradient-to-r from-[#D9A21B]/15 via-[#F2D27A]/20 to-[#D9A21B]/15 hover:bg-[#D9A21B] hover:text-[#1E130C] text-[#F2D27A] font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(217,162,27,0.15)] hover:shadow-[0_0_22px_rgba(217,162,27,0.45)] flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>{t('bookVisitBtn')}</span>
            <ArrowUpRight
              size={14}
              className="text-[#D9A21B] group-hover:text-[#1E130C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </Link>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="lg:hidden flex items-center gap-3 shrink-0">
          <LanguageSwitcher className="sm:hidden" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t('close') : t('menu')}
            className="p-2 rounded-lg border border-[#7B4F2E]/50 text-[#F2D27A] hover:bg-[#7B4F2E]/30 focus:outline-none transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#1E130C]/98 backdrop-blur-2xl z-50 lg:hidden flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 pt-2">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#D9A21B] font-semibold">
              Explore Advait Skyline
            </span>

            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-lg py-1.5 transition-colors ${
                  pathname === '/' ? 'text-[#F2D27A] font-bold' : 'text-[#EADFCB] hover:text-[#F2D27A]'
                }`}
              >
                {t('home')}
              </Link>

              {/* Mobile Residences Section */}
              <div className="py-2 border-y border-[#7B4F2E]/30 flex flex-col gap-2">
                <span className="text-xs uppercase font-sans tracking-wider text-[#D9A21B]/80 font-medium">
                  {t('residences')}
                </span>
                <div className="grid grid-cols-1 gap-1.5 pl-3">
                  <Link
                    href="/1-bhk-flats-naroli"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1 text-sm text-[#EADFCB] hover:text-[#F2D27A]"
                  >
                    <span>{t('oneBhk')}</span>
                    <span className="text-[10px] text-[#D9A21B] font-mono">511 sq.ft</span>
                  </Link>
                  <Link
                    href="/2-bhk-flats-naroli"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1 text-sm text-[#EADFCB] hover:text-[#F2D27A]"
                  >
                    <span>{t('twoBhk')}</span>
                    <span className="text-[10px] text-[#D9A21B] font-mono">573 sq.ft</span>
                  </Link>
                  <Link
                    href="/flats-near-silvassa"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1 text-sm text-[#EADFCB] hover:text-[#F2D27A]"
                  >
                    <span>Flats Near Silvassa</span>
                    <span className="text-[10px] text-[#D9A21B] font-mono">~10 km</span>
                  </Link>
                  <Link
                    href="/flats-near-bhilad-vapi"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1 text-sm text-[#EADFCB] hover:text-[#F2D27A]"
                  >
                    <span>Flats Near Bhilad & Vapi</span>
                    <span className="text-[10px] text-[#D9A21B] font-mono">5.1 km</span>
                  </Link>
                  <Link
                    href="/floor-plans"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1 text-sm text-[#EADFCB] hover:text-[#F2D27A]"
                  >
                    <span>{t('floorPlans')}</span>
                    <span className="text-[10px] text-[#D9A21B]">2D & 3D</span>
                  </Link>
                  <Link
                    href="/price-and-payment-plan"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1 text-sm text-[#EADFCB] hover:text-[#F2D27A]"
                  >
                    <span>Price & Payment Plan</span>
                    <span className="text-[10px] text-[#D9A21B]">Milestones</span>
                  </Link>
                  <Link
                    href="/#sample-flat-tour"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1 text-sm text-[#EADFCB] hover:text-[#F2D27A]"
                  >
                    <span className="flex items-center gap-1.5">
                      <span>{t('sampleTour')}</span>
                      <span className="px-1 bg-[#D9A21B]/20 text-[#F2D27A] text-[9px] rounded font-mono">
                        3D
                      </span>
                    </span>
                    <ArrowUpRight size={13} className="text-[#D9A21B]" />
                  </Link>
                </div>
              </div>

              <Link
                href="/amenities"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg py-1.5 text-[#EADFCB] hover:text-[#F2D27A] flex items-center justify-between"
              >
                <span>{t('amenities')}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#D9A21B]/20 border border-[#D9A21B]/40 text-[#F2D27A] font-mono font-bold">
                  39+
                </span>
              </Link>

              <Link
                href="/commercial-shops-naroli"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg py-1.5 text-[#EADFCB] hover:text-[#F2D27A]"
              >
                {t('commercial')}
              </Link>

              <Link
                href="/project-location"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg py-1.5 text-[#EADFCB] hover:text-[#F2D27A]"
              >
                {t('location')}
              </Link>

              <Link
                href="/directions"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg py-1.5 text-[#EADFCB] hover:text-[#F2D27A] flex items-center justify-between"
              >
                <span>Directions &amp; Commute</span>
                <span className="text-[10px] uppercase font-sans text-[#F2D27A] bg-[#7B4F2E]/40 px-2 py-0.5 rounded">
                  GPS
                </span>
              </Link>

              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg py-1.5 text-[#EADFCB] hover:text-[#F2D27A]"
              >
                {t('gallery')}
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg py-1.5 text-[#EADFCB] hover:text-[#F2D27A]"
              >
                Blog & Market Insights
              </Link>

              <Link
                href="/construction-updates"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg py-1.5 text-[#EADFCB] hover:text-[#F2D27A]"
              >
                {t('construction')}
              </Link>

              <Link
                href="/about-dhanasvi-infra"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg py-1.5 text-[#EADFCB] hover:text-[#F2D27A]"
              >
                {t('about')}
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-lg py-1.5 text-[#EADFCB] hover:text-[#F2D27A]"
              >
                {t('contact')}
              </Link>
            </nav>
          </div>

          {/* Mobile Bottom Quick Actions */}
          <div className="pt-6 border-t border-[#7B4F2E]/40 flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs text-[#EADFCB]/70 font-sans">Language:</span>
              <LanguageSwitcher />
            </div>

            <div className="flex items-center justify-between py-2 border-y border-[#7B4F2E]/30">
              <span className="text-xs text-[#EADFCB]/70 font-sans">Follow Us:</span>
              <SocialLinks variant="topbar" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${PROJECT_DATA.contact.primaryCallNumber}`}
                onClick={() => pushDataLayerEvent('phone_click', { cta_location: 'mobile_menu' })}
                className="py-3 border border-[#D9A21B]/60 text-[#F2D27A] hover:bg-[#D9A21B]/15 rounded-lg font-sans text-xs font-semibold flex items-center justify-center gap-1.5 tracking-wider uppercase transition-colors"
              >
                <Phone size={14} />
                <span>Call Us</span>
              </a>

              <a
                href={waLeadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  pushDataLayerEvent('whatsapp_click', { cta_location: 'mobile_menu' })
                }
                className="py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-sans text-xs font-semibold flex items-center justify-center gap-1.5 tracking-wider uppercase shadow-md transition-colors"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
                pushDataLayerEvent('site_visit_request', { cta_location: 'mobile_menu_cta' });
              }}
              className="w-full py-3 bg-gradient-to-r from-[#D9A21B] to-[#F2D27A] text-[#1E130C] font-sans text-xs font-bold uppercase tracking-widest rounded-lg text-center shadow-lg transition-transform hover:scale-[1.01]"
            >
              {t('bookVisitBtn')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
