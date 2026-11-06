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
import { GOOGLE_MAPS_URL, SITE_EMAIL, SITE_PHONE_DISPLAY, WHATSAPP_URL } from '@/config/links';

const bodyPiercingFaqs = [
  {
    id: 'who',
    question: 'Who is going to pierce me?',
    answer:
      'Our expert artists provide professional body piercing services at Inkbaba. Artist availability may vary, so please contact us when booking to confirm availability.',
  },
  {
    id: 'consultation',
    question: 'Is the consultation really free?',
    answer:
      'Yes. Your consultation is free and comes with no obligation to book. You can discuss your preferences, understand the available options and decide in your own time.',
  },
  {
    id: 'pain',
    question: 'Does getting pierced hurt?',
    answer:
      'You may feel a brief pinch or pressure during the procedure. The sensation varies depending on the placement and your individual pain tolerance. Our expert artist will explain what to expect before beginning.',
  },
  {
    id: 'healing',
    question: 'How long does it take for a piercing to heal?',
    answer:
      'Healing time depends on the piercing location and your individual healing process. Some piercings heal within a few months, while cartilage and other placements can take longer. We’ll explain the expected healing period and aftercare requirements for your chosen piercing.',
  },
  {
    id: 'multiple',
    question: 'Can I get more than one piercing in one visit?',
    answer:
      'In many cases, yes. It depends on the placements, your existing piercings and whether combining them is appropriate for healing. Our team will discuss what is suitable during your consultation.',
  },
  {
    id: 'care',
    question: 'How should a fresh piercing be maintained?',
    answer:
      'Aftercare instructions tailored to your piercing will be sent to you. These will include cleaning, avoiding needless pressure or handling, and identifying symptoms that might require expert care. Consistently adhering to the advice can promote healing.',
  },
  {
    id: 'studio',
    question: 'What should I look for in a piercing studio in Goa?',
    answer:
      'Look for experienced piercing professionals, sterile single-use needles, suitable quality jewellery, clear pricing and proper aftercare guidance. A good studio should also assess your anatomy, answer your questions and explain when a piercing may not be suitable.',
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
            title="Safe, Sterile Body Piercing: Professional Piercing Studio in Goa"
            subtitle="A good piercing starts with the right guidance, not just a needle. At Inkbaba, our expert artists take the time to understand your preferences, assess your anatomy and recommend suitable placement and jewellery. Every piercing is approached with care, precision and attention to your individual needs."
            accent="gallery"
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-traditional-700 md:text-base">
            {[
              'Free, no-pressure consultation',
              'Anatomy-led piercing placement',
              'Sterile, single-use needles',
              'High-grade, nickel-free jewellery options',
              'Clear aftercare guidance and healing support',
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
              Book Your Free Consultation
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
            title="Every Piercing Starts With a Conversation"
            subtitle="At Inkbaba, every piercing begins with a free consultation. Whether you have a specific piercing in mind, a reference photo or are still exploring your options, we’ll help you understand what works best for you."
            centered={false}
            accent="about"
          />

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-6 text-lg leading-relaxed text-traditional-700">
              <p>
                We’ll discuss your previous piercing experiences, how they healed and your jewellery preferences. Our expert artist will then assess your ear, nose, navel or other intended placement and explain the options suitable for your anatomy.
              </p>
              <p>
                Not every placement is suitable for every individual. If a certain piercing isn’t appropriate for your body, we’ll explain why and, if we can, provide an alternative. To help you make an informed choice, we will also walk you through the selection of jewelry, the piercing procedure, and aftercare.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-accent-200 bg-accent-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-accent-600 shadow-sm">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <p className="text-base leading-relaxed text-traditional-600">
                  We tailor placement, jewelry and aftercare to your anatomy — never a one-size-fits-all approach.
                </p>
              </div>
              <div className="rounded-3xl border border-traditional-200 bg-traditional-50 p-6">
                <div className="mb-3 inline-flex rounded-2xl bg-white p-3 text-traditional-700 shadow-sm">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <p className="text-base leading-relaxed text-traditional-600">
                  Clear advice, no pressure and time to ask questions before you decide to proceed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Body Piercing in Goa, Planned Around You"
            subtitle="Every body is different, and the right piercing placement depends on your anatomy, preferences and the jewellery you choose."
            accent="process"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-traditional-200 bg-white p-7 shadow-[0_14px_35px_rgba(18,18,18,0.05)]">
              <h3 className="mb-4 text-2xl font-heading text-traditional-900">Jewellery Selected for Your Piercing</h3>
              <p className="text-base leading-relaxed text-traditional-600">
                Jewellery is an important part of your piercing, both in how it looks and how it fits. We offer a selection of imported, high-grade, nickel-free jewellery, including implant-grade titanium options. Our team will help you choose suitable jewellery based on your piercing, anatomy, fit and healing requirements.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
                  Ask About Jewellery
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-traditional-200 bg-white p-7 shadow-[0_14px_35px_rgba(18,18,18,0.05)]">
              <h3 className="mb-4 text-2xl font-heading text-traditional-900">A Safe, Sterile Piercing Procedure</h3>
              <p className="text-base leading-relaxed text-traditional-600">
                Before we begin, we’ll explain the process and make sure you’re comfortable with the plan. We use sterile, single-use needles and follow hygiene practices throughout the procedure. Our expert artist will work carefully and explain each step so you know what to expect. You may feel a brief pinch or pressure, depending on the placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Aftercare Support During Healing"
            subtitle="Proper aftercare is important. It helps to heal your piercing."
            accent="difference"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-7">
              <p className="text-base leading-relaxed text-traditional-600">
                We’ll provide clear instructions on cleaning your piercing, avoiding unnecessary irritation and recognising signs that may need attention. Healing times may differ based on the placement, your body and how well the piercing is cared for. Some piercings heal within a few months, while cartilage and other placements can take considerably longer.
              </p>
            </div>
            <div className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-7">
              <p className="text-base leading-relaxed text-traditional-600">
                If you have concerns during healing, contact us for guidance. Our experts will help you understand the next steps and advise whether your piercing or jewellery needs to be checked by a professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pastel-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Ear, Nose and Navel Piercing Services"
            subtitle="Every piercing is planned around your anatomy, your style and what is appropriate for the area."
            accent="styles"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[2rem] border border-traditional-200 bg-white p-6">
              <h3 className="mb-3 text-2xl font-heading text-traditional-900">Ear Piercing</h3>
              <p className="text-base leading-relaxed text-traditional-600">From lobe and helix to conch, tragus and other ear piercings, we’ll assess your ear shape and discuss suitable placements based on your anatomy and preferred look.</p>
            </div>
            <div className="rounded-[2rem] border border-traditional-200 bg-white p-6">
              <h3 className="mb-3 text-2xl font-heading text-traditional-900">Nose Piercing</h3>
              <p className="text-base leading-relaxed text-traditional-600">Whether you’re considering a nostril piercing or another nose placement, we’ll help you understand the available options and choose a position that suits your features and anatomy.</p>
            </div>
            <div className="rounded-[2rem] border border-traditional-200 bg-white p-6">
              <h3 className="mb-3 text-2xl font-heading text-traditional-900">Navel Piercing</h3>
              <p className="text-base leading-relaxed text-traditional-600">Navel anatomy varies from person to person. We’ll assess the area first and explain whether a particular placement is suitable before proceeding.</p>
            </div>
            <div className="rounded-[2rem] border border-traditional-200 bg-white p-6">
              <h3 className="mb-3 text-2xl font-heading text-traditional-900">Something Else in Mind?</h3>
              <p className="text-base leading-relaxed text-traditional-600">If you have another piercing in mind, bring it up during your consultation. Our expert artist will assess its suitability and explain the options available to you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Inkbaba for Body Piercing in Goa?"
            subtitle="At Inkbaba, piercing is approached with the same attention to detail, individual care and professional standards that define our studio."
            accent="difference"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-7">
              <p className="text-base leading-relaxed text-traditional-600">
                Our expert artists take the time to understand what you want, assess what is suitable for your anatomy and explain your options honestly. From hygiene and jewellery selection to aftercare, every stage matters.
              </p>
            </div>
            <div className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-7">
              <p className="text-base leading-relaxed text-traditional-600">
                We believe a good piercing experience comes from getting the details right, not rushing the process. You’ll receive clear guidance, realistic advice and the time you need to make an informed decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pastel-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="A Comfortable Studio Space for Every Client"
            subtitle="Located in Arambol, Inkbaba offers a relaxed, creative studio environment where you can take your time, ask questions and discuss your preferences comfortably."
            accent="about"
          />

          <div className="rounded-[2rem] border border-traditional-200 bg-white p-7 text-lg leading-relaxed text-traditional-700">
            <p>
              Instead of being clinical, our studio is meant to seem friendly. We want you to feel comfortable throughout your consultation, with clear communication and advice at every stage, whether you're receiving your first piercing or adding to an existing setup.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="FAQs"
            subtitle="Answers to the questions we hear most often before a piercing appointment."
            accent="faq"
          />

          <FaqAccordion items={bodyPiercingFaqs} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-traditional-900 via-traditional-800 to-traditional-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent-200">Book Your Piercing Consultation</p>
              <h2 className="text-3xl font-special text-white md:text-4xl">Ink Baba Tattoo House</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-100/80 md:text-lg">
                Whether you have a specific piercing in mind, a reference photo or simply a few questions, start with a free consultation at Inkbaba.<br />
                <span className="mt-2 block">We’ll discuss your preferences, assess your anatomy and guide you through placement, jewellery and aftercare before you decide to proceed.</span>
                <span className="mt-3 block">Address: Khalchawada, Arambol Market Beach Road, Arambol, Goa 403524</span>
                <span className="mt-2 block">Phone: {SITE_PHONE_DISPLAY}</span>
                <span className="mt-2 block">Email: {SITE_EMAIL}</span>
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                Book Your Free Consultation
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Message Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BodyPiercingInGoaView;
