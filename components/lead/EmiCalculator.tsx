'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, ArrowUpRight, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { pushDataLayerEvent, buildWhatsAppLink } from '@/lib/tracking';
import { PROJECT_DATA } from '@/lib/project-data';

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(2500000); // 25 Lakhs default
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% default
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years default

  const calculation = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;

    if (monthlyRate === 0) {
      const emi = principal / totalMonths;
      return {
        emi: Math.round(emi),
        totalInterest: 0,
        totalPayment: principal,
        principalPercent: 100,
        interestPercent: 0,
      };
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - principal;

    const principalPercent = Math.round((principal / totalPayment) * 100);
    const interestPercent = 100 - principalPercent;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      principalPercent,
      interestPercent,
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handlePreset = (amount: number) => {
    setLoanAmount(amount);
    pushDataLayerEvent('emi_preset_click', { preset_amount: amount });
  };

  const waUrl = buildWhatsAppLink({
    phone: PROJECT_DATA.contact.whatsappLeadNumber,
    message: `Hello Dhanasvi Infra, I calculated an estimated EMI of ${formatINR(
      calculation.emi
    )}/month for a loan of ${formatINR(
      loanAmount
    )} at ${interestRate}% for Advait Skyline. Please share bank loan options and pre-approval details.`,
    sourceRef: 'emi-calculator',
  });

  return (
    <div className="w-full bg-[#1E130C] border-2 border-[#D9A21B]/40 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
      {/* Background ambient gold gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9A21B]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#7B4F2E]/40 pb-6 mb-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#271910] border border-[#D9A21B]/40 text-[#F2D27A] text-xs font-sans font-bold uppercase tracking-wider mb-2">
            <Calculator size={14} />
            <span>Interactive Affordability Estimator</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Advait Skyline Home Loan EMI Calculator
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#EADFCB]/80 mt-1">
            Calculate your monthly home loan installment with leading nationalized & private banks.
          </p>
        </div>

        {/* Quick Config Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => handlePreset(2000000)}
            className={`px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ${
              loanAmount === 2000000
                ? 'bg-gold-gradient text-[#1E130C] font-bold shadow-md'
                : 'bg-[#271910] text-[#EADFCB] border border-[#7B4F2E]/40 hover:border-[#D9A21B]'
            }`}
          >
            1 BHK (₹20L)
          </button>
          <button
            type="button"
            onClick={() => handlePreset(2800000)}
            className={`px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ${
              loanAmount === 2800000
                ? 'bg-gold-gradient text-[#1E130C] font-bold shadow-md'
                : 'bg-[#271910] text-[#EADFCB] border border-[#7B4F2E]/40 hover:border-[#D9A21B]'
            }`}
          >
            2 BHK (₹28L)
          </button>
          <button
            type="button"
            onClick={() => handlePreset(3800000)}
            className={`px-3 py-1.5 rounded-lg text-xs font-sans font-semibold transition-all cursor-pointer ${
              loanAmount === 3800000
                ? 'bg-gold-gradient text-[#1E130C] font-bold shadow-md'
                : 'bg-[#271910] text-[#EADFCB] border border-[#7B4F2E]/40 hover:border-[#D9A21B]'
            }`}
          >
            Shop / Retail (₹38L)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Sliders Left Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Loan Amount */}
          <div className="space-y-2 bg-[#271910]/80 border border-[#7B4F2E]/30 p-4 sm:p-5 rounded-2xl">
            <div className="flex items-center justify-between">
              <label htmlFor="loan-amount-slider" className="text-xs font-sans uppercase tracking-wider text-[#EADFCB]/80 font-semibold">
                Estimated Loan Amount
              </label>
              <span className="font-display text-xl sm:text-2xl font-bold text-[#F2D27A]">
                {formatINR(loanAmount)}
              </span>
            </div>
            <input
              id="loan-amount-slider"
              type="range"
              min={1000000}
              max={6000000}
              step={50000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              aria-label="Estimated Loan Amount"
              className="w-full h-2 bg-[#1E130C] rounded-lg appearance-none cursor-pointer accent-[#D9A21B]"
            />
            <div className="flex justify-between text-[10px] text-[#EADFCB]/50 font-mono">
              <span>₹10 Lakhs</span>
              <span>₹35 Lakhs</span>
              <span>₹60 Lakhs</span>
            </div>
          </div>

          {/* Slider 2: Interest Rate */}
          <div className="space-y-2 bg-[#271910]/80 border border-[#7B4F2E]/30 p-4 sm:p-5 rounded-2xl">
            <div className="flex items-center justify-between">
              <label htmlFor="interest-rate-slider" className="text-xs font-sans uppercase tracking-wider text-[#EADFCB]/80 font-semibold">
                Interest Rate (% p.a.)
              </label>
              <span className="font-display text-xl sm:text-2xl font-bold text-[#F2D27A]">
                {interestRate.toFixed(1)}%
              </span>
            </div>
            <input
              id="interest-rate-slider"
              type="range"
              min={7.0}
              max={12.0}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              aria-label="Interest Rate percentage per annum"
              className="w-full h-2 bg-[#1E130C] rounded-lg appearance-none cursor-pointer accent-[#D9A21B]"
            />
            <div className="flex justify-between text-[10px] text-[#EADFCB]/50 font-mono">
              <span>7.0% (Nationalized)</span>
              <span>8.5% (Benchmark)</span>
              <span>12.0%</span>
            </div>
          </div>

          {/* Slider 3: Loan Tenure */}
          <div className="space-y-2 bg-[#271910]/80 border border-[#7B4F2E]/30 p-4 sm:p-5 rounded-2xl">
            <div className="flex items-center justify-between">
              <label htmlFor="loan-tenure-slider" className="text-xs font-sans uppercase tracking-wider text-[#EADFCB]/80 font-semibold">
                Loan Repayment Tenure
              </label>
              <span className="font-display text-xl sm:text-2xl font-bold text-[#F2D27A]">
                {tenureYears} Years ({tenureYears * 12} Months)
              </span>
            </div>
            <input
              id="loan-tenure-slider"
              type="range"
              min={5}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              aria-label="Loan Repayment Tenure in years"
              className="w-full h-2 bg-[#1E130C] rounded-lg appearance-none cursor-pointer accent-[#D9A21B]"
            />
            <div className="flex justify-between text-[10px] text-[#EADFCB]/50 font-mono">
              <span>5 Years</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Card Right Column */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-[#271910] to-[#1E130C] border-2 border-[#D9A21B]/40 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="space-y-4">
            <span className="text-xs uppercase font-sans tracking-widest text-[#EADFCB]/70 block font-semibold">
              Monthly Equated Installment
            </span>

            {/* Big EMI Display */}
            <div className="py-2 border-b border-[#7B4F2E]/30">
              <span className="font-display text-4xl sm:text-5xl font-bold text-gold-gradient tracking-tight block">
                {formatINR(calculation.emi)}
              </span>
              <span className="text-xs text-[#EADFCB]/60 font-sans mt-1 block">
                Estimated monthly installment
              </span>
            </div>

            {/* Breakdown Stats */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-sans">
              <div className="bg-[#1E130C]/90 p-3 rounded-xl border border-[#7B4F2E]/25">
                <span className="text-[#EADFCB]/60 block text-[10px] uppercase">Principal Amount</span>
                <span className="font-bold text-white text-sm block mt-0.5">
                  {formatINR(loanAmount)}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {calculation.principalPercent}% of total
                </span>
              </div>
              <div className="bg-[#1E130C]/90 p-3 rounded-xl border border-[#7B4F2E]/25">
                <span className="text-[#EADFCB]/60 block text-[10px] uppercase">Total Interest</span>
                <span className="font-bold text-[#F2D27A] text-sm block mt-0.5">
                  {formatINR(calculation.totalInterest)}
                </span>
                <span className="text-[10px] text-[#D9A21B] font-mono">
                  {calculation.interestPercent}% of total
                </span>
              </div>
            </div>

            {/* Split Progress Bar */}
            <div className="space-y-1 pt-1">
              <div className="h-2 w-full bg-[#1E130C] rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${calculation.principalPercent}%` }}
                  className="bg-emerald-500 h-full transition-all duration-300"
                />
                <div
                  style={{ width: `${calculation.interestPercent}%` }}
                  className="bg-gold-gradient h-full transition-all duration-300"
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-[#EADFCB]/60">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Principal
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#D9A21B] inline-block" /> Interest
                </span>
              </div>
            </div>

            {/* Total Repayable */}
            <div className="flex items-center justify-between text-xs font-sans text-[#EADFCB]/80 pt-2 border-t border-[#7B4F2E]/20">
              <span>Total Repayable (Principal + Interest):</span>
              <span className="font-bold text-white font-mono">
                {formatINR(calculation.totalPayment)}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-6 space-y-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                pushDataLayerEvent('whatsapp_click', {
                  cta_location: 'emi_calculator_apply',
                  loan_amount: loanAmount,
                  emi: calculation.emi,
                })
              }
              className="w-full py-3.5 px-4 rounded-xl bg-gold-gradient text-[#1E130C] font-sans font-bold text-sm tracking-wider uppercase shadow-lg hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} className="fill-[#1E130C]" />
              <span>Check Bank Eligibility on WhatsApp</span>
            </a>
            <p className="text-[10px] text-center text-[#EADFCB]/60 font-sans flex items-center justify-center gap-1">
              <ShieldCheck size={12} className="text-[#F2D27A]" />
              <span>Approved by leading nationalized & scheduled commercial banks</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
