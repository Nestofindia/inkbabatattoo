import { getSeasonArtist } from '@/config/seasonBookings';
import { isDateInSeason } from '@/lib/seasonDates';
import type { ArtistBookingRequest } from '@/types/artistBooking';

export function validateArtistBooking(
  body: ArtistBookingRequest
): { ok: true; booking: ArtistBookingRequest } | { ok: false; error: string } {
  const artist = getSeasonArtist(body.artistId);
  if (!artist?.bookingEnabled) {
    return { ok: false, error: 'Booking is not available for this artist.' };
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.replace(/\D/g, '');
  const date = body.date?.trim();
  const timeSlot = body.timeSlot?.trim();

  if (!name || name.length < 2) {
    return { ok: false, error: 'Please enter your name.' };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Please enter a valid email.' };
  }
  if (!phone || phone.length !== 10) {
    return { ok: false, error: 'Please enter a valid 10-digit phone number.' };
  }
  if (!date || !isDateInSeason(date)) {
    return { ok: false, error: 'Please choose a date within the November–March season.' };
  }
  if (!timeSlot) {
    return { ok: false, error: 'Please select a time slot.' };
  }

  return {
    ok: true,
    booking: {
      artistId: artist.id,
      artistName: artist.name,
      artistSpecialty: artist.specialty,
      name,
      email,
      countryCode: body.countryCode || '+91',
      phone,
      date,
      timeSlot,
      message: body.message?.trim(),
    },
  };
}
