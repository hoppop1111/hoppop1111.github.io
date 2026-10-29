# Portfolio (Next.js)

Next.js App Router + TypeScript + Tailwind CSS 4 + Framer Motion + Three.js
(@react-three/fiber) + Lucide React, built as a static export (`out/`) for GitHub Pages.

Design: dark, modern, glass cards over a full-screen 3D backdrop
(`components/three/Scene.tsx`) — a wireframe icosahedron, an orbiting torus
knot and a linked point "network" that turn, drift and change colour as the
page scrolls. Scroll animations (word-by-word headings, staggered reveals,
self-drawing timeline, tilting project cards, skill marquee) live in
`components/ui/Reveal.tsx`. Dark by default with a light theme toggle (saved in
localStorage) and a TH/EN language toggle. Interface copy lives in
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
    │   └── ui/                # Section, Reveal (scroll animations), ThemeToggle
    └── lib/                   # helpers (locale, motion presets)
```

## Adding case-study media

Projects are a plain list; clicking a title expands its write-up in place.
Process / moodboard / mockup images appear there only once they have a `src`: put a file in `public/projects/<slug>/` and set
`src: "/projects/<slug>/file.jpg"`.
