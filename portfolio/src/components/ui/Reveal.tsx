"use client";

import { useRef } from "react";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";

// Scroll animations shared by every section: blocks rise out of a soft blur
// as they enter the viewport, lists play their children one after another,
// and headings reveal word by word from behind a mask.

const EASE = [0.22, 1, 0.36, 1] as const;

/** Rises and sharpens into place. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

/** Parent that plays its `fadeUp` children one after another. */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/** Spread onto a motion element to play its variants once it scrolls into view. */
export const onView = { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.2 } } as const;

/** A block that rises in when it scrolls into view. */
export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      {...onView}
      variants={{ hidden: fadeUp.hidden, show: { ...fadeUp.show, transition: { duration: 0.8, ease: EASE, delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Text whose words slide up from behind a mask, one after another. */
export function SplitWords({
  text,
  className = "",
  delay = 0,
  animateNow = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Play on mount instead of on scroll (for the hero). */
  animateNow?: boolean;
}) {
  const trigger = animateNow ? { initial: "hidden", animate: "show" } : onView;
  return (
    <motion.span
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
      className={className}
      aria-label={text}
    >
      {text.split(" ").map((word, i) => (
        // pb/-mb keeps descenders and Thai vowel marks inside the mask
        <span key={`${word}-${i}`} aria-hidden className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom">
          <motion.span
            className="inline-block whitespace-nowrap"
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Card that tilts toward the pointer in 3D. */
export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  function move(e: React.PointerEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r || e.pointerType !== "mouse") return;
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }
  function leave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        ref={ref}
        onPointerMove={move}
        onPointerLeave={leave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Maps how far `target` has travelled through the viewport to a range of values. */
export function useParallax(target: React.RefObject<HTMLElement | null>, from: number, to: number): MotionValue<number> {
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  return useTransform(scrollYProgress, [0, 1], [from, to]);
}

/** Gradient bar along the top of the window that grows with scroll position. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent to-accent-2"
    />
  );
}

/** Honour the OS "reduce motion" setting for every animation on the page. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
