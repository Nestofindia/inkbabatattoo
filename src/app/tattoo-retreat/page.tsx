import type { Metadata } from 'next';
import { PAGE_SEO } from '@/config/seo';
import { toMetadata } from '@/lib/seo-meta';
import { PageStructuredData } from '@/components/seo/StructuredData';
import TattoRetreatView from '@/views/TattoRetreatView';

const seo = PAGE_SEO['/tattoo-retreat'];

export const metadata: Metadata = toMetadata(seo);

export default function Page() {
  return (
    <>
      <PageStructuredData seo={seo} />
      <h1 className="sr-only">{seo.h1}</h1>
      <TattoRetreatView />
    </>
  );
}
