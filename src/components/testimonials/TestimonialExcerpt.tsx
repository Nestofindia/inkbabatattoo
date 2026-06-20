'use client';

import React, { useState } from 'react';

const WORD_LIMIT = 25;

interface TestimonialExcerptProps {
  text: string;
  className?: string;
}

const readMoreBtnClass =
  'inline text-accent-600 hover:text-accent-700 font-semibold font-heading font-condensed-semibold text-sm not-italic tracking-wide align-baseline underline-offset-2 hover:underline ml-0.5';

const TestimonialExcerpt: React.FC<TestimonialExcerptProps> = ({
  text,
  className = 'text-traditional-700 italic mb-8 leading-relaxed text-lg font-body',
}) => {
  const [expanded, setExpanded] = useState(false);
  const words = text.trim().split(/\s+/);
  const isLong = words.length > WORD_LIMIT;
  const truncated = words.slice(0, WORD_LIMIT).join(' ');

  return (
    <blockquote className={className}>
      &ldquo;
      {expanded || !isLong ? text : truncated}
      {isLong && !expanded && (
        <>
          …{' '}
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className={readMoreBtnClass}
            aria-expanded={false}
          >
            Read more
          </button>
        </>
      )}
      {isLong && expanded && (
        <>
          {' '}
          <button
            type="button"
            onClick={() => setExpanded(false)}
            className={readMoreBtnClass}
            aria-expanded={true}
          >
            Read less
          </button>
        </>
      )}
      &rdquo;
    </blockquote>
  );
};

export default TestimonialExcerpt;
