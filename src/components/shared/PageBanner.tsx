'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageBannerProps {
  children: React.ReactNode;
  /** Tailwind vertical padding classes */
  padding?: string;
}

/** Light cream page hero — uniform background without image overlays or white gradient hotspots. */
const PageBanner: React.FC<PageBannerProps> = ({
  children,
  padding = 'py-24 sm:py-32',
}) => {
  return (
    <section className={`relative bg-warm-100 ${padding}`}>
      <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div className="absolute top-20 left-10 h-24 w-24 rounded-full border-2 border-traditional-300 opacity-30 float-animation" />
        <motion.div className="absolute bottom-20 right-10 h-32 w-32 rounded-full border-2 border-accent-400 opacity-20 float-animation" />
        <motion.div className="absolute inset-0 bg-mandala-subtle opacity-20" />
      </motion.div>
      {children}
    </section>
  );
};

export default PageBanner;
