"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import type { ProcessStage } from "@/types/portfolio";
import { useLocale } from "@/lib/locale";
import { strings } from "@/lib/strings";
import { EASE_CINE } from "@/lib/motion";
import { MediaFrame } from "@/components/ui/MediaFrame";

/**
 * Process stepper (e.g. Raw data -> Cleaned -> Final). The selected stage is
 * compared with the previous one through a draggable before/after divider.
 * Dragging writes a motion value, so the wipe never re-renders React.
 */
export function ProcessSlider({ stages, accent }: { stages: ProcessStage[]; accent: string }) {
  const { t } = useLocale();
  const [active, setActive] = useState(stages.length - 1);
  const boxRef = useRef<HTMLDivElement>(null);

  const split = useMotionValue(50); // % of width showing the "before" image
  const rightInset = useTransform(split, (v) => 100 - v);
  const clip = useMotionTemplate`inset(0 ${rightInset}% 0 0)`;
  const handleLeft = useMotionTemplate`${split}%`;

  const before = active > 0 ? stages[active - 1] : null;
  const current = stages[active];

  const setFromPointer = (clientX: number) => {
    const r = boxRef.current?.getBoundingClientRect();
    if (!r) return;
    split.set(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div>
      {/* stepper */}
      <ol className="mb-4 flex flex-wrap items-center gap-2 md:gap-3">
        {stages.map((s, i) => (
          <li key={s.id} className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => {
                setActive(i);
                split.set(50);
              }}
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition-colors duration-300 ${
                i === active ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink/60 hover:border-ink/50"
              }`}
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold" style={{ background: accent, color: "#11161c" }}>
                {i + 1}
              </span>
              {t(s.label)}
            </button>
            {i < stages.length - 1 && <span className="h-px w-4 bg-ink/25 md:w-8" />}
          </li>
        ))}
      </ol>

      {/* viewer */}
      <div
        ref={boxRef}
        className="relative aspect-[16/9] touch-pan-y overflow-hidden rounded-md bg-black/5 select-none"
        onPointerDown={(e) => {
          if (!before) return;
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromPointer(e.clientX);
        }}
        onPointerMove={(e) => {
          if (before && e.buttons === 1) setFromPointer(e.clientX);
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE_CINE }}
          >
            <MediaFrame media={current} accent={accent} />
          </motion.div>
        </AnimatePresence>

        {before && (
          <>
            <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
              <MediaFrame media={before} accent={accent} tone="dark" />
              <span className="absolute top-3 left-3 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[10px] tracking-wider text-white uppercase">
                {t(before.label)}
              </span>
            </motion.div>
            <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] tracking-wider text-ink uppercase">
              {t(current.label)}
            </span>
            <motion.div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]" style={{ left: handleLeft }}>
              <span
                className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white text-ink shadow-lg"
                style={{ background: accent }}
              >
                <MoveHorizontal className="h-4 w-4" />
              </span>
            </motion.div>
          </>
        )}
      </div>

      <div className="mt-3 flex items-start justify-between gap-4 text-sm text-ink/70">
        <p>{t(current.note)}</p>
        {before && <p className="shrink-0 font-mono text-[10px] tracking-wider text-ink/45 uppercase">{t(strings.dragCompare)}</p>}
      </div>
    </div>
  );
}
