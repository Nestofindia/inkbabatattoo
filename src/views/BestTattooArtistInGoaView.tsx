'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Clock3, HeartHandshake, MapPinned, Palette, ShieldCheck, Sparkles, Users } from 'lucide-react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import LazyImage from '@/components/shared/LazyImage';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { GOOGLE_MAPS_URL, SITE_PHONE_DISPLAY, WHATSAPP_URL } from '@/config/links';

const processSteps = [
  {
    title: '1. Consultation',
    text:
      'We begin by listening to your idea, placement preferences and what matters to you in the long term. We explain what is possible, what will age well and what may need adjusting.',
  },
  {
    title: '2. Creating the Design',
    text:
      'Once the brief is clear, we sketch, adapt and refine the concept based on your body, the area of placement and the style direction you want to explore.',
  },
  {
    title: '3. Stencil Approval',
    text:
      'The stencil is placed on the skin before the tattoo starts. This is your opportunity to adjust placement and confirm the design before the needle is used.',
  },
  {
    title: '4. The Tattoo Session',
    text:
      'We work at a pace that matches your comfort and the complexity of the work. Larger pieces like sleeves are planned across multiple sessions to keep the quality high.',
  },
];

const artistGroups = [
  {
    title: 'Realism & Portraiture',
    artists: 'Adem Senturk, Mira Paramonova, Alex Belyakoff, Soy Dan',
  },
  {
    title: 'Geometric & Mandala',
    artists: 'Manu Garcia, Jessi James, Giada, Dana Sha, Jason Koifman',
  },
  {
    title: 'Ornamental & Decorative',
    artists: 'Pallada, Alan Gog, Beve, Cloditta',
  },
  {
    title: 'Blackwork & Bold Designs',
    artists: 'Madhav, Jason Koifman, Dana Avraham',
  },
  {
    title: 'Hand Poke & Tribal',
    artists: 'Mo Naga, Arne, Dasha Pictogram',
  },
  {
    title: 'Dotwork',
    artists: 'Jinn Tony, Dasha Pictogram',
  },
  {
    title: 'Traditional Tattoos',
    artists: 'YOGI, Niculin Gross, Dario D’Alessio, Alberto Balboa, Ash Harrison',
  },
  {
    title: 'Japanese Tebori & Style',
    artists: 'Akitsu Tomo, Vasil Kurakhchishvili',
  },
  {
    title: 'Abstract Realism',
    artists: 'Tassos Zach',
  },
  {
    title: 'Unique Artistic Vision',
    artists: 'Nikakun, Olga Koroleva, Stella',
  },
  {
    title: 'Typography & Lettering',
    artists: 'Manish Kadam, Pramod Deshmukh',
  },
  {
    title: 'Minimalistic Fine-Line',
    artists: 'Juliakay',
  },
];

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Experience That Shows in the Work',
    description:
      'At Inkbaba, we have been tattooing for over 20 years and working with clients from across India and around the world. That experience affects the quality of the result.',
  },
  {
    icon: Palette,
    title: 'Planning for the Long Term',
    description:
      'We think about placement, line weight, contrast, detail and how the tattoo will age. The design should work over decades, not just on day one.',
  },
  {
    icon: Clock3,
    title: 'Time, Comfort & Hygiene',
    description:
      'We keep the process clear and respectful. Large work is planned across multiple sessions and we make sure the studio environment remains clean and comfortable.',
  },
  {
    icon: BadgeCheck,
    title: 'Clear Pricing',
    description:
      'Tattoo pricing varies by design, artist, placement and time required. We discuss the estimate before starting so there are no surprises.',
  },
];

const artistFaqs = [
  {
    id: 'pain',
    question: 'Does getting a tattoo hurt?',
    answer:
      'Yes, there is some discomfort, but the experience depends on placement, tattoo size, session length and your own pain tolerance. Areas such as ribs and knees can be more sensitive than forearms or upper arms.',
  },
  {
    id: 'bring-design',
    question: 'Can I bring a design from the internet?',
    answer:
      'Absolutely. Reference images are very useful. We assess whether the design will work at the chosen size and placement and may suggest adjustments so it suits your anatomy, style and long-term ageing.',
  },
  {
    id: 'age',
    question: 'What is the minimum age for a tattoo?',
    answer:
      'We tattoo clients aged 18 and above, subject to valid identification and the studio requirements.',
  },
  {
    id: 'cover-up',
    question: 'Can you cover an old tattoo?',
    answer:
      'Many existing tattoos can be covered depending on their darkness, size, colour and condition. Please send clear photographs in natural daylight so we can assess what is realistic before recommending a direction.',
  },
  {
    id: 'swim',
    question: 'When can I swim after getting a tattoo?',
    answer:
      'Avoid swimming and soaking the area until the skin is fully healed. This usually takes around two to four weeks, sometimes longer depending on the tattoo and how you heal.',
  },
  {
    id: 'touch-up',
    question: 'Do you offer touch-ups?',
    answer:
      'Touch-ups depend on how the tattoo heals and the original work. We explain our policy when confirming the booking and assess the healing before recommending adjustments.',
  },
];

const BestTattooArtistInGoaView: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="https://images.pexels.com/photos/5708072/pexels-photo-5708072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Best tattoo artist in Goa"
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
            title="Best Tattoo Artist in Goa"
            subtitle="Custom designs, artistic precision, and thoughtful consultation guided by experience and long-term planning."
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
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Finding the Right Tattoo Artist - It Matters"
            subtitle="A tattoo is permanent, so the artist behind it matters as much as the design itself."
            centered={false}
            accent="about"
          />

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-6 text-lg leading-relaxed text-traditional-700">
              <p>
                A tattoo is permanent. It sits on your body. It ages with you. The difference between a good tattoo and a poor one is not just about the design you bring in. It is about the artist who puts it on your skin.
              </p>
              <p>
                The right artist listens, asks questions about placement and meaning, and considers how your body moves and changes over time. They understand that what looks good on paper does not always work the same way on skin.
              </p>
              <p>
                At Inkbaba, we have been tattooing for over 20 years, winning awards in international competitions and working with clients from across India and beyond. Most people come because someone they know got a tattoo here and could not stop talking about it.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-3xl border border-accent-200 bg-accent-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-traditional-900">20+</div>
                <p className="mt-2 text-traditional-600">Years of tattooing expertise</p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-traditional-700 shadow-sm">
                  <MapPinned className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-traditional-900">Global</div>
                <p className="mt-2 text-traditional-600">Artists and clients from across the world</p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-base leading-relaxed text-traditional-600">
                  Good work depends on consultation, technical skill and a design that lasts well over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Design Process"
            subtitle="A clear and collaborative process that keeps the design, the placement and the client’s comfort in focus."
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
            title="Our International Artist Collective"
            subtitle="A global roster of specialists, each bringing expertise in a different style and artistic approach."
            accent="difference"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {artistGroups.map(({ title, artists }) => (
              <div key={title} className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-6">
                <h3 className="mb-3 text-2xl font-heading text-traditional-900">{title}</h3>
                <p className="text-base leading-relaxed text-traditional-600">{artists}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What Makes Inkbaba Different"
            subtitle="Thoughtful consultation, strong technical standards and a studio built for long-term satisfaction."
            accent="styles"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-[2rem] border border-traditional-200 bg-white p-6 shadow-[0_14px_35px_rgba(18,18,18,0.04)]">
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

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Common questions we answer before the first consultation."
            accent="faq"
          />

          <FaqAccordion items={artistFaqs} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-traditional-900 via-traditional-800 to-traditional-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent-200">Visit Us</p>
              <h2 className="text-3xl font-special text-white md:text-4xl">Ink Baba Tattoo House</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-100/80 md:text-lg">
                Khalcha Wada, Arambol, North Goa<br />
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

export default BestTattooArtistInGoaView;
