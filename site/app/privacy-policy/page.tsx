import { company } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Avalanche Marketing Agency.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-near-black">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-zinc-500">Last updated, June 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-zinc-700">
          <p>
            Avalanche Marketing Agency, LLC, operating publicly as Avalanche
            Sales (&ldquo;Avalanche Sales,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;), respects your privacy and
            is committed to protecting the personal information you share
            with us. This Privacy Policy explains how we collect, use, and
            safeguard information when you visit {company.domain} or engage
            with our sales and marketing services.
          </p>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              Information We Collect
            </h2>
            <p className="mt-3">
              We may collect information you provide directly, such as your
              name, email address, phone number, and company details when you
              submit a contact form, request a discovery call, or otherwise
              communicate with us. We may also collect technical information,
              such as browser type and pages visited, to help us understand
              how our site is used.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              How We Use Your Information
            </h2>
            <p className="mt-3">
              We use the information we collect to respond to inquiries,
              schedule discovery calls, deliver and manage lead generation
              services, communicate updates about our services, and improve
              our website and offerings. We do not sell your personal
              information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              Exclusive Lead Handling
            </h2>
            <p className="mt-3">
              Leads generated through our campaigns on behalf of a client are
              treated as exclusive to that client. We do not share or resell
              an individual lead to more than one business.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              Cookies and Tracking
            </h2>
            <p className="mt-3">
              Our website may use cookies and similar technologies to support
              core site functionality and to measure the performance of our
              advertising campaigns across platforms such as Google, LinkedIn,
              Facebook, Instagram, Bing, and YouTube.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              Data Security
            </h2>
            <p className="mt-3">
              We use reasonable administrative and technical safeguards to
              protect the information you share with us. No method of
              transmission or storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">
              Your Choices
            </h2>
            <p className="mt-3">
              You may contact us at any time to ask questions about the
              information we hold about you or to request that we stop
              contacting you.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-near-black">Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact
              us at{" "}
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
        </div>
      </div>
    </section>
  );
}
