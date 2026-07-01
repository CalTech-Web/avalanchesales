import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import CtaButton from "@/components/CtaButton";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Avalanche Sales to start exclusive, AI validated lead generation for your business.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange">
              Contact Us
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-near-black sm:text-5xl">
              Let&apos;s Talk About Your Pipeline
            </h1>
            <p className="mt-6 text-lg leading-7 text-zinc-600">
              Tell us about your business and goals, and our team will follow
              up to discuss the right lead generation option for you.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${company.email}`}
                className="block text-sm font-semibold text-near-black hover:text-orange"
              >
                {company.email}
              </a>
            </div>

            <div className="mt-10 rounded-xl bg-zinc-50 p-6">
              <h2 className="font-bold text-near-black">
                Prefer to talk it through first?
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Book a free, no obligation 30 minute discovery call with our
                team.
              </p>
              <CtaButton href="/schedule-call-today/" className="mt-5">
                Schedule A Call Today!
              </CtaButton>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
