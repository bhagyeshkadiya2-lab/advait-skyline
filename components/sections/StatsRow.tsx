import React from 'react';

export default function StatsRow() {
  return (
    <section
      aria-label="Advait Skyline Quantitative Metrics"
      className="w-full bg-[#1E130C] border-y border-[#7B4F2E]/40 py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-texture-espresso opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#7B4F2E]/30">
          
          {/* Stat 1: 39+ Lifestyle Amenities */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 relative group">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2D27A] mb-2 leading-none">
              <span>39+</span>
            </div>
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white block mb-1">
              Lifestyle Amenities
            </span>
            <span className="font-sans text-[11px] text-[#EADFCB]/70 tracking-wide block max-w-[200px]">
              Swimming pool, dual gyms, turf cricket &amp; mini cinema
            </span>
          </div>

          {/* Stat 2: G+14 Landmark Floors */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 relative group">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2D27A] mb-2 leading-none">
              <span>G+14</span>
            </div>
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white block mb-1">
              Landmark Floors
            </span>
            <span className="font-sans text-[11px] text-[#EADFCB]/70 tracking-wide block max-w-[200px]">
              Residential and commercial development
            </span>
          </div>

          {/* Stat 3: 200m From Checkpost */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 relative group">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2D27A] mb-2 leading-none">
              <span>200 m</span>
            </div>
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white block mb-1">
              From Checkpost
            </span>
            <span className="font-sans text-[11px] text-[#EADFCB]/70 tracking-wide block max-w-[200px]">
              Naroli–Bhilad Checkpost border crossing
            </span>
          </div>

          {/* Stat 4: 20 Ground Retail Shops */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-8 relative group">
            <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2D27A] mb-2 leading-none">
              <span>20</span>
            </div>
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white block mb-1">
              Ground Retail Shops
            </span>
            <span className="font-sans text-[11px] text-[#EADFCB]/70 tracking-wide block max-w-[200px]">
              5-foot wide customer otta on main road
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
