'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  FileText,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Building,
  Phone,
  User,
  ArrowRight,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { PROJECT_DATA } from '@/lib/project-data';
import { pushDataLayerEvent, getStoredAttribution } from '@/lib/tracking';

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultConfig?: '1bhk' | '2bhk' | 'shop' | 'office';
}

export function BrochureDownloadModal({
  isOpen,
  onClose,
  defaultConfig = '1bhk',
}: BrochureDownloadModalProps) {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [configuration, setConfiguration] = useState<'1bhk' | '2bhk' | 'shop' | 'office'>(defaultConfig);
  const [sendOnWhatsApp, setSendOnWhatsApp] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync config when prop changes
  useEffect(() => {
    if (defaultConfig) {
      setConfiguration(defaultConfig);
    }
  }, [defaultConfig]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number (starting with 6-9).');
      return;
    }

    setIsSubmitting(true);
    pushDataLayerEvent('brochure_download_request', {
      configuration,
      send_on_whatsapp: sendOnWhatsApp,
    });

    try {
      const attribution = getStoredAttribution();
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          mobileNumber: cleanPhone,
          configuration,
          consentGiven: true,
          botField: '',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          attribution,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to process request');
      }

      pushDataLayerEvent('generate_lead', {
        configuration,
        cta_location: 'brochure_download_modal',
      });

      setIsSuccess(true);

      // Trigger automatic direct browser PDF download
      const link = document.createElement('a');
      link.href = '/advait-skyline-official-brochure.pdf';
      link.download = 'Advait-Skyline-Official-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please download via WhatsApp.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const waRedirectUrl = `https://wa.me/${PROJECT_DATA.contact.whatsappLeadNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hello Dhanasvi Infra, I just requested the official Advait Skyline brochure for ${configuration.toUpperCase()}. Please send the PDF and price breakdown.`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#1E130C] border border-[#D9A21B]/40 rounded-3xl shadow-2xl text-[#EADFCB] overflow-hidden z-10 my-auto"
          >
            {/* Top Bar Accent */}
            <div className="h-1.5 w-full bg-gold-gradient" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-[#271910] text-[#EADFCB]/70 hover:text-white hover:bg-[#7B4F2E] transition-colors"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              {!isSuccess ? (
                <>
                  {/* Modal Header */}
                  <div className="space-y-2 pr-6">
                    <div className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
                      <FileText size={14} className="text-[#D9A21B]" />
                      <span>Official Project Kit · 25 Pages</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                      Download Official Brochure &amp; Floor Plans
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EADFCB]/80 font-sans leading-relaxed">
                      Instant access to full architectural layouts, 1 &amp; 2 BHK room dimensions, 39+ amenities catalogue, and brand specifications.
                    </p>
                  </div>

                  {/* Highlights Pill */}
                  <div className="grid grid-cols-3 gap-2 bg-[#271910] p-3 rounded-xl border border-[#7B4F2E]/30 text-center text-[11px] font-sans">
                    <div>
                      <span className="font-bold text-[#F2D27A] block">G+14 Floors</span>
                      <span className="text-[#EADFCB]/60 text-[10px]">3 Towers</span>
                    </div>
                    <div className="border-x border-[#7B4F2E]/30">
                      <span className="font-bold text-[#F2D27A] block">511 &amp; 573 sq ft</span>
                      <span className="text-[#EADFCB]/60 text-[10px]">Carpet Area</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#F2D27A] block">MAHA RERA</span>
                      <span className="text-[#EADFCB]/60 text-[10px]">Approved</span>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/50 text-rose-200 text-xs font-sans">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label htmlFor="brochure-name" className="text-xs font-sans font-semibold text-white flex items-center gap-1.5">
                        <User size={13} className="text-[#D9A21B]" />
                        <span>Full Name</span>
                      </label>
                      <input
                        id="brochure-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#271910] border border-[#7B4F2E]/50 text-white placeholder-[#EADFCB]/40 text-sm focus:outline-none focus:border-[#D9A21B] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="brochure-phone" className="text-xs font-sans font-semibold text-white flex items-center gap-1.5">
                        <Phone size={13} className="text-[#D9A21B]" />
                        <span>Mobile / WhatsApp Number</span>
                      </label>
                      <div className="flex items-center">
                        <span className="px-3 py-2.5 bg-[#271910] border border-r-0 border-[#7B4F2E]/50 rounded-l-lg text-xs font-semibold text-[#F2D27A]">
                          +91
                        </span>
                        <input
                          id="brochure-phone"
                          type="tel"
                          required
                          maxLength={10}
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="98765 43210"
                          className="w-full px-4 py-2.5 rounded-r-lg bg-[#271910] border border-[#7B4F2E]/50 text-white placeholder-[#EADFCB]/40 text-sm focus:outline-none focus:border-[#D9A21B] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="brochure-config" className="text-xs font-sans font-semibold text-white flex items-center gap-1.5">
                        <Building size={13} className="text-[#D9A21B]" />
                        <span>Interested Configuration</span>
                      </label>
                      <select
                        id="brochure-config"
                        value={configuration}
                        onChange={(e) => setConfiguration(e.target.value as '1bhk' | '2bhk' | 'shop' | 'office')}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#271910] border border-[#7B4F2E]/50 text-white text-sm focus:outline-none focus:border-[#D9A21B] transition-colors cursor-pointer"
                      >
                        <option value="1bhk">1 BHK Residence (511 Sq. Ft. Carpet)</option>
                        <option value="2bhk">2 BHK Residence (573 Sq. Ft. Carpet)</option>
                        <option value="shop">Ground Floor Retail Shop (1–20)</option>
                        <option value="office">2nd Floor Commercial Office (1–6)</option>
                      </select>
                    </div>

                    <label className="flex items-start gap-2 pt-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sendOnWhatsApp}
                        onChange={(e) => setSendOnWhatsApp(e.target.checked)}
                        className="mt-0.5 rounded border-[#7B4F2E] text-[#D9A21B] focus:ring-0 bg-[#271910]"
                      />
                      <span className="text-xs text-[#EADFCB]/85 font-sans leading-tight">
                        Also send a copy of the brochure and current price sheet directly to my WhatsApp
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Preparing Download...</span>
                      ) : (
                        <>
                          <Download size={16} />
                          <span>Download Official Brochure PDF</span>
                        </>
                      )}
                    </button>
                  </form>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#EADFCB]/60 font-sans pt-1">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>Your contact details are strictly confidential. No spam guaranteed.</span>
                  </div>
                </>
              ) : (
                /* Success State */
                <div className="py-4 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 size={36} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      Brochure Download Started!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EADFCB]/85 font-sans max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{fullName}</strong>! Your official Advait Skyline brochure PDF is downloading automatically.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a
                      href="/advait-skyline-official-brochure.pdf"
                      download="Advait-Skyline-Official-Brochure.pdf"
                      onClick={() => pushDataLayerEvent('brochure_direct_download_click')}
                      className="w-full py-3 px-6 rounded-xl bg-[#271910] border border-[#D9A21B]/60 hover:bg-[#7B4F2E] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={15} className="text-[#F2D27A]" />
                      <span>Click Here If Download Did Not Start</span>
                    </a>

                    <a
                      href={waRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'brochure_modal_success' })}
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp for Pricing &amp; Offers</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="text-xs font-sans text-[#EADFCB]/60 hover:text-white underline pt-2"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function BrochureDownloadButton({
  className = '',
  variant = 'primary',
  defaultConfig = '1bhk',
  children,
}: {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'pill';
  defaultConfig?: '1bhk' | '2bhk' | 'shop' | 'office';
  children?: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);

  let variantStyle = 'bg-gold-gradient text-[#1E130C] font-bold shadow-md hover:brightness-105';
  if (variant === 'secondary') {
    variantStyle = 'bg-[#271910] text-[#F2D27A] border border-[#D9A21B]/40 hover:bg-[#7B4F2E]';
  } else if (variant === 'outline') {
    variantStyle = 'border border-[#D9A21B] text-[#F2D27A] hover:bg-[#D9A21B] hover:text-[#1E130C]';
  } else if (variant === 'pill') {
    variantStyle = 'bg-[#271910]/90 border border-[#D9A21B]/50 text-[#F2D27A] hover:bg-[#D9A21B] hover:text-[#1E130C] text-xs py-1.5 px-3.5 rounded-full';
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          pushDataLayerEvent('brochure_modal_open_click', { config: defaultConfig });
          setModalOpen(true);
        }}
        className={`inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider transition-all duration-300 rounded-lg ${variantStyle} ${className}`}
      >
        <Download size={14} />
        <span>{children || 'Download Official Brochure'}</span>
      </button>

      <BrochureDownloadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultConfig={defaultConfig}
      />
    </>
  );
}
