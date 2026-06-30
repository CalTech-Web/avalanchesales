import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import {
  coreServices,
  customerAcquisitionPillars,
  leadOptions,
  platforms,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Exclusive lead generation, ready to buy leads, private lead generation systems, and full customer acquisition systems across Google, LinkedIn, Facebook, Instagram, Bing, and YouTube.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Customer Acquisition Systems Built to Convert"
            description="AI driven lead systems generating pre-qualified leads tailored to your business, deployed across every major channel."
          />
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {leadOptions.map((option) => (
              <div
                key={option.title}
                className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold text-near-black">
                    {option.title}
                  </h2>
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
                  <CtaButton href="/schedule-call-today/" className="mt-6 w-full">
                    {option.cta}
                  </CtaButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Customer Acquisition Systems"
            title="Internet Marketing Built Around AI"
            description="Sales funnels, landing pages, sales consulting, and AI automation working together to drive pre-qualified leads to your team."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {customerAcquisitionPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-zinc-200 p-6"
              >
                <h3 className="text-lg font-bold text-near-black">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-near-black py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Inside Sales Services"
            title="A Full Sales Engine, Not Just Leads"
            light
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <div key={service.title} className="rounded-xl bg-white/5 p-6">
                <h3 className="text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Multi-Channel Reach"
            title="Platforms We Manage for You"
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
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-near-black">{platform.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {platform.reach}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to See These Services in Action?
          </h2>
          <p className="mt-4 text-lg leading-7 text-orange-50">
            Book a free, no obligation 30 minute discovery call.
          </p>
          <div className="mt-8">
            <CtaButton href="/schedule-call-today/" variant="white">
              Click Here to Schedule Call
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
