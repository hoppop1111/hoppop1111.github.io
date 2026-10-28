/**
 * Static atmosphere layers. Everything here is painted once; only transform /
 * opacity animate (via CSS keyframes in globals.css), so it is GPU-cheap.
 */

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/** Animated film grain for one section (absolute, so it is only composited
 *  while that section is on screen; a page-wide fixed grain cost ~2x frame time). */
export function FilmGrain() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-[5] overflow-hidden opacity-[0.05]">
      <div className="grain gpu absolute -inset-[10%]" style={{ backgroundImage: NOISE }} />
    </div>
  );
}

/** Two drifting fog banks for a section. Soft radial gradients — no CSS blur,
 *  which measured as the most expensive layer while scrolling. */
export function Fog({ tint = "143,184,191", className = "" }: { tint?: string; className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="fog-a gpu absolute -left-1/4 bottom-[-10%] h-[55%] w-[150%]"
        style={{ background: `radial-gradient(50% 50% at 50% 50%, rgba(${tint},0.14), rgba(${tint},0.05) 45%, transparent 72%)` }}
      />
      <div
        className="fog-b gpu absolute -right-1/4 bottom-[5%] h-[40%] w-[120%]"
        style={{ background: `radial-gradient(50% 50% at 40% 50%, rgba(${tint},0.10), rgba(${tint},0.04) 45%, transparent 72%)` }}
      />
    </div>
  );
}

/** Damp concrete wall texture: layered gradients + noise, no images. */
export function Wall({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, #1d353b 0%, #13252a 38%, #0b1418 70%, #07090e 100%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: NOISE, backgroundSize: "320px" }} />
      {/* vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(120% 90% at 50% 40%, transparent 50%, rgba(0,0,0,0.75))" }} />
    </div>
  );
}
