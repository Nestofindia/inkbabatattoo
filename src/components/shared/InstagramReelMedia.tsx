'use client';

import React from 'react';
import LazyVideo from './LazyVideo';

interface InstagramReelMediaProps {
  videoSrc: string;
  title: string;
  variant: 'card' | 'lightbox';
  className?: string;
}

/** Native MP4 playback for Instagram reels — embeds cannot autoplay or crop cleanly. */
const InstagramReelMedia: React.FC<InstagramReelMediaProps> = ({
  videoSrc,
  title,
  variant,
  className = '',
}) => {
  const isCard = variant === 'card';

  return (
    <LazyVideo
      playWhenVisible={isCard}
      eager={!isCard}
      src={videoSrc}
      className={`absolute inset-0 h-full w-full object-cover ${
        isCard ? 'transition-transform duration-500 group-hover:scale-110' : ''
      } ${className}`}
      muted
      loop
      controls={!isCard}
      autoPlay={!isCard}
      playsInline
      disablePictureInPicture={!isCard}
      controlsList={isCard ? undefined : 'nodownload'}
      aria-label={title}
      onMouseEnter={
        isCard
          ? (e) => {
              void e.currentTarget.play();
            }
          : undefined
      }
      onMouseLeave={
        isCard
          ? (e) => {
              e.currentTarget.pause();
            }
          : undefined
      }
    />
  );
};

export default InstagramReelMedia;
