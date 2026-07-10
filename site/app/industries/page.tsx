import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { industryChallenges, industryGroups } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

const industryImages: Record<string, { src: string; alt: string }> = {
  "home-service-companies": {
    src: "/images/gallery/case-study-hvac.png",
    alt: "Home service technician greeting a homeowner at the front door",
  },
  "insurance-financial-services": {
    src: "/images/gallery/case-study-finance.png",
    alt: "Financial professional meeting with a client in an office",
  },
  "professional-services": {
    src: "/images/gallery/case-study-real-estate.png",
    alt: "Real estate professional handing over keys to new homeowners",
  },
  "healthcare-wellness": {
    src: "/images/gallery/case-study-healthcare.png",
    alt: "Healthcare provider greeting a patient in a medical office",
  },
  "business-commercial-services": {
    src: "/images/gallery/case-study-coaching.png",
    alt: "Business professionals shaking hands after a consultation",
  },
};

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Customer acquisition solutions built for home improvement contractors, home service companies, insurance and financial services, professional services, healthcare, automotive, and business services.",
  path: "/industries/",
});

export default function IndustriesPage() {
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
                eyebrow="Who We Help"
                title="Customer Acquisition Solutions Built for Growing Businesses"
              />
              <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
                <p>
                  Every business depends on one thing to succeed: consistently
                  acquiring new customers.
                </p>
                <p>
                  At Avalanche Sales, we partner with small and medium-sized
                  businesses that want a reliable way to generate qualified
                  sales opportunities without the expense of hiring an
                  in-house marketing department or managing complicated
                  advertising campaigns.
                </p>
                <p>
                  Whether you're looking to increase phone calls, schedule
                  more appointments, generate additional estimates, or grow
                  your customer base, our customer acquisition solutions are
                  designed to help your business achieve predictable,
                  long-term growth.
                </p>
                <p className="font-semibold text-near-black">
                  No matter your industry, our mission remains the same:
                  helping your business connect with customers who are
                  actively looking for the products and services you provide.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-full">
              <Image
                src="/images/gallery/case-study-pic-11.jpg"
                alt="Team reviewing customer acquisition opportunities across industries"
                width={700}
                height={500}
                className="h-auto w-full rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>
          <div className="mt-10 rounded-2xl bg-zinc-50 p-6">
            <h2 className="text-lg font-bold text-near-black">
              Industries We Serve
            </h2>
            <p className="mt-2 text-base leading-7 text-zinc-600">
              Our customer acquisition platform supports businesses across a
              wide range of industries throughout the United States. Whether you
              serve homeowners, consumers, businesses, or commercial clients, we
              help connect you with qualified opportunities ready for your sales
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Industry group sections */}
      <section className="bg-zinc-50 pb-8">
        <div className="mx-auto max-w-5xl space-y-6 px-4 sm:px-6 lg:px-8">
          {industryGroups.map((group, index) => {
            const image = industryImages[group.id];
            const groupHeader = (
              <div>
                <h2 className="text-2xl font-bold text-near-black sm:text-3xl">
                  {group.title}
                </h2>
                <div className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
                  {group.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            );

            return (
              <div
                key={group.id}
                id={group.id}
                className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-8 sm:p-10"
              >
                {image ? (
                  <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    <div className={index % 2 === 1 ? "lg:order-last" : ""}>
                      {groupHeader}
                    </div>
                    <div className="relative mx-auto w-full max-w-md lg:max-w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={700}
                        height={467}
                        className="h-auto w-full rounded-xl object-cover shadow-md"
                      />
                    </div>
                  </div>
                ) : (
                  groupHeader
                )}
                {group.listIntro && (
                  <p className="mt-4 text-base font-semibold text-near-black">
                    {group.listIntro}
                  </p>
                )}
                <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
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
                <p className="mt-6 text-base leading-7 text-zinc-600">
                  {group.closer}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Don't see your industry */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Don't See Your Industry?" />
          <div className="mt-6 space-y-4 text-center text-base leading-7 text-zinc-600">
            <p>
              If your business depends on acquiring new customers, there's a
              strong chance we can help. Our customer acquisition strategies are
              designed to adapt to a wide variety of industries and local
              markets.
            </p>
            <p>
              If you're unsure whether our solutions are a good fit, schedule a
              complimentary consultation with one of our specialists. We'll
              discuss your business, your goals, and determine the best approach
              to help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Why businesses choose us */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Why Businesses Across Multiple Industries Choose Avalanche Sales" />
          <p className="mt-6 text-center text-base leading-7 text-zinc-600">
            Regardless of the industry you serve, every business owner faces
            similar challenges:
          </p>
          <ul className="mx-auto mt-8 max-w-xl space-y-3">
            {industryChallenges.map((challenge) => (
              <li
                key={challenge}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4"
              >
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                  <ServiceIcon name="check" className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-near-black">
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4 text-center text-base leading-7 text-zinc-600">
            <p>
              That's where Avalanche Sales becomes your customer acquisition
              partner. Instead of spending time trying to master digital
              marketing, manage advertising campaigns, or purchase unreliable
              prospect lists, you can focus on what you do best: serving your
              customers and growing your business.
            </p>
            <p className="font-semibold text-near-black">
              We take care of connecting you with qualified opportunities. You
              focus on turning those opportunities into loyal customers.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-text py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-4 text-lg leading-7 text-white/90">
            Whether you're a local contractor, professional service provider,
            healthcare practice, or growing business, Avalanche Sales is
            committed to helping you generate more qualified customer
            opportunities and build predictable revenue. Let's discuss a
            customer acquisition strategy built specifically for your industry.
          </p>
          <div className="mt-8">
            <CtaButton href="/schedule-call-today/" variant="white">
              Schedule Your Complimentary Strategy Consultation Today
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
