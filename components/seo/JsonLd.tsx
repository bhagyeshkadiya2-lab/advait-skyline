import React from 'react';
import { PROJECT_DATA } from '@/lib/project-data';
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
  locale: string;
  type?: 'global' | 'home' | 'unit' | 'breadcrumbs' | 'faq';
  unitData?: UnitData;
  breadcrumbs?: BreadcrumbItem[];
  customFaqs?: { question: string; answer: string }[];
}

export default function JsonLd({
  locale,
  type = 'global',
  unitData,
  breadcrumbs,
  customFaqs,
}: JsonLdProps) {
  const schemas: Record<string, unknown>[] = [];

  // Global Schemas (Rendered in Layout)
  if (type === 'global') {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      '@id': `${BASE_URL}/#organization`,
      name: PROJECT_DATA.identity.legalEntity,
      alternateName: 'Dhanasvi Infra — Builders & Developers',
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: `${BASE_URL}/hero-bg.jpg`,
      email: PROJECT_DATA.contact.email,
      telephone: [PROJECT_DATA.contact.whatsappLeadNumber, ...PROJECT_DATA.contact.brochurePhones],
      address: {
        '@type': 'PostalAddress',
        streetAddress: PROJECT_DATA.contact.siteAddress,
        addressLocality: 'Naroli',
        addressRegion: 'Dadra and Nagar Haveli',
        postalCode: '396235',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: PROJECT_DATA.contact.geoCoordinates.latitude,
        longitude: PROJECT_DATA.contact.geoCoordinates.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:30',
          closes: '19:00',
        },
      ],
      priceRange: '₹₹',
    };

    const projectSchema = {
      '@context': 'https://schema.org',
      '@type': 'ApartmentComplex',
      '@id': `${BASE_URL}/#project`,
      name: PROJECT_DATA.identity.name,
      alternateName: 'Advait Skyline Naroli',
      slogan: PROJECT_DATA.identity.tagline,
      description:
        'Advait Skyline is a G+14 residential and commercial landmark by Dhanasvi Infra on the Naroli–Silvassa main road, 200 meters from the Naroli–Bhilad Checkpost, offering 39+ amenities, 1 & 2 BHK luxury flats and commercial shops.',
      url: BASE_URL,
      image: [
        `${BASE_URL}/hero-bg.jpg`,
        `${BASE_URL}/clubhouse-bg.jpg`,
        `${BASE_URL}/gym-bg.jpg`,
        `${BASE_URL}/pool-bg.jpg`,
      ],
      identifier: {
        '@type': 'PropertyValue',
        name: 'RERA Registration Number',
        value: PROJECT_DATA.identity.reraNumber,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: PROJECT_DATA.contact.siteAddress,
        addressLocality: 'Naroli',
        addressRegion: 'Dadra and Nagar Haveli',
        postalCode: '396235',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: PROJECT_DATA.contact.geoCoordinates.latitude,
        longitude: PROJECT_DATA.contact.geoCoordinates.longitude,
      },
      numberOfAccommodationUnits: 150,
      amenityFeature: PROJECT_DATA.amenities
        .filter((a) => a.confirmedInBrochure)
        .map((a) => ({
          '@type': 'LocationFeatureSpecification',
          name: a.name,
          value: true,
        })),
    };

    const webSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: PROJECT_DATA.identity.name,
      url: BASE_URL,
      inLanguage: locale === 'hi' ? 'hi-IN' : locale === 'gu' ? 'gu-IN' : 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };

    schemas.push(organizationSchema, projectSchema, webSiteSchema);
  }

  // Home FAQ schema
  if (type === 'home' || type === 'faq') {
    const faqList = customFaqs || [
      {
        question: 'Where is Advait Skyline located?',
        answer: 'Advait Skyline is located on the Naroli–Silvassa main road, 200 meters from the Naroli–Bhilad Checkpost in Vadfaliya, Dadra & Nagar Haveli – 396235.',
      },
      {
        question: 'Who is the developer of Advait Skyline?',
        answer: 'Advait Skyline is developed by Dhanasvi Infra, a reputed real estate firm in Dadra & Nagar Haveli.',
      },
      {
        question: 'What configurations are offered at Advait Skyline?',
        answer: 'Advait Skyline offers 1 BHK (approx. 511 sq. ft. carpet) and 2 BHK (approx. 573 sq. ft. carpet) luxury residences, as well as ground and first floor commercial retail shops and second-floor office suites.',
      },
      {
        question: 'What is the RERA registration number of Advait Skyline?',
        answer: 'Advait Skyline is officially registered under RERA registration number PM3000002600013.',
      },
      {
        question: 'How many amenities does Advait Skyline feature?',
        answer: 'Advait Skyline features 39+ lifestyle and wellness amenities including a rooftop infinity pool, sky gymnasium, landscaped gardens, banquet hall, children play park, and round-the-clock gated security.',
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
      '@type': 'Accommodation',
      name: unitData.name,
      description: unitData.description,
      numberOfRooms: unitData.numberOfRooms,
      floorSize: {
        '@type': 'QuantitativeValue',
        value: unitData.floorSizeSqFt,
        unitCode: 'FTK',
      },
      isPartOf: {
        '@type': 'ApartmentComplex',
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
