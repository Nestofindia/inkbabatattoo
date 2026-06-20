import React from 'react';

export interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Above-the-fold images (logo, hero) load immediately */
  eager?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  eager = false,
  loading,
  decoding = 'async',
  ...props
}) => (
  <img
    loading={loading ?? (eager ? 'eager' : 'lazy')}
    decoding={decoding}
    {...props}
  />
);

export default LazyImage;
