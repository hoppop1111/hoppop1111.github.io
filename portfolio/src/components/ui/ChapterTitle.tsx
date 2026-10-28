"use client";

import { motion } from "framer-motion";
import { EASE_CINE } from "@/lib/motion";

interface ChapterTitleProps {
  /** Latin title set in Cinzel; first letter becomes the drop cap. */
  title: string;
  /** Small line above the rule (e.g. project or chapter subtitle). */
  eyebrow?: string;
  className?: string;
  size?: "xl" | "lg";
  /** Animate when scrolled into view (default) or immediately on mount. */
  trigger?: "inView" | "mount";
}

/**
 * "BRANDING" / "ABOUT ME" style title from the reference: oversized drop cap,
 * small-caps remainder, hairline rule with an eyebrow above it.
 * Letters arrive one by one with a slow zoom-in (opacity + transform only).
 */
export function ChapterTitle({ title, eyebrow, className = "", size = "xl", trigger = "inView" }: ChapterTitleProps) {
  const words = title.split(" ");
  const sizes =
    size === "xl"
      ? "text-[clamp(2.1rem,9.5vw,9.5rem)]"
      : "text-[clamp(2.1rem,7vw,6rem)]";

  const animateProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "show" }
      : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.5 } };

  let letterIndex = 0;

  return (
    <motion.div {...animateProps} className={`relative inline-block ${className}`}>
      {eyebrow && (
        <motion.div
          variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0 } }}
          transition={{ duration: 1.4, ease: EASE_CINE, delay: 0.5 }}
          className="mb-1 flex items-center justify-end gap-3 pr-[4%]"
        >
          <span className="font-display text-[clamp(0.6rem,1.1vw,0.85rem)] tracking-[0.35em] text-lamp/80 uppercase">
            {eyebrow}
          </span>
        </motion.div>
      )}
      {/* hairline rule, drawn from the right */}
      <motion.div
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
        transition={{ duration: 1.6, ease: EASE_CINE, delay: 0.25 }}
        className="absolute right-0 left-[12%] h-px origin-right bg-gradient-to-l from-lamp/70 to-transparent"
        style={{ top: eyebrow ? "1.9em" : "0.15em" }}
      />
      <h2 className={`font-display text-glow leading-[0.95] font-semibold text-[#eef2ef] ${sizes}`} aria-label={title}>
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap" aria-hidden>
            {Array.from(word).map((ch, ci) => {
              const i = letterIndex++;
              const isCap = wi === 0 && ci === 0;
              return (
                <motion.span
                  key={ci}
                  className={`inline-block ${isCap ? "text-[1.45em] leading-[0.8]" : ""}`}
                  variants={{
                    hidden: { opacity: 0, y: "0.25em", scale: 1.18 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 1.5, ease: EASE_CINE, delay: 0.15 + i * 0.055 }}
                >
                  {ch}
                </motion.span>
              );
            })}
            {wi < words.length - 1 && <span className="inline-block w-[0.3em]" />}
          </span>
        ))}
      </h2>
    </motion.div>
  );
}
