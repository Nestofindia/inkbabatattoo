'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LazyImage from '../shared/LazyImage';
import type { TattooArtistProfile } from '../../config/tattooArtists.types';
import { tattooArtistPath } from '../../config/tattooArtists.paths';

interface TattooArtistGridCardProps {
  artist: TattooArtistProfile;
  index: number;
}

const TattooArtistGridCard: React.FC<TattooArtistGridCardProps> = ({ artist, index }) => {
  const artistHref = tattooArtistPath(artist.categorySlug, artist.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="h-full"
    >
      <Link
        href={artistHref}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-traditional-200 bg-white shadow-traditional transition-all duration-300 hover:scale-[1.02] hover:border-accent-300 hover:shadow-accent"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <LazyImage
            src={artist.profileImage}
            alt={`${artist.name} profile`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-traditional-900/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <span className="mb-2 inline-flex w-fit rounded-full border border-accent-300 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
            {artist.category}
          </span>
          <h3 className="mb-1 text-lg font-heading font-bold text-traditional-900 sm:text-xl">
            {artist.name} {artist.countryFlag}
          </h3>
          <p className="line-clamp-2 text-sm font-semibold leading-snug text-accent-700">{artist.subtitle}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default TattooArtistGridCard;
