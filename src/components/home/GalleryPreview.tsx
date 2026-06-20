'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ExternalLink, Eye, X, User, Play } from 'lucide-react';
// import ArtistDetails from '../gallery/ArtistDetails';

// // Artist data (same as in GalleryGrid)
// // const artistsData = {
// //   'Kali': {
// //     name: 'Kali',
// //     specialty: 'Bio Organic',
// //     bio: 'Daniel is the founder of Divine Ink Studio with over 15 years of experience in spiritual tattoo artistry. He has studied sacred geometry with masters in Tibet and specializes in creating powerful spiritual symbols that resonate with the soul. His work combines ancient wisdom with contemporary artistic techniques.',
// //     experience: '15+ Years',
// //     image: 'https://inkbaba.s3.ap-south-1.amazonaws.com/Kali.heic',
// //     achievements: [
// //       'Founder of Divine Ink Studio (2015)',
// //       'Studied sacred geometry in Tibet',
// //       'Featured in Spiritual Tattoo Magazine',
// //       'Over 500 spiritual tattoos completed',
// //       'Certified in traditional tattooing methods'
// //     ],
// //     location: 'Divine Ink Studio, Zen City',
// //     styles: ['Sacred Geometry', 'Spiritual Symbols', 'Mandala Art', 'Nature Inspired']
// //   },
// //   'Dana Avraham': {
// //     name: 'Dana Avraham',
// //     specialty: 'Mandala Art & Dotwork',
// //     bio: 'Maya trained in traditional mandala art in Nepal and brings authentic spiritual practices to her tattoo work. She specializes in intricate dotwork and geometric patterns that represent the universe and inner harmony. Her meditative approach to tattooing creates a transformative experience for clients.',
// //     experience: '12+ Years',
// //     image: 'https://inkbaba.s3.ap-south-1.amazonaws.com/Dana+Avraham.jpg',
// //     achievements: [
// //       'Trained in mandala art in Nepal',
// //       'Master of traditional dotwork techniques',
// //       'International mandala art certification',
// //       'Featured in Eastern Art & Spirituality Journal',
// //       'Over 300 mandala tattoos completed'
// //     ],
// //     location: 'Divine Ink Studio, Zen City',
// //     styles: ['Mandala Art', 'Dotwork', 'Geometric Patterns', 'Spiritual Symbols']
// //   },
// //   'Dasha Pictogram': {
// //     name: 'Dasha Pictogram',
// //     specialty: 'Dotwork',
// //     bio: 'Elijah combines realistic portraiture with spiritual elements to create mystical, transformative pieces. His background in fine arts and spiritual studies allows him to capture the essence of divine energy in his work. He specializes in creating portraits that honor spiritual guides and ancestors.',
// //     experience: '10+ Years',
// //     image: 'https://inkbaba.s3.ap-south-1.amazonaws.com/Dasha+Pictogram.jpg',
// //     achievements: [
// //       'Fine Arts degree with spiritual focus',
// //       'Specialized training in portrait realism',
// //       'Featured in Contemporary Spiritual Art',
// //       'Over 200 spiritual portraits completed',
// //       'Expert in mystical symbolism integration'
// //     ],
// //     location: 'Divine Ink Studio, Zen City',
// //     styles: ['Spiritual Portraits', 'Mystical Art', 'Realism', 'Sacred Geometry']
// //   },
// //   'Dana Sha': {
// //     name: 'Dana Sha',
// //     specialty: 'Geometric',
// //     bio: 'Dana is a master of geometric tattooing, specializing in intricate patterns and sacred symbols. With a background in geometry and sacred geometry, she brings a unique perspective to her work. Dana is known for her ability to create harmonious and balanced designs that resonate with the soul.',
// //     experience: '10+ Years',
// //     image: 'https://inkbaba.s3.ap-south-1.amazonaws.com/Dana+Sha.jpg',
// //     achievements: [
// //       'Master of geometric tattooing',
// //       'Specialized in sacred geometry',
// //       'Featured in Geometric Tattoo Magazine',
// //       'Over 250 geometric tattoos completed',
// //       'Certified in sacred geometry principles'
// //     ],
// //     location: 'Divine Ink Studio, Zen City',
// //     styles: ['Geometric Patterns', 'Sacred Geometry', 'Spiritual Symbols', 'Mandala Art']
// //   },
// //   'Arne': {
// //     name: 'Arne',
// //     specialty: 'Hand Poke',
// //     bio: 'Arne is a master of blackwork tattooing, specializing in intricate and detailed designs. With a background in traditional tattooing and a passion for blackwork, he brings a unique perspective to his work. Arne is known for his ability to create bold and impactful designs that resonate with the soul.',
// //     experience: '15+ Years',
// //     image: 'https://inkbaba.s3.ap-south-1.amazonaws.com/Arne.jpg',
// //     achievements: [
// //       'Master of blackwork tattooing',
// //       'Specialized in detailed designs',
// //       'Featured in Blackwork Tattoo Magazine',
// //       'Over 300 blackwork tattoos completed',
// //       'Certified in traditional tattooing techniques'
// //     ],
// //     location: 'Divine Ink Studio, Zen City',
// //     styles: ['Blackwork', 'Detailed Designs', 'Geometric Patterns', 'Sacred Geometry'],
// // },
// // 'Akitsu Tomo': {
// //   name: 'Akistu Tomo',
// //   specialty: 'Japanese',
// //   bio: 'Akistu is a master of blackwork tattooing, specializing in intricate and detailed designs. With a background in traditional tattooing and a passion for blackwork, he brings a unique perspective to his work. Akistu is known for his ability to create bold and impactful designs that resonate with the soul.',
// //   experience: '15+ Years',
// //   image: 'https://inkbaba.s3.ap-south-1.amazonaws.com/Akitsu+tomo.jpg',
// //   achievements: [
// //     'Master of blackwork tattooing',
// //     'Specialized in detailed designs',
// //     'Featured in Blackwork Tattoo Magazine',
// //     'Over 300 blackwork tattoos completed',
// //     'Certified in traditional tattooing techniques'
// //   ],
// //   location: 'Divine Ink Studio, Zen City',
// //   styles: ['Blackwork', 'Detailed Designs', 'Geometric Patterns', 'Sacred Geometry'],
// // }
// // }
// // Gallery preview data with videos and images
// const previewItems = [
//   {
//     id: 1,
//     type: 'video',
//     artist: 'Chatki',
//     category: 'Piercing',
//     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/01chakti+(PIERCING).mp4',
//     alt: 'Piercing'
//   },
//   {
//     id: 2,
//     type: 'video',
//     artist: 'Pallada',
//     category: 'Ornamental',
//     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/01Pallada+(ORNAMENTAL).mp4',
//     alt: 'Black Work'
//   },
//   {
//     id: 3,
//     type: 'video',
//     artist: 'Dana Sha',
//     category: 'Geometric',
//     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/03+Dana+Sha+(GEOMETRIC).mp4',
//     alt: 'Geometric'
//   },
//   {
//     id: 4,
//     type: 'video',
//     artist: 'Andry Grimmy',
//     category: 'Realism',
//     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/Andry+grimmy+(REALISM).mp4',
//     alt: 'Realism'
//   },
//   {
//     id: 5,
//     type: 'video',
//     artist: 'Giada',
//     category: 'Geometric',
//     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/Giada+(GEOMETRIC.).mp4',
//     alt: 'Geometric'
//   },
//   {
//     id: 6,
//     type: 'video',
//     artist: 'Nika',
//     category: 'Unique Style',
//     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/Nika+(UNIQE+STYLE).mp4',
//     alt: 'Unique Style'
//   }
// ];

// const GalleryPreview: React.FC = () => {
//   const [selectedItem, setSelectedItem] = useState<typeof previewItems[0] | null>(null);
//   const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

//   const openLightbox = (item: typeof previewItems[0], e: React.MouseEvent) => {
//     e.stopPropagation();
//     setSelectedItem(item);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeLightbox = () => {
//     setSelectedItem(null);
//     document.body.style.overflow = 'auto';
//   };

//   const openArtistDetails = (artistName: string, e: React.MouseEvent) => {
//     e.stopPropagation();
//     setSelectedArtist(artistName);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeArtistDetails = () => {
//     setSelectedArtist(null);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-traditional-pattern opacity-20"></div>
      
//       <div className="container mx-auto px-4 md:px-8 relative z-10">
//         <motion.div 
//           className="text-center mb-16 sm:mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
//             <div className="w-8 sm:w-12 h-px bg-traditional-400"></div>
//             <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
//             <div className="w-8 sm:w-12 h-px bg-traditional-400"></div>
//           </div>
          
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-special font-bold mb-4 sm:mb-6 text-traditional-900">
//             Featured <span className="font-logo font-condensed-bold text-accent-600">Works</span>
//           </h2>
//           <p className="text-lg sm:text-xl text-traditional-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
//             Each tattoo we create is a unique spiritual expression, crafted with intention and sacred purpose.
//             Explore our gallery to find inspiration for your own spiritual ink journey.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
//           {previewItems.map((item, index) => (
//             <motion.div 
//               key={item.id}
//               className="gallery-item group"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
//                 {item.type === 'video' ? (
//                   <div className="relative">
//                     <video 
//                       src={item.src}
//                       className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
//                       muted
//                       loop
//                       autoPlay
//                       playsInline
//                       // onMouseEnter={(e) => e.currentTarget.play()}
//                       // onMouseLeave={(e) => e.currentTarget.pause()}
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
//                       <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
//                         <Play className="w-8 h-8 text-white" fill="currentColor" />
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <img 
//                     src={item.src} 
//                     alt={item.alt} 
//                     className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 )}
//                 <div className="gallery-item-overlay rounded-xl sm:rounded-2xl">
//                   <div className="text-center p-3 sm:p-4 md:p-6">
//                     <p className="text-accent-300 mb-2 text-sm sm:text-base md:text-lg font-body font-medium">{item.category}</p>
//                     <div className="w-12 sm:w-16 h-1 bg-accent-500 mx-auto mb-3 sm:mb-4 rounded-full"></div>
//                     {/* <button
//                       // onClick={(e) => openArtistDetails(item.artist, e)}
//                       className="text-lg sm:text-xl md:text-2xl font-special font-bold text-white mb-3 sm:mb-4 hover:text-accent-300 transition-colors duration-300 underline decoration-accent-400 underline-offset-4"
//                     >
//                       by {item.artist}
//                     </button> */}
//                     <div className="flex flex-col gap-2 sm:gap-3">
//                       <button
//                         onClick={(e) => openLightbox(item, e)}
//                         className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full text-white font-medium font-body hover:bg-white/30 transition-colors duration-300 text-xs sm:text-sm"
//                       >
//                         <Eye size={14} className="sm:w-4 sm:h-4" />
//                         {item.type === 'video' ? 'Watch Video' : 'View Artwork'}
//                       </button>
//                       {/* <button
//                         onClick={(e) => openArtistDetails(item.artist, e)}
//                         className="inline-flex items-center justify-center gap-2 bg-accent-500/80 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full text-white font-medium font-body hover:bg-accent-600/80 transition-colors duration-300 text-xs sm:text-sm"
//                       >
//                         <User size={14} className="sm:w-4 sm:h-4" />
//                         Artist Details
//                       </button> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           className="text-center mt-12 sm:mt-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <Link href="/gallery" className="btn-outline text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 font-logo font-condensed-bold">
//             <ExternalLink size={16} className="sm:w-5 sm:h-5" />
//             View Full Gallery
//           </Link>
//         </motion.div>
//       </div>

//       {/* Media Lightbox */}
//       <AnimatePresence>
//         {selectedItem && (
//           <motion.div 
//             className="fixed inset-0 z-50 flex items-center justify-center bg-traditional-900 bg-opacity-80 backdrop-blur-sm p-2 sm:p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeLightbox}
//           >
//             <motion.div 
//               className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-traditional"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
//                 <button
//                   onClick={closeLightbox}
//                   className="text-white bg-traditional-800 bg-opacity-80 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-traditional-700 transition-colors duration-300"
//                 >
//                   <X size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
//                 </button>
//               </div>
              
//               <div className="flex flex-col">
//                 <div className="relative">
//                   {selectedItem.type === 'video' ? (
//                     <video 
//                       src={selectedItem.src}
//                       className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-cover"
//                       //  className="aspect-[9/16] w-full object-cover max-h-[90vh] rounded-xl"
//                       controls
//                       autoPlay
//                       // muted
//                       loop
//                       playsInline
//                       disablePictureInPicture
//                       controlsList="nodownload"
//                     />  
//                   ) : (
//                     <img 
//                       src={selectedItem.src} 
//                       alt={selectedItem.alt} 
//                       className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-cover"
//                     />
//                   )}
//                 </div>
                
//                 <div className="p-3 sm:p-4 md:p-6 text-center">
//                   <p className="text-accent-600 font-semibold text-sm sm:text-base md:text-lg font-body mb-2">{selectedItem.category}</p>
//                   {/* <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       closeLightbox();
//                       openArtistDetails(selectedItem.artist, e);
//                     }}
//                     className="text-lg sm:text-xl md:text-2xl font-special font-bold text-traditional-900 hover:text-accent-600 transition-colors duration-300 underline decoration-accent-400 underline-offset-4"
//                   >
//                     by {selectedItem.artist}
//                   </button> */}
//                   {/* <p className="text-lg sm:text-xl md:text-2xl font-special font-bold text-traditional-900">
//   by {selectedItem.artist}
// </p> */}

//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Artist Details Modal */}
//       {/* <AnimatePresence>
//         {selectedArtist && (
//           <ArtistDetails
//             artist={artistsData[selectedArtist as keyof typeof artistsData]}
//             onClose={closeArtistDetails}
//             isOpen={!!selectedArtist}
//           />
//         )}
//       </AnimatePresence> */}
//     </section>
//   );
// };

// export default GalleryPreview;

// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ExternalLink, Eye, X, Play } from 'lucide-react';

// // // Gallery preview data with videos and images
// // const previewItems = [
// //   {
// //     id: 1,
// //     type: 'video',
// //     artist: 'Chatki',
// //     category: 'Piercing',
// //     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/01chakti+(PIERCING).mp4',
// //     alt: 'Piercing'
// //   },
// //   {
// //     id: 2,
// //     type: 'video',
// //     artist: 'Pallada',
// //     category: 'Ornamental',
// //     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/01Pallada+(ORNAMENTAL).mp4',
// //     alt: 'Black Work'
// //   },
// //   {
// //     id: 3,
// //     type: 'video',
// //     artist: 'Dana Sha',
// //     category: 'Geometric',
// //     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/03+Dana+Sha+(GEOMETRIC).mp4',
// //     alt: 'Geometric'
// //   },
// //   {
// //     id: 4,
// //     type: 'video',
// //     artist: 'Andry Grimmy',
// //     category: 'Realism',
// //     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/Andry+grimmy+(REALISM).mp4',
// //     alt: 'Realism'
// //   },
// //   {
// //     id: 5,
// //     type: 'video',
// //     artist: 'Giada',
// //     category: 'Geometric',
// //     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/Giada+(GEOMETRIC.).mp4',
// //     alt: 'Geometric'
// //   },
// //   {
// //     id: 6,
// //     type: 'video',
// //     artist: 'Nika',
// //     category: 'Unique Style',
// //     src: 'https://inkbaba.s3.ap-south-1.amazonaws.com/inkbaba+website+1st+page/Nika+(UNIQE+STYLE).mp4',
// //     alt: 'Unique Style'
// //   }
// // ];

// // const GalleryPreview: React.FC = () => {
// //   const [selectedItem, setSelectedItem] = useState<typeof previewItems[0] | null>(null);

// //   const openLightbox = (item: typeof previewItems[0], e: React.MouseEvent) => {
// //     e.stopPropagation();
// //     setSelectedItem(item);
// //     document.body.style.overflow = 'hidden';
// //   };

// //   const closeLightbox = () => {
// //     setSelectedItem(null);
// //     document.body.style.overflow = 'auto';
// //   };

// //   return (
// //     <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
// //       {/* Background Pattern */}
// //       <div className="absolute inset-0 bg-traditional-pattern opacity-20"></div>
      
// //       <div className="container mx-auto px-4 md:px-8 relative z-10">
// //         <motion.div 
// //           className="text-center mb-16 sm:mb-20"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: "-100px" }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
// //             <div className="w-8 sm:w-12 h-px bg-traditional-400"></div>
// //             <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
// //             <div className="w-8 sm:w-12 h-px bg-traditional-400"></div>
// //           </div>
          
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-special font-bold mb-4 sm:mb-6 text-traditional-900">
// //             Featured <span className="font-logo font-condensed-bold text-accent-600">Works</span>
// //           </h2>
// //           <p className="text-lg sm:text-xl text-traditional-600 max-w-3xl mx-auto leading-relaxed font-body px-4">
// //             Each tattoo we create is a unique expression, crafted with precision and artistry.
// //             Explore our gallery to find inspiration for your own ink journey.
// //           </p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
// //           {previewItems.map((item, index) => (
// //             <motion.div 
// //               key={item.id}
// //               className="gallery-item group"
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true, margin: "-100px" }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //             >
// //               <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
// //                 <div className="relative">
// //                   <video 
// //                     src={item.src}
// //                     className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
// //                     muted
// //                     loop
// //                     autoPlay
// //                     playsInline
// //                   />
// //                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
// //                     <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
// //                       <Play className="w-8 h-8 text-white" fill="currentColor" />
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="gallery-item-overlay rounded-xl sm:rounded-2xl">
// //                   <div className="text-center p-3 sm:p-4 md:p-6">
// //                     <p className="text-accent-300 mb-2 text-sm sm:text-base md:text-lg font-body font-medium">{item.category}</p>
// //                     <div className="w-12 sm:w-16 h-1 bg-accent-500 mx-auto mb-3 sm:mb-4 rounded-full"></div>
// //                     <p className="text-lg sm:text-xl md:text-2xl font-special font-bold text-white mb-3 sm:mb-4">
// //                       by {item.artist}
// //                     </p>
// //                     <div className="flex flex-col gap-2 sm:gap-3">
// //                       <button
// //                         onClick={(e) => openLightbox(item, e)}
// //                         className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full text-white font-medium font-body hover:bg-white/30 transition-colors duration-300 text-xs sm:text-sm"
// //                       >
// //                         <Eye size={14} className="sm:w-4 sm:h-4" />
// //                         Watch Video
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         <motion.div 
// //           className="text-center mt-12 sm:mt-16"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, margin: "-100px" }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //         >
// //           <Link href="/gallery" className="btn-outline text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 font-logo font-condensed-bold">
// //             <ExternalLink size={16} className="sm:w-5 sm:h-5" />
// //             View Full Gallery
// //           </Link>
// //         </motion.div>
// //       </div>

// //       {/* Media Lightbox */}
// //       <AnimatePresence>
// //         {selectedItem && (
// //           <motion.div 
// //             className="fixed inset-0 z-50 flex items-center justify-center bg-traditional-900 bg-opacity-80 backdrop-blur-sm p-2 sm:p-4"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={closeLightbox}
// //           >
// //             <motion.div 
// //               className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-traditional"
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.9, opacity: 0 }}
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
// //                 <button
// //                   onClick={closeLightbox}
// //                   className="text-white bg-traditional-800 bg-opacity-80 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-traditional-700 transition-colors duration-300"
// //                 >
// //                   <X size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
// //                 </button>
// //               </div>
              
// //               <div className="flex flex-col">
// //                 <div className="relative">
// //                   <video 
// //                     src={selectedItem.src}
// //                     className="aspect-[9/16] w-full object-cover max-h-[90vh] rounded-xl"
// //                     controls
// //                     autoPlay
// //                     loop
// //                     playsInline
// //                     disablePictureInPicture
// //                     controlsList="nodownload"
// //                   />
// //                 </div>
                
// //                 <div className="p-3 sm:p-4 md:p-6 text-center">
// //                   <p className="text-accent-600 font-semibold text-sm sm:text-base md:text-lg font-body mb-2">{selectedItem.category}</p>
// //                   <p className="text-lg sm:text-xl md:text-2xl font-special font-bold text-traditional-900">
// //                     by {selectedItem.artist}
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // };

// // export default GalleryPreview;



import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, X, Play } from 'lucide-react';
import LazyVideo from '../shared/LazyVideo';
import InstagramReelMedia from '../shared/InstagramReelMedia';
import HomeMobileScroll from '../shared/HomeMobileScroll';
import { galleryCategoryPath } from '../../config/gallery';
import { FEATURED_PREVIEW_VIDEOS } from '../../config/homeVideos';

type VideoGalleryItem = {
  id: number;
  type: 'video';
  artist: string;
  category: string;
  src: string;
  alt: string;
  /** Original Instagram post — optional, for reels hosted as MP4 on S3 */
  instagramUrl?: string;
};

type InstagramGalleryItem = {
  id: number;
  type: 'instagram';
  artist: string;
  category: string;
  instagramUrl: string;
  /** Required for card preview — Instagram embeds cannot autoplay */
  videoSrc: string;
  alt: string;
};

type GalleryPreviewItem = VideoGalleryItem | InstagramGalleryItem;

function featuredCardGalleryPath(category: string): string {
  if (category === 'Piercing') return '/piercing-services';
  return galleryCategoryPath(category);
}

// Updated preview items with your new content
const previewItems: GalleryPreviewItem[] = [
  {
    id: 1,
    type: 'video',
    artist: 'Chakti',
    category: 'Piercing',
    src: FEATURED_PREVIEW_VIDEOS[0],
    alt: 'Piercing by Chakti',
  },
  {
    id: 2,
    type: 'video',
    artist: 'Dana Sha',
    category: 'Geometric',
    src: FEATURED_PREVIEW_VIDEOS[1],
    alt: 'Geometric tattoo by Dana Sha',
  },
  {
    id: 3,
    type: 'video',
    artist: 'Giada',
    category: 'Geometric',
    src: FEATURED_PREVIEW_VIDEOS[2],
    alt: 'Geometric tattoo by Giada',
  },
  {
    id: 4,
    type: 'video',
    artist: 'Pallada',
    category: 'Ornamental',
    src: FEATURED_PREVIEW_VIDEOS[3],
    alt: 'Ornamental tattoo by Pallada',
  },
  {
    id: 5,
    type: 'video',
    artist: 'Sachin Aarote',
    category: 'Traditional',
    src: FEATURED_PREVIEW_VIDEOS[4],
    alt: 'Traditional tattoo by Sachin Aarote',
  },
  {
    id: 6,
    type: 'video',
    artist: 'Satish',
    category: 'Traditional',
    src: FEATURED_PREVIEW_VIDEOS[5],
    alt: 'Traditional tattoo by Satish',
  },
];

const GalleryPreview: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryPreviewItem | null>(null);

  const openLightbox = (item: GalleryPreviewItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-10 sm:py-16 md:py-24 max-[469px]:py-8 bg-white relative overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-traditional-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-10 sm:mb-16 md:mb-20 max-[469px]:mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-traditional-400"></div>
            <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />
            <div className="w-8 sm:w-12 h-px bg-traditional-400"></div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-[469px]:text-xl font-special font-bold mb-3 sm:mb-4 md:mb-6 max-[469px]:mb-2 text-traditional-900">
            Featured <span className="font-logo font-condensed-bold text-accent-600">Works</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl max-[469px]:text-xs text-traditional-600 max-w-3xl mx-auto leading-relaxed font-body px-2 sm:px-4">
            These are the stories our clients have trusted us with, each tattoo carrying their memories, milestones, and personal journeys.
          </p>
        </motion.div>

        <HomeMobileScroll className="gap-4 sm:gap-6 lg:gap-8">
          {previewItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="gallery-item group home-mobile-scroll-item home-mobile-scroll-item--gallery"
              initial={{ opacity: 1, y: 0 }}
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                <div className="relative home-mobile-scroll-media w-full overflow-hidden bg-traditional-100">
                  {item.type === 'video' ? (
                    <>
                      <LazyVideo
                        priority={index < 3}
                        playWhenVisible={index >= 3}
                        src={item.src}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        muted
                        loop
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 pointer-events-none">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <Play className="w-8 h-8 text-white" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <InstagramReelMedia
                        videoSrc={item.videoSrc}
                        title={item.alt}
                        variant="card"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 pointer-events-none">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <Play className="w-8 h-8 text-white" fill="currentColor" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="gallery-item-overlay rounded-xl sm:rounded-2xl">
                  <div className="text-center p-3 sm:p-4 md:p-6">
                    <p className="text-accent-300 mb-2 text-sm sm:text-base md:text-lg font-body font-medium">{item.category}</p>
                    <div className="w-12 sm:w-16 h-1 bg-accent-500 mx-auto mb-3 sm:mb-4 rounded-full"></div>
                    <div className="flex flex-col gap-2 sm:gap-3">
                      <button
                        onClick={(e) => openLightbox(item, e)}
                        className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full text-white font-medium font-body hover:bg-white/30 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        <Eye size={14} className="sm:w-4 sm:h-4" />
                        Watch Video
                      </button>
                      <Link
                        href={featuredCardGalleryPath(item.category)}
                        className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full text-white font-medium font-body hover:bg-white/30 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                        View Gallery
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </HomeMobileScroll>
        {/* <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/gallery" className="btn-outline text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 font-logo font-condensed-bold">
            <ExternalLink size={16} className="sm:w-5 sm:h-5" />
            View Full Gallery
          </Link> */}
           <div className="text-center mt-12 sm:mt-16">
                        <Link href="/gallery" className="btn-primary text-lg font-logo font-condensed-bold">
                           View Gallery
                        </Link>
                      </div>
        {/* </motion.div> */}
      </div>

      {/* Media Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-traditional-900 bg-opacity-80 backdrop-blur-sm p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div 
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[95vh] sm:max-h-[90vh] bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-traditional"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
                <button
                  onClick={closeLightbox}
                  className="text-white bg-traditional-800 bg-opacity-80 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-traditional-700 transition-colors duration-300"
                >
                  <X size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>
              </div>
              
              <div className="flex flex-col">
                <div className="relative aspect-[9/16] w-full bg-traditional-100">
                  {selectedItem.type === 'video' ? (
                    <LazyVideo
                      eager
                      src={selectedItem.src}
                      className="absolute inset-0 w-full h-full object-cover"
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      disablePictureInPicture
                      controlsList="nodownload"
                    />
                  ) : (
                    <InstagramReelMedia
                      videoSrc={selectedItem.videoSrc}
                      title={selectedItem.alt}
                      variant="lightbox"
                    />
                  )}
                </div>
                
                <div className="p-3 sm:p-4 md:p-6 text-center">
                  <p className="text-accent-600 font-semibold text-sm sm:text-base md:text-lg font-body mb-2">{selectedItem.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;