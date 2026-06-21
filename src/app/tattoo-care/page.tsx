import type { Metadata } from 'next';
import CareGuideView from '@/views/CareGuideView';
import { TATTOO_CARE } from '@/data/careGuides';
import { PAGE_SEO } from '@/config/seo';
import { toMetadata } from '@/lib/seo-meta';
import { PageStructuredData } from '@/components/seo/StructuredData';

const seo = PAGE_SEO['/tattoo-care'];

export const metadata: Metadata = toMetadata(seo);

export default function TattooCarePage() {
  return (
    <>
      <PageStructuredData seo={seo} />
      <h1 className="sr-only">{seo.h1}</h1>
      <CareGuideView guide={TATTOO_CARE} accent="accent" />
    </>
  );
}
