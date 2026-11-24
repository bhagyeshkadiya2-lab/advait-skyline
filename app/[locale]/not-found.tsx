import React from 'react';
import { ArrowLeft, Home, MessageSquare } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PROJECT_DATA } from '@/lib/project-data';

export default function NotFound() {
  return (
    <div className="w-full min-h-[75vh] bg-[#1E130C] text-[#EADFCB] flex items-center justify-center px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-texture-espresso opacity-50 pointer-events-none" />

      <div className="max-w-xl mx-auto text-center space-y-6 relative z-10">
        <span className="font-display text-7xl sm:text-9xl font-bold text-[#F2D27A] block leading-none">
          404
        </span>

        <h1 className="font-display text-2xl sm:text-4xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="font-sans text-xs sm:text-sm text-[#EADFCB]/80 max-w-md mx-auto leading-relaxed">
          The requested page may have moved or is no longer available. Explore our residential configurations or return to the main homepage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-md bg-gold-gradient text-[#1E130C] font-sans font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 transition-all flex items-center gap-2"
          >
            <Home size={15} />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/floor-plans"
            className="px-6 py-3 rounded-md border border-[#D9A21B] text-[#F2D27A] font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#D9A21B]/15 transition-all"
          >
            View Floor Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
