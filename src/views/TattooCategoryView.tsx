'use client';

import React from 'react';
import PageTransition from '@/components/utils/PageTransition';
import TattooPageHero from '@/components/services/TattooPageHero';
import TattooArtistGridCard from '@/components/services/TattooArtistGridCard';
import { tattooServicesPath } from '@/config/tattooArtists';
import type { TattooCategoryGroup } from '@/config/tattooArtists.types';

const TattooCategoryView: React.FC<{ category: TattooCategoryGroup }> = ({ category }) => {
  return (
    <PageTransition>
      <TattooPageHero
        title={category.name}
        subtitle={`Meet ${category.name} artists at Ink Baba Tattoo House — view profiles and portfolio work.`}
        backHref={tattooServicesPath()}
        backLabel="All Tattoo Styles"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {category.artists.map((artist, index) => (
              <TattooArtistGridCard key={artist.id} artist={artist} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TattooCategoryView;
