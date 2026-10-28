# Portfolio (Next.js)

Next.js App Router + TypeScript + Tailwind CSS 4 + Framer Motion + Lucide React,
built as a static export (`out/`) for GitHub Pages.

Design: light/dark bento layout (theme follows the system, toggle saved in
localStorage) with a duck-yellow accent, TH/EN language toggle.

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
    │   ├── sections/          # Navbar, Hero, About, Experience, Work (+ ProjectDrawer),
    │   │                      # Certificates, Contact/Footer
    │   └── ui/                # Reveal, ThemeToggle, ProjectCover, brand/contact icons
    └── lib/                   # helpers (locale, motion presets)
```

## Adding case-study media

Projects without a `cover.src` get a tinted cover with their category icon.
Moodboard / mockup / process images are shown in the project drawer only once
they have a `src`: put a file in `public/projects/<slug>/` and set
`src: "/projects/<slug>/file.jpg"`.

Note: `lucide-react` 1.x has no brand icons (GitHub, LinkedIn…); those are
custom SVGs in `components/ui`.
