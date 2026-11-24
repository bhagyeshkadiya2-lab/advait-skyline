import React from 'react';

export default function StatsRow() {
  const highlights = [
    {
      value: '328',
      label: 'Total Units',
      desc: 'Residential and commercial landmark',
    },
    {
      value: 'G+14',
      label: 'Landmark Floors',
      desc: '3 interconnected towers on main road',
    },
    {
      value: '39+',
      label: 'Lifestyle Amenities',
      desc: 'Pool, dual gyms, turf cricket & mini cinema',
    },
    {
      value: '575',
      unit: 'Sq. Ft.',
      label: '1 BHK Built-up',
      desc: '511 sq. ft. carpet area (verified plan)',
    },
    {
      value: '652',
      unit: 'Sq. Ft.',
      label: '2 BHK Built-up',
      desc: '573 sq. ft. carpet area (verified plan)',
    },
    {
      value: 'Individual',
      label: 'Parking Provision',
      desc: 'Individual parking (allocation terms apply)',
    },
    {
      value: 'Affordable',
      label: 'Pricing Positioning',
      desc: 'Contact sales team for current price list',
    },
    {
      value: 'Mar 2028',
      prefix: 'Before',
      label: 'Possession Target',
      desc: 'Target delivery before March 2028',
    },
  ];

  return (
    <section
      aria-label="Advait Skyline Quantitative Metrics and Project Highlights"
      className="w-full bg-[#1E130C] border-y border-[#7B4F2E]/40 py-12 sm:py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-texture-espresso opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#271910]/70 border border-[#7B4F2E]/30 shadow-sm hover:border-[#D9A21B]/40 transition-colors"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F2D27A] mb-2 leading-none flex items-baseline gap-1">
                {item.prefix && (
                  <span className="text-xs sm:text-sm font-sans uppercase font-medium text-[#EADFCB]/70 tracking-wider">
                    {item.prefix}
                  </span>
                )}
                <span>{item.value}</span>
                {item.unit && (
                  <span className="text-xs sm:text-sm font-sans font-medium text-[#EADFCB]/80">
                    {item.unit}
                  </span>
                )}
              </div>
              <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white block mb-1">
                {item.label}
              </span>
              <span className="font-sans text-[11px] text-[#EADFCB]/70 tracking-wide block max-w-[220px]">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
