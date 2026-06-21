'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, CheckCircle2, Clock, Loader2, Send } from 'lucide-react';
import {
  BOOKING_TIME_SLOTS,
  SEASON_LABEL,
  type SeasonArtistBooking,
} from '@/config/seasonBookings';
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from '@/config/contact';
import { getSeasonDateRange } from '@/lib/seasonDates';
import { submitArtistBooking } from '@/services/artistBookingService';
import { sanitizePhoneDigits } from '@/utils/contactFormValidation';

interface ArtistSeasonBookingProps {
  artist: SeasonArtistBooking;
  anchorId?: string;
}

const ArtistSeasonBooking: React.FC<ArtistSeasonBookingProps> = ({ artist, anchorId }) => {
  const { start, end } = useMemo(() => getSeasonDateRange(), []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState(DEFAULT_COUNTRY_CODE);
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState<string>(BOOKING_TIME_SLOTS[0]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setSuccess(false);

    const result = await submitArtistBooking({
      artistId: artist.id,
      artistName: artist.name,
      artistSpecialty: artist.specialty,
      name,
      email,
      countryCode,
      phone,
      date,
      timeSlot,
      message,
    });

    setLoading(false);

    if (!result.success) {
      setError(result.error ?? 'Booking failed.');
      return;
    }

    setSuccess(true);
    setWhatsappUrl(result.whatsappUrl ?? null);

    if (result.openWhatsApp && result.whatsappUrl) {
      window.open(result.whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (!artist.bookingEnabled) {
    return null;
  }

  return (
    <section
      id={anchorId}
      className="py-20 bg-gradient-to-br from-accent-50 via-warm-50 to-pastel-100 border-t border-traditional-200"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
              <CalendarDays className="w-4 h-4" />
              Upcoming Season · {SEASON_LABEL}
            </div>
            <h2 className="text-3xl md:text-4xl font-special font-bold text-traditional-900 mb-3">
              Book a Slot with {artist.displayName}
            </h2>
            <p className="text-traditional-600 font-body leading-relaxed">
              {artist.name} is joining Ink Baba for the {SEASON_LABEL} season in Arambol, Goa. Pick any
              available day and time — we will confirm by email and WhatsApp.
            </p>
          </div>

          {success ? (
            <div className="card-traditional p-8 text-center bg-white">
              <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-special font-bold text-traditional-900 mb-2">
                Booking Request Sent!
              </h3>
              <p className="text-traditional-600 font-body mb-6">
                Your slot request for {artist.name} on {date} at {timeSlot} has been emailed to{' '}
                <strong>inkbabatattoostudio@gmail.com</strong>. WhatsApp opens with your booking
                details — tap send to notify our team instantly.
              </p>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 font-logo font-condensed-bold"
                >
                  Open WhatsApp Confirmation
                  <Send className="w-4 h-4" />
                </a>
              )}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="card-traditional p-6 md:p-8 bg-white space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`${artist.id}-date`} className="block text-sm font-semibold text-traditional-800 mb-2">
                    <CalendarDays className="w-3.5 h-3.5 inline mr-1" />
                    Date
                  </label>
                  <input
                    id={`${artist.id}-date`}
                    type="date"
                    required
                    min={start}
                    max={end}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-traditional-200 px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-accent-400"
                  />
                </div>
                <div>
                  <label htmlFor={`${artist.id}-time`} className="block text-sm font-semibold text-traditional-800 mb-2">
                    <Clock className="w-3.5 h-3.5 inline mr-1" />
                    Time slot
                  </label>
                  <select
                    id={`${artist.id}-time`}
                    required
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full rounded-xl border border-traditional-200 px-4 py-3 font-body bg-white focus:outline-none focus:ring-2 focus:ring-accent-400"
                  >
                    {BOOKING_TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={`${artist.id}-name`} className="block text-sm font-semibold text-traditional-800 mb-2">
                    Your name
                  </label>
                  <input
                    id={`${artist.id}-name`}
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-traditional-200 px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-accent-400"
                  />
                </div>
                <div>
                  <label htmlFor={`${artist.id}-email`} className="block text-sm font-semibold text-traditional-800 mb-2">
                    Email
                  </label>
                  <input
                    id={`${artist.id}-email`}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-traditional-200 px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-accent-400"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-[140px_1fr] gap-4">
                <div>
                  <label htmlFor={`${artist.id}-code`} className="block text-sm font-semibold text-traditional-800 mb-2">
                    Code
                  </label>
                  <select
                    id={`${artist.id}-code`}
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-full rounded-xl border border-traditional-200 px-3 py-3 font-body bg-white focus:outline-none focus:ring-2 focus:ring-accent-400 text-sm"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`${artist.id}-phone`} className="block text-sm font-semibold text-traditional-800 mb-2">
                    Phone (10 digits)
                  </label>
                  <input
                    id={`${artist.id}-phone`}
                    type="tel"
                    required
                    inputMode="numeric"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(sanitizePhoneDigits(e.target.value))}
                    className="w-full rounded-xl border border-traditional-200 px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-accent-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={`${artist.id}-msg`} className="block text-sm font-semibold text-traditional-800 mb-2">
                  Tattoo / piercing idea (optional)
                </label>
                <textarea
                  id={`${artist.id}-msg`}
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share placement, size, or reference ideas..."
                  className="w-full rounded-xl border border-traditional-200 px-4 py-3 font-body resize-none focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full text-lg font-logo font-condensed-bold disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending booking...
                  </span>
                ) : (
                  `Reserve Slot with ${artist.displayName}`
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ArtistSeasonBooking;
