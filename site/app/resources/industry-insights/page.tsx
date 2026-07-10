import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Industry Insights",
  description:
    "Practical knowledge to help growing businesses acquire more customers, including customer acquisition trends, digital marketing changes, and sales optimization strategies.",
  path: "/resources/industry-insights/",
});

const topics = [
  {
    title: "Customer Acquisition Strategies",
    intro:
      "Learn how successful businesses create repeatable systems for generating qualified customer opportunities.",
    items: [
      "Building predictable sales pipelines",
      "Improving customer acquisition costs",
      "Increasing conversion rates",
      "Creating better follow-up processes",
    ],
  },
  {
    title: "Digital Marketing Trends",
    intro: "The way customers find businesses continues to evolve.",
    items: [
      "Search behavior",
      "Online advertising changes",
      "Consumer buying patterns",
      "Marketing strategies that create results",
    ],
  },
  {
    title: "Sales Performance",
    intro: "Generating opportunities is only part of the equation.",
    items: [
      "Faster response times",
      "Better sales conversations",
      "Improved follow-up",
      "Increasing close rates",
    ],
  },
  {
    title: "Industry-Specific Growth Insights",
    intro:
      "Different industries face different challenges. Future insights will include customer acquisition strategies for:",
    items: [
      "Home services",
      "Contractors",
      "Professional services",
      "Insurance",
      "Financial services",
      "Healthcare",
      "Business services",
    ],
  },
];

export default function IndustryInsightsPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <SectionHeading
                as="h1"
                align="left"
                eyebrow="Industry Insights"
                title="Industry Insights"
                description="Practical knowledge to help growing businesses acquire more customers."
              />
              <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
                <p>
                  The marketplace is constantly changing. Customer behavior
                  evolves. Advertising platforms change. Competition
                  increases.
                </p>
                <p>
                  Successful businesses stay ahead by understanding how
                  customers discover, evaluate, and choose the companies they
                  work with.
                </p>
                <p>
                  The Avalanche Sales Industry Insights section provides
                  practical information designed specifically for business
                  owners looking to improve customer acquisition and sales
                  growth.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-full">
              <Image
                src="/images/products/data-leads-image.jpg"
                alt="Analyzing customer acquisition data and industry trends"
                width={700}
                height={467}
                className="h-auto w-full rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-near-black sm:text-3xl">
            Topics We Cover
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <h3 className="text-lg font-bold text-near-black">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {topic.intro}
                </p>
                <ul className="mt-4 space-y-2">
                  {topic.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                        <ServiceIcon name="check" className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-6 text-zinc-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
