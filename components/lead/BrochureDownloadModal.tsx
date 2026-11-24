'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  AlertCircle,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { trackEvent, getStoredAttribution } from '@/lib/tracking';

const LOCAL_STORAGE_KEY = 'advait_brochure_unlocked_v1';

const BrochureFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(60),
  mobile: z
    .string()
    .trim()
    .transform((val) => val.replace(/\D/g, '').replace(/^91/, ''))
    .refine((val) => /^[6-9]\d{9}$/.test(val), {
      message: 'Enter a valid 10-digit Indian mobile number starting with 6-9',
    }),
  configuration: z.enum(['1bhk', '2bhk', 'shop', 'office', 'commercial', 'not_sure']),
  botField: z.string().max(0),
});

export type BrochureConfigType = '1bhk' | '2bhk' | 'shop' | 'office' | 'commercial' | 'not_sure';

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultConfig?: BrochureConfigType;
}

export function BrochureDownloadModal({
  isOpen,
  onClose,
  defaultConfig = '1bhk',
}: BrochureDownloadModalProps) {
  const t = useTranslations('brochureModal');

  // Form State
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [configuration, setConfiguration] = useState<BrochureConfigType>(defaultConfig);
  const [sendOnWhatsApp, setSendOnWhatsApp] = useState(true);
  const [botField, setBotField] = useState('');

  // UI Flow State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasPreviousUnlock, setHasPreviousUnlock] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; mobile?: string }>({});

  // Accessibility refs for focus trapping
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Sync defaultConfig
  useEffect(() => {
    if (defaultConfig) {
      setConfiguration(defaultConfig);
    }
  }, [defaultConfig]);

  // Check returning user in localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored === 'true') {
        setHasPreviousUnlock(true);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Focus trap & Esc handling
  useEffect(() => {
    if (isOpen) {
      previousActiveElementRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      // Focus modal container
      setTimeout(() => {
        const firstInput = modalRef.current?.querySelector('input, button') as HTMLElement;
        if (firstInput) firstInput.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        if (e.key === 'Tab' && modalRef.current) {
          const focusables = modalRef.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;
          const first = focusables[0] as HTMLElement;
          const last = focusables[focusables.length - 1] as HTMLElement;

          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
        if (previousActiveElementRef.current) {
          previousActiveElementRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  // Direct trigger download helper
  const triggerBrowserDownload = () => {
    const a = document.createElement('a');
    a.href = SITE_CONFIG.brochurePath;
    a.download = SITE_CONFIG.brochureDownloadName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    // Client Zod Validation
    const validation = BrochureFormSchema.safeParse({
      name,
      mobile,
      configuration,
      botField,
    });

    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;
      setFieldErrors({
        name: errors.name?.[0],
        mobile: errors.mobile?.[0],
      });
      return;
    }

    setIsSubmitting(true);
    trackEvent('brochure_download_request', {
      configuration,
      send_on_whatsapp: sendOnWhatsApp,
    });

    const cleanPhone = validation.data.mobile;

    try {
      const attribution = getStoredAttribution();
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          mobile: cleanPhone,
          configuration,
          source: 'brochure_modal',
          consentGiven: true,
          botField,
          page: typeof window !== 'undefined' ? window.location.pathname : '',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          attribution,
        }),
      });

      if (!res.ok) {
        // Fallback: Still allow download on network/API failure
        console.warn('Lead submission failed, providing fallback download.');
      }

      // Track lead generation
      trackEvent('generate_lead', {
        configuration,
        cta_location: 'brochure_download_modal',
      });

      // Save unlock in localStorage so returning visitors can re-download directly
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
        setHasPreviousUnlock(true);
      } catch {
        // Ignore localStorage error
      }

      setIsSuccess(true);
      triggerBrowserDownload();
    } catch (err: unknown) {
      console.error('Network error during brochure request:', err);
      // Fallback: trigger download regardless
      triggerBrowserDownload();
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInstantRedownload = () => {
    trackEvent('brochure_download_request', {
      configuration: 'returning_user',
      is_returning: true,
    });
    triggerBrowserDownload();
    onClose();
  };

  const waRedirectUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappClean}?text=${encodeURIComponent(
    `Hello Dhanasvi Infra, I just downloaded the official 25-page Advait Skyline brochure for ${configuration.toUpperCase()}.\nPlease share the current unit availability and details.`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brochure-modal-title"
        >
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#1E130C] border border-[#D9A21B]/40 rounded-3xl shadow-2xl text-[#EADFCB] overflow-hidden z-10 my-auto focus:outline-none"
            tabIndex={-1}
          >
            {/* Top Bar Accent */}
            <div className="h-1.5 w-full bg-gold-gradient" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label={t('closeBtn')}
              className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#271910] text-[#EADFCB]/70 hover:text-white hover:bg-[#7B4F2E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Returning User Fast-Path */}
              {hasPreviousUnlock && !isSuccess ? (
                <div className="text-center py-4 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      Welcome Back!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EADFCB]/85 font-sans max-w-sm mx-auto leading-relaxed">
                      You have already unlocked the official Advait Skyline 25-page brochure.
                    </p>
                  </div>
                  <div className="space-y-3 pt-2">
                    <button
                      type="button"
                      onClick={handleInstantRedownload}
                      className="w-full min-h-[48px] px-6 rounded-xl bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      <span>{t('downloadBtn')}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasPreviousUnlock(false)}
                      className="text-xs font-sans text-[#EADFCB]/60 hover:text-[#F2D27A] underline block mx-auto pt-1"
                    >
                      Need to update contact details? Click here.
                    </button>
                  </div>
                </div>
              ) : !isSuccess ? (
                <>
                  {/* Modal Header */}
                  <div className="space-y-2 pr-6">
                    <div className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
                      <FileText size={14} className="text-[#D9A21B]" />
                      <span>{t('eyebrow')}</span>
                    </div>
                    <h3 id="brochure-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {t('title')}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EADFCB]/80 font-sans leading-relaxed">
                      {t('subtitle')}
                    </p>
                  </div>

                  {/* Highlights Summary */}
                  <div className="grid grid-cols-3 gap-2 bg-[#271910] p-3 rounded-xl border border-[#7B4F2E]/30 text-center text-[11px] font-sans">
                    <div>
                      <span className="font-bold text-[#F2D27A] block">G+14 Floors</span>
                      <span className="text-[#EADFCB]/60 text-[10px]">3 Towers</span>
                    </div>
                    <div className="border-x border-[#7B4F2E]/30">
                      <span className="font-bold text-[#F2D27A] block">575 &amp; 652 sq ft</span>
                      <span className="text-[#EADFCB]/60 text-[10px]">Built-up Area</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#F2D27A] block">MAHA RERA</span>
                      <span className="text-[#EADFCB]/60 text-[10px]">PM3000002600013</span>
                    </div>
                  </div>

                  {/* Lead Capture Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot anti-spam */}
                    <input
                      type="text"
                      name="botField"
                      value={botField}
                      onChange={(e) => setBotField(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/50 text-rose-200 text-xs font-sans flex items-center gap-2">
                        <AlertCircle size={14} className="shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label htmlFor="modal-name" className="text-xs font-sans font-semibold text-white flex items-center gap-1.5">
                        <User size={13} className="text-[#D9A21B]" />
                        <span>{t('fullName')} *</span>
                      </label>
                      <input
                        id="modal-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (fieldErrors.name) setFieldErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder={t('namePlaceholder')}
                        className={`w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-[#271910] border text-white placeholder-[#EADFCB]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#D9A21B] transition-colors ${
                          fieldErrors.name ? 'border-rose-500' : 'border-[#7B4F2E]/50'
                        }`}
                      />
                      {fieldErrors.name && (
                        <span className="text-xs text-rose-400 font-sans block">{fieldErrors.name}</span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="modal-mobile" className="text-xs font-sans font-semibold text-white flex items-center gap-1.5">
                        <Phone size={13} className="text-[#D9A21B]" />
                        <span>{t('mobileNumber')} *</span>
                      </label>
                      <div className="flex items-center">
                        <span className="min-h-[44px] px-3.5 flex items-center bg-[#271910] border border-r-0 border-[#7B4F2E]/50 rounded-l-lg text-xs font-semibold text-[#F2D27A]">
                          +91
                        </span>
                        <input
                          id="modal-mobile"
                          type="tel"
                          required
                          maxLength={10}
                          value={mobile}
                          onChange={(e) => {
                            setMobile(e.target.value.replace(/\D/g, ''));
                            if (fieldErrors.mobile) setFieldErrors((prev) => ({ ...prev, mobile: undefined }));
                          }}
                          placeholder={t('phonePlaceholder')}
                          className={`w-full min-h-[44px] px-4 py-2.5 rounded-r-lg bg-[#271910] border text-white placeholder-[#EADFCB]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#D9A21B] transition-colors ${
                            fieldErrors.mobile ? 'border-rose-500' : 'border-[#7B4F2E]/50'
                          }`}
                        />
                      </div>
                      {fieldErrors.mobile && (
                        <span className="text-xs text-rose-400 font-sans block">{fieldErrors.mobile}</span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="modal-config" className="text-xs font-sans font-semibold text-white flex items-center gap-1.5">
                        <Building size={13} className="text-[#D9A21B]" />
                        <span>{t('configLabel')}</span>
                      </label>
                      <select
                        id="modal-config"
                        value={configuration}
                        onChange={(e) => setConfiguration(e.target.value as '1bhk' | '2bhk' | 'commercial' | 'not_sure')}
                        className="w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-[#271910] border border-[#7B4F2E]/50 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D9A21B] transition-colors cursor-pointer"
                      >
                        <option value="1bhk">{t('config1Bhk')}</option>
                        <option value="2bhk">{t('config2Bhk')}</option>
                        <option value="commercial">{t('configCommercial')}</option>
                        <option value="not_sure">{t('configNotSure')}</option>
                      </select>
                    </div>

                    <label className="flex items-start gap-2.5 pt-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={sendOnWhatsApp}
                        onChange={(e) => setSendOnWhatsApp(e.target.checked)}
                        className="mt-0.5 rounded border-[#7B4F2E] text-[#D9A21B] focus:ring-0 bg-[#271910] w-4 h-4 cursor-pointer"
                      />
                      <span className="text-xs text-[#EADFCB]/85 font-sans leading-tight">
                        {t('sendWhatsAppCheckbox')}
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
                    >
                      {isSubmitting ? (
                        <span>{t('preparing')}</span>
                      ) : (
                        <>
                          <Download size={16} />
                          <span>{t('downloadBtn')}</span>
                        </>
                      )}
                    </button>
                  </form>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#EADFCB]/60 font-sans pt-1">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>{t('privacyNotice')}</span>
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
                      {t('successTitle')}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EADFCB]/85 font-sans max-w-sm mx-auto leading-relaxed">
                      {t('successDesc')}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      type="button"
                      onClick={triggerBrowserDownload}
                      className="w-full min-h-[48px] py-3 px-6 rounded-xl bg-[#271910] border border-[#D9A21B]/60 hover:bg-[#7B4F2E] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#D9A21B]"
                    >
                      <Download size={15} className="text-[#F2D27A]" />
                      <span>{t('fallbackDownload')}</span>
                    </button>

                    <a
                      href={waRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('whatsapp_click', { cta_location: 'brochure_modal_success' })}
                      className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      <MessageSquare size={16} />
                      <span>{t('chatWhatsApp')}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="min-h-[44px] text-xs font-sans text-[#EADFCB]/60 hover:text-white underline pt-2 focus:outline-none"
                  >
                    {t('closeBtn')}
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
  defaultConfig?: BrochureConfigType;
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
          trackEvent('brochure_modal_open_click', { config: defaultConfig });
          setModalOpen(true);
        }}
        className={`min-h-[44px] inline-flex items-center gap-2 font-sans text-xs uppercase tracking-wider transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9A21B] ${variantStyle} ${className}`}
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
