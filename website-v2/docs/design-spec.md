# OLC Method Website v2 — Design Spec

## Stack
- **Framework:** Astro 4.x, static output, deployed to Vercel via `@astrojs/vercel` adapter
- **Styling:** Tailwind CSS 3.x with custom theme extending brand tokens
- **Sitemap:** Auto-generated via `@astrojs/sitemap` at build time, pointing to `https://olcmethod.com`

## Typography
- **Display / headings:** Cormorant (serif, Google Fonts) — editorial, premium feel
- **Body / UI:** DM Sans (sans-serif, Google Fonts) — clean, readable at small sizes
- No Inter, Roboto, Arial, or generic system sans as primary faces

## Color Palette
- `sage` — `#4f6352` — primary brand green, CTAs, accents
- `ink` — `#141917` — near-black for body text and dark sections
- `cream` — `#f6f4ef` — warm off-white for backgrounds

## Forms
- Handled via **Formspree** (zero backend, free tier covers lead capture volume at launch)
- No server functions needed — keeps the site fully static

## SEO Strategy
- Sitemap auto-generated at build via `@astrojs/sitemap`
- Canonical site URL set to `https://olcmethod.com` in `astro.config.mjs`
- Each page defines `<title>` and `<meta description>` via a shared `<Head>` component (Agent 2)
- TypeScript strict mode on for type-safe frontmatter and props

## 9-Agent Build Plan
- **Agent 1 (this):** Scaffold — config files only (`package.json`, `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`)
- **Agent 2:** Base layout — `Layout.astro`, Head, Nav, Footer, font imports
- **Agent 3:** Homepage (`index.astro`) — hero, problem/solution, value prop sections
- **Agent 4:** Services / How It Works page
- **Agent 5:** About / Story page
- **Agent 6:** Case Studies / Social Proof page
- **Agent 7:** Contact / Lead Capture page (Formspree integration)
- **Agent 8:** Global styles polish, motion, responsive QA
- **Agent 9:** Deploy config, Vercel settings, final smoke test
