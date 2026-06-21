export interface ChatBotFaq {
  id: string;
  question: string;
  answer: string;
}

export const CHATBOT_WELCOME =
  'Namaste! Welcome to Ink Baba Tattoo House. Choose a question below and I will help you instantly.';

export const CHATBOT_FAQ: ChatBotFaq[] = [
  {
    id: 'book',
    question: 'How do I book an appointment?',
    answer:
      'Tap the green WhatsApp button below or call +91 77190 99888. Share your idea, preferred date, and placement — we offer free consultations with no obligation.',
  },
  {
    id: 'location',
    question: 'Where is the studio located?',
    answer:
      'Ink Baba Tattoo House is in Khalcha Wada, Arambol Market Beach Road, Arambol, Goa 403524. Walk-ins welcome when artists are available.',
  },
  {
    id: 'styles',
    question: 'What tattoo styles do you offer?',
    answer:
      'Fine line, realism, traditional, geometric, spiritual, mandala, blackwork, minimal, cover-ups, and fully custom designs crafted from your story.',
  },
  {
    id: 'consultation',
    question: 'Is consultation free?',
    answer:
      'Yes — consultations are completely free. We discuss your idea, placement, size, and budget before you decide to book.',
  },
  {
    id: 'pricing',
    question: 'How much does a tattoo cost?',
    answer:
      'Pricing depends on size, detail, placement, and artist. Small pieces start from a modest minimum; larger custom work is quoted after consultation.',
  },
  {
    id: 'piercing',
    question: 'Do you do piercing too?',
    answer:
      'Yes. We offer professional body piercing with sterile equipment and implant-grade jewellery. Aftercare guidance is included.',
  },
  {
    id: 'aftercare',
    question: 'How do I care for a new tattoo?',
    answer:
      'Keep it clean, moisturize lightly, avoid sun and swimming while healing, and do not pick or scratch. We give full aftercare instructions at the studio.',
  },
  {
    id: 'walk-in',
    question: 'Can I walk in without booking?',
    answer:
      'Walk-ins are welcome when artists have availability. Booking ahead is recommended during peak season in Goa.',
  },
  {
    id: 'payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, UPI, cards, and other common payment methods.',
  },
  {
    id: 'first-time',
    question: 'Is this my first tattoo — will you guide me?',
    answer:
      'Absolutely. We guide first-time clients through everything — design, pain expectations, session length, and aftercare — at a calm, unhurried pace.',
  },
];

export const CHATBOT_WHATSAPP_CTA =
  'Need more help? Chat with our team on WhatsApp for a personal reply.';
