# Aryaman Panigrahi — Portfolio

A production-ready personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Dark mode by default, optional light mode toggle, fully responsive, and optimized for SEO/Lighthouse.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react (icons)
- next/font (self-hosted Google Fonts — Inter + JetBrains Mono)
- next/og (dynamic Open Graph image generation)

No other runtime dependencies — kept deliberately minimal.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          Root layout, metadata, fonts, theme init script
  page.tsx             Assembles all sections
  globals.css          Tailwind layers + base styles
  robots.ts            Dynamic robots.txt
  sitemap.ts            Dynamic sitemap.xml
  opengraph-image.tsx  Dynamic OG image (renders as PNG at build time)
  icon.svg             Favicon (auto-detected by Next.js)
components/            One component per section (Hero, About, Projects, ...)
config/site.ts         ALL editable content lives here — single source of truth
public/resume.pdf       Resume file served at /resume.pdf
```

## Editing Content

Everything — your name, bio, projects, skills, experience, links, and the
resume file path — lives in **`config/site.ts`**. Components read from this
file; you should rarely need to touch component code to update content.

## Updating Your Resume

Every "View Resume" / "Download Resume" button reads from a single constant:

```ts
// config/site.ts
resumePath: "/resume.pdf",
```

To swap your resume:

1. Replace `public/resume.pdf` with your new file (keep the same filename), **or**
2. Rename your new file differently and update `resumePath` in `config/site.ts` to match.

No component needs to change either way.

## Before You Deploy

1. **Domain**: update `siteUrl` in `config/site.ts` to your real domain (used for canonical URL, OG tags, and sitemap).
2. **LinkedIn**: add your URL to `links.linkedin` in `config/site.ts` — it will automatically appear in the Contact section and footer once set.
3. **Resume**: confirm `public/resume.pdf` is your latest version.
4. Run a production build locally to catch any issues before deploying:

```bash
npm run build
npm run start
```

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo directly at [vercel.com/new](https://vercel.com/new) — zero configuration needed, Next.js is auto-detected.

## Accessibility & Performance Notes

- Semantic HTML landmarks (`header`, `nav`, `main`, `section`, `footer`) throughout.
- Skip-to-content link for keyboard users.
- Visible focus states (`:focus-visible`) on all interactive elements.
- Respects `prefers-reduced-motion`.
- Theme preference persisted in `localStorage`, applied before hydration to avoid flash-of-incorrect-theme.
- No layout-shifting animations; all motion is subtle (fade-in on load, hover states).
