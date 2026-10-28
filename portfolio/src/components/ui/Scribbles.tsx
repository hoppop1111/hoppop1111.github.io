"use client";

import { motion } from "framer-motion";

// Hand-drawn marks, stroked in the red "pen" colour. Paths are drawn on once
// when they scroll into view, like someone annotating the page.

const draw = {
  initial: { pathLength: 0 },
  whileInView: { pathLength: 1 },
  viewport: { once: true, amount: 0.8 },
};

/** Wobbly underline that stretches to the width of its parent. */
export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 14"
      preserveAspectRatio="none"
      aria-hidden
      className={`pointer-events-none absolute -bottom-2 left-0 h-3 w-full text-pen ${className}`}
    >
      <motion.path
        d="M2 9 C 40 4, 80 11, 130 7 S 220 3, 298 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        {...draw}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </svg>
  );
}

/** Loose loop drawn around its parent, a bit off-centre like a real pen circle. */
export function Circle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 80"
      preserveAspectRatio="none"
      aria-hidden
      className={`pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)] text-pen ${className}`}
    >
      <motion.path
        d="M30 12 C 90 0, 200 4, 214 34 C 224 62, 130 78, 70 74 C 18 70, 2 52, 8 34 C 14 18, 50 8, 120 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        {...draw}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
    </svg>
  );
}

/** Curvy arrow with a hand-drawn head. Points right; flip/rotate with classes. */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 50" aria-hidden className={`pointer-events-none text-pen ${className}`}>
      <motion.path
        d="M4 40 C 20 12, 50 6, 80 18 M68 8 L81 18 L66 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...draw}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </svg>
  );
}
