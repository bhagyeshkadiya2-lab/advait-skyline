/**
 * Advait Skyline — Analytics & Event Tracking Engine
 * Supports Google Tag Manager (GTM-WBBMP8KS), GA4 (G-C1J16Y1GK0), Meta Pixel (920062824418320)
 * Adheres strictly to Zero-PII compliance and first-party UTM capture.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (...args: unknown[]) => void;
  }
}

export interface TrackingParams {
  cta_location?: string;
  page_type?: string;
  configuration?: '1bhk' | '2bhk' | 'commercial' | 'all';
  locale?: string;
  amenity_id?: string;
  plan_name?: string;
  guide_slug?: string;
  event_id?: string;
  [key: string]: unknown;
}

/**
 * Push an event to GTM dataLayer safely without hydration or SSR errors.
 */
export function pushDataLayerEvent(event: string, params: TrackingParams = {}) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    timestamp: new Date().toISOString(),
    ...params,
  });

  // Also bridge standard events to Meta Pixel if initialized
  if (typeof window.fbq === 'function') {
    switch (event) {
      case 'generate_lead':
        window.fbq('track', 'Lead', params);
        break;
      case 'site_visit_request':
        window.fbq('track', 'Schedule', params);
        break;
      case 'whatsapp_click':
        window.fbq('trackCustom', 'WhatsAppClick', params);
        break;
      case 'phone_click':
        window.fbq('trackCustom', 'PhoneClick', params);
        break;
      default:
        break;
    }
  }
}

/**
 * Capture UTM and Meta Click ID (fbclid) parameters from the query string
 * and store in a 30-day first-party cookie for CRM attribution.
 */
export function captureAttributionParams() {
  if (typeof window === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid'];
  const attribution: Record<string, string> = {};

  keys.forEach((key) => {
    const val = urlParams.get(key);
    if (val) attribution[key] = val;
  });

  if (Object.keys(attribution).length > 0) {
    try {
      const existing = getStoredAttribution();
      const merged = { ...existing, ...attribution };
      document.cookie = `advait_attr=${encodeURIComponent(JSON.stringify(merged))}; path=/; max-age=2592000; SameSite=Lax`;
    } catch {
      // Ignore cookie write errors
    }
  }
}

export function getStoredAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  try {
    const cookies = document.cookie.split(';');
    for (const c of cookies) {
      const [name, val] = c.trim().split('=');
      if (name === 'advait_attr' && val) {
        return JSON.parse(decodeURIComponent(val));
      }
    }
  } catch {
    // Return empty on parse fail
  }
  return {};
}

/**
 * Construct an encoded WhatsApp conversation link with attribution reference
 */
export function buildWhatsAppLink({
  phone = '919909072390',
  message,
  sourceRef,
}: {
  phone?: string;
  message: string;
  sourceRef?: string;
}): string {
  const cleanPhone = phone.replace(/\D/g, '');
  let fullMessage = message;

  if (sourceRef) {
    fullMessage += ` [Ref: ${sourceRef}]`;
  }

  const attribution = getStoredAttribution();
  if (attribution.utm_source) {
    fullMessage += ` (via ${attribution.utm_source})`;
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(fullMessage)}`;
}
