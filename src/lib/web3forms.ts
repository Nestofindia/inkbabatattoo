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

async function parseJsonResponse(response: Response): Promise<Record<string, unknown>> {
  const text = await response.text();

  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return { success: false, message: 'Unexpected response from email service.' };
  }
}

async function submitViaWeb3Forms(
  accessKey: string,
  payload: Web3FormPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
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

    const result = await parseJsonResponse(response);

    if (!response.ok || result.success !== true) {
      return {
        ok: false,
        error: String(result.message ?? 'Unable to send email. Please try WhatsApp.'),
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: 'Unable to reach email service. Please try WhatsApp.' };
  }
}

/** FormSubmit.co fallback — delivers to STUDIO_INBOX_EMAIL (activate once via inbox link). */
async function submitViaFormSubmit(
  payload: Web3FormPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
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

    const result = await parseJsonResponse(response);

    if (!response.ok || result.success !== 'true') {
      return {
        ok: false,
        error: String(result.message ?? 'Unable to send email. Please try WhatsApp.'),
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: 'Unable to reach email service. Please try WhatsApp.' };
  }
}

export interface SubmitWeb3FormOptions {
  /** Web3Forms free tier blocks server-side calls — use FormSubmit from API routes. */
  serverSide?: boolean;
}

/** Contact + booking emails — Web3Forms in the browser, FormSubmit fallback on the server. */
export async function submitWeb3Form(
  payload: Web3FormPayload,
  options: SubmitWeb3FormOptions = {}
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!options.serverSide) {
    const accessKey = getWeb3FormsAccessKey();
    if (accessKey) {
      const web3Result = await submitViaWeb3Forms(accessKey, payload);
      if (web3Result.ok) return web3Result;
    }
  }

  return submitViaFormSubmit(payload);
}
