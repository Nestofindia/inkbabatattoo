import { SITE_PHONE, WHATSAPP_URL } from '@/config/links';
import type { ArtistBookingRequest } from '@/types/artistBooking';
import { formatSeasonDisplayDate } from '@/lib/seasonDates';
import { submitWeb3Form } from '@/lib/web3forms';

export function formatBookingMessage(data: ArtistBookingRequest, fullPhone: string): string {
  return [
    'NEW SEASON BOOKING — Ink Baba Tattoo House',
    '',
    `Artist: ${data.artistName}`,
    `Specialty: ${data.artistSpecialty}`,
    `Date: ${formatSeasonDisplayDate(data.date)}`,
    `Time: ${data.timeSlot}`,
    '',
    `Client: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${fullPhone}`,
    '',
    data.message?.trim() ? `Notes: ${data.message.trim()}` : 'Notes: —',
  ].join('\n');
}

export function buildStudioWhatsAppUrl(data: ArtistBookingRequest, fullPhone: string): string {
  const text = encodeURIComponent(formatBookingMessage(data, fullPhone));
  return `${WHATSAPP_URL}?text=${text}`;
}

export async function sendBookingEmail(
  data: ArtistBookingRequest,
  fullPhone: string
): Promise<{ ok: true } | { ok: false; error: string }> {
  return submitWeb3Form({
    subject: `Season Booking — ${data.artistName} — ${data.date} ${data.timeSlot}`,
    name: data.name,
    email: data.email,
    replyto: data.email,
    phone: fullPhone,
    country_code: data.countryCode,
    service: `Season booking · ${data.artistName}`,
    message: formatBookingMessage(data, fullPhone),
  });
}

/** Push booking summary to studio WhatsApp via CallMeBot (optional env key). */
export async function pushBookingToWhatsApp(
  data: ArtistBookingRequest,
  fullPhone: string
): Promise<boolean> {
  const apiKey = process.env.CALLMEBOT_WHATSAPP_API_KEY?.trim();
  const phone = (process.env.STUDIO_WHATSAPP_PHONE ?? SITE_PHONE).replace(/\D/g, '');

  if (!apiKey) {
    return false;
  }

  try {
    const text = encodeURIComponent(formatBookingMessage(data, fullPhone));
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apiKey}`;
    const res = await fetch(url, { signal: AbortSignal.timeout(12000) });
    return res.ok;
  } catch {
    return false;
  }
}

/** Opens studio WhatsApp with booking details (works in browser after submit). */
export function openStudioWhatsApp(data: ArtistBookingRequest, fullPhone: string): void {
  if (typeof window === 'undefined') return;
  const url = buildStudioWhatsAppUrl(data, fullPhone);
  window.open(url, '_blank', 'noopener,noreferrer');
}
