'use client';

import React from 'react';

const stats = [
  { value: '20K+', label: 'Tattoos Completed' },
  { value: '4.9/5', label: 'Google Rating' },
  { value: '20+', label: 'Years of Experience' },
  { value: '28+', label: 'Artists Every Season' },
];

const CredibilitySection: React.FC = () => {
  return (
    <section className="border-b border-traditional-200 bg-traditional-50 text-traditional-900">
      <div className="w-full">
        <div className="grid gap-0 border-y border-traditional-200 bg-white sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex min-h-[176px] flex-col justify-center px-5 py-6 text-center sm:px-6 ${
                index !== stats.length - 1 ? 'border-b border-traditional-200 sm:border-b-0 sm:border-r' : ''
              }`}
            >
              <p className="font-special text-4xl font-bold leading-none text-traditional-900 sm:text-5xl">{stat.value}</p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-traditional-500 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
