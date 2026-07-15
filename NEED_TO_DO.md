# Need To Do — Avalanche Sales

## Launch
- Waiting on the domain owner (Ken Davis) to make the DNS change. avalanchesales.com and www.avalanchesales.com are now attached and verified on the Vercel project, and both hostnames were confirmed serving the correct site from the Vercel edge. The Turnstile widget and forms config already include avalanchesales.com, so the contact form will keep working after the cutover.
- DNS is NOT at Namecheap. avalanchesales.com is registered at Bluehost with nameservers ns1.bluehost.com / ns2.bluehost.com, so the zone is edited in Bluehost, not Namecheap. Editing records in Namecheap would have no effect. Do not switch the nameservers to Namecheap: that would drop the whole zone (MX, mail A record, SPF) and break email.
- Records to change in the Bluehost zone editor, website only:
  - Apex avalanchesales.com: A record 162.241.30.68 becomes 216.150.1.1
  - www.avalanchesales.com: currently an A record to 162.241.30.68, replace with CNAME to cname.vercel-dns.com
- Leave every mail record alone: MX (mail.avalanchesales.com), the mail.avalanchesales.com A record (162.241.30.68), and the SPF TXT record. Mail is unaffected because the MX points at the mail host by name, not at the apex A record. The SPF record (v=spf1 a mx include:websitewelcome.com ~all) still passes after the cutover via its mx mechanism, so it does not need editing.

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
