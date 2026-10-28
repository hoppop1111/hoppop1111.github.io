/**
 * Wall-mounted lantern with a downward cone of light, like the chapter slides
 * in the reference. Pure SVG + gradients; the light only flickers in opacity.
 */
export function WallLamp({ side = "left", className = "" }: { side?: "left" | "right"; className?: string }) {
  const flip = side === "right";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-0 h-full w-full ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      {/* light cone: conic wedge from the bulb, faded with distance (no CSS blur) */}
      <div
        className="flicker gpu absolute top-[70px] left-[38px] h-[95%] w-[min(85vw,980px)] md:left-[62px]"
        style={{
          background:
            "conic-gradient(from 128deg at 0% 0%, transparent 0deg, rgba(220,236,230,0.22) 8deg, rgba(246,231,193,0.5) 20deg, rgba(220,236,230,0.22) 32deg, transparent 42deg)",
          maskImage: "radial-gradient(circle at 0% 0%, #000 10%, rgba(0,0,0,0.5) 45%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at 0% 0%, #000 10%, rgba(0,0,0,0.5) 45%, transparent 85%)",
        }}
      />
      {/* glow around the bulb */}
      <div
        className="flicker absolute top-[38px] left-[-30px] h-[150px] w-[150px] rounded-full md:left-[-6px]"
        style={{ background: "radial-gradient(closest-side, rgba(255,244,214,0.75), rgba(246,231,193,0.18) 55%, transparent)" }}
      />
      {/* lantern */}
      <svg className="absolute top-[42px] left-[14px] h-[64px] w-[48px] md:left-[38px]" viewBox="0 0 48 64">
        <path d="M2 6 H20 V10 H8 Z" fill="#2a3337" />
        <path d="M14 10 L34 10 L38 18 L10 18 Z" fill="#3b464b" />
        <rect x="13" y="18" width="22" height="28" rx="2" fill="#fff6dc" />
        <rect x="13" y="18" width="22" height="28" rx="2" fill="url(#lampglass)" />
        <path d="M11 46 H37 L34 52 H14 Z" fill="#3b464b" />
        <path d="M24 18 V46 M13 32 H35" stroke="#2a3337" strokeWidth="1.4" />
        <defs>
          <radialGradient id="lampglass" cx="50%" cy="55%" r="60%">
            <stop offset="0" stopColor="#fffbe9" />
            <stop offset="1" stopColor="#f0d79a" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
