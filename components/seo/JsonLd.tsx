import React from 'react';
import { PROJECT_DATA, GBP_MAPS_URL } from '@/lib/project-data';
import { SITE_CONFIG } from '@/lib/siteConfig';
import { BASE_URL } from '@/lib/seo';

/**
 * Safely escape JSON string to prevent XSS / script injection bugs
 */
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface UnitData {
  name: string;
  description: string;
  numberOfRooms: string;
  floorSizeSqFt: number;
}

export interface JsonLdProps {
  locale?: string;
  type?: 'global' | 'home' | 'unit' | 'breadcrumbs' | 'faq';
  path?: string;
  pageType?: string;
  unitData?: UnitData;
  breadcrumbs?: BreadcrumbItem[];
  customFaqs?: { question: string; answer: string }[];
  faqItems?: { question: string; answer: string }[];
}

export default function JsonLd({
  locale = 'en',
  type = 'global',
  path,
  pageType,
  unitData,
  breadcrumbs,
  customFaqs,
  faqItems,
}: JsonLdProps) {
  const schemas: Record<string, unknown>[] = [];

  const verifiedSameAs = [
    SITE_CONFIG.geo.googleBusinessProfileUrl,
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.youtube,
  ];

  // Global Schemas (Rendered in Layout) — Unified @graph for entity clustering
  if (type === 'global') {
    const organizationSchema = {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: SITE_CONFIG.legalEntity,
      alternateName: 'Dhanasvi Infra — Builders & Developers',
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: `${BASE_URL}/hero-bg.jpg`,
      email: SITE_CONFIG.contact.email,
      telephone: [SITE_CONFIG.contact.whatsappNumber, SITE_CONFIG.contact.salesHotline, SITE_CONFIG.contact.secondaryPhone],
      sameAs: verifiedSameAs,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.locality,
        addressRegion: SITE_CONFIG.address.region,
        postalCode: SITE_CONFIG.address.postalCode,
        addressCountry: SITE_CONFIG.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE_CONFIG.geo.latitude,
        longitude: SITE_CONFIG.geo.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '19:00',
        },
      ],
    };

    const projectSchema = {
      '@type': 'ApartmentComplex',
      '@id': `${BASE_URL}/#project`,
      name: SITE_CONFIG.name,
      alternateName: 'Advait Skyline Naroli',
      slogan: SITE_CONFIG.projectTagline,
      description:
        'Advait Skyline is a G+14 residential and commercial landmark by Dhanasvi Infra on the Naroli–Silvassa main road, 200 meters from the Naroli–Bhilad Checkpost, offering 39+ amenities, 1 & 2 BHK luxury flats and commercial shops.',
      url: BASE_URL,
      hasMap: SITE_CONFIG.geo.googleBusinessProfileUrl,
      sameAs: verifiedSameAs,
      parentOrganization: {
        '@id': `${BASE_URL}/#organization`,
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-summary', '#project-fact-sheet'],
      },
      image: [
        `${BASE_URL}/hero-bg.jpg`,
        `${BASE_URL}/clubhouse-bg.jpg`,
        `${BASE_URL}/gym-bg.jpg`,
        `${BASE_URL}/pool-bg.jpg`,
      ],
      identifier: {
        '@type': 'PropertyValue',
        name: 'RERA Registration Number',
        value: SITE_CONFIG.reraNumber,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.locality,
        addressRegion: SITE_CONFIG.address.region,
        postalCode: SITE_CONFIG.address.postalCode,
        addressCountry: SITE_CONFIG.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE_CONFIG.geo.latitude,
        longitude: SITE_CONFIG.geo.longitude,
      },
      numberOfAccommodationUnits: SITE_CONFIG.specs.totalUnits,
      amenityFeature: PROJECT_DATA.amenities
        .filter((a) => a.confirmedInBrochure)
        .map((a) => ({
          '@type': 'LocationFeatureSpecification',
          name: a.name,
          value: true,
        })),
      containsPlace: [
        {
          '@type': 'Apartment',
          name: '1 BHK Residence',
          numberOfBedrooms: 1,
          numberOfBathroomsTotal: 2,
          floorSize: {
            '@type': 'QuantitativeValue',
            value: 575,
            unitCode: 'FTK',
            description: `${SITE_CONFIG.specs.carpetArea['1bhk']} carpet area (sanctioned plan, subject to document verification)`,
          },
        },
        {
          '@type': 'Apartment',
          name: '2 BHK Residence',
          numberOfBedrooms: 2,
          numberOfBathroomsTotal: 2,
          floorSize: {
            '@type': 'QuantitativeValue',
            value: 652,
            unitCode: 'FTK',
            description: `${SITE_CONFIG.specs.carpetArea['2bhk']} carpet area (sanctioned plan, subject to document verification)`,
          },
        },
      ],
    };

    const webSiteSchema = {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: SITE_CONFIG.name,
      url: BASE_URL,
      publisher: {
        '@id': `${BASE_URL}/#organization`,
      },
      inLanguage: locale === 'hi' ? 'hi-IN' : locale === 'gu' ? 'gu-IN' : 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };

    const realEstateAgentSchema = {
      '@type': 'RealEstateAgent',
      '@id': `${BASE_URL}/#realestateagent`,
      name: 'Advait Skyline Sales & Experience Centre',
      image: `${BASE_URL}/renders/advait-skyline-three-towers-day.jpg`,
      url: BASE_URL,
      hasMap: SITE_CONFIG.geo.googleBusinessProfileUrl,
      sameAs: verifiedSameAs,
      parentOrganization: {
        '@id': `${BASE_URL}/#organization`,
      },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-summary', '#project-fact-sheet'],
      },
      telephone: SITE_CONFIG.contact.salesHotline,
      email: SITE_CONFIG.contact.email,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.address.street,
        addressLocality: SITE_CONFIG.address.locality,
        addressRegion: SITE_CONFIG.address.region,
        postalCode: SITE_CONFIG.address.postalCode,
        addressCountry: SITE_CONFIG.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE_CONFIG.geo.latitude,
        longitude: SITE_CONFIG.geo.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '19:00',
        },
      ],
    };

    const videoWalkthroughSchema = {
      '@type': 'VideoObject',
      name: 'Advait Skyline 3D Architectural Walkthrough Video Reels',
      description: 'Photorealistic 3D virtual walkthrough of Advait Skyline residential and commercial landmark on Naroli–Silvassa main road.',
      thumbnailUrl: [
        `${BASE_URL}/renders/advait-skyline-three-towers-day.jpg`,
        `${BASE_URL}/hero-bg.jpg`,
      ],
      uploadDate: '2026-01-15T08:00:00+05:30',
      contentUrl: `${BASE_URL}/videos/3d/grand-entrance-lobby.mp4`,
      embedUrl: `${BASE_URL}/#3d-videos`,
    };

    schemas.push({
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        projectSchema,
        webSiteSchema,
        realEstateAgentSchema,
        videoWalkthroughSchema,
      ],
    });
  }

  // Home FAQ schema & Custom FAQs
  if (type === 'home' || type === 'faq' || customFaqs || faqItems) {
    const faqList = customFaqs || faqItems || [
      {
        question: 'Where is Advait Skyline located?',
        answer: 'Advait Skyline is located on the Naroli–Silvassa main road, approximately 200 meters from the Naroli–Bhilad Checkpost in Vadfaliya, Dadra & Nagar Haveli – 396235.',
      },
      {
        question: 'Who is the developer of Advait Skyline?',
        answer: 'Advait Skyline is developed by Dhanasvi Infra, a reputable real estate partnership firm dedicated to premium construction quality and timely delivery in the Dadra & Nagar Haveli region.',
      },
      {
        question: 'What configurations are offered at Advait Skyline?',
        answer: 'Advait Skyline offers 1 BHK (575 sq. ft. built-up, 511 sq. ft. carpet) and 2 BHK (652 sq. ft. built-up, 573 sq. ft. carpet) residences across 3 towers of G+14 floors with 328 total units, as well as ground and first floor commercial retail shops and second-floor office suites.',
      },
      {
        question: 'What is the possession date for Advait Skyline?',
        answer: 'The possession target is before March 2028 as per construction scheduling and registered agreement for sale terms.',
      },
      {
        question: 'What is the price of 1 & 2 BHK flats at Advait Skyline?',
        answer: 'Advait Skyline offers affordable residential pricing for 1 & 2 BHK homes in Naroli near Silvassa. Transparent milestone payments and current unit quotations are available directly from the sales desk on WhatsApp at +91 99090 72390.',
      },
      {
        question: 'Is individual parking available at Advait Skyline?',
        answer: 'Yes, individual parking is available across the development subject to allocation terms and registered agreement specifications.',
      },
      {
        question: 'What is the RERA registration number of Advait Skyline?',
        answer: 'Advait Skyline is officially registered under RERA registration number PM3000002600013.',
      },
      {
        question: 'How many amenities does Advait Skyline feature?',
        answer: 'Advait Skyline features 39+ lifestyle and wellness amenities including a swimming pool, separate gyms for men and women, landscaped gardens, banquet hall, children play area, and round-the-clock gated security.',
      },
      {
        question: 'What is the carpet area of the 1 BHK flats?',
        answer: 'The 1 BHK apartments feature a built-up area of 575 sq. ft. and a sanctioned carpet area of approximately 511 sq. ft. (47.47 sq. m., subject to document verification) with a spacious living room, private balcony, 2 bathrooms, and a modern kitchen.',
      },
      {
        question: 'What is the carpet area of the 2 BHK flats?',
        answer: 'The 2 BHK residences feature a built-up area of 652 sq. ft. and an expansive sanctioned carpet area of approximately 573 sq. ft. (53.23 sq. m., subject to document verification) with two generous bedrooms, a 16-foot living hall, a 5\'6" wide sunset balcony, and 2 bathrooms.',
      },
      {
        question: 'How can I book a site visit to Advait Skyline?',
        answer: 'You can schedule a site visit instantly by clicking the \'Book a Site Visit\' button, sending a message on WhatsApp at +91 99090 72390, or calling our sales office directly at +91 99090 72363.',
      },
      {
        question: 'Is Naroli (Dadra & Nagar Haveli) the same as Narol in Ahmedabad?',
        answer: 'No. Naroli is an industrial and residential hub in the Union Territory of Dadra & Nagar Haveli, situated near Bhilad and roughly 10 km from Silvassa. Narol is a separate locality in Ahmedabad, Gujarat. Advait Skyline is located specifically in Naroli, Dadra & Nagar Haveli (PIN 396235).',
      },
      {
        question: 'How far is Advait Skyline from Silvassa?',
        answer: 'Advait Skyline is located approximately 10 km from central Silvassa (about 13 to 15 minutes by car along the Naroli–Silvassa main road). The project is positioned 200 meters from the Naroli–Bhilad Checkpost, offering direct connectivity between Silvassa and Bhilad Railway Station.',
      },
    ];

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqList.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    schemas.push(faqSchema);
  }

  // Unit Schema (Accommodation)
  if (type === 'unit' && unitData) {
    const accommodationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Apartment',
      name: unitData.name,
      description: unitData.description,
      numberOfBedrooms: unitData.numberOfRooms === '1 BHK' ? 1 : 2,
      numberOfBathroomsTotal: 2,
      numberOfRooms: unitData.numberOfRooms,
      floorSize: {
        '@type': 'QuantitativeValue',
        value: unitData.floorSizeSqFt,
        unitCode: 'FTK',
      },
      isPartOf: {
        '@type': 'ApartmentComplex',
        '@id': `${BASE_URL}/#project`,
        name: PROJECT_DATA.identity.name,
        url: BASE_URL,
      },
    };
    schemas.push(accommodationSchema);
  }

  // Breadcrumbs
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: b.name,
        item: b.item.startsWith('http') ? b.item : `${BASE_URL}${b.item}`,
      })),
    };
    schemas.push(breadcrumbSchema);
  }

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
        />
      ))}
    </>
  );
}
