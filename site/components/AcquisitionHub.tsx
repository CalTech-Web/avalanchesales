"use client";

import { useState } from "react";
import ServiceIcon from "@/components/ServiceIcon";
import { BrandBadge } from "@/components/BrandMark";
import { acquisitionChannels } from "@/lib/data";

const RING = 40; // ring radius as a percentage of the square stage

function nodePosition(index: number, total: number) {
  const deg = -90 + (360 / total) * index;
  const rad = (deg * Math.PI) / 180;
  const cos = Math.cos(rad);
  return {
    left: 50 + RING * cos,
    top: 50 + RING * Math.sin(rad),
    // Which way the label reads out from its dot.
    side: cos > 0.35 ? "right" : cos < -0.35 ? "left" : "center",
  };
}

export default function AcquisitionHub() {
  const [active, setActive] = useState(0);
  const total = acquisitionChannels.length;

  return (
    <div className="mx-auto max-w-5xl">
      {/* Radial diagram (desktop) */}
      <div className="relative mx-auto hidden aspect-square max-w-lg lg:block">
        {/* Spokes */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r={RING} fill="none" stroke="#e4e4e7" strokeWidth="0.4" />
          {acquisitionChannels.map((channel, i) => {
            const { left, top } = nodePosition(i, total);
            const on = i === active;
            return (
              <line
                key={channel.label}
                x1="50"
                y1="50"
                x2={left}
                y2={top}
                stroke={on ? "#ED751C" : "#d4d4d8"}
                strokeWidth={on ? 0.9 : 0.4}
              />
            );
          })}
        </svg>

        {/* Center brand badge */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <BrandBadge className="h-28 w-28" />
        </div>

        {/* Nodes */}
        {acquisitionChannels.map((channel, i) => {
          const { left, top, side } = nodePosition(i, total);
          const on = i === active;
          return (
            <button
              key={channel.label}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={on}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <span
                className={`flex items-center gap-2.5 ${
                  side === "left"
                    ? "flex-row-reverse"
                    : side === "center"
                      ? "flex-col"
                      : "flex-row"
                }`}
              >
                <span
                  className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ring-4 transition-all ${
                    on
                      ? "scale-110 bg-orange text-white ring-orange/25"
                      : "bg-white text-orange ring-orange/15 shadow-sm"
                  }`}
                >
                  <ServiceIcon name={channel.icon} className="h-5 w-5" />
                </span>
                <span
                  className={`w-24 text-xs font-semibold leading-tight ${
                    side === "left"
                      ? "text-right"
                      : side === "center"
                        ? "text-center"
                        : "text-left"
                  } ${on ? "text-orange-text" : "text-near-black"}`}
                >
                  {channel.label}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Active caption (desktop) */}
      <p className="mx-auto mt-6 hidden max-w-xl text-center text-base leading-7 text-zinc-600 lg:block">
        <span className="font-semibold text-near-black">
          {acquisitionChannels[active].label}:{" "}
        </span>
        {acquisitionChannels[active].detail}
      </p>

      {/* Interactive grid (mobile / tablet) */}
      <div className="lg:hidden">
        <div className="mb-6 flex justify-center">
          <BrandBadge className="h-20 w-20" />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {acquisitionChannels.map((channel, i) => {
            const on = i === active;
            return (
              <button
                key={channel.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={on}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-colors ${
                  on
                    ? "border-orange bg-orange/5"
                    : "border-zinc-200 bg-white"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    on ? "bg-orange text-white" : "bg-orange/10 text-orange"
                  }`}
                >
                  <ServiceIcon name={channel.icon} className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold leading-tight text-near-black">
                  {channel.label}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-5 rounded-xl bg-zinc-50 p-5 text-center text-sm leading-6 text-zinc-600">
          <span className="font-semibold text-near-black">
            {acquisitionChannels[active].label}:{" "}
          </span>
          {acquisitionChannels[active].detail}
        </p>
      </div>
    </div>
  );
}
