/**
 * Advait Skyline — Centralized Site Configuration & Verified Constants
 * Single source of truth for location coordinates, contact lines, GBP, brochures, and master project specs.
 */

export const SITE_CONFIG = {
  name: 'Advait Skyline',
  legalEntity: 'Dhanasvi Infra',
  developerTagline: 'Where Quality Meets Trust',
  projectTagline: 'Elevate Your Everyday',
  siteUrl: 'https://www.advaitskyline.com',

  // Master Project Specifications (Owner-Supplied Verified Data)
  specs: {
    totalUnits: 328,
    totalUnitsLabel: '328 Units',
    floors: 'G+14 Floors',
    totalTowers: '3 Towers',
    amenitiesCount: '39+',
    possessionTarget: 'Before March 2028',
    possessionNote: 'Target possession before March 2028. Subject to registered agreement for sale terms.',
    parking: 'Individual Parking',
    parkingNote: 'Individual parking provided, subject to allocation terms.',
    pricingPositioning: 'Affordable Pricing',
    pricingNote: 'Affordable Pricing — Contact Us for Current Prices',
    builtUpArea: {
      '1bhk': '575 sq. ft.',
      '2bhk': '652 sq. ft.',
    },
    carpetArea: {
      '1bhk': '511 sq. ft.',
      '2bhk': '573 sq. ft.',
      note: 'Carpet area subject to document verification.',
    },
  },

  // Regulatory Compliance
  reraNumber: 'PM3000002600013',
  reraAuthorityName: 'MAHA RERA (PM3000002600013)',

  // Verified Geo-Location & Google Business Profile
  geo: {
    latitude: 20.2798943,
    longitude: 72.920547,
    googleBusinessProfileUrl: 'https://share.google/1BK6JUvV05C14djr3',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=20.2798943,72.920547',
    embedIframeUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6657930800615!2d72.920547!3d20.2798943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cd00330b9017%3A0x8c8df8922e650cec!2sAdvait%20Skyline!5e0!3m2!1sen!2sin!4v1717657200000!5m2!1sen!2sin',
  },

  // Address
  address: {
    street: 'Naroli–Silvassa Main Road, Opp. Vadfaliya',
    landmark: '200 m from Naroli–Bhilad Checkpost',
    locality: 'Naroli',
    region: 'Dadra and Nagar Haveli',
    postalCode: '396235',
    country: 'IN',
    fullFormatted: 'Naroli–Bhilad Checkpost, Vadfaliya, Dadra & Nagar Haveli – 396235',
  },

  // Contact Channels
  contact: {
    whatsappNumber: '+91 99090 72390',
    whatsappClean: '919909072390',
    salesHotline: '+91 99090 72363',
    secondaryPhone: '+91 99090 62363',
    email: 'Dhanasviinfra@gmail.com',
    salesGalleryHours: '09:30 AM – 07:00 PM (All 7 Days)',
  },

  // Social Channels
  social: {
    instagram: 'https://www.instagram.com/advaitskyline/',
    facebook: 'https://www.facebook.com/profile.php?id=61590554242765',
    youtube: 'https://www.youtube.com/@ADVAITSKYLINE',
  },

  // Assets
  brochurePath: '/advait-skyline-official-brochure.pdf',
  brochureDownloadName: 'Advait-Skyline-Official-Brochure.pdf',
  brochurePageCount: 25,
} as const;

export type SiteConfig = typeof SITE_CONFIG;
