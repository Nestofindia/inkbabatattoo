import { SITE_EMAIL } from '../config/links';
import { formatFullPhone } from '../utils/contactFormValidation';

export interface ContactFormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  service: string;
  message: string;
}

const SERVICE_LABELS: Record<string, string> = {
  'sacred-symbols': 'Sacred Symbols',
  'mandala-art': 'Mandala Art',
  'spiritual-portraits': 'Spiritual Portraits',
  'ritual-tattoos': 'Custom Ritual Tattoos',
  other: 'Other',
};

function formatServiceLabel(value: string): string {
  if (!value) return 'Not specified';
  return SERVICE_LABELS[value] ?? value;
}

/** Sends contact form data to studio inbox via Web3Forms (see .env.example). */
export async function submitContactForm(
  data: ContactFormData
): Promise<{ ok: true } | { ok: false; error: string }> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string | undefined;

  if (!accessKey) {
    return {
      ok: false,
      error: 'Contact form is not configured. Please email us directly.',
    };
  }

  const serviceLabel = formatServiceLabel(data.service);

  const fullPhone = formatFullPhone(data.countryCode, data.phone);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Ink Baba — New message from ${data.name}`,
      name: data.name,
      from_name: data.name,
      email: data.email,
      replyto: data.email,
      phone: fullPhone,
      country_code: data.countryCode,
      service: serviceLabel,
      message: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${fullPhone}`,
        `Service: ${serviceLabel}`,
        '',
        'Message:',
        data.message,
      ].join('\n'),
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    return {
      ok: false,
      error: result.message ?? 'Unable to send your message. Please try again.',
    };
  }

  return { ok: true };
}

export function getContactRecipientEmail(): string {
  return SITE_EMAIL;
}
