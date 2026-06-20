import type { ContactFormData } from '../services/contactFormService';
import { COUNTRY_CODES } from '../config/contact';

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_DIGITS_PATTERN = /^\d{10}$/;
const COUNTRY_CODE_PATTERN = /^\+\d{1,4}$/;

const ALLOWED_COUNTRY_CODES = new Set<string>(COUNTRY_CODES.map((c) => c.code));

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = data.name.trim();
  const email = data.email.trim();
  const countryCode = data.countryCode.trim();
  const phone = data.phone.trim();
  const message = data.message.trim();

  if (!name) {
    errors.name = 'Please enter your name.';
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!countryCode) {
    errors.countryCode = 'Please select a country code.';
  } else if (!COUNTRY_CODE_PATTERN.test(countryCode) || !ALLOWED_COUNTRY_CODES.has(countryCode)) {
    errors.countryCode = 'Please select a valid country code.';
  }

  if (!phone) {
    errors.phone = 'Please enter your 10-digit phone number.';
  } else if (!PHONE_DIGITS_PATTERN.test(phone)) {
    errors.phone = 'Phone number must be exactly 10 digits (numbers only).';
  }

  if (!message) {
    errors.message = 'Please enter your message.';
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return errors;
}

export function hasContactFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

/** Strip non-digits and cap at 10 characters for phone input */
export function sanitizePhoneDigits(value: string): string {
  return value.replace(/\D/g, '').slice(0, 10);
}

export function formatFullPhone(countryCode: string, phone: string): string {
  return `${countryCode} ${phone}`;
}
