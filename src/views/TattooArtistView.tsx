'use client';

import React from 'react';
import PageTransition from '@/components/utils/PageTransition';
import TattooPageHero from '@/components/services/TattooPageHero';
import TattooArtistDetail from '@/components/services/TattooArtistDetail';
import { galleryCategoryPath } from '@/config/gallery';
import type { TattooArtistProfile } from '@/config/tattooArtists.types';

const TattooArtistView: React.FC<{ artist: TattooArtistProfile }> = ({ artist }) => {
  return (
    <PageTransition>
      <TattooPageHero
        title={`${artist.name} ${artist.countryFlag}`}
        subtitle={artist.subtitle}
        backHref={galleryCategoryPath(artist.category)}
        backLabel={`Back to ${artist.category}`}
      />

      <TattooArtistDetail artist={artist} />
    </PageTransition>
  );
};

export default TattooArtistView;
