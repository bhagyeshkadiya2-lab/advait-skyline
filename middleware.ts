import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Intercept Google Search Console HTML verification file requests
  // e.g. /google1234567890abcdef.html -> returns exact verification string
  if (pathname.startsWith('/google') && pathname.endsWith('.html')) {
    const filename = pathname.replace(/^\//, '');
    return new NextResponse(`google-site-verification: ${filename}`, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/google:hash*.html',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
