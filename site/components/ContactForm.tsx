"use client";

import { useState } from "react";
import Script from "next/script";

const TURNSTILE_SITEKEY = "0x4AAAAAACyyz_lqkwF9Wvoh";

type ContactFormProps = {
  submitLabel?: string;
};

export default function ContactForm({
  submitLabel = "Send Message",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const turnstileToken =
      (
        document.querySelector(
          '[name="cf-turnstile-response"]'
        ) as HTMLInputElement | null
      )?.value || "";
    if (!turnstileToken) {
      setError("Please complete the verification challenge and try again.");
      setSubmitting(false);
      return;
    }
    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "avalanchesales.com",
          name,
          email,
          message: phone ? `Phone: ${phone}\n\n${message}` : message,
          source: "contact-page",
          turnstileToken,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong sending your message. Please email info@AvalancheSales.com or call 877.499.9111."
      );
      (window as unknown as { turnstile?: { reset: () => void } }).turnstile?.reset();
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-orange/30 bg-orange/5 p-6 text-center">
        <p className="font-semibold text-near-black">
          Thanks for reaching out. Our team has received your message and will
          respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-near-black">
            Name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm focus:border-orange focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-near-black">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm focus:border-orange focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-near-black">
          Phone
        </label>
        <input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm focus:border-orange focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-near-black">
          How can we help?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm focus:border-orange focus:outline-none"
        />
      </div>
      <div className="cf-turnstile" data-sitekey={TURNSTILE_SITEKEY} />
      {error && (
        <p className="text-sm font-medium text-red-600">{error}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-dark disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
