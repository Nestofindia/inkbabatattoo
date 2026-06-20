'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  accent?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false,
  accent
}) => {
  return (
    <motion.div 
      className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Decorative Header */}
      {accent && (
        <div className={`flex items-center ${centered ? 'justify-center' : 'justify-start'} gap-2 mb-6`}>
          <div className="w-12 h-px bg-traditional-400"></div>
          <Sparkles className="w-6 h-6 text-accent-500" />
          <div className="w-12 h-px bg-traditional-400"></div>
        </div>
      )}

      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-special font-bold mb-6 ${
        light ? 'text-white' : 'text-traditional-900'
      }`}>
        {title.includes(' ') ? (
          <>
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="font-logo font-condensed-bold text-accent-600">
              {title.split(' ').slice(-1)[0]}
            </span>
          </>
        ) : (
          title
        )}
      </h2>
      
      {subtitle && (
        <p className={`max-w-4xl ${centered ? 'mx-auto' : ''} text-xl leading-relaxed font-body ${
          light ? 'text-warm-200' : 'text-traditional-600'
        }`}>
          {subtitle}
        </p>
      )}
      
      <div className={`h-1 bg-accent-500 mt-8 rounded-full ${
        centered ? 'mx-auto w-24' : 'w-24'
      }`}></div>
    </motion.div>
  );
};

export default SectionHeader;