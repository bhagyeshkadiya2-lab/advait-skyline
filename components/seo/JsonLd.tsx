import React from 'react';
import { PROJECT_DATA } from '@/lib/project-data';
import { BASE_URL } from '@/lib/seo';

/**
 * Safely escape JSON string to prevent XSS / script injection bugs
 */
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export interface JsonLdProps {
  locale: string;
  type?: 'home' | 'project' | 'organization' | 'faq' | 'unit' | 'breadcrumbs';
  unitData?: {
    name: string;
    description: string;
    numberOfRooms: string;
    floorSizeSqFt: number;
  };
  breadcrumbs?: { name: string; item: string }[];
}

export default function JsonLd({ locale, type = 'home', unitData, breadcrumbs }: JsonLdProps) {
  const schemas: Record<string, unknown>[] = [];

  // 1. Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: PROJECT_DATA.identity.legalEntity,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    email: PROJECT_DATA.contact.email,
    telephone: PROJECT_DATA.contact.brochurePhones,
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
  };

  // 2. Project Schema (ApartmentComplex)
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'ApartmentComplex',
    name: PROJECT_DATA.identity.name,
    alternateName: 'Advait Skyline Naroli',
    description: 'G+14 luxury residential and commercial mixed development on Naroli–Silvassa main road, 200m from Naroli–Bhilad Checkpost with 39+ lifestyle amenities.',
    url: BASE_URL,
    image: `${BASE_URL}/hero-bg.jpg`,
    identifier: PROJECT_DATA.identity.reraNumber,
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
    amenityFeature: PROJECT_DATA.amenities
      .filter((a) => a.confirmedInBrochure)
      .map((a) => ({
        '@type': 'LocationFeatureSpecification',
        name: a.name,
        value: true,
      })),
  };

  // 3. WebSite Schema
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: PROJECT_DATA.identity.name,
    url: BASE_URL,
    inLanguage: locale === 'hi' ? 'hi-IN' : locale === 'gu' ? 'gu-IN' : 'en-IN',
  };

  // 4. FAQ Schema for Home
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Advait Skyline located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Advait Skyline is located on the Naroli–Silvassa main road, approximately 200 meters from the Naroli–Bhilad Checkpost in Vadfaliya, Dadra & Nagar Haveli – 396235.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the developer of Advait Skyline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Advait Skyline is developed by Dhanasvi Infra, a real estate partnership firm based in Dadra & Nagar Haveli.',
        },
      },
      {
        '@type': 'Question',
        name: 'What flat configurations are available at Advait Skyline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Advait Skyline offers 1 BHK (approx. 511 sq. ft. carpet) and 2 BHK (approx. 573 sq. ft. carpet) apartments, along with commercial retail shops and 2nd-floor office suites.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the RERA registration number for Advait Skyline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Advait Skyline is registered under RERA registration number PM3000002600013.',
        },
      },
    ],
  };

  schemas.push(organizationSchema, projectSchema, webSiteSchema);

  if (type === 'home') {
    schemas.push(faqSchema);
  }

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

  if (unitData) {
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
    };
    schemas.push(accommodationSchema);
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
