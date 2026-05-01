# Wisdomahead

**Sovereign AI Advisory for Media Enterprises**

A premium digital presence for Wisdomahead — an advisory firm that architects secure, private AI systems for media organizations. Led by D. D. Purkayastha, former Managing Director & CEO of ABP Group.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** (build tool)
- **Tailwind CSS 3.4** (styling)
- **shadcn/ui** (component primitives)
- **GSAP** (animations & scroll interactions)
- **React Router 7** (client-side routing)

## Project Structure

```
src/
  components/          # Reusable UI components & animation components
  components/ui/       # shadcn/ui primitives
  pages/               # Top-level page components
  sections/            # Page sections organized by route
    home/              # Home page sections
    about/             # About page sections
    knowledge-hub/     # Knowledge Hub page sections
  hooks/               # Custom React hooks
  lib/                 # Utilities
```

## Pages

- **Home (`/`)** — Hero, What We Do, Core Capabilities, Founder Profile, Services, Marquee, Wisdom Difference, Contact
- **About (`/about`)** — Firm Story, Methodology, Leadership Philosophy, Contact CTA
- **Knowledge Hub (`/knowledge-hub`)** — Tabbed library of Strategic Insights, Transformation Cases, and Advisory Frameworks

## Local Development

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

## Build

```bash
npm run build
```

Static assets are output to the `dist/` directory.

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Git Integration

1. Push this repository to GitHub
2. Import the project in the [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel will auto-detect Vite and use the correct build settings
4. Deploy

The included `vercel.json` handles SPA routing so all routes resolve correctly.

## Environment Notes

- Uses **Node.js 20**
- `vite.config.ts` is configured with `base: '/'` for proper asset resolution on Vercel
- `vercel.json` includes security headers and SPA rewrite rules
