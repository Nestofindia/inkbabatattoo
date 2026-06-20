'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import LazyImage from '../shared/LazyImage';
import type { ServiceWorkItem } from '../../config/serviceWork';

interface PiercingWorkGalleryProps {
  items: ServiceWorkItem[];
  /** Render inside an existing section (e.g. About page) without outer wrapper */
  embedded?: boolean;
  scrollClassName?: string;
  itemClassName?: string;
  imageClassName?: string;
  enlargeLabel?: string;
}

/** Grid gallery — 1 col mobile, 2 cols tablet, 3 cols desktop */
const DEFAULT_GRID_CLASS =
  'grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6';

const DEFAULT_ITEM_CLASS =
  'group relative w-full min-w-0 overflow-hidden rounded-xl border border-traditional-200 bg-traditional-50 text-left shadow-sm transition-all duration-300 hover:border-accent-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400';

const DEFAULT_IMAGE_CLASS =
  'aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105';

const SWIPE_THRESHOLD_PX = 48;

const PiercingWorkGallery: React.FC<PiercingWorkGalleryProps> = ({
  items,
  embedded = false,
  scrollClassName = DEFAULT_GRID_CLASS,
  itemClassName = DEFAULT_ITEM_CLASS,
  imageClassName = DEFAULT_IMAGE_CLASS,
  enlargeLabel = 'Tap to enlarge',
}) => {
  const touchStartXRef = useRef<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  }, []);

  const goToPrevious = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || current <= 0) return current;
      return current - 1;
    });
  }, []);

  const goToNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null || current >= items.length - 1) return current;
      return current + 1;
    });
  }, [items.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowLeft') goToPrevious();
      if (event.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex, closeModal, goToPrevious, goToNext]);

  const openImage = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const startX = touchStartXRef.current;
    const endX = event.changedTouches[0]?.clientX;
    touchStartXRef.current = null;

    if (startX == null || endX == null) return;

    const delta = endX - startX;
    if (delta > SWIPE_THRESHOLD_PX) goToPrevious();
    else if (delta < -SWIPE_THRESHOLD_PX) goToNext();
  };

  if (items.length === 0) return null;

  const isOpen = selectedIndex !== null;
  const activeItem = isOpen ? items[selectedIndex] : null;
  const canGoPrevious = isOpen && selectedIndex > 0;
  const canGoNext = isOpen && selectedIndex < items.length - 1;

  const modalNavButtonClass =
    'pointer-events-auto z-30 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-black/55 text-white backdrop-blur-sm transition-all hover:border-white/70 hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-30 sm:h-11 sm:w-11';

  const galleryGrid = (
    <div className={scrollClassName}>
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          className={itemClassName}
          onClick={() => openImage(index)}
          aria-label={`View image ${index + 1} of ${items.length}`}
        >
          <LazyImage
            src={item.src}
            alt={item.alt}
            className={imageClassName}
            loading={index < 6 ? 'eager' : 'lazy'}
          />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-traditional-900/50 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-xs font-body text-white/90">{enlargeLabel}</span>
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <>
      {embedded ? (
        <div className="mt-12">{galleryGrid}</div>
      ) : (
        <section className="bg-white pt-0 pb-10 sm:pb-12 lg:pb-14">
          <motion.div
            className="container mx-auto px-4 md:px-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            {galleryGrid}
          </motion.div>
        </section>
      )}

      <AnimatePresence>
        {isOpen && activeItem && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-traditional-900/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative z-10 flex shrink-0 items-center justify-between px-3 py-2 sm:px-6 sm:py-3"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-body text-white/90">
                {selectedIndex + 1} / {items.length}
              </p>
              <button
                type="button"
                onClick={closeModal}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close gallery"
              >
                <X size={20} />
              </button>
            </motion.div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-1 pb-2 pt-1 sm:gap-4 sm:px-4 sm:pb-4"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button
                type="button"
                onClick={goToPrevious}
                disabled={!canGoPrevious}
                className={`${modalNavButtonClass} absolute left-2 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0`}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              <div className="flex h-full min-h-0 w-full min-w-0 items-center justify-center px-11 sm:px-0">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`${activeItem.id}-${selectedIndex}`}
                    className="flex h-full w-full max-w-5xl items-center justify-center"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="max-h-[min(calc(100dvh-3.5rem),calc(100vh-3.5rem))] w-full max-w-[96vw] overflow-hidden rounded-xl sm:max-h-[min(calc(100dvh-7rem),calc(100vh-7rem))] sm:max-w-full sm:rounded-3xl">
                      <LazyImage
                        eager
                        src={activeItem.src}
                        alt={activeItem.alt}
                        className="max-h-[min(calc(100dvh-3.5rem),calc(100vh-3.5rem))] w-full object-contain sm:max-h-[min(calc(100dvh-7rem),calc(100vh-7rem))]"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={goToNext}
                disabled={!canGoNext}
                className={`${modalNavButtonClass} absolute right-2 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0`}
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PiercingWorkGallery;
