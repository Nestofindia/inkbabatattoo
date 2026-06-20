'use client';

import React from 'react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import TestimonialCard from '@/components/testimonials/TestimonialCard';
import { GOOGLE_REVIEWS_URL } from '@/config/links';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Priyanshi Singh",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I had great experience getting my 1st tattoo done at Inkbaba. The place is very hygienic and clean.Satish was my artist, he understood my requirement and helped me figure out the design, the place of the Design, the size of the design. He did a wonderful job with the tattoo. I would recommend anyone to go to Inkbaba if they are looking a tattoo. Thank you guys and special thanks to Bhumi.",
    rating: 5,
    tattoo: "https://images.pexels.com/photos/7236147/pexels-photo-7236147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "",
  },
  {
    id: 2,
    name: "Steph Skermer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Inkbaba Tattoo House is an awesome, professional and sterile place to get your next tattoo. I was lucky to meet many of the artists working there and they all helped to ensure my tattoo was exactly as I imagined, working together as a team to get the placement and design perfect. Bhumi is a dedicated professional who took her time to give me the most incredible octopus tattoo. She brought my idea to life and it looks absolutely awesome, I honestly could not be happier with the hard work and dedication she put into the entire process. Thank you so much Bhumi, I love my new ink! Highly recommend this place to anyone.",
    rating: 5,
    tattoo: "https://images.pexels.com/photos/9955105/pexels-photo-9955105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "15/02/26"
  },
  {
    id: 3,
    name: "Francesca Federico",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "A month ago I had an amazing experience at Inkbaba Tattoo House. I got my first large tattoo and I felt an instant connection with the artist Tushar from the beginning with the design, and then he created a meaningful and beautiful tiger for me. All the staff are amazing people with a beautiful energy.✨I feel good in every single moment, also when the tattoo was finish they care about all my healing process. It is just pure art. I'm so grateful to being there🙏 Thank you, it was truly special.",
    rating: 5,
    date: ""
  },
  {
    id: 4,
    name: "Sowmiyaa Velmurugan",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Elevated my entire experience of Goa on the last day, had a fun time with Sachin, all three of us got inked with extremely patient and extraordinary suggestions provided by him.",
    rating: 5,
    tattoo: "https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "",
  },
  {
    id: 5,
    name: "G Sarmah",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "When I’m heading back to Arambol this is the only place I ever want to get tattooed at ever again. Friendly staff and an extremely clean environment, very bright & airy. Good vibes! My tattoo turned out so beautifully and healed so well and SO FAST! Sacin the owner and Mourya the artist who inked my arm are amazing talent, and amazing people. Best thing is depending on the season they have a lineup of internationally acclaimed artist. I’d surely go back for newer designs. Prices are reasonable. Anyone looking for a great tattoo in Arambol would be crazy to pass up this studio. 5 stars for me",
    rating: 5,
    date: "",
  },
  {
    id: 6,
    name: "Shoeb Jaseem Shaik",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I recently got a tattoo from Giada at Inkbaba, and I couldn’t be happier with the result! Giada was incredibly professional, taking time to understand exactly what I wanted and translating my vision into a stunning piece of art. The attention to detail and precision in her work are top-notch, and she made the entire process feel comfortable and enjoyable. I’m so impressed with the outcome – it’s exactly what I had hoped for, if not better! Thank you, Giada, for an amazing experience and a beautiful tattoo. Highly recommend Inkbaba and Giada to anyone looking for high-quality tattoo work",
    rating: 5,
    tattoo: "https://images.pexels.com/photos/12599089/pexels-photo-12599089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "",
  },
  {
    id: 7,
    name: "Pracdia India",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "One of the best experiences! Such a talented artist Sachin is. The level of detailing is so gorgeous! So dedicated to what he does and his artwork is to another level! Special thanks to also his team member Mourya. Went though a lot of trouble for me, even though it was late. Made sure the work was done in absolute perfection, couldn't be more happy & blessed! Thanks Sachin, a wonderful soul that you are, you have a very bright future ahead. He also has a lot of international artists who keep visiting so please do check out this place, a truly hidden gem in Goa. So lucky to have found you, kudos to team Inkbaba !!",
    rating: 5,
    tattoo: "https://images.pexels.com/photos/12599089/pexels-photo-12599089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "",
  },
  {
    id: 8,
    name: "Kylie Lenssen",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "When in India... :) I felt like having a nose piercing for a while, how amazing would it be to do this in Goa, India? I saw a flyer of Ink Baba, did my research and I was convinced. Sachin was very professional, he takes hygiëne very seriously and he really took his time to pierce my nose. I’m very grateful for the experience as well as the result. It just feels right. Great place and artist in Goa, India! Highly recommended",
    rating: 5,
    tattoo: "https://images.pexels.com/photos/12599089/pexels-photo-12599089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "",
  },
  {
    id: 9,
    name: "Kanika Sharma",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "Best Tattoo studio! This is my first ink and Sachin was so helpful. He answered my thousand questions very patiently and explained me the each step of the process. All the instruments (especially tattoo needle) were either new or well sanitised. He was patient to entertain some last minute changes and did a fantastic job. Thank you so much",
    rating: 5,
    tattoo: "https://images.pexels.com/photos/12599089/pexels-photo-12599089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "",
  }
];

const TestimonialsView: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-traditional-300 rounded-full opacity-30 float-animation"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-400 rounded-full opacity-20 float-animation"></div>
          <div className="absolute inset-0 bg-mandala-subtle opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader
            title="Client Testimonials"
            subtitle="See what people have to say about their journey with our tattoos and becoming part of our creative community."
            accent="testimonials"
          />
        </div>
      </section>

      {/* Testimonials Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                image={testimonial.image}
                text={testimonial.text}
                rating={testimonial.rating}
                tattoo={testimonial.tattoo}
                date={testimonial.date}
                index={index}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12 md:mt-16">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg font-logo font-condensed-semibold"
            >
              Read All Our Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Leave a Testimonial CTA */}
      {/* <section className="py-16 bg-gradient-to-br from-traditional-50 to-warm-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-traditional border-2 border-traditional-200">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-traditional-900">Share Your Experience</h2>
            <p className="text-traditional-600 mb-8">
              Have you received a spiritual tattoo from Divine Ink Studio? We'd love to hear about your experience.
              Share your testimonial and help others on their spiritual tattoo journey.
            </p>
            <a 
              href="#" 
              className="btn-primary inline-block"
            >
              Submit Your Testimonial
            </a>
          </div>
        </div>
      </section> */}
    </PageTransition>
  );
};

export default TestimonialsView;