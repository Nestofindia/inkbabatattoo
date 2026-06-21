import { SITE_EMAIL } from '@/config/links';

export const WEB3FORMS_SUBMIT_URL = 'https://api.web3forms.com/submit';
export const STUDIO_INBOX_EMAIL = SITE_EMAIL;
export const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${encodeURIComponent(STUDIO_INBOX_EMAIL)}`;

export interface Web3FormPayload {
  subject: string;
  name: string;
  email: string;
  replyto: string;
  phone?: string;
  country_code?: string;
  service?: string;
  message: string;
}

export function getWeb3FormsAccessKey(): string | undefined {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || undefined;
}

async function submitViaWeb3Forms(
  accessKey: string,
  payload: Web3FormPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const response = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: payload.subject,
      name: payload.name,
      from_name: payload.name,
      email: payload.email,
      replyto: payload.replyto,
      phone: payload.phone,
      country_code: payload.country_code,
      service: payload.service,
      message: payload.message,
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    return {
      ok: false,
      error: result.message ?? 'Unable to send email. Please try WhatsApp.',
    };
  }

  return { ok: true };
}

/** FormSubmit.co fallback — delivers to STUDIO_INBOX_EMAIL (activate once via inbox link). */
async function submitViaFormSubmit(
  payload: Web3FormPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const response = await fetch(FORMSUBMIT_AJAX_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      _subject: payload.subject,
      _template: 'table',
      _captcha: 'false',
      name: payload.name,
      email: payload.email,
      phone: payload.phone ?? '',
      country_code: payload.country_code ?? '',
      service: payload.service ?? '',
      message: payload.message,
    }),
  });

  const result = (await response.json()) as { success?: string; message?: string };

  if (!response.ok || result.success !== 'true') {
    return {
      ok: false,
      error: result.message ?? 'Unable to send email. Please try WhatsApp.',
    };
  }

  return { ok: true };
}

/** Contact + booking emails — Web3Forms when configured, otherwise FormSubmit to studio inbox. */
export async function submitWeb3Form(
  payload: Web3FormPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const accessKey = getWeb3FormsAccessKey();

  if (accessKey) {
    const web3Result = await submitViaWeb3Forms(accessKey, payload);
    if (web3Result.ok) return web3Result;
  }

  return submitViaFormSubmit(payload);
}
