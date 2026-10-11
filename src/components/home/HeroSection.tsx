import React from 'react';
import Link from 'next/link';
import HeroGallerySearch from './HeroGallerySearch';
import { HERO_VIDEO_URL } from '../../config/homeVideos';
import { WHATSAPP_URL } from '@/config/links';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-traditional-900">
        <video
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          // fetchPriority helps the browser prioritize the hero asset
          {...({ fetchPriority: 'high' } as React.VideoHTMLAttributes<HTMLVideoElement>)}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#120f0d]/85 via-[#120f0d]/60 to-[#120f0d]/30" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left">
          <h1 className="max-w-xl font-special text-4xl font-bold leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Best Tattoo Studio for <span className="text-accent-300">Custom Tattoo Designs</span> & Creative Ink Art.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-warm-100/80 sm:text-lg">
            Discover expert tattoo artists, custom designs, and professional tattooing experiences created around your personal style and story.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-accent-900/30 transition-all duration-300 hover:scale-[1.02] hover:bg-accent-400 hover:shadow-accent-700/30"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>

      {/* <div className="pointer-events-auto absolute bottom-6 left-1/2 z-20 flex w-full -translate-x-1/2 justify-center overflow-visible px-4 sm:bottom-8">
        <HeroGallerySearch />
      </div> */}
    </section>
  );
};

export default HeroSection;
