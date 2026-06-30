"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { company, nav } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logos/avalanche-logo-800x400.png"
            alt="Avalanche Sales"
            width={200}
            height={100}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-near-black transition-colors hover:text-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={company.phoneHref}
            className="text-sm font-semibold text-near-black transition-colors hover:text-orange"
          >
            {company.phone}
          </a>
          <Link
            href="/schedule-call-today/"
            className="rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-dark"
          >
            Schedule A Call Today!
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-7 bg-near-black" />
          <span className="h-0.5 w-7 bg-near-black" />
          <span className="h-0.5 w-7 bg-near-black" />
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-100 bg-white px-4 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-near-black"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={company.phoneHref} className="text-base font-semibold text-near-black">
              {company.phone}
            </a>
            <Link
              href="/schedule-call-today/"
              className="rounded-md bg-orange px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Schedule A Call Today!
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
