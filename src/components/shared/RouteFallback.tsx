import React from 'react';

const RouteFallback: React.FC = () => (
  <div
    className="flex min-h-[50vh] items-center justify-center"
    aria-busy="true"
    aria-label="Loading page"
  >
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-traditional-200 border-t-traditional-800" />
  </div>
);

export default RouteFallback;
