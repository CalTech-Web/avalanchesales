import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { solutionSections, strategySessionReview } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "Exclusive customer acquisition, purchase intent intelligence, real-time opportunity delivery, CRM and sales automation, revenue intelligence, and AI marketing solutions built to help your business grow.",
  path: "/solutions/",
});

export default function SolutionsPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <SectionHeading
                as="h1"
                align="left"
                eyebrow="Solutions"
                title="Customer Acquisition Solutions Built to Help Your Business Grow"
                description="Stop chasing customers. Start connecting with buyers."
              />
              <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
                <p>
                  Finding new customers consistently is one of the biggest
                  challenges facing small and medium-sized businesses. Many
                  business owners know they need more opportunities but don't
                  have the time, resources, or expertise to manage complex
                  marketing campaigns, advertising platforms, and sales
                  systems.
                </p>
                <p>
                  Avalanche Sales provides a simple solution. We help
                  businesses connect with qualified prospects who are actively
                  looking for their products and services through exclusive
                  customer acquisition solutions powered by advanced data
                  intelligence, automation, and proven sales strategies.
                </p>
                <p className="font-semibold text-near-black">
                  No marketing department required. No complicated systems to
                  manage. No guessing if your advertising is working. Just
                  qualified opportunities delivered directly to your business.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-full">
              <Image
                src="/images/products/data-leads-image.jpg"
                alt="Sales professional reviewing purchase intent data and analytics"
                width={700}
                height={467}
                className="h-auto w-full rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution sections */}
      <section className="bg-zinc-50 py-8">
        <div className="mx-auto max-w-5xl space-y-6 px-4 sm:px-6 lg:px-8">
          {solutionSections.map((solution, index) => (
            <div
              key={solution.id}
              id={solution.id}
              className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-8 sm:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wide text-orange-text">
                    {`0${index + 1}`}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-near-black sm:text-3xl">
                    {solution.title}
                  </h2>
                  <p className="mt-2 text-lg font-semibold text-orange-text">
                    {solution.headline}
                  </p>
                  <div className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
                    {solution.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-near-black">
                    Benefits
                  </p>
                  <ul className="mt-4 space-y-3">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                          <ServiceIcon name="check" className="h-3 w-3" />
                        </span>
                        <span className="text-sm leading-6 text-zinc-700">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Built for business owners */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative order-last mx-auto w-full max-w-md lg:order-first lg:max-w-full">
              <Image
                src="/images/products/avalanche-service-image.png"
                alt="Avalanche Sales team member supporting a business owner"
                width={700}
                height={467}
                className="h-auto w-full rounded-2xl object-cover shadow-md"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
                Built For Business Owners Who Want Growth Without The
                Complexity
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-zinc-600">
                <p>
                  You didn't start your business to become a marketing
                  expert. You started it to serve customers, provide value,
                  and build something successful.
                </p>
                <p>
                  Avalanche Sales gives you access to the customer
                  acquisition systems, data intelligence, and sales
                  opportunities needed to grow, without the cost and
                  complexity of building everything internally.
                </p>
                <p className="font-semibold text-near-black">
                  We become an extension of your business growth strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-text py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready To Find More Customers?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Schedule your free customer acquisition strategy session. Let's
              discuss your business, your goals, and the opportunities available
              in your market.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white/10 p-8">
            <p className="text-base font-semibold">
              During your complimentary strategy session, we'll review:
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
              No pressure. No long-term commitments. Just a conversation about
              how we can help your business grow.
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
