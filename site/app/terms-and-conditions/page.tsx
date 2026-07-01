import type { Metadata } from "next";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for Avalanche Marketing Agency.",
  alternates: {
    canonical: "/terms-and-conditions/",
  },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-near-black">
          Terms and Conditions
        </h1>
        <p className="mt-3 text-sm text-zinc-500">Last updated, June 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-zinc-700">
          <p>
            These Terms and Conditions govern your use of {company.domain}{" "}
            and any sales or marketing services provided by Avalanche
            Marketing Agency, LLC, operating publicly as Avalanche Sales. By
            using our website or engaging our services, you agree to these
            terms.
          </p>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              Services
            </h2>
            <p className="mt-3">
              Avalanche Sales provides exclusive, pay-per-lead customer
              acquisition, lead generation, and sales support services across
              channels including Google, LinkedIn, Facebook, Instagram, Bing,
              and YouTube. Specific service terms, lead volumes, and pricing
              are agreed upon separately with each client.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              No Long-Term Contracts
            </h2>
            <p className="mt-3">
              Many of our programs operate on a pay-per-lead or performance
              based basis without long-term commitments. Specific terms for
              cancellation or modification will be outlined in your service
              agreement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              Lead Exclusivity
            </h2>
            <p className="mt-3">
              Leads delivered under an active client engagement are exclusive
              to that client and will not be shared or resold to another
              business.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              Intellectual Property
            </h2>
            <p className="mt-3">
              All content on this website, including text, graphics, logos,
              and images, is the property of Avalanche Marketing Agency, LLC
              and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              While we work to deliver high quality, AI validated leads and
              effective marketing campaigns, results can vary based on
              industry, market conditions, and client follow-up. Avalanche
              Sales is not liable for indirect or consequential damages
              arising from the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              Changes to These Terms
            </h2>
            <p className="mt-3">
              We may update these Terms and Conditions from time to time. The
              date at the top of this page reflects the most recent revision.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">Contact Us</h2>
            <p className="mt-3">
              Questions about these terms can be directed to{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-orange hover:text-orange-dark"
              >
                {company.email}
              </a>{" "}
              or{" "}
              <a
                href={company.phoneHref}
                className="text-orange hover:text-orange-dark"
              >
                {company.phone}
              </a>
              .
            </p>
          </div>

          <p className="text-xs text-zinc-500">
            &copy; 2019 to 2026 Avalanche Marketing Agency, LLC All Rights
            Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
