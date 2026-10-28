"use client";

import { useEffect, useRef } from "react";

interface DustParticlesProps {
  /** Horizontal centre of the light beam in % — dust is brightest there. */
  beamX?: number;
  density?: number;
  className?: string;
}

interface Mote {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  phase: number;
}

/**
 * Dust motes drifting through the light beam, drawn on one canvas.
 * Runs on requestAnimationFrame (so it matches the display refresh rate) and
 * pauses while off-screen or when the tab is hidden.
 */
export function DustParticles({ beamX = 50, density = 1, className = "" }: DustParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;
    let motes: Mote[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w < 640 ? 28 : 70) * density);
      motes = Array.from({ length: count }, () => ({
        // bias spawn positions toward the beam
        x: (beamX / 100) * w + (Math.random() - 0.5) * w * (Math.random() < 0.7 ? 0.45 : 1),
        y: Math.random() * h,
        r: 0.4 + Math.random() * 1.6,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -0.05 - Math.random() * 0.18,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    let raf = 0;
    let last = performance.now();
    let running = false;

    const frame = (now: number) => {
      // normalise to 60 Hz units so speed is the same at 60 / 120 / 144 Hz
      const dt = Math.min((now - last) / 16.667, 3);
      last = now;
      ctx.clearRect(0, 0, w, h);
      const cx = (beamX / 100) * w;
      for (const m of motes) {
        m.phase += 0.012 * dt;
        m.x += (m.vx + Math.sin(m.phase) * 0.08) * dt;
        m.y += m.vy * dt;
        if (m.y < -4) {
          m.y = h + 4;
          m.x = cx + (Math.random() - 0.5) * w * 0.5;
        }
        // brighter inside the cone (which widens toward the bottom)
        const spread = 0.08 * w + (m.y / h) * 0.4 * w;
        const inBeam = Math.max(0, 1 - Math.abs(m.x - cx) / spread);
        const alpha = 0.08 + inBeam * 0.6;
        ctx.globalAlpha = alpha * (0.6 + 0.4 * Math.sin(m.phase * 2));
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    ctx.fillStyle = "rgb(235, 245, 240)";

    let visible = false;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !document.hidden) start();
      else stop();
    });
    io.observe(canvas);

    const onVisibility = () => (document.hidden || !visible ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    const ro = new ResizeObserver(() => {
      resize();
      ctx.fillStyle = "rgb(235, 245, 240)";
    });
    ro.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [beamX, density]);

  return <canvas ref={canvasRef} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
