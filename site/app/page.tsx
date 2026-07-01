import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import {
  caseStudies,
  company,
  differentiators,
  leadOptions,
  outsourcingValue,
  platforms,
  processStages,
  stats,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
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
            <p className="inline-block rounded-full bg-orange/10 px-4 py-1.5 text-sm font-semibold text-orange">
              {company.secondaryTagline}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-near-black sm:text-5xl">
              Exclusive Leads. Real Customers. Predictable Growth.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-zinc-600">
              Since 1999, our team has delivered AI validated, pay-per-lead
              customer acquisition across Google, LinkedIn, Facebook,
              Instagram, YouTube, and Bing, exclusive to your business, never
              shared, never resold, with no long-term contracts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/schedule-call-today/">
                Schedule A Call Today!
              </CtaButton>
              <CtaButton href="/services/" variant="outline">
                Explore Our Services
              </CtaButton>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <Image
              src="/images/products/avalanche-web-lady.png"
              alt="Avalanche Sales lead generation specialist"
              width={483}
              height={480}
              priority
              className="mx-auto h-auto w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-near-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-orange sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Options */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Lead Options"
            title="Choose the Lead Flow That Fits Your Business"
            description="Three exclusive ways to fuel your pipeline, every option built around real, AI validated buyers, never shared or resold."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {leadOptions.map((option) => (
              <div
                key={option.title}
                className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-near-black">
                    {option.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {option.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {option.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-zinc-700"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    Best for, {option.bestFor}
                  </p>
                  <CtaButton href="/schedule-call-today/" className="mt-6 w-full">
                    {option.cta}
                  </CtaButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Methodology"
            title="Attract, Engage, Convert"
            description="A focused, AI driven methodology that turns the right audience into predictable revenue."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {processStages.map((stage) => (
              <div key={stage.title} className="text-center">
                <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-orange/8">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-md ring-4 ring-white">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-orange">
                  {stage.stage}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-near-black">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Multi-Channel Reach"
            title="Platforms We Manage"
            description="One engagement, every major channel, all working together to fill your pipeline."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6"
              >
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    src={platform.icon}
                    alt={platform.name}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-near-black">{platform.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-orange">
                    {platform.category}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {platform.reach}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Outsource */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Outsource"
            title="A Smarter Way to Grow Your Sales Pipeline"
            description="Our success is intrinsically linked to the success of our clients. Our earnings are tied to the revenue we generate for your business."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {outsourcingValue.map((item) => (
              <div key={item.title} className="rounded-xl bg-zinc-50 p-6">
                <h3 className="font-bold text-near-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-near-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Key Differentiators"
            title="What Makes Avalanche Sales Different"
            description="The combination of exclusivity, speed, and AI validation that keeps client pipelines full."
            light
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-orange" />
                <p className="text-sm leading-6 text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Results Across Every Industry We Serve"
            description="A look at the kind of growth our exclusive lead programs are built to produce."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.company}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
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
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange">
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
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    Timeline, {study.timeline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready for Predictable, Exclusive Lead Flow?
          </h2>
          <p className="mt-4 text-lg leading-7 text-orange-50">
            Book a free, no obligation 30 minute discovery call and see how
            fast we can launch your campaign.
          </p>
          <div className="mt-8">
            <CtaButton href="/schedule-call-today/" variant="white">
              Schedule My Free Call
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
