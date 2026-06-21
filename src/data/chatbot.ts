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
  {
    id: 'season',
    question: 'When is the guest artist season?',
    answer:
      'Our upcoming guest season runs November through March each year. Book Mo Naga, Tassos, Giada, Pallada, Chakti, Satish, Manish, or Omkar from their artist pages on this site.',
  },
  {
    id: 'hours',
    question: 'What are your studio hours?',
    answer:
      'We are generally open daily during the Goa season, typically from late morning through evening. Message us on WhatsApp for today’s availability — hours can vary by artist schedule.',
  },
  {
    id: 'hygiene',
    question: 'Is the studio safe and hygienic?',
    answer:
      'Yes. We use sterile, single-use needles, medical-grade equipment, and strict hygiene protocols for every tattoo and piercing session.',
  },
  {
    id: 'cover-up',
    question: 'Can you cover up an old tattoo?',
    answer:
      'Often yes — cover-ups depend on the existing ink, size, and colours. Share a clear photo on WhatsApp and we will advise honestly on what is possible.',
  },
  {
    id: 'handpoke',
    question: 'Do you offer hand poke tattoos?',
    answer:
      'Yes. Mo Naga specialises in hand poke and tribal work rooted in Naga heritage. View his portfolio under Hand Poke on our Tattoo Services page.',
  },
  {
    id: 'design',
    question: 'Can I bring my own design?',
    answer:
      'Yes — bring references, sketches, or mood boards. Our artists can refine your idea or create something original that suits your placement and skin.',
  },
  {
    id: 'session-length',
    question: 'How long does a tattoo session take?',
    answer:
      'Small pieces may take 30–60 minutes. Medium work is often 2–4 hours. Large or detailed pieces may need multiple sessions — we plan this during consultation.',
  },
  {
    id: 'healing',
    question: 'How long does a tattoo take to heal?',
    answer:
      'Surface healing is usually 2–3 weeks; full healing can take 4–6 weeks. Follow our aftercare guide and avoid sun, swimming, and soaking while it heals.',
  },
  {
    id: 'age',
    question: 'Is there a minimum age for tattoos?',
    answer:
      'Clients must be 18+ with valid photo ID. We do not tattoo minors, even with parental consent, in line with responsible studio practice.',
  },
  {
    id: 'retreat',
    question: 'Do you run tattoo retreats?',
    answer:
      'Yes — Ink Baba hosts tattoo retreats in Goa combining custom work, healing rituals, and a spiritual creative experience. See our Tattoo Retreat page for details.',
  },
  {
    id: 'find-us',
    question: 'How do I find the studio in Arambol?',
    answer:
      'We are on Khalcha Wada, Arambol Market Beach Road — near Arambol beach. Open Google Maps and search “Ink Baba Tattoo House” for directions.',
  },
  {
    id: 'deposit',
    question: 'Do I need to pay a deposit to book?',
    answer:
      'For guest season bookings and larger custom pieces, a deposit may be required to hold your slot. We will confirm amount and payment method when you book.',
  },
  {
    id: 'piercing-aftercare',
    question: 'How do I care for a new piercing?',
    answer:
      'Keep the area clean, avoid touching with dirty hands, do not twist jewellery unnecessarily, and follow the aftercare sheet we provide. See our Piercing Care page for full guidance.',
  },
];

export const CHATBOT_WHATSAPP_CTA =
  'Need more help? Chat with our team on WhatsApp for a personal reply.';
