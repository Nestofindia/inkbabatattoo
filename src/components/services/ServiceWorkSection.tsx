'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Play, X } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import LazyVideo from '../shared/LazyVideo';
import LazyImage from '../shared/LazyImage';
import HomeMobileScroll from '../shared/HomeMobileScroll';
import type { ServiceWorkItem } from '../../config/serviceWork';

interface ServiceWorkSectionProps {
  items: ServiceWorkItem[];
  title?: string;
  subtitle?: string;
}

const ServiceWorkSection: React.FC<ServiceWorkSectionProps> = ({
  items,
  title = 'Our Work',
  subtitle = 'A glimpse of the artistry, precision, and care behind every session at our studio.',
}) => {
  const [selectedItem, setSelectedItem] = useState<ServiceWorkItem | null>(null);

  const openLightbox = (item: ServiceWorkItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  if (items.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-traditional-50 to-warm-100 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-mandala-subtle opacity-20" aria-hidden />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader title={title} subtitle={subtitle} accent="work" />

        <HomeMobileScroll className="gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item group home-mobile-scroll-item home-mobile-scroll-item--gallery"
              initial={{ opacity: 1, y: 0 }}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                <div className="relative home-mobile-scroll-media w-full overflow-hidden bg-traditional-100">
                  {item.type === 'video' ? (
                    <>
                      <LazyVideo
                        priority={index < 3}
                        playWhenVisible={index >= 3}
                        src={item.src}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        muted
                        loop
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 pointer-events-none">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <Play className="w-8 h-8 text-white" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <LazyImage
                      src={item.src}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="gallery-item-overlay rounded-xl sm:rounded-2xl">
                  <div className="text-center p-3 sm:p-4 md:p-6">
                    <p className="text-accent-300 mb-1 text-sm sm:text-base font-body font-medium">
                      {item.category}
                    </p>
                    <p className="text-white/90 text-xs sm:text-sm font-body mb-3">{item.artist}</p>
                    <div className="w-12 sm:w-16 h-1 bg-accent-500 mx-auto mb-3 sm:mb-4 rounded-full" />
                    {item.type === 'video' && (
                      <button
                        type="button"
                        onClick={(e) => openLightbox(item, e)}
                        className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full text-white font-medium font-body hover:bg-white/30 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        <Eye size={14} className="sm:w-4 sm:h-4" />
                        Watch Video
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </HomeMobileScroll>
      </div>

      <AnimatePresence>
        {selectedItem && selectedItem.type === 'video' && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-traditional-900 bg-opacity-80 backdrop-blur-sm p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-traditional"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="text-white bg-traditional-800 bg-opacity-80 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-traditional-700 transition-colors duration-300"
                  aria-label="Close video"
                >
                  <X size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>
              <div className="relative aspect-[9/16] w-full bg-traditional-100">
                <LazyVideo
                  eager
                  src={selectedItem.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-accent-600 font-semibold font-body">{selectedItem.category}</p>
                <p className="text-traditional-600 text-sm mt-1">{selectedItem.artist}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceWorkSection;
