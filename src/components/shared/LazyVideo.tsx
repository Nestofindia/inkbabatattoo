'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  /** Hero / above-fold — preload and autoplay immediately */
  eager?: boolean;
  /** Load and play only when scrolled into view (saves bandwidth) */
  playWhenVisible?: boolean;
  /** Start fetching immediately (featured cards, near-fold sections) */
  priority?: boolean;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  eager = false,
  playWhenVisible = false,
  priority = false,
  preload,
  autoPlay,
  muted,
  playsInline = true,
  className = '',
  src,
  onCanPlay,
  ...props
}) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  const loadImmediately = eager || priority;
  const useIntersection = playWhenVisible && !loadImmediately;
  const [isActive, setIsActive] = useState(loadImmediately);

  useEffect(() => {
    if (!useIntersection) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          el.pause();
        }
      },
      { rootMargin: '0px 320px 0px 320px', threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [useIntersection]);

  useEffect(() => {
    if (!isActive || !src) return;

    const el = ref.current;
    if (!el) return;

    el.preload = 'auto';
    if (el.readyState < HTMLMediaElement.HAVE_FUTURE_DATA) {
      el.load();
    }

    const playWhenReady = () => {
      void el.play().catch(() => {});
    };

    const shouldAutoplay = Boolean(autoPlay || useIntersection || priority);
    if (!shouldAutoplay) return;

    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      playWhenReady();
    } else {
      el.addEventListener('canplay', playWhenReady, { once: true });
      return () => el.removeEventListener('canplay', playWhenReady);
    }
  }, [isActive, src, autoPlay, useIntersection, priority]);

  const resolvedPreload =
    preload ?? (loadImmediately ? 'auto' : isActive ? 'auto' : 'none');

  const videoClassName = [
    className,
    isReady ? 'opacity-100' : 'opacity-0',
    'transition-opacity duration-300',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <video
      ref={ref}
      src={isActive ? src : undefined}
      preload={resolvedPreload}
      autoPlay={false}
      muted={muted ?? true}
      playsInline={playsInline}
      {...(loadImmediately ? { fetchPriority: 'high' as const } : {})}
      className={videoClassName}
      onCanPlay={(e) => {
        setIsReady(true);
        onCanPlay?.(e);
      }}
      {...props}
    />
  );
};

export default LazyVideo;
