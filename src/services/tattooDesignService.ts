import type { TattooDesignApiResponse, TattooDesignRequest } from '@/types/tattooDesign';

/** Calls the server-side Groq tattoo design API. */
export async function generateTattooDesign(
  payload: TattooDesignRequest
): Promise<TattooDesignApiResponse> {
  const response = await fetch('/api/tattoo-design', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as TattooDesignApiResponse;

  if (!response.ok) {
    return {
      success: false,
      error: data.error ?? 'Something went wrong. Please try again.',
    };
  }

  return data;
}
