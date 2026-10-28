"use client";

import { ImageIcon } from "lucide-react";
import type { Media } from "@/types/portfolio";
import { useLocale } from "@/lib/locale";

interface MediaFrameProps {
  media: Media;
  tone?: "paper" | "dark";
  accent?: string;
  className?: string;
  /** Extra classes for the <img> when a real image exists. */
  imgClassName?: string;
}

/**
 * Shows the image if `src` exists, otherwise a styled placeholder labelled with
 * the media's alt text so the case-study layout reads correctly before real
 * screenshots are added.
 */
export function MediaFrame({ media, tone = "paper", accent = "#7fdbe6", className = "", imgClassName = "" }: MediaFrameProps) {
  const { t } = useLocale();

  if (media.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- static export serves images unoptimised
      <img
        src={media.src}
        alt={t(media.alt)}
        width={media.width}
        height={media.height}
        loading="lazy"
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName} ${className}`}
      />
    );
  }

  const paper = tone === "paper";
  return (
    <div
      role="img"
      aria-label={t(media.alt)}
      className={`relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden p-4 text-center ${
        paper ? "bg-[#ebe6dc] text-[#5b5a55]" : "bg-[#0e171b] text-[#8fb8bf]"
      } ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(${paper ? "#0000000d" : "#7fdbe612"} 1px, transparent 1px), linear-gradient(90deg, ${
            paper ? "#0000000d" : "#7fdbe612"
          } 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} />
      <ImageIcon className="relative h-6 w-6 opacity-60" strokeWidth={1.5} />
      <span className="relative max-w-[90%] font-mono text-[11px] leading-snug tracking-wide uppercase">{t(media.alt)}</span>
    </div>
  );
}
