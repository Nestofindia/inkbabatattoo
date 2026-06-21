import { SITE_EMAIL } from '../config/links';
import { submitWeb3Form } from '../lib/web3forms';
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
  const serviceLabel = formatServiceLabel(data.service);
  const fullPhone = formatFullPhone(data.countryCode, data.phone);

  return submitWeb3Form({
    subject: `Ink Baba — New message from ${data.name}`,
    name: data.name,
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
  });
}

export function getContactRecipientEmail(): string {
  return SITE_EMAIL;
}
