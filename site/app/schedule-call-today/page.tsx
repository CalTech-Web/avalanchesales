import ContactForm from "@/components/ContactForm";
import MailIcon from "@/components/MailIcon";
import ServiceIcon from "@/components/ServiceIcon";
import { company } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Schedule Your FREE Strategy Session",
  description:
    "Schedule your free customer acquisition strategy session with Avalanche Sales and discover how we can help your business connect with more qualified buyers.",
  path: "/schedule-call-today/",
});

const reasons = [
  "Free, no obligation customer acquisition strategy session",
  "Exclusive opportunities, never shared, recycled, or resold",
  "Human-verified quality with real-time delivery",
  "No setup fees, no monthly contracts, no advertising costs",
];

export default function ScheduleCallPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-text">
              Get Started
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-near-black sm:text-5xl">
              Schedule Your FREE Customer Acquisition Strategy Session
            </h1>
            <p className="mt-6 text-lg leading-7 text-zinc-600">
              Tell us about your business below and our team will reach out to
              schedule a complimentary strategy session. We'll discuss your
              goals, your market, and how Avalanche Sales can help you generate
              more qualified opportunities.
            </p>

            <ul className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                    <ServiceIcon name="check" className="h-3.5 w-3.5" />
                  </div>
                  <p className="pt-0.5 text-sm leading-6 text-zinc-700">{reason}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange text-white">
                <MailIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-near-black">
                  Prefer email?
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-orange-text hover:text-orange-dark"
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
