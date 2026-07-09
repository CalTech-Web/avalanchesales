import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { caseStudies, caseStudyDisclosure } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Real businesses. Real growth. See how businesses partner with Avalanche Sales to generate more opportunities, improve sales pipelines, and create sustainable growth.",
  path: "/resources/case-studies/",
});

const highlights = [
  "The business challenge",
  "The customer acquisition strategy",
  "The implementation process",
  "The results achieved",
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Case Studies"
            title="Real Businesses. Real Growth."
            description="The best measure of any customer acquisition strategy is results."
          />
          <div className="mt-8 space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Our case studies showcase how businesses partner with Avalanche
              Sales to generate more opportunities, improve sales pipelines, and
              create sustainable growth.
            </p>
            <p className="font-semibold text-near-black">
              Each case study will highlight:
            </p>
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                  <ServiceIcon name="check" className="h-3 w-3" />
                </span>
                <span className="text-sm leading-6 text-zinc-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl bg-zinc-50 p-5 text-sm leading-6 text-zinc-600">
            New client case studies are coming soon. The examples below are
            representative results based on typical client outcomes.
          </p>
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm italic text-zinc-500">
            {caseStudyDisclosure}
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h2 className="mt-1 text-lg font-bold text-near-black">
                    {study.company}
                  </h2>
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

      <section className="bg-orange-text py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Want Results Like These?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Schedule your free customer acquisition strategy session and
            discover how Avalanche Sales can help your business grow.
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
