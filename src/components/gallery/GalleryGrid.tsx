'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Filter } from 'lucide-react';
import TattooArtistGridCard from '../services/TattooArtistGridCard';
import { galleryCategories } from '../../config/gallery';
import { getTattooArtistsByCategoryName } from '../../config/tattooArtists';

const GalleryGrid: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (
      categoryParam &&
      (galleryCategories as readonly string[]).includes(categoryParam)
    ) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const tattooArtistsForCategory = useMemo(
    () => getTattooArtistsByCategoryName(selectedCategory),
    [selectedCategory],
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      router.replace(pathname, { scroll: false });
      return;
    }
    router.replace(`${pathname}?category=${encodeURIComponent(category)}`, {
      scroll: false,
    });
  };

  const sectionTitle = selectedCategory === 'All' ? 'Our' : selectedCategory;

  return (
    <div>
      <div className="mb-12 sm:mb-16">
        <div className="mb-6 flex items-center justify-center gap-2 sm:mb-8">
          <Filter className="h-4 w-4 text-accent-500 sm:h-5 sm:w-5" />
          <span className="font-logo font-condensed-bold text-sm font-medium text-traditional-600 sm:text-base">
            Filter by Category
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2 px-2 sm:gap-3 md:gap-4">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full border-2 px-4 py-2 font-logo font-condensed-bold text-xs font-semibold transition-all duration-300 sm:px-6 sm:py-2 sm:text-sm md:px-8 md:py-3 md:text-base ${
                selectedCategory === category
                  ? 'scale-105 border-accent-500 bg-accent-500 text-white shadow-accent'
                  : 'border-traditional-300 bg-white text-traditional-600 hover:scale-105 hover:border-accent-400 hover:text-accent-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12 sm:mb-16">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="mb-2 text-xl font-heading font-bold text-traditional-900 sm:text-2xl">
            {sectionTitle}{' '}
            <span className="font-logo font-condensed-bold text-accent-600">Artists</span>
          </h2>
          <p className="text-sm text-traditional-600 sm:text-base">
            Select an artist to view their profile and portfolio.
          </p>
        </div>

        {tattooArtistsForCategory.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {tattooArtistsForCategory.map((artist, index) => (
              <TattooArtistGridCard key={artist.id} artist={artist} index={index} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-traditional-600">
            Artists in this style coming soon. Explore another category or check back later.
          </p>
        )}
      </div>
    </div>
  );
};

export default GalleryGrid;
