# FOXTANG Private Holdings

A premium corporate website for FOXTANG Private Holdings — a discreet, multi-generational private holding house. Built with a quiet luxury design language: dark palette, gold accents, cinematic motion.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion |
| Routing | React Router v7 (HashRouter) |
| Icons | Lucide React |
| i18n | Custom React Context (EN / 中文) |

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Project Structure

```
src/
├── main.tsx                     # Entry point
├── App.tsx                      # Router + layout shell
├── index.css                    # Tailwind + custom keyframes
├── components/
│   ├── hero/
│   │   ├── VideoHero.tsx        # Homepage — video background + overlay
│   │   ├── CapabilitiesHero.tsx # CSS geometric grid + floating nodes
│   │   ├── AboutHero.tsx        # Concentric rings + gold badge
│   │   └── PortfolioHero.tsx    # Diagonal stripes + geometric stack
│   ├── layout/
│   │   ├── Header.tsx           # Sticky nav with scroll blur
│   │   ├── Footer.tsx           # Minimal footer
│   │   └── MobileMenu.tsx       # Fullscreen slide-in overlay
│   ├── sections/
│   │   ├── StrategyPanel.tsx    # Full-width strategy display
│   │   ├── MarketBanner.tsx     # Market insight banner
│   │   └── BusinessCards.tsx    # 3-column card grid
│   └── ui/
│       ├── Button.tsx           # Brand button variants
│       ├── FeatureCard.tsx      # Icon card with hover glow
│       ├── VisualCard.tsx       # Image-forward card
│       ├── StrategyCard.tsx     # Strategy detail card
│       ├── SectionTitle.tsx     # Section heading with accent bar
│       ├── ScrollReveal.tsx     # Intersection Observer wrapper
│       └── PageBackground.tsx   # Ambient orb background
├── pages/
│   ├── HomePage.tsx             # Video hero → visual cards → strategy
│   ├── AboutPage.tsx            # Mission quote → values → standards
│   ├── CapabilitiesPage.tsx     # Service cards → stats → approach
│   └── PortfolioPage.tsx        # Pillars → allocation → domains
├── hooks/
│   └── useScrollReveal.ts       # Scroll-triggered animation hook
├── i18n/
│   ├── context.tsx              # I18n provider + language switcher
│   └── translations.ts          # EN / ZH translation dictionaries
└── types/
    └── index.ts                 # Shared TypeScript types
```

## Pages

### Home
Video hero background with private jet footage, cinematic overlay, and bold typography. Scrolling sections reveal visual cards, market insights, strategy panels, and business domain cards — all with staggered fade-in animations.

### Capabilities
Geometric grid-line hero with floating data nodes. Five service categories presented as icon-forward cards with hover glow effects. A stats banner and philosophy panel close the page.

### About
Concentric-ring hero with gold badge. Large-type mission quote anchors the page, followed by working-style cards, values grid, and a standards banner — vertically paced for deliberate reading.

### Portfolio
Architectural diagonal-stripe hero with key metrics. Three investment pillars lead into asset categories, domain cards, and a visual allocation bar chart — data-rich but restrained.

## Design Principles

- **Quiet luxury** — dark charcoal-blue `#0a0f1a` surface, brand gold `#9e8448` accents
- **Restrained motion** — gentle scroll reveals via Intersection Observer, not gratuitous
- **Typography-first** — Inter font at deliberate weights (400–700), generous whitespace
- **CSS-only visuals** — all hero backgrounds generated with gradients and SVG patterns, no external asset dependency
- **Responsive** — mobile-first breakpoints, fullscreen mobile menu, fluid grids

## i18n

Language toggle (EN / ZH) in the header. Preference persists to `localStorage`. Add or edit translations in `src/i18n/translations.ts`.

```ts
// Usage in components
const { t } = useI18n();
<h1>{t('heroTitle')}</h1>
```

## Deployment

Static output in `dist/`. Deploy to any static host:

```bash
npm run build
# Deploy dist/ to: Vercel / Netlify / Cloudflare Pages / S3 + CloudFront
```

## License

Private — all rights reserved.
