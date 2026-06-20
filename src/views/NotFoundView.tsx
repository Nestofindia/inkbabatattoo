'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFoundView: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal-900 flex flex-col items-center justify-center px-4 text-center py-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6" aria-hidden="true">404</p>
        <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
        <h2 className="text-2xl md:text-3xl font-heading text-white mb-4">Page Not Found</h2>
        <p className="text-silver-300 max-w-md mx-auto mb-8">
          The spiritual journey you seek appears to have led you to an unknown realm. 
          Let's guide you back to the path.
        </p>
        <Link 
          href="/" 
          className="btn-primary inline-flex items-center gap-2"
        >
          <Home size={18} /> Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundView;