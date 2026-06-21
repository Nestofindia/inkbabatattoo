/** Groq + tattoo preview image settings (no secrets — keys live in env). */

export const GROQ_MODEL = 'llama-3.3-70b-versatile';
export const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export const TATTOO_IMAGE_WIDTH = 768;
export const TATTOO_IMAGE_HEIGHT = 768;

export const TATTOO_PLACEMENTS = [
  'Forearm',
  'Upper arm',
  'Full sleeve',
  'Back',
  'Chest',
  'Rib cage',
  'Thigh',
  'Calf',
  'Ankle',
  'Wrist',
  'Shoulder',
  'Neck',
] as const;

export const TATTOO_CULTURE_STYLES = [
  'Spiritual / Mandala',
  'Japanese Irezumi',
  'Tribal',
  'Neo-traditional',
  'Fine line minimal',
  'Goa beach culture',
  'Sanskrit / Devotional',
  'Geometric sacred',
  'Blackwork realism',
  'Custom fusion',
] as const;

export const TATTOO_SIZES = ['Small (2–4 in)', 'Medium (4–8 in)', 'Large (8+ in)', 'Sleeve / large piece'] as const;
