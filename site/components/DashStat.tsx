// A small glassy dashboard-style stat card with a mini sparkline, used as a
// floating accent on the dark/orange marketing bands.
export default function DashStat({
  label,
  value,
  unit,
  data,
  type = "bars",
  className = "",
}: {
  label: string;
  value: string;
  unit?: string;
  data: number[];
  type?: "bars" | "line";
  className?: string;
}) {
  const max = Math.max(...data);

  return (
    <div
      className={`w-44 rounded-xl bg-white/10 p-4 text-left shadow-lg ring-1 ring-white/20 backdrop-blur-sm ${className}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-white/70">
        {label}
      </p>
      <p className="mt-0.5 text-xl font-extrabold text-white">
        {value}
        {unit && (
          <span className="ml-1 text-xs font-medium text-white/70">{unit}</span>
        )}
      </p>
      <div className="mt-2.5">
        {type === "bars" ? (
          <svg viewBox="0 0 100 30" className="h-8 w-full" aria-hidden="true">
            {data.map((v, i) => {
              const w = 100 / data.length;
              const h = (v / max) * 26 + 2;
              return (
                <rect
                  key={i}
                  x={i * w + w * 0.18}
                  y={30 - h}
                  width={w * 0.64}
                  height={h}
                  rx="1.2"
                  fill="#fff"
                  fillOpacity={i === data.length - 1 ? 0.95 : 0.55}
                />
              );
            })}
          </svg>
        ) : (
          <svg
            viewBox="0 0 100 30"
            className="h-8 w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline
              points={data
                .map(
                  (v, i) =>
                    `${(i / (data.length - 1)) * 100},${28 - (v / max) * 24}`,
                )
                .join(" ")}
              fill="none"
              stroke="#fff"
              strokeOpacity="0.9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
