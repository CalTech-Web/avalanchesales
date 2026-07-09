// Decorative "data" backdrop: a faint grid, an upward growth chart, and soft
// glow orbs. Purely ornamental (aria-hidden). `variant` picks stroke color:
// "dark" for orange/dark backgrounds (white lines), "light" for white sections.
export default function SectionDecor({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const stroke = variant === "dark" ? "#ffffff" : "#ED751C";
  const gridId = `decor-grid-${variant}`;
  const areaId = `decor-area-${variant}`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Glow orbs */}
      <div
        className={`absolute -left-24 -top-24 h-80 w-80 rounded-full blur-3xl ${
          variant === "dark" ? "bg-white/10" : "bg-orange/10"
        }`}
      />
      <div
        className={`absolute -right-20 bottom-0 h-72 w-72 rounded-full blur-3xl ${
          variant === "dark" ? "bg-white/10" : "bg-blue-accent/10"
        }`}
      />

      {/* Grid */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id={gridId}
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M44 0 H0 V44"
              fill="none"
              stroke={stroke}
              strokeOpacity={variant === "dark" ? 0.08 : 0.06}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${gridId})`} />
      </svg>

      {/* Upward growth chart along the bottom */}
      <svg
        className="absolute inset-x-0 bottom-0 h-2/3 w-full"
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor={stroke}
              stopOpacity={variant === "dark" ? 0.14 : 0.1}
            />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,190 L120,176 L240,182 L360,156 L480,164 L600,132 L720,140 L840,104 L960,92 L1080,60 L1200,40 L1200,220 L0,220 Z"
          fill={`url(#${areaId})`}
        />
        <polyline
          points="0,190 120,176 240,182 360,156 480,164 600,132 720,140 840,104 960,92 1080,60 1200,40"
          fill="none"
          stroke={stroke}
          strokeOpacity={variant === "dark" ? 0.3 : 0.22}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
