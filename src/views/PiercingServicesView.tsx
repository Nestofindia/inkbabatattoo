'use client';

import React from 'react';
import { Compass } from 'lucide-react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import ServiceCard from '@/components/services/ServiceCard';
import PiercingWorkGallery from '@/components/services/PiercingWorkGallery';
import LazyBackground from '@/components/shared/LazyBackground';
import { PIERCING_WORK_ITEMS } from '@/config/serviceWork';

const servicesData = [
  {
    id: 'chakti-piercing',
    title: 'Chakti - Professional Piercing Artist (Brazil)',
    description: '',
    features: [
      'Chakti, based in Brazil, is a professional body piercing artist known for her precision, hygiene, and artistic eye. With a deep respect for body modification as self-expression, Chakti offers a calm and confident piercing experience that blends safety, beauty, and boldness.',
      'From minimalist ear setups to elaborate curated looks, she specializes in safe placement, aftercare guidance, and elegant jewelry styling — helping clients feel both empowered and elevated.',
      'Whether it’s your first piercing or your tenth, Chakti brings professionalism, precision, and passion to every needle.',
    ],
    image: 'https://ik.imagekit.io/wt9brvtz5/piercing/chakti/chakti.jpeg',
    icon: <Compass className="w-8 h-8 text-accent-600" />,
  },
];

const PiercingServicesView: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 z-0">
          <LazyBackground
            className="absolute inset-0 bg-cover bg-center opacity-20"
            src="https://images.pexels.com/photos/7236147/pexels-photo-7236147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            backgroundPosition="center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pastel-100/90 via-warm-100/80 to-accent-100/90"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-traditional-300 rounded-full opacity-30 float-animation" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-400 rounded-full opacity-20 float-animation" />
          <div className="absolute inset-0 bg-mandala-subtle opacity-20" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader
            title="Our Piercing Services"
            subtitle="Our professional piercings experience guided by skill, safety, and a calm studio experience."
            accent="services"
          />
        </div>
      </section>

      <section className="pt-24 pb-0 bg-white">
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

      <PiercingWorkGallery items={PIERCING_WORK_ITEMS} />
    </PageTransition>
  );
};

export default PiercingServicesView;
