'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  Flower2,
  Heart,
  Sparkles,
  SunMedium,
  Users,
} from 'lucide-react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import LazyBackground from '@/components/shared/LazyBackground';
import LazyImage from '@/components/shared/LazyImage';
import FaqAccordion from '@/components/faq/FaqAccordion';

const retreatHighlights = [
  {
    title: 'Meaningful Tattooing',
    description:
      'A tattoo begins with clarity, story, and intention rather than pressure or trends.',
    icon: <Heart className="h-8 w-8 text-accent-600" />,
  },
  {
    title: 'Classical Hatha Yoga',
    description:
      'Start each day with grounded practice, breath awareness, and mindful movement.',
    icon: <SunMedium className="h-8 w-8 text-accent-600" />,
  },
  {
    title: 'Ayurveda & Wellness',
    description:
      'Nourishing meals, mindful rhythm, and holistic guidance support deeper balance.',
    icon: <Flower2 className="h-8 w-8 text-accent-600" />,
  },
  {
    title: 'Creative Reflection',
    description:
      'Draw, journal, paint, and spend time in nature to let ideas unfold naturally.',
    icon: <Sparkles className="h-8 w-8 text-accent-600" />,
  },
];

const schedule = [
  {
    time: '6:00 AM',
    title: 'Traditional Classical Hatha Yoga',
    text: 'A grounded morning practice guided by Yogacharya Nipun Sharma, helping you align body, breath, and attention.',
  },
  {
    time: '8:00 AM',
    title: 'Ayurvedic Breakfast',
    text: 'A wholesome vegetarian or vegan morning meal inspired by Ayurvedic principles and seasonal ingredients.',
  },
  {
    time: '9:30 AM',
    title: 'Personal Consultation',
    text: 'Meet with the team for tattoo guidance, holistic wellness insight, and a deeper conversation around your story.',
  },
  {
    time: '11:00 AM',
    title: 'Personal Time',
    text: 'Journal, rest, walk, sketch, or simply enjoy quiet time without pressure to decide too quickly.',
  },
  {
    time: '2:00 PM',
    title: 'Pranayama',
    text: 'Breathwork designed to deepen focus, calm the nervous system, and create internal clarity.',
  },
  {
    time: '3:00 PM',
    title: 'Creative & Holistic Experiences',
    text: 'Pottery, drawing, painting, therapeutic massage, nature walks, and reflective practices inspired by the retreat journey.',
  },
  {
    time: '4:00 PM',
    title: 'Meditation',
    text: 'A guided session for stillness, emotional balance, and space to listen to what feels most meaningful.',
  },
  {
    time: '5:30 PM',
    title: 'Wholesome Dinner',
    text: 'A nourishing vegetarian or vegan dinner prepared with seasonal ingredients and Ayurvedic wisdom.',
  },
  {
    time: '7:00 PM',
    title: 'Evening Inspiration',
    text: 'Talks, documentaries, symbolism sessions, personal reflection, and open conversation around art, life, and inner discovery.',
  },
];

const partnerBenefits = [
  'Personal tattoo consultation with senior artist Sachin Aarote',
  'Holistic wellness guidance with Yogacharya Nipun Sharma',
  'Classical Hatha Yoga, meditation, and pranayama',
  'Ayurvedic meals, mindful routines, and creative workshops',
  'A slower, more conscious tattoo decision-making process',
  'Nature-led, reflective time away from normal routine',
];

const retreatFaqs = [
  {
    id: 'privacy',
    question: 'How do you ensure privacy during a private session?',
    answer:
      'We use privacy curtains and have a completely private space for larger projects, including full-body suits. CCTV is limited to common areas, never the private tattooing space. Female clients can also request a female artist for added comfort and privacy.',
  },
  {
    id: 'weight-change',
    question: 'Will my tattoo change if I gain or lose weight?',
    answer:
      'Minor weight changes usually do not affect a tattoo significantly. For larger body changes, the tattoo may stretch or shift slightly depending on the placement. We carefully choose the size and placement during consultation to help minimise these effects.',
  },
  {
    id: 'diabetes',
    question: 'Can people with diabetes get a tattoo?',
    answer:
      'Yes, but extra care is needed. If your diabetes is well controlled, tattooing may be possible. We recommend getting medical clearance from your doctor, informing our artist beforehand, and following strict aftercare instructions to support proper healing.',
  },
  {
    id: 'allergy',
    question: 'Can I have an allergic reaction to a tattoo?',
    answer:
      'Yes, although reactions are uncommon. If you have sensitive skin or known allergies, please tell us before your session. We can recommend a patch test beforehand to check for possible sensitivity. We use professional-grade materials and maintain strict hygiene, but a patch test cannot guarantee that a reaction will not occur.',
  },
  {
    id: 'design-time',
    question: 'How much time does a custom tattoo design take?',
    answer:
      'Custom designs need time and thought. Depending on the complexity, references, and level of detailing, the design process may take anywhere from a few hours to several days. We take the time needed to create a design that feels right for you rather than rushing the process.',
  },
  {
    id: 'approval',
    question: 'When will I see and approve my tattoo design?',
    answer:
      'Custom designs are shared after the required deposit is paid. This allows our artists to dedicate the necessary time to creating your design. We discuss your ideas and revisions during the process, and tattooing begins only after you approve the final design.',
  },
  {
    id: 'alcohol',
    question: 'Can I get a tattoo after drinking alcohol or taking drugs?',
    answer:
      'No. Please come to your appointment sober. Alcohol and drugs can affect bleeding, pain, decision-making, and healing, so we do not tattoo clients who are under the influence.',
  },
  {
    id: 'travel',
    question: 'Can I travel after getting a tattoo?',
    answer:
      'Yes. We prepare your tattoo with a protective dressing and provide a comfortable bed pad to help protect the area and make travelling easier. We will also guide you through the aftercare before you leave.',
  },
  {
    id: 'veins',
    question: 'Can I get a tattoo over visible veins?',
    answer:
      'Yes. We tattoo all over the body, including areas with visible veins. Our artist will check the area mainly to ensure the placement works well with the design and does not affect its overall appearance.',
  },
  {
    id: 'healing',
    question: 'How long does a tattoo take to heal?',
    answer:
      'The outer layer usually heals in 2–4 weeks, while deeper healing can take up to 2–3 months. Healing time varies depending on the tattoo, placement, size, and your skin.',
  },
  {
    id: 'safe',
    question: 'Is getting a tattoo safe?',
    answer:
      'Yes, tattooing is generally safe when done professionally with proper hygiene and sterile equipment. At Ink Baba Tattoo House, we follow strict hygiene and safety practices to reduce the risk of infection and other complications.',
  },
  {
    id: 'cover-up',
    question: 'Can you cover an existing tattoo?',
    answer:
      'Yes. Our experienced artists specialise in cover-ups and reworkings. They carefully study the existing tattoo and create a design that works with it, giving you the best possible result.',
  },
  {
    id: 'needles',
    question: 'What quality of tattoo needles do you use?',
    answer:
      'We use premium, professional-grade tattoo needles from leading brands trusted by artists worldwide. Every needle or cartridge is sterile, single-use, and opened fresh for your session.',
  },
  {
    id: 'why-ink-baba',
    question: 'Why should I choose Ink Baba Tattoo House?',
    answer:
      'Because your tattoo deserves more than just a service. Our experienced artists, international artist collaborations, high-quality equipment, strict hygiene, and personalised consultations come together to give you a tattoo experience built around your idea, your story, and your comfort.',
  },
  {
    id: 'pregnancy',
    question: 'Can I get a tattoo during or after pregnancy?',
    answer:
      'We recommend waiting until after pregnancy before getting a tattoo. Pregnancy can affect your skin, immune system, and healing, so for your safety and comfort, it is better to plan your tattoo for later. After pregnancy, please consult your doctor about when it is safe for you to get tattooed, as recovery time can vary from person to person.',
  },
];

const galleryImages = [
  'https://ik.imagekit.io/wt9brvtz5/yoga/25A2666C-194A-4755-B3A6-0FA5CA247E84.jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/Videoframe_20220827_001648_com.huawei.himovie.overseas.jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/yoga_retreat_sweden-scaled-1.jpeg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/Screenshot%202026-07-26%20at%202.19.16%20PM.png',
  'https://ik.imagekit.io/wt9brvtz5/yoga/trikonasana.JPG',
  'https://ik.imagekit.io/wt9brvtz5/yoga/Prasarita%20Padottanasana.JPG',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-19%20(1).jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-19.jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18%20(9).jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18%20(8).jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18%20(7).jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18%20(6).jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18%20(5).jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18%20(4).jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18%20(3).jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18%20(2).jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18%20(1).jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/IMG_4797.JPG',
  'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18.jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/IMG_4753.JPG',
  'https://ik.imagekit.io/wt9brvtz5/yoga/IMG_4748.JPG',
  'https://ik.imagekit.io/wt9brvtz5/yoga/IMG_4507.JPG',
  'https://ik.imagekit.io/wt9brvtz5/yoga/IMG_0725.JPG',
  'https://ik.imagekit.io/wt9brvtz5/yoga/IFY%20Nipun.jpeg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/from%20the%20fitzgeralds(1).png',
  'https://ik.imagekit.io/wt9brvtz5/yoga/dwihasta%20Bhujasana.jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/DSC08998b.JPG',
  'https://ik.imagekit.io/wt9brvtz5/yoga/378287690_705207654270424_8164464757210872005_n.jpg',
  'https://ik.imagekit.io/wt9brvtz5/yoga/54525168_308173093227565_3444459219003113472_n.jpg',
];

const YogaRetreatView: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100 py-28 md:py-36">
        <div className="absolute inset-0 z-0">
          <LazyBackground
            className="absolute inset-0 bg-cover bg-center opacity-20"
            src="https://ik.imagekit.io/wt9brvtz5/yoga/yoga_retreat_sweden-scaled-1.jpeg"
            backgroundPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pastel-100/90 via-warm-100/80 to-accent-100/90" />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-10 top-20 h-24 w-24 rounded-full border-2 border-traditional-300 opacity-30 float-animation" />
          <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full border-2 border-accent-400 opacity-20 float-animation" />
          <div className="absolute inset-0 bg-mandala-subtle opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <SectionHeader
            title="Sacred Tattooing & Holistic Yoga Retreat"
            subtitle="A unique experience where meaningful tattooing meets Yoga, Ayurveda, meditation, nature, and inner reflection."
            accent="services"
          />
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">A journey of art, awareness & inner transformation</p>
              <h2 className="mb-8 font-special text-4xl font-bold text-traditional-900 md:text-5xl">
                A permanent decision deserves more than speed.
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-traditional-700">
                <p>
                  Every tattoo tells a story. It may mark a new beginning, honour someone you love, celebrate a milestone, or reflect a belief that has shaped your life. We believe that because a tattoo is permanent, the decision behind it deserves time, clarity, and intention.
                </p>
                <p>
                  This philosophy inspired the Sacred Tattooing & Holistic Yoga Retreat — a collaboration between Ink Baba and Yog Temple. Rather than treating Yoga as a separate activity, it becomes part of the journey leading towards your tattoo, creating space to slow down, reflect, and connect with what genuinely matters.
                </p>
                <p>
                  The purpose is simple: to approach a permanent decision with greater awareness, confidence, and self-truth. Your story remains yours. We simply create the environment that helps it become clearer before it is carried on the body for life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] shadow-traditional">
                <LazyImage
                  src="https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18.jpg"
                  alt="Yoga retreat in Goa"
                  className="h-[560px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-traditional-900/20 to-transparent" />
              </div>
              <div className="absolute -left-6 top-10 h-24 w-24 rounded-full border-4 border-accent-300 opacity-60" />
              <div className="absolute -bottom-6 right-8 h-32 w-32 rounded-full bg-traditional-200 opacity-40" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-traditional-50 to-warm-100 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            title="Why Yoga & Tattooing?"
            subtitle="Yoga encourages us to slow down and observe ourselves. Meditation creates moments of stillness. Pranayama brings attention to the breath. Creative practices allow expression beyond words. Together, these experiences create space for reflection."
            accent="process"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {retreatHighlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="card-traditional group p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-100 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="mb-4 font-heading text-2xl font-bold text-traditional-900">{item.title}</h3>
                <p className="leading-relaxed text-traditional-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            title="A Typical Day"
            subtitle="Each day balances movement, nourishment, reflection, creativity, and the tattoo journey in a calm and spacious rhythm."
            accent="work"
          />

          <div className="mt-16 grid gap-6">
            {schedule.map((item, index) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="flex flex-col gap-4 rounded-3xl border border-traditional-200 bg-traditional-50 p-6 md:flex-row md:items-center md:p-8"
              >
                <div className="flex w-full max-w-[140px] items-center justify-center rounded-2xl bg-accent-100 px-4 py-3 font-heading text-lg font-bold text-accent-700 md:w-[140px]">
                  {item.time}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-traditional-900">{item.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-traditional-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-pastel-100 via-white to-warm-100 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="relative self-start overflow-hidden rounded-[2rem] shadow-traditional">
              <div className="absolute -left-6 top-8 h-20 w-20 rounded-full border-4 border-accent-300/70" />
              <LazyImage
                src="https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-19%20(1).jpg"
                alt="Retreat experience"
                className="h-[420px] w-full object-cover lg:h-[500px]"
              />
            </div>

            <div className="flex flex-col justify-center rounded-[2rem] border border-traditional-200 bg-white/80 p-6 shadow-soft sm:p-8 lg:p-10">
              <SectionHeader
                title="More Than a Tattoo"
                subtitle="This is not about forcing spirituality into every design. It is about creating a more conscious experience."
                centered={false}
                accent="philosophy"
              />

              <div className="space-y-6 text-lg leading-relaxed text-traditional-700">
                <p>
                  The Sacred Tattooing & Holistic Yoga Retreat is not about making every tattoo spiritual. It is about making the experience more conscious. Your tattoo can be deeply symbolic, culturally inspired, connected to someone you love, or simply an artistic expression that genuinely represents you.
                </p>
                <p>
                  What matters is that the decision feels like your own. The retreat gives you the time and space to understand that before turning the idea into something permanent. This is not simply a tattoo appointment. It is an experience you carry with the tattoo.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {partnerBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-traditional-200 bg-white px-4 py-4 shadow-soft">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <p className="text-traditional-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            title="Our Story"
            subtitle="Two different paths. One shared intention. A retreat shaped to make meaningful tattooing feel calmer, more conscious, and deeply personal."
            accent="about"
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="card-traditional p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100">
                <Compass className="h-7 w-7 text-accent-600" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-traditional-900">Meet Sachin Aarote</h3>
              <p className="mt-4 text-lg font-semibold text-accent-600">Founder, Ink Baba</p>
              <p className="mt-5 leading-relaxed text-traditional-600">
                With more than two decades of experience, Sachin works with people from all over the world to understand their story before translating it into custom artwork. His approach blends artistic experience, personal consultation, symbolism, body placement, and thoughtful design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.08 }}
              className="card-traditional p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-traditional-100">
                <Flower2 className="h-7 w-7 text-traditional-700" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-traditional-900">Meet Yogacharya Nipun Sharma</h3>
              <p className="mt-4 text-lg font-semibold text-accent-600">Founder, Yog Temple</p>
              <p className="mt-5 leading-relaxed text-traditional-600">
                Nipun brings more than 15 years of practice and teaching in Classical Hatha Yoga, Ayurveda, meditation, breathwork, and holistic wellbeing. His role is to create experiences that support presence, balance, and awareness before a permanent choice is made.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-traditional-50 to-warm-100 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="relative self-start overflow-hidden rounded-[2rem] shadow-traditional">
              <div className="absolute -right-4 top-8 h-20 w-20 rounded-full bg-traditional-200/80" />
              <LazyImage
                src="https://ik.imagekit.io/wt9brvtz5/yoga/378287690_705207654270424_8164464757210872005_n.jpg"
                alt="Retreat group session"
                className="h-[420px] w-full object-cover lg:h-[500px]"
              />
            </div>

            <div className="flex flex-col justify-center rounded-[2rem] border border-traditional-200 bg-white/80 p-6 shadow-soft sm:p-8 lg:p-10">
              <SectionHeader
                title="Who Can Join the Retreat?"
                subtitle="The Sacred Tattooing & Holistic Yoga Retreat is open to anyone who feels drawn to a more thoughtful, creative, and meaningful experience."
                centered={false}
                accent="services"
              />

              <div className="space-y-5 text-lg leading-relaxed text-traditional-700">
                <p>
                  You do not need to be experienced in Yoga, meditation, or Ayurveda, and you do not need to arrive with a final tattoo design. The retreat may be especially meaningful for people who are planning their first tattoo, reflecting on a personal milestone, or simply looking for more time and clarity before making a permanent decision.
                </p>
                <p>
                  It is also open to artists, creatives, couples, friends, and solo travellers who want to step away from routine and reconnect with themselves through art, breath, ritual, and reflection.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4">
                {[
                  'Planning their first tattoo and want time to reflect before making a permanent decision',
                  'Looking for a tattoo connected to an important life experience, relationship, memory, or personal milestone',
                  'Going through a period of change, growth, or a new beginning',
                  'Interested in meaningful tattooing rather than choosing only from trends or references',
                  'Curious about Yoga, meditation, Ayurveda, breathwork, creativity, and holistic living',
                  'Travelling to Goa and looking for an experience that combines art, wellbeing, and personal reflection',
                  'Artists, creatives, or individuals who want time away from everyday routine to reconnect with themselves',
                  'Couples, friends, or solo travellers who would like to experience the retreat together',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-traditional-200 bg-white p-4 shadow-soft">
                    <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                      <Users className="h-4 w-4" />
                    </div>
                    <p className="text-lg text-traditional-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            title="Retreat Gallery"
            subtitle="A glimpse into the atmosphere, practice, and creative energy of the Sacred Tattooing & Holistic Yoga Retreat."
            accent="gallery"
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div key={`${image}-${index}`} className="group overflow-hidden rounded-[1.5rem] shadow-soft">
                <LazyImage
                  src={image}
                  alt={`Yoga retreat image ${index + 1}`}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-traditional-50 to-warm-100 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="A few common questions for guests preparing to begin their retreat journey."
            accent="faq"
          />

          <FaqAccordion items={retreatFaqs} />
        </div>
      </section>

      <section className="bg-traditional-900 py-24 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent-300">Begin your journey</p>
              <h2 className="font-special text-4xl font-bold text-white md:text-5xl">
                Sacred Tattooing & Holistic Yoga Retreat
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-warm-100">
                Goa, India — a place to slow down, reflect, and move toward a tattoo decision that feels more intentional, personal, and meaningful.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2 text-base font-semibold"
              >
                Enquire About the Retreat
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/tattoo-retreat"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Explore the Tattoo Retreat
              </Link>
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-4 text-left backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-100/80">More details</p>
              <a
                href="https://www.yogtemple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-base font-medium text-accent-300 transition hover:text-accent-200"
              >
                Visit www.yogtemple.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default YogaRetreatView;
