'use client';

import React from 'react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import LazyBackground from '@/components/shared/LazyBackground';

const GalleryView: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <LazyBackground
            className="absolute inset-0 bg-cover bg-center opacity-20"
            src="https://images.pexels.com/photos/5708072/pexels-photo-5708072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            backgroundPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pastel-100/90 via-warm-100/80 to-accent-100/90"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-traditional-300 rounded-full opacity-30 float-animation"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-400 rounded-full opacity-20 float-animation"></div>
          <div className="absolute inset-0 bg-mandala-subtle opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader 
            title="Artist's Collection" 
            subtitle="A gallery featuring the orignal work of our Inkbaba family"
            accent="gallery"
          />
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <GalleryGrid />
        </div>
      </section>
    </PageTransition>
  );
};

export default GalleryView;