'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Check, MessageSquare, Maximize2, Wind, Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';
import PlanLightbox from '@/components/ui/PlanLightbox';
import { PROJECT_DATA, type UnitLayout } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

export default function ResidenceShowcase() {
  const t = useTranslations('residences');
  const [activeTab, setActiveTab] = useState<'1-bhk' | '2-bhk'>('1-bhk');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeUnit: UnitLayout =
    activeTab === '1-bhk' ? PROJECT_DATA.residential.oneBhk : PROJECT_DATA.residential.twoBhk;

  const waLeadUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: `Hello, I am interested in the ${activeUnit.title} (${activeUnit.builtUpAreaSqFt} sq. ft. built-up area) at Advait Skyline. Please share affordable pricing and booking details.`,
    sourceRef: `residences-toggle-${activeTab}`,
  });

  return (
    <section className="py-24 sm:py-32 bg-[#FBF8F2] text-[#2A1F18] relative overflow-hidden">
      <div className="absolute inset-0 bg-texture-cream opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Section Header & Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#7B4F2E]" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#7B4F2E]">
                {t('eyebrow')}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#1E130C] leading-[1.12]">
              {t('title')}
            </h2>
          </div>

          {/* Unit Toggle Tabs */}
          <div className="inline-flex p-1.5 rounded-xl bg-[#EADFCB]/60 border border-[#7B4F2E]/20 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('1-bhk')}
              className={`px-6 py-2.5 rounded-lg font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === '1-bhk'
                  ? 'bg-[#7B4F2E] text-white shadow-md'
                  : 'text-[#2A1F18]/70 hover:text-[#2A1F18]'
              }`}
            >
              {t('oneBhkTab')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('2-bhk')}
              className={`px-6 py-2.5 rounded-lg font-sans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === '2-bhk'
                  ? 'bg-[#7B4F2E] text-white shadow-md'
                  : 'text-[#2A1F18]/70 hover:text-[#2A1F18]'
              }`}
            >
              {t('twoBhkTab')}
            </button>
          </div>
        </div>

        {/* Dynamic Residence Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white border border-[#7B4F2E]/20 rounded-3xl p-6 sm:p-10 shadow-sm"
          >
            {/* Left: 3D Isometric Tilt Card */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#7B4F2E]/20 bg-[#1E130C] group shadow-lg">
                <Image
                  src={activeUnit.renderPath}
                  alt={`${activeUnit.title} Isometric 3D Render Layout`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute top-4 left-4 bg-[#1E130C]/85 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#D9A21B]/40 text-[#F2D27A] text-xs font-sans font-bold flex items-center gap-1.5">
                  <span>{activeUnit.builtUpAreaSqFt} Sq. Ft. Built-up</span>
                  <span className="text-[#EADFCB]/60 font-normal">({activeUnit.carpetAreaSqFt} Carpet)</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    pushDataLayerEvent('view_floor_plan', { configuration: activeTab, plan_name: activeUnit.title });
                    setLightboxOpen(true);
                  }}
                  className="absolute bottom-4 right-4 bg-[#7B4F2E] hover:bg-[#1E130C] text-white px-4 py-2 rounded-lg text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-colors"
                >
                  <Maximize2 size={14} />
                  <span>{t('viewPlan')}</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#2A1F18]/70 font-sans px-2">
                <span>Plaster-to-plaster carpet measurement</span>
                <span className="text-[#7B4F2E] font-semibold">{activeUnit.carpetAreaSqM} Sq. M.</span>
              </div>
            </div>

            {/* Right: Technical Room Dimensions & Highlights */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-sans uppercase tracking-widest text-[#7B4F2E] font-bold block mb-1">
                  Floor Layout Breakdown
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1E130C] mb-2">
                  {activeUnit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2A1F18]/80 font-sans leading-relaxed">
                  Carefully proportioned room dimensions maximizing ambient cross-breeze, natural morning sunlight, and complete privacy.
                </p>
              </div>

              {/* Room Dimensions Schedule */}
              <div className="grid grid-cols-2 gap-3 py-2">
                {activeUnit.rooms.map((room, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-[#7B4F2E]/15 bg-[#FBF8F2] flex flex-col"
                  >
                    <span className="text-[11px] font-sans uppercase font-bold text-[#7B4F2E] block">
                      {room.name}
                    </span>
                    <span className="font-display text-base font-bold text-[#1E130C] block mt-0.5">
                      {room.dimensions}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Features Bullet Grid */}
              <div className="space-y-2 pt-1 border-t border-[#7B4F2E]/15">
                <span className="text-[11px] font-sans uppercase font-bold tracking-wider text-[#2A1F18]/60 block mb-2">
                  Key Residence Specifications
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeUnit.keyFeatures.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-sans text-[#2A1F18]/85">
                      <Check size={14} className="text-[#D9A21B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#7B4F2E]/15">
                <a
                  href={waLeadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'residence_card', configuration: activeTab })}
                  className="px-6 py-3 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all flex items-center gap-2"
                >
                  <MessageSquare size={16} />
                  <span>{t('requestDetails')}</span>
                </a>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="px-6 py-3 rounded-md border border-[#7B4F2E] text-[#7B4F2E] hover:bg-[#7B4F2E] hover:text-white font-sans font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  {t('viewPlan')}
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Plan Lightbox Modal */}
      <PlanLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={activeUnit.title}
        imageSrc={activeUnit.plan2DPath}
        specsSummary={`Carpet Area: ${activeUnit.carpetAreaSqFt} Sq. Ft. (${activeUnit.carpetAreaSqM} Sq. M.) · ${activeUnit.bathrooms} Bathrooms · ${activeUnit.balconyWidth} Balcony`}
        type={activeTab}
      />
    </section>
  );
}
