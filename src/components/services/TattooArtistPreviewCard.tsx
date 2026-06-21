'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LazyImage from '../shared/LazyImage';
import type { TattooArtistProfile } from '../../config/tattooArtists.types';
import { tattooArtistPath } from '../../config/tattooArtists.paths';

interface TattooArtistPreviewCardProps {
  artist: TattooArtistProfile;
  index: number;
}

const TattooArtistPreviewCard: React.FC<TattooArtistPreviewCardProps> = ({ artist, index }) => {
  const artistHref = tattooArtistPath(artist.categorySlug, artist.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="overflow-hidden rounded-2xl border-2 border-traditional-200 bg-white shadow-traditional transition-all duration-300 hover:border-accent-300 hover:shadow-accent"
    >
      <Link href={artistHref} className="group block">
        <div className="grid gap-0 md:grid-cols-[220px_1fr]">
          <div className="aspect-[4/5] md:aspect-auto md:min-h-[280px]">
            <LazyImage
              src={artist.profileImage}
              alt={`${artist.name} profile`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <span className="mb-3 inline-flex w-fit rounded-full border border-accent-300 bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-700">
              {artist.category}
            </span>
            <h3 className="mb-2 text-2xl font-heading font-bold text-traditional-900">
              {artist.name} {artist.countryFlag}
            </h3>
            <p className="mb-4 text-base font-semibold leading-snug text-accent-700">{artist.subtitle}</p>
            <p className="mb-6 line-clamp-3 text-traditional-600">{artist.about[0]}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-traditional-800 transition-colors group-hover:text-accent-700">
              View profile & work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>

      {/* Artist Instagram — hidden for now
      <div className="border-t border-traditional-200 px-6 py-3 sm:px-8">
        <a
          href={tattooArtistInstagramUrl(artist.instagramHandle)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-traditional-700 transition-colors hover:text-accent-700"
        >
          <Instagram size={16} aria-hidden />
          @{artist.instagramHandle}
        </a>
      </div>
      */}
    </motion.article>
  );
};

export default TattooArtistPreviewCard;
