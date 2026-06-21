'use client';

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

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
  onLoadedData,
  ...props
}) => {
  const ref = useRef<HTMLVideoElement>(null);
  const loadImmediately = eager || priority;
  const useIntersection = playWhenVisible && !loadImmediately;
  const [isActive, setIsActive] = useState(loadImmediately);
  const [isReady, setIsReady] = useState(loadImmediately);

  const shouldAutoplay = Boolean(autoPlay || useIntersection || priority || eager);

  const tryPlay = useCallback(
    (el: HTMLVideoElement) => {
      if (shouldAutoplay) {
        void el.play().catch(() => {});
      }
    },
    [shouldAutoplay]
  );

  const markReady = useCallback(
    (el: HTMLVideoElement) => {
      setIsReady(true);
      tryPlay(el);
    },
    [tryPlay]
  );

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

  useLayoutEffect(() => {
    if (!isActive || !src) return;

    const el = ref.current;
    if (!el) return;

    const handleReady = () => markReady(el);

    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      handleReady();
    } else {
      el.addEventListener('canplay', handleReady, { once: true });
      el.addEventListener('loadeddata', handleReady, { once: true });
    }

    if (el.networkState === HTMLMediaElement.NETWORK_EMPTY) {
      el.load();
    }

    return () => {
      el.removeEventListener('canplay', handleReady);
      el.removeEventListener('loadeddata', handleReady);
    };
  }, [isActive, src, markReady]);

  const resolvedPreload = preload ?? (loadImmediately || isActive ? 'auto' : 'none');
  const nativeAutoPlay = loadImmediately && shouldAutoplay;

  const videoClassName = [
    className,
    loadImmediately || isReady ? 'opacity-100' : 'opacity-0',
    'transition-opacity duration-200',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <video
      ref={ref}
      src={isActive ? src : undefined}
      preload={resolvedPreload}
      autoPlay={nativeAutoPlay}
      muted={muted ?? true}
      playsInline={playsInline}
      {...(loadImmediately ? { fetchPriority: 'high' as const } : {})}
      className={videoClassName}
      onCanPlay={(e) => {
        markReady(e.currentTarget);
        onCanPlay?.(e);
      }}
      onLoadedData={(e) => {
        markReady(e.currentTarget);
        onLoadedData?.(e);
      }}
      {...props}
    />
  );
};

export default LazyVideo;
