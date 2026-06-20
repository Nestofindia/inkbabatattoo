import type { Metadata } from 'next';
import {
  DEFAULT_OG_IMAGE,
  GEO_COORDINATES,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_PHONE_DISPLAY,
  SITE_URL,
  buildBreadcrumbSchema,
  getCanonicalUrl,
  type PageSeoConfig,
} from '@/config/seo';
import { FAQ_ITEMS } from '@/data/faq';

const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

/**
 * Converts a route's PageSeoConfig into a Next.js Metadata object.
 * This replaces the imperative <head> mutation the SPA did in PageSEO.tsx —
 * now everything is emitted server-side for crawlers on first byte.
 */
export function toMetadata(seo: PageSeoConfig): Metadata {
  const canonicalUrl = getCanonicalUrl(seo.path);
  const noindex = seo.noindex === true;

  const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: noindex ? undefined : { canonical: canonicalUrl },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      type: seo.ogType ?? 'website',
      locale: 'en_IN',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — tattoo & piercing studio in Arambol, Goa`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [DEFAULT_OG_IMAGE],
    },
    other: {
      'geo.region': 'IN-GA',
      'geo.placename': 'Arambol, Goa, India',
      'geo.position': GEO_COORDINATES,
      ICBM: GEO_COORDINATES,
      language: 'English',
      rating: 'general',
      distribution: 'global',
      'revisit-after': '7 days',
    },
  };

  if (GOOGLE_VERIFICATION) {
    metadata.verification = { google: GOOGLE_VERIFICATION };
  }

  return metadata;
}

/**
 * Builds the array of per-page JSON-LD documents the SPA injected via PageSEO:
 * WebPage (or AboutPage/ContactPage/etc.), BreadcrumbList, and the conditional
 * ContactPage / FAQPage / Service blocks.
 */
export function buildPageStructuredData(seo: PageSeoConfig): object[] {
  if (seo.noindex) {
    // 404 / noindex pages only emit breadcrumbs (matches SPA behaviour).
    return [buildBreadcrumbSchema(seo.breadcrumbs)];
  }

  const canonicalUrl = getCanonicalUrl(seo.path);
  const fullAddress = `${SITE_ADDRESS.streetAddress}, ${SITE_ADDRESS.addressLocality}, ${SITE_ADDRESS.addressRegion} ${SITE_ADDRESS.postalCode}, India`;

  const docs: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': seo.schemaType,
      '@id': `${canonicalUrl}#webpage`,
      name: seo.title,
      headline: seo.h1,
      description: seo.description,
      url: canonicalUrl,
      inLanguage: 'en-IN',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#tattoo-parlor` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: DEFAULT_OG_IMAGE,
      },
    },
    buildBreadcrumbSchema(seo.breadcrumbs),
  ];

  if (seo.path === '/contact') {
    docs.push({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      url: canonicalUrl,
      mainEntity: {
        '@type': 'TattooParlor',
        name: SITE_NAME,
        telephone: SITE_PHONE_DISPLAY,
        email: SITE_EMAIL,
        address: fullAddress,
      },
    });
  }

  if (seo.path === '/faq') {
    docs.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  if (seo.path === '/tattoo-services' || seo.path === '/piercing-services') {
    docs.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: seo.path === '/piercing-services' ? 'Body Piercing' : 'Tattooing',
      provider: { '@id': `${SITE_URL}/#tattoo-parlor` },
      areaServed: { '@type': 'AdministrativeArea', name: 'Goa, India' },
      url: canonicalUrl,
    });
  }

  return docs;
}

export { SITE_PHONE };
