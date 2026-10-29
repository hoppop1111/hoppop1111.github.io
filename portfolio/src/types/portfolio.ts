/**
 * Content model for the cinematic portfolio.
 * Every piece of copy is bilingual (TH / EN) so the language toggle from the
 * original site keeps working.
 */

export type Locale = "th" | "en";

/** A string in both languages. */
export type Localized = Record<Locale, string>;

/** Image shown somewhere on the site. `src` is optional so a case study can be
 *  drafted before its media exists — the UI renders a styled placeholder frame
 *  (with `alt` as its label) until a real file is added under /public. */
export interface Media {
  src?: string;
  alt: Localized;
  width?: number;
  height?: number;
}

// ---------------------------------------------------------------------------
// Profile / About
// ---------------------------------------------------------------------------

export type ContactKind = "email" | "phone" | "line" | "linkedin" | "github" | "kaggle";

export interface ContactLink {
  kind: ContactKind;
  label: string;
  href: string;
}

export interface Profile {
  name: Localized;
  /** Short role line under the name in the hero. */
  role: Localized;
  /** One-line cinematic tagline for the hero ("opening credits"). */
  tagline: Localized;
  bio: Localized;
  status: Localized;
  resume: { href: string; downloadName: string };
  contacts: ContactLink[];
}

export interface SkillGroup {
  id: string;
  title: Localized;
  /** Lucide icon name, resolved in the UI layer. */
  icon: string;
  items: Localized[];
}

export interface TimelineEntry {
  id: string;
  title: Localized;
  org: Localized;
  period: Localized;
  points: Localized[];
}

export interface Certificate {
  id: string;
  name: string;
  file: string;
}

// ---------------------------------------------------------------------------
// Case studies
// ---------------------------------------------------------------------------

export interface ProjectCategory {
  id: string;
  label: Localized;
  /** Short line shown during the scene-transition title card. */
  logline: Localized;
  /** Accent colour for this category's slides, stickers and highlights. */
  accent: string;
}

/** Moodboard tile. `span` controls its footprint in the masonry-like grid. */
export interface MoodboardItem extends Media {
  id: string;
  caption?: Localized;
  span?: "square" | "tall" | "wide";
}

/** One frame of the process slider (e.g. Raw data -> Cleaned -> Final). */
export interface ProcessStage extends Media {
  id: string;
  label: Localized;
  note: Localized;
}

export type MockupSurface = "screen" | "laptop" | "phone" | "billboard" | "apparel" | "street";

/** Clickable marker drawn on top of a mockup. x / y are percentages (0-100). */
export interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: Localized;
}

export interface Mockup extends Media {
  id: string;
  surface: MockupSurface;
  caption: Localized;
  hotspots?: Hotspot[];
}

export interface ExternalLink {
  label: Localized;
  href: string;
  kind: "live" | "notebook" | "file" | "repo";
}

export interface CaseStudy {
  slug: string;
  /** Must match a ProjectCategory id. */
  category: string;
  title: Localized;
  /** Optional — leave out when unknown. */
  year?: string;
  role: Localized;
  summary: Localized;
  /** Long-form narrative blocks for the case study page. */
  challenge: Localized;
  approach: Localized;
  outcome: Localized;
  tags: string[];
  cover: Media;
  moodboard: MoodboardItem[];
  process: ProcessStage[];
  mockups: Mockup[];
  links: ExternalLink[];
  featured?: boolean;
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export interface PortfolioData {
  profile: Profile;
  skills: SkillGroup[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
  certificates: Certificate[];
  categories: ProjectCategory[];
  caseStudies: CaseStudy[];
}
