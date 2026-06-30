import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "25+ years of combined sales, marketing, and direct response experience. Learn how Avalanche Sales became a multi-channel customer acquisition agency.",
};

const timeline = [
  {
    year: "1999",
    description:
      "Began managing inbound and outbound call centers and direct response television (infomercial) lead generation.",
  },
  {
    year: "2005",
    description:
      "Merged with a web development company to enter e-commerce.",
  },
  {
    year: "2011",
    description:
      "Added direct response email and sales page marketing to the service mix.",
  },
  {
    year: "2019 to 2023",
    description:
      "Four companies merged to form the current entity, expanding into multi-channel sales management across Google, LinkedIn, Facebook, Bing, Instagram, and YouTube.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange">
              About Avalanche Sales
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-near-black sm:text-5xl">
              25+ Years of Sales and Marketing Expertise, One Focused Mission
            </h1>
            <p className="mt-6 text-lg leading-7 text-zinc-600">
              Since 1999, our team and management have been deeply engaged in
              both online and offline sales and marketing. Our one focus is
              to attract, engage, and convert leads to sales, to drive
              revenue for the businesses we work with.
            </p>
            <div className="mt-8">
              <CtaButton href="/schedule-call-today/">
                Schedule A Call Today!
              </CtaButton>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
            <Image
              src="/images/gallery/sales-team-photo.jpg"
              alt="Avalanche Sales team"
              width={700}
              height={500}
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

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

      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Started"
            title="Built on Direct Response, Grown Into Multi-Channel AI"
          />
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-md lg:max-w-full">
              <Image
                src="/images/gallery/how-it-started.png"
                alt="How Avalanche Sales started"
                width={600}
                height={500}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
            <ol className="space-y-8">
              {timeline.map((item) => (
                <li key={item.year} className="flex gap-4">
                  <span className="flex h-12 w-fit min-w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange px-3 text-sm font-bold text-white">
                    {item.year}
                  </span>
                  <p className="pt-2 text-sm leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="Technology Backed by Two Decades of Sales Experience"
            description="Our team pairs AI driven targeting and qualification with proven, human led sales process, so every lead we deliver is both validated and ready to talk."
          />
          <div className="mt-14 relative mx-auto h-64 w-full max-w-3xl sm:h-80">
            <Image
              src="/images/gallery/software-tools-collage.png"
              alt="Software and tools used by Avalanche Sales"
              fill
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <blockquote className="text-2xl font-semibold leading-9 text-near-black">
            &ldquo;Our success is intrinsically linked to the success of our
            clients. To reflect this commitment, we offer a scalable,
            performance based cost option for many of our sales programs. Our
            earnings are tied to the revenue we generate for your
            business.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-orange">
            The Avalanche Sales Team
          </p>
        </div>
      </section>

      <section className="bg-orange py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Build Your Predictable Pipeline
          </h2>
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
