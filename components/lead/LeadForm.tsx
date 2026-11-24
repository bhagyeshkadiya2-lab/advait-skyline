'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, MessageSquare, AlertCircle, Calendar, Phone, User, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { pushDataLayerEvent, getStoredAttribution } from '@/lib/tracking';

const LeadSchema = z.object({
  fullName: z.string().trim().min(2, 'Name must be at least 2 characters').max(60),
  mobileNumber: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number starting with 6-9'),
  configuration: z.enum(['1bhk', '2bhk', 'shop', 'office']),
  preferredDate: z.string().optional(),
  consentGiven: z.boolean().refine((val) => val === true, 'You must agree to continue'),
  botField: z.string().max(0),
});

type LeadFormData = z.infer<typeof LeadSchema>;

export default function LeadForm({ defaultInterest = '1bhk' }: { defaultInterest?: '1bhk' | '2bhk' | 'shop' | 'office' }) {
  const t = useTranslations('lead');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(LeadSchema),
    defaultValues: {
      configuration: defaultInterest,
      consentGiven: true,
      botField: '',
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    pushDataLayerEvent('form_start', { configuration: data.configuration });

    try {
      const attribution = getStoredAttribution();
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          attribution,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || 'Failed to submit enquiry');
      }

      setSubmitSuccess(true);
      setWhatsappUrl(resData.whatsappUrl);

      // Track conversion
      pushDataLayerEvent('generate_lead', {
        configuration: data.configuration,
        cta_location: 'lead_form',
      });
      if (data.preferredDate) {
        pushDataLayerEvent('site_visit_request', {
          configuration: data.configuration,
          preferred_date: data.preferredDate,
        });
      }

      reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please chat on WhatsApp.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-[#271910] border border-[#D9A21B]/40 rounded-2xl p-6 sm:p-8 text-center space-y-5 shadow-xl">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 size={32} />
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-bold text-white">
            {t('successTitle')}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#EADFCB]/85 max-w-md mx-auto leading-relaxed">
            {t('successMessage')}
          </p>
        </div>

        {whatsappUrl && (
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushDataLayerEvent('whatsapp_click', { cta_location: 'lead_form_success' })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold uppercase tracking-wider shadow-lg transition-colors"
            >
              <MessageSquare size={16} />
              <span>{t('chatNow')}</span>
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#271910] border border-[#7B4F2E]/40 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl"
    >
      <div className="space-y-1">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
          {t('title')}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#EADFCB]/80 leading-relaxed">
          {t('subtitle')}
        </p>
      </div>

      {errorMessage && (
        <div className="p-3 rounded-lg bg-red-900/30 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
          <AlertCircle size={15} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot hidden input */}
      <input type="text" {...register('botField')} className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Full Name */}
      <div className="space-y-1.5">
        <label className="text-xs font-sans uppercase tracking-wider text-[#EADFCB]/80 font-semibold flex items-center gap-1.5">
          <User size={13} className="text-[#D9A21B]" />
          <span>{t('nameLabel')} *</span>
        </label>
        <input
          type="text"
          placeholder={t('namePlaceholder')}
          {...register('fullName')}
          className="w-full px-4 py-3 rounded-lg bg-[#1E130C] border border-[#7B4F2E]/50 text-white font-sans text-xs sm:text-sm placeholder-[#EADFCB]/40 focus:border-[#D9A21B] focus:outline-none transition-colors"
        />
        {errors.fullName && (
          <span className="text-[11px] text-red-400 block pt-0.5">{errors.fullName.message}</span>
        )}
      </div>

      {/* Mobile Number */}
      <div className="space-y-1.5">
        <label className="text-xs font-sans uppercase tracking-wider text-[#EADFCB]/80 font-semibold flex items-center gap-1.5">
          <Phone size={13} className="text-[#D9A21B]" />
          <span>{t('phoneLabel')} (10 digits) *</span>
        </label>
        <div className="flex items-center">
          <span className="px-3 py-3 rounded-l-lg bg-[#1E130C]/80 border-y border-l border-[#7B4F2E]/50 text-xs sm:text-sm font-sans font-bold text-[#F2D27A]">
            +91
          </span>
          <input
            type="tel"
            maxLength={10}
            placeholder={t('phonePlaceholder')}
            {...register('mobileNumber')}
            className="w-full px-4 py-3 rounded-r-lg bg-[#1E130C] border border-[#7B4F2E]/50 text-white font-sans text-xs sm:text-sm placeholder-[#EADFCB]/40 focus:border-[#D9A21B] focus:outline-none transition-colors"
          />
        </div>
        {errors.mobileNumber && (
          <span className="text-[11px] text-red-400 block pt-0.5">{errors.mobileNumber.message}</span>
        )}
      </div>

      {/* Interested Configuration */}
      <div className="space-y-1.5">
        <label className="text-xs font-sans uppercase tracking-wider text-[#EADFCB]/80 font-semibold block">
          {t('interestLabel')} *
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { val: '1bhk', label: t('interest1Bhk') },
            { val: '2bhk', label: t('interest2Bhk') },
            { val: 'shop', label: t('interestShop') },
            { val: 'office', label: t('interestOffice') },
          ].map((opt) => (
            <label
              key={opt.val}
              className="flex items-center gap-2 p-2.5 rounded-lg border border-[#7B4F2E]/40 bg-[#1E130C]/60 text-xs font-sans text-[#EADFCB] cursor-pointer hover:border-[#D9A21B]/60 transition-colors"
            >
              <input
                type="radio"
                value={opt.val}
                {...register('configuration')}
                className="accent-[#D9A21B]"
              />
              <span className="truncate">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferred Visit Date */}
      <div className="space-y-1.5">
        <label className="text-xs font-sans uppercase tracking-wider text-[#EADFCB]/80 font-semibold flex items-center gap-1.5">
          <Calendar size={13} className="text-[#D9A21B]" />
          <span>{t('dateLabel')}</span>
        </label>
        <input
          type="date"
          {...register('preferredDate')}
          className="w-full px-4 py-2.5 rounded-lg bg-[#1E130C] border border-[#7B4F2E]/50 text-white font-sans text-xs sm:text-sm focus:border-[#D9A21B] focus:outline-none transition-colors"
        />
      </div>

      {/* Consent Checkbox linked to Privacy Policy */}
      <div className="space-y-1 pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-[#EADFCB]/75 leading-relaxed font-sans">
          <input
            type="checkbox"
            {...register('consentGiven')}
            className="accent-[#D9A21B] mt-0.5 shrink-0"
          />
          <span>
            I agree to the{' '}
            <Link href="/privacy-policy" className="text-[#F2D27A] underline hover:text-white">
              Privacy Policy
            </Link>{' '}
            and authorize Dhanasvi Infra to contact me via Call, SMS & WhatsApp.
          </span>
        </label>
        {errors.consentGiven && (
          <span className="text-[11px] text-red-400 block">{errors.consentGiven.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <span>{isSubmitting ? t('submitting') : t('submitBtn')}</span>
        </button>
      </div>
    </form>
  );
}
