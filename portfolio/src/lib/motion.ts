import type { Transition, Variants } from "framer-motion";

/** Long, soft ease-out used for every cinematic entrance. */
export const EASE_CINE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const stagger = (delayChildren = 0, staggerChildren = 0.08): Transition => ({
  delayChildren,
  staggerChildren,
});

export const cine = (duration = 1.2, delay = 0): Transition => ({
  duration,
  delay,
  ease: EASE_CINE,
});
