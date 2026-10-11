'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Clock3, HeartHandshake, MapPinned, Palette, ShieldCheck, Sparkles } from 'lucide-react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import LazyImage from '@/components/shared/LazyImage';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { GOOGLE_MAPS_URL, SITE_PHONE_DISPLAY, WHATSAPP_URL } from '@/config/links';

const processSteps = [
  {
    title: '1. Consultation',
    text:
      'Discuss your concept, reference images, style and placement. We help you decide what will work best on your body and how it will age over time.',
  },
  {
    title: '2. Design & Placement',
    text:
      'We map the composition, size and detailing to your anatomy so the artwork sits naturally and reads beautifully in the chosen area.',
  },
  {
    title: '3. The Tattoo Session',
    text:
      'Your artist confirms the stencil and design before starting. We work with sterile equipment, fresh gloves and careful attention to comfort and hygiene.',
  },
  {
    title: '4. Aftercare & Healing',
    text:
      'Once the session ends, we explain how to care for your tattoo and what to avoid during healing so the artwork stays clean and strong.',
  },
];

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Experience That Shows in the Work',
    description:
      'With more than 20 years of tattooing experience behind our founder and 15 years in the same Arambol space, we combine skill, honesty and artistry.',
  },
  {
    icon: Palette,
    title: 'Expert Artists, Distinct Styles',
    description:
      'From fine-line and minimalist pieces to traditional, realism, blackwork and ornament work, our artists bring remarkable range and precision.',
  },
  {
    icon: Clock3,
    title: 'Time, Comfort & Hygiene',
    description:
      'We respect the process, offer breaks when needed, plan larger pieces across sessions and keep a strong focus on hygiene and client comfort.',
  },
  {
    icon: BadgeCheck,
    title: 'Clear Pricing',
    description:
      'Tattoo pricing varies by design, size, artist and time. We explain your estimate clearly before any work begins, with no hidden surprises.',
  },
];

const styles = [
  'Geometric & Sacred Geometry',
  'Hand-Poke & Minimalist',
  'Ornamental & Decorative',
  'Abstract Realism',
  'Traditional & Japanese-Inspired',
  'Portraits & Realism',
  'Typography & Lettering',
  'Blackwork & Dotwork',
  'Spiritual & Symbolic Tattoos',
];

const goaFaqs = [
  {
    id: 'pain',
    question: 'Does getting a tattoo hurt?',
    answer:
      'There is some discomfort, but it varies by placement, tattoo size and personal pain tolerance. We explain what to expect before starting and work at a pace that keeps the session manageable.',
  },
  {
    id: 'bring-design',
    question: 'Can I bring a design from the internet?',
    answer:
      'Absolutely. Reference images are useful and help us understand your idea. We may still adapt the design for your anatomy, placement, style and long-term wear.',
  },
  {
    id: 'age',
    question: 'What is the minimum age for a tattoo?',
    answer:
      'We tattoo clients aged 18 and above, subject to valid identification and studio requirements.',
  },
  {
    id: 'cover-up',
    question: 'Can you cover an old tattoo?',
    answer:
      'Many existing tattoos can be covered, but the result depends on size, darkness, colour and condition. Send clear photos for an honest assessment before booking.',
  },
  {
    id: 'swim',
    question: 'When can I swim after getting a tattoo?',
    answer:
      'Avoid swimming and prolonged soaking until the tattoo is fully healed, which is usually around two to four weeks depending on the piece and your skin. We give specific aftercare guidance for your session.',
  },
  {
    id: 'touch-up',
    question: 'Do you offer touch-ups?',
    answer:
      'Touch-ups depend on how the tattoo heals, the design and the original work. We explain our touch-up policy when confirming your booking and assess the healing before recommending any changes.',
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
            title="Tattoo Studio in Goa"
            subtitle="Custom tattoos, cover-ups and thoughtful aftercare in Arambol with expert artists and clear guidance."
            accent="gallery"
          />

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Book Free Consultation
            </a>
            <Link href="/gallery" className="inline-flex items-center justify-center rounded-full border border-traditional-300 bg-white/70 px-6 py-3 text-base font-semibold text-traditional-800 transition hover:border-accent-300 hover:text-accent-600">
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="A Tattoo That Starts With Understanding"
            subtitle="Whatever brings you to Ink Baba, we begin by listening carefully and planning the tattoo with intention, detail and honesty."
            centered={false}
            accent="about"
          />

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-6 text-lg leading-relaxed text-traditional-700">
              <p>
                Getting a tattoo is a personal decision. It can be a design you have been thinking about for years, a piece inspired by a person or experience, or simply a style of art that feels meaningful.
              </p>
              <p>
                We always begin by understanding what you are looking for. At Ink Baba Tattoo House, we take time to talk through your idea, explore the right style and decide how the tattoo can work beautifully with your body, placement and budget.
              </p>
              <p>
                With over 20 years of experience behind our founder and 15 years in the same Arambol space, we believe great tattooing is more than technical skill. It is honest conversation, thoughtful planning and a deep respect for the process.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-3xl border border-accent-200 bg-accent-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-traditional-900">20+</div>
                <p className="mt-2 text-traditional-600">Years of tattoo experience</p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-traditional-700 shadow-sm">
                  <MapPinned className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-traditional-900">15+</div>
                <p className="mt-2 text-traditional-600">Years in Arambol</p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-base leading-relaxed text-traditional-600">
                  Our approach is simple: understand the idea, plan it properly and give the work the time it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How the Tattoo Process Works"
            subtitle="A clear, respectful process from the very first conversation to the final aftercare routine."
            accent="process"
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
            subtitle="Thoughtful designs, honest guidance and a studio culture built around quality, hygiene and long-term care."
            accent="difference"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-6">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-accent-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-2xl font-heading text-traditional-900">{title}</h3>
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
            subtitle="Our artists work across a wide range of styles, and we help you choose the technique and approach that fits your idea best."
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
              We also host guest artists from India and around the world, bringing specialised techniques and different artistic perspectives to the studio throughout the season. Artist availability changes, so we recommend contacting us early if you have a specific artist or travel date in mind.
            </p>
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
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent-200">Visit Us</p>
              <h2 className="text-3xl font-special text-white md:text-4xl">Ink Baba Tattoo House</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-100/80 md:text-lg">
                Khalcha Wada, Arambol Beach, Pernem, Goa<br />
                WhatsApp / Call: {SITE_PHONE_DISPLAY}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                Book on WhatsApp
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
