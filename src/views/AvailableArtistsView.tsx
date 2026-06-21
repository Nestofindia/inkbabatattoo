'use client';

import React from 'react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import SeasonArtistCard from '@/components/season/SeasonArtistCard';
import {
  SEASON_LABEL,
  getAvailableSeasonArtists,
} from '@/config/seasonBookings';
import { toSeasonArtistCard } from '@/lib/seasonArtistCards';

const AvailableArtistsView: React.FC = () => {
  const artists = getAvailableSeasonArtists().map(toSeasonArtistCard);

  return (
    <PageTransition>
      <section className="relative py-28 md:py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 bg-mandala-subtle opacity-20" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <SectionHeader
            title="Available Artists"
            subtitle={`Guest season ${SEASON_LABEL} — choose an artist, view their work, and book your session at Ink Baba, Arambol`}
            accent="team"
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-traditional-700 font-body leading-relaxed">
            Each card links to the artist&apos;s profile where you can browse their portfolio and pick a
            date and time for the upcoming season.
          </p>

          <div className="mx-auto flex max-w-4xl flex-col gap-8">
            {artists.map((artist, index) => (
              <SeasonArtistCard key={artist.id} artist={artist} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AvailableArtistsView;
