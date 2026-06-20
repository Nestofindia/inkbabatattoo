import React from 'react';
import LazyVideo from '../shared/LazyVideo';
import HeroGallerySearch from './HeroGallerySearch';
import { HERO_VIDEO_URL } from '../../config/homeVideos';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <LazyVideo
          eager
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" aria-hidden />
      </div>

      <div className="pointer-events-auto absolute bottom-6 left-1/2 z-20 flex w-full -translate-x-1/2 justify-center overflow-visible px-4 sm:bottom-8">
        <HeroGallerySearch />
      </div>
    </section>
  );
};

export default HeroSection;
