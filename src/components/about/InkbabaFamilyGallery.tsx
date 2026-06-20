'use client';

import React, { useMemo } from 'react';
import PiercingWorkGallery from '../services/PiercingWorkGallery';
import { INKBABA_FAMILY_PHOTOS } from '../../config/inkbabaFamily';
import type { ServiceWorkItem } from '../../config/serviceWork';

const InkbabaFamilyGallery: React.FC = () => {
  const items = useMemo<ServiceWorkItem[]>(
    () =>
      INKBABA_FAMILY_PHOTOS.map((photo) => ({
        id: photo.id,
        type: 'image',
        artist: 'Ink Baba',
        category: 'Family',
        src: photo.src,
        alt: photo.alt,
      })),
    []
  );

  return <PiercingWorkGallery items={items} embedded />;
};

export default InkbabaFamilyGallery;
