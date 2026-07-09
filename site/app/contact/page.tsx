import ContactForm from "@/components/ContactForm";
import CtaButton from "@/components/CtaButton";
import MailIcon from "@/components/MailIcon";
import { company } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Avalanche Sales to schedule your free customer acquisition strategy session and start connecting with real buyers.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-text">
              Contact Us
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-near-black sm:text-5xl">
              Schedule Your FREE Customer Acquisition Strategy Session
            </h1>
            <p className="mt-6 text-lg leading-7 text-zinc-600">
              Tell us about your business and goals, and our team will follow
              up to discuss how we can help you connect with more qualified
              buyers and build predictable revenue.
            </p>

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

            <div className="mt-10 rounded-xl bg-zinc-50 p-6">
              <h2 className="font-bold text-near-black">
                Prefer to talk it through first?
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Book a free, no obligation 30 minute discovery call with our
                team.
              </p>
              <CtaButton href="/schedule-call-today/" className="mt-5">
                Get Started
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
