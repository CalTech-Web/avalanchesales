"use client";

import { useState } from "react";

type ContactFormProps = {
  submitLabel?: string;
};

export default function ContactForm({
  submitLabel = "Send Message",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:info@AvalancheSales.com?subject=${encodeURIComponent(
      "Website Inquiry"
    )}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-orange/30 bg-orange/5 p-6 text-center">
        <p className="font-semibold text-near-black">
          Thanks for reaching out. Your email client should now be open, send
          it through and our team will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
      <button
        type="submit"
        className="w-full rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-dark sm:w-auto"
      >
        {submitLabel}
      </button>
    </form>
  );
}
