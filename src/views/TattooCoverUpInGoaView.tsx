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

const coverUpProcess = [
  {
    title: '1. Assessment',
    text:
      'Bring a clear photo in natural daylight so we can see how dark the original ink is, its size, shape, and how it has aged. We explain what is realistic and whether a direct cover-up or laser fading is the better route.',
  },
  {
    title: '2. Explore the New Design',
    text:
      'We plan a larger, darker or better-placed design that works with the old tattoo instead of fighting against it. We can adjust placement and style depending on what you want and what the skin can support.',
  },
  {
    title: '3. Prepare the Session',
    text:
      'If the original tattoo is deep or dark, laser fading may help lighten it before the new work begins. We explain the timeline, cost and whether any extra preparation will improve the final result.',
  },
  {
    title: '4. The Cover-Up Session',
    text:
      'We work with sterile equipment and tailored techniques such as layering, strategic placement and darker shading so the old design is properly concealed and the new tattoo reads cleanly.',
  },
];

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Experience That Shows in the Work',
    description:
      'We have covered hundreds of tattoos across different ages, styles and skin conditions. That experience helps us judge what will work and what needs extra planning.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest About What Is Possible',
    description:
      'Some tattoos can be covered directly while others need laser fading first. We explain that truthfully so you can make a better decision before the session starts.',
  },
  {
    icon: Palette,
    title: 'Choosing the Right Design',
    description:
      'The design is selected to hide the old work while still fitting your taste, placement and body shape. It is a conversation about both aesthetics and technical requirements.',
  },
  {
    icon: Clock3,
    title: 'Not Rushing the Process',
    description:
      'Some cover-ups need more than one session. We give the skin time to recover and assess how the first pass sits before moving ahead.',
  },
];

const styles = [
  'Blackwork & Bold Designs',
  'Geometric & Mandala Work',
  'Larger Detailed Pieces',
  'Abstract & Expressive Designs',
  'Ornamental & Decorative',
  'Custom Rework & Transformation Tattoos',
];

const coverUpFaqs = [
  {
    id: 'hidden',
    question: 'Will the old tattoo definitely be hidden?',
    answer:
      'Not always, depending on how dark the original ink is, how large it is, the placement and the design we choose for the new tattoo. We assess this during planning and use strategic styling, bold outlines and shading to minimise the chance of the old work showing through.',
  },
  {
    id: 'laser',
    question: 'Do I always need laser fading first?',
    answer:
      'No. Light or small tattoos can often be covered directly without it. Larger, darker or more detailed work usually benefits significantly from laser fading before the new design begins. We recommend this based on your specific tattoo and the design direction.',
  },
  {
    id: 'cost',
    question: 'How much does a cover-up cost?',
    answer:
      'Pricing depends on the size of the new design, the complexity of what needs to be covered, whether laser fading is involved and the artist. We give you a clear estimate during consultation so there are no surprises.',
  },
  {
    id: 'colour',
    question: 'Can you cover a colour tattoo?',
    answer:
      'Yes, though colour tattoos can be more technically demanding than blackwork. We assess the exact colours and explain the best course of action for your situation.',
  },
  {
    id: 'healing',
    question: 'How long does healing take?',
    answer:
      'Cover-up tattoos heal on the same timeline as other tattoos and usually take around two to four weeks depending on size and placement. We provide specific aftercare guidance for your work and healing process.',
  },
];

const TattooCoverUpInGoaView: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="https://images.pexels.com/photos/5708072/pexels-photo-5708072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Tattoo cover-up in Goa"
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
            title="Tattoo Cover-Up in Goa"
            subtitle="A thoughtful redesign for old ink, faded work, and tattoos that no longer match the life you live now."
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
            title="A Tattoo That Deserves a Second Life"
            subtitle="Whatever brought you here, a cover-up is possible when the design, placement and technical planning are approached honestly."
            centered={false}
            accent="about"
          />

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-6 text-lg leading-relaxed text-traditional-700">
              <p>
                You got a tattoo for a reason. Sometimes that reason changes. The design didn’t age the way you hoped. The memory it carries has shifted. The person or place it represents isn’t part of your life anymore.
              </p>
              <p>
                Whatever brought you here, covering an old tattoo is possible. But it is different from getting fresh work. It requires understanding what you have, being honest about the technical challenges and planning something that actually works on your skin.
              </p>
              <p>
                At Inkbaba, we have covered hundreds of tattoos across different styles, sizes and ages. With over 20 years of tattooing experience and years of handling cover-ups specifically, we know what works and what does not.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-3xl border border-accent-200 bg-accent-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-traditional-900">300+</div>
                <p className="mt-2 text-traditional-600">Cover-ups handled across styles and age ranges</p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-traditional-700 shadow-sm">
                  <MapPinned className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-traditional-900">20+</div>
                <p className="mt-2 text-traditional-600">Years of cover-up expertise</p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-base leading-relaxed text-traditional-600">
                  Our approach is simple: assess honestly, plan properly and give the cover-up the time it needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How the Cover-Up Works"
            subtitle="A structured, honest process that gives the old ink a realistic new life."
            accent="process"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coverUpProcess.map((step) => (
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
            subtitle="Coverage, honesty and design decisions that respect the difficulty of the work."
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
            title="Cover-Up Styles"
            subtitle="Our artists have experience covering existing tattoos across a range of styles and technical requirements."
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
              The right cover-up usually does not look like a cover-up in a basic sense. The design becomes a new statement piece that fits your body and your story, while also doing the technical job of concealing the old tattoo in the most effective way possible.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="The questions we hear most before a cover-up consultation."
            accent="faq"
          />

          <FaqAccordion items={coverUpFaqs} />
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

export default TattooCoverUpInGoaView;
