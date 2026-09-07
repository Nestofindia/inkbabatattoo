'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock3, CalendarDays, Sparkles } from 'lucide-react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import LazyImage from '@/components/shared/LazyImage';

const featuredPost = {
  title: 'Why a Meaningful Tattoo Deserves More Than a Quick Decision',
  category: 'Studio Journal',
  date: '7 September 2026',
  readTime: '5 min read',
  heroImage:
    'https://ik.imagekit.io/wt9brvtz5/yoga/PHOTO-2026-08-10-14-04-18.jpg',
  excerpt:
    'At Ink Baba, we believe a lasting piece of art should be shaped by clarity and intention. Here is how we help clients slow down, reflect, and arrive at a design that feels real to them.',
};

const relatedPosts = [
  {
    title: 'How to choose a design that still feels like you years later',
    category: 'Tattoo Wisdom',
    date: '2 September 2026',
  },
  {
    title: 'A slower approach to body art: why intention matters',
    category: 'Creative Rituals',
    date: '24 August 2026',
  },
  {
    title: 'What makes a tattoo experience feel personal, not rushed',
    category: 'Studio Life',
    date: '15 August 2026',
  },
];

const BlogView: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100 py-28 md:py-32">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(196,151,94,0.18),_transparent_45%)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <SectionHeader
            title="Studio Journal"
            subtitle="Thoughtful notes from our studio, our rituals, and the conversations behind the art."
            accent="about"
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <article className="overflow-hidden rounded-[2rem] border border-traditional-200 bg-traditional-50 shadow-traditional">
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative h-full min-h-[320px]">
                <LazyImage
                  src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-600">
                  {featuredPost.category}
                </p>
                <h2 className="mt-4 font-special text-3xl font-bold text-traditional-900 md:text-4xl">
                  {featuredPost.title}
                </h2>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-traditional-600">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-accent-600" />
                    {featuredPost.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-accent-600" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <p className="mt-6 text-lg leading-relaxed text-traditional-700">{featuredPost.excerpt}</p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-traditional-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-gradient-to-br from-traditional-50 to-warm-100 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10 flex items-center gap-3 text-traditional-700">
            <Sparkles className="h-5 w-5 text-accent-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">Latest notes</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <div key={post.title} className="rounded-[1.75rem] border border-traditional-200 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-600">{post.category}</p>
                <h3 className="mt-4 font-special text-2xl font-bold text-traditional-900">{post.title}</h3>
                <p className="mt-4 text-sm text-traditional-500">{post.date}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 transition hover:text-accent-700"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogView;
