import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import { company } from "@/lib/data";

const title = "Page Not Found";
const description =
  "The page you were looking for could not be found. Browse our services or get in touch with Avalanche Sales instead.";
const ogImage = "/images/logos/avalanche-logo-square-orange.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: {},
  openGraph: {
    type: "website",
    siteName: company.shortName,
    title: `${title} | ${company.shortName}`,
    description,
    images: [{ url: ogImage, width: 800, height: 800, alt: company.shortName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${company.shortName}`,
    description,
    images: [ogImage],
  },
};

export default function NotFound() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-orange">404</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-near-black sm:text-5xl">
          We could not find that page
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          The page you are looking for may have been moved or no longer
          exists. Here are a few places to pick back up.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton href="/">Back to Home</CtaButton>
          <CtaButton href="/services/" variant="outline">
            View Our Services
          </CtaButton>
          <CtaButton href="/contact/" variant="outline">
            Contact Us
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
