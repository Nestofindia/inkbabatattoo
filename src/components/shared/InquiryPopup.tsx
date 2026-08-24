'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE_PHONE, SITE_PHONE_DISPLAY, WHATSAPP_URL } from '@/config/links';

const MESSAGES = [
  'Book a free enquiry — call or message on WhatsApp and we will help you explore your tattoo idea.',
  'Free enquiry available now. Talk to us on phone or WhatsApp and get help with design, placement, and timing.',
  'Need a tattoo consultation? Call or WhatsApp us for a quick free enquiry and expert guidance.',
];

const SESSION_KEY = 'inkbabaInquiryPopupShownAt';
const SESSION_EXPIRY_MS = 20 * 60 * 1000;

const InquiryPopup: React.FC = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(MESSAGES[0]);

  useEffect(() => {
    const now = Date.now();
    const stored = window.sessionStorage.getItem(SESSION_KEY);
    const lastShown = stored ? Number(stored) : 0;
    const shouldShow = !lastShown || now - lastShown > SESSION_EXPIRY_MS;

    if (!shouldShow) {
      return;
    }

    const timer = window.setTimeout(() => {
      setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
      setVisible(true);
      window.sessionStorage.setItem(SESSION_KEY, Date.now().toString());
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  if (!visible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,520px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-transparent bg-gradient-to-br from-accent-200 via-warm-100 to-pastel-100 shadow-[0_28px_80px_rgba(0,0,0,0.24)]"
    >
      <div className="relative rounded-[2rem] bg-white p-6 sm:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)]">
        <div className="absolute -right-10 top-6 h-24 w-24 rounded-full bg-accent-300/20 blur-2xl" />
        <div className="absolute -left-8 bottom-8 h-24 w-24 rounded-full bg-traditional-900/10 blur-2xl" />

        <div className="flex items-start justify-between gap-4 relative">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-accent-600">
              Inquiry
            </span>
            <h2 className="mt-4 text-xl font-heading font-bold text-traditional-900 sm:text-2xl">
              Book a free consultation
            </h2>
            <p className="mt-3 text-sm leading-6 text-traditional-600 sm:text-base">
              Every tattoo starts with an idea or a story. Share yours with us, and we’ll help you encWhatsApp turn it into something meaningful.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="relative z-10 rounded-full bg-traditional-100 p-2 text-traditional-600 transition hover:bg-traditional-200"
            aria-label="Close enquiry notification"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href={`tel:${SITE_PHONE}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-500 bg-white px-4 py-3 text-sm font-semibold text-traditional-900 transition hover:bg-accent-50"
          >
            <Phone className="w-4 h-4 text-accent-600" />
            Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 transition hover:from-green-600 hover:to-emerald-600"
          >
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default InquiryPopup;
