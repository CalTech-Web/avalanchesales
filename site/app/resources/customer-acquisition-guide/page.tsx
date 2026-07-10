import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Customer Acquisition Guide",
  description:
    "The business owner's guide to customer acquisition. Learn how growing businesses generate more customers without the complexity of traditional marketing.",
  path: "/resources/customer-acquisition-guide/",
});

const guideSections = [
  {
    title: "Why Finding Customers Has Become More Difficult",
    body: [
      "Consumer behavior has changed. Customers research online, compare options, and often decide who they want to work with before ever contacting a business.",
      "Businesses that understand this process have a competitive advantage.",
    ],
  },
  {
    title: "The Difference Between Leads And Real Opportunities",
    body: [
      "Not all inquiries are equal. A contact list, a name, or a phone number does not guarantee a customer.",
      "Successful businesses focus on identifying prospects who have demonstrated interest and are more likely to purchase.",
    ],
  },
  {
    title: "Why Purchase Intent Matters",
    body: [
      "The best prospects are people who are already searching for solutions.",
      "Understanding customer intent allows businesses to spend more time talking with potential buyers and less time chasing uninterested prospects.",
    ],
  },
  {
    title: "The Importance Of Speed-To-Contact",
    body: [
      "When customers are actively searching, timing matters.",
      "Businesses that respond quickly often have a significant advantage over competitors who wait hours or days.",
    ],
  },
  {
    title: "Building A Predictable Customer Acquisition System",
    body: [
      "Successful companies do not rely on random referrals or occasional marketing campaigns. They create repeatable systems that consistently generate opportunities.",
    ],
    list: [
      "Finding the right customers",
      "Delivering opportunities quickly",
      "Following up consistently",
      "Measuring results",
      "Improving performance",
    ],
  },
  {
    title: "Why Many Businesses Struggle With Marketing",
    body: [
      "Most business owners did not start their company because they wanted to become marketing experts. They started because they were passionate about their product or service.",
      "Avalanche Sales helps simplify customer acquisition by providing the expertise, systems, and opportunities needed to grow.",
    ],
  },
];

export default function CustomerAcquisitionGuidePage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <SectionHeading
                as="h1"
                align="left"
                eyebrow="Customer Acquisition Guide"
                title="The Business Owner's Guide To Customer Acquisition"
                description="How growing businesses generate more customers without the complexity of traditional marketing."
              />
              <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
                <p>
                  Every business owner wants the same thing: more customers,
                  more sales, and more predictable revenue.
                </p>
                <p>
                  The challenge is finding a reliable way to consistently
                  generate opportunities without wasting time and money
                  trying to figure out complicated marketing systems.
                </p>
                <p>
                  The Avalanche Sales Customer Acquisition Guide helps
                  business owners understand how modern customer acquisition
                  works and how to build a more predictable growth strategy.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <Image
                src="/images/gallery/avalanche-web-lady-flip.png"
                alt="Avalanche Sales representative pointing toward the guide"
                width={483}
                height={1000}
                className="h-auto w-full max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-near-black sm:text-3xl">
            Inside This Guide You Will Learn
          </h2>
          <div className="mt-10 space-y-6">
            {guideSections.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <h3 className="text-lg font-bold text-near-black">
                  {section.title}
                </h3>
                <div className="mt-3 space-y-3 text-base leading-7 text-zinc-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {section.list.map((item) => (
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-text py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready To Build A Better Customer Acquisition Strategy?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Schedule a free strategy session and learn how your business can
            create a more predictable path to growth.
          </p>
          <div className="mt-8">
            <CtaButton href="/schedule-call-today/" variant="white">
              Get Your Free Customer Acquisition Guide
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
