# Cinematic Portfolio (Next.js)

Next.js App Router + TypeScript + Tailwind CSS 4 + Framer Motion + Lucide React,
built as a static export (`out/`) for GitHub Pages.

The live site at the repo root is untouched until this app is wired into deployment.

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
    │   ├── effects/           # Spotlight (mouse-follow beam), film grain, fog
    │   ├── sections/          # Hero, About, Contact
    │   ├── case-study/        # CaseStudyViewer, MoodboardGrid, ProcessSlider,
    │   │                      # MockupViewer, scene transitions between categories
    │   └── ui/                # GlowButton, HudCard, brand icons
    └── lib/                   # helpers (locale, motion presets)
```

## Adding case-study media

Media entries in `portfolioData.ts` without a `src` render as placeholder frames.
Put a file in `public/projects/<slug>/` and set `src: "/projects/<slug>/file.jpg"`.
Sections with no entries (e.g. `moodboard: []`) are hidden for that project.

Note: `lucide-react` 1.x has no brand icons (GitHub, LinkedIn…); those are
custom SVGs in `components/ui`.
