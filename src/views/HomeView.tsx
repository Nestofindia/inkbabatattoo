'use client';

import React from 'react';
import PageTransition from '@/components/utils/PageTransition';
import HeroSection from '@/components/home/HeroSection';
import CredibilitySection from '@/components/home/CredibilitySection';
import SeasonBookingTicker from '@/components/home/SeasonBookingTicker';
import AboutPreview from '@/components/home/AboutPreview';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import ArtistShowcaseSection from '@/components/home/ArtistShowcaseSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import CarePreview from '@/components/home/CarePreview';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import { usePreloadVideos } from '@/hooks/usePreloadVideos';
import { HOME_PRELOAD_VIDEO_URLS } from '@/config/homeVideos';
// import ContactCTA from '@/components/home/ContactCTA';

const HomeView: React.FC = () => {
  usePreloadVideos(HOME_PRELOAD_VIDEO_URLS);

  return (
    <PageTransition>
      <HeroSection />
      <SeasonBookingTicker />
      <CredibilitySection />
      <AboutPreview />
      <GalleryPreview />
      <ArtistShowcaseSection />
      <ServicesPreview />
      <TestimonialsPreview />
      <HowItWorksSection />
      <CarePreview />
      {/* <ContactCTA /> */}
    </PageTransition>
  );
};

export default HomeView;