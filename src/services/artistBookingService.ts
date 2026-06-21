import {
  buildStudioWhatsAppUrl,
  sendBookingEmail,
} from '@/lib/bookingNotifications';
import { validateArtistBooking } from '@/lib/artistBookingValidation';
import type { ArtistBookingRequest, ArtistBookingResponse } from '@/types/artistBooking';
import { formatFullPhone } from '@/utils/contactFormValidation';

/** Submits season booking from the browser (Web3Forms) and returns studio WhatsApp link. */
export async function submitArtistBooking(
  payload: ArtistBookingRequest
): Promise<ArtistBookingResponse> {
  const validation = validateArtistBooking(payload);
  if (!validation.ok) {
    return { success: false, error: validation.error };
  }

  const booking = validation.booking;
  const fullPhone = formatFullPhone(booking.countryCode, booking.phone);

  const emailResult = await sendBookingEmail(booking, fullPhone);
  if (!emailResult.ok) {
    return { success: false, error: emailResult.error };
  }

  return {
    success: true,
    whatsappUrl: buildStudioWhatsAppUrl(booking, fullPhone),
    openWhatsApp: true,
  };
}
