import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const BASE_URL = "https://www.advaitskyline.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Advait Skyline — Premium 1 & 2 BHK Homes & Shops by Dhanasvi Infra",
  description: "Discover premium 1 & 2 BHK luxury residential apartments and modern commercial shopfronts at Advait Skyline, Naroli–Bhilad Checkpost, Dadra & Nagar Haveli. Developed by Dhanasvi Infra.",
  keywords: [
    "Advait Skyline",
    "Dhanasvi Infra",
    "Naroli Bhilad Checkpost apartments",
    "1 BHK flat Dadra and Nagar Haveli",
    "2 BHK luxury home Bhilad",
    "Commercial shop space Vadfaliya",
    "Real estate investment Dadra Nagar Haveli",
    "MAHA RERA real estate Dadra",
  ],
  category: "real estate",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "YOUR_GSC_VERIFICATION_CODE",
  },
  openGraph: {
    title: "Advait Skyline — Premium 1 & 2 BHK Homes & Shops by Dhanasvi Infra",
    description: "Discover premium 1 & 2 BHK luxury residential apartments and modern commercial shopfronts at Advait Skyline, Naroli–Bhilad Checkpost, Dadra & Nagar Haveli. Developed by Dhanasvi Infra.",
    url: BASE_URL,
    siteName: "Advait Skyline",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advait Skyline — Premium 1 & 2 BHK Homes & Shops by Dhanasvi Infra",
    description: "Discover premium 1 & 2 BHK luxury residential apartments and modern commercial shopfronts at Advait Skyline, Naroli–Bhilad Checkpost, Dadra & Nagar Haveli. Developed by Dhanasvi Infra.",
  },
};

// JSON-LD Structured Data Schema Configs
const apartmentSchema = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  "name": "Advait Skyline",
  "description": "Premium 1 & 2 BHK residential apartments and commercial shops at Naroli–Bhilad Checkpost, Vadfaliya, Dadra & Nagar Haveli. Developed by Dhanasvi Infra.",
  "url": BASE_URL,
  "image": `${BASE_URL}/opengraph-image`,
  "numberOfRooms": "1-2 BHK",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Gymnasium", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Club House", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Basketball Court", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Jogging Track", "value": true },
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Naroli–Bhilad Checkpost, Vadfaliya",
    "addressLocality": "Silvassa",
    "addressRegion": "Dadra and Nagar Haveli",
    "postalCode": "396235",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 20.22956,
    "longitude": 72.90993,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dhanasvi Infra",
  "url": BASE_URL,
  "email": "Dhanasviinfra@gmail.com",
  "telephone": ["+919909062363", "+919909072363"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vadfaliya",
    "addressRegion": "Dadra and Nagar Haveli",
    "postalCode": "396235",
    "addressCountry": "IN",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the RERA registration number for Advait Skyline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Advait Skyline is registered under MAHA RERA with registration number PM3000002600013.",
      },
    },
    {
      "@type": "Question",
      "name": "Where is Advait Skyline located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Advait Skyline is located at Naroli–Bhilad Checkpost, Vadfaliya, Dadra & Nagar Haveli – 396235, approximately 200m from the Bhilad Checkpost.",
      },
    },
    {
      "@type": "Question",
      "name": "What flat configurations are available at Advait Skyline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Advait Skyline offers premium 1 BHK (485 sq. ft.) and 2 BHK residential apartments, along with G+1 commercial retail shops.",
      },
    },
    {
      "@type": "Question",
      "name": "Who is the developer of Advait Skyline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Advait Skyline is developed by Dhanasvi Infra, based in Vadfaliya, Dadra & Nagar Haveli.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WBBMP8KS');`,
          }}
        />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        
        {/* Inject JSON-LD Schema Scripts in Head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(apartmentSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-brand-cream text-brand-charcoal font-body antialiased selection:bg-brand-copper selection:text-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBBMP8KS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Skip to main content link for keyboard accessibility (WCAG 2.1 compliance) */}
        <a 
          href="#overview" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-brand-copper focus:text-white focus:px-6 focus:py-3 focus:rounded-full focus:font-bold focus:shadow-2xl focus:border focus:border-brand-gold focus:outline-none"
        >
          Skip to Main Content
        </a>

        <PageLoader />
        <ScrollProgressBar />
        <CustomCursor />
        <ScrollToTop />
        <WhatsAppButton />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
