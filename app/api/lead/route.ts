import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { PROJECT_DATA } from '@/lib/project-data';

// Rate limiting map (IP -> Array of request timestamps in ms)
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestHistory = new Map<string, number[]>();

const LeadSubmissionSchema = z.object({
  fullName: z.string().trim().min(2, 'Name must be at least 2 characters').max(60).optional(),
  name: z.string().trim().min(2).max(60).optional(),
  mobileNumber: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number')
    .optional(),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number')
    .optional(),
  configuration: z.enum(['1bhk', '2bhk', 'shop', 'office', 'commercial', 'not_sure', 'Not sure', 'all']).default('1bhk'),
  preferredDate: z.string().optional(),
  consentGiven: z.boolean().default(true),
  source: z.string().optional(),
  pageUrl: z.string().optional(),
  page: z.string().optional(),
  locale: z.string().optional(),
  attribution: z.record(z.string(), z.string()).optional(),
  botField: z.string().max(0, 'Spam detected').optional().default(''), // Honeypot field must be empty
}).refine((data) => data.fullName || data.name, {
  message: 'Full name is required',
  path: ['fullName'],
}).refine((data) => data.mobileNumber || data.mobile, {
  message: 'Valid 10-digit mobile number is required',
  path: ['mobileNumber'],
});

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const now = Date.now();
    const timestamps = ipRequestHistory.get(ip) || [];
    const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

    if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before trying again.' },
        { status: 429 }
      );
    }
    validTimestamps.push(now);
    ipRequestHistory.set(ip, validTimestamps);

    // 2. Parse & Validate Payload
    const body = await req.json();
    const parsed = LeadSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const resolvedName = (parsed.data.fullName || parsed.data.name || '').trim();
    const resolvedPhone = (parsed.data.mobileNumber || parsed.data.mobile || '').trim();
    const { configuration, preferredDate, attribution, locale, pageUrl, page, source } =
      parsed.data;

    // 3. Forward to n8n / Webhook / Google Sheets if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: resolvedName,
            mobileNumber: `+91${resolvedPhone}`,
            configuration,
            preferredDate: preferredDate || 'Not specified',
            submittedAt: new Date().toISOString(),
            locale: locale || 'en',
            pageUrl: pageUrl || page || 'https://www.advaitskyline.com',
            source: source || attribution?.utm_source || 'website-direct',
            attribution: attribution || {},
          }),
        });
      } catch (webhookErr) {
        // Log webhook error without crashing user request
        console.error('n8n Webhook forward error:', webhookErr);
      }
    }

    // 4. Construct deep WhatsApp confirmation link
    const waPhone = PROJECT_DATA.contact.whatsappLeadNumber.replace(/\D/g, '');
    const waText = encodeURIComponent(
      `Hello, I am ${resolvedName}. I just requested details for ${configuration.toUpperCase()} at Advait Skyline. Please share the brochure and quote.`
    );
    const whatsappRedirectUrl = `https://wa.me/${waPhone}?text=${waText}`;

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been received. Our sales team will connect shortly.',
        whatsappUrl: whatsappRedirectUrl,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('API /api/lead unhandled error:', err);
    return NextResponse.json(
      { error: 'An unexpected server error occurred. Please try WhatsApp directly.' },
      { status: 500 }
    );
  }
}
