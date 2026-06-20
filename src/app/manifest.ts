import type { MetadataRoute } from 'next';
import { SITE_NAME, SITE_TAGLINE } from '@/config/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'Ink Baba',
    description: SITE_TAGLINE,
    start_url: '/',
    display: 'standalone',
    background_color: '#FAD1A2',
    theme_color: '#C45C26',
    icons: [
      { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}
