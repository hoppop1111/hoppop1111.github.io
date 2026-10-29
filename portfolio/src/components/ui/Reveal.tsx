"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";

// Scroll animations shared by every section: blocks rise into place as they
// enter the viewport, headings slide up line by line from behind a mask,
// mono labels scramble into their text and project thumbnails resolve
// pixel by pixel.

const EASE = [0.22, 1, 0.36, 1] as const;

/** Rises into place. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
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

/** Lines that slide up from behind a mask, one after another. */
export function MaskLines({
  lines,
  className = "",
  lineClassName = () => "",
  delay = 0,
  animateNow = false,
}: {
  lines: string[];
  className?: string;
  lineClassName?: (index: number) => string;
  delay?: number;
  /** Play on mount instead of on scroll (for the hero). */
  animateNow?: boolean;
}) {
  const trigger = animateNow ? { initial: "hidden", animate: "show" } : onView;
  return (
    <motion.span
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: delay } } }}
      className={`block ${className}`}
    >
      {lines.map((line, i) => (
        // pb/-mb keeps descenders and Thai vowel marks inside the mask
        <span key={`${line}-${i}`} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
          <motion.span
            className={`block ${lineClassName(i)}`}
            variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 0.95, ease: EASE } } }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/[]·";

/** Mono text that flickers through random glyphs before settling, once it is in view. */
export function Scramble({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const still = useReducedMotion();
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (!inView || still) return;
    let frame = 0;
    const total = 18;
    const id = window.setInterval(() => {
      frame++;
      const settled = Math.floor((frame / total) * text.length);
      setShown(
        text
          .split("")
          .map((ch, i) => (i < settled || ch === " " ? ch : GLYPHS[(i * 7 + frame * 13) % GLYPHS.length]))
          .join(""),
      );
      if (frame >= total) window.clearInterval(id);
    }, 40);
    return () => window.clearInterval(id);
  }, [inView, still, text]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>{shown}</span>
    </span>
  );
}

/** Small seeded PRNG so each project gets the same pattern on every visit. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/**
 * Generated pixel-block artwork (stand-in thumbnail for a project), drawn on a
 * canvas from `seed`. Cells fade in in random order when it scrolls into view.
 */
export function PixelImage({ seed, className = "" }: { seed: string; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const still = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !inView) return;

    const cols = 24;
    const rows = 15;
    const rand = mulberry32(hash(seed));
    // a few soft blobs of light; each cell's grey level is their summed glow
    const blobs = Array.from({ length: 3 + Math.floor(rand() * 3) }, () => ({
      x: rand() * cols,
      y: rand() * rows,
      r: 2 + rand() * 6,
    }));
    const cells: { x: number; y: number; v: number }[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        let v = 0;
        for (const b of blobs) v += Math.max(0, 1 - Math.hypot(x - b.x, (y - b.y) * 1.3) / b.r);
        v = Math.min(1, v) * (0.6 + rand() * 0.4);
        if (v > 0.12) cells.push({ x, y, v: Math.round(v * 4) / 4 });
      }
    }
    const order = cells.map((c) => ({ c, k: rand() })).sort((a, b) => a.k - b.k);

    canvas.width = cols;
    canvas.height = rows;
    ctx.clearRect(0, 0, cols, rows);
    let i = 0;
    let frame = 0;
    const draw = () => {
      const step = still ? order.length : Math.ceil(order.length / 28);
      for (let n = 0; n < step && i < order.length; n++, i++) {
        const { c } = order[i];
        const g = Math.round(40 + c.v * 197);
        ctx.fillStyle = `rgb(${g},${g},${g - 3})`;
        ctx.fillRect(c.x, c.y, 1, 1);
      }
      if (i < order.length) frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, [inView, seed, still]);

  return <canvas ref={ref} aria-hidden className={`block w-full [image-rendering:pixelated] ${className}`} />;
}

/** Maps how far `target` has travelled through the viewport to a range of values. */
export function useParallax(target: React.RefObject<HTMLElement | null>, from: number, to: number): MotionValue<number> {
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  return useTransform(scrollYProgress, [0, 1], [from, to]);
}

/** Hairline along the top of the window that grows with scroll position. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-fg" />;
}

/** Honour the OS "reduce motion" setting for every animation on the page. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
