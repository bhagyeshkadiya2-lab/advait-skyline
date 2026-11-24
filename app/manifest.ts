import { MetadataRoute } from 'next';
import { PROJECT_DATA } from '@/lib/project-data';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PROJECT_DATA.identity.name} — ${PROJECT_DATA.identity.tagline}`,
    short_name: PROJECT_DATA.identity.name,
    description: '1 & 2 BHK Luxury Residences & Commercial Shops on Naroli–Silvassa Main Road, Dadra & Nagar Haveli',
    start_url: '/',
    display: 'standalone',
    background_color: '#1E130C',
    theme_color: '#7B4F2E',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
