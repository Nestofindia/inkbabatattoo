'use client';

// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Compass, Flower, PenTool, Sparkles, ArrowRight } from 'lucide-react';

// const services = [
//   {
//     id: 1,
//     title: 'Sacred Symbols',
//     description: 'Ancient symbols with deep spiritual meaning, customized for your personal journey and inner wisdom.',
//     icon: <Compass className="w-12 h-12 text-accent-500" />,
//     link: '/services#sacred-symbols',
//     color: 'accent'
//   },
//   {
//     id: 2,
//     title: 'Mandala Art',
//     description: 'Intricate geometric patterns representing the universe and inner harmony through sacred geometry.',
//     icon: <Flower className="w-12 h-12 text-traditional-500" />,
//     link: '/services#mandala-art',
//     color: 'traditional'
//   },
//   {
//     id: 3,
//     title: 'Spiritual Portraits',
//     description: 'Mystical and ethereal portrait work infused with spiritual elements that capture divine essence.',
//     icon: <PenTool className="w-12 h-12 text-accent-500" />,
//     link: '/services#spiritual-portraits',
//     color: 'accent'
//   },
//   {
//     id: 4,
//     title: 'Custom Ritual Tattoos',
//     description: 'Unique designs created through a personalized spiritual ritual process for transformation.',
//     icon: <Sparkles className="w-12 h-12 text-traditional-500" />,
//     link: '/services#ritual-tattoos',
//     color: 'traditional'
//   }
// ];

// const ServicesPreview: React.FC = () => {
//   return (
//     <section className="py-24 bg-gradient-to-br from-warm-50 to-pastel-100 relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-mandala-subtle opacity-20"></div>
      
//       <div className="container mx-auto px-4 md:px-8 relative z-10">
//         <motion.div 
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex items-center justify-center gap-2 mb-6">
//             <div className="w-12 h-px bg-traditional-400"></div>
//             <Sparkles className="w-6 h-6 text-accent-500" />
//             <div className="w-12 h-px bg-traditional-400"></div>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-special font-bold mb-6 text-traditional-900">
//             Our Sacred <span className="font-logo font-condensed-bold text-accent-600">Services</span>
//           </h2>
//           <p className="text-xl text-traditional-600 max-w-3xl mx-auto leading-relaxed font-body">
//             We offer a range of spiritual tattoo services, each designed to create meaningful and 
//             transformative art that resonates with your inner self and honors ancient traditions.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div 
//               key={service.id}
//               className="group"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="card-traditional h-full hover:shadow-accent transition-all duration-300 group-hover:scale-105">
//                 <div className="p-8 flex flex-col h-full text-center">
//                   <div className="mb-6 flex justify-center">
//                     <div className={`p-4 rounded-2xl ${
//                       service.color === 'accent' ? 'bg-accent-100' : 'bg-traditional-100'
//                     } group-hover:scale-110 transition-transform duration-300`}>
//                       {service.icon}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-special font-bold mb-4 text-traditional-900 group-hover:text-accent-600 transition-colors duration-300">
//                     {service.title}
//                   </h3>
                  
//                   <p className="text-traditional-600 mb-8 flex-grow leading-relaxed font-body">
//                     {service.description}
//                   </p>
                  
//                   <Link 
//                     href={service.link} 
//                     className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 transition-colors duration-300 font-semibold group-hover:gap-3 font-logo font-condensed-bold"
//                   >
//                     Learn More <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <Link href="/services" className="btn-secondary text-lg px-10 py-4 font-logo font-condensed-bold">
//             View All Services
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesPreview;


import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PenTool, Zap, MapPin, Heart, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Tattoo Services',
    description: 'We create tattoos that reflect who you are, with care and skill in every detail. Each design is as unique as your journey.',
    icon: <PenTool className="w-12 h-12 text-accent-500" />,
    link: '/tattoo-services',
    color: 'accent'
  },
  {
    id: 2,
    title: 'Piercing Services',
    description: 'We do piercings safely and carefully, using high-standard equipment. Following UK hygiene standards and proper aftercare, each piercing is done right.',
    icon: <Zap className="w-12 h-12 text-traditional-500" />,
    link: '/piercing-services',
    color: 'traditional'
  },
  // {
  //   id: 3,
  //   title: 'Tattoo Retreat',
  //   description: 'Combine your Goa vacation with a soulful tattoo experience. Custom packages include private sessions and healing add-ons.',
  //   icon: <MapPin className="w-12 h-12 text-accent-500" />,
  //   link: '/tattoo-retreat',
  //   color: 'accent'
  // },
  // {
  //   id: 4,
  //   title: 'Healing Rituals',
  //   description: 'Guided sessions with energy workers to align your tattoo journey with inner healing for emotional clarity and spiritual grounding.',
  //   icon: <Heart className="w-12 h-12 text-traditional-500" />,
  //   link: '/healing-rituals',
  //   color: 'traditional'
  // }
];

const ServicesPreview: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-warm-50 to-pastel-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mandala-subtle opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-px bg-traditional-400"></div>
            <Heart className="w-6 h-6 text-accent-500" />
            <div className="w-12 h-px bg-traditional-400"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-special font-bold mb-6 text-traditional-900">
            Our <span className="font-logo font-condensed-bold text-accent-600">Services</span>
          </h2>
          <p className="text-xl text-traditional-600 max-w-3xl mx-auto leading-relaxed font-body">
           Whether it’s art, healing, or unique experiences, everything we do is designed to connect and leave an impression.
          </p>
        </motion.div>

        <div className="flex justify-center">
  <div className="grid gap-8 justify-center w-full max-w-6xl 
                  [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
    {services.map((service, index) => (
      <motion.div
        key={service.id}
        className="group w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
              <div className="card-traditional h-full hover:shadow-accent transition-all duration-300 group-hover:scale-105">
                <div className="p-8 flex flex-col h-full text-center">
                  <div className="mb-6 flex justify-center">
                    <div className={`p-4 rounded-2xl ${
                      service.color === 'accent' ? 'bg-accent-100' : 'bg-traditional-100'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-special font-bold mb-4 text-traditional-900 group-hover:text-accent-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-traditional-600 mb-8 flex-grow leading-relaxed font-body">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 transition-colors duration-300 font-semibold group-hover:gap-3 font-logo font-condensed-bold justify-center"
                  >
                    Learn More <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>

        {/* <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/services" className="btn-secondary text-lg px-10 py-4 font-logo font-condensed-bold">
            View All Services
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ServicesPreview;