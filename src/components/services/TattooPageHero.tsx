import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import LazyBackground from '../shared/LazyBackground';

interface TattooPageHeroProps {
  title: string;
  subtitle: string;
  backHref?: string;
  backLabel?: string;
}

const TattooPageHero: React.FC<TattooPageHeroProps> = ({
  title,
  subtitle,
  backHref,
  backLabel = 'Back to Tattoo Services',
}) => {
  return (
    <section className="relative bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100 py-24 sm:py-32">
      <div className="absolute inset-0 z-0">
        <LazyBackground
          className="absolute inset-0 bg-cover bg-center opacity-20"
          src="https://images.pexels.com/photos/7236147/pexels-photo-7236147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          backgroundPosition="center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-100/90 via-warm-100/80 to-accent-100/90" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-24 w-24 rounded-full border-2 border-traditional-300 opacity-30 float-animation" />
        <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full border-2 border-accent-400 opacity-20 float-animation" />
        <div className="absolute inset-0 bg-mandala-subtle opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {backHref ? (
          <Link
            href={backHref}
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-traditional-700 transition-colors hover:text-accent-700"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            {backLabel}
          </Link>
        ) : null}

        <SectionHeader title={title} subtitle={subtitle} accent="services" />
      </div>
    </section>
  );
};

export default TattooPageHero;
