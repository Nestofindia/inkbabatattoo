'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import HomeMobileScroll from '../shared/HomeMobileScroll';
import TestimonialCard from '../testimonials/TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: "Luka",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Best Studio in Goa probably also in India! Really clean and professional and a lot of Western artist! Just got a tattoo from Sachin the owner very nice dot work staff. Would defiantly come back again. Price also really fair for quality :)",
    rating: 5,
    profession: "",
  },
  {
    id: 2,
    name: "Mayuri Yeram",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "My friends got his very first tattoo in InkBaba studio. I was there and it was great experience. Special thanks to sachin and bhumika for the amazing consultation and flawless tattoo work. Exceeding expectations big time. Highly recommend these talented human for good vibes and some serious cool art.",
    rating: 5,
    profession: "",
  },
  {
    id: 3,
    name: "Shweta Kohli",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Absolutely in love with the tattoo! Was done by one of the guest artists Niculin who was extremely skilled and quick. All the staff at the studio was also very professional, kind and helpful in all regards. The studio itself looked so great and had a very nice vibe. Great experience!",
    rating: 5,
    profession: "",
  },
  // {
  //   id: 4,
  //   name: "Shoeb Jaseem Shaik",
  //   image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   text: "I recently got a tattoo from Giada at Inkbaba, and I couldn’t be happier with the result!     Highly recommend InkbInkbaba and Giadatime to understand exactly what I wanted and translating my vision into a stunning piece of art. The attention to detail and precision in her work are top-notch, and she made the entire process feel comfortable and enjoyable. I’m so impressed with the outcome – it’s exactly what I had hoped for, if not better! Thank you, Giada, for an amazing experience and a beautiful tattoo. Highly recommend Inkbaba and Giada to anyone looking for high-quality tattoo work!",
  //   rating: 5
  // },
  // {
  //   id: 5,
  //   name: "Hardik Patidar",
  //   image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   text: "My tattoo jourrney started 3 years back and witnessed few solid artists of India im meantime. My experience here cannot be described just in words, but i must say there is an inner urge to make him; my only Master. so lively so interactive and i feel receiving of tattoo is not just tattooing, Your master vibes plays such a vital role. I felt here how energy was exchanged and how it will always be a part of me from now on !!!! Best Best Best.⭐",
  //   rating: 5
  // },
  // {
  //   id: 6,
  //   name: "G Sarmah",
  //   image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   text: "When I’m heading back to Arambol this is the only place I ever want to get tattooed at ever again. Anyone looking for a great tattoo in Arambolt, very bright & airy. Good vibes! My tattoo turned out so beautifully and healed so well and SO FAST! Sacin the owner and Mourya the artist who inked my arm are amazing talent, and amazing people. Best thing is depending on the season they have a lineup of internationally acclaimed artist. I’d surely go back for newer designs. Prices are reasonable. Anyone looking for a great tattoo in Arambol would be crazy to pass up this studio. 5 stars for me",
  //   rating: 5
  // }
];

const TestimonialsPreview: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 md:py-24 max-[469px]:py-8 bg-gradient-to-br from-traditional-50 to-warm-100 relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mandala-subtle opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-10 sm:mb-16 md:mb-20 max-[469px]:mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 max-[469px]:mb-2">
            <div className="w-8 sm:w-12 h-px bg-traditional-400 max-[469px]:w-6"></div>
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 max-[469px]:w-4 max-[469px]:h-4" />
            <div className="w-8 sm:w-12 h-px bg-traditional-400 max-[469px]:w-6"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl max-[469px]:text-2xl font-special font-bold mb-4 sm:mb-6 max-[469px]:mb-2 text-traditional-900">
            Client <span className="font-logo font-condensed-bold text-accent-600">Testimonials</span>
          </h2>
          <p className="text-base sm:text-xl max-[469px]:text-sm text-traditional-600 max-w-3xl mx-auto leading-relaxed font-body px-2 sm:px-0">
            See what people have to say about their journey with our tattoos and becoming part of our creative community.
          </p>
        </motion.div>

        <HomeMobileScroll className="gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="home-mobile-scroll-item home-mobile-scroll-item--content">
              <TestimonialCard
                name={testimonial.name}
                image={testimonial.image}
                text={testimonial.text}
                rating={testimonial.rating}
                index={index}
                date={testimonial.profession}
                inCarousel
              />
            </div>
          ))}
        </HomeMobileScroll>

        {/* <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/testimonials" className="btn-outline text-lg px-10 py-4 font-logo font-condensed-bold">
            Read More Stories
          </Link>
        </motion.div> */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 max-[469px]:mt-6">
                                <Link href="/testimonials" className="btn-primary text-lg font-logo font-condensed-bold">
                                   Read More Stories
                                </Link>
                              </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;