import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import HeroDashboard from "@/components/HeroDashboard";
import SectionDecor from "@/components/SectionDecor";
import DashStat from "@/components/DashStat";
import AcquisitionHub from "@/components/AcquisitionHub";
import VerificationFunnel from "@/components/VerificationFunnel";
import PortalsShowcase from "@/components/PortalsShowcase";
import {
  caseStudies,
  caseStudyDisclosure,
  dataAdvantages,
  growthMethod,
  homeStats,
  industriesGrid,
  multiIndustryList,
  noFeeBenefits,
  solutionCards,
  whyAvalanche,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden overflow-x-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-orange/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-blue-accent/10 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="inline-block rounded-full bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-text sm:text-sm">
              Human Verified. AI Empowered. Results Driven.
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-near-black sm:text-5xl">
              Exclusive Sales Opportunities. Real Buyers. Predictable Growth.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-zinc-600">
              AI-powered customer acquisition delivering exclusive,
              human-verified buying opportunities directly to your business. No
              shared data. No recycled prospects. No long-term contracts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/schedule-call-today/">Get Started</CtaButton>
              <CtaButton href="/industries/" variant="outline">
                View Industries
              </CtaButton>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <HeroDashboard />
          </div>
        </div>
      </section>

      {/* 2. Hero call-out banner */}
      <section className="relative overflow-hidden bg-orange-text py-16 text-white">
        <SectionDecor variant="dark" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Why Businesses Choose Avalanche Sales
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {noFeeBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex w-full flex-col items-center gap-3 rounded-xl bg-white/10 p-6 text-center sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(20%-0.8rem)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-xl font-extrabold">
                  NO
                </span>
                <p className="text-base font-semibold leading-tight">
                  {benefit.replace(/^NO /, "")}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-12 max-w-3xl text-center">
            <DashStat
              className="absolute right-full top-4 mr-8 hidden xl:block"
              label="Leads Generated"
              value="5,000+"
              unit="/ mo"
              data={[3, 4, 3, 5, 6, 7, 9]}
              type="bars"
            />
            <DashStat
              className="absolute left-full top-24 ml-8 hidden xl:block"
              label="Client Sales, Proj."
              value="$1M+"
              unit="/ mo"
              data={[2, 3, 4, 4, 6, 8, 11]}
              type="line"
            />
            <p className="text-2xl font-bold">
              Simply Pay for Qualified Sales Opportunities
            </p>
            <p className="mt-4 text-base leading-7 text-white/90">
              Unlike traditional marketing agencies that charge thousands of
              dollars in setup fees, monthly retainers, and advertising budgets
              with no guarantee of results, Avalanche Sales operates on a simple
              performance model.
            </p>
            <p className="mt-4 text-base leading-7 text-white/90">
              We invest in the technology, AI, audience intelligence, and
              acquisition systems to identify customers who are actively
              searching for your products and services. You simply pay for
              exclusive, human-verified sales opportunities delivered directly
              to your business. No retainers. No agency fees. No long-term
              commitments. No paying for clicks that never become customers.
              Just qualified buying opportunities designed to help your business
              grow.
            </p>
            <p className="mt-6 text-xl font-bold">
              Exclusive Opportunities. Real Buyers. Predictable Growth.
            </p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/90">
              Human Verified. AI Empowered. Results Driven.
            </p>
            <div className="mt-8">
              <CtaButton href="/schedule-call-today/" variant="white">
                Schedule Your Strategy Call
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Customer Acquisition Partner overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Customer Acquisition Partner"
            title="Your AI-Powered Customer Acquisition Partner"
          />
          <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-600">
            <p>
              Generating consistent, qualified opportunities has become one of
              the biggest challenges facing modern businesses. At Avalanche
              Sales, we solved that problem.
            </p>
            <p>
              We partner with businesses across multiple industries to deliver
              AI-powered customer acquisition through exclusive, intent-based
              data and lead generation. Our proprietary acquisition strategies
              combine behavioral intelligence, predictive analytics, search
              intent, digital advertising, and human verification to identify
              consumers and businesses actively searching for your products and
              services.
            </p>
            <p>
              Unlike traditional lead providers, our focus isn't selling the
              same lead multiple times. Our focus is to help your company
              acquire customers more efficiently, close more sales, and build
              predictable revenue.
            </p>
            <p className="font-semibold text-near-black">
              When our clients grow, we grow. That's what makes us a true sales
              partner, not simply another lead vendor.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Avalanche Growth Method */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="The Avalanche Growth Method"
            description="Five steps that turn high-intent buyers into predictable, sustainable revenue growth."
          />
          <div className="mt-14 flex flex-wrap justify-center gap-8">
            {growthMethod.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col rounded-xl border border-zinc-200 bg-white p-6 sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.334rem)] lg:w-[calc(20%-1.6rem)]"
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

      {/* 5. Why Our Data Performs Better */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-text">
                Human Intelligence + Artificial Intelligence
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
                Why Our Data Performs Better
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-zinc-600">
                <p>
                  Our acquisition platform continuously analyzes billions of
                  online data points to identify consumers and businesses
                  actively entering the buying cycle.
                </p>
                <p>
                  Using AI-powered audience intelligence, search intent
                  analysis, behavioral modeling, and predictive algorithms,
                  we're able to locate prospects demonstrating genuine purchase
                  intent before your competitors.
                </p>
                <p>
                  Every opportunity is then validated using automated
                  verification and human quality control before delivery. The
                  result is higher-quality prospects, lower acquisition costs,
                  and stronger conversion rates.
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {dataAdvantages.map((advantage) => (
                <li
                  key={advantage}
                  className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                    <ServiceIcon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-base font-semibold text-near-black">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5b. Acquisition Channels hub */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Acquisition Channels"
            title="Every Channel. One Acquisition Engine."
            description="We pull high-intent buyers from every corner of the market and route them through a single, exclusive pipeline built for your business."
          />
          <div className="mt-14">
            <AcquisitionHub />
          </div>
        </div>
      </section>

      {/* 5c. Lead Verification funnel */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Verify"
            title="Every Lead Runs the Verification Gauntlet"
            description="Before an opportunity ever reaches you, it passes through five layers of automated and human verification. Select each stage to see what we check."
          />
          <div className="mt-14">
            <VerificationFunnel />
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Customer Acquisition Across Every Industry"
            description="Explore how we help businesses like yours connect with qualified buyers."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {industriesGrid.map((industry) => (
              <Link
                key={industry.label}
                href={industry.href}
                className="flex flex-col items-center gap-3 rounded-xl border border-zinc-200 bg-white p-6 text-center transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <ServiceIcon name={industry.icon} className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold text-near-black">
                  {industry.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CtaButton href="/industries/" variant="outline">
              View All Industries
            </CtaButton>
          </div>
        </div>
      </section>

      {/* 7. Solutions */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solutions"
            title="AI-Powered Customer Acquisition Solutions"
            description="We combine advanced artificial intelligence, real-time buying signals, and human-verified data to help businesses acquire more qualified customers with greater efficiency, improve conversion rates, and create predictable revenue growth."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <ServiceIcon name={card.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-near-black">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">
                  {card.summary}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange-text hover:gap-2"
                >
                  Learn More
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-zinc-50 p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-text">
              Our Commitment
            </p>
            <p className="mt-3 text-lg leading-8 text-zinc-700">
              Every solution we provide is built around one objective: helping
              your business acquire more customers, generate more revenue, and
              achieve predictable, long-term growth through the power of AI,
              data intelligence, and proven customer acquisition strategies.
            </p>
          </div>
        </div>
      </section>

      {/* 7b. Vendor & Client portals */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platform Access"
            title="Two Portals. One Connected Platform."
            description="Whether you send us traffic or receive our exclusive leads, everything you need lives in one place."
          />
          <div className="mt-14">
            <PortalsShowcase />
          </div>
        </div>
      </section>

      {/* 8. Why Avalanche Sales + stats */}
      <section className="bg-white pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Avalanche Sales" title="Built to Deliver Real Buyers" />
          <div className="mt-14 flex flex-wrap justify-center gap-8">
            {whyAvalanche.map((item) => (
              <div
                key={item.title}
                className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-6 sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.334rem)] lg:w-[calc(20%-1.6rem)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <ServiceIcon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 min-h-[3rem] font-bold text-near-black">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-text">
              Multi-Industry Expertise
            </p>
            <p className="mx-auto mt-3 max-w-4xl text-base leading-8 text-zinc-600">
              {multiIndustryList.join(" • ")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-near-black py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 px-4 sm:px-6 lg:px-8">
          {homeStats.map((stat) => (
            <div
              key={stat.label}
              className="w-[calc(50%-1rem)] text-center md:w-[calc(33.333%-1.334rem)] lg:w-[calc(20%-1.6rem)]"
            >
              <p className="text-2xl font-extrabold text-orange sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Testimonials / Results */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Results"
            title="Real Companies. Real Growth."
            description="A look at the kind of revenue growth and ROI our exclusive customer acquisition programs are built to produce."
          />
          <p className="mt-4 text-center text-sm italic text-zinc-500">
            {caseStudyDisclosure}
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.company}
                className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={study.image}
                    alt={study.industry}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-text">
                    {study.industry}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-near-black">
                    {study.company}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {study.challenge}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {study.results.map((result) => (
                      <li
                        key={result}
                        className="text-sm font-medium text-near-black"
                      >
                        {result}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Timeline, {study.timeline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="relative overflow-hidden bg-orange-text py-20 text-white">
        <SectionDecor variant="dark" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Stop Chasing Prospects. Start Talking to Buyers.
          </h2>
          <p className="mt-4 text-lg leading-7 text-white/90">
            Schedule your free customer acquisition strategy session and
            discover how Avalanche Sales can help your business grow.
          </p>
          <div className="mt-8">
            <CtaButton href="/schedule-call-today/" variant="white">
              Schedule Your Free Customer Acquisition Strategy Session
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
