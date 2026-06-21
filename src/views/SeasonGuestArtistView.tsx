'use client';

import React from 'react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import ArtistSeasonBooking from '@/components/booking/ArtistSeasonBooking';
import LazyImage from '@/components/shared/LazyImage';
import type { SeasonArtistBooking } from '@/config/seasonBookings';

interface SeasonGuestArtistViewProps {
  artist: SeasonArtistBooking;
}

const SeasonGuestArtistView: React.FC<SeasonGuestArtistViewProps> = ({ artist }) => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 bg-mandala-subtle opacity-20" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader
            title={`${artist.name} ${artist.countryFlag ?? ''}`}
            subtitle={artist.subtitle ?? `Guest artist — upcoming season at Ink Baba, Arambol`}
            accent="team"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {artist.profileImage && (
              <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-traditional border-4 border-accent-200">
                <LazyImage
                  src={artist.profileImage}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                  eager
                />
              </div>
            )}
            <p className="text-lg text-traditional-700 font-body leading-relaxed">
              {artist.name} is part of our upcoming guest season at Ink Baba Tattoo House. Book your
              preferred date and time below — slots are limited during the November–March period.
            </p>
          </div>
        </div>
      </section>

      <ArtistSeasonBooking artist={artist} />
    </PageTransition>
  );
};

export default SeasonGuestArtistView;
