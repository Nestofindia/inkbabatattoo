import type { Metadata } from 'next';
import { PAGE_SEO } from '@/config/seo';
import NotFoundView from '@/views/NotFoundView';

const seo = PAGE_SEO['*'];

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <h1 className="sr-only">{seo.h1}</h1>
      <NotFoundView />
    </>
  );
}
