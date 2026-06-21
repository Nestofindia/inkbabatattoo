import { NextResponse } from 'next/server';
import { getSeasonArtist } from '@/config/seasonBookings';
import {
  buildStudioWhatsAppUrl,
  pushBookingToWhatsApp,
  sendBookingEmail,
} from '@/lib/bookingNotifications';
import { isDateInSeason } from '@/lib/seasonDates';
import type { ArtistBookingRequest, ArtistBookingResponse } from '@/types/artistBooking';
import { formatFullPhone } from '@/utils/contactFormValidation';

export async function POST(request: Request) {
  let body: ArtistBookingRequest;

  try {
    body = (await request.json()) as ArtistBookingRequest;
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 });
  }

  const artist = getSeasonArtist(body.artistId);
  if (!artist?.bookingEnabled) {
    return NextResponse.json(
      { success: false, error: 'Booking is not available for this artist.' },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.replace(/\D/g, '');
  const date = body.date?.trim();
  const timeSlot = body.timeSlot?.trim();

  if (!name || name.length < 2) {
    return NextResponse.json({ success: false, error: 'Please enter your name.' }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, error: 'Please enter a valid email.' }, { status: 400 });
  }
  if (!phone || phone.length !== 10) {
    return NextResponse.json(
      { success: false, error: 'Please enter a valid 10-digit phone number.' },
      { status: 400 }
    );
  }
  if (!date || !isDateInSeason(date)) {
    return NextResponse.json(
      { success: false, error: 'Please choose a date within the November–March season.' },
      { status: 400 }
    );
  }
  if (!timeSlot) {
    return NextResponse.json({ success: false, error: 'Please select a time slot.' }, { status: 400 });
  }

  const fullPhone = formatFullPhone(body.countryCode || '+91', phone);
  const booking: ArtistBookingRequest = {
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
  };

  const emailResult = await sendBookingEmail(booking, fullPhone);
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
}
