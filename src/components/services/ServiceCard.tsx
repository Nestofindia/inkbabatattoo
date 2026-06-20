'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import LazyImage from '../shared/LazyImage';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
  reverse?: boolean;
  category?: string;
  categoryHref?: string;
  subtitle?: string;
  instagramHandle?: string;
  instagramHref?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  features,
  image,
  icon,
  reverse = false,
  category,
  categoryHref,
  subtitle,
  instagramHandle,
  instagramHref,
}) => {
  return (
    <motion.div
      id={id}
      className="py-12 scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 bg-white rounded-2xl overflow-hidden shadow-traditional border-2 border-traditional-200 hover:shadow-accent transition-all duration-300 hover:scale-[1.02]`}
      >
        <div className="lg:w-1/2">
          <LazyImage
            src={image}
            alt={title}
            className="aspect-[4/5] w-full object-cover object-center lg:aspect-auto lg:h-full lg:min-h-[420px]"
          />
        </div>
        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
          {category && categoryHref ? (
            <Link
              href={categoryHref}
              className="mb-4 inline-flex w-fit rounded-full border border-accent-300 bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-700 transition-colors hover:bg-accent-100 hover:text-accent-800"
            >
              {category}
            </Link>
          ) : null}

          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-accent-100 p-2">{icon}</div>
            <h3 className="text-2xl font-heading font-bold text-traditional-900">{title}</h3>
          </div>

          {subtitle ? (
            <p className="mb-4 text-lg font-semibold leading-snug text-accent-700">{subtitle}</p>
          ) : null}

          {description ? (
            <p className="mb-6 text-lg leading-relaxed text-traditional-600">{description}</p>
          ) : null}

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-lg text-accent-500">•</span>
                <span className="text-traditional-600">{feature}</span>
              </li>
            ))}
          </ul>

          {instagramHandle && instagramHref ? (
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-traditional-700 transition-colors hover:text-accent-700"
            >
              <Instagram size={18} aria-hidden />
              @{instagramHandle.replace(/^@/, '')}
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
