/* ============================================================
   MERGE this into the existing tailwind.config.ts -> theme.extend
   This is a snippet, not a replacement file.
   ============================================================ */

export const aviDigmiThemeExtend = {
  fontFamily: {
    sans: ['Assistant', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  },
  colors: {
    // extra brand tokens beyond the shadcn defaults
    gold: 'hsl(var(--gold))',
    amber: 'hsl(var(--amber))',
    whatsapp: 'hsl(var(--whatsapp))',
  },
  backgroundImage: {
    'gradient-brand': 'var(--gradient-brand)',
    'gradient-hero': 'var(--gradient-hero)',
    'gradient-mint': 'var(--gradient-mint)',
  },
  boxShadow: {
    card: 'var(--shadow-card)',
    lift: 'var(--shadow-lift)',
    glow: 'var(--shadow-glow)',
  },
  keyframes: {
    'fade-up': {
      '0%': { opacity: '0', transform: 'translateY(18px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    float: {
      '0%,100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-10px)' },
    },
  },
  animation: {
    'fade-up': 'fade-up 0.6s cubic-bezier(0.4,0,0.2,1) both',
    'fade-in': 'fade-in 0.5s ease-out both',
    float: 'float 6s ease-in-out infinite',
  },
} as const;
