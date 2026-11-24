'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Calculator, MessageSquare, ShieldCheck, IndianRupee, Clock, Percent, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { trackEvent, getStoredAttribution } from '@/lib/tracking';

const PRESETS = [
  { id: '15l', labelKey: 'preset1Bhk', amount: 1500000 },
  { id: '25l', labelKey: 'preset2Bhk', amount: 2500000 },
  { id: '35l', labelKey: 'presetCommercial', amount: 3500000 },
] as const;

export default function EmiCalculator() {
  const t = useTranslations('emi');

  // Interactive Inputs (Defaulting to ₹25L illustrative loan, 8.5%, 20 yrs)
  const [loanAmount, setLoanAmount] = useState<number>(2500000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [activePreset, setActivePreset] = useState<string>('25l');

  // Debounced tracking timer ref
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Currency formatter
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  // Precise mathematical EMI formula with r=0 edge case
  const { monthlyEmi, totalInterest, totalPayment, principalPercent, interestPercent } = useMemo(() => {
    const P = loanAmount;
    const n = tenureYears * 12;
    const r = interestRate / 12 / 100;

    let emi = 0;
    if (r === 0 || interestRate === 0) {
      emi = n > 0 ? P / n : 0;
    } else {
      const compound = Math.pow(1 + r, n);
      emi = (P * r * compound) / (compound - 1);
    }

    const totalPay = emi * n;
    const totalInt = Math.max(0, totalPay - P);
    const pPct = totalPay > 0 ? Math.round((P / totalPay) * 100) : 100;
    const iPct = 100 - pPct;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInt),
      totalPayment: Math.round(totalPay),
      principalPercent: pPct,
      interestPercent: iPct,
    };
  }, [loanAmount, interestRate, tenureYears]);

  // Debounce emi_calculated event (~1.5s after user stops adjusting)
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      trackEvent('emi_calculated', {
        loan_amount: loanAmount,
        rate: interestRate,
        tenure: tenureYears,
        emi: monthlyEmi,
        preset: activePreset,
      });
    }, 1500);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [loanAmount, interestRate, tenureYears, monthlyEmi, activePreset]);

  // Build WhatsApp Eligibility Deep Link
  const waEligibilityUrl = useMemo(() => {
    const attr = getStoredAttribution();
    const sourceTag = attr.utm_source ? ` (via ${attr.utm_source})` : '';

    const msg = `Hello Dhanasvi Infra, I calculated an estimated EMI of ₹${formatINR(monthlyEmi)}/month using the Home Loan Calculator at Advait Skyline.\n• Loan Amount: ₹${formatINR(loanAmount)}\n• Interest Rate: ${interestRate}%\n• Tenure: ${tenureYears} Years\nPlease check my home loan eligibility and share approved banking partners.${sourceTag}`;

    return `https://wa.me/${SITE_CONFIG.contact.whatsappClean}?text=${encodeURIComponent(msg)}`;
  }, [loanAmount, interestRate, tenureYears, monthlyEmi]);

  // Handle preset selection
  const handleSelectPreset = (preset: (typeof PRESETS)[number]) => {
    setLoanAmount(preset.amount);
    setActivePreset(preset.id);
  };

  return (
    <section
      id="home-loan-emi-calculator"
      aria-label={t('title')}
      className="w-full bg-[#1E130C] text-[#EADFCB] py-16 sm:py-24 border-y border-[#7B4F2E]/40 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-texture-espresso opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#7B4F2E]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-10">
        
        {/* Section Header with Answer-First Crawlable Copy */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F2D27A] font-bold">
            <Calculator size={14} className="text-[#D9A21B]" />
            <span>{t('badge')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            {t('title')}
          </h2>

          {/* Answer-First Copy for AI Engines & Crawlers */}
          <p className="text-sm sm:text-base text-[#EADFCB]/90 font-sans leading-relaxed border-l-2 border-[#D9A21B] pl-4 bg-[#271910]/40 py-2 rounded-r-lg">
            {t('answerFirstCopy')}
          </p>
        </div>

        {/* Preset Chips Bar */}
        <div className="space-y-2">
          <span className="text-xs uppercase font-sans font-bold tracking-wider text-[#F2D27A] block">
            Indicative Loan Amount Presets:
          </span>
          <div className="flex flex-wrap items-center gap-2.5" role="group" aria-label="Configuration Presets">
            {PRESETS.map((p) => {
              const isSelected = activePreset === p.id && loanAmount === p.amount;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleSelectPreset(p)}
                  aria-pressed={isSelected}
                  className={`min-h-[44px] px-5 py-2.5 rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D9A21B] focus:ring-offset-2 focus:ring-offset-[#1E130C] ${
                    isSelected
                      ? 'bg-gold-gradient text-[#1E130C] shadow-lg scale-105'
                      : 'bg-[#271910] text-[#EADFCB]/80 border border-[#7B4F2E]/40 hover:border-[#D9A21B] hover:text-white'
                  }`}
                >
                  {t(p.labelKey)}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Interactive Synced Sliders & Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-[#271910] border border-[#7B4F2E]/40 rounded-3xl p-6 sm:p-8 space-y-7 shadow-xl">
            
            {/* Control 1: Loan Amount */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <label htmlFor="input-loan-amount" className="text-xs sm:text-sm font-sans font-bold text-white flex items-center gap-1.5">
                  <IndianRupee size={15} className="text-[#D9A21B]" />
                  <span>{t('loanAmount')}</span>
                </label>
                <div className="flex items-center bg-[#1E130C] border border-[#7B4F2E]/50 focus-within:border-[#D9A21B] rounded-lg px-3 py-1.5 min-h-[44px]">
                  <span className="text-xs text-[#F2D27A] font-semibold mr-1">₹</span>
                  <input
                    id="input-loan-amount"
                    type="number"
                    min={1000000}
                    max={6000000}
                    step={100000}
                    value={loanAmount}
                    onChange={(e) => {
                      const val = Math.max(1000000, Math.min(6000000, Number(e.target.value) || 0));
                      setLoanAmount(val);
                      setActivePreset('');
                    }}
                    className="w-24 bg-transparent text-white font-mono text-sm font-bold text-right focus:outline-none"
                    aria-describedby="loan-amount-slider"
                  />
                </div>
              </div>
              <input
                id="loan-amount-slider"
                type="range"
                min={1000000}
                max={6000000}
                step={100000}
                value={loanAmount}
                onChange={(e) => {
                  setLoanAmount(Number(e.target.value));
                  setActivePreset('');
                }}
                className="w-full h-2 bg-[#1E130C] rounded-lg appearance-none cursor-pointer accent-[#D9A21B] min-h-[44px]"
                aria-label={t('loanAmount')}
              />
              <div className="flex items-center justify-between text-[11px] text-[#EADFCB]/60 font-sans">
                <span>₹10 Lakhs</span>
                <span className="text-[#F2D27A] font-semibold">₹{(loanAmount / 100000).toFixed(1)} Lakhs</span>
                <span>₹60 Lakhs</span>
              </div>
            </div>

            {/* Control 2: Interest Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <label htmlFor="input-interest-rate" className="text-xs sm:text-sm font-sans font-bold text-white flex items-center gap-1.5">
                  <Percent size={15} className="text-[#D9A21B]" />
                  <span>{t('interestRate')}</span>
                </label>
                <div className="flex items-center bg-[#1E130C] border border-[#7B4F2E]/50 focus-within:border-[#D9A21B] rounded-lg px-3 py-1.5 min-h-[44px]">
                  <input
                    id="input-interest-rate"
                    type="number"
                    min={7.0}
                    max={12.0}
                    step={0.1}
                    value={interestRate}
                    onChange={(e) => {
                      const val = Math.max(7.0, Math.min(12.0, parseFloat(e.target.value) || 7.0));
                      setInterestRate(val);
                    }}
                    className="w-16 bg-transparent text-white font-mono text-sm font-bold text-right focus:outline-none"
                    aria-describedby="interest-rate-slider"
                  />
                  <span className="text-xs text-[#F2D27A] font-semibold ml-1">%</span>
                </div>
              </div>
              <input
                id="interest-rate-slider"
                type="range"
                min={7.0}
                max={12.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-[#1E130C] rounded-lg appearance-none cursor-pointer accent-[#D9A21B] min-h-[44px]"
                aria-label={t('interestRate')}
              />
              <div className="flex items-center justify-between text-[11px] text-[#EADFCB]/60 font-sans">
                <span>7.0%</span>
                <span className="text-[#F2D27A] font-semibold">{interestRate.toFixed(1)}% p.a.</span>
                <span>12.0%</span>
              </div>
            </div>

            {/* Control 3: Loan Tenure */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <label htmlFor="input-tenure" className="text-xs sm:text-sm font-sans font-bold text-white flex items-center gap-1.5">
                  <Clock size={15} className="text-[#D9A21B]" />
                  <span>{t('tenure')}</span>
                </label>
                <div className="flex items-center bg-[#1E130C] border border-[#7B4F2E]/50 focus-within:border-[#D9A21B] rounded-lg px-3 py-1.5 min-h-[44px]">
                  <input
                    id="input-tenure"
                    type="number"
                    min={5}
                    max={30}
                    step={1}
                    value={tenureYears}
                    onChange={(e) => {
                      const val = Math.max(5, Math.min(30, parseInt(e.target.value, 10) || 5));
                      setTenureYears(val);
                    }}
                    className="w-16 bg-transparent text-white font-mono text-sm font-bold text-right focus:outline-none"
                    aria-describedby="tenure-slider"
                  />
                  <span className="text-xs text-[#F2D27A] font-semibold ml-1">{t('tenureYears')}</span>
                </div>
              </div>
              <input
                id="tenure-slider"
                type="range"
                min={5}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-[#1E130C] rounded-lg appearance-none cursor-pointer accent-[#D9A21B] min-h-[44px]"
                aria-label={t('tenure')}
              />
              <div className="flex items-center justify-between text-[11px] text-[#EADFCB]/60 font-sans">
                <span>5 Years</span>
                <span className="text-[#F2D27A] font-semibold">{tenureYears} Years ({tenureYears * 12} Months)</span>
                <span>30 Years</span>
              </div>
            </div>

          </div>

          {/* Right Column: Computed EMI, Visual Breakdown & WhatsApp CTA (5 cols) */}
          <div className="lg:col-span-5 bg-[#1E130C] border border-[#D9A21B]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl">
            
            {/* Live Computed EMI Card with aria-live */}
            <div className="space-y-2 text-center" aria-live="polite" aria-atomic="true">
              <span className="text-xs uppercase font-sans tracking-widest text-[#F2D27A] font-bold block">
                {t('monthlyEmi')}
              </span>
              <div className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none py-1">
                ₹{formatINR(monthlyEmi)}
                <span className="text-xs sm:text-sm text-[#EADFCB]/70 font-sans font-normal ml-1">/ month</span>
              </div>
              <p className="text-[11px] text-[#EADFCB]/60 font-sans">
                Calculated for {tenureYears * 12} monthly installments at {interestRate}% p.a.
              </p>
            </div>

            {/* Financial Totals Breakdown */}
            <div className="space-y-3 bg-[#271910] p-4 rounded-2xl border border-[#7B4F2E]/30 text-xs font-sans">
              <div className="flex items-center justify-between py-1 border-b border-[#7B4F2E]/20">
                <span className="text-[#EADFCB]/75">{t('principalAmount')}</span>
                <strong className="text-white font-mono text-sm">₹{formatINR(loanAmount)}</strong>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[#7B4F2E]/20">
                <span className="text-[#EADFCB]/75">{t('totalInterest')}</span>
                <strong className="text-[#F2D27A] font-mono text-sm">₹{formatINR(totalInterest)}</strong>
              </div>
              <div className="flex items-center justify-between py-1 text-sm font-bold">
                <span className="text-white">{t('totalPayable')}</span>
                <strong className="text-gold-gradient font-mono text-base">₹{formatINR(totalPayment)}</strong>
              </div>
            </div>

            {/* Stacked Progress Bar with Percentages & Text Labels (Not color alone) */}
            <div className="space-y-2">
              <div
                className="w-full h-4 rounded-full overflow-hidden bg-[#271910] border border-[#7B4F2E]/50 flex"
                role="progressbar"
                aria-label="Loan Principal vs Interest Ratio"
                aria-valuenow={principalPercent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  style={{ width: `${principalPercent}%` }}
                  className="bg-gold-gradient h-full transition-all duration-300"
                />
                <div
                  style={{ width: `${interestPercent}%` }}
                  className="bg-[#7B4F2E] h-full transition-all duration-300"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-sans">
                <span className="flex items-center gap-1.5 text-[#F2D27A]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D9A21B]" aria-hidden="true" />
                  <span>{t('principalShare')}: {principalPercent}%</span>
                </span>
                <span className="flex items-center gap-1.5 text-[#EADFCB]/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#7B4F2E]" aria-hidden="true" />
                  <span>{t('interestShare')}: {interestPercent}%</span>
                </span>
              </div>
            </div>

            {/* WhatsApp Bank Eligibility CTA */}
            <div className="space-y-3 pt-2">
              <a
                href={waEligibilityUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent('whatsapp_click', {
                    source: 'emi_calculator',
                    loan_amount: loanAmount,
                    rate: interestRate,
                    tenure: tenureYears,
                    emi: monthlyEmi,
                  })
                }
                className="w-full min-h-[48px] px-6 py-3.5 rounded-xl bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} className="fill-[#1E130C]" />
                <span>{t('checkEligibilityWa')}</span>
                <ArrowRight size={14} />
              </a>

              <p className="text-[10px] text-[#EADFCB]/60 font-sans leading-tight text-center">
                {t('disclaimer')}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
