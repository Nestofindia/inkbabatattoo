import {
  DEFAULT_OG_IMAGE,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_TAGLINE,
  SITE_URL,
  SOCIAL_LINKS,
  type PageSeoConfig,
} from '@/config/seo';
import { SEO_KEYWORDS_MASTER } from '@/config/seoKeywords';
import { GOOGLE_REVIEWS_URL } from '@/config/links';
import { buildPageStructuredData } from '@/lib/seo-meta';

/** Renders a single application/ld+json script. Server component — no client JS. */
export function JsonLd({ id, data }: { id: string; data: object }) {
  return (
    <script
      type="application/ld+json"
      data-seo-id={id}
      // Schema JSON is trusted, build-time content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Per-page structured data (WebPage + Breadcrumbs + conditional Contact/FAQ/Service). */
export function PageStructuredData({ seo }: { seo: PageSeoConfig }) {
  const docs = buildPageStructuredData(seo);
  return (
    <>
      {docs.map((doc, i) => (
        <JsonLd key={i} id={`page-schema-${i}`} data={doc} />
      ))}
    </>
  );
}

/** Site-wide schemas emitted once in the root layout: TattooParlor, Organization, WebSite. */
export function GlobalStructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    '@id': `${SITE_URL}/#tattoo-parlor`,
    name: SITE_NAME,
    alternateName: [
      'Ink Baba Studio',
      'InkBaba Tattoo House',
      'Inkbaba Tattoo House',
      'inkbabatattoo',
      'inkbabatattoos',
    ],
    description: SITE_TAGLINE,
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: DEFAULT_OG_IMAGE,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    priceRange: '$$',
    knowsAbout: [...SEO_KEYWORDS_MASTER],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_ADDRESS.streetAddress,
      addressLocality: SITE_ADDRESS.addressLocality,
      addressRegion: SITE_ADDRESS.addressRegion,
      postalCode: SITE_ADDRESS.postalCode,
      addressCountry: SITE_ADDRESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 15.6866,
      longitude: 73.7043,
    },
    areaServed: [
      { '@type': 'City', name: 'Arambol' },
      { '@type': 'AdministrativeArea', name: 'Goa, India' },
      { '@type': 'Country', name: 'India' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '20:00',
    },
    sameAs: [...SOCIAL_LINKS, GOOGLE_REVIEWS_URL],
    hasMap:
      'https://www.google.com/maps/place/Inkbaba+Tattoo+House,+Khalchawada,+Arambol,+Goa+403524',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tattoo & Piercing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Custom Tattoo', areaServed: 'Goa, India' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Body Piercing', areaServed: 'Goa, India' },
        },
      ],
    },
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_PHONE,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: SOCIAL_LINKS,
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/contact`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      name: 'Book tattoo or piercing appointment',
    },
  };

  return (
    <>
      <JsonLd id="local-business" data={localBusiness} />
      <JsonLd id="organization" data={organization} />
      <JsonLd id="website" data={website} />
    </>
  );
}
