'use client';

import React from 'react';
import { Compass, Flower, PenTool, Sparkles } from 'lucide-react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/services/ServiceCard';
import LazyBackground from '@/components/shared/LazyBackground';

const servicesData = [
  {
    id: 'sacred-symbols',
    title: 'Sacred Symbols',
    description: 'Ancient symbolic designs with deep spiritual significance, customized for your personal journey.',
    features: [
      'Personalized symbolic consultation',
      'Research into authentic symbol meanings',
      'Custom sizing and placement advice',
      'Integration with existing tattoos',
      'Sacred ritual during tattooing session (optional)'
    ],
    image: 'https://images.pexels.com/photos/9955105/pexels-photo-9955105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: <Compass className="w-8 h-8 text-accent-600" />
  },
  {
    id: 'mandala-art',
    title: 'Mandala Art',
    description: 'Intricate geometric patterns representing the universe and inner harmony, tailored to your spiritual essence.',
    features: [
      'Personalized mandala design consultation',
      'Custom complexity and style based on preference',
      'Geometric precision and balance',
      'Integration of personal spiritual symbols',
      'Optional color or blackwork techniques'
    ],
    image: 'https://images.pexels.com/photos/7236147/pexels-photo-7236147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: <Flower className="w-8 h-8 text-accent-600" />
  },
  {
    id: 'spiritual-portraits',
    title: 'Spiritual Portraits',
    description: 'Mystical and ethereal portrait work infused with spiritual elements that capture divine essence.',
    features: [
      'Photorealistic portrait techniques',
      'Integration of spiritual elements and symbols',
      'Custom background with sacred geometry',
      'Multiple design consultations',
      'Specialized shading and light work'
    ],
    image: 'https://images.pexels.com/photos/3283121/pexels-photo-3283121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: <PenTool className="w-8 h-8 text-accent-600" />
  },
  {
    id: 'ritual-tattoos',
    title: 'Custom Ritual Tattoos',
    description: 'Unique designs created through a personalized spiritual ritual process to mark significant life transitions.',
    features: [
      'Pre-tattoo meditation and intention setting',
      'Personal sacred ritual development',
      'Integration of personal spiritual beliefs',
      'Custom design based on spiritual guidance',
      'Sacred space creation during tattooing'
    ],
    image: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: <Sparkles className="w-8 h-8 text-accent-600" />
  }
];

const ServicesView: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <LazyBackground
            className="absolute inset-0 bg-cover bg-center opacity-20"
            src="https://images.pexels.com/photos/7236147/pexels-photo-7236147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            title="Our Spiritual Tattoo Services" 
            subtitle="Discover our specialized tattoo services that connect art with spiritual meaning and transform your body into a canvas of sacred expression."
            accent="services"
          />
        </div>
      </section>

      {/* Services Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
                icon={service.icon}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-traditional-50 to-warm-100 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-mandala-subtle opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader 
            title="Your Tattoo Journey with Us" 
            subtitle="We keep the tattooing experience simple, hygienic and comfortable, so you can feel confident at every stage. Consultation : We walk through"
            accent="process"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="card-traditional group hover:scale-105">
              <div className="p-8">
                <div className="mb-6">
                  <div className="p-4 bg-accent-100 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-accent-600" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-traditional-900">Consultation</h3>
                <p className="text-traditional-600">
                  We begin with an in-depth conversation about your spiritual journey, symbols that resonate with you, 
                  and the intention behind your tattoo.
                </p>
              </div>
            </div>

            <div className="card-traditional group hover:scale-105">
              <div className="p-8">
                <div className="mb-6">
                  <div className="p-4 bg-traditional-100 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <PenTool className="w-8 h-8 text-traditional-600" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-traditional-900">Design Creation</h3>
                <p className="text-traditional-600">
                  Our artists create custom designs that integrate spiritual symbolism with artistic excellence, 
                  providing revisions until the design perfectly aligns with your vision.
                </p>
              </div>
            </div>

            <div className="card-traditional group hover:scale-105">
              <div className="p-8">
                <div className="mb-6">
                  <div className="p-4 bg-accent-100 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Flower className="w-8 h-8 text-accent-600" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-traditional-900">Sacred Preparation</h3>
                <p className="text-traditional-600">
                  Before your session, we cleanse our space and tools with intention, creating a sacred environment 
                  for the tattoo ritual to take place.
                </p>
              </div>
            </div>

            <div className="card-traditional group hover:scale-105">
              <div className="p-8">
                <div className="mb-6">
                  <div className="p-4 bg-traditional-100 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Compass className="w-8 h-8 text-traditional-600" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-traditional-900">Tattoo Journey</h3>
                <p className="text-traditional-600">
                  The tattoo session becomes a transformative experience where art, spirit, and intention merge to 
                  create a permanent spiritual marker on your physical body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicesView;