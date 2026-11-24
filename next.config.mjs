import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'advait-skyline.vercel.app',
          },
        ],
        destination: 'https://www.advaitskyline.com/:path*',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about-dhanasvi-infra',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
