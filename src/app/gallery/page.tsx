import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PAGE_SEO } from '@/config/seo';
import { toMetadata } from '@/lib/seo-meta';
import { PageStructuredData } from '@/components/seo/StructuredData';
import GalleryView from '@/views/GalleryView';

const seo = PAGE_SEO['/gallery'];

export const metadata: Metadata = toMetadata(seo);

export default function Page() {
  return (
    <>
      <PageStructuredData seo={seo} />
      <h1 className="sr-only">{seo.h1}</h1>
      <Suspense fallback={null}>
        <GalleryView />
      </Suspense>
    </>
  );
}
