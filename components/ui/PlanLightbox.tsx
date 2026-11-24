'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, MessageSquare, Download } from 'lucide-react';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';

export interface PlanLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc: string;
  specsSummary?: string;
  type?: '1-bhk' | '2-bhk' | 'commercial';
}

export default function PlanLightbox({
  isOpen,
  onClose,
  title,
  imageSrc,
  specsSummary,
  type = '1-bhk',
}: PlanLightboxProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const waLink = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: `Hello, I am reviewing the ${title} floor plan at Advait Skyline. Please share the detailed brochure and official quote.`,
    sourceRef: `lightbox-${type}`,
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} Floor Plan Preview`}
      className="fixed inset-0 z-50 bg-[#1E130C]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-4xl bg-[#271910] border border-[#D9A21B]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#7B4F2E]/40 flex items-center justify-between bg-[#1E130C]">
          <div>
            <h3 className="font-display text-lg sm:text-2xl font-bold text-white">
              {title}
            </h3>
            {specsSummary && (
              <span className="font-sans text-xs text-[#F2D27A] font-medium block">
                {specsSummary}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2 rounded-lg bg-[#271910] text-[#EADFCB] hover:text-white border border-[#7B4F2E]/40 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Display Area */}
        <div className="relative flex-1 min-h-[350px] sm:min-h-[480px] bg-[#1E130C]/60 flex items-center justify-center p-4 overflow-auto">
          <div className="relative w-full h-full min-h-[320px] sm:min-h-[440px]">
            <Image
              src={imageSrc}
              alt={`${title} Technical Plan Layout`}
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-3 left-4 text-[10px] uppercase font-sans tracking-widest text-[#EADFCB]/60 bg-[#1E130C]/80 px-2 py-1 rounded border border-white/5 pointer-events-none">
            Artistic Rendering — For Guidance Only
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#7B4F2E]/40 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#1E130C]">
          <p className="text-xs text-[#EADFCB]/70 font-sans text-center sm:text-left">
            Measurements are approximate and subject to RERA approvals.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'plan_lightbox', plan_name: title })}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-105 flex items-center justify-center gap-2"
            >
              <MessageSquare size={15} />
              <span>Get Price on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-md border border-[#7B4F2E]/50 text-[#EADFCB] hover:text-white font-sans text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
