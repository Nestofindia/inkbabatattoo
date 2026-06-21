import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Send, Phone, MapPin, Mail, Heart, MessageCircleMore, MessageSquareDiff } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, GOOGLE_MAPS_URL, SITE_EMAIL, SITE_PHONE_DISPLAY, WHATSAPP_URL } from '../../config/links';
import LazyImage from '../shared/LazyImage';

const Footer: React.FC = () => {
  return (
    <footer className="bg-traditional-50 text-traditional-700 border-t-2 border-traditional-200 ">
      <div className="container mx-auto px-4 py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Studio Info */}
          <div className="md:col-span-2 lg:col-span-1">
                      <Link href="/" className="block mb-6 hover:scale-105 transition-transform duration-300 w-fit">
              <LazyImage 
                src="https://ik.imagekit.io/wt9brvtz5/logos/Png%20black%20orange"
                alt="Ink Baba Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="mb-6 text-traditional-600 leading-relaxed text-lg font-body">
              At InkBaba Tattoo House, we create tattoos that feel personal and real. We take your idea, understand what you want, and turn it into art that stays meaningful to you.
            </p>
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://www.instagram.com/inkbabatattoohouse/?igsh=MXA3emNqbzBnYXkydw%3D%3D#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full text-traditional-500 hover:text-accent-500 hover:bg-accent-50 transition-all duration-300 shadow-soft hover:shadow-accent hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/inkbabatattoostudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full text-traditional-500 hover:text-accent-500 hover:bg-accent-50 transition-all duration-300 shadow-soft hover:shadow-accent hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full text-traditional-500 hover:text-accent-500 hover:bg-accent-50 transition-all duration-300 shadow-soft hover:shadow-accent hover:scale-110"
                aria-label="Whatsapp"
              >
                <MessageCircleMore size={20}/>
              </a>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full text-traditional-500 hover:text-accent-500 hover:bg-accent-50 transition-all duration-300 shadow-soft hover:shadow-accent hover:scale-110"
                aria-label="Review"
              >
                <MessageSquareDiff  size={20}/>
              </a>
              {/* <a 
                href="www.facebook.com/inkbabatattoostudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full text-traditional-500 hover:text-accent-500 hover:bg-accent-50 transition-all duration-300 shadow-soft hover:shadow-accent hover:scale-110"
                aria-label="Whatsapp"
              >
                <Whatsapp size={20} />
              </a> */}
              {/* ] */}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl lg:text-2xl font-special font-bold mb-6 lg:mb-8 text-traditional-900">Quick Links</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-3 lg:space-y-4 lg:block">
              <li>
                <Link 
                  href="/" 
                  className="text-traditional-600 hover:text-accent-500 transition-colors duration-300 flex items-center gap-3 text-lg group font-body"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span> 
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-traditional-600 hover:text-accent-500 transition-colors duration-300 flex items-center gap-3 text-lg group font-body"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span> 
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-traditional-600 hover:text-accent-500 transition-colors duration-300 flex items-center gap-3 text-lg group font-body"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span> 
                  Gallery
                </Link>
              </li>
              {/* Services — hidden for now
              <li>
                <Link 
                  href="/services" 
                  className="text-traditional-600 hover:text-accent-500 transition-colors duration-300 flex items-center gap-3 text-lg group font-body"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span> 
                  Services
                </Link>
              </li>
              */}
              <li>
                <Link 
                  href="/testimonials" 
                  className="text-traditional-600 hover:text-accent-500 transition-colors duration-300 flex items-center gap-3 text-lg group font-body"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span> 
                  Review
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-traditional-600 hover:text-accent-500 transition-colors duration-300 flex items-center gap-3 text-lg group font-body"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span> 
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/tattoo-care" 
                  className="text-traditional-600 hover:text-accent-500 transition-colors duration-300 flex items-center gap-3 text-lg group font-body"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span> 
                  Tattoo Care
                </Link>
              </li>
              <li>
                <Link 
                  href="/piercing-care" 
                  className="text-traditional-600 hover:text-accent-500 transition-colors duration-300 flex items-center gap-3 text-lg group font-body"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span> 
                  Piercing Care
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-and-conditions" 
                  className="text-traditional-600 hover:text-accent-500 transition-colors duration-300 flex items-center gap-3 text-lg group font-body"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span> 
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-traditional-600 hover:text-accent-500 transition-colors duration-300 flex items-center gap-3 text-lg group font-body"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></span> 
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl lg:text-2xl font-special font-bold mb-6 lg:mb-8 text-traditional-900">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
  <div className="p-2 bg-accent-100 rounded-full">
    <MapPin className="text-accent-600 flex-shrink-0" size={20} />
  </div>

  <a
    href={GOOGLE_MAPS_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="text-traditional-600 text-base lg:text-lg font-body hover:underline"
  >
    Inkbaba Tattoo House, Khalcha Wada, Arambol 
    Market  Beach Road, Arambol, Goa. 403524.
  </a>
</li>
              <li>
  <a
    href="tel:+917719099888"
    className="flex items-center gap-4 group"
  >
    <div className="p-2 bg-accent-100 rounded-full">
      <Phone
        className="text-accent-600 flex-shrink-0 group-hover:scale-110 transition-transform"
        size={20}
      />
    </div>

    <span className="text-traditional-600 text-base lg:text-lg font-body group-hover:text-accent-600 transition-colors">
      {SITE_PHONE_DISPLAY}
    </span>
  </a>
</li>


<li>
  <a
    href={`mailto:${SITE_EMAIL}`}
    className="flex items-center gap-4 group"
  >
    <div className="p-2 bg-accent-100 rounded-full">
      <Mail
        className="text-accent-600 flex-shrink-0 group-hover:scale-110 transition-transform"
        size={20}
      />
    </div>

    <span className="text-traditional-600 text-base lg:text-lg font-body group-hover:text-accent-600 transition-colors break-all">
      {SITE_EMAIL}
    </span>
  </a>
</li>
            </ul>
            <div className="mt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base lg:text-lg font-logo font-condensed-bold inline-flex w-full sm:w-auto justify-center"
              >
                <span className="flex items-center gap-2">
                  Book Your Session <Send size={18} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="traditional-divider mt-16">
          <span>✦</span>
        </div>

        <div className="text-center text-traditional-500 text-lg mt-8">
          <p className="flex items-center justify-center gap-2 font-body">
            &copy; {new Date().getFullYear()} Inkbabatattoo Made with love <Heart size={16} className="text-accent-500" fill="currentColor" /> for those who value creativity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;