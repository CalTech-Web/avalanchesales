import { BrandBadge } from "@/components/BrandMark";

const stats = [
  { label: "Verified Leads", value: "5,214", delta: "18%", up: true },
  { label: "Conversion", value: "38%", delta: "6%", up: true },
  { label: "Cost / Lead", value: "$42", delta: "22%", up: false },
];

const channels = [
  { name: "Search Advertising", pct: 82 },
  { name: "Social Advertising", pct: 64 },
  { name: "LinkedIn B2B", pct: 47 },
];

// Upward trend for the mini area chart (viewBox 320 x 120).
const points = "10,84 60,73 110,77 160,60 210,55 260,39 310,26";
const areaPath = `M10,84 L60,73 L110,77 L160,60 L210,55 L260,39 L310,26 L310,112 L10,112 Z`;

export default function HeroDashboard() {
  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-zinc-100 lg:max-w-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
        <div className="flex items-center gap-3">
          <BrandBadge className="h-9 w-9 ring-4" />
          <div>
            <p className="text-sm font-bold leading-tight text-near-black">
              Avalanche Sales
            </p>
            <p className="text-xs leading-tight text-zinc-500">
              Acquisition Dashboard
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-2.5 py-1 text-xs font-semibold text-orange-text">
          <span className="h-1.5 w-1.5 rounded-full bg-orange" />
          Live
        </span>
      </div>

      {/* Body */}
      <div className="space-y-5 p-5">
        {/* KPI tiles */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-100 bg-zinc-50 p-3"
            >
              <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                {stat.label}
              </p>
              <p className="mt-1 text-lg font-extrabold leading-none text-near-black">
                {stat.value}
              </p>
              <p className="mt-1.5 inline-flex items-center gap-0.5 text-[11px] font-semibold text-orange-text">
                <span aria-hidden="true">{stat.up ? "↑" : "↓"}</span>
                {stat.delta}
              </p>
            </div>
          ))}
        </div>

        {/* Trend chart */}
        <div className="rounded-xl border border-zinc-100 p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-near-black">
              Qualified Opportunities
            </p>
            <p className="text-xs font-semibold text-orange-text">Last 7 months</p>
          </div>
          <svg
            viewBox="0 0 320 120"
            className="h-28 w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ED751C" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#ED751C" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[30, 55, 80, 105].map((y) => (
              <line
                key={y}
                x1="10"
                y1={y}
                x2="310"
                y2={y}
                stroke="#f4f4f5"
                strokeWidth="1"
              />
            ))}
            <path d={areaPath} fill="url(#heroArea)" />
            <polyline
              points={points}
              fill="none"
              stroke="#ED751C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Channel breakdown */}
        <div className="space-y-2.5">
          {channels.map((channel) => (
            <div key={channel.name}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-medium text-near-black">
                  {channel.name}
                </span>
                <span className="text-xs font-semibold text-zinc-500">
                  {channel.pct}%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                <div
                  className="h-full rounded-full bg-orange"
                  style={{ width: `${channel.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
