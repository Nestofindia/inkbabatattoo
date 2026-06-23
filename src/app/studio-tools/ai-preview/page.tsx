import type { Metadata } from 'next';
import TattooDesignStudioView from '@/views/TattooDesignStudioView';

export const metadata: Metadata = {
  title: 'AI Tattoo Studio',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function Page() {
  return <TattooDesignStudioView />;
}
