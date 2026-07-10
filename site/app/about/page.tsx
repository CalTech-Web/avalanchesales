import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Your customer acquisition partner for sustainable growth. Helping businesses find more customers since 2014 with exclusive, human-verified opportunities and decades of sales experience.",
  path: "/about/",
});

const missionBenefits = [
  "Find more qualified customers",
  "Increase sales opportunities",
  "Improve revenue consistency",
  "Reduce wasted marketing expenses",
  "Focus on what they do best: running their business",
];

const struggles = [
  "Knowing where to advertise",
  "Understanding digital marketing platforms",
  "Generating consistent opportunities",
  "Following up effectively",
  "Measuring what is actually working",
];

const whyChoose = [
  {
    title: "Experience They Can Trust",
    description:
      "Decades of sales and marketing experience applied to today's customer acquisition challenges.",
    icon: "badge",
  },
  {
    title: "A Partner, Not Just A Provider",
    description:
      "A team committed to understanding your business and helping you grow.",
    icon: "handshake",
  },
  {
    title: "Simpler Customer Acquisition",
    description:
      "A straightforward process without complicated marketing systems.",
    icon: "target",
  },
  {
    title: "Better Opportunities",
    description:
      "Exclusive customer acquisition solutions designed to connect you with people actively looking for your services.",
    icon: "search",
  },
  {
    title: "Predictable Growth",
    description:
      "A repeatable approach to generating new opportunities and increasing revenue.",
    icon: "trending",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-text">
              About Avalanche Sales
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-near-black sm:text-5xl">
              Your Customer Acquisition Partner for Sustainable Growth
            </h1>
            <p className="mt-4 text-lg font-semibold text-orange-text">
              Helping Businesses Find More Customers Since 2014
            </p>
            <div className="mt-6 space-y-4 text-base leading-7 text-zinc-600">
              <p>
                Growing a business requires more than having a great product or
                providing excellent service. It requires a consistent ability to
                connect with new customers.
              </p>
              <p>
                For many small and medium-sized businesses, generating new
                opportunities has become increasingly difficult. Marketing
                platforms are constantly changing, advertising costs continue to
                rise, and many business owners simply don't have the time or
                resources to become marketing experts.
              </p>
            </div>
            <div className="mt-8">
              <CtaButton href="/schedule-call-today/">Get Started</CtaButton>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <Image
              src="/images/gallery/sales-team-photo.jpg"
              alt="Avalanche Sales team"
              width={700}
              height={500}
              className="h-auto w-full rounded-xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Mission intro */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-text">
            That's where Avalanche Sales was created.
          </p>
          <p className="mt-4 text-2xl font-semibold leading-9 text-near-black">
            Our mission is simple: help businesses consistently connect with
            qualified customers without the complexity, cost, and uncertainty of
            traditional marketing.
          </p>
          <p className="mt-6 text-base leading-7 text-zinc-600">
            We partner with businesses that want to grow by providing exclusive
            customer acquisition solutions designed to create real sales
            opportunities and predictable revenue.
          </p>
        </div>
      </section>

      {/* Growth partner */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="More Than A Lead Provider"
            title="A Growth Partner"
            description="Your success is our success."
          />
          <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
            <p>
              At Avalanche Sales, we believe customer acquisition should be a
              partnership, not just a transaction. We don't view ourselves as
              another company selling information or advertising services. We see
              ourselves as an extension of your business growth team.
            </p>
            <p>
              Our goal is to understand your business, your customers, and your
              growth objectives so we can help deliver opportunities that align
              with your goals.
            </p>
            <p className="font-semibold text-near-black">
              When you succeed, we succeed. That philosophy guides everything we
              do.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <SectionHeading
                align="left"
                eyebrow="Experience Built Through Decades of Sales and Marketing Evolution"
                title="Understanding How Customers Buy Has Always Been Our Focus"
              />
              <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
                <p>
                  The way businesses attract customers has changed
                  dramatically over the past two decades.
                </p>
                <p>
                  From traditional direct response marketing and outbound
                  sales to search marketing, social media, digital
                  advertising, automation, and AI-powered customer
                  acquisition, our ownership team has been involved in the
                  evolution of how businesses connect with buyers since 1999.
                </p>
                <p>
                  Over that time, we have built, managed, and optimized sales
                  and marketing systems across both consumer and business
                  markets. We've experienced firsthand what works, what
                  doesn't, and what it takes to create consistent customer
                  acquisition in an increasingly competitive marketplace.
                </p>
                <p className="font-semibold text-near-black">
                  Avalanche Sales was created from that experience.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <Image
                src="/images/gallery/how-it-started.png"
                alt="How Avalanche Sales started: an early computer running the first Avalanche system"
                width={500}
                height={483}
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why we created */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why We Created Avalanche Sales"
            title="Businesses Deserve Better Options for Growth"
          />
          <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Many small businesses face the same challenge: they need more
              customers, but they don't have the resources to build an entire
              marketing department. They struggle with:
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {struggles.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl border border-zinc-200 bg-zinc-50 p-4"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                  <ServiceIcon name="check" className="h-3 w-3" />
                </span>
                <span className="text-sm leading-6 text-zinc-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-7 text-zinc-600">
            We created Avalanche Sales to solve that problem. Our purpose is to
            give businesses access to the customer acquisition systems, data
            intelligence, and sales opportunities typically available only to
            larger organizations, without requiring the cost, complexity, or
            learning curve.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Mission"
            title="Simplifying Customer Acquisition For Growing Businesses"
          />
          <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Our mission is to help businesses grow by making customer
              acquisition simple, predictable, and measurable.
            </p>
            <p>
              We believe every business owner should have access to quality
              opportunities without having to spend countless hours learning
              marketing technology or managing complicated campaigns.
            </p>
            <p className="font-semibold text-near-black">
              Avalanche Sales provides the resources and expertise needed to help
              businesses:
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {missionBenefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl border border-zinc-200 bg-white p-4"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                  <ServiceIcon name="check" className="h-3 w-3" />
                </span>
                <span className="text-sm leading-6 text-zinc-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Powered by technology */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Powered By Technology. Driven By People."
            title="The Right Combination of Innovation and Experience"
          />
          <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Technology has transformed how businesses find customers, but
              technology alone does not create success. The difference is knowing
              how to apply it.
            </p>
            <p>
              Avalanche Sales combines modern data intelligence and automation
              with decades of sales and marketing experience to create customer
              acquisition solutions designed around real business outcomes.
            </p>
            <p className="font-semibold text-near-black">
              Behind every opportunity is a commitment to quality, accuracy, and
              helping businesses succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Why businesses choose us */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Businesses Choose Avalanche Sales"
            title="Businesses Partner With Us Because They Want"
          />
          <div className="mt-14 flex flex-wrap justify-center gap-8">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="w-full rounded-xl border border-zinc-200 bg-white p-6 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <ServiceIcon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-near-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's grow together */}
      <section className="bg-orange-text py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Let's Grow Together
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Your Next Customer Is Already Looking For You
          </h2>
          <div className="mt-4 space-y-3 text-lg leading-7 text-white/90">
            <p>
              The challenge isn't whether customers exist. The challenge is
              connecting with them at the right time.
            </p>
            <p>
              Avalanche Sales helps businesses bridge that gap by delivering
              exclusive customer acquisition opportunities designed to help you
              grow.
            </p>
          </div>
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
