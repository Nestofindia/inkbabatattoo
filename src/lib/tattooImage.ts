import { TATTOO_IMAGE_HEIGHT, TATTOO_IMAGE_WIDTH } from '@/config/ai';
import type { TattooDesignResult } from '@/types/tattooDesign';

const RATE_LIMIT_PLACEHOLDER_MIN_BYTES = 1_100_000;
const MIN_VALID_IMAGE_BYTES = 800;

/** Shorter prompt = faster generation and smaller URLs. */
export function buildCompactImagePrompt(
  design: Pick<TattooDesignResult, 'title' | 'cultureType' | 'imagePrompt' | 'styleTags'>,
  idea: string
): string {
  const tags = design.styleTags.slice(0, 3).join(', ');
  const raw = design.imagePrompt || `${design.title}, ${design.cultureType}, ${tags}, ${idea}`;
  const cleaned = raw.replace(/\s+/g, ' ').trim();
  return cleaned.slice(0, 380);
}

export function buildTattooImageFetchUrl(prompt: string, seed: number): string {
  const params = new URLSearchParams({
    width: String(TATTOO_IMAGE_WIDTH),
    height: String(TATTOO_IMAGE_HEIGHT),
    nologo: 'true',
    seed: String(seed),
    model: 'flux',
  });
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?${params.toString()}`;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Fetches Pollinations image server-side and returns a data URL for reliable client display. */
export async function fetchTattooImageAsDataUrl(
  prompt: string,
  seed: number,
  timeoutMs = 35000
): Promise<string | null> {
  const url = buildTattooImageFetchUrl(prompt, seed);

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      if (attempt > 0) {
        await sleep(1500 * attempt);
      }

      const response = await fetch(url, {
        headers: { Accept: 'image/jpeg,image/png,image/*' },
        signal: AbortSignal.timeout(timeoutMs),
        cache: 'no-store',
      });

      if (response.status === 429 || response.status === 402 || response.status === 503) {
        continue;
      }

      if (!response.ok) {
        continue;
      }

      const buffer = await response.arrayBuffer();
      const byteLength = buffer.byteLength;

      if (byteLength < MIN_VALID_IMAGE_BYTES || byteLength >= RATE_LIMIT_PLACEHOLDER_MIN_BYTES) {
        continue;
      }

      const contentType = response.headers.get('content-type')?.split(';')[0] || 'image/jpeg';
      const base64 = Buffer.from(buffer).toString('base64');
      return `data:${contentType};base64,${base64}`;
    } catch {
      // retry
    }
  }

  return null;
}

/** Always-available tattoo flash-style preview when external image gen fails or times out. */
export function generateSvgFallbackDataUrl(
  design: Pick<TattooDesignResult, 'title' | 'cultureType' | 'styleTags' | 'description'>
): string {
  const tags = design.styleTags.slice(0, 4);
  const tagRows = tags
    .map(
      (tag, i) =>
        `<text x="384" y="${680 + i * 28}" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#5c4033">${escapeXml(tag)}</text>`
    )
    .join('');

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="768" height="768" viewBox="0 0 768 768">
  <defs>
    <radialGradient id="bg" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="#faf6f0"/>
      <stop offset="100%" stop-color="#e8dfd0"/>
    </radialGradient>
    <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#d4c4b0" opacity="0.35"/>
    </pattern>
  </defs>
  <rect width="768" height="768" fill="url(#bg)"/>
  <rect width="768" height="768" fill="url(#dots)"/>
  <rect x="48" y="48" width="672" height="672" rx="32" fill="none" stroke="#432511" stroke-width="4"/>
  <rect x="72" y="72" width="624" height="624" rx="24" fill="none" stroke="#c87941" stroke-width="2" stroke-dasharray="8 6"/>
  <circle cx="384" cy="300" r="160" fill="none" stroke="#432511" stroke-width="3" opacity="0.25"/>
  <circle cx="384" cy="300" r="120" fill="none" stroke="#432511" stroke-width="2" opacity="0.2"/>
  <circle cx="384" cy="300" r="80" fill="none" stroke="#c87941" stroke-width="2" opacity="0.35"/>
  <path d="M384 150 C425 210 460 255 384 450 C308 255 343 210 384 150 Z" fill="none" stroke="#432511" stroke-width="3"/>
  <path d="M384 190 L384 410 M294 300 L474 300" stroke="#432511" stroke-width="1.5" opacity="0.35"/>
  <path d="M330 230 Q384 265 438 230 M330 370 Q384 335 438 370" fill="none" stroke="#432511" stroke-width="1.5" opacity="0.35"/>
  <text x="384" y="540" text-anchor="middle" font-family="Georgia, serif" font-size="30" font-weight="bold" fill="#432511">${escapeXml(design.title.slice(0, 40))}</text>
  <text x="384" y="575" text-anchor="middle" font-family="Georgia, serif" font-size="18" fill="#8b5a2b">${escapeXml(design.cultureType.slice(0, 50))}</text>
  ${tagRows}
  <text x="384" y="748" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#9a8b7a">Ink Baba AI Concept Preview</text>
</svg>`;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
