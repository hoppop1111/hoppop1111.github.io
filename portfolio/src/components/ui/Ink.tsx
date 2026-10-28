"use client";

import { motion, MotionConfig, useScroll, useSpring, type Variants } from "framer-motion";

// Scroll animations in the notebook style: content settles onto the page like
// fresh ink, handwritten notes are "written" left to right, and a pen line
// across the top of the window traces how far down the page you are.

const EASE = [0.22, 1, 0.36, 1] as const;

/** One line of ink: rises a little and straightens from a slight tilt. */
export const inkItem: Variants = {
  hidden: { opacity: 0, y: 16, rotate: -0.8 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Parent that writes its `inkItem` children one after another. */
export const inkList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

/** Spread onto a motion element to play its variants once it scrolls into view. */
export const onView = { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.15 } } as const;

/** A block that settles in when it scrolls into view. */
export function Ink({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      {...onView}
      variants={{ hidden: inkItem.hidden, show: { ...inkItem.show, transition: { duration: 0.7, ease: EASE, delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// polygon (not inset) so the clip can reach past the box: handwriting glyphs and
// Thai tone marks overflow their line box and would otherwise be cut off
const hiddenClip = "polygon(-10% -60%, -10% -60%, -10% 160%, -10% 160%)";
const shownClip = "polygon(-10% -60%, 110% -60%, 110% 160%, -10% 160%)";

/** Handwritten note revealed left to right, as if being written. */
export function Write({
  children,
  className = "",
  delay = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  // the observed wrapper stays unclipped: a fully clipped element never counts
  // as "in view", so the reveal would never start
  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`inline-block ${className}`}
    >
      <motion.span
        variants={{
          hidden: { clipPath: hiddenClip },
          show: { clipPath: shownClip, transition: { duration: 0.9, delay, ease: "easeInOut" } },
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

/** Wobbly pen stroke along the top edge that grows with scroll position. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <svg
      viewBox="0 0 1000 10"
      preserveAspectRatio="none"
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-2.5 w-full text-pen"
    >
      <motion.path
        d="M0 5 C 120 2, 240 8, 380 5 S 640 2, 780 6 S 930 3, 1000 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        style={{ pathLength }}
      />
    </svg>
  );
}

/** Honour the OS "reduce motion" setting for every animation on the page. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
