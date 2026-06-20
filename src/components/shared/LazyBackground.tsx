'use client';

import React, { useEffect, useRef, useState } from 'react';

interface LazyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  backgroundPosition?: string;
  backgroundSize?: string;
}

/**
 * Defers loading CSS background images until the element is near the viewport.
 */
const LazyBackground: React.FC<LazyBackgroundProps> = ({
  src,
  className = '',
  backgroundPosition = 'center',
  backgroundSize = 'cover',
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        backgroundPosition,
        backgroundSize,
        ...(loaded ? { backgroundImage: `url('${src}')` } : {}),
      }}
      {...props}
    />
  );
};

export default LazyBackground;
