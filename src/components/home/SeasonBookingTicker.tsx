'use client';

import React from 'react';
import Link from 'next/link';
import {
  SEASON_TICKER_CTA,
  SEASON_TICKER_MESSAGES,
  AVAILABLE_ARTISTS_PATH,
  getAvailableSeasonArtists,
  getSeasonArtistPath,
} from '@/config/seasonBookings';

type TickerItem =
  | { kind: 'text'; content: string }
  | { kind: 'cta'; label: string; href: string };

const SeasonBookingTicker: React.FC = () => {
  const tickerItems: TickerItem[] = [
    ...SEASON_TICKER_MESSAGES.map((content) => ({ kind: 'text' as const, content })),
    { kind: 'cta', label: SEASON_TICKER_CTA.label, href: SEASON_TICKER_CTA.href },
  ];

  const duplicated = [...tickerItems, ...tickerItems];

  return (
    <div className="relative z-30 w-full overflow-hidden bg-traditional-900 text-white border-y border-accent-500/40">
      <div className="flex animate-season-ticker whitespace-nowrap py-3">
        {duplicated.map((item, index) => (
          <span
            key={`${index}-${item.kind === 'text' ? item.content.slice(0, 20) : item.label.slice(0, 20)}`}
            className="inline-flex items-center shrink-0"
          >
            {item.kind === 'cta' ? (
              <Link
                href={item.href}
                className="mx-6 sm:mx-8 inline-flex items-center rounded-full border border-accent-400 bg-accent-500/20 px-4 py-1.5 text-sm sm:text-base font-heading font-bold tracking-wide text-accent-200 transition-colors hover:bg-accent-500/35 hover:text-white pointer-events-auto"
              >
                {item.label}
              </Link>
            ) : (
              <span className="px-8 text-sm sm:text-base font-body tracking-wide">{item.content}</span>
            )}
            <span className="text-accent-400" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>

      <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-traditional-900 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-traditional-900 to-transparent pointer-events-none" />

      <div className="sr-only">
        <Link href={AVAILABLE_ARTISTS_PATH}>View available season artists</Link>
        {getAvailableSeasonArtists().map((artist) => (
          <Link key={artist.id} href={getSeasonArtistPath(artist)}>
            Book {artist.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeasonBookingTicker;
