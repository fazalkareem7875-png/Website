\# G.Jeddah Aluminum Glass & Wood Interior — Website Plan

Reference sites analysed: Shahzad Aluminium & Glass, Living Standard, RJ Aluminium & Steel Works, Ramzan Steel Works.
Common pattern: hero → services grid → about → stats → gallery → testimonials → FAQ → map/contact → footer/WhatsApp.

## Tech Stack
- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (scroll reveals, counters)
- **Forms:** React Hook Form + API route → email/WhatsApp
- **Hosting:** Vercel
- **Images:** next/image, WebP
- **Icons:** Lucide React
- **Maps:** Google Maps embed
- **Analytics:** Google Analytics + Meta Pixel
- **SEO:** next-seo, JSON-LD LocalBusiness schema

## Design Direction
White background, charcoal/black text, one premium accent (gold or deep navy). Generous whitespace, large serif/sans display headings, thin dividers, glass-like card borders, subtle shadows. No clutter, no stock gradients.

---

## Pages & Sections

### 1. Home (`/`)
- **Header:** logo, nav (Home, About, Services, Gallery, Contact), phone CTA button, sticky on scroll
- **Hero:** full-width image/slider (aluminium windows/glass work), headline + subheadline, "Get Free Quote" + "Call Now" buttons
- **Trust strip:** Google rating 4.6, years in business, "Open 24 hours", service area (Islamabad & Rawalpindi)
- **About snippet:** 2-3 lines + "Read More" to About page
- **Services grid (cards):** Aluminium Windows & Doors, Glass Work (shopfronts, partitions, shower cabins), Wood Interior/Kitchen Cabinets, Steel/Railings — each with image + short text + link
- **Stats counter bar:** projects done, sq.ft installed, years of experience, happy customers
- **Gallery preview:** 6-8 recent work photos, grid, link to full Gallery page
- **Why choose us:** 4 icon points (made to measure, one workshop for all materials, fitted on-site, 24/7 availability)
- **Process steps:** Send details → Measure & Quote → Fabrication → Fitting
- **Testimonials:** 3 Google review quotes, star ratings
- **FAQ accordion:** pricing, areas served, repairs, timeline
- **Map + contact form:** embedded Google map, address, phone, WhatsApp button
- **Footer:** logo, short tagline, services links, contact info, hours, social icons, copyright

### 2. About (`/about`)
- Company story, mission, workshop location
- Certifications/experience
- Team/owner photo (optional)
- Why customers trust the business

### 3. Services (`/services`) — overview + sub-pages
- **Aluminium Work** (`/services/aluminium`): windows, doors, sliding systems, partitions, shopfronts
- **Glass Work** (`/services/glass`): shower cabins, glass doors/partitions, railings, 12mm shopfronts
- **Wood Interior** (`/services/wood-interior`): kitchen cabinets, wardrobes, false ceiling, wood panelling
- 

### 4. Gallery (`/gallery`)
- Filterable grid by category (Aluminium / Glass / Wood / Steel)
- Lightbox view

### 5. Contact (`/contact`)
- Contact form (name, phone, service, message)
- Address + embedded map
- Phone, WhatsApp click-to-chat
- Business hours

### 6. (Optional) Blog/Projects (`/projects`)
- Case-study style posts of completed jobs with photos

---

## Build Instructions (for the agent)

Build this as a **Next.js 14 App Router** project, structured exactly like this so it deploys on Vercel with zero config:

```
project-root/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                  → Home
│   ├── about/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   ├── services/
│   │   ├── page.tsx              → Services overview
│   │   ├── aluminium/page.tsx
│   │   ├── glass/page.tsx
│   │   └── wood-interior/page.tsx
│   └── api/
│       └── contact/route.ts      → form submit handler
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── Gallery.tsx
│   ├── TestimonialCard.tsx
│   ├── FaqAccordion.tsx
│   ├── StatsCounter.tsx
│   ├── ContactForm.tsx
│   └── WhatsAppButton.tsx
├── data/
│   ├── services.json
│   ├── testimonials.json
│   └── business.json             → name, phone, address, hours, rating
├── public/
│   └── images/
│       ├── hero-1.jpg
│       ├── service-aluminium.jpg
│       ├── service-glass.jpg
│       ├── service-wood.jpg
│       └── gallery/ (gallery-01.jpg, gallery-02.jpg, ...)
├── lib/
│   └── seo.ts
├── tailwind.config.ts
├── next.config.js
├── package.json
└── vercel.json (only if custom headers/redirects needed)
```

**Rules for the agent:**
- No `pages/` directory — App Router only (`app/`).
- Do not hardcode text/phone/content inside components — pull from `data/*.json`.
- Every image path must exist in `public/images/` — use clearly named placeholders if real photos aren't provided yet (e.g. `placeholder-hero.jpg`), never broken links.
- No lorem ipsum, no fake stats — leave fields empty/TODO if real numbers aren't given.
- Mobile-first: sticky bottom bar on mobile with Call + WhatsApp buttons.
- Use the real business info below everywhere (not Living Standard's dummy Tampa address/email).

### Design Tokens
- Background: `#FFFFFF` / sections alt `#F7F6F3`
- Text: `#141414`
- Accent (premium): `#A8862B` (muted gold) — or swap for `#0B2545` (deep navy) if gold feels too much
- Borders/dividers: `#E5E5E5`, 1px
- Font heading: `Playfair Display` or `Fraunces` (serif, premium)
- Font body: `Inter` or `Manrope`
- Radius: `8px` cards, `4px` buttons
- Shadow: soft, `0 4px 20px rgba(0,0,0,0.05)` — no harsh drop shadows

### Definition of Done (agent self-check before finishing)
- [ ] All pages build with zero TypeScript/ESLint errors
- [ ] No lorem ipsum or placeholder business info anywhere
- [ ] All images resolve (no 404s)
- [ ] Contact form submits and shows success/error state
- [ ] Responsive at 375px, 768px, 1440px
- [ ] Lighthouse performance/accessibility ≥ 90

## Deployment (Vercel)
1. Push project to a GitHub repo (root must contain `package.json` — Vercel auto-detects Next.js).
2. Import repo in Vercel → Framework Preset: **Next.js** (auto-detected, no config needed).
3. Add environment variables in Vercel dashboard (e.g. `CONTACT_EMAIL`, `SMTP_*`, or WhatsApp API key) — never commit these to the repo.
4. Deploy → Vercel builds `app/` automatically, API routes become serverless functions.
5. Add custom domain in Vercel → Settings → Domains, then point your domain's DNS (A/CNAME) as instructed there.

## Business Info to Use
- **Name:** G.Jeddah Aluminum Glass & Wood Interior
- **Rating:** 4.6 
- **Service area:** Islamabad & Rawalpindi
- **Address:** Fateh Jang Rd, E 18 Gulshan e Sehat, Islamabad, 45230
- **Phone:** 0300 0987875
- **Hours:** Open 24 hours
- google busines prifile link : https://share.google/oT91tItYywdONCcLl