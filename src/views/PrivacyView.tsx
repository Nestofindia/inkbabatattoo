'use client';

import React from 'react';
import Link from 'next/link';
import PageTransition from '@/components/utils/PageTransition';
import SectionHeader from '@/components/shared/SectionHeader';
import { SITE_EMAIL, SITE_PHONE_DISPLAY, WHATSAPP_URL } from '@/config/links';

const privacySections = [
  {
    title: 'Information We Collect',
    body:
      'Depending on your interaction with the studio, we may collect contact details such as your name, phone number and email address, as well as tattoo-related information including design preferences, reference images, placement details and photographs of existing tattoos. Appointment information such as preferred dates, booking details and related communications may also be recorded. Payment information may be collected where needed to confirm or record transactions, and website information such as browser type, device data and pages visited may be logged through analytics or cookies.',
  },
  {
    title: 'How We Use Your Information',
    body:
      'Information may be used to respond to enquiries, discuss designs, arrange appointments, assess cover-up options, communicate pricing and aftercare guidance, manage payments, improve website functionality and meet applicable legal requirements.',
  },
  {
    title: 'Photographs and Tattoo Images',
    body:
      'Images shared for design discussions or cover-up assessments are used for the relevant enquiry or service. Photographs of completed tattoos may be used on the studio’s website, portfolio or social media only with appropriate permission. Receiving a tattoo does not automatically grant permission to publish photographs.',
  },
  {
    title: 'Cookies and Third-Party Services',
    body:
      'The website may use cookies or analytics tools to support functionality and understand website traffic, depending on the technologies installed. You can manage cookies through your browser settings. The website or studio communications may link to third-party platforms, including WhatsApp and Instagram. Their own privacy policies and terms apply when you use those services.',
  },
  {
    title: 'Sharing and Protecting Information',
    body:
      'Information may be shared with relevant service providers, such as website hosting, booking, communication or payment providers, where necessary to operate the studio’s services. Information may also be disclosed where required by law. Reasonable measures should be taken to protect personal information against unauthorised access, loss or misuse. However, no online system can be guaranteed to be completely secure. Personal information should be retained only for as long as reasonably necessary for the purpose for which it was collected, including business records and legal obligations. The studio does not intend to sell clients’ personal information to third parties.',
  },
  {
    title: 'Your Privacy Choices',
    body:
      'Subject to applicable law, you may request access to, correction of or deletion of your personal information. You may also contact the studio about the use of your photographs or withdraw permission for future promotional use, subject to applicable limitations. For privacy-related requests, please use the contact details at the end of this page.',
  },
  {
    title: 'Children and Minors',
    body:
      'Tattoo appointments involving minors are subject to applicable law and the studio’s age and consent requirements. The studio will not proceed with a tattoo where doing so would be unlawful or contrary to its applicable policies.',
  },
  {
    title: 'Updates to This Policy',
    body:
      'This policy may be updated to reflect changes in the studio’s practices, website features or legal requirements. The latest version will be published on this page with an updated revision date.',
  },
];

const PrivacyView: React.FC = () => {
  return (
    <PageTransition>
      <section className="relative py-32 bg-gradient-to-br from-pastel-100 via-warm-100 to-accent-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-24 h-24 border-2 border-traditional-300 rounded-full opacity-30 float-animation" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-400 rounded-full opacity-20 float-animation" />
          <div className="absolute inset-0 bg-mandala-subtle opacity-20" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader
            title="Privacy Policy"
            subtitle="We respect your privacy and aim to handle your personal information responsibly, carefully and securely."
            accent="terms"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-traditional-200 bg-traditional-50 p-6 md:p-10">
            <div className="space-y-10 text-base leading-relaxed text-traditional-700 md:text-lg">
              <p>
                Inkbaba Tattoo House (“Inkbaba,” “the studio,” “we,” “our” or “us”) respects your privacy and aims to handle personal information responsibly. This policy explains how information may be collected, used, stored and shared when you visit the website, contact the studio or enquire about tattoo services.
              </p>

              {privacySections.map((section) => (
                <div key={section.title}>
                  <h2 className="mb-3 text-2xl font-heading text-traditional-900">{section.title}</h2>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-[1.5rem] border border-accent-200 bg-white p-6 md:p-8">
              <h3 className="mb-3 text-2xl font-heading text-traditional-900">Contact for Privacy Requests</h3>
              <div className="space-y-2 text-base md:text-lg text-traditional-700">
                <p>
                  Phone: <a href={`tel:${SITE_PHONE_DISPLAY.replace(/\s+/g, '')}`} className="text-accent-600 hover:underline">{SITE_PHONE_DISPLAY}</a>
                </p>
                <p>
                  Email: <a href={`mailto:${SITE_EMAIL}`} className="text-accent-600 hover:underline">{SITE_EMAIL}</a>
                </p>
                <p>
                  WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:underline">Chat with the studio</a>
                </p>
                <p className="mt-4">
                  You can also reach out through our <Link href="/contact" className="text-accent-600 hover:underline">contact page</Link> for any privacy-related request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default PrivacyView;
