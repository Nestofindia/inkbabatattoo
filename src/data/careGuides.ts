export interface CareSection {
  title: string;
  subtitle: string;
  tips: readonly string[];
}

export interface CareGuide {
  id: 'tattoo' | 'piercing';
  heroTitle: string;
  heroSubtitle: string;
  before: CareSection;
  after: CareSection;
  importantNote: string;
}

export const TATTOO_CARE: CareGuide = {
  id: 'tattoo',
  heroTitle: 'Tattoo Care Guide',
  heroSubtitle:
    'Prepare your skin before your session and protect your new tattoo while it heals. Follow these steps for the best results.',
  before: {
    title: 'Before Your Tattoo',
    subtitle: 'A little preparation helps your session go smoothly and supports clean, even healing.',
    tips: [
      'Get a good night’s sleep and eat a proper meal before your appointment — low blood sugar can make you feel faint.',
      'Stay hydrated and avoid alcohol for at least 24 hours before your session.',
      'Wear comfortable clothing that gives easy access to the area being tattooed.',
      'Shower and arrive with clean skin — no heavy lotions, oils, or perfumes on the tattoo area.',
      'Bring valid ID if required and share any allergies, medications, or skin conditions with your artist.',
      'Avoid sunburn, waxing, or shaving the area right before your appointment unless your artist advises otherwise.',
      'Plan your day so you can rest afterward — rushing or long travel immediately after can stress fresh work.',
    ],
  },
  after: {
    title: 'After Your Tattoo',
    subtitle: 'Healing usually takes 2–4 weeks. Treat your tattoo gently and keep it clean throughout.',
    tips: [
      'Leave the bandage on for the time your artist recommends, then wash gently with lukewarm water and mild, fragrance-free soap.',
      'Pat dry with a clean paper towel — do not rub. Apply a thin layer of recommended aftercare ointment or lotion.',
      'Wash 2–3 times daily and moisturize lightly as directed — avoid over-applying product.',
      'Do not pick, scratch, or peel flaking skin. Let scabs and flakes fall off naturally.',
      'Avoid swimming pools, hot tubs, saunas, and direct sun on the tattoo until fully healed.',
      'Skip heavy gym sessions and activities that cause excessive sweating or friction on the area for the first week.',
      'Keep bedding and clothing clean. Loose, breathable fabrics help reduce irritation.',
      'If you notice unusual redness, swelling, heat, or discharge, contact us or a medical professional promptly.',
    ],
  },
  importantNote:
    'Every body heals differently. Your artist will give you personalized aftercare at the studio — follow their instructions first.',
};

export const PIERCING_CARE: CareGuide = {
  id: 'piercing',
  heroTitle: 'Piercing Care Guide',
  heroSubtitle:
    'Simple before and after steps keep your piercing clean, comfortable, and healing well from day one.',
  before: {
    title: 'Before Your Piercing',
    subtitle: 'Come prepared so your piercer can work safely and you heal with fewer complications.',
    tips: [
      'Eat well and stay hydrated before your appointment to reduce dizziness.',
      'Avoid alcohol and blood-thinning medications (unless prescribed) for 24 hours beforehand — ask your doctor if unsure.',
      'Arrive with clean skin and minimal makeup, lotion, or product near the piercing site.',
      'Tell your piercer about allergies, medical conditions, or previous healing issues.',
      'Choose jewellery you are comfortable with — we use sterile, implant-grade materials suited to your piercing.',
      'Plan for aftercare supplies: saline solution or sterile wound wash as recommended by your piercer.',
      'Avoid scheduling right before travel, festivals, or activities where the area may get bumped or dirty.',
    ],
  },
  after: {
    title: 'After Your Piercing',
    subtitle: 'Healing times vary by piercing type. Consistent, gentle care matters more than rushing the process.',
    tips: [
      'Wash your hands before touching the piercing or jewellery.',
      'Clean twice daily with sterile saline solution or as directed — no harsh alcohol, hydrogen peroxide, or strong soaps on the site.',
      'Do not twist, turn, or play with the jewellery during healing unless your piercer instructs you to.',
      'Keep hair, phones, helmets, and tight clothing from rubbing or pressing on the piercing.',
      'Avoid swimming in pools, rivers, or the sea until fully healed.',
      'Sleep on the opposite side when possible and use clean pillowcases.',
      'Watch for normal healing signs (slight tenderness, dry crust) versus problems (spreading redness, pus, severe pain).',
      'Do not change jewellery until your piercer confirms the piercing is ready — early changes can cause irritation or closure.',
    ],
  },
  importantNote:
    'Healing times range from a few weeks to several months depending on placement. We are happy to check your piercing during a follow-up visit.',
};
