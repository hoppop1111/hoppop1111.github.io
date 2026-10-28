interface GlowButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "solid" | "ghost";
}

/**
 * Link styled as a neon-edged button. The glow is a separate pre-blurred layer
 * whose opacity changes on hover, so hovering never re-paints a blur.
 */
export function GlowButton({ variant = "solid", className = "", children, ...props }: GlowButtonProps) {
  const solid = variant === "solid";
  return (
    <a
      {...props}
      className={`group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-mono text-xs tracking-[0.2em] uppercase transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-0.5 ${
        solid ? "bg-lamp text-night" : "border border-hud/40 text-[#dff4f6]"
      } ${className}`}
    >
      <span
        aria-hidden
        className={`absolute -inset-1 -z-10 rounded-full opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-100 ${
          solid ? "bg-lamp/60" : "bg-hud/40"
        }`}
      />
      {children}
    </a>
  );
}
