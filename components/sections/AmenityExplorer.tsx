'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Waves,
  Dumbbell,
  Trophy,
  Target,
  Footprints,
  HeartPulse,
  Gamepad2,
  Building,
  Film,
  BookOpen,
  Sparkles,
  Flame,
  Smile,
  Baby,
  Armchair,
  Trees,
  Flower2,
  Music,
  ShieldAlert,
  Zap,
  Recycle,
  BatteryCharging,
  ArrowUpDown,
  Activity,
  ShieldCheck,
  PhoneCall,
  CloudRain,
  Sun,
  FlameKindling,
  Tent,
  Droplets,
  Briefcase,
  Car,
  Bike,
  Coffee,
  Trash2,
  Shield,
  Milestone,
  Wifi,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { PROJECT_DATA, type Amenity } from '@/lib/project-data';
import { pushDataLayerEvent } from '@/lib/tracking';

const ICON_MAP: Record<string, React.ElementType> = {
  Waves,
  Dumbbell,
  Trophy,
  Target,
  Footprints,
  HeartPulse,
  Gamepad2,
  Building,
  Film,
  BookOpen,
  Sparkles,
  Flame,
  Smile,
  Baby,
  Armchair,
  Trees,
  Flower2,
  Music,
  ShieldAlert,
  Zap,
  Recycle,
  BatteryCharging,
  ArrowUpDown,
  Activity,
  ShieldCheck,
  PhoneCall,
  CloudRain,
  Sun,
  FlameKindling,
  Tent,
  Droplets,
  Briefcase,
  Car,
  Bike,
  Coffee,
  Trash2,
  Shield,
  Milestone,
  Wifi,
};

const CATEGORIES = [
  { id: 'sports-fitness', labelKey: 'sportsTab', photo: '/pool-bg.jpg', caption: 'Resort Swimming Pool & Dual Male/Female Gyms' },
  { id: 'leisure-social', labelKey: 'leisureTab', photo: '/clubhouse-bg.jpg', caption: 'Clubhouse, Private AC Cinema & Community Lounge' },
  { id: 'kids-family', labelKey: 'kidsTab', photo: '/gym-bg.jpg', caption: 'Playgrounds, Toddler Soft Play & Senior Gazebos' },
  { id: 'wellness-nature', labelKey: 'wellnessTab', photo: '/about-bg.jpg', caption: 'Landscaped Botanical Gardens, Yoga Deck & Audio' },
  { id: 'safety-utilities', labelKey: 'safetyTab', photo: '/hero-bg.jpg', caption: '24×7 CCTV, DG Power Backup & Sewage Treatment' },
] as const;

export default function AmenityExplorer() {
  const t = useTranslations('amenitiesSection');
  const [activeCategory, setActiveCategory] = useState<string>('sports-fitness');
  const [selectedAmenityId, setSelectedAmenityId] = useState<string>('swimming-pool');

  const filteredAmenities = PROJECT_DATA.amenities.filter(
    (a) => a.category === activeCategory
  );

  const currentCategoryData = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];
  const activeAmenity = PROJECT_DATA.amenities.find((a) => a.id === selectedAmenityId) || filteredAmenities[0];

  const handleCategorySwitch = (catId: string) => {
    setActiveCategory(catId);
    const firstInCat = PROJECT_DATA.amenities.find((a) => a.category === catId);
    if (firstInCat) setSelectedAmenityId(firstInCat.id);
  };

  return (
    <section
      id="amenities-section"
      className="py-24 sm:py-32 bg-[#1E130C] text-[#EADFCB] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-texture-espresso opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#7B4F2E]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Section Header with 39+ Medallion Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#7B4F2E]/30 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#F2D27A]">
                {t('eyebrow')}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              {t('title')}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#EADFCB]/80 max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-5 py-2.5 rounded-full border border-[#D9A21B]/40 bg-[#7B4F2E]/20 text-[#F2D27A] font-sans text-xs uppercase font-bold tracking-widest flex items-center gap-2">
              <Sparkles size={14} className="text-[#F2D27A]" />
              <span>{t('badgeTitle')}</span>
            </div>
          </div>
        </div>

        {/* Category Tabs with Animated Sliding Gold Underline */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[#7B4F2E]/20">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySwitch(cat.id)}
                className={`relative px-5 py-3 rounded-lg font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors shrink-0 whitespace-nowrap ${
                  isActive ? 'text-[#F2D27A]' : 'text-[#EADFCB]/70 hover:text-white'
                }`}
              >
                <span>{t(cat.labelKey)}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gold-gradient rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Two-Column Explorer: Left Interactive Amenity List | Right Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Vertical Interactive List */}
          <div className="lg:col-span-6 flex flex-col space-y-2.5 max-h-[580px] overflow-y-auto pr-2">
            {filteredAmenities.map((amenity, idx) => {
              const isSelected = selectedAmenityId === amenity.id;
              const IconComp = ICON_MAP[amenity.iconName] || Sparkles;

              return (
                <div
                  key={amenity.id}
                  onClick={() => setSelectedAmenityId(amenity.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-[#271910] border-[#D9A21B] shadow-md'
                      : 'bg-[#1E130C]/60 border-[#7B4F2E]/30 hover:border-[#7B4F2E] hover:bg-[#271910]/40'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#D9A21B] text-[#1E130C]'
                        : 'bg-[#271910] text-[#F2D27A] border border-[#7B4F2E]/30'
                    }`}
                  >
                    <IconComp size={18} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-sans text-sm sm:text-base font-bold text-white truncate">
                        {amenity.name}
                      </h4>
                      {amenity.confirmedInBrochure && (
                        <span className="text-[10px] font-sans uppercase font-bold tracking-wider text-[#F2D27A] bg-[#7B4F2E]/30 px-2 py-0.5 rounded border border-[#D9A21B]/30 shrink-0">
                          Brochure Confirmed
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#EADFCB]/80 font-sans line-clamp-2 mt-1">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Feature Showcase with 3D Card Cross-Fade */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#D9A21B]/30 shadow-2xl bg-[#271910] group"
              >
                <Image
                  src={currentCategoryData.photo}
                  alt={currentCategoryData.caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E130C] via-[#1E130C]/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="text-xs font-sans uppercase tracking-widest text-[#F2D27A] font-bold block">
                    Featured Lifestyle Zone
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {activeAmenity ? activeAmenity.name : currentCategoryData.caption}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EADFCB]/90 font-sans leading-relaxed">
                    {activeAmenity ? activeAmenity.description : currentCategoryData.caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Amenity Index Counter Bar */}
            <div className="mt-6 p-4 rounded-xl border border-[#7B4F2E]/30 bg-[#271910]/50 flex items-center justify-between text-xs text-[#EADFCB]/80 font-sans">
              <span>
                Showing <strong className="text-white">{filteredAmenities.length}</strong> amenities in this category
              </span>
              <span className="text-[#F2D27A] font-bold">
                Total Collection: 39+
              </span>
            </div>
          </div>
        </div>

        {/* Pinned Horizontal Gallery: Card Carousel (01 to 39) */}
        <div className="pt-8 border-t border-[#7B4F2E]/30 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#F2D27A]">
              Full 39+ Numbered Directory
            </span>
            <span className="text-xs text-[#EADFCB]/60 font-sans">
              Scroll horizontally →
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#7B4F2E] scrollbar-track-[#1E130C]">
            {PROJECT_DATA.amenities.map((item, idx) => {
              const numStr = (idx + 1).toString().padStart(2, '0');
              const IconComp = ICON_MAP[item.iconName] || Sparkles;

              return (
                <div
                  key={item.id}
                  className="min-w-[240px] sm:min-w-[280px] p-5 rounded-xl border border-[#7B4F2E]/30 bg-[#271910]/70 flex flex-col justify-between shrink-0 space-y-4 hover:border-[#D9A21B]/60 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-[#F2D27A]">
                      {numStr}
                    </span>
                    <IconComp size={18} className="text-[#D9A21B]" />
                  </div>

                  <div>
                    <h5 className="font-sans text-sm font-bold text-white mb-1">
                      {item.name}
                    </h5>
                    <p className="text-xs text-[#EADFCB]/70 font-sans line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
