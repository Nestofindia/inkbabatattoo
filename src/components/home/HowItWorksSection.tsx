'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PenLine, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '../../config/links';
import HomeMobileScroll from '../shared/HomeMobileScroll';

const steps: Array<{
  number: string;
  title: string;
  description: string;
  Illustration: React.FC;
  icon: React.ReactNode;
  linkWhatsApp?: boolean;
}> = [
  {
    number: '01',
    title: 'Book Your Free Consultation',
    description:
      "Connect with our team on WhatsApp for a relaxed and friendly consultation. We'll discuss your ideas, tattoo style, and everything you need to know.",
    Illustration: ConsultationIllustration,
    icon: <MessageCircle className="w-4 h-4" />,
    linkWhatsApp: true,
  },
  {
    number: '02',
    title: 'Custom-designed',
    description:
      'Your artist creates a custom design from scratch. Work together until every detail feels perfect, meaningful, unique, and completely true to your vision.',
    Illustration: DesignIllustration,
    icon: <PenLine className="w-4 h-4" />,
  },
  {
    number: '03',
    title: 'Get inked. Wear it proudly.',
    description:
      "Relax in our calm Arambol studio while your artist brings your tattoo to life. Your design and pricing are already confirmed — now it's all about the art.",
    Illustration: TattooIllustration,
    icon: <Sparkles className="w-4 h-4" />,
  },
];

function ConsultationIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-[220px] h-auto" aria-hidden>
      <rect x="18" y="16" width="92" height="72" rx="8" fill="none" stroke="#432511" strokeWidth="2.5" />
      <path d="M28 30h72M28 42h58M28 54h42" stroke="#432511" strokeWidth="2" strokeLinecap="round" />
      <circle cx="148" cy="36" r="24" fill="none" stroke="#432511" strokeWidth="2.5" />
      <path d="M135 36c0-7 6-12 13-12s13 5 13 12" fill="none" stroke="#432511" strokeWidth="2.5" />
      <path d="M130 52c3 9 11 14 18 14s15-5 18-14" fill="none" stroke="#432511" strokeWidth="2.5" />
      <rect x="140" y="68" width="38" height="30" rx="4" fill="none" stroke="#432511" strokeWidth="2.5" />
      <path d="M52 86l20 16 20-16" fill="none" stroke="#432511" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DesignIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-[220px] h-auto" aria-hidden>
      <rect x="52" y="18" width="96" height="78" rx="4" fill="none" stroke="#432511" strokeWidth="2.5" />
      <path
        d="M68 88 Q98 32 128 52 T162 36"
        fill="none"
        stroke="#432511"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="70" cy="80" r="4" fill="#432511" />
      <path d="M32 96 L54 74" stroke="#432511" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 96 L44 96 L38 84 Z" fill="#432511" />
      <ellipse cx="35" cy="100" rx="9" ry="3" fill="none" stroke="#432511" strokeWidth="2" />
    </svg>
  );
}

function TattooIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-[220px] h-auto" aria-hidden>
      <rect x="68" y="52" width="74" height="38" rx="6" fill="none" stroke="#432511" strokeWidth="2.5" />
      <path d="M84 52 V40 M126 52 V40" stroke="#432511" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="105" cy="70" r="11" fill="none" stroke="#432511" strokeWidth="2.5" />
      <path d="M36 68 Q54 46 72 62" fill="none" stroke="#432511" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="132" y="26" width="48" height="58" rx="4" fill="none" stroke="#432511" strokeWidth="2.5" />
      <path d="M140 38h32M140 50h22M140 62h26" stroke="#432511" strokeWidth="2" strokeLinecap="round" />
      <path d="M156 90 L156 102" stroke="#432511" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

const StepDescription: React.FC<{ description: string; linkWhatsApp?: boolean }> = ({
  description,
  linkWhatsApp,
}) => {
  if (linkWhatsApp) {
    const [before, after] = description.split('WhatsApp');
    return (
      <>
        {before}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-700 font-semibold underline underline-offset-2 hover:text-accent-600 transition-colors"
        >
          WhatsApp
        </a>
        {after}
      </>
    );
  }
  return <>{description}</>;
};

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 max-[469px]:py-8 bg-[#f3f0ec] relative overflow-x-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-center mb-10 sm:mb-16 md:mb-20 max-[469px]:mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 max-[469px]:mb-2">
            <div className="w-8 sm:w-12 h-px bg-traditional-400 max-[469px]:w-6" />
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 max-[469px]:w-4 max-[469px]:h-4" />
            <div className="w-8 sm:w-12 h-px bg-traditional-400 max-[469px]:w-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl max-[469px]:text-2xl font-special font-bold mb-4 sm:mb-6 max-[469px]:mb-2 text-traditional-900">
            Simple Steps, <span className="font-logo font-condensed-bold text-accent-600">Great Tattoos</span>
          </h2>
          <p className="text-base sm:text-xl max-[469px]:text-sm text-traditional-600 max-w-3xl mx-auto leading-relaxed font-body px-2 sm:px-0">
            From your first idea to the final tattoo.
          </p>
        </motion.div>

        <HomeMobileScroll className="gap-6 sm:gap-7 lg:gap-8">
          {steps.map((step) => (
            <motion.article
              key={step.number}
              className="card-traditional how-it-works-card group home-mobile-scroll-item home-mobile-scroll-item--content"
              initial={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <span className="how-it-works-step-num">{step.number}</span>
                <span className="mt-2 flex items-center justify-center w-8 h-8 rounded-full bg-accent-100 text-accent-700 opacity-80 group-hover:opacity-100 group-hover:bg-accent-200 transition-all duration-300">
                  {step.icon}
                </span>
              </div>

              <div className="how-it-works-illustration shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                <motion.div
                  className="how-it-works-illustration-inner w-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <step.Illustration />
                </motion.div>
              </div>

              <h3 className="text-lg sm:text-xl md:text-[1.35rem] font-heading font-bold text-traditional-900 mb-3 leading-snug group-hover:text-accent-800 transition-colors duration-300">
                {step.title}
              </h3>

              <p className="text-traditional-700 text-sm sm:text-base leading-relaxed font-body flex-grow">
                <StepDescription
                  description={step.description}
                  linkWhatsApp={step.linkWhatsApp}
                />
              </p>

              <motion.span
                className="mt-5 h-1 w-0 rounded-full bg-accent-500 group-hover:w-full transition-all duration-500 ease-out"
                aria-hidden
              />
            </motion.article>
          ))}
        </HomeMobileScroll>
      </motion.div>
    </section>
  );
};

export default HowItWorksSection;
