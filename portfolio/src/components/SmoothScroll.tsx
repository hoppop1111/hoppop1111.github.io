"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let lenis: Lenis | null = null;

/**
 * Inertial scrolling driven by requestAnimationFrame, so it runs at the
 * display's refresh rate (120 Hz on ProMotion / high-refresh screens).
 * Native scroll position is still updated, so framer-motion's whileInView works.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: true });
    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}

/** Freeze page scrolling (while the full-screen menu is open). */
export function setScrollLocked(locked: boolean) {
  if (locked) lenis?.stop();
  else lenis?.start();
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

/** Scroll to `#id`, smoothly when Lenis is running. */
export function scrollToHash(hash: string) {
  if (lenis) lenis.scrollTo(hash);
  else document.querySelector(hash)?.scrollIntoView();
}
