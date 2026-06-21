import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GOOGLE_REVIEWS_URL, WHATSAPP_URL } from '../../config/links';
import ChatBotWidget from '../chatbot/ChatBotWidget';

const cardBase =
  'flex flex-col items-center justify-center bg-white rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.1)] border border-traditional-100 w-[4.25rem] sm:w-[4.5rem] p-[10px] gap-0.5';

const cardLink =
  `${cardBase} hover:shadow-[0_6px_20px_rgba(0,0,0,0.14)] hover:scale-[1.02] transition-all duration-300`;

const labelClass =
  'text-[12px] font-semibold text-traditional-800 text-center leading-[1.15] font-heading font-condensed-semibold';

const ratingClass =
  'text-xl sm:text-2xl font-bold text-traditional-700 mt-0.5 font-heading leading-none';

const GoogleIcon = () => (
  <svg className="w-5 h-5 sm:w-5 sm:h-5 mb-0.5" viewBox="0 0 24 24" aria-hidden>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const HygieneIcon = () => (
  <span
    className="flex items-center justify-center w-6 h-6 sm:w-6 sm:h-6 mb-0.5 rounded-md bg-[#22c55e] text-white text-lg font-bold leading-none"
    aria-hidden
  >
    +
  </span>
);

const TwoLineLabel: React.FC<{ line1: string; line2: string }> = ({ line1, line2 }) => (
  <span className={labelClass}>
    <span className="block">{line1}</span>
    <span className="block">{line2}</span>
  </span>
);

const RatingCardContent: React.FC<{
  rating: string;
  icon: React.ReactNode;
  line1: string;
  line2: string;
}> = ({ rating, icon, line1, line2 }) => (
  <>
    {icon}
    <TwoLineLabel line1={line1} line2={line2} />
    <span className={ratingClass}>{rating}</span>
  </>
);

const WhatsAppButton = () => {
  return (
    <>
      {/* Rating cards — bottom right */}
      <div
        className="fixed z-50 flex flex-col items-end gap-1.5 sm:gap-2 bottom-4 right-3 sm:bottom-6 sm:right-6"
        aria-label="Ratings"
      >
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cardLink}
          aria-label="Google Reviews 4.9 — open reviews"
        >
          <RatingCardContent
            line1="Google"
            line2="Reviews"
            rating="4.9"
            icon={<GoogleIcon />}
          />
        </a>

        <div className={cardBase} aria-label="Hygiene and Safety rating 4.9">
          <RatingCardContent
            line1="Hygiene &"
            line2="Safety"
            rating="4.9"
            icon={<HygieneIcon />}
          />
        </div>
      </div>

      {/* Chat + WhatsApp — bottom left */}
      <div className="fixed z-50 bottom-4 left-3 sm:bottom-6 sm:left-6 flex flex-col items-start gap-3">
        <div className="relative">
          <ChatBotWidget />
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
