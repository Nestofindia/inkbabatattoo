'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import LazyImage from '../shared/LazyImage';
import { TATTOO_ARTISTS } from '@/config/tattooArtists';
import { tattooArtistPath } from '@/config/tattooArtists.paths';

const ArtistShowcaseSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const amount = window.innerWidth < 640 ? 300 : 360;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const carousel = scrollRef.current;
    if (!carousel) return;

    const timer = window.setInterval(() => {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      if (carousel.scrollLeft >= maxScrollLeft - 10) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      const amount = window.innerWidth < 640 ? 300 : 360;
      carousel.scrollBy({ left: amount, behavior: 'smooth' });
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-traditional-200 bg-white py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(234,139,64,0.06),_transparent_32%)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center gap-4 text-center sm:mb-12">
          <div className="mb-2 flex items-center justify-center gap-2 sm:mb-4">
            <div className="h-px w-12 bg-traditional-400" />
            <Heart className="h-6 w-6 text-accent-500" />
            <div className="h-px w-12 bg-traditional-400" />
          </div>

          <h2 className="max-w-3xl font-special text-3xl font-bold text-traditional-900 sm:text-4xl md:text-5xl">
            Our <span className="font-logo font-condensed-bold text-accent-600">Artists</span>
          </h2>
          <p className="max-w-3xl px-2 text-base leading-relaxed text-traditional-600 sm:text-xl">
            Meet the visionaries behind each design — artists whose craft, intuition, and detail shape every piece we create.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {TATTOO_ARTISTS.map((artist) => {
            const href = tattooArtistPath(artist.categorySlug, artist.id);

            return (
              <Link
                key={artist.id}
                href={href}
                className="group block min-w-[260px] max-w-[260px] snap-start overflow-hidden rounded-[1.5rem] border border-traditional-200 bg-white shadow-traditional transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-accent sm:min-w-[290px] sm:max-w-[290px]"
              >
                <div className="relative overflow-hidden">
                  <LazyImage
                    src={artist.profileImage}
                    alt={`${artist.name} tattoo artist`}
                    className="h-[360px] w-full object-cover object-center grayscale contrast-[0.95] saturate-0 brightness-[1.04] transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: 'center 18%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-traditional-900/55 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {artist.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4 sm:p-5">
                  <h3 className="text-xl font-heading font-bold text-traditional-900 sm:text-2xl">
                    {artist.name} {artist.countryFlag}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-snug text-traditional-600">{artist.subtitle}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => scrollCarousel('left')}
            aria-label="Scroll artists left"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-traditional-200 bg-white text-traditional-800 shadow-soft transition hover:border-accent-300 hover:text-accent-700"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollCarousel('right')}
            aria-label="Scroll artists right"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-traditional-200 bg-white text-traditional-800 shadow-soft transition hover:border-accent-300 hover:text-accent-700"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArtistShowcaseSection;
