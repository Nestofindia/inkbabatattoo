'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Send, Sparkles, Star } from 'lucide-react';
import LazyBackground from '../shared/LazyBackground';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-traditional-800 to-traditional-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 opacity-10 z-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <LazyBackground
          className="absolute inset-0 bg-cover bg-center"
          src="https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </motion.div>

      {/* Decorative Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent-400 rounded-full opacity-20 float-animation"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent-300 rounded-full opacity-30 float-animation"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-accent-400 rounded-full opacity-10 float-animation"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-accent-500 rounded-full opacity-15 float-animation"></div>
      </div> */}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="w-6 h-6 text-accent-400" fill="currentColor" />
            <span className="text-accent-300 font-medium text-lg font-logo font-condensed-bold">Begin Your Journey</span>
            <Star className="w-6 h-6 text-accent-400" fill="currentColor" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-special font-bold mb-8 text-white">
            Ready to Ink Your <span className="font-logo font-condensed-bold text-accent-400">Sacred Spirit</span>?
          </h2>
          
          <p className="text-xl md:text-2xl text-warm-200 mb-12 leading-relaxed max-w-3xl mx-auto font-body">
            Every spiritual journey deserves to be honored with sacred art. 
            Let's create something meaningful together that connects with your soul and celebrates your unique path.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="btn-primary text-xl px-12 py-5 bg-accent-500 hover:bg-accent-600 border-accent-500 hover:border-accent-600 font-logo font-condensed-bold"
            >
              <Sparkles size={20} />
              Start Your Sacred Journey
            </Link>
            
            <Link 
              href="/gallery" 
              className="btn-outline text-xl px-12 py-5 border-white text-white hover:bg-white hover:text-traditional-900 font-logo font-condensed-bold"
            >
              <Send size={20} />
              Explore Our Art
            </Link>
          </div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2 font-logo font-condensed-bold">10+</div>
              <div className="text-warm-300 font-body">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2 font-logo font-condensed-bold">500+</div>
              <div className="text-warm-300 font-body">Sacred Tattoos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2 font-logo font-condensed-bold">100%</div>
              <div className="text-warm-300 font-body">Spiritual Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;