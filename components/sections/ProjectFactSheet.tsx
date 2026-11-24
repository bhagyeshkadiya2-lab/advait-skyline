import React from 'react';
import { ShieldCheck, MapPin, Building, Calendar, Phone, IndianRupee } from 'lucide-react';
import { PROJECT_DATA, GBP_MAPS_URL } from '@/lib/project-data';

interface ProjectFactSheetProps {
  compact?: boolean;
  highlightUnit?: '1-bhk' | '2-bhk';
}

export default function ProjectFactSheet({ compact = false, highlightUnit }: ProjectFactSheetProps) {
  const factRows = [
    { label: 'Project Name', value: PROJECT_DATA.identity.name, note: 'Mixed residential & commercial landmark' },
    { label: 'Developer', value: PROJECT_DATA.identity.legalEntity, note: 'Reputed builder in Dadra & Nagar Haveli' },
    {
      label: 'RERA Registration No.',
      value: PROJECT_DATA.identity.reraNumber,
      // TODO(FACT): Confirm regulatory authority (e.g. MahaRERA or DNH RERA portal)
      note: 'Registered project under PM3000002600013 (// TODO(FACT): Authority portal link)',
    },
    {
      label: 'Site Address',
      value: PROJECT_DATA.contact.siteAddress,
      note: 'On Naroli–Silvassa Main Road, ~200 m from Naroli–Bhilad Checkpost',
    },
    {
      label: 'Geo Coordinates',
      value: `${PROJECT_DATA.contact.geoCoordinates.latitude}, ${PROJECT_DATA.contact.geoCoordinates.longitude}`,
      note: 'Vadfaliya, Naroli, DNH – 396235',
    },
    {
      label: 'Building Structure',
      // TODO(FACT): Confirm whether 3 towers or single G+14 development
      value: `G+14 Floors (${PROJECT_DATA.identity.totalTowers || '{FILL_TOWERS}'})`,
      note: 'Podium commercial retail shops 1–20, offices, and residential towers above',
    },
    {
      label: 'Total Units',
      // TODO(FACT): Total residential units count
      value: PROJECT_DATA.identity.totalUnits || '{FILL_UNITS}',
      note: 'Subject to final RERA quarterly disclosure',
    },
    {
      label: '1 BHK Carpet Area',
      value: '511 Sq. Ft. (47.47 Sq. M.)',
      note: 'As per approved plan: hall, bedroom, kitchen, 2 bathrooms, foyer & balcony',
      isHighlighted: highlightUnit === '1-bhk',
    },
    {
      label: '2 BHK Carpet Area',
      value: '573 Sq. Ft. (53.23 Sq. M.)',
      note: 'As per approved plan: 16ft living hall, 2 bedrooms, kitchen, 2 bathrooms & 5\'6" sunset balcony',
      isHighlighted: highlightUnit === '2-bhk',
    },
    {
      label: 'Starting Price',
      // TODO(FACT): Starting prices for 1 BHK & 2 BHK
      value: `1 BHK: ${PROJECT_DATA.identity.startingPrice1BHK || '{FILL_PRICE_1BHK}'} | 2 BHK: ${PROJECT_DATA.identity.startingPrice2BHK || '{FILL_PRICE_2BHK}'}`,
      note: 'Starting from {price} onwards. Get the full price sheet on WhatsApp.',
    },
    {
      label: 'Possession Timeline',
      // TODO(FACT): Official RERA possession date
      value: PROJECT_DATA.identity.possessionDate || '{FILL_POSSESSION}',
      note: 'Under active construction as per registered RERA schedule',
    },
    {
      label: 'Parking Allocation',
      // TODO(FACT): Parking spaces allocation
      value: PROJECT_DATA.identity.parkingAllocation || '{FILL_PARKING}',
      note: 'Covered stilt and open vehicle parking bays',
    },
    {
      label: 'Architectural Consultant',
      value: `${PROJECT_DATA.team.architect.firm} (${PROJECT_DATA.team.architect.name})`,
      note: 'Vapi / Dadra & Nagar Haveli',
    },
    {
      label: 'Structural Engineer',
      value: PROJECT_DATA.team.structuralConsultant.name,
      note: 'Chartered Structural Engineer',
    },
    {
      label: 'Sales Office & Inquiries',
      value: `${PROJECT_DATA.contact.brochurePhones.join(' / ')}`,
      note: `WhatsApp: ${PROJECT_DATA.contact.whatsappFormatted} | Email: ${PROJECT_DATA.contact.email}`,
    },
  ];

  return (
    <section
      aria-label="Advait Skyline Project Fact Sheet"
      className="w-full my-8 bg-white border border-[#7B4F2E]/25 rounded-2xl p-6 sm:p-8 shadow-sm overflow-hidden"
    >
      <div className="space-y-3 mb-6">
        <div className="inline-flex items-center gap-2">
          <span className="w-6 h-[1.5px] bg-[#D9A21B]" />
          <span className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#7B4F2E]">
            Verified Project Specifications
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1E130C]">
          Advait Skyline at a Glance — Project Fact Sheet
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[#2A1F18]/75 leading-relaxed max-w-3xl">
          Single source of truth for RERA credentials, approved carpet areas, structural details, and contact coordinates. Advait Skyline is in Naroli, near Silvassa, Dadra &amp; Nagar Haveli (not Narol, Ahmedabad).
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#7B4F2E]/20 bg-[#FBF8F2]">
        <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
          <caption className="sr-only">Advait Skyline Project Fact Sheet and Technical Specifications</caption>
          <thead>
            <tr className="bg-[#1E130C] text-[#F2D27A] border-b border-[#7B4F2E]/30">
              <th scope="col" className="py-3 px-4 sm:px-6 font-bold w-1/3">Project Attribute</th>
              <th scope="col" className="py-3 px-4 font-bold w-1/3">Verified Specification</th>
              <th scope="col" className="py-3 px-4 sm:px-6 font-bold w-1/3">Context / Documentation Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#7B4F2E]/15 text-[#2A1F18]/90">
            {factRows.map((row, idx) => (
              <tr
                key={idx}
                className={`transition-colors ${
                  row.isHighlighted
                    ? 'bg-[#EADFCB]/60 font-semibold text-[#1E130C]'
                    : idx % 2 === 0
                    ? 'bg-white'
                    : 'bg-[#FBF8F2]'
                }`}
              >
                <th scope="row" className="py-3 px-4 sm:px-6 font-semibold text-[#1E130C] align-top">
                  {row.label}
                </th>
                <td className="py-3 px-4 align-top font-medium text-[#7B4F2E]">
                  {row.value}
                </td>
                <td className="py-3 px-4 sm:px-6 text-xs text-[#2A1F18]/70 align-top">
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-[#7B4F2E]/15 flex flex-wrap items-center justify-between text-[11px] text-[#2A1F18]/70 font-sans">
        <span>* Dimensions are measured plaster-to-plaster as per approved architectural plans.</span>
        <span>Last updated: November 2026</span>
      </div>
    </section>
  );
}
