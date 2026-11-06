'use client';

import React from 'react';
import Link from 'next/link';
import { BadgeCheck, Clock3, HeartHandshake, MapPinned, Palette, ShieldCheck, Sparkles } from 'lucide-react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import LazyImage from '@/components/shared/LazyImage';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { GOOGLE_MAPS_URL, SITE_PHONE_DISPLAY, WHATSAPP_URL } from '@/config/links';

const processSteps = [
  {
    title: '1. Consultation: Understanding Your Idea',
    text:
      'We start by discussing your idea, preferred style, reference images and intended placement. We’ll consider the size, body area and level of detail, then explain what is realistic for your design.',
  },
  {
    title: '2. Developing the Design',
    text:
      'Our team develops the design around your preferences and the practical needs of tattooing. Depending on the reference, we may recommend adjustments to the size, proportions, line weight or detail so the artwork works well on skin.',
  },
  {
    title: '3. Placement and Stencil Approval',
    text:
      'Before tattooing begins, we apply a stencil so you can review the size, angle and placement. If adjustments are needed, discuss them with our team before approving the final position.',
  },
  {
    title: '4. The Tattoo Session',
    text:
      'Once you’re comfortable with the design and placement, the session can begin. Discomfort varies depending on the placement, size, session length and individual pain tolerance.',
  },
];

const styleCategories = [
  {
    title: 'Realism and Portrait Tattoos',
    description:
      'Realism focuses on creating lifelike images through shading, tonal transitions, detail and contrast. Portraits, animals and other subjects can be approached in black and grey or colour.',
  },
  {
    title: 'Geometric and Mandala Tattoos',
    description:
      'Geometric tattoos use lines, shapes, symmetry and repetition to create structured compositions. Mandala designs often feature radial patterns and intricate detail.',
  },
  {
    title: 'Ornamental and Decorative Tattoos',
    description:
      'Ornamental tattoos use decorative forms, flowing lines and repeating patterns to complement the body. The design can be developed around the chosen placement.',
  },
  {
    title: 'Blackwork and Bold Designs',
    description:
      'Blackwork uses black ink as the main visual element, ranging from bold graphic designs to intricate patterns and larger compositions. Contrast and negative space are important parts of the style.',
  },
  {
    title: 'Hand-Poked and Tribal-Inspired Tattoos',
    description:
      'Hand-poked tattoos are created manually rather than with a powered tattoo machine. Tribal-inspired work can involve bold shapes, flowing patterns and strong contrasts.',
  },
  {
    title: 'Dotwork Tattoos',
    description:
      'Dotwork uses individual dots to create shading, texture, gradients and patterns. Dot spacing, contrast and design size require careful consideration, especially for intricate work.',
  },
  {
    title: 'Traditional Tattoos',
    description:
      'Traditional tattoo styles are known for bold outlines, clear shapes and strong colour or black-and-grey contrast. The composition needs to suit the body area and remain clear at the intended size.',
  },
  {
    title: 'Japanese-Style Tattoos and Tebori',
    description:
      'Japanese-style tattoos often use established motifs, flowing compositions and carefully balanced elements. Tebori is a traditional Japanese hand-tattooing technique that requires specific expertise.',
  },
  {
    title: 'Abstract Realism, Bio-Organic and Trash Polka',
    description:
      'These styles offer different approaches to more experimental tattooing, combining recognisable subjects with expressive forms and layered graphic compositions.',
  },
  {
    title: 'Fine-Line, Typography and Calligraphy',
    description:
      'Fine-line tattoos use delicate lines and careful detail. Typography and lettering focus on the shape, spacing and readability of words, names, dates or quotes.',
  },
];

const artistFaqs = [
  {
    id: 'pain',
    question: 'Does getting a tattoo hurt?',
    answer:
      'Tattooing involves some discomfort, but the experience varies between people and body areas. Placement, tattoo size, session length and individual pain tolerance can all affect how it feels. We can explain what to expect for your planned tattoo.',
  },
  {
    id: 'design',
    question: 'Can I bring a design from the internet?',
    answer:
      'Yes. Reference images are helpful for explaining what you like, whether that’s a particular style, subject, composition or detail. We’ll assess whether the design is suitable for your chosen size and placement.',
  },
  {
    id: 'age',
    question: 'What is the minimum age for a tattoo at Inkbaba?',
    answer:
      'Inkbaba tattoos clients aged 18 and above, subject to valid identification and the studio’s requirements. Please bring appropriate identification to your appointment.',
  },
  {
    id: 'swim',
    question: 'When can I swim after getting a tattoo?',
    answer:
      'Avoid swimming, soaking the tattoo or exposing it to conditions that could interfere with healing until the skin has fully healed. This often takes around two to four weeks, but it may take longer.',
  },
  {
    id: 'touch-up',
    question: 'Do you offer touch-ups?',
    answer:
      'Touch-up requirements depend on how the tattoo heals, the design and the original work. We’ll explain the studio’s touch-up policy when discussing your booking.',
  },
  {
    id: 'style',
    question: 'How do I choose the right tattoo style?',
    answer:
      'Start with the artwork you’re drawn to. Consider whether you prefer bold designs, delicate lines, realistic imagery, geometric patterns, lettering or a more experimental style.',
  },
  {
    id: 'booking',
    question: 'How far in advance should I book?',
    answer:
      'It’s best to contact us in advance, particularly if you’re travelling to Goa for a limited period or want a specialised style. Artist availability can change seasonally, so early contact gives us more opportunity to plan the consultation.',
  },
  {
    id: 'prepare',
    question: 'How should I prepare for a tattoo appointment?',
    answer:
      'Before your appointment, make sure you’ve discussed the design, placement and any relevant questions with the studio. Follow the preparation guidance provided when booking, and let the team know about any concerns that may affect your session.',
  },
];

const BestTattooArtistInGoaView: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src="https://images.pexels.com/photos/5708072/pexels-photo-5708072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Tattoo artists in Goa"
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
            title="Finding the Right Tattoo Artist In Goa - It Matters"
            subtitle="A tattoo is personal, and good work starts with understanding your idea. At Inkbaba Tattoo House in Arambol, Goa, our expert artists help you explore designs, styles and placement to suit your vision."
            accent="gallery"
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-traditional-700 md:text-base">
            {[
              'Experienced Tattoo Artists',
              'Custom Design Consultation',
              'Thoughtful Tattoo Placement',
              'Clear Pricing Guidance',
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
            title="The Tattoo Design Process"
            subtitle="A thoughtful tattoo begins with understanding, planning and a clear conversation about what you want."
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
            title="Tattoo Styles at Inkbaba"
            subtitle="Choosing a tattoo artist starts with finding a style that suits your idea. Our studio works across a range of tattoo styles and specialisms, with artist availability varying throughout the year."
            accent="styles"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {styleCategories.map(({ title, description }) => (
              <div key={title} className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-7">
                <h3 className="mb-3 text-2xl font-heading text-traditional-900">{title}</h3>
                <p className="text-base leading-relaxed text-traditional-600">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/gallery" className="btn-primary text-base">
              Explore Tattoo Styles with Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Designing a Tattoo That Ages Well"
            subtitle="A tattoo should work for you now and remain as clear as possible as your skin changes over time."
            accent="difference"
          />

          <div className="rounded-[2rem] border border-traditional-200 bg-pastel-100 p-7">
            <ul className="space-y-4 text-lg leading-relaxed text-traditional-700">
              <li><strong>Placement and body proportions:</strong> How the design fits the chosen area and follows its natural shape.</li>
              <li><strong>Line weight and contrast:</strong> Whether the outlines and details suit the intended size.</li>
              <li><strong>Level of detail:</strong> Whether fine elements have enough space to remain readable.</li>
              <li><strong>Composition:</strong> How the individual elements work together as a complete design.</li>
              <li><strong>Long-term readability:</strong> Whether the design may benefit from simplifying or adjusting certain details.</li>
            </ul>
            <p className="mt-6 text-lg leading-relaxed text-traditional-700">
              Sometimes, the best approach is to adapt a reference rather than reproduce it exactly. We’ll explain why a change may be helpful so you can make an informed decision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Hygiene, Comfort and Your Tattoo Session"
            subtitle="A professional tattoo experience should give you clear information about the process, time to ask questions and the opportunity to discuss any concerns before your session."
            accent="about"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-7 text-base leading-relaxed text-traditional-600">
              At Inkbaba, we want you to feel comfortable raising questions about hygiene, equipment, pain, breaks and what to expect. We’ll explain the process and the practical considerations for your particular tattoo.
            </div>
            <div className="rounded-[2rem] border border-traditional-200 bg-traditional-50 p-7 text-base leading-relaxed text-traditional-600">
              Larger tattoos may need multiple appointments, with suitable time for healing between sessions. We can also discuss privacy if you would prefer a more private space during your visit.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pastel-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Finding the Right Artist for Your Tattoo"
            subtitle="The best starting point is the artwork and style you connect with. Look at examples of completed tattoos, consider the type of work involved and think about how closely the artist’s specialism matches your idea."
            accent="faq"
          />

          <div className="rounded-[2rem] border border-traditional-200 bg-white p-7 text-lg leading-relaxed text-traditional-700">
            <p>
              At Inkbaba, artist availability can change throughout the year because some of our artists join the studio seasonally as guest artists. Many are based in Arambol during the December-to-February season, although availability varies.
            </p>
            <p className="mt-4">
              If you have a particular style, travel date or specific artist in mind, contact us in advance. We can help you check availability and discuss the best way to plan your project.
            </p>
            <p className="mt-4">
              You don’t need to have every detail figured out before getting in touch. A reference image, a general idea or a conversation about the style you like is enough to begin.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="The questions we hear most often before a tattoo consultation."
            accent="faq"
          />

          <FaqAccordion items={artistFaqs} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-traditional-900 via-traditional-800 to-traditional-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent-200">Visit Inkbaba Tattoo House</p>
              <h2 className="text-3xl font-special text-white md:text-4xl">Arambol, North Goa</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-100/80 md:text-lg">
                Inkbaba Tattoo House is located in Khalcha Wada, Arambol, North Goa, a short walk from Arambol Beach.<br />
                <span className="mt-2 block">Whether you have a clear design in mind or want to explore different tattoo styles, get in touch to discuss your idea and arrange your visit.</span>
                <span className="mt-2 block">Address: Khalcha Wada, Arambol, North Goa, Goa</span>
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

export default BestTattooArtistInGoaView;
