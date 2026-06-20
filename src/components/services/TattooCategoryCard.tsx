'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LazyImage from '../shared/LazyImage';
import type { TattooCategoryGroup } from '../../config/tattooArtists.types';
import { tattooCategoryPath } from '../../config/tattooArtists.paths';

interface TattooCategoryCardProps {
  category: TattooCategoryGroup;
  index: number;
}

const TattooCategoryCard: React.FC<TattooCategoryCardProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={tattooCategoryPath(category.slug)}
        className="group block overflow-hidden rounded-2xl border-2 border-traditional-200 bg-white shadow-traditional transition-all duration-300 hover:scale-[1.02] hover:border-accent-300 hover:shadow-accent"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <LazyImage
            src={category.coverImage}
            alt={`${category.name} tattoo style`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-traditional-900/70 via-traditional-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <span className="mb-2 inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              {category.artists.length} {category.artists.length === 1 ? 'Artist' : 'Artists'}
            </span>
            <h3 className="text-2xl font-heading font-bold text-white">{category.name}</h3>
          </div>
        </div>
        <div className="flex items-center justify-between px-5 py-4 sm:px-6">
          <span className="text-sm font-body text-traditional-600">View artists</span>
          <ArrowRight className="h-5 w-5 text-accent-600 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
};

export default TattooCategoryCard;
