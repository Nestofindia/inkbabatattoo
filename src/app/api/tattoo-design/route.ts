import { NextResponse } from 'next/server';
import { GROQ_API_URL, GROQ_MODEL } from '@/config/ai';
import {
  buildCompactImagePrompt,
  fetchTattooImageAsDataUrl,
  generateSvgFallbackDataUrl,
} from '@/lib/tattooImage';
import type { TattooDesignRequest, TattooDesignResult } from '@/types/tattooDesign';

/** Pollinations can take 20–35s; allow enough time on supported hosts. */
export const maxDuration = 60;

const SYSTEM_PROMPT = `You are Ink Baba Tattoo House's creative AI design assistant in Arambol, Goa, India.
Generate unique, realistic custom tattoo concepts that feel personal, culturally respectful, and artist-ready.

Return ONLY valid JSON with this exact shape:
{
  "title": "short evocative design name",
  "description": "2-3 vivid sentences describing the tattoo as if printed on skin — linework, shading, flow, mood",
  "placement": "specific body placement and orientation",
  "cultureType": "primary cultural or stylistic tradition",
  "styleTags": ["tag1", "tag2", "tag3", "tag4"],
  "symbolism": "what symbols mean and why they fit the client's idea",
  "colorPalette": "black & grey OR specific colors with reasoning",
  "sizeRecommendation": "realistic size for the placement",
  "healingNotes": "one sentence on aftercare for this placement/size",
  "imagePrompt": "detailed English prompt for a tattoo flash sheet preview: black ink tattoo design on white paper, professional flash art, no skin, no photo of person, highly detailed linework, style matching the culture type"
}`;

function parseDesignJson(raw: string): Omit<TattooDesignResult, 'imageUrl'> {
  const cleaned = raw.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
  const parsed = JSON.parse(cleaned) as Record<string, unknown>;

  const styleTags = Array.isArray(parsed.styleTags)
    ? parsed.styleTags.filter((t): t is string => typeof t === 'string').slice(0, 6)
    : [];

  return {
    title: String(parsed.title ?? 'Custom Ink Concept'),
    description: String(parsed.description ?? ''),
    placement: String(parsed.placement ?? ''),
    cultureType: String(parsed.cultureType ?? ''),
    styleTags,
    symbolism: String(parsed.symbolism ?? ''),
    colorPalette: String(parsed.colorPalette ?? ''),
    sizeRecommendation: String(parsed.sizeRecommendation ?? ''),
    healingNotes: String(parsed.healingNotes ?? ''),
    imagePrompt: String(parsed.imagePrompt ?? 'professional black ink tattoo flash design on white paper'),
  };
}

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: 'AI studio is not configured. Please try again later.' },
      { status: 503 }
    );
  }

  let body: TattooDesignRequest;

  try {
    body = (await request.json()) as TattooDesignRequest;
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 });
  }

  const idea = body.idea?.trim();
  if (!idea || idea.length < 3) {
    return NextResponse.json(
      { success: false, error: 'Tell us your tattoo idea — at least a few words.' },
      { status: 400 }
    );
  }

  if (idea.length > 500) {
    return NextResponse.json(
      { success: false, error: 'Keep your idea under 500 characters.' },
      { status: 400 }
    );
  }

  const userMessage = [
    `Client idea: ${idea}`,
    `Preferred placement: ${body.placement || 'Artist recommendation'}`,
    `Culture / style: ${body.cultureStyle || 'Custom fusion'}`,
    `Size: ${body.size || 'Medium'}`,
    'Make it feel authentic to Goa spiritual tattoo culture while honoring the chosen style.',
  ].join('\n');

  try {
    const groqResponse = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userMessage },
        ],
        temperature: 0.85,
        max_tokens: 1200,
        response_format: { type: 'json_object' },
      }),
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      console.error('[tattoo-design] Groq error:', groqResponse.status, errText);
      return NextResponse.json(
        { success: false, error: 'AI could not generate your design. Please try again.' },
        { status: 502 }
      );
    }

    const groqData = (await groqResponse.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const content = groqData.choices?.[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { success: false, error: 'Empty response from AI. Please try again.' },
        { status: 502 }
      );
    }

    const design = parseDesignJson(content);
    const seed = Math.floor(Math.random() * 1_000_000);
    const imagePrompt = buildCompactImagePrompt(design, idea);

    let imageUrl =
      (await fetchTattooImageAsDataUrl(imagePrompt, seed)) ??
      generateSvgFallbackDataUrl(design);

    return NextResponse.json({
      success: true,
      design: { ...design, imagePrompt, imageUrl },
    });
  } catch (error) {
    console.error('[tattoo-design]', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create your design. Please try again.' },
      { status: 500 }
    );
  }
}
