'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  SEASON_TICKER_CTA,
  SEASON_TICKER_MESSAGES,
  AVAILABLE_ARTISTS_PATH,
  getAvailableSeasonArtists,
  getSeasonArtistPath,
} from '@/config/seasonBookings';

/** Scroll speed — same px/s on all devices so every line is readable before the loop repeats. */
const TICKER_PIXELS_PER_SECOND = 72;

type TickerItem =
  | { kind: 'text'; content: string }
  | { kind: 'cta'; label: string; href: string };

/** CTA is always the second strip item, after the first season message. */
const TICKER_ITEMS: TickerItem[] = [
  { kind: 'text', content: SEASON_TICKER_MESSAGES[0] },
  { kind: 'cta', label: SEASON_TICKER_CTA.label, href: SEASON_TICKER_CTA.href },
  { kind: 'text', content: SEASON_TICKER_MESSAGES[1] },
  { kind: 'text', content: SEASON_TICKER_MESSAGES[2] },
];

function TickerSegment({ item }: { item: TickerItem }) {
  return (
    <span className="inline-flex shrink-0 items-center">
      {item.kind === 'cta' ? (
        <Link
          href={item.href}
          className="pointer-events-auto mx-6 inline-flex items-center rounded-full border border-accent-400 bg-accent-500/20 px-4 py-1.5 text-sm font-heading font-bold tracking-wide text-accent-200 transition-colors hover:bg-accent-500/35 hover:text-white sm:mx-8 sm:text-base"
        >
          {item.label}
        </Link>
      ) : (
        <span className="px-6 text-sm font-body tracking-wide sm:px-8 sm:text-base">{item.content}</span>
      )}
      <span className="text-accent-400" aria-hidden>
        ✦
      </span>
    </span>
  );
}

const SeasonBookingTicker: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [durationSec, setDurationSec] = useState(40);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const syncDuration = () => {
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth <= 0) return;
      setDurationSec(Math.max(halfWidth / TICKER_PIXELS_PER_SECOND, 28));
    };

    syncDuration();

    const observer = new ResizeObserver(syncDuration);
    observer.observe(track);
    window.addEventListener('resize', syncDuration);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncDuration);
    };
  }, []);

  return (
    <div className="relative z-30 w-full overflow-hidden border-y border-accent-500/40 bg-traditional-900 text-white">
      <div
        ref={trackRef}
        className="animate-season-ticker flex w-max whitespace-nowrap py-3"
        style={{ ['--ticker-duration' as string]: `${durationSec}s` }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <TickerSegment key={`${index}-${item.kind === 'text' ? item.content.slice(0, 16) : 'cta'}`} item={item} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-traditional-900 to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-traditional-900 to-transparent sm:w-16" />

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
