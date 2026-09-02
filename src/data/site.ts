/**
 * Site-wide content extracted 1:1 from the live avidigmi.com (WordPress/Elementor).
 * Single source of truth for nav, services, projects, testimonials and contact.
 */

export const site = {
  name: 'אבי דיגמי',
  tagline: 'אתרים ממירים',
  legalName: 'אבי דיגמי MediaVers בניית אתרים',
  description: 'סוכנות מובילה לבניית אתרים ודפי נחיתה',
  url: 'https://avidigmi.com',
  locale: 'he_IL',
  email: 'socialmediavers@gmail.com',
  /** business phone as published in the site's terms & privacy pages */
  phone: '055-6696675',
  phoneE164: '+972556696675',
  whatsapp: '972556696675',
  whatsappMessage: 'היי אבי, הגעתי מהאתר ואשמח לשמוע פרטים על בניית אתר',
  logo: '/img/logo.png',
  social: {
    facebook: 'https://www.facebook.com/share/1BcVWhkPEC/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/avidigmi.official',
    linkedin: 'https://www.linkedin.com/in/avidigmi2233',
  },
} as const;

/* ---------------- navigation ---------------- */

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: 'דף הבית', href: '/' },
  { label: 'בניית דף נחיתה', href: '/landing-page' },
  { label: 'בניית אתרים', href: '/website-construction' },
  { label: 'קידום אתרים אורגני', href: '/seo' },
  { label: 'מעניין לקרוא', href: '/blog' },
  { label: 'תיק עבודות', href: '/projects' },
  { label: 'סיפורי הצלחה', href: '/success-stories' },
  { label: 'קצת עלינו', href: '/about' },
  { label: 'צור קשר', href: '/contact' },
];

export const footerNav = {
  navigation: [
    { label: 'בית', href: '/' },
    { label: 'בלוג', href: '/blog' },
    { label: 'דף נחיתה לעסק', href: '/landing-page' },
    { label: 'בניית אתרים', href: '/website-construction' },
    { label: 'בניית אתרים מקצועיים', href: '/professional-websites' },
    { label: 'בניית אתר חנות', href: '/online-store' },
    { label: 'שיווק דיגיטלי', href: '/digital-marketing' },
  ],
  more: [
    { label: 'הצהרת נגישות', href: '/accessibility' },
    { label: 'מדיניות פרטיות', href: '/privacy' },
    { label: 'תקנון האתר', href: '/regulations' },
  ],
  content: [
    { label: 'תיק עבודות', href: '/projects' },
    { label: 'סיפורי הצלחה', href: '/success-stories' },
    { label: 'בניית דף נחיתה', href: '/landing-page' },
    { label: 'מעניין לקרוא', href: '/blog' },
  ],
} as const;

/* ---------------- hero ---------------- */

export const hero = {
  title: 'בניית אתרים שעובדים מהיום הראשון',
  subtitle:
    'חקר שוק, ניתוח מתחרים וניסיון שיווקי עשיר - זו הדרך שלי לייצר עבורכם אתר שלא רק מביא תוצאות, אלא גם מייצר לכם נוכחות דיגיטלית מנצחת',
  primaryCta: { label: 'לשיחת ייעוץ בחינם', href: '/contact' },
  secondaryCta: { label: 'לצפייה בעבודות', href: '/projects' },
} as const;

/* ---------------- success stories (numbers section) ---------------- */

export type Testimonial = {
  name: string;
  kind: string;
  result: string;
  period: string;
  logo: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'איילה לי',
    kind: 'דף נחיתה - משפך מכירת מוצר',
    result: '12,500 ש״ח',
    period: 'חודש אחד מרגע ההשקה',
    logo: '/img/logos/ayala-lee.svg',
  },
  {
    name: 'מורן ליברמן',
    kind: 'דף נחיתה - משפך וובינר',
    result: '65,800 ש״ח',
    period: 'חודש אחד מרגע ההשקה',
    logo: '/img/logos/moran-liberman.svg',
  },
  {
    name: 'מתן ניסטור',
    kind: 'אתר תדמית ומכירות',
    result: '1161 לידים',
    period: '48 חודשים מרגע ההשקה',
    logo: '/img/logos/matan-nistor.svg',
  },
];

/* ---------------- featured projects ---------------- */

export type Project = {
  title: string;
  brand: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  href: string;
};

export const featuredProjects: Project[] = [
  {
    title: 'אתר תדמית מערכות חכמות',
    brand: 'TaskManager',
    description:
      'עבור Task Manager, מערכת ניהול משימות חכמה, בנינו אתר תדמית מודרני שמעביר תחושת חדשנות, סדר ושליטה.',
    image: '/img/projects/taskmanager.webp',
    alt: 'תמונת אווירה - אתר תדמית TaskManager',
    cta: 'לצפייה בפרויקט - מותג TaskManager',
    href: '/projects',
  },
  {
    title: 'אתר תדמית ומכירות יועץ עסקי',
    brand: 'Dominic',
    description:
      'עבור Dominic, יועץ עסקי ואסטרטגי בעל ניסיון בינלאומי, בנינו אתר תדמית שמדגיש מקצועיות, סמכותיות ואמון.',
    image: '/img/projects/dominic.webp',
    alt: 'תמונת אווירה - אתר תדמית ליועץ עסקי',
    cta: 'לצפייה בפרויקט - מותג Dominic',
    href: '/projects',
  },
  {
    title: 'אתר חנות מותג שעוני יוקרה',
    brand: 'Monarch',
    description:
      'עבור Monarch Watches, מותג לשעוני יוקרה, פיתחנו חנות אונליין אלגנטית שמדגישה איכות, דיוק ואמינות.',
    image: '/img/projects/monarch.webp',
    alt: 'תמונת אווירה - אתר חנות שעוני יוקרה',
    cta: 'לצפייה בפרויקט - מותג Monarch',
    href: '/projects',
  },
];

/* ---------------- the three website types ---------------- */

export type SiteType = {
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  cta: string;
  href: string;
};

export const siteTypes: SiteType[] = [
  {
    title: 'בניית אתרי תדמית',
    description:
      'אתר תדמית הוא כרטיס הביקור הדיגיטלי שלכם. הוא מספר את סיפור העסק, משדר מקצועיות ומושך את תשומת הלב של הלקוחות הנכונים.',
    icon: '/img/icons/type-brand.webp',
    image: '/img/types/brand.webp',
    alt: 'בניית אתר תדמית - תמונת אווירה',
    cta: 'עוד על אתר תדמית',
    href: '/website-construction',
  },
  {
    title: 'בניית אתרי שירות',
    description:
      'הפשטות בשירות – האתר שעושה את זה קל ללקוחות שלכם. אתר שירות יעיל הופך את חוויית הלקוח לחלקה ואינטואיטיבית.',
    icon: '/img/icons/type-service.webp',
    image: '/img/types/service.webp',
    alt: 'בניית אתר שירות - תמונת אווירה',
    cta: 'עוד על אתר שירות',
    href: '/website-construction',
  },
  {
    title: 'בניית אתרי מכירות',
    description:
      'חנות אונליין שעובדת 24/7 ומגדילה הכנסות. אתר מכירות מקצועי הוא הרבה יותר מסל קניות וירטואלי — הוא כלי שיווקי חזק שממיר.',
    icon: '/img/icons/type-sales.webp',
    image: '/img/types/sales.webp',
    alt: 'בניית אתר מכירות - תמונת אווירה',
    cta: 'עוד על אתר מכירות',
    href: '/online-store',
  },
];

/* ---------------- services grid ---------------- */

export type Service = { title: string; image: string; href: string };

export const services: Service[] = [
  { title: 'בניית אתר אינטרנט', image: '/img/services/website.webp', href: '/website-construction' },
  { title: 'בניית אתר תדמית', image: '/img/services/brand.webp', href: '/website-construction' },
  { title: 'בניית חנויות וירטואליות', image: '/img/services/store.webp', href: '/online-store' },
  { title: 'קידום אורגני', image: '/img/services/seo.webp', href: '/seo' },
  { title: 'שיווק דיגיטלי', image: '/img/services/marketing.webp', href: '/digital-marketing' },
  { title: 'בניית דפי נחיתה', image: '/img/services/landing.webp', href: '/landing-page' },
];

/* ---------------- landing-page value props ---------------- */

export const landingPillars = [
  { title: 'חקר שוק ומתחרים מעמיק' },
  { title: 'עיצוב חריג ויוצא דופן' },
  { title: 'חיבור הכלים המתאימים וחפיפה' },
] as const;

/* ---------------- contact form options ---------------- */

export const contactSubjects = [
  'דף נחיתה',
  'בניית אתר',
  'קידום אתרים',
  'שירות לקוחות',
  'אחר',
] as const;
