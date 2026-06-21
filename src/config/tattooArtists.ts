import type { PageSeoConfig } from './seo';
import { getPageKeywords } from './seoKeywords';
import type { ServiceWorkItem } from './serviceWork';
import { TATTOO_ARTISTS } from './tattooArtists.data';
import type { TattooArtistProfile, TattooCategoryGroup } from './tattooArtists.types';
import {
  tattooArtistPath,
  tattooCategoryPath,
  tattooServicesPath,
} from './tattooArtists.paths';

export type {
  TattooArtistWorkItem,
  TattooArtistProfile,
  TattooCategoryGroup,
} from './tattooArtists.types';

export {
  slugifyTattooPath,
  tattooServicesPath,
  tattooCategoryPath,
  tattooArtistPath,
  tattooArtistInstagramUrl,
} from './tattooArtists.paths';

export { TATTOO_ARTISTS } from './tattooArtists.data';

const SITE_NAME = 'Ink Baba Tattoo House';

function registerArtistInCategory(
  map: Map<string, TattooCategoryGroup>,
  artist: TattooArtistProfile,
  name: string,
  slug: string,
) {
  const profile: TattooArtistProfile = { ...artist, category: name, categorySlug: slug };
  const existing = map.get(slug);
  if (existing) {
    existing.artists.push(profile);
    return;
  }

  map.set(slug, {
    name,
    slug,
    artists: [profile],
    coverImage: artist.profileImage,
  });
}

export function getTattooCategories(): TattooCategoryGroup[] {
  const map = new Map<string, TattooCategoryGroup>();

  TATTOO_ARTISTS.forEach((artist) => {
    registerArtistInCategory(map, artist, artist.category, artist.categorySlug);
    artist.alsoInCategories?.forEach(({ name, slug }) => {
      registerArtistInCategory(map, artist, name, slug);
    });
  });

  return Array.from(map.values());
}

function artistMatchesCategoryName(artist: TattooArtistProfile, categoryName: string): boolean {
  return (
    artist.category === categoryName ||
    Boolean(artist.alsoInCategories?.some((c) => c.name === categoryName))
  );
}

function withCategoryContext(
  artist: TattooArtistProfile,
  categoryName: string,
): TattooArtistProfile {
  if (artist.category === categoryName) return artist;
  const match = artist.alsoInCategories?.find((c) => c.name === categoryName);
  return match ? { ...artist, category: match.name, categorySlug: match.slug } : artist;
}

export function getTattooArtistsByCategoryName(categoryName: string): TattooArtistProfile[] {
  if (!categoryName || categoryName === 'All') return TATTOO_ARTISTS;
  return TATTOO_ARTISTS.filter((artist) => artistMatchesCategoryName(artist, categoryName)).map(
    (artist) => withCategoryContext(artist, categoryName),
  );
}

export function searchTattooArtists(query: string, limit = 8): TattooArtistProfile[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return TATTOO_ARTISTS.slice(0, limit);

  return TATTOO_ARTISTS.filter(
    (artist) =>
      artist.name.toLowerCase().includes(trimmed) ||
      artist.category.toLowerCase().includes(trimmed) ||
      artist.subtitle.toLowerCase().includes(trimmed) ||
      artist.alsoInCategories?.some((c) => c.name.toLowerCase().includes(trimmed)),
  ).slice(0, limit);
}

export function getTattooCategoryBySlug(categorySlug?: string): TattooCategoryGroup | undefined {
  if (!categorySlug) return undefined;
  return getTattooCategories().find((category) => category.slug === categorySlug);
}

export function getTattooArtistBySlug(
  categorySlug?: string,
  artistId?: string,
): TattooArtistProfile | undefined {
  if (!categorySlug || !artistId) return undefined;

  const category = getTattooCategoryBySlug(categorySlug);
  return category?.artists.find((artist) => artist.id === artistId);
}

export function toServiceWorkItems(artist: TattooArtistProfile): ServiceWorkItem[] {
  return artist.workItems.map((item) => ({
    id: item.id,
    type: 'image' as const,
    artist: artist.name,
    category: artist.category,
    src: item.src,
    alt: item.alt,
  }));
}

export function getTattooDynamicRoutes(): string[] {
  const routes: string[] = [];

  getTattooCategories().forEach((category) => {
    routes.push(tattooCategoryPath(category.slug));
    category.artists.forEach((artist) => {
      routes.push(tattooArtistPath(category.slug, artist.id));
    });
  });

  return routes;
}

export function getTattooSeoForPath(pathname: string): PageSeoConfig | null {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  const artistMatch = normalized.match(/^\/tattoo-services\/([^/]+)\/([^/]+)$/);
  if (artistMatch) {
    const [, categorySlug, artistId] = artistMatch;
    const artist = getTattooArtistBySlug(categorySlug, artistId);
    if (!artist) return null;

    const path = tattooArtistPath(categorySlug, artistId);
    return {
      path,
      title: `${artist.name} — ${artist.category} Tattoo Artist | ${SITE_NAME}`,
      description: `${artist.name} (${artist.category}) — ${artist.subtitle}. View portfolio and book at Ink Baba Tattoo House, Arambol, Goa.`,
      keywords: getPageKeywords('artist', [
        artist.name,
        `${artist.category} tattoo Goa`,
        `${artist.name} Ink Baba`,
        'tattoo artist Arambol',
      ]),
      h1: `${artist.name} ${artist.countryFlag}`,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Tattoo Services', path: tattooServicesPath() },
        { name: artist.category, path: tattooCategoryPath(categorySlug) },
        { name: artist.name, path },
      ],
      schemaType: 'ItemPage',
      changefreq: 'monthly',
      priority: 0.9,
    };
  }

  const categoryMatch = normalized.match(/^\/tattoo-services\/([^/]+)$/);
  if (categoryMatch) {
    const [, categorySlug] = categoryMatch;
    const category = getTattooCategoryBySlug(categorySlug);
    if (!category) return null;

    const path = tattooCategoryPath(categorySlug);
    return {
      path,
      title: `${category.name} Tattoo Artists | ${SITE_NAME}`,
      description: `Meet ${category.name} tattoo artists at Ink Baba Tattoo House, Arambol, Goa. Browse guest masters and view their portfolios.`,
      keywords: getPageKeywords('category', [
        `${category.name} tattoo Goa`,
        `${category.name} artist Arambol`,
        'Ink Baba tattoo styles',
      ]),
      h1: `${category.name} Artists`,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Tattoo Services', path: tattooServicesPath() },
        { name: category.name, path },
      ],
      schemaType: 'CollectionPage',
      changefreq: 'monthly',
      priority: 0.88,
    };
  }

  return null;
}
