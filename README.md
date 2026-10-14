# Maheswari Engineering Works — Website

A React + TypeScript (Vite) site built from the company's business profile
brochure. Red / white / navy industrial theme, with a hazard-stripe motif
(echoing the brand's own diagonal red/white mark) used as the site's
signature element.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site into `dist/` — upload that folder's contents to
any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.) to publish
`www.maheswariengineering.com`.

## Project structure

```
src/
  components/     one component per section (Hero, Services, Projects, ...)
  data/content.ts all brochure content — edit this file to update copy,
                   project lists, turnover figures, clients, etc.
  index.css       design tokens (colors, type) + shared utility classes
  styles/sections.css   layout & styling for each section
```

## Notes

- No photos are bundled — sections use typographic/graphic treatments
  instead. Drop images into `public/` and reference them in the
  components (e.g. `Hero.tsx`, `Services.tsx`) if you'd like to add the
  brochure's site photos.
- Update contact details, project rows and turnover figures in
  `src/data/content.ts`.
- Fonts (Oswald, IBM Plex Sans, IBM Plex Mono) load from Google Fonts —
  keep `index.html`'s `<link>` tags or self-host if you need to work
  offline.

## Scroll Animation Update

This version adds a lightweight industrial motion system without adding an animation dependency.

### Added
- Scroll-linked floating crane, truck, excavator, steel beam, blueprint and engineering graphics.
- Hero section industrial crane + truck scene.
- IntersectionObserver reveal animations for sections, cards and project/service elements.
- Responsive mobile behavior.
- `prefers-reduced-motion` support for accessibility.

### New files
- `src/components/EngineeringMotion.tsx`
- `src/components/ScrollEffects.tsx`

### Main changes
- `src/App.tsx` mounts the motion and scroll-effect layers.
- `src/components/Hero.tsx` contains the hero industrial scene.
- `src/styles/sections.css` contains the animation and responsive styling.

No GSAP or other animation package is required.
