'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, MessageSquare, Download, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BrochureDownloadButton } from '@/components/lead/BrochureDownloadModal';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

const PlanLightbox = dynamic(() => import('@/components/ui/PlanLightbox'), { ssr: false });

const FLOOR_PLAN_TABS = [
  { id: 'master', label: 'Aerial Master Plan', image: '/master-layout-aerial.jpg', carpet: 'G+14 & Amenity Grounds', desc: 'Bird’s-eye master layout showing the G+14 tower, swimming pool, society temple, celebration lawn, box cricket & parking.' },
  { id: '1bhk', label: '1 BHK Residence', image: '/1bhk-layout.jpg', carpet: '575 Sq. Ft. Built-up Area', desc: 'Spacious hall with foyer, bedroom, kitchen, 2 bathrooms, wash area & wide balcony (511 sq. ft. carpet area).' },
  { id: '2bhk', label: '2 BHK Residence', image: '/2bhk-layout.jpg', carpet: '652 Sq. Ft. Built-up Area', desc: 'Grand 16\' living hall, 2 bedrooms, kitchen, 2 bathrooms, wash area & 5\'6" sunset balcony (573 sq. ft. carpet area).' },
  { id: 'ground', label: 'Ground Floor (Shops 1–20)', image: '/commercial-bg.jpg', carpet: 'Main Road Frontage', desc: 'Shops 1 to 20 with 5\' wide customer otta, entrance foyer, fire staircase & meter room.' },
  { id: 'first', label: '1st Floor Commercial', image: '/commercial-bg.jpg', carpet: 'Retail Floor Plate', desc: 'Expansive commercial retail showroom level with dedicated customer circulation.' },
  { id: 'second', label: '2nd Floor Offices (1–6)', image: '/about-bg.jpg', carpet: 'Executive Suites', desc: 'Offices 1 to 6 with attached private balconies, lift access & peaceful business environment.' },
  { id: 'typical', label: 'Typical 4th–14th Floors', image: '/hero-day.jpg', carpet: 'Residential Cluster', desc: 'Standard residential cluster floor plan showing lift lobby, cross-ventilation & refuge zones.' },
] as const;

export default function FloorPlansSection() {
  const [activeTab, setActiveTab] = useState<string>('master');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activePlan = FLOOR_PLAN_TABS.find((p) => p.id === activeTab) || FLOOR_PLAN_TABS[0];

  const waLeadUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: `Hello, I am reviewing the ${activePlan.label} floor plan for Advait Skyline. Please share the high-resolution architectural layout and affordable pricing details.`,
    sourceRef: `floorplans-tab-${activePlan.id}`,
  });

  return (
    <section id="floor-plans" className="py-24 sm:py-32 bg-[#1E130C] text-[#EADFCB] relative overflow-hidden">
      <div className="absolute inset-0 bg-texture-espresso opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#7B4F2E]/30 pb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#F2D27A]">
                06 / Architectural Plans
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              Floor Plans & Technical Layouts
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#EADFCB]/80 max-w-2xl leading-relaxed">
              Explore residential 1 & 2 BHK configurations, ground-floor commercial shops, and upper-level office plates.
            </p>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[#7B4F2E]/20">
          {FLOOR_PLAN_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-3 rounded-lg font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors shrink-0 whitespace-nowrap ${isActive ? 'text-[#F2D27A]' : 'text-[#EADFCB]/70 hover:text-white'
                  }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activePlanUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gold-gradient rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Plan Card with Lightbox Trigger */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#271910] border border-[#7B4F2E]/40 rounded-3xl p-6 sm:p-10 shadow-xl"
          >
            {/* Left: Visual Layout Card */}
            <div className="lg:col-span-7 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#D9A21B]/30 bg-[#1E130C] group">
              <Image
                src={activePlan.image}
                alt={`${activePlan.label} Layout Plan`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute top-4 left-4 bg-[#1E130C]/85 px-3 py-1.5 rounded-md border border-[#D9A21B]/40 text-[#F2D27A] text-xs font-sans font-bold">
                {activePlan.carpet}
              </div>

              <button
                type="button"
                onClick={() => {
                  pushDataLayerEvent('view_floor_plan', { plan_name: activePlan.label });
                  setLightboxOpen(true);
                }}
                className="absolute bottom-4 right-4 bg-[#7B4F2E] hover:bg-[#D9A21B] hover:text-[#1E130C] text-white px-4 py-2.5 rounded-lg text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
              >
                <Maximize2 size={14} />
                <span>Open in Zoom Lightbox</span>
              </button>
            </div>

            {/* Right: Plan Specs & WhatsApp Inquiry */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#F2D27A] block">
                  Configuration Overview
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {activePlan.label}
                </h3>
                <p className="text-sm text-[#EADFCB]/85 font-sans leading-relaxed">
                  {activePlan.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#7B4F2E]/30 bg-[#1E130C] space-y-2 text-xs text-[#EADFCB]/75 font-sans leading-relaxed">
                <p>✓ Quality-controlled RCC structure per government building bylaws.</p>
                <p>✓ Complete electrical wiring, plumbing, and safety conduits pre-planned.</p>
                <p>✓ All measurements approximate; measured plaster-to-plaster.</p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={waLeadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'floor_plans_section', plan_name: activePlan.label })}
                  className="px-6 py-3 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 transition-all flex items-center gap-2"
                >
                  <MessageSquare size={16} />
                  <span>Get Details on WhatsApp</span>
                </a>

                <BrochureDownloadButton
                  variant="outline"
                  className="px-5 py-3"
                  defaultConfig={activeTab === '2bhk' ? '2bhk' : activeTab === 'ground' ? 'shop' : activeTab === 'second' ? 'office' : '1bhk'}
                >
                  Download Brochure (PDF)
                </BrochureDownloadButton>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="px-5 py-3 rounded-md border border-[#7B4F2E] text-[#EADFCB]/80 hover:text-white hover:border-[#D9A21B] font-sans font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  View Full Plan
                </button>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>

      <PlanLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={activePlan.label}
        imageSrc={activePlan.image}
        specsSummary={activePlan.carpet}
      />
    </section>
  );
}
