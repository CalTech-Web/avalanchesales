import Image from "next/image";
import Link from "next/link";
import { company, footerColumns } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-near-black text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-6 lg:px-8">
        <div className="lg:col-span-2">
          <Image
            src="/images/logos/avalanche-logo-white.png"
            alt="Avalanche Sales"
            width={800}
            height={400}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
            Your AI-powered customer acquisition partner, delivering exclusive,
            human-verified buying opportunities that help your business grow.
          </p>
          <div className="mt-6 space-y-2 text-sm text-zinc-400">
            <a href={company.phoneHref} className="block hover:text-orange">
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email}`}
              className="block break-words hover:text-orange"
            >
              {company.email}
            </a>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              {column.heading}
            </h3>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={`${column.heading}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-zinc-400 sm:flex-row sm:px-6 lg:px-8">
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
              className="text-zinc-300 hover:text-orange"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
