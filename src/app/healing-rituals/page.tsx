import type { Metadata } from 'next';
import { PAGE_SEO } from '@/config/seo';
import { toMetadata } from '@/lib/seo-meta';
import { PageStructuredData } from '@/components/seo/StructuredData';
import HealingRitualsView from '@/views/HealingRitualsView';

const seo = PAGE_SEO['/healing-rituals'];

export const metadata: Metadata = toMetadata(seo);

export default function Page() {
  return (
    <>
      <PageStructuredData seo={seo} />
      <h1 className="sr-only">{seo.h1}</h1>
      <HealingRitualsView />
    </>
  );
}
