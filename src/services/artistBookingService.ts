import type { ArtistBookingRequest, ArtistBookingResponse } from '@/types/artistBooking';

export async function submitArtistBooking(
  payload: ArtistBookingRequest
): Promise<ArtistBookingResponse> {
  const response = await fetch('/api/artist-booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as ArtistBookingResponse;

  if (!response.ok) {
    return { success: false, error: data.error ?? 'Booking failed. Please try again.' };
  }

  return data;
}
