/** Instagram page URL → embed iframe URL (reels and feed posts). */
export function getInstagramEmbedUrl(pageUrl: string): string | null {
  const reelMatch = pageUrl.match(/instagram\.com\/reel\/([^/?#]+)/i);
  if (reelMatch) {
    return `https://www.instagram.com/reel/${reelMatch[1]}/embed`;
  }

  const postMatch = pageUrl.match(/instagram\.com\/p\/([^/?#]+)/i);
  if (postMatch) {
    return `https://www.instagram.com/p/${postMatch[1]}/embed`;
  }

  return null;
}
