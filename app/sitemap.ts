import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';
import { BLOG_POSTS } from '@/content/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = BLOG_POSTS.map((post) => `/blog/${post.slug}`);

  const routes = [
    '',
    '/1-bhk-flats-naroli',
    '/2-bhk-flats-naroli',
    '/1-bhk-vs-2-bhk',
    '/flats-in-silvassa',
    '/flats-near-silvassa',
    '/flats-near-bhilad-vapi',
    '/price-and-payment-plan',
    '/amenities',
    '/floor-plans',
    '/commercial-shops-naroli',
    '/project-location',
    '/directions',
    '/gallery',
    '/construction-updates',
    '/about-dhanasvi-infra',
    '/contact',
    '/blog',
    ...blogRoutes,
    '/guides',
    '/guides/buying-flat-in-naroli',
    '/guides/rera-property-guide',
    '/guides/home-loan-guide',
    '/privacy-policy',
    '/terms-and-disclaimer',
  ];

  const locales = ['en', 'hi', 'gu'];
  const lastModified = new Date();

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      const localePrefix = locale === 'en' ? '' : `/${locale}`;
      const url = `${BASE_URL}${localePrefix}${route}`;

      sitemapEntries.push({
        url,
        lastModified,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route.includes('flats') || route.includes('commercial') ? 0.9 : 0.8,
        alternates: {
          languages: {
            'en-IN': `${BASE_URL}${route}`,
            'hi-IN': `${BASE_URL}/hi${route}`,
            'gu-IN': `${BASE_URL}/gu${route}`,
            'x-default': `${BASE_URL}${route}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
