import { Brain, ChartColumn, ChartLine, Sparkles } from "lucide-react";
import type { CaseStudy, ProjectCategory } from "@/types/portfolio";

const CATEGORY_ICONS: Record<string, typeof Brain> = {
  dashboards: ChartColumn,
  "machine-learning": Brain,
  "data-analysis": ChartLine,
};

/**
 * Cover art for a project: the real cover image when `cover.src` is set,
 * otherwise a tinted panel with the category's icon.
 */
export function ProjectCover({
  study,
  category,
  index,
  alt,
  className = "",
}: {
  study: CaseStudy;
  category?: ProjectCategory;
  index: number;
  alt: string;
  className?: string;
}) {
  const accent = category?.accent ?? "#ffd23f";
  const Icon = CATEGORY_ICONS[study.category] ?? Sparkles;

  return (
    <div
      className={`relative overflow-hidden rounded-[1.25rem] ${className}`}
      style={{ background: `color-mix(in srgb, ${accent} 22%, var(--surface))` }}
    >
      {study.cover.src ? (
        // eslint-disable-next-line @next/next/no-img-element -- static export
        <img src={study.cover.src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `radial-gradient(color-mix(in srgb, ${accent} 70%, transparent) 1px, transparent 1px)`,
              backgroundSize: "18px 18px",
              maskImage: "linear-gradient(to bottom left, #000, transparent 75%)",
            }}
          />
          <span className="absolute top-4 left-5 font-mono text-xs opacity-60">{String(index + 1).padStart(2, "0")}</span>
          <Icon
            aria-hidden
            strokeWidth={1.25}
            className="absolute -right-4 -bottom-6 h-36 w-36 transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:-translate-y-2 group-hover:-rotate-6"
            style={{ color: accent }}
          />
        </>
      )}
    </div>
  );
}
