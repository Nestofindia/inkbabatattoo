'use client';

import React from 'react';
import Link from 'next/link';
import {
  SEASON_ARTISTS,
  SEASON_TICKER_MESSAGES,
  getSeasonArtistPath,
} from '@/config/seasonBookings';

const SeasonBookingTicker: React.FC = () => {
  const tickerItems = [
    ...SEASON_TICKER_MESSAGES,
    ...SEASON_ARTISTS.filter((a) => a.bookingEnabled).map(
      (a) => `Book ${a.displayName} → ${getSeasonArtistPath(a)}`
    ),
  ];

  const duplicated = [...tickerItems, ...tickerItems];

  return (
    <div className="relative z-30 w-full overflow-hidden bg-traditional-900 text-white border-y border-accent-500/40">
      <div className="flex animate-season-ticker whitespace-nowrap py-3">
        {duplicated.map((text, index) => (
          <span key={`${index}-${text.slice(0, 24)}`} className="inline-flex items-center shrink-0">
            <span className="px-8 text-sm sm:text-base font-body tracking-wide">{text}</span>
            <span className="text-accent-400" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-traditional-900 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-traditional-900 to-transparent pointer-events-none" />

      {/* Screen-reader friendly links */}
      <div className="sr-only">
        {SEASON_ARTISTS.filter((a) => a.bookingEnabled).map((artist) => (
          <Link key={artist.id} href={getSeasonArtistPath(artist)}>
            Book {artist.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeasonBookingTicker;
