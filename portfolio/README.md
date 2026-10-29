# Portfolio (Next.js)

Next.js App Router + TypeScript + Tailwind CSS 4 + Framer Motion + Three.js +
Lucide React, built as a static export (`out/`) for GitHub Pages.

Design: monochrome "tech-brutalist" — near-black page, off-white ink, hairline
borders, tall condensed display type (Antonio / Kanit) with small mono labels,
a full-screen menu and a giant stretched wordmark. The backdrop
(`components/three/Scene.tsx`) is a noise-warped 3D blob rendered at low
resolution and redrawn as Bayer-dithered white squares; it grows, drifts and
dims as the page scrolls. Scroll animations (masked headline lines, scrambling
labels, pixel thumbnails that resolve cell by cell, skill ticker) live in
`components/ui/Reveal.tsx`. TH/EN language toggle; interface copy lives in
`src/lib/strings.ts`.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000  (copies ../assets into public/ first)
npm run build   # static site in out/
npm run lint
```

## Structure

```
portfolio/
├── scripts/
│   └── sync-assets.mjs        # ../assets -> public/assets (before dev/build, gitignored)
├── public/
│   └── projects/<slug>/       # case-study media (moodboard, process, mockups)
└── src/
    ├── app/                   # layout.tsx, page.tsx, globals.css
    ├── data/
    │   └── portfolioData.ts   # ALL site content (TH/EN)
    ├── types/
    │   └── portfolio.ts       # content model: Profile, CaseStudy, Moodboard, Process, Mockup…
    ├── components/
    │   ├── sections/          # Navbar, Hero, About, Experience, Work, Certificates, Contact/Footer
    │   ├── three/             # Scene (3D backdrop), Scene3D (client-only loader)
    │   └── ui/                # Section, Reveal (scroll animations, PixelImage)
    └── lib/                   # helpers (locale, motion presets)
```

## Adding case-study media

Projects are a plain list; clicking a title expands its write-up in place.
Process / moodboard / mockup images appear there only once they have a `src`: put a file in `public/projects/<slug>/` and set
`src: "/projects/<slug>/file.jpg"`.
