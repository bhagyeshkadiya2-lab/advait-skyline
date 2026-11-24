import type { Metadata } from 'next';
import { PROJECT_DATA } from './project-data';

export const BASE_URL = 'https://www.advaitskyline.com';

export interface PageMetadataProps {
  locale: string;
  path?: string; // e.g. '/1-bhk-flats-naroli'
  titleKey?: string;
  descriptionKey?: string;
  customTitle?: string;
  customDescription?: string;
  keywords?: string[];
  ogImage?: string;
}

const DEFAULT_METADATA_BY_LOCALE: Record<string, { title: string; description: string; ogTitle: string }> = {
  en: {
    title: 'Advait Skyline | 1 & 2 BHK Flats in Naroli–Bhilad by Dhanasvi Infra',
    description: 'Explore Advait Skyline: G+14 residential and commercial landmark on Naroli–Silvassa main road, 200m from Naroli–Bhilad Checkpost. 39+ amenities, 1 & 2 BHK luxury flats and prime commercial shops.',
    ogTitle: 'Advait Skyline | 1 & 2 BHK Flats & Shops in Naroli–Bhilad',
  },
  hi: {
    title: 'अद्वैत स्काईलाइन | नरोली–भिलाड़ में 1 व 2 बीएचके फ्लैट्स और दुकानें — धनस्वी इन्फ्रा',
    description: 'अद्वैत स्काईलाइन: नरोली–सिलवासा मेन रोड, नरोली–भिलाड़ चेकपोस्ट से 200 मी. दूर G+14 आवासीय एवं कमर्शियल प्रोजेक्ट। 39+ एमिनिटीज, 1 और 2 बीएचके लक्जरी फ्लैट्स।',
    ogTitle: 'अद्वैत स्काईलाइन | नरोली–भिलाड़ में 1 और 2 बीएचके फ्लैट्स',
  },
  gu: {
    title: 'અદ્વૈત સ્કાયલાઇન | નરોલી–ભિલાડ ખાતે 1 અને 2 BHK ફ્લેટ્સ — ધનસ્વી ઇન્ફ્રા',
    description: 'અદ્વૈત સ્કાયલાઇન: નરોલી–સેલવાસ મેઇન રોડ, નરોલી–ભિલાડ ચેકપોસ્ટથી 200 મીટર દૂર G+14 રહેણાંક અને કોમર્શિયલ લેન્ડમાર્ક. 39+ સુવિધાઓ, 1 અને 2 BHK લક્ઝરી ફ્લેટ્સ.',
    ogTitle: 'અદ્વૈત સ્કાયલાઇન | નરોલી–ભિલાડ ખાતે 1 અને 2 BHK ફ્લેટ્સ',
  },
};

export function createPageMetadata({
  locale,
  path = '',
  customTitle,
  customDescription,
  keywords = [],
  ogImage = '/hero-bg.jpg',
}: PageMetadataProps): Metadata {
  const defaultMeta = DEFAULT_METADATA_BY_LOCALE[locale] || DEFAULT_METADATA_BY_LOCALE.en;
  const title = customTitle || defaultMeta.title;
  const description = customDescription || defaultMeta.description;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${BASE_URL}${locale === 'en' ? '' : `/${locale}`}${normalizedPath === '/' ? '' : normalizedPath}`;

  const defaultKeywords = [
    'Advait Skyline',
    'Dhanasvi Infra',
    'Flats in Naroli',
    'Flats near Bhilad',
    '1 BHK flat Naroli',
    '2 BHK flat Naroli',
    'Commercial shops Naroli Silvassa',
    'Naroli Bhilad Checkpost',
    'Dadra and Nagar Haveli real estate',
    'Advait Skyline RERA PM3000002600013',
  ];

  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-IN': `${BASE_URL}${normalizedPath === '/' ? '' : normalizedPath}`,
        'hi-IN': `${BASE_URL}/hi${normalizedPath === '/' ? '' : normalizedPath}`,
        'gu-IN': `${BASE_URL}/gu${normalizedPath === '/' ? '' : normalizedPath}`,
        'x-default': `${BASE_URL}${normalizedPath === '/' ? '' : normalizedPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: PROJECT_DATA.identity.name,
      locale: locale === 'hi' ? 'hi_IN' : locale === 'gu' ? 'gu_IN' : 'en_IN',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${PROJECT_DATA.identity.name} - ${PROJECT_DATA.identity.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
