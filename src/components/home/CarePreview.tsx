'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Sparkles } from 'lucide-react';

const careCards = [
  {
    id: 'tattoo',
    title: 'Tattoo Care',
    description:
      'Prepare your skin before your session and protect your new tattoo while it heals — before and after tips in one place.',
    href: '/tattoo-care',
    icon: Sparkles,
    accent: 'accent' as const,
  },
  {
    id: 'piercing',
    title: 'Piercing Care',
    description:
      'Simple steps to stay clean and comfortable before your piercing and through the full healing period.',
    href: '/piercing-care',
    icon: Droplets,
    accent: 'traditional' as const,
  },
];

const CarePreview: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mandala-subtle opacity-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-traditional-400" />
            <Sparkles className="w-6 h-6 text-accent-500" />
            <div className="w-12 h-px bg-traditional-400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-special font-bold mb-6 text-traditional-900">
            Before &amp; After{' '}
            <span className="font-logo font-condensed-bold text-accent-600">Care Guides</span>
          </h2>
          <p className="text-xl text-traditional-600 max-w-3xl mx-auto leading-relaxed font-body">
            Good healing starts before you sit in the chair. Read our tattoo and piercing care guides
            so you know what to do before and after your appointment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {careCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={card.href}
                className="group block h-full card-traditional hover:shadow-accent transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="p-8 flex flex-col h-full">
                  <div
                    className={`mb-6 inline-flex p-4 rounded-2xl w-fit ${
                      card.accent === 'accent' ? 'bg-accent-100' : 'bg-traditional-100'
                    } group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon
                      className={`w-8 h-8 ${
                        card.accent === 'accent' ? 'text-accent-600' : 'text-traditional-700'
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-special font-bold text-traditional-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-traditional-600 font-body leading-relaxed mb-6 flex-grow">
                    {card.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-accent-600 font-medium group-hover:gap-3 transition-all">
                    Read full guide
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarePreview;
