'use client';

import React from 'react';
import PageTransition from '@/components/utils/PageTransition';
import TattooPageHero from '@/components/services/TattooPageHero';
import TattooCategoryCard from '@/components/services/TattooCategoryCard';
import { getTattooCategories } from '@/config/tattooArtists';

const TattooServicesView: React.FC = () => {
  const categories = getTattooCategories();

  return (
    <PageTransition>
      <TattooPageHero
        title="Our Tattoo Services"
        subtitle="Browse tattoo styles and meet guest masters — meaningful art meets intention, story and soul."
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <h2 className="mb-3 text-2xl font-heading font-bold text-traditional-900 sm:text-3xl">
              Explore by <span className="font-logo font-condensed-bold text-accent-600">Style</span>
            </h2>
            <p className="text-base text-traditional-600 sm:text-lg">
              Choose a tattoo style to view artists and their portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <TattooCategoryCard key={category.slug} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TattooServicesView;
