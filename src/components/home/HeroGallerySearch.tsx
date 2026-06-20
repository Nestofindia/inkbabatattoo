'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { tattooArtistPath } from '../../config/tattooArtists.paths';
import type { TattooArtistProfile } from '../../config/tattooArtists.types';

type SearchArtistsFn = (query: string, limit?: number) => TattooArtistProfile[];

const HeroGallerySearch: React.FC = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [searchArtists, setSearchArtists] = useState<SearchArtistsFn | null>(null);

  const collapse = useCallback(() => {
    setExpanded(false);
  }, []);

  const expand = useCallback(() => {
    setExpanded(true);
    window.setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  useEffect(() => {
    if (!expanded || searchArtists) return;

    import('../../config/tattooArtists').then((mod) => {
      setSearchArtists(() => mod.searchTattooArtists);
    });
  }, [expanded, searchArtists]);

  useEffect(() => {
    if (!expanded) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        collapse();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        collapse();
        inputRef.current?.blur();
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [expanded, collapse]);

  const results = useMemo(() => {
    if (!searchArtists) return [];
    return searchArtists(query, 8);
  }, [query, searchArtists]);

  const showDropdown = expanded && results.length > 0;

  const handleSelect = (categorySlug: string, artistId: string) => {
    setQuery('');
    collapse();
    router.push(tattooArtistPath(categorySlug, artistId));
  };

  const handleInputBlur = () => {
    // Allow mousedown on dropdown options before blur collapses the field
    window.setTimeout(() => {
      const active = document.activeElement;
      if (containerRef.current?.contains(active)) return;
      if (!expanded) return;
      // Keep expanded if user still has text; only collapse when empty
      if (!query.trim()) collapse();
    }, 150);
  };

  return (
    <div
      ref={containerRef}
      className={`relative transition-all duration-300 ease-out ${
        expanded ? 'w-[min(calc(100vw-2rem),36rem)]' : 'w-12'
      }`}
      onMouseEnter={() => {
        if (!expanded) expand();
      }}
      onClick={() => {
        if (!expanded) expand();
      }}
    >
      <div className="flex w-full flex-col-reverse gap-4">
        <div
          className={`relative z-10 flex h-12 w-full shrink-0 items-center overflow-hidden rounded-full border transition-all duration-300 ${
            expanded
              ? 'border-white/50 bg-white/90 px-4 shadow-lg backdrop-blur-md'
              : 'border-white/30 bg-white/20 px-3 backdrop-blur-md hover:bg-white/30'
          }`}
        >
          <Search
            className={`h-5 w-5 shrink-0 sm:h-6 sm:w-6 ${expanded ? 'text-traditional-700' : 'text-white'}`}
            aria-hidden
          />

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setExpanded(true)}
            onBlur={handleInputBlur}
            placeholder="Search artists"
            aria-label="Search artists"
            aria-expanded={showDropdown}
            aria-controls="hero-gallery-search-results"
            aria-autocomplete="list"
            autoComplete="off"
            tabIndex={expanded ? 0 : -1}
            className={`min-w-0 flex-1 bg-transparent font-body text-base text-traditional-900 outline-none placeholder:text-traditional-500 sm:text-lg transition-all duration-300 ${
              expanded ? 'ml-3 w-full opacity-100' : 'ml-0 w-0 opacity-0 pointer-events-none'
            }`}
          />
        </div>

        <AnimatePresence>
          {showDropdown && (
            <motion.div
              id="hero-gallery-search-results"
              role="listbox"
              aria-label="Artist search results"
              className="scrollbar-hide z-20 max-h-60 w-full overflow-y-auto rounded-xl border border-traditional-200 bg-white p-2 shadow-lg"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
            >
              {results.map((artist) => (
                <button
                  key={artist.id}
                  type="button"
                  role="option"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelect(artist.categorySlug, artist.id)}
                  className="block w-full rounded-lg px-2.5 py-2.5 text-left text-sm text-traditional-800 transition-colors hover:bg-accent-50 hover:text-accent-700 sm:text-base"
                >
                  {artist.category}
                  <span className="text-traditional-500"> · {artist.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroGallerySearch;
