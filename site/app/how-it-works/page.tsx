import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { howItWorksFaq, howItWorksSteps, whyChooseChecklist } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How It Works",
  description:
    "See how Avalanche Sales simplifies customer acquisition into a proven five-step process that helps businesses consistently connect with qualified buyers.",
  path: "/how-it-works/",
});

export default function HowItWorksPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="How It Works"
            title="More Customers. Less Guesswork."
          />
          <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Growing your business shouldn't require hiring a marketing
              department, learning complicated advertising platforms, or
              spending thousands of dollars every month hoping your marketing
              works.
            </p>
            <p>
              At Avalanche Sales, we've simplified customer acquisition into a
              proven process that helps businesses consistently connect with
              people who are actively looking for the products and services they
              offer.
            </p>
            <p className="font-semibold text-near-black">
              No confusing technology. No expensive marketing retainers. No
              long-term contracts. Just a straightforward system designed to
              help you generate more opportunities and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
          {howItWorksSteps.map((step, index) => (
            <div
              key={step.step}
              className="rounded-2xl border border-zinc-200 bg-white p-8"
            >
              <div className="flex items-start gap-5">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange text-lg font-extrabold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange-text">
                    {step.step}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-near-black">
                    {step.title}
                  </h2>
                  <div className="mt-3 space-y-3 text-base leading-7 text-zinc-600">
                    {step.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why businesses choose us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Businesses Choose Avalanche Sales" />
          <div className="mt-6 space-y-4 text-center text-base leading-7 text-zinc-600">
            <p>
              Business owners choose Avalanche Sales because we remove the
              uncertainty from customer acquisition.
            </p>
            <p>
              Instead of paying monthly retainers to marketing agencies or
              investing thousands of dollars into advertising campaigns that may
              or may not produce results, you pay only for qualified
              opportunities delivered directly to your business.
            </p>
          </div>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {whyChooseChecklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4"
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                  <ServiceIcon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-near-black">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10 space-y-4">
            {howItWorksFaq.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-zinc-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-near-black">
                  {item.question}
                  <span className="text-orange-text transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-text py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-4 text-lg leading-7 text-white/90">
            The hardest part of growing a business shouldn't be finding your
            next customer. Schedule a complimentary strategy consultation today
            and discover how Avalanche Sales can help you generate more
            opportunities, close more sales, and build predictable revenue,
            without the cost and complexity of traditional marketing.
          </p>
          <div className="mt-8">
            <CtaButton href="/schedule-call-today/" variant="white">
              Start Growing Today
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
