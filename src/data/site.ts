export const SITE = {
  name: 'InfoNavigator',
  domain: 'infonavigator.org',
  url: 'https://infonavigator.org',
  tagline: 'The independent, data-driven buying guide — we read thousands of reviews so you don\u2019t have to.',
};

export const NAV = [
  { label: '3D Printers', href: '/3d-printers/' },
  { label: 'Best Picks', href: '/3d-printers/best-3d-printer/' },
  { label: 'Comparisons', href: '/3d-printers/bambu-lab-p2s-vs-creality-k2-pro/' },
  { label: 'Deals', href: '/deals/' },
  { label: 'How We Rate', href: '/how-we-rate/' },
];

export interface Vertical {
  slug: string;
  label: string;
  title: string;
  description: string;
  intro: string;
  url: string;
  productCount: number;
  status: 'live' | 'coming-soon';
}

export const VERTICALS: Vertical[] = [
  {
    slug: '3d-printers',
    label: '3D Printers',
    title: 'Best 3D Printer (2026): Data-Driven Rankings & Comparisons',
    description:
      'The best 3D printers ranked by data — Bambu Lab, Creality, Anycubic, Elegoo, Prusa and more. Real prices, verified specs, honest verdicts.',
    intro:
      'Buying a 3D printer in 2026 means choosing between ecosystems, not just machines. We scored every serious contender on print quality, reliability, value, and what thousands of owners actually say — then published the math. No sponsored rankings.',
    url: '/3d-printers/',
    productCount: 8,
    status: 'live',
  },
  {
    slug: 'robot-vacuums',
    label: 'Robot Vacuums',
    title: 'Best Robot Vacuum (2026)',
    description: 'Data-driven robot vacuum rankings. Coming soon.',
    intro: 'Under evaluation as our next vertical.',
    url: '/robot-vacuums/',
    productCount: 0,
    status: 'coming-soon',
  },
];
