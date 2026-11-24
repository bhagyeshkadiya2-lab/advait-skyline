export interface GalleryItem {
  id: string;
  category: 'all' | 'exterior' | 'interiors' | 'amenities' | 'commercial' | 'floor-plans' | 'construction';
  src: string;
  alt: string;
  title: string;
  isRender: boolean;
  aspectRatio: 'square' | 'portrait' | 'landscape';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'hero-tower',
    category: 'exterior',
    src: '/hero-bg.jpg',
    alt: 'Advait Skyline G+14 Residential and Commercial Architectural Tower',
    title: 'G+14 Skyscraper Exterior Perspective',
    isRender: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'street-view',
    category: 'exterior',
    src: '/about-bg.jpg',
    alt: 'Advait Skyline Street View on Naroli–Silvassa Main Road',
    title: 'Arterial Main Road Streetscape',
    isRender: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'swimming-pool',
    category: 'amenities',
    src: '/pool-bg.jpg',
    alt: 'Swimming Pool with Deck at Advait Skyline',
    title: 'Resort Swimming Pool & Deck',
    isRender: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'gymnasium',
    category: 'amenities',
    src: '/gym-bg.jpg',
    alt: 'Commercial Gym & Fitness Arena for Men and Women',
    title: 'Dual Wing Fitness Gymnasium',
    isRender: true,
    aspectRatio: 'portrait',
  },
  {
    id: 'clubhouse',
    category: 'amenities',
    src: '/clubhouse-bg.jpg',
    alt: 'Grand Clubhouse & Banquet Gathering Lounge',
    title: 'Community Clubhouse & Banquet Space',
    isRender: true,
    aspectRatio: 'landscape',
  },
  {
    id: 'commercial-frontage',
    category: 'commercial',
    src: '/commercial-bg.jpg',
    alt: 'Commercial Retail Shopfront with 5ft Otta',
    title: 'Street-Facing Retail Showcase (Shops 1–20)',
    isRender: true,
    aspectRatio: 'portrait',
  },
  {
    id: '1bhk-layout',
    category: 'floor-plans',
    src: '/1bhk-layout.jpg',
    alt: '1 BHK 3D Isometric Layout Plan — 511 Sq. Ft. Carpet',
    title: '1 BHK Technical Floor Plan',
    isRender: true,
    aspectRatio: 'square',
  },
  {
    id: '2bhk-layout',
    category: 'floor-plans',
    src: '/2bhk-layout.jpg',
    alt: '2 BHK 3D Isometric Layout Plan — 573 Sq. Ft. Carpet',
    title: '2 BHK Technical Floor Plan',
    isRender: true,
    aspectRatio: 'square',
  },
];
