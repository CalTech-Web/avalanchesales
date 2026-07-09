// The Avalanche twin-peak mountain mark, drawn inline so it can inherit
// currentColor (used white inside the brand-colored badges below).
export function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 96"
      fill="none"
      stroke="currentColor"
      strokeWidth={13}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      aria-hidden="true"
      className={className}
    >
      {/* Outer M: left peak, center valley, right peak */}
      <path d="M6 88 L40 20 L64 64 L88 20 L122 88" />
      {/* Inner accent bands echoing the layered logo */}
      <path d="M31 88 L45 60" />
      <path d="M97 88 L83 60" />
    </svg>
  );
}

// A circular brand badge: orange gradient disc with the white mountain mark.
export function BrandBadge({ className = "h-24 w-24" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-orange to-orange-dark text-white shadow-lg ring-8 ring-white ${className}`}
    >
      <BrandMark className="h-1/2 w-1/2" />
    </span>
  );
}
