'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HomeMobileScrollProps {
  children: React.ReactNode;
  /** Grid classes applied at desktop breakpoint (770px+) */
  className?: string;
}

const MOBILE_SCROLL_QUERY = '(max-width: 1023px)';

const HomeMobileScroll: React.FC<HomeMobileScrollProps> = ({ children, className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrollMode, setIsScrollMode] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !isScrollMode) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < maxScroll - 4);
  }, [isScrollMode]);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_SCROLL_QUERY);
    const onChange = () => setIsScrollMode(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isScrollMode) return;
    el.scrollLeft = 0;
    updateScrollState();
  }, [isScrollMode, children, updateScrollState]);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState, isScrollMode, children]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isScrollMode) return;

    const onWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      // Vertical wheel — scroll the page, not the carousel
      if (absY > absX) return;

      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft >= maxScroll - 1;
      if ((e.deltaX > 0 && atEnd) || (e.deltaX < 0 && atStart)) return;

      e.preventDefault();
      el.scrollLeft += e.deltaX;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [isScrollMode]);

  const scrollByCard = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    const firstItem = el.querySelector<HTMLElement>('.home-mobile-scroll-item');
    const gap = parseFloat(getComputedStyle(el).columnGap || getComputedStyle(el).gap || '16') || 16;
    const step = firstItem ? firstItem.offsetWidth + gap : el.clientWidth * 0.82;

    el.scrollBy({
      left: direction === 'left' ? -step : step,
      behavior: 'smooth',
    });
  };

  return (
    <div className="home-mobile-scroll-wrap">
      <div ref={scrollRef} className={`home-mobile-scroll ${className}`.trim()}>
        {children}
      </div>

      {isScrollMode && (
        <div className="home-mobile-scroll-controls" aria-label="Carousel navigation">
          <button
            type="button"
            className="home-mobile-scroll-arrow"
            onClick={() => scrollByCard('left')}
            disabled={!canScrollLeft}
            aria-label="Show previous cards"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            className="home-mobile-scroll-arrow"
            onClick={() => scrollByCard('right')}
            disabled={!canScrollRight}
            aria-label="Show next cards"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeMobileScroll;
