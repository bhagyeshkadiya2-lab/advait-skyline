'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { MessageSquare, ArrowUpRight, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

// Ambient dust particles (strictly CSS, <= 20 elements, 0 canvas)
const DUST_PARTICLES = [
  { left: '10%', top: '25%', size: 4, duration: 6, delay: 0 },
  { left: '25%', top: '45%', size: 3, duration: 8, delay: 1 },
  { left: '40%', top: '20%', size: 5, duration: 7, delay: 0.5 },
  { left: '55%', top: '65%', size: 3, duration: 9, delay: 2 },
  { left: '70%', top: '35%', size: 4, duration: 6.5, delay: 1.5 },
  { left: '85%', top: '75%', size: 3, duration: 8.5, delay: 0.8 },
  { left: '20%', top: '80%', size: 4, duration: 7.2, delay: 2.5 },
  { left: '35%', top: '70%', size: 5, duration: 6.8, delay: 3 },
  { left: '60%', top: '15%', size: 3, duration: 7.5, delay: 1.2 },
  { left: '80%', top: '22%', size: 4, duration: 8, delay: 2.2 },
  { left: '90%', top: '50%', size: 5, duration: 6.2, delay: 0.2 },
  { left: '48%', top: '85%', size: 3, duration: 7.8, delay: 1.8 },
];

export default function HeroStage() {
  const t = useTranslations('hero');
  const heroRef = useRef<HTMLDivElement>(null);

  // 1. Scroll-linked 3D Parallax & Depth
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const buildingY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const buildingScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const buildingRotateX = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const badgeScrollRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // 2. Pointer Tilt (Desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 6); // +-3 deg max
    mouseY.set(y * -6);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToAmenities = () => {
    pushDataLayerEvent('view_amenities', { cta_location: 'hero_39_badge' });
    const el = document.getElementById('amenities-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const waLeadUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: "Hello, I am interested in Advait Skyline (Naroli). Please share details and pricing.",
    sourceRef: 'hero-primary-cta',
  });

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100svh] bg-[#1E130C] overflow-hidden flex flex-col justify-between"
      style={{ perspective: '1200px' }}
    >
      {/* Ambient Noise Texture & Gradient Mask */}
      <div className="absolute inset-0 bg-texture-espresso opacity-60 pointer-events-none z-0" />

      {/* Floating Dust Particles (Hidden on reduced motion) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 hidden sm:block">
        {DUST_PARTICLES.map((p, idx) => (
          <span
            key={idx}
            className="absolute rounded-full bg-[#F2D27A]/25 animate-pulse"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Core Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 pt-8 sm:pt-14 pb-16 relative z-20">
        
        {/* LEFT COLUMN: Editorial Typography & Semantic Server-Rendered CTAs (40% desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[45%] flex flex-col items-start space-y-6 sm:space-y-8"
        >
          {/* Eyebrow with gold hairline */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
            <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#F2D27A]">
              {t('eyebrow')}
            </span>
          </div>

          {/* Single H1 on Page */}
          <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            {t('h1Prefix')}{' '}
            <span className="text-gold-gradient block sm:inline">
              {t('h1Highlight')}
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base sm:text-lg text-[#EADFCB]/85 leading-relaxed max-w-xl">
            {t('subheading')}
          </p>

          {/* Fact Chips — STATIC HTML for instant accessibility & crawler indexing */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-md pt-2">
            <div className="bg-[#271910]/80 border border-[#7B4F2E]/40 rounded-lg p-3 text-center shadow-xs">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#F2D27A] block leading-none mb-1">
                {t('amenitiesCount')}
              </span>
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#EADFCB]/70 block">
                {t('amenitiesChip')}
              </span>
            </div>
            <div className="bg-[#271910]/80 border border-[#7B4F2E]/40 rounded-lg p-3 text-center shadow-xs">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#F2D27A] block leading-none mb-1">
                {t('floorsCount')}
              </span>
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#EADFCB]/70 block">
                {t('floorsChip')}
              </span>
            </div>
            <div className="bg-[#271910]/80 border border-[#7B4F2E]/40 rounded-lg p-3 text-center shadow-xs">
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#F2D27A] block leading-none mb-1">
                {t('distanceCount')}
              </span>
              <span className="text-[11px] font-sans uppercase tracking-wider text-[#EADFCB]/70 block">
                {t('distanceChip')}
              </span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href={waLeadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'hero_primary' })}
              className="px-7 py-3.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-sm tracking-wider uppercase shadow-lg hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 w-full sm:w-auto"
            >
              <MessageSquare size={18} className="fill-[#1E130C]" />
              <span>{t('ctaWhatsApp')}</span>
            </a>

            <Link
              href="/contact"
              onClick={() => pushDataLayerEvent('site_visit_request', { cta_location: 'hero_secondary' })}
              className="px-7 py-3.5 rounded-md border border-[#D9A21B] text-[#F2D27A] hover:bg-[#D9A21B] hover:text-[#1E130C] font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-300 text-center w-full sm:w-auto"
            >
              {t('ctaVisit')}
            </Link>
          </div>

          {/* 3D Virtual Sample Flat & Video Reels Shortcuts */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href="#3d-tour"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#271910]/90 border border-[#D9A21B]/40 text-xs font-sans font-bold uppercase tracking-wider text-[#F2D27A] hover:bg-[#D9A21B] hover:text-[#1E130C] transition-all duration-300 shadow-md group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Sample Flat 3D Tour &darr;</span>
            </a>
            <a
              href="#3d-videos"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#271910]/90 border border-[#D9A21B]/40 text-xs font-sans font-bold uppercase tracking-wider text-white hover:bg-[#D9A21B] hover:text-[#1E130C] transition-all duration-300 shadow-md group"
            >
              <Sparkles size={13} className="text-[#F2D27A]" />
              <span>Watch 3D Video Reels &darr;</span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 3D Tilt Card & Building Facade (55% desktop) */}
        <div className="w-full lg:w-[52%] relative flex items-center justify-center">
          <motion.div
            style={{
              y: buildingY,
              scale: buildingScale,
              rotateX: springY,
              rotateY: springX,
            }}
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#D9A21B]/30 shadow-2xl bg-[#271910] group"
          >
            {/* Main Hero Building Image */}
            <Image
              src="/hero-bg.jpg"
              alt="Advait Skyline G+14 Tower Architectural Landmark at Naroli–Bhilad"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Ambient Gold Light-Sweep Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1E130C]/70 via-transparent to-[#F2D27A]/15 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E130C] via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Artistic Rendering Watermark */}
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#1E130C]/80 backdrop-blur-sm border border-white/10 text-[10px] uppercase font-sans tracking-widest text-[#EADFCB]/80 pointer-events-none">
              Artistic Rendering
            </div>
          </motion.div>

          {/* THE 39+ AMENITIES ROTATING MEDALLION — Interactive Centrepiece */}
          <motion.button
            type="button"
            onClick={scrollToAmenities}
            style={{ rotate: badgeScrollRotate }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to 39+ Amenities Explorer"
            className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#F2D27A] via-[#D9A21B] to-[#A8680F] p-[2px] shadow-2xl cursor-pointer z-30 group"
          >
            <div className="w-full h-full rounded-full bg-[#1E130C] flex flex-col items-center justify-center p-2 text-center border border-[#F2D27A]/30">
              {/* Rotating Ring Label */}
              <div className="flex items-center gap-1 text-[#F2D27A] mb-0.5">
                <Sparkles size={13} className="text-[#F2D27A] animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <span className="font-display text-2xl sm:text-3xl font-bold text-white block leading-none">
                39+
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-[#F2D27A] font-bold block pt-0.5">
                Amenities
              </span>
              <span className="font-sans text-[8px] text-[#EADFCB]/70 tracking-tight block">
                Explore ↓
              </span>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Hero Bottom Bar: RERA ID Strip Pinned Left & Looping Scroll Cue Pinned Center */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pb-6 pt-4 flex items-center justify-between relative z-20 border-t border-[#7B4F2E]/20 text-xs text-[#EADFCB]/70">
        <div className="flex items-center gap-2">
          <ShieldCheck size={15} className="text-[#F2D27A]" />
          <span>
            Registered under <strong className="text-white">{t('reraBadge')}</strong>
          </span>
        </div>

        {/* Scroll Cue Animation */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-widest font-sans text-[#EADFCB]/60">
            Scroll to explore
          </span>
          <div className="w-5 h-8 rounded-full border border-[#D9A21B]/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#F2D27A]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
