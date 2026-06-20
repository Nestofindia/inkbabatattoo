'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import TestimonialExcerpt from './TestimonialExcerpt';

interface TestimonialCardProps {
  name: string;
  image: string;
  text: string;
  rating: number;
  tattoo?: string;
  index: number;
  date?: string;
  /** Skip entrance animation when inside a horizontal carousel */
  inCarousel?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  rating,
  index,
  date,
  inCarousel = false,
}) => {
  return (
    <motion.div
      className="card-traditional group h-full hover:scale-105"
      initial={inCarousel ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      {...(inCarousel
        ? {}
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-100px' },
            transition: { duration: 0.5, delay: index * 0.1 },
          })}
    >
      <div className="flex h-full flex-col p-8 text-center">
        <div className="mb-6">
          <Quote className="w-12 h-12 text-accent-500 mx-auto opacity-60" />
        </div>

        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={`mx-1 ${i < rating ? 'text-accent-500' : 'text-traditional-300'}`}
              fill={i < rating ? 'currentColor' : 'none'}
            />
          ))}
        </div>

        <div className="flex-1">
          <TestimonialExcerpt text={text} />
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-traditional-900 text-lg">{name}</h4>
            {date ? <p className="text-traditional-600 text-sm">{date}</p> : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
