"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import type { Mockup, MockupSurface } from "@/types/portfolio";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_CINE } from "@/lib/motion";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PointerHand } from "@/components/ui/Decor";

/** Device / surface chrome around a mockup image. */
function SurfaceFrame({ surface, children }: { surface: MockupSurface; children: React.ReactNode }) {
  switch (surface) {
    case "laptop":
      return (
        <div className="mx-auto w-full">
          <div className="rounded-t-xl border-[10px] border-b-[14px] border-[#1b1f24] bg-black">
            <div className="aspect-[16/10] overflow-hidden">{children}</div>
          </div>
          <div className="mx-auto h-3 w-[112%] -translate-x-[5.4%] rounded-b-xl bg-gradient-to-b from-[#c9cdd2] to-[#8d939a]" />
        </div>
      );
    case "phone":
      return (
        <div className="mx-auto w-[42%] rounded-[2rem] border-[8px] border-[#1b1f24] bg-black">
          <div className="aspect-[9/19] overflow-hidden rounded-[1.4rem]">{children}</div>
        </div>
      );
    case "billboard":
      return (
        <div className="mx-auto w-full">
          <div className="border-[8px] border-[#2a2f35] bg-black shadow-xl">
            <div className="aspect-[3/1] overflow-hidden">{children}</div>
          </div>
          <div className="mx-auto flex w-1/2 justify-between">
            <span className="h-14 w-2 bg-[#2a2f35]" />
            <span className="h-14 w-2 bg-[#2a2f35]" />
          </div>
        </div>
      );
    case "screen":
      return (
        <div className="mx-auto w-full">
          <div className="rounded-md border-[10px] border-[#1b1f24] bg-black">
            <div className="aspect-[16/9] overflow-hidden">{children}</div>
          </div>
          <div className="mx-auto h-6 w-10 bg-[#2a2f35]" />
          <div className="mx-auto h-2 w-32 rounded-full bg-[#2a2f35]" />
        </div>
      );
    default:
      // apparel / street: photo-style print with a white border
      return (
        <div className="bg-white p-2 shadow-xl">
          <div className="aspect-[4/3] overflow-hidden">{children}</div>
        </div>
      );
  }
}

/**
 * Mockup stage with thumbnails, pulsing hotspots, an animated pointer that
 * "taps" the first hotspot, and a shared-element lightbox.
 */
export function MockupViewer({ mockups, accent, slug }: { mockups: Mockup[]; accent: string; slug: string }) {
  const { t } = useLocale();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [tip, setTip] = useState<string | null>(null);
  const mockup = mockups[index];
  const layoutId = `mockup-${slug}-${mockup.id}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div>
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={mockup.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: EASE_CINE }}
            className="relative"
          >
            <SurfaceFrame surface={mockup.surface}>
              <motion.button
                layoutId={layoutId}
                onClick={() => setOpen(true)}
                className="group relative block h-full w-full cursor-zoom-in"
                aria-label={t(strings.clickEnlarge)}
              >
                <MediaFrame media={mockup} accent={accent} tone="dark" />
                <span className="absolute right-2 bottom-2 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[10px] tracking-wider text-white uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-3 w-3" /> {t(strings.clickEnlarge)}
                </span>
                {mockup.hotspots?.map((h) => (
                  <span
                    key={h.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    onMouseEnter={() => setTip(h.id)}
                    onMouseLeave={() => setTip(null)}
                    onFocus={() => setTip(h.id)}
                  >
                    <span className="absolute inset-0 animate-ping rounded-full" style={{ background: accent, opacity: 0.6 }} />
                    <span className="relative block h-4 w-4 rounded-full border-2 border-white" style={{ background: accent }} />
                    <AnimatePresence>
                      {tip === h.id && (
                        <motion.span
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded bg-ink px-2.5 py-1 font-mono text-[10px] whitespace-nowrap text-paper"
                        >
                          {t(h.label)}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                ))}
              </motion.button>
            </SurfaceFrame>
            {mockup.hotspots?.[0] && <PointerHand x={mockup.hotspots[0].x} y={mockup.hotspots[0].y} />}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink/70">{t(mockup.caption)}</p>
        {mockups.length > 1 && (
          <div className="flex gap-2">
            {mockups.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setIndex(i)}
                className={`rounded-full border px-3 py-1 font-mono text-[10px] tracking-wider uppercase transition-colors ${
                  i === index ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink/60 hover:border-ink/50"
                }`}
              >
                {m.surface}
              </button>
            ))}
          </div>
        )}
      </div>

      <Lightbox open={open} onClose={() => setOpen(false)} layoutId={layoutId} mockup={mockup} accent={accent} />
    </div>
  );
}

/**
 * Full-screen viewer, portalled to <body>: the slide around the mockup is
 * 3D-transformed, which would otherwise make this position:fixed layer
 * relative to the slide instead of the viewport.
 */
function Lightbox({
  open,
  onClose,
  layoutId,
  mockup,
  accent,
}: {
  open: boolean;
  onClose: () => void;
  layoutId: string;
  mockup: Mockup;
  accent: string;
}) {
  const { t } = useLocale();
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 md:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            layoutId={layoutId}
            className="aspect-[16/10] w-full max-w-6xl overflow-hidden rounded-lg"
            transition={{ duration: 0.6, ease: EASE_CINE }}
          >
            <MediaFrame media={mockup} accent={accent} tone="dark" imgClassName="object-contain" />
          </motion.div>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 font-mono text-[11px] tracking-wider text-white uppercase"
          >
            <X className="h-4 w-4" /> {t(strings.close)}
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
