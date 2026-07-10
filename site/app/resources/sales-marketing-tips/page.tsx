import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sales & Marketing Tips",
  description:
    "Practical advice for business growth. Strategies to help business owners improve customer communication, increase conversions, and build stronger sales processes.",
  path: "/resources/sales-marketing-tips/",
});

const tips = [
  "Improve customer communication",
  "Increase conversions",
  "Build stronger sales processes",
  "Understand customer behavior",
  "Make smarter growth decisions",
];

export default function SalesMarketingTipsPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <SectionHeading
                as="h1"
                align="left"
                eyebrow="Sales & Marketing Tips"
                title="Sales & Marketing Tips"
                description="Practical advice for business growth."
              />
              <p className="mt-8 text-base leading-7 text-zinc-600">
                You should not have to become a marketing expert to grow your
                business. Our sales and marketing resources provide practical
                strategies to help business owners:
              </p>
              <ul className="mt-6 space-y-3">
                {tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                      <ServiceIcon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-near-black">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-full">
              <Image
                src="/images/gallery/case-study-saas.jpg"
                alt="Team celebrating a successful sales and marketing result"
                width={700}
                height={467}
                className="h-auto w-full rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-text py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Stay Ahead. Grow Smarter.
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Avalanche Sales is committed to helping businesses navigate the
            changing world of customer acquisition with insights, strategies,
            and practical guidance designed to help your business generate more
            opportunities and achieve predictable growth.
          </p>
          <div className="mt-8">
            <CtaButton href="/schedule-call-today/" variant="white">
              Schedule Your FREE Strategy Session
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
