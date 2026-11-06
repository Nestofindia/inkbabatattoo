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
      'The first step is assessing the existing tattoo. A clear photograph taken in natural daylight helps show the ink density, size, shape and condition. Small, light tattoos may be relatively straightforward to cover, while larger, darker or heavily detailed designs often require more planning. Following the assessment, suitable options are discussed. A direct cover-up may be possible, or laser fading may help create greater flexibility for the new design.',
  },
  {
    title: '2. Exploring the New Design',
    text:
      'Once the original tattoo has been assessed, the next step is selecting a design that works with its existing features. The new artwork may need to be larger, darker or positioned differently to conceal the original effectively. This process involves balancing creative possibilities with practical limitations.',
  },
  {
    title: '3. Planning the Session',
    text:
      'Particularly dark or complex tattoos may benefit from laser fading before the cover-up begins. Laser treatments lighten existing ink rather than necessarily removing it completely. Depending on the tattoo, several sessions may improve the range of designs that can be considered and reduce the likelihood of the original artwork showing through.',
  },
  {
    title: '4. The Cover-Up Session',
    text:
      'The session focuses on concealing the original tattoo through carefully planned design placement, shading, layering and appropriate use of darker ink and bold outlines. Sterile, single-use needles, fresh gloves and suitable protective barriers are used as part of the studio hygiene procedures.',
  },
];

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Experience That Shows in the Work',
    description:
      'Cover-up tattoos require a different level of planning from tattoos on clear skin. Experience with different ink densities, colours, styles and tattoo ages helps inform decisions about placement, shading and design selection.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest About What Is Possible',
    description:
      'Some existing tattoos can be covered directly, while others may benefit from laser fading or a more extensive redesign. Recommendations are based on the condition of the original tattoo and the intended result.',
  },
  {
    icon: Palette,
    title: 'Choosing the Right Design',
    description:
      'An effective cover-up should look like a considered tattoo in its own right, rather than simply a layer over an older design. The new composition is planned around the body, the client’s preferences and the technical requirements of concealing the original.',
  },
  {
    icon: Clock3,
    title: 'Not Rushing the Process',
    description:
      'Some cover-ups benefit from being completed over multiple sessions. The skin needs time to recover, and the coverage achieved in the first session may need to be assessed before further work begins.',
  },
];

const styles = [
  'Blackwork and Bold Designs',
  'Geometric and Mandala Work',
  'Larger Detailed Pieces',
  'Abstract and Expressive Designs',
  'Ornamental and Decorative',
];

const coverUpFaqs = [
  {
    id: 'hidden',
    question: 'Will the old tattoo definitely be hidden?',
    answer:
      'The result depends on the darkness, colour, size and placement of the original tattoo, as well as the new design and technique used. Careful placement, shading, contrast and layering can help minimise the chance of the old work showing through. If the original tattoo may remain visible, this will be discussed during the assessment, along with the option of laser fading.',
  },
  {
    id: 'laser',
    question: 'Do I always need laser fading first?',
    answer:
      'No. Smaller or lighter tattoos may be suitable for a direct cover-up. Larger, darker or heavily detailed tattoos may benefit from laser fading because it can expand the range of possible designs. The recommendation depends on the existing tattoo and the intended result.',
  },
  {
    id: 'cost',
    question: 'How much does a cover-up cost?',
    answer:
      'The cost depends on the size and complexity of the new design, the condition of the existing tattoo, the time required and whether laser fading is recommended. A clearer estimate can be provided after the tattoo has been assessed and the design requirements discussed.',
  },
  {
    id: 'colour',
    question: 'Can you cover a colour tattoo?',
    answer:
      'Colour tattoos may be suitable for cover-ups, although some colours and combinations can present additional technical challenges. The existing colours, their intensity and the proposed design all influence the available options. An assessment helps determine the most appropriate approach.',
  },
  {
    id: 'healing',
    question: 'How long does healing take?',
    answer:
      'Cover-up tattoos generally follow a similar healing process to other tattoos. Initial healing commonly takes around two to four weeks, although the timeline varies with the tattoo size, placement and individual healing process. Follow the aftercare instructions provided by the artist, and allow the skin to heal fully before any further session.',
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
            title="A Fresh Direction for Your Old Tattoo - Cover-Up Tattoo In Goa"
            subtitle="Tattoos can change in meaning or appearance over time. Whether an old design no longer reflects your story or the original result fell short of expectations, a carefully planned cover-up can offer a new direction."
            accent="gallery"
          />

          

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-traditional-700 md:text-base">
            {['Expert Cover-Up Planning', 'Honest Tattoo Assessment', 'Custom Redesign Options', 'Laser Fading Guidance'].map((item) => (
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
              Discuss Your Cover-Up
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
            title="A Fresh Direction for Your Old Tattoo"
            subtitle="A successful cover-up starts with understanding the existing tattoo. Ink density, colour, size, placement and skin condition all influence the design options."
            centered={false}
            accent="about"
          />

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-6 text-lg leading-relaxed text-traditional-700">
              <p>
                Tattoos can change in meaning or appearance over time. Whether an old design no longer reflects your story or the original result fell short of expectations, a carefully planned cover-up can offer a new direction.
              </p>
              <p className="text-center">
                With over 20+ years of tattooing experience and extensive cover-up work, the studio approaches each project with technical care, realistic advice and a design suited to the existing tattoo.
              </p>
              <p>
                The recommended approach, expected timeline and associated costs are discussed before proceeding. A direct cover-up may be possible, or laser fading may help create greater flexibility for the new design.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-3xl border border-accent-200 bg-accent-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-traditional-900">20+</div>
                <p className="mt-2 text-traditional-600">Years of experience in real cover-up work</p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-traditional-700 shadow-sm">
                  <MapPinned className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-traditional-900">Custom</div>
                <p className="mt-2 text-traditional-600">Designs planned around your existing tattoo and skin</p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-base leading-relaxed text-traditional-600">
                  Cover-up planning is honest, practical and based on what is realistically possible for your skin and your tattoo.
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
            subtitle="A successful cover-up starts with understanding the existing tattoo. Ink density, colour, size, placement and skin condition all influence the design options."
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
            subtitle="Experience that shows in the work, honesty about what is possible, and design decisions made for real results."
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
            subtitle="The most suitable cover-up style depends on the existing tattoo's size, darkness, colours, placement and level of detail."
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

          <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-accent-200 bg-white p-6 shadow-[0_18px_40px_rgba(18,18,18,0.04)] md:p-8">
            <p className="text-lg leading-relaxed text-traditional-700">
              The recommended style will reflect both the desired aesthetic and the technical requirements of the cover-up.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
                Discuss Cover-Up Styles
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-traditional-300 bg-traditional-50 px-6 py-3 text-base font-semibold text-traditional-800 transition hover:border-accent-300 hover:text-accent-600">
                Request a Tattoo Assessment
              </a>
            </div>
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
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent-200">Visit Inkbaba</p>
              <h2 className="text-3xl font-special text-white md:text-4xl">Ink Baba Tattoo House</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-100/80 md:text-lg">
                Bring a clear photograph of the existing tattoo to start the conversation. An assessment can help establish what is possible, whether laser fading may be useful and which design options are worth considering.<br />
                <span className="mt-2 block">Address: Khalcha Wada, Arambol Beach, Pernem, Goa</span>
                <span className="mt-2 block">WhatsApp / Call: {SITE_PHONE_DISPLAY}</span>
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
