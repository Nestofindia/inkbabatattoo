'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import LazyImage from '../shared/LazyImage';

interface Artist {
  name: string;
  specialty: string;
  bio: string;
  experience: string;
  image: string;
  achievements: string[];
  location: string;
  styles: string[];
}

interface ArtistDetailsProps {
  artist: Artist;
  onClose: () => void;
  isOpen: boolean;
}

const ArtistDetails: React.FC<ArtistDetailsProps> = ({ artist, onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-traditional-900 bg-opacity-80 backdrop-blur-sm p-2 sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-traditional"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
          <button
            onClick={onClose}
            className="text-white bg-traditional-800 bg-opacity-80 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-traditional-700 transition-colors duration-300"
          >
            <X size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Artist Image */}
          <div className="w-full lg:w-2/5 relative">
            <LazyImage 
              src={artist.image} 
              alt={artist.name} 
              className="w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-traditional-900/60 to-transparent lg:bg-gradient-to-r"></div>
          </div>

          {/* Artist Information */}
          <div className="w-full lg:w-3/5 p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto max-h-[60vh] lg:max-h-[90vh]">
            <div className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-special font-bold text-traditional-900 mb-1 sm:mb-2">{artist.name}</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-accent-600 font-semibold font-logo font-condensed-bold">{artist.specialty}</p>
            </div>

            {/* Bio */}
            <div className="mb-4 sm:mb-6 lg:mb-8">
              <h3 className="text-sm sm:text-base md:text-lg font-heading font-bold text-traditional-900 mb-2 sm:mb-3">About</h3>
              <p className="text-traditional-700 leading-relaxed font-body text-xs sm:text-sm md:text-base lg:text-lg">{artist.bio}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ArtistDetails;