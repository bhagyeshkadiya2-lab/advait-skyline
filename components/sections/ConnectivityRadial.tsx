'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Clock,
  Navigation,
  Building,
  GraduationCap,
  Activity,
  Milestone,
  Train,
  Trophy,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent } from '@/lib/tracking';

const ICON_BY_NAME: Record<string, React.ElementType> = {
  'Naroli–Bhilad Checkpost': MapPin,
  'Banks (SBI / BOB / HDFC)': Building,
  'Naroli High School': GraduationCap,
  'Primary Health Centre (PHC)': Activity,
  'Bhilad Railway Station': Train,
  'BAPS Shri Swaminarayan Mandir': Milestone,
  'Laxmi Vidyapeet Campus': BookOpen,
  'Silvassa Sports Stadium': Trophy,
  'Namo Medical Education & Research Institute': Activity,
  'Vapi Railway Station & Commercial Center': Train,
};

export default function ConnectivityRadial() {
  const t = useTranslations('location');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<string>(PROJECT_DATA.connectivity[0].name);

  const activePoint =
    PROJECT_DATA.connectivity.find((p) => p.name === selectedPoint) || PROJECT_DATA.connectivity[0];

  return (
    <section className="py-24 sm:py-32 bg-[#FBF8F2] text-[#2A1F18] relative overflow-hidden">
      <div className="absolute inset-0 bg-texture-cream opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#7B4F2E]/20 pb-10">
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
            <p className="font-sans text-sm sm:text-base text-[#2A1F18]/80 max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={PROJECT_DATA.contact.geoCoordinates.googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushDataLayerEvent('get_directions_click', { cta_location: 'location_header' })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#7B4F2E] text-white hover:bg-[#1E130C] font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Navigation size={14} className="text-[#F2D27A]" />
              <span>{t('directionsBtn')}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Two-Column Grid: Left Radial Connectivity Spokes | Right Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left: Connectivity Hub List & Key Landmark Spokes (55%) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-sans uppercase font-bold tracking-widest text-[#7B4F2E] block">
                {t('transitTableTitle')}
              </span>
              <p className="text-xs text-[#2A1F18]/65 font-sans">
                approx. travel time; actual time depends on traffic. Verified from brochure &amp; maps. Last updated: November 2026.
              </p>
            </div>

            {/* Landmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2">
              {PROJECT_DATA.connectivity.map((item) => {
                const isSelected = selectedPoint === item.name;
                const IconComp = ICON_BY_NAME[item.name] || MapPin;

                return (
                  <div
                    key={item.name}
                    onClick={() => setSelectedPoint(item.name)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-[#7B4F2E] shadow-md ring-1 ring-[#7B4F2E]/30'
                        : 'bg-white/70 border-[#7B4F2E]/15 hover:border-[#7B4F2E]/50 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <IconComp size={16} className={isSelected ? 'text-[#7B4F2E]' : 'text-[#D9A21B]'} />
                        <h4 className="font-sans text-xs sm:text-sm font-bold text-[#1E130C] truncate max-w-[170px]">
                          {item.name}
                        </h4>
                      </div>
                      <span className="font-display text-xs font-bold text-[#7B4F2E] bg-[#EADFCB]/60 px-2 py-0.5 rounded shrink-0">
                        {item.distance}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#2A1F18]/70 font-sans pt-1 border-t border-[#7B4F2E]/10">
                      <span className="flex items-center gap-1 text-[#7B4F2E] font-semibold">
                        <Clock size={12} />
                        approx. {item.time}
                      </span>
                      <span className="text-[10px] uppercase tracking-wide text-[#2A1F18]/50">
                        {item.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Landmark Detail Card */}
            <div className="p-4 rounded-xl border border-[#D9A21B]/40 bg-[#1E130C] text-[#EADFCB] flex items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#F2D27A] font-bold block">
                  Selected Connectivity Landmark
                </span>
                <span className="font-display text-lg font-bold text-white block">
                  {activePoint.name}
                </span>
                <p className="text-xs text-[#EADFCB]/75 font-sans">
                  {activePoint.approxNote}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-display text-2xl font-bold text-[#F2D27A] block leading-none">
                  {activePoint.time}
                </span>
                <span className="text-xs font-sans text-white/80 font-medium">
                  {activePoint.distance}
                </span>
              </div>
            </div>

          </div>

          {/* Right: Click-to-Load Google Maps Embed (Performance First) (45%) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-[#7B4F2E]/25 shadow-lg bg-[#271910] flex items-center justify-center">
              {mapLoaded ? (
                <iframe
                  title="Advait Skyline Location Map"
                  src={PROJECT_DATA.contact.geoCoordinates.embedIframeUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              ) : (
                <div className="text-center p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#7B4F2E]/40 border border-[#D9A21B]/40 flex items-center justify-center mx-auto text-[#F2D27A]">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-xl font-bold text-white">
                      Advait Skyline Location
                    </h4>
                    <p className="text-xs text-[#EADFCB]/75 font-sans max-w-xs mx-auto">
                      Naroli–Bhilad Checkpost, Vadfaliya, Dadra & Nagar Haveli – 396235
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      pushDataLayerEvent('map_load_click');
                      setMapLoaded(true);
                    }}
                    className="px-6 py-2.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105 transition-all"
                  >
                    Click to Load Live Map
                  </button>
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#2A1F18]/70 font-sans px-1">
              <span>Coordinates: 20.2798943° N, 72.920547° E</span>
              <a
                href={PROJECT_DATA.contact.geoCoordinates.googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7B4F2E] font-bold hover:underline"
              >
                Open in Google Maps App →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
