import React from 'react';
import { TermItem } from '../../data/terms';

interface TermsContentProps {
  items: TermItem[];
}

const TermsContent: React.FC<TermsContentProps> = ({ items }) => {
  return (
    <article className="mx-auto">
      <p className="text-traditional-600 text-base sm:text-lg leading-relaxed font-body mb-12">
        These terms govern all appointments, tattoo services, and studio policies at Ink Baba
        Tattoo House. By booking or receiving a tattoo, you agree to the following conditions.
      </p>

      <div className="space-y-8">
        {items.map((item) => (
          <section key={item.id}>
            <h2 className="text-lg sm:text-xl font-heading font-bold text-traditional-900 mb-2">
              {item.number}. {item.title}
            </h2>
            <p className="text-traditional-700 text-base leading-relaxed font-body">
              {item.content}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
};

export default TermsContent;
