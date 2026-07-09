"use client";

import { useState } from "react";
import ServiceIcon from "@/components/ServiceIcon";
import { BrandBadge } from "@/components/BrandMark";
import { portalGroups } from "@/lib/data";

export default function PortalsShowcase() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="grid items-stretch gap-6 md:grid-cols-2 md:gap-0">
        {portalGroups.map((group, i) => {
          const on = active === i;
          const left = i === 0;
          return (
            <div
              key={group.title}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={`rounded-2xl border bg-white p-8 transition-all duration-200 ${
                on
                  ? "border-orange shadow-xl md:-translate-y-1"
                  : "border-zinc-200 shadow-sm"
              } ${left ? "md:mr-14 md:text-right" : "md:ml-14"}`}
            >
              <h3 className="text-xl font-bold text-near-black">
                {group.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-500">{group.subtitle}</p>
              <div
                className={`my-5 border-t border-dashed border-zinc-200 ${
                  left ? "md:ml-auto" : ""
                }`}
              />
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 ${
                      left ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                        on ? "bg-orange text-white" : "bg-orange/10 text-orange"
                      }`}
                    >
                      <ServiceIcon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-near-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Center brand badge bridging the two portals */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <BrandBadge className="h-24 w-24" />
      </div>
    </div>
  );
}
