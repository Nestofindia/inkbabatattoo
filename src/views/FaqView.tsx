'use client';

import React from 'react';
import Link from 'next/link';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { FAQ_ITEMS } from '@/data/faq';
import { WHATSAPP_URL } from '@/config/links';

const FaqView: React.FC = () => {
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
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about booking, designs, aftercare, and getting tattooed at Ink Baba Tattoo House."
            accent="faq"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <FaqAccordion items={FAQ_ITEMS} />

          <div className="max-w-4xl mx-auto mt-14 sm:mt-16 text-center">
            <p className="text-traditional-600 text-lg font-body mb-6">
              Still have questions? We&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg font-logo font-condensed-semibold"
              >
                Chat on WhatsApp
              </a>
              {/* <Link href="/contact" className="btn-outline text-lg font-logo font-condensed-semibold">
                Contact Us
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default FaqView;
