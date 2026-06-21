'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import LazyImage from '@/components/shared/LazyImage';
import type { SeasonArtistCardData } from '@/lib/seasonArtistCards';

interface SeasonArtistCardProps {
  artist: SeasonArtistCardData;
  index: number;
}

const SeasonArtistCard: React.FC<SeasonArtistCardProps> = ({ artist, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    className="overflow-hidden rounded-2xl border-2 border-traditional-200 bg-white shadow-traditional transition-all duration-300 hover:border-accent-300 hover:shadow-accent"
  >
    <Link href={artist.href} className="group block">
      <div className="grid gap-0 md:grid-cols-[200px_1fr]">
        <div className="aspect-[4/5] md:aspect-auto md:min-h-[260px]">
          <LazyImage
            src={artist.image}
            alt={`${artist.name} — ${artist.specialty}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            eager={index < 2}
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-7">
          <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-300 bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-700">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden />
            Season booking open
          </span>
          <span className="mb-2 inline-flex w-fit rounded-full border border-traditional-200 bg-traditional-50 px-3 py-1 text-xs font-semibold text-traditional-700">
            {artist.specialty}
          </span>
          <h2 className="mb-2 text-2xl font-heading font-bold text-traditional-900">
            {artist.name} {artist.countryFlag}
          </h2>
          <p className="mb-5 text-base font-semibold leading-snug text-accent-700">{artist.subtitle}</p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-traditional-800 transition-colors group-hover:text-accent-700">
            View profile & book
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

export default SeasonArtistCard;
