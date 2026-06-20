export interface TermItem {
  id: string;
  number: number;
  title: string;
  content: string;
}

export const TERMS_ITEMS: TermItem[] = [
  {
    id: 'appointments',
    number: 1,
    title: 'Appointments & Bookings',
    content:
      'All appointments are confirmed only after receiving the required booking deposit. Clients are requested to arrive on time for their scheduled session. Delays may affect the session duration or require rescheduling depending on artist availability.',
  },
  {
    id: 'deposit',
    number: 2,
    title: 'Deposit Policy',
    content:
      'Booking deposits are non-refundable and are used to secure the artist’s time and preparation. Deposits may be adjusted toward the final tattoo cost unless otherwise stated.',
  },
  {
    id: 'rescheduling',
    number: 3,
    title: 'Rescheduling Policy',
    content:
      'Appointments may be rescheduled with prior notice. Last-minute cancellations or repeated rescheduling may result in loss of deposit and require a new booking payment.',
  },
  {
    id: 'no-show',
    number: 4,
    title: 'No-Show Policy',
    content:
      'Failure to attend an appointment without prior notice will be considered a no-show, and the booking deposit will be forfeited.',
  },
  {
    id: 'age',
    number: 5,
    title: 'Minimum Age Requirement',
    content:
      'Clients must meet the legal age requirement for tattooing. Valid government-issued identification may be required before the procedure begins.',
  },
  {
    id: 'health',
    number: 6,
    title: 'Health Disclosure',
    content:
      'Clients must disclose any medical conditions, allergies, skin conditions, pregnancy, medications, or health concerns before the session. Failure to provide accurate information may affect the tattoo process and healing.',
  },
  {
    id: 'alcohol',
    number: 7,
    title: 'Alcohol & Drug Policy',
    content:
      'Clients under the influence of alcohol, drugs, or any intoxicating substances will not be tattooed under any circumstances.',
  },
  {
    id: 'design',
    number: 8,
    title: 'Design Approval',
    content:
      'Clients are responsible for carefully reviewing and approving the tattoo design, spelling, placement, and sizing before tattooing begins. Once approved and started, modifications may not be possible.',
  },
  {
    id: 'artwork',
    number: 9,
    title: 'Custom Artwork',
    content:
      'All tattoo designs created by Inkbaba artists are original artwork intended for the client. Unauthorized copying, reproduction, or resale of custom artwork is prohibited.',
  },
  {
    id: 'pricing',
    number: 10,
    title: 'Tattoo Pricing',
    content:
      'Pricing depends on the design complexity, placement, size, detail, and session duration. Final pricing will be discussed during consultation or before the session starts.',
  },
  {
    id: 'payment',
    number: 11,
    title: 'Payment Terms',
    content:
      'Full or partial payment must be completed as agreed before leaving the studio. Accepted payment methods may include cash, UPI, cards, or online transfers.',
  },
  {
    id: 'duration',
    number: 12,
    title: 'Session Duration',
    content:
      'Tattoo session timings may vary depending on the artwork and client comfort. Breaks may be taken during long sessions if required.',
  },
  {
    id: 'pain',
    number: 13,
    title: 'Pain & Skin Reactions',
    content:
      'Tattooing may involve discomfort, redness, swelling, or temporary irritation. Healing experiences differ based on skin type, placement, and aftercare.',
  },
  {
    id: 'hygiene',
    number: 14,
    title: 'Hygiene & Safety',
    content:
      'We follow strict hygiene practices using sterilized equipment, disposable needles, gloves, and professional-grade products to maintain client safety.',
  },
  {
    id: 'aftercare',
    number: 15,
    title: 'Aftercare Responsibility',
    content:
      'Clients are responsible for following all aftercare instructions provided by the studio. Improper care may affect healing quality, ink retention, or overall tattoo appearance.',
  },
  {
    id: 'healing',
    number: 16,
    title: 'Healing Variations',
    content:
      'Tattoo healing differs for every individual. Minor fading, peeling, scabbing, or uneven healing may naturally occur during recovery.',
  },
  {
    id: 'touch-up',
    number: 17,
    title: 'Touch-Up Policy',
    content:
      'Touch-ups may be provided within a specified period depending on the tattoo style and healing condition. Free touch-ups do not apply to tattoos damaged by improper aftercare.',
  },
  {
    id: 'cover-up',
    number: 18,
    title: 'Cover-Up Tattoos',
    content:
      'Cover-up tattoo results depend on the size, darkness, age, and condition of the existing tattoo. Full concealment cannot always be guaranteed.',
  },
  {
    id: 'photography',
    number: 19,
    title: 'Photography & Media Consent',
    content:
      'The studio may photograph completed tattoos for portfolios, marketing, website, or social media use unless the client requests privacy beforehand.',
  },
  {
    id: 'conduct',
    number: 20,
    title: 'Client Conduct',
    content:
      'Respectful behavior toward artists and staff is expected at all times. The studio reserves the right to refuse service in cases of abusive, inappropriate, or disruptive conduct.',
  },
  {
    id: 'belongings',
    number: 21,
    title: 'Personal Belongings',
    content:
      'Clients are responsible for their own belongings. Inkbaba Tattoo Studio is not liable for lost, stolen, or damaged personal items.',
  },
  {
    id: 'companions',
    number: 22,
    title: 'Companion Policy',
    content:
      'Companions or visitors may be restricted during sessions depending on studio space, safety, or artist preference.',
  },
  {
    id: 'refusal',
    number: 23,
    title: 'Service Refusal Rights',
    content:
      'The studio reserves the right to refuse or stop a tattoo session if it may compromise safety, hygiene, professionalism, or the well-being of the client or artist.',
  },
  {
    id: 'allergies',
    number: 24,
    title: 'Allergic Reactions & Risks',
    content:
      'Although professional products are used, clients acknowledge there may be risks of allergic reactions, infections, or unforeseen skin responses associated with tattooing.',
  },
  {
    id: 'acceptance',
    number: 25,
    title: 'Acceptance of Terms',
    content:
      'By booking an appointment or receiving a tattoo at Inkbaba Tattoo Studio, the client confirms that they have read, understood, and agreed to all terms, conditions, risks, and aftercare responsibilities related to tattooing.',
  },
];
