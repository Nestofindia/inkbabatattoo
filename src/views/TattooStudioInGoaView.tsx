'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  HeartHandshake,
  MapPinned,
  Palette,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import LazyImage from '@/components/shared/LazyImage';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { GOOGLE_MAPS_URL, SITE_PHONE_DISPLAY, WHATSAPP_URL } from '@/config/links';

const processSteps = [
  {
    title: '1. Consultation and Ideas',
    text:
      'The initial consultation focuses on your idea, references, preferred style, size and placement. You do not need a finished design. A rough concept or a clear sense of what you want is enough to begin.',
  },
  {
    title: '2. Design Development',
    text:
      'Once the vision is clear, the design is developed around your concept and chosen placement. Scale, detail, body contours and how the tattoo ages are all considered during planning.',
  },
  {
    title: '3. Placement and Stencil Approval',
    text:
      'Before tattooing begins, a stencil is applied so you can review the size, angle and position. Adjustments can be made before the final approval is given.',
  },
  {
    title: '4. Tattoo Session and Aftercare',
    text:
      'During your appointment, we carefully prepare the work area and explain the process. After the session, clear aftercare instructions are provided to help the tattoo heal well.',
  },
];

const reasons = [
  {
    icon: HeartHandshake,
    title: 'A Consistent, Personal Approach',
    description:
      'Every project begins with understanding your idea, discussing realistic options and paying attention to the details that matter. Clear guidance helps you feel comfortable asking questions at every stage.',
  },
  {
    icon: Palette,
    title: 'Thoughtful Design and Placement',
    description:
      'A design needs to work on the body, not just on a screen. Anatomy, placement, scale and detail are carefully considered when planning your tattoo.',
  },
  {
    icon: Clock3,
    title: 'Time for Larger Projects',
    description:
      'Large tattoos and sleeves often require multiple sessions. The schedule is planned around the skin healing process rather than rushing the work.',
  },
  {
    icon: BadgeCheck,
    title: 'Clear, Honest Guidance',
    description:
      'We explain the factors that influence a tattoo, including size, complexity, placement and time involved before the project begins.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygiene at Every Stage',
    description:
      'Hygiene is essential to professional tattooing. We use sterile, single-use needles and follow strict hygiene procedures throughout each session.',
  },
];

const styles = [
  'Geometric and Sacred Geometry',
  'Hand-Poked and Minimalist',
  'Ornamental and Decorative',
  'Abstract Realism',
  'Traditional and Japanese-Inspired',
  'Portraits and Realism',
  'Typography, Scripts and Calligraphy',
  'Blackwork and Dotwork',
  'Spiritual Symbols and Meaningful Motifs',
];

const goaFaqs = [
  {
    id: 'pain',
    question: 'Does getting a tattoo hurt?',
    answer:
      'Some discomfort is normal, although the experience varies from person to person and depends on placement, size and session duration. Areas such as the ribs and elbows can be more sensitive than the forearms or shoulders.',
  },
  {
    id: 'bring-design',
    question: 'Can I bring a design I found online?',
    answer:
      'Yes. Online images and other references can help communicate your idea. The design will be reviewed to determine whether it will work well as a tattoo and whether adjustments to composition, size or placement would improve the result.',
  },
  {
    id: 'age',
    question: 'What is the minimum age for a tattoo?',
    answer:
      'Clients must be at least 18 years old and provide valid identification.',
  },
  {
    id: 'cover-up',
    question: 'Can you tattoo over an existing tattoo?',
    answer:
      'This depends on the existing tattoo’s colour, size, placement and condition, as well as the proposed design. Share a clear photograph in good lighting for an initial assessment.',
  },
  {
    id: 'swim',
    question: 'When can I swim after getting a tattoo?',
    answer:
      'Swimming and soaking should be avoided until the tattoo has fully healed. This commonly takes around two weeks or longer depending on the tattoo and your healing process.',
  },
  {
    id: 'touch-up',
    question: 'Do you offer touch-ups?',
    answer:
      'If you have concerns about how your tattoo has healed, contact the studio. Touch-up eligibility depends on the tattoo, the healing process and the aftercare followed.',
  },
  {
    id: 'booking',
    question: 'How far in advance should I book?',
    answer:
      'Booking requirements depend on the size of your tattoo, artist availability and the time of year. Contact the studio to discuss availability, especially for larger projects or guest artists.',
  },
  {
    id: 'prepare',
    question: 'How should I prepare for my appointment?',
    answer:
      'Get a good night’s sleep, eat beforehand and arrive hydrated. Wear comfortable clothing that provides easy access to the tattoo area, and discuss any concerns with your artist before the session begins.',
  },
];

const TattooStudioInGoaView: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="https://images.pexels.com/photos/5708072/pexels-photo-5708072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Tattoo studio in Goa"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pastel-100/90 via-warm-100/80 to-accent-100/90" />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-10 top-20 h-24 w-24 rounded-full border-2 border-traditional-300 opacity-30" />
          <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full border-2 border-accent-400 opacity-20" />
          <div className="absolute inset-0 bg-mandala-subtle opacity-20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <SectionHeader
            title="Your Story, Our Art - Tattoo Studio in Goa"
            subtitle="At Inkbaba Tattoo House in Arambol, Goa, every tattoo begins with a conversation. We take time to understand your idea, explore the right style and placement, and create a design that feels personal to you."
            accent="gallery"
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-traditional-700 md:text-base">
            {[
              '20+ Years of Experience',
              'Custom Tattoo Designs',
              'Hygiene and Care',
              'Personalised Consultation',
            ].map((item) => (
              <span key={item} className="rounded-full border border-traditional-300 bg-white/80 px-4 py-2 shadow-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Discuss Your Tattoo
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-traditional-300 bg-white/70 px-6 py-3 text-base font-semibold text-traditional-800 transition hover:border-accent-300 hover:text-accent-600"
            >
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How the Tattoo Process Works"
            subtitle="A well-executed tattoo involves more than a strong design. Each stage is carefully considered, helping you make informed decisions and feel prepared before the tattooing begins."
            centered={false}
            accent="about"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-[2rem] border border-traditional-200 bg-white p-6 shadow-[0_14px_35px_rgba(18,18,18,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(18,18,18,0.08)]">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 font-heading text-lg font-bold text-accent-700">
                  {step.title.split('.')[0]}
                </div>
                <h3 className="mb-3 text-2xl font-heading text-traditional-900">{step.title}</h3>
                <p className="text-base leading-relaxed text-traditional-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What Makes Inkbaba Different"
            subtitle="Thoughtful design, honest guidance and a comfortable studio experience built around quality and care."
            accent="difference"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-6">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-accent-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-heading text-traditional-900">{title}</h3>
                <p className="text-base leading-relaxed text-traditional-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pastel-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Tattoo Styles at Inkbaba"
            subtitle="Different designs call for different techniques. Inkbaba Tattoo House offers a range of tattoo styles to suit different ideas and preferences."
            accent="styles"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {styles.map((style) => (
              <div key={style} className="flex items-center gap-3 rounded-2xl border border-traditional-200 bg-white px-5 py-4 text-base font-medium text-traditional-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-accent-600" />
                <span>{style}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-accent-200 bg-white p-6 shadow-[0_18px_40px_rgba(18,18,18,0.04)] md:p-8">
            <p className="text-lg leading-relaxed text-traditional-700">
              Artist specialisms and availability may vary, so contact the studio to discuss your project. Guest artists periodically visit the studio, bringing their own techniques and specialisms throughout the season.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/gallery" className="btn-primary text-base">
              Explore Your Tattoo Style
            </Link>
            <Link href="/available-artists" className="inline-flex items-center justify-center rounded-full border border-traditional-300 bg-white/80 px-6 py-3 text-base font-semibold text-traditional-800 transition hover:border-accent-300 hover:text-accent-600">
              Discuss a Custom Design
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Small Tattoos and Larger Projects"
            subtitle="Whether you are planning a small, simple piece or a larger custom work, thoughtful preparation helps create a smoother, more comfortable experience."
            accent="process"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-7">
              <h3 className="mb-3 text-2xl font-heading text-traditional-900">Walk-In Tattoos</h3>
              <p className="text-base leading-relaxed text-traditional-600">
                For small, straightforward tattoos, walk-in appointments may be available depending on the schedule, design and artist availability. Contacting the studio in advance is recommended to check whether a same-day appointment is possible before travelling.
              </p>
            </div>
            <div className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-7">
              <h3 className="mb-3 text-2xl font-heading text-traditional-900">Large Tattoos and Sleeves</h3>
              <p className="text-base leading-relaxed text-traditional-600">
                Larger pieces generally require advance planning, particularly when they involve detailed artwork or multiple sessions. An initial discussion helps establish the scope of the project, the process involved and the likely scheduling requirements.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary text-base">
              Plan Your Tattoo Project
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before booking your tattoo consultation."
            accent="faq"
          />

          <FaqAccordion items={goaFaqs} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-traditional-900 via-traditional-800 to-traditional-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent-200">Visit Inkbaba Tattoo House</p>
              <h2 className="text-3xl font-special text-white md:text-4xl">Arambol, North Goa</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-100/80 md:text-lg">
                Whether you have a clear design in mind or are still developing an idea, a visit to Inkbaba Tattoo House is an opportunity to discuss your concept and understand the process.<br />
                <span className="mt-2 block">Address: Khalcha Wada, Arambol, North Goa, Goa</span>
                <span className="mt-2 block">Call or WhatsApp: {SITE_PHONE_DISPLAY}</span>
                <span className="mt-2 block">Instagram: @inkbabatattoohouse</span>
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                Discuss Your Tattoo on WhatsApp
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TattooStudioInGoaView;
