import { NextResponse } from 'next/server';
import { validateArtistBooking } from '@/lib/artistBookingValidation';
import {
  buildStudioWhatsAppUrl,
  pushBookingToWhatsApp,
  sendBookingEmail,
} from '@/lib/bookingNotifications';
import type { ArtistBookingRequest, ArtistBookingResponse } from '@/types/artistBooking';
import { formatFullPhone } from '@/utils/contactFormValidation';

export async function POST(request: Request) {
  let body: ArtistBookingRequest;

  try {
    body = (await request.json()) as ArtistBookingRequest;
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 });
  }

  const validation = validateArtistBooking(body);
  if (!validation.ok) {
    return NextResponse.json({ success: false, error: validation.error }, { status: 400 });
  }

  const booking = validation.booking;
  const fullPhone = formatFullPhone(booking.countryCode, booking.phone);

  try {
    const emailResult = await sendBookingEmail(booking, fullPhone, { serverSide: true });
    if (!emailResult.ok) {
      return NextResponse.json({ success: false, error: emailResult.error }, { status: 502 });
    }

    await pushBookingToWhatsApp(booking, fullPhone);

    const response: ArtistBookingResponse = {
      success: true,
      whatsappUrl: buildStudioWhatsAppUrl(booking, fullPhone),
      openWhatsApp: true,
    };

    return NextResponse.json(response);
  } catch {
    return NextResponse.json(
      { success: false, error: 'Booking failed. Please try again or contact us on WhatsApp.' },
      { status: 500 }
    );
  }
}
