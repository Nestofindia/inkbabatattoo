'use client';

import React from 'react';
import PageTransition from '@/components/utils/PageTransition';
import TattooDesignStudio from '@/components/home/TattooDesignStudio';

const TattooDesignStudioView: React.FC = () => (
  <PageTransition>
    <div className="pt-20">
      <TattooDesignStudio />
    </div>
  </PageTransition>
);

export default TattooDesignStudioView;
