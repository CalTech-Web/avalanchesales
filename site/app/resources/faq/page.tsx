import CtaButton from "@/components/CtaButton";
import SectionHeading from "@/components/SectionHeading";
import { faqItems } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to the most common questions about Avalanche Sales, exclusive customer acquisition opportunities, pricing, delivery, and how we help businesses grow.",
  path: "/resources/faq/",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.join(" "),
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Answers to your most common customer acquisition questions."
          />
          <div className="mt-6 space-y-4 text-base leading-7 text-zinc-600">
            <p>
              Choosing the right customer acquisition partner is an important
              decision. At Avalanche Sales, we believe businesses should
              understand exactly how our process works, what they can expect,
              and how our solutions help create predictable growth.
            </p>
            <p>
              Below are answers to some of the most common questions we receive.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-zinc-200 bg-zinc-50 p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-near-black">
                  {item.question}
                  <span className="text-orange-text transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-text py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            The first step is scheduling a free customer acquisition strategy
            session. We'll learn about your business, your goals, and your
            market, and determine whether Avalanche Sales is the right partner
            for your growth.
          </p>
          <div className="mt-8">
            <CtaButton href="/schedule-call-today/" variant="white">
              Schedule Your FREE Strategy Session Today
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
