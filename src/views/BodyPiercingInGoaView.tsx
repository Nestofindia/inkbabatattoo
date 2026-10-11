'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  HeartHandshake,
  MapPinned,
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
    title: '1. Consultation',
    text:
      'We begin by listening to your idea, discussing the placement, your skin type and the kind of outcome you want. We explain pain levels, expectations and healing timelines before the procedure begins.',
  },
  {
    title: '2. Choosing the Right Jewelry',
    text:
      'The jewelry you are pierced with must be the correct size, gauge and material for the area. We guide you toward options that support clean healing and long-term comfort.',
  },
  {
    title: '3. The Piercing Session',
    text:
      'We mark the placement, show you the position and use single-use sterile needles. There is no rushed process and no pressure if you want to adjust the placement before the piercing is done.',
  },
  {
    title: '4. Healing & Follow-Up',
    text:
      'The first few weeks are the most important. We give you clear aftercare instructions and are available if the healing does not feel right or if you need guidance after the session.',
  },
];

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Technique and Anatomy',
    description:
      'Piercing is not just punching a hole. It requires understanding angles, depth, nerve placement and how individual anatomy changes the safest and strongest result.',
  },
  {
    icon: ShieldCheck,
    title: 'Single-Use Needles and Sterile Practice',
    description:
      'We use single-use sterile needles, clean tools, proper jewelry and strict hygiene practices so the environment remains safe from start to finish.',
  },
  {
    icon: MapPinned,
    title: 'Understanding Goa and Healing',
    description:
      'Humidity, saltwater and sand all affect healing. We understand the real conditions in Goa and guide you based on how your piercing will actually heal in this environment.',
  },
  {
    icon: BadgeCheck,
    title: 'Honest About Risk',
    description:
      'Some placements are riskier than others. We tell you if a piercing carries a higher chance of rejection or complications and recommend the safer option when needed.',
  },
];

const piercings = [
  'Earlobe and cartilage piercings',
  'Nose piercings and septum',
  'Eyebrow and lip piercings',
  'Tongue and oral piercings',
  'Belly button and navel piercings',
  'Other placements based on safety and suitability',
];

const piercingFaqs = [
  {
    id: 'pain',
    question: 'How much does a piercing hurt?',
    answer:
      'There is some discomfort, but it varies by placement and your pain tolerance. Earlobes are generally less painful than cartilage, and the experience can differ depending on the area and your body.',
  },
  {
    id: 'healing',
    question: 'How long does it take to heal?',
    answer:
      'Earlobes typically take four to six weeks, while cartilage can take months. Tongue piercings heal faster in some cases but still require more careful aftercare and food/water choices during healing.',
  },
  {
    id: 'change-jewelry',
    question: 'Can I change the jewelry quickly?',
    answer:
      'No. We recommend waiting until the piercing has healed sufficiently before changing jewelry. Changing it too early can disrupt the healing process and may cause the hole to close or become irritated.',
  },
  {
    id: 'infection',
    question: 'What if it gets infected?',
    answer:
      'Come back and let us inspect it. Most infections are caused by poor aftercare, not by the piercing itself. We can assess the area and advise whether cleaning, leaving it alone, or medical attention is needed.',
  },
  {
    id: 'sterile',
    question: 'Is everything really sterile?',
    answer:
      'Yes. We use single-use needles, clean jewelry, sterile equipment and a hygienic studio setup. We do not use piercing guns and do not cut corners on clean practice.',
  },
];

const BodyPiercingInGoaView: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="https://images.pexels.com/photos/7236147/pexels-photo-7236147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Body piercing in Goa"
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
            title="Body Piercing in Goa"
            subtitle="Safe placement, thoughtful aftercare and piercing done with clean technique and honest guidance."
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
            <Link href="/piercing-services" className="inline-flex items-center justify-center rounded-full border border-traditional-300 bg-white/70 px-6 py-3 text-base font-semibold text-traditional-800 transition hover:border-accent-300 hover:text-accent-600">
              Explore Piercing Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="A Piercing That Heals Right"
            subtitle="A body piercing is visible, personal and permanent for a while. That means the technique matters just as much as the design."
            centered={false}
            accent="about"
          />

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-6 text-lg leading-relaxed text-traditional-700">
              <p>
                Getting a piercing is a personal decision. It is visible on your body. It heals over weeks. It matters whether it is done well or done poorly.
              </p>
              <p>
                At Inkbaba, we pierce because we understand the technical side. We know where nerves are, how placement affects healing, what causes infection and how Goa’s humidity and saltwater can influence the recovery process.
              </p>
              <p>
                With more than 20 years of piercing experience across hundreds of clients and placements, we know the difference between a piercing that heals cleanly and one that creates problems. That difference starts with technique and continues through the aftercare guidance we give you.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-3xl border border-accent-200 bg-accent-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-traditional-900">20+</div>
                <p className="mt-2 text-traditional-600">Years of piercing experience</p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-traditional-700 shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="text-3xl font-bold text-traditional-900">100s</div>
                <p className="mt-2 text-traditional-600">Clients pierced across multiple placements</p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="text-base leading-relaxed text-traditional-600">
                  Our approach is simple: understand the placement, use proper technique and provide clear aftercare guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How the Piercing Works"
            subtitle="A staged process that helps you choose the right placement and heal well afterward."
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
            subtitle="Technical care, honest guidance and a studio culture built around safe healing."
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
            title="Piercings We Do"
            subtitle="Common placements and choices we work with, all guided by safety and suitability."
            accent="styles"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {piercings.map((piercing) => (
              <div key={piercing} className="flex items-center gap-3 rounded-2xl border border-traditional-200 bg-white px-5 py-4 text-base font-medium text-traditional-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-accent-600" />
                <span>{piercing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="The questions we hear before a piercing consultation."
            accent="faq"
          />

          <FaqAccordion items={piercingFaqs} />
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

export default BodyPiercingInGoaView;
