import Image from "next/image";

// Avalanche brand badge: the brand-orange disc with the white Avalanche
// mountain mark (taken from the official logo) centered inside it.
export function BrandBadge({ className = "h-24 w-24" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-orange to-orange-dark shadow-lg ring-8 ring-white ${className}`}
    >
      <Image
        src="/images/logos/avalanche-mark-white.png"
        alt="Avalanche"
        width={616}
        height={227}
        className="h-auto w-2/3"
      />
    </span>
  );
}
