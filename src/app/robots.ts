import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/seo';
import { PRIVATE_STUDIO_TOOLS_PREFIX } from '@/config/privateRoutes';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [PRIVATE_STUDIO_TOOLS_PREFIX],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
