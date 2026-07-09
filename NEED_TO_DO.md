# Need To Do — Avalanche Sales

## Launch
- Point the custom domain avalanchesales.com (and www) at Vercel. The site currently serves on avalanchesales.vercel.app only. The Turnstile widget and forms config already include avalanchesales.com, so the contact form will keep working after the DNS cutover.

## Content (pending from Ken Davis)
- Real case studies and testimonials. The six case study records shown on the homepage Results section and on /resources/case-studies are illustrative composites carried over from the original site. They now carry a "Representative results based on typical client outcomes." disclosure, but must be replaced with real, attributable results and named testimonials when Ken Davis provides them.
- Customer Acquisition Guide PDF. The /resources/customer-acquisition-guide page teases the guide, and its "Get Your Free Customer Acquisition Guide" button currently routes to /schedule-call-today. Wire up the real downloadable PDF once it exists.
- No public social media profiles were found for the client, so the footer has no social links. Add them if the client provides handles.

## Phase 2 pages
- Individual solution detail pages. The six solutions currently live as anchored sections on /solutions (e.g. /solutions/#exclusive-customer-acquisition). Build standalone, SEO-optimized pages per solution if desired.
- Per-industry landing pages. The seven industry groups currently live as anchored sections on /industries. The content doc calls for each industry to become its own SEO landing page (Roofing, HVAC, Plumbing, etc.). Build these out in phase 2.

## Analytics
- No analytics tag is installed (no GA4 or GTM was documented). Add a measurement ID when the client provides one.

## Design polish
- Social share image is still the transparent square brand logo (dimensions now corrected to 750x750). For clean previews on dark-composite platforms (X dark, Discord, Slack, iMessage), ship a purpose-built opaque 1200x630 OG banner with a solid brand background, wordmark, and tagline, then point og:image and twitter:image at it and declare 1200x630 in layout.tsx and lib/metadata.ts.
