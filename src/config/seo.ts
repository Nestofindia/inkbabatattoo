/**
 * Site-wide and per-route SEO for https://inkbabatattoo.com/
 * Alternate domains must 301 to canonical (see netlify.toml).
 * Override VITE_SITE_URL in .env for staging builds.
 */

import {
  CANONICAL_SITE_URL,
  getHomeKeywords,
  getPageKeywords,
  type SeoKeywordPage,
} from './seoKeywords';

export function normalizePath(pathname: string): string {
  return pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname || '/';
}

export const SITE_NAME = 'Ink Baba Tattoo House';
export const SITE_TAGLINE = 'Spiritual Tattoo Art in Arambol, Goa';
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  CANONICAL_SITE_URL;

export const DEFAULT_OG_IMAGE =
  'https://inkbaba.s3.ap-south-1.amazonaws.com/Logo/Inkbaba+tattoo+house+black+.png';

/** Same-origin favicon for Google Search (see /public/favicon*.png) */
export const SITE_FAVICON_URL = `${CANONICAL_SITE_URL}/favicon-192x192.png`;

export const SITE_EMAIL = 'inkbabatattoostudio@gmail.com';
export const SITE_PHONE = '+917719099888';
export const SITE_PHONE_DISPLAY = '+91 77190 99888';
export const SITE_ADDRESS = {
  streetAddress: 'Khalcha Wada, Arambol Market Beach Road',
  addressLocality: 'Arambol',
  addressRegion: 'Goa',
  postalCode: '403524',
  addressCountry: 'IN',
};
export const GEO_COORDINATES = '15.6866, 73.7043';

export const SOCIAL_LINKS = [
  'https://www.instagram.com/inkbabatattoohouse/',
  'https://www.facebook.com/inkbabatattoostudio',
  'https://wa.me/917719099888',
];

export type PageSchemaType =
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'ItemPage'
  | 'FAQPage';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface PageSeoConfig {
  path: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  breadcrumbs: BreadcrumbItem[];
  schemaType: PageSchemaType;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  /** ISO date for sitemap lastmod, e.g. 2026-05-22 */
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const suffix = ` | ${SITE_NAME}`;

export const PAGE_SEO: Record<string, PageSeoConfig> = {
  '/': {
    path: '/',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'Ink Baba Tattoo House in Arambol, Goa — custom spiritual tattoos, mandala art, sacred symbols, and hygienic body piercing. Walk-ins welcome. Book: +91 77190 99888.',
    keywords: getHomeKeywords(),
    h1: 'Ink Baba Tattoo House — Spiritual Tattoo Studio in Goa',
    breadcrumbs: [{ name: 'Home', path: '/' }],
    schemaType: 'WebPage',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: '2026-05-25',
  },
  '/about': {
    path: '/about',
    title: `About Ink Baba Tattoo Studio${suffix}`,
    description:
      'Meet Ink Baba Tattoo House in Arambol, Goa — our story, philosophy, and artists creating meaningful tattoos rooted in creativity and global styles.',
    keywords: getPageKeywords('about'),
    h1: 'Who We Are — Ink Baba Tattoo House',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
    schemaType: 'AboutPage',
    changefreq: 'monthly',
    priority: 0.85,
    lastmod: '2026-05-25',
  },
  '/gallery': {
    path: '/gallery',
    title: `Tattoo Gallery & Portfolio${suffix}`,
    description:
      'View original tattoo artwork by the Ink Baba family in Goa — sacred symbols, mandalas, portraits, blackwork, and custom designs from our Arambol studio.',
    keywords: getPageKeywords('gallery'),
    h1: "Our Artists' Tattoo Collection",
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Gallery', path: '/gallery' },
    ],
    schemaType: 'CollectionPage',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: '2026-05-25',
  },
  '/services': {
    path: '/services',
    title: `Spiritual Tattoo Services in Goa${suffix}`,
    description:
      'Explore spiritual tattoo services at Ink Baba, Arambol — sacred symbols, mandala art, spiritual portraits, and custom ritual tattoos with expert artists.',
    keywords: getPageKeywords('services'),
    h1: 'Our Spiritual Tattoo Services',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ],
    schemaType: 'WebPage',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: '2026-05-25',
  },
  '/tattoo-services': {
    path: '/tattoo-services',
    title: `Tattoo Services — Custom Art in Arambol${suffix}`,
    description:
      'Browse tattoo styles and guest artists at Ink Baba Tattoo House, Arambol, Goa — Abstract Realism, custom designs, and portfolios from world-class tattoo masters.',
    keywords: getPageKeywords('tattoo-services'),
    h1: 'Our Tattoo Services',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Tattoo Services', path: '/tattoo-services' },
    ],
    schemaType: 'ItemPage',
    changefreq: 'monthly',
    priority: 0.95,
    lastmod: '2026-05-25',
  },
  '/piercing-services': {
    path: '/piercing-services',
    title: `Body Piercing Services in Goa${suffix}`,
    description:
      'Professional body piercing at Ink Baba Tattoo House, Arambol — safe, hygienic procedures, UK-standard aftercare, nose & ear piercing by experienced staff.',
    keywords: getPageKeywords('piercing-services'),
    h1: 'Our Piercing Services',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Piercing Services', path: '/piercing-services' },
    ],
    schemaType: 'ItemPage',
    changefreq: 'monthly',
    priority: 0.95,
    lastmod: '2026-05-25',
  },
  '/healing-rituals': {
    path: '/healing-rituals',
    title: `Healing Ritual Tattoo Experiences${suffix}`,
    description:
      'Healing ritual tattoos at Ink Baba, Goa — meaningful art for life transitions, intention-setting, and spiritual journeys in a calm Arambol studio.',
    keywords: getPageKeywords('healing-rituals'),
    h1: 'Our Healing Rituals Services',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Healing Rituals', path: '/healing-rituals' },
    ],
    schemaType: 'WebPage',
    changefreq: 'monthly',
    priority: 0.75,
    lastmod: '2026-05-25',
  },
  '/tattoo-retreat': {
    path: '/tattoo-retreat',
    title: `Tattoo Retreat Experience in Goa${suffix}`,
    description:
      'Immersive tattoo retreat at Ink Baba Tattoo House, Arambol, Goa — connect with art, spirituality, and skilled artists in a relaxed beach-side studio.',
    keywords: getPageKeywords('tattoo-retreat'),
    h1: 'Our Tattoo Retreat Services',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Tattoo Retreat', path: '/tattoo-retreat' },
    ],
    schemaType: 'WebPage',
    changefreq: 'monthly',
    priority: 0.75,
    lastmod: '2026-05-25',
  },
  '/contact': {
    path: '/contact',
    title: `Book Tattoo or Piercing — Contact${suffix}`,
    description:
      'Book at Ink Baba Tattoo House, Arambol, Goa. Address: Khalcha Wada, Beach Road. Call +91 77190 99888, WhatsApp, or email inkbabatattoostudio@gmail.com.',
    keywords: getPageKeywords('contact'),
    h1: 'Connect With Ink Baba Tattoo House',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
    schemaType: 'ContactPage',
    changefreq: 'monthly',
    priority: 0.95,
    lastmod: '2026-05-25',
  },
  '/testimonials': {
    path: '/testimonials',
    title: `Client Reviews & Testimonials${suffix}`,
    description:
      'Read real client reviews for Ink Baba Tattoo House, Goa — tattoo and piercing experiences from travelers and locals who trust our Arambol studio.',
    keywords: getPageKeywords('testimonials'),
    h1: 'Client Testimonials',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Testimonials', path: '/testimonials' },
    ],
    schemaType: 'WebPage',
    changefreq: 'weekly',
    priority: 0.85,
    lastmod: '2026-05-25',
  },
  '/faq': {
    path: '/faq',
    title: `Tattoo FAQ${suffix}`,
    description:
      'Answers to common questions about tattoo styles, booking, aftercare, payments, and consultations at Ink Baba Tattoo House in Arambol, Goa.',
    keywords: getPageKeywords('faq'),
    h1: 'Frequently Asked Questions',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ],
    schemaType: 'FAQPage',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: '2026-05-25',
  },
  '/terms-and-conditions': {
    path: '/terms-and-conditions',
    title: `Terms & Conditions${suffix}`,
    description:
      'Booking, deposit, rescheduling, aftercare, and studio policies for Ink Baba Tattoo House in Arambol, Goa. Read before your appointment.',
    keywords: getPageKeywords('terms'),
    h1: 'Terms & Conditions',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    ],
    schemaType: 'WebPage',
    changefreq: 'yearly',
    priority: 0.5,
    lastmod: '2026-05-25',
  },
  '*': {
    path: '/404',
    title: `Page Not Found${suffix}`,
    description:
      'This page does not exist. Visit Ink Baba Tattoo House in Arambol, Goa for spiritual tattoos and professional piercing.',
    keywords: getPageKeywords('404'),
    h1: 'Page Not Found',
    breadcrumbs: [{ name: 'Home', path: '/' }],
    schemaType: 'WebPage',
    noindex: true,
  },
};

export const PRERENDER_ROUTES = Object.keys(PAGE_SEO).filter((p) => p !== '*');

export function getStaticSeoForPath(pathname: string): PageSeoConfig {
  const normalized = normalizePath(pathname);
  return PAGE_SEO[normalized] ?? PAGE_SEO['*'];
}

/** Loads tattoo artist SEO on demand so the catalog chunk stays out of the main bundle. */
export async function resolveSeoForPath(pathname: string): Promise<PageSeoConfig> {
  const normalized = normalizePath(pathname);

  if (normalized.startsWith('/tattoo-services')) {
    const { getTattooSeoForPath } = await import('./tattooArtists');
    const tattooSeo = getTattooSeoForPath(normalized);
    if (tattooSeo) return tattooSeo;
  }

  return getStaticSeoForPath(pathname);
}

/** Sync fallback for initial render; tattoo routes use generic listing SEO until resolved. */
export function getSeoForPath(pathname: string): PageSeoConfig {
  const normalized = normalizePath(pathname);

  if (normalized.startsWith('/tattoo-services')) {
    return PAGE_SEO['/tattoo-services'];
  }

  return getStaticSeoForPath(pathname);
}

export function getCanonicalUrl(path: string): string {
  const cleanPath = path === '/' ? '' : path;
  return `${SITE_URL}${cleanPath}`;
}

/** Re-export for artist/category SEO in tattooArtists.ts */
export { getPageKeywords, type SeoKeywordPage };

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}
