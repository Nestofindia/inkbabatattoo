'use client';

import React from 'react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import TermsContent from '@/components/terms/TermsContent';
import { TERMS_ITEMS } from '@/data/terms';
import { WHATSAPP_URL } from '@/config/links';

const TermsView: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-traditional-300 rounded-full opacity-30 float-animation" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-400 rounded-full opacity-20 float-animation" />
          <div className="absolute inset-0 bg-mandala-subtle opacity-20" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader
            title="Terms & Conditions"
            subtitle="Please read these terms carefully before booking or receiving a tattoo at Ink Baba Tattoo House."
            accent="terms"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <TermsContent items={TERMS_ITEMS} />

        </div>
      </section>
    </PageTransition>
  );
};

export default TermsView;
