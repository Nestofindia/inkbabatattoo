import type { Metadata } from 'next';
import { PAGE_SEO } from '@/config/seo';
import { toMetadata } from '@/lib/seo-meta';
import { PageStructuredData } from '@/components/seo/StructuredData';
import TattooCoverUpInGoaView from '@/views/TattooCoverUpInGoaView';

const seo = PAGE_SEO['/tattoo-cover-up-in-goa'];

export const metadata: Metadata = toMetadata(seo);

export default function Page() {
  return (
    <>
      <PageStructuredData seo={seo} />
      <h1 className="sr-only">{seo.h1}</h1>
      <TattooCoverUpInGoaView />
    </>
  );
}
