import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageStructuredData } from '@/components/seo/StructuredData';
import { toMetadata } from '@/lib/seo-meta';
import {
  getTattooCategories,
  getTattooArtistBySlug,
  getTattooSeoForPath,
  tattooArtistPath,
} from '@/config/tattooArtists';
import TattooArtistView from '@/views/TattooArtistView';

type Params = { categorySlug: string; artistSlug: string };

export function generateStaticParams(): Params[] {
  const params: Params[] = [];
  getTattooCategories().forEach((category) => {
    category.artists.forEach((artist) => {
      params.push({ categorySlug: category.slug, artistSlug: artist.id });
    });
  });
  return params;
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const seo = getTattooSeoForPath(tattooArtistPath(params.categorySlug, params.artistSlug));
  if (!seo) return { title: 'Not Found', robots: { index: false, follow: false } };
  return toMetadata(seo);
}

export default function Page({ params }: { params: Params }) {
  const artist = getTattooArtistBySlug(params.categorySlug, params.artistSlug);
  if (!artist) notFound();

  const seo = getTattooSeoForPath(tattooArtistPath(params.categorySlug, params.artistSlug));

  return (
    <>
      {seo && <PageStructuredData seo={seo} />}
      {seo && <h1 className="sr-only">{seo.h1}</h1>}
      <TattooArtistView artist={artist} />
    </>
  );
}
