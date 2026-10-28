# Portfolio (Next.js)

Next.js App Router + TypeScript + Tailwind CSS 4 + Framer Motion + Lucide React,
built as a static export (`out/`) for GitHub Pages.

Design: a personal-notebook look — paper background, serif type, handwritten
margin notes, hand-drawn pen marks (`components/ui/Scribbles.tsx`) and a
taped-in polaroid. Light/dark theme (follows the system, toggle saved in
localStorage) and a TH/EN language toggle. Margin-note copy lives in
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
    │   └── ui/                # Section, Scribbles (underline/circle/arrow), ThemeToggle
    └── lib/                   # helpers (locale, motion presets)
```

## Adding case-study media

Projects are a plain list; clicking a title expands its write-up in place.
Process / moodboard / mockup images appear there only once they have a `src`: put a file in `public/projects/<slug>/` and set
`src: "/projects/<slug>/file.jpg"`.

Note: `lucide-react` 1.x has no brand icons (GitHub, LinkedIn…); those are
custom SVGs in `components/ui`.
