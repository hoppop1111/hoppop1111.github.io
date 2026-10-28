"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertial scrolling driven by requestAnimationFrame, so it runs at the
 * display's refresh rate (120 Hz on ProMotion / high-refresh screens).
 * Native scroll position is still updated, so framer-motion's whileInView works.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: true });
    return () => lenis.destroy();
  }, []);

  return null;
}
