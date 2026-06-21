'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import LazyImage from '@/components/shared/LazyImage';
import LazyVideo from '@/components/shared/LazyVideo';
import LazyBackground from '@/components/shared/LazyBackground';
import InkbabaFamilyGallery from '@/components/about/InkbabaFamilyGallery';
import { Heart, Sparkles, Award } from 'lucide-react';

const AboutView: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <LazyBackground
            className="absolute inset-0 bg-cover bg-center opacity-20"
            src="https://res.cloudinary.com/dslpdk7gs/image/upload/v1750084833/prfikiqtygparsgx5c8h.jpg"
            backgroundPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pastel-100/90 via-warm-100/80 to-accent-100/90"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-traditional-300 rounded-full opacity-30 float-animation"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-400 rounded-full opacity-20 float-animation"></div>
          <div className="absolute inset-0 bg-mandala-subtle opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader 
            title="Who We Are" 
            subtitle="More than just a tattoo studio. A place for creativity and self-expression."
            accent="about"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-traditional-900">
                Our <span className="font-accent text-accent-600">Story</span>
              </h2>
              
              <div className="space-y-6 text-lg text-traditional-700 leading-relaxed">
                <p>
                  Inkbaba Tattoo House began 18 years ago with a purpose - to create a space where tattoos feel personal, meaningful, and true to every individual. What started as a small studio in Goa has grown into a creative hub that welcomes travelers, locals and artists from around the world.
                </p>
                <p>
                  connected to real tattoo culture. Every piece we create is crafted with pride, passion and the belief that our work represents not just us, our country as well.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="text-center p-6 bg-accent-50 rounded-2xl border border-accent-200">
                  <div className="text-3xl font-bold text-accent-600 mb-2">20+</div>
                  <div className="text-traditional-600">Years of Tattoo Experience</div>
                </div>
                <div className="text-center p-6 bg-traditional-50 rounded-2xl border border-traditional-200">
                  <div className="text-3xl font-bold text-traditional-600 mb-2">15+</div>
                  <div className="text-traditional-600">Years in Goa</div>
                </div>
                <div className="text-center p-6 bg-traditional-50 rounded-2xl border border-traditional-200">
                  <div className="text-3xl font-bold text-traditional-600 mb-2">60+</div>
                  <div className="text-traditional-600">Global Artists Collaborated</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-traditional">
                {/* <img 
                  src="" 
                  alt="Tattoo artist at work" 
                  className="w-full h-[600px] object-cover"
                /> */}
                <LazyVideo
                playWhenVisible
                src="https://szekpgvomczeswpvthiy.supabase.co/storage/v1/object/public/inkbaba/banner_video/Inkbaba%20family.mp4"
                className="w-full h-[600px] object-cover"
                autoPlay
                loop
                muted
              />
                <div className="absolute inset-0 bg-gradient-to-t from-traditional-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-accent-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-traditional-200 rounded-full opacity-40"></div>
            </motion.div>
          </div>

          <div className="mt-24 pt-16 border-t border-traditional-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-traditional w-full aspect-[4/5]">
                  <LazyImage
                    src="https://ik.imagekit.io/wt9brvtz5/feature/kum_sir.jpeg"
                    alt="Kums P Kumresan — Faculty of Design & Innovation, IIT Bombay"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="order-1 lg:order-2"
              >
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-traditional-900 mb-2">
                  Kums P Kumresan (Honorary Member)
                </h3>
                <p className="text-accent-600 font-semibold text-lg mb-1">
                  Faculty of Design & Innovation, IIT Bombay
                </p>
                <p className="text-traditional-500 font-body mb-6">Powai, Mumbai</p>

                <div className="space-y-5 text-lg text-traditional-700 leading-relaxed font-body">
                  <p>
                    Working across design, technology, and education, with a long-standing interest in
                    tattoo as a form of practice and tattoo machine design & development.
                  </p>
                  <p>
                    His journey in the tattoo industry began at IIT Bombay in 2002, where he started
                    experimenting with tattoo machines and design systems. Since then, he has continued
                    to explore this space through research, teaching, and hands-on prototyping.
                  </p>
                  <p>
                    Currently involved in initiatives focused on design innovation, AI in design
                    pedagogy, and building a structured approach to tattoo education in India.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-br from-traditional-50 to-warm-100">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Our Philosophy" 
            subtitle="The guiding principles behind our ethical tattoo art and the values that shape every creation."
            accent="philosophy"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              className="card-traditional text-center group hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-8">
                <div className="mb-6">
                  <div className="p-4 bg-accent-100 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-12 h-12 text-accent-600" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-traditional-900">Listen Deeply</h3>
                <p className="text-traditional-600 leading-relaxed">
                 Every tattoo starts with understanding. We take time to connect before the needle touches skin.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card-traditional text-center group hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-8">
                <div className="mb-6">
                  <div className="p-4 bg-traditional-100 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-12 h-12 text-traditional-600" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-traditional-900">Create Ethically</h3>
                <p className="text-traditional-600 leading-relaxed">
                  No copy - paste designs, no shortcuts - Every tattoo is built from scratch to reflect the client’s real story.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card-traditional text-center group hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-8">
                <div className="mb-6">
                  <div className="p-4 bg-accent-100 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-12 h-12 text-accent-600" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-traditional-900">Honour the Process</h3>
                <p className="text-traditional-600 leading-relaxed">
                  From consultation to aftercare, we treat tattooing as a respectful and mindful journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Inkbaba Family" 
            subtitle="Meet the people who shape Inkbaba’s identity through genuine artistry and mindful creation."
            accent="team"
          />

          <InkbabaFamilyGallery />
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutView;