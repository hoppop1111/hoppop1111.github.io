"use client";

import { motion } from "framer-motion";

/** Starburst sticker that pops in when scrolled into view (like the reference's stars). */
export function Burst({
  color,
  size = 72,
  className = "",
  delay = 0,
}: {
  color: string;
  size?: number;
  className?: string;
  delay?: number;
}) {
  const points = 8;
  const path = Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 === 0 ? 50 : 30;
    const a = (Math.PI * i) / points - Math.PI / 2;
    return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
  }).join(" ");

  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`gpu pointer-events-none absolute drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] ${className}`}
      initial={{ scale: 0, rotate: -60 }}
      whileInView={{ scale: [0, 1.25, 1], rotate: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <polygon points={path} fill={color} stroke="#fff8" strokeWidth="2" />
      <polygon points={path} fill="#fff" opacity="0.25" transform="translate(50 50) scale(0.55) translate(-50 -50)" />
    </motion.svg>
  );
}

/**
 * Pointing-hand cursor that glides in and "taps" a spot, as in the reference.
 * x / y are the target point in % of the parent.
 */
export function PointerHand({ x, y, delay = 0.4 }: { x: number; y: number; delay?: number }) {
  return (
    <motion.div
      aria-hidden
      className="gpu pointer-events-none absolute z-20"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, x: 140, y: 90 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.svg
        width="54"
        height="54"
        viewBox="0 0 64 64"
        className="-translate-x-[18%] drop-shadow-[0_6px_10px_rgba(0,0,0,0.45)]"
        animate={{ scale: [1, 0.86, 1] }}
        transition={{ duration: 0.5, delay: delay + 1.3, repeat: Infinity, repeatDelay: 1.6 }}
      >
        <path
          d="M18 4c3 0 5 2 5 5v20l2-1V24c0-3 2-5 5-5s5 2 5 5v3l1 0c1-2 3-3 5-3 3 0 5 2 5 5v3c1-1 2-1 4-1 3 0 5 2 5 5v11c0 9-7 16-16 16H31c-5 0-9-2-12-6L7 40c-2-2-2-5 0-7 2-2 5-2 7 0l-1-1V9c0-3 2-5 5-5z"
          fill="#fff"
          stroke="#1b1f24"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.div>
  );
}
