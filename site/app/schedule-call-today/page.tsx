import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Schedule A Call Today",
  description:
    "Book a free, no obligation 30 minute discovery call with Avalanche Sales and see how fast we can launch your exclusive lead campaign.",
};

const reasons = [
  "Free, no obligation 30 minute discovery call",
  "Campaigns can launch in 3 to 7 days",
  "Leads are 100% exclusive, never shared or resold",
  "No long-term contracts, pay-per-lead options available",
];

export default function ScheduleCallPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange">
              Schedule A Call Today
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-near-black sm:text-5xl">
              Book Your Free Discovery Call
            </h1>
            <p className="mt-6 text-lg leading-7 text-zinc-600">
              Tell us about your business below and our team will reach out
              to schedule a free, no obligation 30 minute discovery call to
              map out your exclusive lead generation plan.
            </p>

            <ul className="mt-8 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange" />
                  <p className="text-sm leading-6 text-zinc-700">{reason}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange text-lg font-extrabold text-white">
                A
              </div>
              <div>
                <p className="text-sm font-semibold text-near-black">
                  Prefer email?
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-orange hover:text-orange-dark"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 p-6 sm:p-8">
            <ContactForm submitLabel="Schedule My Free Call" />
          </div>
        </div>
      </div>
    </section>
  );
}
