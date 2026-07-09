"use client";

import { useState } from "react";
import { verificationStages, verificationOutcome } from "@/lib/data";

// Each stage sits a little narrower than the one above it, forming the funnel.
const WIDTHS = ["100%", "88%", "76%", "64%", "52%"];

export default function VerificationFunnel() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="space-y-3">
        {verificationStages.map((stage, i) => {
          const on = i === active;
          return (
            <div
              key={stage.title}
              className="lg:grid lg:grid-cols-[1fr_220px] lg:items-center lg:gap-x-8"
            >
              {/* Funnel band */}
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={on}
                style={{ width: WIDTHS[i] }}
                className={`mx-auto flex h-16 items-center justify-center rounded-lg px-4 text-center transition-all ${
                  on
                    ? "bg-gradient-to-br from-orange to-orange-dark text-white shadow-md"
                    : "bg-zinc-100 text-near-black hover:bg-orange/10"
                }`}
              >
                <span className="text-sm font-semibold leading-tight sm:text-base">
                  {stage.title}
                </span>
              </button>

              {/* Callout */}
              <div
                className={`mt-2 pl-4 text-left lg:mt-0 lg:border-l-2 lg:border-dashed lg:pl-6 ${
                  on ? "lg:border-orange" : "lg:border-zinc-200"
                }`}
              >
                <p
                  className={`text-sm font-bold ${
                    on ? "text-orange-text" : "text-near-black"
                  }`}
                >
                  {stage.tag}
                </p>
                <p className="mt-0.5 text-xs leading-5 text-zinc-500">
                  {stage.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Funnel outcome */}
      <div className="mt-3 lg:grid lg:grid-cols-[1fr_220px] lg:items-center lg:gap-x-8">
        <div
          style={{ width: "40%" }}
          className="mx-auto flex h-16 items-center justify-center rounded-lg bg-near-black px-4 text-center shadow-lg"
        >
          <span className="text-sm font-bold text-white sm:text-base">
            {verificationOutcome}
          </span>
        </div>
        <div aria-hidden="true" className="hidden lg:block" />
      </div>
    </div>
  );
}
