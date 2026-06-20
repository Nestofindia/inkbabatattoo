'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flower2, Heart, Sparkles } from 'lucide-react';
import LazyVideo from '../shared/LazyVideo';
import { ABOUT_VIDEO_URL } from '../../config/homeVideos';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-traditional-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="flex items-center gap-3 mb-6">
              <Flower2 className="text-accent-500 w-8 h-8" />
              <span className="text-traditional-600 font-medium text-lg font-logo font-condensed-bold">Our Story</span>
            </div> */}
            
            <h2 className="text-4xl md:text-5xl font-special font-bold mb-8 text-traditional-900">
              Our <span className="font-logo font-condensed-bold text-accent-600">Story</span>
            </h2>
            
            <div className="space-y-6 text-lg text-traditional-700 leading-relaxed font-body">
              <p>
                InkBaba Tattoo House — a team of artists who believe tattoos should feel real, personal, and true to you. Every piece is shaped around your story and style, whether it’s something small or something bold.
              </p>
              <p>
                Goa is our home and inspiration. Its culture and creativity guide our work, along with a team of style-driven artists from India and across the world who bring their own design language and perspective.
              </p>
              <p>
                We bring global tattoo styles to you, crafting every line and shade with care so your tattoo looks good, feels good, and stays meaningful.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent-100 rounded-full">
                  <Heart className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-traditional-900 mb-1 font-logo font-condensed-bold">Meaningful Ink</h4>
                  <p className="text-traditional-600 text-sm font-body">Every tattoo starts with purpose and ends in precision.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent-100 rounded-full">
                  <Sparkles className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-traditional-900 mb-1 font-logo font-condensed-bold">Global Artists</h4>
                  <p className="text-traditional-600 text-sm font-body">Featuring artists from around the world with rare skills and original styles.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/about" className="btn-primary text-lg font-logo font-condensed-bold">
                 Read More
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* <div className="relative rounded-3xl overflow-hidden shadow-traditional">
              <img 
                src="https://images.pexels.com/photos/6636034/pexels-photo-6636034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Spiritual tattoo artistry" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-traditional-900/20 to-transparent"></div>
            </div> */}
            <div className="relative rounded-3xl overflow-hidden shadow-traditional">
              <LazyVideo
                priority
                src={ABOUT_VIDEO_URL}
                className="w-full h-[600px] object-cover"
                autoPlay
                loop
                muted
              />
              <div className="absolute inset-0 bg-gradient-to-t from-traditional-900/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            {/* <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-accent-300 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-traditional-200 rounded-full opacity-40"></div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;