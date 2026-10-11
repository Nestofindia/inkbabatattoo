'use client';

import React from 'react';
import { Award, ShieldCheck, Sparkles, Star, Users } from 'lucide-react';

const stats = [
  {
    label: 'Google Rating',
    value: '4.9/5',
    detail: 'Highly rated by clients',
    icon: <Star className="h-6 w-6 text-accent-600" />,
  },
  {
    label: 'Hygiene & Safety',
    value: 'Certified',
    detail: 'Sterile practices & premium equipment',
    icon: <ShieldCheck className="h-6 w-6 text-accent-600" />,
  },
  {
    label: 'Years of Experience',
    value: '20+',
    detail: 'Crafting meaningful art for years',
    icon: <Award className="h-6 w-6 text-accent-600" />,
  },
  {
    label: 'Tattoos Completed',
    value: '22K+',
    detail: 'Custom pieces and transformations',
    icon: <Sparkles className="h-6 w-6 text-accent-600" />,
  },
  {
    label: 'Artists Every Season',
    value: '28+',
    detail: 'Global artists and guest specialists',
    icon: <Users className="h-6 w-6 text-accent-600" />,
  },
];

const CredibilitySection: React.FC = () => {
  return (
    <section className="relative border-b border-traditional-200 bg-traditional-50 py-16 text-traditional-900 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(234,139,64,0.08),_transparent_40%)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-600">Why clients choose us</p>
          <h2 className="mt-4 font-special text-3xl font-bold text-traditional-900 sm:text-4xl md:text-5xl">
            Trusted for quality, care, and creative confidence.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex h-full flex-col rounded-[1.5rem] border border-traditional-200 bg-white p-5 shadow-soft"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 ring-1 ring-accent-200">
                {stat.icon}
              </div>

              <p className="min-h-[48px] text-sm font-medium uppercase tracking-[0.18em] text-traditional-500">
                {stat.label}
              </p>
              <p className="mt-3 font-special text-3xl font-bold text-traditional-900">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-traditional-600">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
