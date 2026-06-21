import { useEffect } from 'react';

/** Hint the browser to fetch video files early (homepage performance). */
export function usePreloadVideos(urls: readonly string[]) {
  const urlKey = urls.join('|');

  useEffect(() => {
    urls.forEach((href) => {
      const existing = document.querySelector<HTMLLinkElement>(
        `link[rel="preload"][as="video"][href="${CSS.escape(href)}"]`
      );
      if (existing) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = href;
      link.type = 'video/mp4';
      document.head.appendChild(link);
    });
  }, [urlKey, urls]);
}
