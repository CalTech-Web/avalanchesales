"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, type NavItem } from "@/lib/data";

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/";
  return pathname === item.href || pathname.startsWith(item.href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Lock body scroll while the mobile overlay is open. Every nav link inside
  // the overlay closes it on tap, so route changes are handled there.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/logos/avalanche-logo-800x400.png"
            alt="Avalanche Sales"
            width={800}
            height={400}
            priority
            className="h-11 w-auto sm:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {navLinks.map((item) => {
            const active = isActive(pathname, item);
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors hover:text-orange-text ${
                    active ? "text-orange-text" : "text-near-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup="true"
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-orange-text group-focus-within:text-orange-text ${
                    active ? "text-orange-text" : "text-near-black"
                  }`}
                >
                  {item.label}
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="w-72 rounded-xl border border-zinc-100 bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-near-black transition-colors hover:bg-zinc-50 hover:text-orange-text"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA (surfaced at md, nav still hidden until lg) */}
        <div className="hidden items-center gap-4 md:flex lg:gap-5">
          {/* Login: destination not wired up yet */}
          <span className="hidden cursor-pointer text-sm font-semibold text-near-black transition-colors hover:text-orange-text lg:inline">
            Login
          </span>
          <Link
            href="/schedule-call-today/"
            className="rounded-md bg-orange-text px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#933f07]"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative flex items-center justify-center p-2.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative flex h-6 w-7 flex-col items-center justify-center gap-1.5">
            <span
              className={`h-0.5 w-7 bg-near-black transition-transform duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-7 bg-near-black transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-7 bg-near-black transition-transform duration-200 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {open && (
        <div className="fixed inset-x-0 top-[57px] bottom-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-near-black/40"
            onClick={closeMenu}
          />
          <div className="absolute inset-x-0 top-0 bottom-0 overflow-y-auto bg-white px-4 pb-10 pt-4 sm:px-6">
            <nav className="flex flex-col">
              {navLinks.map((item) => {
                const active = isActive(pathname, item);
                if (!item.children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`border-b border-zinc-100 py-3 text-base font-medium ${
                        active ? "text-orange-text" : "text-near-black"
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  );
                }
                const isExpanded = expanded === item.label;
                return (
                  <div key={item.href} className="border-b border-zinc-100">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex-1 py-3 text-base font-medium ${
                          active ? "text-orange-text" : "text-near-black"
                        }`}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={isExpanded}
                        className="flex h-11 w-11 items-center justify-center text-near-black"
                        onClick={() =>
                          setExpanded((cur) => (cur === item.label ? null : item.label))
                        }
                      >
                        <svg
                          className={`h-5 w-5 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    {isExpanded && (
                      <ul className="pb-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2.5 pl-4 text-sm text-zinc-600"
                              onClick={closeMenu}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/schedule-call-today/"
                className="rounded-md bg-orange-text px-5 py-3 text-center text-base font-semibold text-white"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
