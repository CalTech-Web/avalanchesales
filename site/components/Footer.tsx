import Link from "next/link";
import { company, footerInfoLinks, footerQuickLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-near-black text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Avalanche<span className="text-orange">Sales</span>
          </span>
          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
            {company.tagline} A US based outsourced sales and marketing
            agency providing exclusive, pay-per-lead customer acquisition
            since 1999.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-zinc-400 hover:text-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Information
          </h3>
          <ul className="mt-4 space-y-3">
            {footerInfoLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-zinc-400 hover:text-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-sm text-zinc-400">
            <a href={company.phoneHref} className="block hover:text-orange">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="block hover:text-orange">
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; 2019 to 2026 Avalanche Marketing Agency, LLC All Rights
            Reserved
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-orange"
            >
              Caltechweb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
