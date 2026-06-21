'use client';

import React from 'react';
import { AlertCircle, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import type { CareGuide } from '@/data/careGuides';
import { WHATSAPP_URL } from '@/config/links';

interface CareGuideContentProps {
  guide: CareGuide;
}

const CareSectionBlock: React.FC<{
  section: CareGuide['before'];
  variant: 'before' | 'after';
}> = ({ section, variant }) => {
  const isBefore = variant === 'before';

  return (
    <article
      className={`rounded-2xl border p-8 md:p-10 shadow-sm ${
        isBefore
          ? 'border-traditional-200 bg-gradient-to-br from-traditional-50 to-warm-50'
          : 'border-accent-200 bg-gradient-to-br from-accent-50 to-pastel-50'
      }`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div
          className={`p-3 rounded-xl shrink-0 ${
            isBefore ? 'bg-traditional-100 text-traditional-700' : 'bg-accent-100 text-accent-700'
          }`}
        >
          {isBefore ? <Clock className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-special font-bold text-traditional-900 mb-2">
            {section.title}
          </h2>
          <p className="text-traditional-600 font-body leading-relaxed">{section.subtitle}</p>
        </div>
      </div>

      <ul className="space-y-4">
        {section.tips.map((tip, index) => (
          <li key={index} className="flex gap-3 items-start">
            <CheckCircle2
              className={`w-5 h-5 mt-0.5 shrink-0 ${
                isBefore ? 'text-traditional-500' : 'text-accent-500'
              }`}
            />
            <span className="text-traditional-700 font-body leading-relaxed">{tip}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const CareGuideContent: React.FC<CareGuideContentProps> = ({ guide }) => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <CareSectionBlock section={guide.before} variant="before" />
      <CareSectionBlock section={guide.after} variant="after" />

      <div className="rounded-2xl border border-traditional-200 bg-white p-8 flex gap-4 items-start">
        <AlertCircle className="w-6 h-6 text-accent-600 shrink-0 mt-0.5" />
        <div>
          <h3 className="font-special font-bold text-traditional-900 mb-2">Important</h3>
          <p className="text-traditional-600 font-body leading-relaxed mb-4">
            {guide.importantNote}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium transition-colors"
          >
            Questions? Message us on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareGuideContent;
