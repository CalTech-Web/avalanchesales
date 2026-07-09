import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { resourceCards, strategySessionReview } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "Practical information, insights, and tools to help business owners understand customer acquisition, improve sales, and build predictable revenue.",
  path: "/resources/",
});

export default function ResourcesPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Resources"
            title="Your Guide to Better Customer Acquisition"
            description="Learn how growing businesses find more customers, improve sales, and build predictable revenue."
          />
          <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Running a business is challenging enough without trying to keep up
              with constantly changing marketing platforms, advertising
              strategies, and sales technology.
            </p>
            <p>
              The Avalanche Sales Resource Center provides practical
              information, insights, and tools designed to help business owners
              understand customer acquisition and make better decisions about
              growing their business.
            </p>
            <p>
              Whether you're looking for answers about our process, learning how
              customer acquisition works, or exploring strategies to improve
              your sales pipeline, our resources are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {resourceCards.map((card) => (
              <div
                key={card.title}
                className="flex w-full flex-col rounded-2xl border border-zinc-200 bg-white p-8 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <ServiceIcon name={card.icon} className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-xl font-bold text-near-black">
                  {card.title}
                </h2>
                <p className="mt-1 text-sm font-semibold text-orange-text">
                  {card.headline}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {card.description}
                </p>
                <ul className="mt-4 flex-1 space-y-2">
                  {card.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 text-sm text-zinc-700"
                    >
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                        <ServiceIcon name="check" className="h-2.5 w-2.5" />
                      </span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-orange-text hover:gap-2"
                >
                  {card.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-text py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Need Help Growing Your Business?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Get a free customer acquisition strategy session. Every business
              is different.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white/10 p-8">
            <p className="text-base font-semibold">
              During your complimentary strategy session, we'll discuss:
            </p>
            <ul className="mt-4 space-y-3">
              {strategySessionReview.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                    <ServiceIcon name="check" className="h-3 w-3" />
                  </span>
                  <span className="text-sm leading-6 text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/80">
              No obligation. No pressure. Just a conversation about growing your
              business.
            </p>
          </div>
          <div className="mt-10 text-center">
            <CtaButton href="/schedule-call-today/" variant="white">
              Schedule Your FREE Strategy Session Today
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
