'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, Filter } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '@/content/gallery';
import PlanLightbox from '@/components/ui/PlanLightbox';

const CATEGORY_CHIPS = [
  { id: 'all', label: 'All Photos & Renders' },
  { id: 'exterior', label: 'Exterior Tower' },
  { id: 'amenities', label: '39+ Amenities' },
  { id: 'commercial', label: 'Commercial Retail' },
  { id: 'floor-plans', label: 'Floor Plans' },
] as const;

export default function GalleryPageClient() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full bg-[#1E130C] text-[#EADFCB] min-h-screen">
      {/* Header */}
      <section className="pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#7B4F2E]/30 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
          <span className="w-8 h-[1.5px] bg-[#D9A21B]" />
          <span>Visual Architecture</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08]">
          Advait Skyline <span className="text-gold-gradient">Gallery</span>
        </h1>

        <p className="font-sans text-base sm:text-lg text-[#EADFCB]/85 max-w-2xl leading-relaxed">
          Explore architectural elevations, 3D isometric flat layouts, retail storefront perspectives, and resort amenity renderings.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          {CATEGORY_CHIPS.map((chip) => {
            const isActive = activeFilter === chip.id;
            return (
              <button
                key={chip.id}
                type="button"
                onClick={() => setActiveFilter(chip.id)}
                className={`px-5 py-2.5 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#7B4F2E] text-[#F2D27A] shadow-md border border-[#D9A21B]/40'
                    : 'bg-[#271910] text-[#EADFCB]/70 hover:text-white border border-[#7B4F2E]/30'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Masonry-Style Responsive Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#7B4F2E]/30 bg-[#271910] shadow-lg cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E130C]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {item.isRender && (
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#1E130C]/80 border border-white/10 text-[9px] uppercase font-sans tracking-widest text-[#EADFCB]/80 pointer-events-none">
                    Artistic Rendering
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-0.5">
                    <span className="font-sans text-xs uppercase tracking-widest text-[#F2D27A] font-bold block">
                      {item.category}
                    </span>
                    <h4 className="font-display text-lg font-bold leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#7B4F2E] flex items-center justify-center text-white shrink-0">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <PlanLightbox
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          imageSrc={selectedItem.src}
          specsSummary={selectedItem.isRender ? 'Artistic Rendering — For Representation Only' : undefined}
        />
      )}
    </div>
  );
}
