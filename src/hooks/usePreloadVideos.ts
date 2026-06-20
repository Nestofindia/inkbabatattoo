import { useEffect } from 'react';

/** Hint the browser to fetch video files early (homepage performance). */
export function usePreloadVideos(urls: readonly string[]) {
  const urlKey = urls.join('|');

  useEffect(() => {
    const links = urls.map((href) => {
      const existing = document.querySelector<HTMLLinkElement>(
        `link[rel="preload"][as="video"][href="${href}"]`
      );
      if (existing) return existing;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = href;
      link.type = 'video/mp4';
      document.head.appendChild(link);
      return link;
    });

    return () => {
      links.forEach((link) => {
        if (link.parentNode) link.parentNode.removeChild(link);
      });
    };
  }, [urlKey]);
}
