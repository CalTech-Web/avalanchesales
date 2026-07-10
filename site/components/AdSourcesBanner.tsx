import Image from "next/image";
import ServiceIcon from "@/components/ServiceIcon";

type AdSource = { label: string; logo?: string; icon?: string };

// The platforms Avalanche generates buyer opportunities from. Items with a
// brand logo render the image; the rest fall back to an on-brand icon badge.
const adSources: AdSource[] = [
  { label: "Google Ads", logo: "/images/products/google-ads-icon.png" },
  { label: "Facebook Ads", logo: "/images/products/facebook-ads-icon.png" },
  { label: "Instagram Ads", logo: "/images/products/instagram-ads-icon.jpg" },
  { label: "LinkedIn Ads", logo: "/images/products/linkedin-ads-icon.png" },
  { label: "Bing Ads", logo: "/images/products/bing-ads-icon.jpg" },
  { label: "ChatGPT Search", icon: "chat" },
  { label: "Vibe.com", icon: "target" },
  { label: "YouTube", logo: "/images/products/youtube-icon.png" },
  { label: "Industry Landing Pages", icon: "funnel" },
];

function Pill({ source }: { source: AdSource }) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap rounded-full border border-zinc-200 bg-white px-6 py-3 shadow-sm">
      {source.logo ? (
        <Image
          src={source.logo}
          alt=""
          width={32}
          height={32}
          className="h-7 w-7 flex-shrink-0 object-contain"
        />
      ) : (
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
          <ServiceIcon name={source.icon ?? "target"} className="h-4 w-4" />
        </span>
      )}
      <span className="text-sm font-semibold text-near-black">
        {source.label}
      </span>
    </div>
  );
}

function Group({ hidden = false }: { hidden?: boolean }) {
  // Each group carries a trailing gap (pr-5) so the seam between the two
  // groups matches the internal gap and the -50% loop stays seamless even
  // with variable-width pills.
  return (
    <ul
      className="flex flex-shrink-0 items-center gap-5 pr-5"
      aria-hidden={hidden || undefined}
    >
      {adSources.map((source) => (
        <li key={source.label}>
          <Pill source={source} />
        </li>
      ))}
    </ul>
  );
}

export default function AdSourcesBanner() {
  return (
    <div className="marquee group relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20"
      />
      <div className="flex w-max animate-marquee py-1">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
