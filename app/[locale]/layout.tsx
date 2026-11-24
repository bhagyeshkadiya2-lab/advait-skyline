import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import {
  Cormorant_Garamond,
  Manrope,
  Noto_Sans_Devanagari,
  Noto_Sans_Gujarati,
} from 'next/font/google';

import { routing } from '@/i18n/routing';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import WhatsAppFab from '@/components/lead/WhatsAppFab';
import MobileStickyBar from '@/components/lead/MobileStickyBar';
import JsonLd from '@/components/seo/JsonLd';
import { createPageMetadata } from '@/lib/seo';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-devanagari',
  display: 'swap',
});

const notoGujarati = Noto_Sans_Gujarati({
  subsets: ['gujarati', 'latin'],
  weight: ['400', '600', '700'],
  variable: '--font-gujarati',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata({ locale, path: '/' });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'hi' | 'gu')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  // Set font variable according to active locale
  const fontClasses = `${cormorant.variable} ${manrope.variable} ${notoDevanagari.variable} ${notoGujarati.variable}`;

  return (
    <html lang={locale} className={fontClasses}>
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C1J16Y1GK0"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C1J16Y1GK0');
            `,
          }}
        />

        {/* Google Tag Manager Container */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WBBMP8KS');
            `,
          }}
        />

        {/* Meta Pixel Code (920062824418320) */}
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '920062824418320');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Core Structured Data */}
        <JsonLd locale={locale} type="home" />
      </head>

      <body className="bg-[#FBF8F2] text-[#2A1F18] font-sans antialiased selection:bg-[#D9A21B] selection:text-[#1E130C]">
        {/* GTM Noscript Fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBBMP8KS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-[#7B4F2E] focus:text-[#F2D27A] focus:px-6 focus:py-3 focus:rounded-md focus:font-bold focus:shadow-2xl focus:border focus:border-[#D9A21B] focus:outline-none"
        >
          Skip to main content
        </a>

        <NextIntlClientProvider messages={messages}>
          <SmoothScroll />
          <TopBar />
          <Header />
          <div id="main-content">{children}</div>
          <Footer />
          <WhatsAppFab />
          <MobileStickyBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
