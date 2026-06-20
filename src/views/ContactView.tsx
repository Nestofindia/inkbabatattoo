'use client';

import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import Toast from '@/components/shared/Toast';
import {
  GOOGLE_MAPS_URL,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_DISPLAY,
} from '@/config/links';
import {
  submitContactForm,
  type ContactFormData,
} from '@/services/contactFormService';
import {
  hasContactFormErrors,
  sanitizePhoneDigits,
  validateContactForm,
  type ContactFormErrors,
} from '@/utils/contactFormValidation';
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from '@/config/contact';

const contactLinkClass =
  'text-traditional-600 hover:text-accent-600 hover:underline transition-colors duration-200';

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  countryCode: DEFAULT_COUNTRY_CODE,
  phone: '',
  service: '',
  message: '',
};

const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    variant: 'success' | 'error';
  }>({ visible: false, message: '', variant: 'success' });

  const closeToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const nextValue = name === 'phone' ? sanitizePhoneDigits(value) : value;
    setFormData((prev) => ({ ...prev, [name]: nextValue }));
    setErrors((prev) => {
      if (!prev[name as keyof ContactFormErrors]) return prev;
      const next = { ...prev };
      delete next[name as keyof ContactFormErrors];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);
    if (hasContactFormErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const payload: ContactFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      countryCode: formData.countryCode,
      phone: formData.phone.trim(),
      service: formData.service,
      message: formData.message.trim(),
    };

    const result = await submitContactForm(payload);
    setIsSubmitting(false);

    if (result.ok) {
      setFormData(INITIAL_FORM);
      setToast({
        visible: true,
        variant: 'success',
        message: 'Thank you for submitting! We will connect with you shortly.',
      });
      return;
    }

    setToast({
      visible: true,
      variant: 'error',
      message: result.error,
    });
  };

  const fieldError = (field: keyof ContactFormErrors) =>
    errors[field] ? (
      <p className="mt-1 text-sm text-red-600" role="alert">
        {errors[field]}
      </p>
    ) : null;

  return (
    <PageTransition>
      <Toast
        message={toast.message}
        visible={toast.visible}
        variant={toast.variant}
        onClose={closeToast}
      />

      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-traditional-300 rounded-full opacity-30 float-animation"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-400 rounded-full opacity-20 float-animation"></div>
          <div className="absolute inset-0 bg-mandala-subtle opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader
            title="Let's Connect"
            subtitle="Bring your tattoo ideas to life with us. Reach out or visit our studio today."
            accent="contact"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-heading font-bold mb-6 text-traditional-900">
                Contact Information
              </h2>
              <p className="text-traditional-600 mb-8">
                Let’s create something meaningful together. We’re here to bring your vision to life
                with creativity, passion, and precision. Contact us today or visit our studio to
                begin your spiritual tattoo journey.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-traditional-900">
                      Studio Location
                    </h3>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${contactLinkClass} block mt-1`}
                    >
                      Inkbaba Tattoo House, Khalcha Wada, Arambol Market Beach Road, Arambol, Goa.
                      403524
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-traditional-900">Phone</h3>
                    <a href={`tel:${SITE_PHONE}`} className={`${contactLinkClass} block mt-1`}>
                      {SITE_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-traditional-900">Email</h3>
                    <a href={`mailto:${SITE_EMAIL}`} className={`${contactLinkClass} block mt-1`}>
                      {SITE_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-traditional-900">
                      Studio Hours
                    </h3>
                    <p className="text-traditional-600">Everyday: 11AM - 9PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-traditional-100 rounded-2xl overflow-hidden h-64 relative border-2 border-traditional-200">
                <iframe
                  src="https://maps.google.com/maps?q=15.6922865,73.7030475&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="Ink Baba Tattoo House location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-traditional-50 p-8 rounded-2xl shadow-traditional border-2 border-traditional-200">
                <h2 className="text-2xl font-heading font-bold mb-6 text-traditional-900">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-traditional-600 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input-field ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      <div id="name-error">{fieldError('name')}</div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-traditional-600 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input-field ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      <div id="email-error">{fieldError('email')}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-traditional-600 mb-2">
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                        <select
                          id="countryCode"
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className={`input-field w-[7.5rem] shrink-0 px-2 sm:w-36 ${
                            errors.countryCode ? 'border-red-500 focus:border-red-500' : ''
                          }`}
                          aria-label="Country code"
                          aria-invalid={!!errors.countryCode}
                        >
                          {COUNTRY_CODES.map(({ code, label }) => (
                            <option key={code} value={code}>
                              {label}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          inputMode="numeric"
                          maxLength={10}
                          placeholder="10-digit number"
                          className={`input-field min-w-0 flex-1 ${
                            errors.phone ? 'border-red-500 focus:border-red-500' : ''
                          }`}
                          autoComplete="tel-national"
                          aria-invalid={!!errors.phone}
                          aria-describedby={
                            errors.phone || errors.countryCode ? 'phone-error' : undefined
                          }
                        />
                      </div>
                      <div id="phone-error">
                        {fieldError('countryCode')}
                        {fieldError('phone')}
                      </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="service" className="block text-traditional-600 mb-2">
                      Interested Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="input-field w-full"
                    >
                      <option value="">Select a service...</option>
                      <option value="sacred-symbols">Sacred Symbols</option>
                      <option value="mandala-art">Mandala Art</option>
                      <option value="spiritual-portraits">Spiritual Portraits</option>
                      <option value="ritual-tattoos">Custom Ritual Tattoos</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-traditional-600 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`input-field resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    <div id="message-error">{fieldError('message')}</div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" aria-hidden />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} aria-hidden />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactView;
