import type { MetadataRoute } from 'next';
import { PAGE_SEO, getCanonicalUrl } from '@/config/seo';
import {
  getTattooCategories,
  getTattooSeoForPath,
  tattooCategoryPath,
  tattooArtistPath,
} from '@/config/tattooArtists';

type ChangeFreq = MetadataRoute.Sitemap[number]['changeFrequency'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static routes (everything in PAGE_SEO except the 404 wildcard)
  for (const [path, seo] of Object.entries(PAGE_SEO)) {
    if (path === '*' || seo.noindex) continue;
    entries.push({
      url: getCanonicalUrl(seo.path),
      lastModified: seo.lastmod ? new Date(seo.lastmod) : new Date(),
      changeFrequency: seo.changefreq as ChangeFreq,
      priority: seo.priority,
    });
  }

  // Dynamic tattoo category + artist routes
  getTattooCategories().forEach((category) => {
    const catPath = tattooCategoryPath(category.slug);
    const catSeo = getTattooSeoForPath(catPath);
    entries.push({
      url: getCanonicalUrl(catPath),
      lastModified: new Date(),
      changeFrequency: (catSeo?.changefreq as ChangeFreq) ?? 'monthly',
      priority: catSeo?.priority ?? 0.8,
    });

    category.artists.forEach((artist) => {
      const artistPath = tattooArtistPath(category.slug, artist.id);
      const artistSeo = getTattooSeoForPath(artistPath);
      entries.push({
        url: getCanonicalUrl(artistPath),
        lastModified: new Date(),
        changeFrequency: (artistSeo?.changefreq as ChangeFreq) ?? 'monthly',
        priority: artistSeo?.priority ?? 0.8,
      });
    });
  });

  // Guest season artist booking pages
  entries.push({
    url: getCanonicalUrl('/available-artists'),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  entries.push(
    ...['satish', 'omkar'].map((slug) => ({
      url: getCanonicalUrl(`/upcoming-season/${slug}`),
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFreq,
      priority: 0.85,
    }))
  );

  return entries;
}
