import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageStructuredData } from '@/components/seo/StructuredData';
import { toMetadata } from '@/lib/seo-meta';
import {
  getTattooCategories,
  getTattooCategoryBySlug,
  getTattooSeoForPath,
  tattooCategoryPath,
} from '@/config/tattooArtists';
import TattooCategoryView from '@/views/TattooCategoryView';

type Params = { categorySlug: string };

export function generateStaticParams(): Params[] {
  return getTattooCategories().map((category) => ({ categorySlug: category.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const seo = getTattooSeoForPath(tattooCategoryPath(params.categorySlug));
  if (!seo) return { title: 'Not Found', robots: { index: false, follow: false } };
  return toMetadata(seo);
}

export default function Page({ params }: { params: Params }) {
  const category = getTattooCategoryBySlug(params.categorySlug);
  if (!category) notFound();

  const seo = getTattooSeoForPath(tattooCategoryPath(params.categorySlug));

  return (
    <>
      {seo && <PageStructuredData seo={seo} />}
      {seo && <h1 className="sr-only">{seo.h1}</h1>}
      <TattooCategoryView category={category} />
    </>
  );
}
