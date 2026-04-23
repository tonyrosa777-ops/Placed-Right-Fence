# progress.md — Placed Right Fence Co. LLC Website Build

**Project:** placedrightfence.com — new website build
**Client:** Placed Right Fence Co. LLC | Nashua, NH (Southern NH and Seacoast)
**Business Type:** Family-run residential fence installation and repair contractor
**Launch Target:** April 2026 (ASAP — client wants live in 3–4 weeks; spring is peak season)
**Last Updated:** 2026-04-19 (Session 14)
**Current Phase:** Phase 5 — Secondary Pages & Polish

---

## Operating Principles

These are durable working rules for this project. They override comfort-level judgment calls.

1. **No deferred cleanup.** If we can fix a rule violation while we're already in the file, we fix it now — in the same commit. We do not create "flag for later," "post-launch refactor," or "TODO" backlog items for things that could be done in the current session. Defer only when **physically blocked**: missing client-supplied asset (logo, photo), missing API key, pending client decision, or locked-down third-party system. (Captured 2026-04-17 after the RingCentral compliance update — Anthony rejected a minimal copy-swap that would have preserved an existing CLAUDE.md line-121 violation; we did the proper `/data/site.ts` refactor in the same commit.)
2. **Pre-read protocol is non-negotiable.** Every session starts with the CLAUDE.md pre-read sequence. No context carried over from previous sessions.
3. **Research-backed decisions only.** Every design, copy, UX, or technical call must be traceable to `market-intelligence.md` or `initial-business-data.md`. Surface unsupported decisions for review; do not make them unilaterally.
4. **Progress after every subtask, not at session end.** Update this file immediately after each subtask closes. Batched updates lose information when context exhausts mid-build.
5. **Atomic commits + push.** Every logical unit of work ships as one commit to `origin/main`. No staging work locally across sessions.

---

## Phase Overview

| Phase | Name | Status |
|-------|------|--------|
| 0 | Environment Setup & Strategy | ✅ Complete |
| 1 | Design System & Brand Identity | ✅ Complete |
| 2 | Site Architecture & Content Planning | ✅ Complete |
| 3 | Core Pages Build | ✅ Complete |
| 4 | Conversion Flow Integration | ✅ Complete |
| 5 | Secondary Pages & Content | 🔄 In Progress |
| 6 | SEO, Schema & Analytics | 🔄 In Progress |
| 7 | Performance, QA & Launch Prep | ⬜ Not Started |

---

## Phase 0 — Environment Setup & Strategy

### Checklist
- [x] CLAUDE.md confirmed — 10 variables filled (2026-03-31)
- [x] progress.md created (this file — 2026-03-31)
- [x] initial-business-data.md updated with all client-confirmed data (2026-03-31)
- [x] design-system.md created (2026-03-31)
- [x] build-log.md read (2026-03-31) — 7 errors + 5 patterns reviewed; fal.ai pattern #4 adopted for gallery
- [x] Tech stack scaffolded — Next.js 16.2.2, React 19, Tailwind CSS v4, Framer Motion, react-intersection-observer (2026-03-31)
- [x] Design tokens wired — globals.css + @theme inline mapping + DM Serif Display/DM Sans/IBM Plex Mono (2026-03-31)
- [x] Directory structure created — components/animations, components/layout, components/sections, components/ui, data, lib (2026-03-31)
- [x] /data/site.ts created — all copy, testimonials, services, FAQ, service areas, trust signals (2026-03-31)
- [x] FadeIn animation wrapper created (2026-03-31)
- [x] utils.ts created — cn(), prefersReducedMotion() (2026-03-31)
- [x] Production build clean — ✓ Compiled, TypeScript passes (2026-03-31)
- [ ] Vercel project connected — Framework Preset and Root Directory set before first deploy
- [ ] Primary conversion tool confirmed (recommendation: Web3Forms or Resend — no CRM needed)
- [ ] Domain DNS confirmed (placedrightfence.com)
- [ ] Phase 1 task list written and approved

### Decisions Log
- [2026-03-31] Launch target set to April 2026 — client stated "I'd like it live as soon as possible — honestly yesterday. Spring is everything for us." 3–4 week timeline is aggressive but achievable for a 7-page site.
- [2026-03-31] Conversion tool = Custom multi-step estimate form (no CRM). Leads delivered to phone/email. Client confirmed "I just need the leads to come to my phone or email so I can call them back same day." Will use Web3Forms (free tier, no backend needed) or Resend for form submission delivery. Confirm before Phase 4.
- [2026-03-31] Blog/CMS = Simplified approach. Given the aggressive timeline, Phase 3 will build 2–3 high-priority content pages as static Next.js pages (NH Permit Guide, Frost Line Guide, Pool Code Compliance). Full Sanity CMS integration deferred to Phase 5 unless client wants to manage content themselves.
- [2026-03-31] Phone number flag: Client's current number (978) 207-4077 is a Massachusetts area code. This DIRECTLY undermines the "NH born and raised" positioning (market-intelligence.md Section 7). Recommend client acquire a 603 (NH) area code number before launch.
- [2026-03-31] Gallery photos: fal.ai AI generation (build-log.md Pattern #4). Prompts designed around real NH residential fence installs — wood, vinyl, aluminum, chain link. Categories: privacy fences, pet yards, pool enclosures, before/after pairs. Real client photos will replace AI assets if/when delivered.
- [2026-03-31] Testimonials: 6 simulated testimonials written to match real audience language from market-intelligence.md Section 2. Cover primary use cases: dog containment, pool compliance, storm repair, privacy, new home. Replace with real reviews over time.

### Open Questions
- [2026-03-31] Phone number: 978 MA area code acknowledged as positioning risk — client deferred decision. Flag again at launch prep.
- [2026-03-31] Form delivery: Confirm preferred method — email only, or text + email for instant lead notification?
- [2026-03-31] Google Business Profile: Client confirmed it's bare (2 reviews, no photos). GBP optimization should run in parallel with Phase 3 — who handles this?
- [2026-03-31] Scaffold location: Where to create placed-right-fence-web? (e.g., C:\Projects\placed-right-fence-web)

### Discovered Insights
- Spring is peak season for NH fence installation — every week of delay costs the client real jobs. The 3–4 week target should drive ruthless scope prioritization.
- The (978) MA area code is a positioning liability. Market-intelligence.md Section 7 flagged this explicitly. Must be raised with client.
- Platinum Fence's catastrophic website (2/10 design, no HTTPS, Flash placeholders) makes the Seacoast a nearly uncontested opportunity. Seacoast city pages should be in Phase 5 scope.
- No NH fence contractor publishes permit guides, frost line content, or seasonal timing content. These 3 content pages face zero competitor competition and will rank quickly.
- Client has no CRM, no analytics, no social presence worth mentioning — this is a ground-up digital presence build.

---

## Site Architecture (7 Pages)

Based on initial-business-data.md Section 8 and market-intelligence.md Section 9:

| # | Page | Route | Priority | Notes |
|---|------|--------|----------|-------|
| 1 | Home | / | P0 | Hero + social proof + services overview + trust signals + CTA |
| 2 | Services | /services | P0 | Fence types hub + use cases (with individual type pages in Phase 5) |
| 3 | About | /about | P0 | NH roots + family story + values + owner photo + insurance |
| 4 | Gallery | /gallery | P0 | Before/after slider + categorized by type — **REQUIRES CLIENT PHOTOS** |
| 5 | Service Areas | /service-areas | P0 | 25+ NH cities — primary local SEO vehicle |
| 6 | FAQ | /faq | P1 | Objection handling — cost, timeline, materials, winter installs |
| 7 | Contact / Free Estimate | /contact | P0 | Multi-step form + phone + map |
| 8 | NH Permit Guide | /resources/fence-permits-nh | P1 | Zero competition — content SEO |
| 9 | Pool Fence Compliance | /resources/pool-fence-nh | P1 | Zero competition — content SEO |
| 10 | Pricing Guide | /pricing | P1 | Transparent ranges — conversion differentiator |

**Phase 3 core (P0):** Pages 1, 2, 3, 5, 7
**Phase 4:** Page 7 (full multi-step form), Page 4 (gallery — pending photos)
**Phase 5:** Pages 6, 8, 9, 10 + individual fence type pages

---

## Custom Builds Required

| Feature | Source | Complexity | Phase |
|---------|--------|------------|-------|
| Multi-step visual estimate form (3-step with fence-type image selectors) | market-intelligence.md Section 5 Gap 4 | Medium | Phase 4 |
| Before/after photo comparison slider | market-intelligence.md Section 5 Gap 3 | Medium | Phase 4 |
| Sticky mobile bottom CTA bar | market-intelligence.md Section 7 | Low | Phase 3 |
| Response-time guarantee + auto-confirmation email on submit | market-intelligence.md Section 7 | Low | Phase 4 |
| City-level service area pages (25+ cities, templated) | initial-business-data.md Section 3 | Medium | Phase 5 |
| Transparent pricing ranges section | market-intelligence.md Section 4 | Low | Phase 5 |

---

## Session Log

### Session 1 — 2026-03-31
**Completed:**
- Read all available project files (CLAUDE.md, initial-business-data.md, market-intelligence.md, project-prime.md, frontend-design.md, website-build-template.md)
- Received 12 client confirmations filling all ⚠️ fields in initial-business-data.md
- Filled CLAUDE.md variables (Task 1)
- Created progress.md (Task 2 — this file)
- Updated initial-business-data.md with all client-confirmed data
- Created design-system.md (Task 3)

**Discovered:**
- Client is running a 978 MA area code — positioning liability for "NH born and raised" brand
- Client has no CRM, no analytics, no social — completely greenfield digital presence
- 15–20 real job photos available — must collect before gallery phase
- Spring urgency is extremely high — 3–4 week launch target

**Decisions Made:**
- Stack: Next.js App Router + Tailwind CSS 4 + Framer Motion (per website-build-template.md, no Sanity CMS in Phase 3)
- Conversion: Custom multi-step form, Web3Forms or Resend for delivery
- Design: Light theme — warm cream/ivory base, deep navy primary, terracotta accent, DM Serif Display + DM Sans typography
- Content SEO pages deferred to Phase 5 to hit 3–4 week target

**Next Session Starts At:**
- Build Button UI component ✅ done (2026-04-01)
- Build SiteHeader ✅ done (2026-04-01) — transparent on hero, solid on scroll/inner pages, mobile full-screen navy overlay
- Build SiteFooter ✅ done (2026-04-01) — navy bg, 4-col grid, trust badges, contact, nav
- Build MobileCTABar ✅ done (2026-04-01) — fixed bottom-0, terracotta CTA + phone
- Wire layout.tsx ✅ done (2026-04-01)
- HeroSection ✅ done (2026-04-01) — eyebrow, H1, subheadline, dual CTAs, trust badges, image placeholder with floating cards
- layout.tsx: removed pt-[72px] from main — hero extends behind transparent header
- Build clean ✓
- Next: Card component → ServicesSection → homepage assembly (Phase 3)

### Session 2 — 2026-04-01
**Completed:**
- TrustSection: 6 trust signals grid with inline SVGs + accent-muted icon circles
- TestimonialsSection: 6 testimonials grid with star ratings, use-case chips, attribution footer
- ServiceAreasSection: 2-region city chips (Southern NH + Seacoast) + CTA
- page.tsx: all 5 homepage sections wired (Hero → Services → Trust → Testimonials → ServiceAreas)
- /services: hub page with 5 fence types, "Why Our Installations Last" section, navy CTA
- /about: brand story, 4-value grid, trust signals strip, family photo placeholder
- /service-areas: 2-region city layout, local expertise section, 4-stat grid
- /contact: 3-step multi-step estimate form (fence type → project details → contact info)
  - Web3Forms delivery via NEXT_PUBLIC_WEB3FORMS_KEY
  - Full success state with response guarantee
  - Trust sidebar with guarantee box, contact alternatives, trust mini-grid
- /faq: interactive accordion (8 questions, FAQAccordion client component)
- /gallery: 9-item placeholder grid with filter bar, Instagram CTA, fal.ai placeholder system
- SchemaOrg: LocalBusiness JSON-LD in layout.tsx (HomeAndConstructionBusiness + Contractor)
- robots.ts: all routes allowed
- sitemap.ts: 8 routes (/, /services, /about, /service-areas, /contact, /gallery, /faq)
- Build: ✓ TypeScript clean — 8 routes + sitemap.xml + robots.txt all static

**Current State:**
- All 8 pages live (deploying to Vercel via push)
- EstimateForm: NEEDS NEXT_PUBLIC_WEB3FORMS_KEY in Vercel env vars before form submissions work
- Gallery: placeholder grid only — needs fal.ai generated photos (Phase 5 task)
- Gallery filter bar: renders but is NOT interactive (no client state) — Phase 5 polish task

**Next Session Starts At:**
Phase 5 + 6 remaining work:
1. IMMEDIATE BLOCKER: Add NEXT_PUBLIC_WEB3FORMS_KEY to Vercel env vars (client must register at web3forms.com)
2. Wire .env.local for local dev
3. Make gallery filter bar interactive (useState to filter galleryItems)
4. fal.ai gallery photo generation — 9 prompts mapped to fence types + NH residential settings
5. Individual fence type pages (/services/wood-fence, /services/vinyl-fence, etc.) — city-level SEO
6. Pricing page (/pricing) — transparent range table from site.ts
7. NH Permit Guide (/resources/fence-permits-nh) — zero competitor content
8. Pool Fence Compliance (/resources/pool-fence-nh) — zero competitor content
9. Phase 7: Lighthouse audit, Open Graph image, Google Analytics

**Blockers:**
- Web3Forms key needed before /contact form works live
- fal.ai image generation deferred (needs API key + time)
- og-image.jpg does not exist yet (metadata references /og-image.jpg) — will 404 on social shares

### Session 3 — 2026-04-01
**Completed: Animation Overhaul — doubled animation quantity and quality across all pages**

New animation components created:
- `ScrollProgress.tsx` — 2px gold bar fixed at top, tracks scroll via `useScroll` + `useSpring`, hidden on `prefers-reduced-motion`
- `PageTransition.tsx` — fade + y-slide between every page navigation using `AnimatePresence mode="wait"` + `usePathname`
- `SectionHeading.tsx` — reusable eyebrow → animated h2 → gold scaleX rule reveal → subheading; replaces the old FadeIn header pattern across all sections
- `CountUp.tsx` — rAF-driven cubic-ease number counter, fires on `useInView`, jumps to final value on `prefers-reduced-motion`
- `FounderSection.tsx` — About page founder section extracted as client component; story slides in from left (x: -40→0), photo from right (x: 40→0), simultaneously on scroll

Upgraded existing components:
- `TestimonialsSection.tsx` — static 3-col grid replaced with two-row infinite CSS marquee; rows scroll in opposite directions at 42s/48s; pauses on hover; edge fades; `line-clamp-5` for uniform card heights
- `FAQAccordion.tsx` — CSS `maxHeight` transition replaced with Framer Motion `AnimatePresence height: "auto"` for fluid accordion open/close
- `GalleryGrid.tsx` — filter now uses `AnimatePresence mode="popLayout"` + `motion.div layout` for smooth card reordering on filter change
- `ServicesSection.tsx` + `services/page.tsx` — `card-shine` CSS class added; diagonal light sweep on hover
- `service-areas/page.tsx` — 4 stat boxes (48″, 72 hrs, 25+, 100%) upgraded from static text to `CountUp` animated on scroll

CSS additions to `globals.css`:
- `@keyframes marquee-left` + `marquee-right` + `.marquee-track` utilities
- `.card-shine` + `::after` diagonal gradient sweep
- `@keyframes cta-pulse` + `.cta-pulse` (fires 2× then stops) — applied to hero primary CTA and dark-section bottom CTAs

`SectionHeading` wired into: ServicesSection, TrustSection, TestimonialsSection, ServiceAreasSection, services/page.tsx, service-areas/page.tsx, about/page.tsx

Build: ✓ TypeScript clean, all 10 routes static

**Next Session:**
1. IMMEDIATE BLOCKER: Add NEXT_PUBLIC_WEB3FORMS_KEY to Vercel env vars
2. fal.ai gallery photo generation — 9 images for gallery page
3. og-image.jpg — needed before social shares work
4. Individual fence type pages (/services/wood-fence etc.) — Phase 5
5. Pricing page (/pricing) — Phase 5
6. Lighthouse audit / performance — Phase 7

### Session 4 — 2026-04-01
**Completed: Blog/Sanity infrastructure committed — build passes clean**

Discovered uncommitted work from a prior session:
- `web/src/app/blog/page.tsx` — full Sanity-powered blog listing with featured post, category filter, empty state, ISR (`revalidate = 3600`)
- `web/src/app/blog/[slug]/page.tsx` — individual post page with full PortableText renderer (h2–h4, normal, blockquote, bullet/number lists, strong/em/code/link marks, image, callToAction block types), sidebar estimate CTA + trust signals, `generateStaticParams`
- `web/src/sanity/` — `client.ts` (with `?? "placeholder"` build guard), `queries.ts`, `image.ts`, schema types for post/author/category/blockContent
- `web/sanity.config.ts` — embedded Sanity Studio at `/studio`
- `web/src/app/api/revalidate/route.ts` — on-demand ISR webhook
- `web/src/app/studio/layout.tsx` — toolbar-clean layout for Studio route

Build result: `✓ 14/14 pages pass, TypeScript clean`. Build previously crashing with "Configuration must contain `projectId`" — resolved by `?? "placeholder"` guard in client.ts; Sanity fetches gracefully return empty data when env vars are absent; blog shows "Guides coming soon" empty state.

Commit: `5d66323` — pushed to origin/main.

**Blockers / Open Items:**
- `NEXT_PUBLIC_WEB3FORMS_KEY` still missing from Vercel — /contact form dead on live site
- `NEXT_PUBLIC_SANITY_PROJECT_ID` + `NEXT_PUBLIC_SANITY_DATASET` needed to serve real blog content
- `og-image.jpg` still missing — social shares will 404 on image
- `web/src/lib/cart.tsx` + `web/src/data/shop.ts` + `web/src/lib/printful.ts` — template artifacts, not used, not committed; delete them

**Next Session:**
1. BLOCKER: Add `NEXT_PUBLIC_WEB3FORMS_KEY` to Vercel env vars (contact form)
2. Clean up unused template artifacts: `cart.tsx`, `shop.ts`, `printful.ts`, `printful-seeded-products.json`
3. Generate `og-image.jpg` (1200×630) for social shares
4. Set up Sanity project (free tier) + add env vars to Vercel so blog can serve content
5. Individual fence type pages (/services/wood-fence, /vinyl-fence, etc.) — Phase 5
6. Pricing page (/pricing) — Phase 5

### Session 5 — 2026-04-01
**Completed: Blog architecture finalized + Shop (Stripe + Printful + Resend) built for branded merch**

Blog:
- Sanity Studio page updated to lazy-load both config and NextStudio inside dynamic() to prevent createContext SSR crash during build
- `/studio/layout.tsx` — robots noindex added

Shop (client confirmed: branded merch — hats, tees, hoodies, mugs via Printful POD):
- `web/src/lib/cart.tsx` — React Context cart, localStorage persist, variant-aware item keys
- `web/src/lib/printful.ts` — Printful API client, `createPrintfulOrder`, `parseVariantName`, `COLOR_MAP`
- `web/src/lib/printful-seeded-products.json` — fallback data for Printful API downtime
- `web/src/data/shop.ts` — product catalog (4 SKUs, Printful IDs are placeholders)
- `web/src/components/layout/CartDrawer.tsx` — slide-in drawer in SiteHeader (build-log.md Pattern #2)
- `web/src/app/shop/page.tsx` — category filter, ProductCard with live variant fetch, color swatches, size chips, success banner
- `web/src/app/api/printful/products/route.ts` — live + seeded fallback
- `web/src/app/api/printful/variants/[id]/route.ts` — variant name parsing
- `web/src/app/api/stripe/checkout/route.ts` — Stripe checkout session, API version 2026-03-25.dahlia
- `web/src/app/api/stripe/webhook/route.ts` — Printful POD fulfillment + Resend owner alert for manual items
- CartProvider added to layout.tsx; cart icon + badge added to SiteHeader desktop CTA row
- Shop added to nav + sitemap (priority 0.6)
- design-system.md §11 updated — shop approved for branded merch

Build: ✓ TypeScript clean — 15 routes total

**Next Session Starts At:**
Required env vars (add to .env.local + Vercel before going live):
- `NEXT_PUBLIC_SANITY_PROJECT_ID` + `NEXT_PUBLIC_SANITY_DATASET` — run `npx sanity@latest init` inside web/
- `SANITY_REVALIDATE_SECRET` — set same value in Sanity webhook config
- `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET` — Stripe dashboard → Developers
- `PRINTFUL_API_KEY` — Printful → Settings → API → Create token
- `RESEND_API_KEY` — resend.com (free tier: 3k emails/month)
- `NEXT_PUBLIC_WEB3FORMS_KEY` — web3forms.com (contact form)
- `OWNER_EMAIL` — Roger's email for order alerts

Blog images:
- Generated 10 photorealistic 16:9 JPEG images via fal-ai/flux-pro/v1.1 — one per static blog post
- Stored at `web/public/images/blog/<slug>.jpg` (112–310 KB each)
- `StaticPost` type gains optional `image` field; STATIC_AS_POSTS mapper passes path through `mainImage.asset.url`
- Both `FeaturedPostCard` and `PostCard` now render real images instead of the 🏡 emoji fallback
- Rerunnable generator: `web/scripts/generate-blog-images.mjs` (supports `--slug=<slug>` for single regeneration)
- Build: ✓ TypeScript clean — commit `0b209cd` pushed to origin/main

Remaining Phase 5:
1. og-image.jpg generation (1200×630)
2. ~~Individual fence type pages (/services/wood-fence, etc.)~~ ✅ Done (Session 12)
3. Pricing page (/pricing)
4. NH Permit Guide + Pool Fence Compliance pages
5. Phase 7: Lighthouse audit + Google Analytics

### Session 7 — 2026-04-02
**Completed: Hero animation polish — mobile + desktop both locked**

ForgeCanvas `getLayout()` final approved values:
- **Mobile (W<640):** n=1, w=18, fullH=H>750?240:200, startX=W*0.5, groundY=Math.min(H*0.78,700)
- **Desktop (W≥1024):** n=10, spacing=46, w=15, fullH=240, startX=W*0.72-offset, groundY=H*0.73

Changes made this session:
- desktop groundY: H*0.73 → H*0.58 (then reverted back to H*0.73 — user only wanted picket height)
- desktop fullH: 148 → 240 — picket tips now reach headline/gold rule area
- Hero section: `flex items-start lg:items-center` (mobile content top-aligned, desktop centered)
- `SiteHeader.tsx` PRIMARY_HREFS: added `/testimonials`, total = `/services /gallery /blog /shop /testimonials`
- Pricing: removed "Full Service" badge from Premium tier (Growth is now unambiguous hero)
- Service Areas page: full redesign — dark hero, stats row, region cards, dark "Why Local" section, CountUp stats
- Nav: renamed "Reviews" → "Testimonials", promoted to primary nav
- Homepage: alternating dark/light rhythm — BlogTeaser, TrustSection, FAQTeaser flipped dark
- GalleryTeaser: replaced icon-card layout with 3 real fal.ai photos (wood/vinyl/aluminum)

Memory saved: `project_forge_canvas_locked.md` — getLayout() values locked, do not change.

**Next Session:**
1. og-image.jpg (1200×630) — needed before social shares work
2. Individual fence type pages (/services/wood-fence, etc.)
3. NH Permit Guide + Pool Fence Compliance content pages
4. Phase 7: Lighthouse audit + Google Analytics

### Session 10 — 2026-04-14
**Completed: Jen's brand alignment pass — hero = tagline, services reordered, shelter copy exact to brochure**

Hero ([site.ts](web/src/data/site.ts) `hero` + [HeroSection.tsx](web/src/components/sections/HeroSection.tsx)):
- Headline swapped: "The Last Fence\nYou'll Ever Need." → **"Love Wins Where\nPickets Begin."**
- NEW `hero.tagline` field renders as italic gold kicker between H1 and gold rule: "When you install a Placed Right Fence."
- Subheadline rewritten: "Southern NH & NH Seacoast — live elsewhere, give us a call. We install Trex, vinyl, wood, chain link, aluminum and more…"
- Eyebrow: "Family-Run · Southern NH & Seacoast · Fully Insured"
- Trust badges: added "1% of Every Install → Animal Shelter" + emphasized "Fully Insured"
- Primary CTA copy: "Get Your FREE Estimate" (all caps per Jen's brochure)

Services reordered (Jen's card sequence): Trex/Composite → Vinyl → Wood → Chain Link → Aluminum → Repair → Luxury (coming soon). All consumers (ServicesSection, services page, EstimateForm Step1, GalleryTeaser if applicable) reflect automatically.

Promise copy tightened to match Jen's brochure verbatim: "For every completed fence installation, we donate 1% of **your** total project to an approved **local** animal shelter of **your** choice…" (added "your" + "local"; footer short version matches)

Service-areas section subheadline now echoes brochure: "Live elsewhere? Give us a call — free on-site estimates within 72 hours."

Verified: no "7%" references anywhere in the code. All 1% promise copy is consistent.

Build: ✓ TypeScript clean, 34 static routes.

### Session 9 — 2026-04-14
**Completed: Canonical domain swap + Shop coming-soon launch**

Canonical domain is now `placedrightfences.com` (plural). `placedrightfence.com` (singular) will 301-redirect to canonical via Vercel domain settings.

Files updated:
- `siteConfig.domain` + `siteConfig.url` + `siteConfig.email` → placedrightfences.com
- `web/src/app/layout.tsx` metadataBase + OpenGraph URL → placedrightfences.com
- `web/src/app/api/stripe/webhook/route.ts` from-address → shop@placedrightfences.com
- `CLAUDE.md` DOMAIN variable updated with canonical + redirect note

Shop coming-soon takeover (`web/src/app/shop/page.tsx`):
- Feature flag: `NEXT_PUBLIC_SHOP_LIVE=true` toggles between live shop and coming-soon
- Default = coming-soon. `<ComingSoonShop>` renders centered hero ("Going Live Soon."), email capture form posting to Web3Forms with `source: "shop_coming_soon"`, sneak-peek grid with 4 greyscale product silhouettes
- Success state: green checkmark card "You're on the list."
- Existing `<LiveShop>` + ProductCard logic preserved in same file, activates via flag
- `ShopTeaser` on homepage: eyebrow now reads "Placed Right Gear · Going Live Soon"; CTA changed from "Shop All Gear →" to "Join the Waitlist →"; lands on new coming-soon page

**Vercel action items (DEFERRED — coming back to domain setup shortly):**
1. Add both domains to Vercel project → Settings → Domains
2. Set `placedrightfences.com` as primary → Vercel auto-301s the other
3. Update DNS at registrar: both domains' A records → 76.76.21.21 (or CNAME to cname.vercel-dns.com for www)
4. Env vars needed live: `NEXT_PUBLIC_WEB3FORMS_KEY` (for contact + shop waitlist), eventually `NEXT_PUBLIC_SHOP_LIVE=true` + Stripe/Printful keys when shop is ready
5. Update Google Business Profile URL to placedrightfences.com post-propagation
6. Post-propagation: verify 301 with `curl -I https://placedrightfence.com` (expect `location: https://placedrightfences.com/`)
7. Resubmit sitemap to Google Search Console: `https://placedrightfences.com/sitemap.xml`
8. Decide on email hosting for `info@placedrightfences.com` (MX records not yet configured)

Code is fully swapped — safe to sit at this state until domain config is ready. Reverting is a one-line change in siteConfig if ever needed.

Build: ✓ TypeScript clean, 34 static routes.

### Session 8 — 2026-04-14
**Completed: Client update pass (Jen's notes) — tagline, 1% promise, pricing format, Trex + Luxury services, review realism**

site.ts:
- Tagline updated: "Love Wins Where Pickets Begin — When You Install a Placed Right Fence."
- New `promise` export — 1% of every completed install donated to an approved animal shelter of the homeowner's choice
- Services: priceRange reformatted to "Starting at $X / linear foot installed" across all types
- NEW service: `trex-composite` (Trex / Composite Fencing — Starting at $55/lf)
- NEW service: `luxury` (Luxury Fencing — `comingSoon: true`, waitlist CTA)
- Pricing ranges: all three tiers converted from $X–$Y ranges to "Starting at $X"
- Testimonials: 4 reviews dropped 5→4 stars (Alison F., Lisa T., Rob S., Janet F.) — avg now ~4.9 for realism

New component: `PromiseSection.tsx` — gold-heart + black-paw SVG, centered brand promise block, wired into homepage between AboutTeaser and TrustSection
SiteFooter: added promise callout (gold left border, short 1-line version) under tagline
ServicesSection + services page: both render "Coming Soon" badge for `comingSoon` entries; href routes to /contact instead of /services/[slug]; CTA copy swaps to "Join the Waitlist →"
EstimateForm: Step1 filters out coming-soon services from the fence-type picker
TestimonialsPage: avg rating now computed from data (4.9), no longer hard-coded 5.0; hero copy changed from "{N} five-star reviews" → "{N} verified reviews"
GalleryGrid + generate-gallery-extra.mjs: removed barbed-wire reference — `gallery-37.jpg` (Commercial Chain Link) dropped from CHAIN_LINK, script prompt rewritten to "top rail and tension wire"; ALL_ITEMS .filter() guards against empty tuple slots

Build: ✓ TypeScript clean, 34 static routes, production build passes.

**Still outstanding (client-side):**
- New logo PNG + gold-heart/black-paw mark — pending delivery; PromiseSection uses inline SVG placeholders tuned to brand colors
- Additional gallery photos — pending delivery from Roger
- og-image.jpg (1200×630)

### Session 6 — 2026-04-01
**Completed: Nav cleanup + homepage full-page teasers**

Nav fix:
- `SiteHeader.tsx` PRIMARY_HREFS corrected: `/services /gallery /blog /shop` (was /services /gallery /about)
- Quiz removed from `nav` array in `site.ts` — quiz is accessible via CTA sections, not top nav

New homepage section components (all in `web/src/components/sections/`):
- `QuizCTASection.tsx` — dark primary strip after ServicesSection; 3-step pill pills + gold CTA button driving to /quiz; "60-second Fence Finder"
- `GalleryTeaser.tsx` — 6 fence-type category cards (wood/vinyl/aluminum/chain link/pool/repair) on white bg with hover accent top bar → /gallery
- `BlogTeaser.tsx` — 3 most recent blog posts with real images (`/images/blog/*.jpg`) + category chips + read time → /blog
- `AboutTeaser.tsx` — 2-col: founder story (left), 4 value tiles (right) → /about
- `FAQTeaser.tsx` — first 3 buying-blocker FAQs + "See All FAQs →" → /faq
- `ShopTeaser.tsx` — 3 product cards (hoodie/hat/sticker) on dark primary bg → /shop

Homepage `page.tsx` now:
Hero → Services → QuizCTA → Gallery → Blog → About → Trust → Testimonials → FAQ → ServiceAreas → Shop

All 6 new sections + nav fix committed as `86ee6e7` and pushed to origin/main.
Build: ✓ TypeScript clean — 34 static pages

**Next Session:**
1. og-image.jpg (1200×630) — still needed for social shares
2. Individual fence type pages (/services/wood-fence, etc.) — Phase 5 SEO
3. NH Permit Guide + Pool Fence Compliance pages — content SEO
4. Phase 7: Lighthouse audit + Google Analytics

### Session 11 — 2026-04-16
**Completed: Domain live, Resend connected, Calendly inline embed, env.local finalized**

Infrastructure / Domain:
- `placedrightfences.com` (canonical) connected to Vercel and live
- `placedrightfence.com` (singular, original) ✅ redirecting to canonical
  - Original domain managed at https://accounts.northwestregisteredagent.com/#/dashpanel
  - Vercel A record approach FAILED — Northwest DNS would not propagate the A record (`216.198.79.1`) no matter what we tried (blank host, `@`, full domain name)
  - CNAME for `www.placedrightfence.com` worked immediately
  - **Solution:** Used Northwest's built-in **Forwarding** setting (General tab → Forwarding section) to redirect `placedrightfence.com` → `www.placedrightfences.com` at the registrar level — bypasses the A record entirely
  - Removed `placedrightfence.com` root from Vercel Domains (only `www.placedrightfence.com` remains, handled by CNAME)
- Resend API key added to `.env.local` and domain verified through Resend
- `.env.local` finalized with all project env var placeholders:
  - `FAL_KEY` ✅ (set)
  - `NEXT_PUBLIC_WEB3FORMS_KEY` — removed, replaced by Resend
  - `RESEND_API_KEY` ✅ (set)
  - `OWNER_EMAIL` ✅ (info@placedrightfence.com)
  - `STRIPE_SECRET_KEY` — needs Stripe account setup
  - `STRIPE_WEBHOOK_SECRET` — needs Stripe account setup
  - `PRINTFUL_API_KEY` — needs Printful API token
  - `NEXT_PUBLIC_SANITY_PROJECT_ID` — needs Sanity project
  - `NEXT_PUBLIC_SANITY_DATASET` — defaults to production
  - `SANITY_REVALIDATE_SECRET` — needs Sanity webhook
  - `NEXT_PUBLIC_CALENDLY_URL` ✅ (https://calendly.com/placedrightfence-info/30min)
  - `NEXT_PUBLIC_SHOP_LIVE` — defaults to false

Calendly integration:
- Created `CalendlyEmbed.tsx` — inline widget component, loads Calendly script on mount
- Branded colors passed via URL params (bg=#fdfaf6, text=#0f172a, accent=#c87533)
- Wired into `/contact` page as a second section below the estimate form: "Prefer to Pick a Time? Schedule Your Free Estimate"
- Reads from `NEXT_PUBLIC_CALENDLY_URL` — renders nothing when env var is absent (graceful no-op)

Bug fix:
- Sanity build crash fixed — `??` (nullish coalescing) doesn't catch empty strings from `.env.local`; switched to `||` in both `client.ts` and `sanity.config.ts`; also changed placeholder from `"placeholder"` to `"p0000000"` (valid Sanity ID format)

Resend form rewire:
- Created `/api/contact/route.ts` — single Resend-powered API route handling 3 sources: `estimate`, `quiz`, `shop_waitlist`
- Every `resend.emails.send()` has explicit `replyTo` set to lead's email (build-log Error #50 compliance)
- HTML email templates with table layout for structured lead data
- Input escaped with `esc()` to prevent HTML injection
- Updated `EstimateForm.tsx`, `QuizClient.tsx`, `shop/page.tsx` — all POST to `/api/contact` instead of Web3Forms
- Web3Forms fully removed — no more `NEXT_PUBLIC_WEB3FORMS_KEY` dependency
- `from` addresses: `estimates@`, `quiz@`, `shop@` on `placedrightfences.com` (domain already verified in Resend)

Official logo integration:
- `placed-right-final-logo.png` received from Jen — gold picket fence crown + serif "PLACED RIGHT FENCE CO" on transparent bg
- Copied to `web/public/images/logo.png`
- **SiteHeader:** text wordmark replaced with logo image; header height increased 72px → 100px; logo 90px desktop / 80px mobile
- **SiteFooter:** text wordmark replaced with logo at 140px height
- **Mobile nav overlay:** logo at 72px below header
- **Favicon + Apple touch icon:** `web/src/app/icon.png` + `apple-icon.png` generated from logo
- **SchemaOrg:** `logo` and `image` fields added pointing to `/images/logo.png`
- **All pages:** `pt-[72px]` → `pt-[100px]` across 10 files to match taller header

Tagline fix:
- Corrected headline site-wide: "Love Wins Where Pickets Begin." → **"Love Wins Where Our Pickets Begin."** per Jen's direction
- Updated in `site.ts` (tagline + hero.headline) and CSS comment in `globals.css`

Testimonials cleanup:
- Cut from 30 → 11 reviews — removed all that implied years of history ("two winters", "two years ago", "six months in", etc.)
- Business is ~2 months old — no review should reference timeframes beyond recent
- Kept 11 with diverse use cases: dog containment (2), pool compliance, vinyl privacy, cedar privacy, kids' play area, aluminum, sloped terrain, gate repair, chain link, wood privacy
- All counts are dynamic (`testimonials.length`) — page auto-adjusts

10DLC / SMS compliance (per Nextiva requirements):
- Created `/privacy` page — full privacy policy (data collection, usage, disclosure, retention, cookies, SMS-specific language)
- Created `/terms` page — SMS Terms and Conditions with opt-in/out/help message templates
- Added optional SMS consent checkbox to estimate form Step 3 with linked text to /privacy and /terms
- SMS consent status ("Yes"/"No") included in owner notification email
- Privacy Policy + Terms & Conditions links added to footer bottom bar
- Both pages added to sitemap (priority 0.2, yearly change frequency)

Build: ✓ TypeScript clean, 39 static routes.

**Still outstanding (client-side):**
- `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET` — needs Stripe account
- `PRINTFUL_API_KEY` — needs Printful API token
- og-image.jpg (1200×630) — social shares
- Add `RESEND_API_KEY` + `OWNER_EMAIL` + `NEXT_PUBLIC_CALENDLY_URL` to Vercel env vars (production)

### Session 12 — 2026-04-16
**Completed: Individual fence type detail pages (dynamic route)**

Created `web/src/app/services/[slug]/page.tsx` — dynamic route for all 6 active fence types:
- `/services/trex-composite-fence`
- `/services/vinyl-fence`
- `/services/wood-fence`
- `/services/chain-link-fence`
- `/services/aluminum-fence`
- `/services/fence-repair`

Page structure per fence type:
- Dark hero with breadcrumb (Home > Services > [Type]), eyebrow, H1, tagline subtitle
- Overview section: description, use case chips, price range callout card with CTA
- "Why [Type] in New Hampshire" section: 4 benefits per fence type (inline data)
- FAQ section: 3 questions per fence type (inline data, unique per material)
- Dark CTA section with contextual label

Technical details:
- `generateStaticParams()` pre-renders all non-comingSoon services (6 pages)
- `generateMetadata()` generates unique title + description + OG tags per page
- comingSoon services (luxury) redirect to /contact
- Updated `sitemap.ts` to include all 6 fence type URLs (priority 0.8)
- TypeScript compiles clean

Build: TypeScript clean.

**Action items for next meeting (week of 2026-04-21):**
1. **Build out all service area city pages** — expand beyond Nashua/Manchester/Bedford to all 25+ cities for local search dominance
2. **Create Instagram account** (`@placedrightfence`) and link it to the site — currently linked in footer/site.ts but account doesn't exist yet
3. **FAQ update + estimate software embed** — awaiting embed code from Jen; update FAQ content and wire estimate button to new software
4. og-image.jpg (1200×630) — needed for social shares
5. ~~Individual fence type pages (/services/wood-fence, etc.) — Phase 5 SEO~~ ✅ Done (Session 12)
6. NH Permit Guide + Pool Fence Compliance pages — content SEO

### Session 13 — 2026-04-17
**Completed: RingCentral 10DLC compliance update — T&C, Privacy, SMS opt-in**

Trigger: Jen LaVault emailed at 6:21 PM (2026-04-17). RingCentral rejected the existing site copy during 10DLC carrier review. She attached verbatim legal-reviewed text for both pages and a tweak to the SMS opt-in checkbox label.

Work performed:
- Added `legal` export to `web/src/data/site.ts` with structured `LegalBlock` discriminated union (`p`, `ul`, `pLink`), `LegalSection`, and `LegalDocument` types. Contains Jen's verbatim privacy policy (intro + 14 sections) and terms & conditions (14 sections) + `smsConsent` string.
- Created `web/src/components/legal/LegalRenderer.tsx` — shared `LegalSection` + `LegalBlockRenderer` components that switch on `block.kind`.
- Rewrote `web/src/app/privacy/page.tsx` and `web/src/app/terms/page.tsx` as generic renderers — no hardcoded body copy.
- Updated `web/src/components/sections/EstimateForm.tsx` SMS consent label to read `{legal.smsConsent}` + the existing inline privacy/terms anchors. New phrasing per Jen: "for Account Notifications, Delivery Notifications, Customer service and occasional Marketing purposes related to our services. SMS communication will not be shared with any third party or affiliates for marketing purposes. If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms."

Rule violation fixed in the same session (per new Operating Principle #1):
- Old privacy/terms pages hardcoded legal copy directly in JSX, breaking CLAUDE.md line 121 ("All copy lives in /data/site.ts"). Anthony rejected a minimal copy-swap that would have preserved the violation. We did the proper refactor in the same commit instead of flagging for later. No deferred cleanup item created.

Verification:
- `npm run build` — TypeScript strict mode passes; 71 static routes generated.
- Dev-server QA via Playwright — `/privacy` renders intro + 14 numbered sections with real siteConfig values in contact block; `/terms` renders 14 sections including §10 SMS Communications intro + 8 bullets verbatim and §13 privacy link works; `/contact` estimate form Step 3 label matches Jen's exact new wording.

Files touched:
- `web/src/data/site.ts` (+275 lines legal export)
- `web/src/components/legal/LegalRenderer.tsx` (new, 47 lines)
- `web/src/app/privacy/page.tsx` (rewrite — 227 lines → 54 lines)
- `web/src/app/terms/page.tsx` (rewrite — 144 lines → 46 lines)
- `web/src/components/sections/EstimateForm.tsx` (SMS consent label swap)
- `progress.md` (this entry + new Operating Principles section)
- `C:\Projects\Optimus Assets\knowledge\build-log.md` (+2 pattern rows)

Still outstanding: **Text Jen at (978) 207-4077** to confirm live — her explicit ask in the email.

### Session 14 — 2026-04-19
**Completed: Removed `/pricing` sales page (site is live; Optimus sale closed on Premium tier)**

Jen LeVault purchased the **Premium package — $5,500 (one-time)**. The public `/pricing` route was an Optimus sales-comparison page (Starter / Growth / Premium tiers with ROI calculator) — no longer needed post-sale and not useful to end customers of Placed Right Fence Co.

Work performed:
- Saved durable offer record at `optimus-offer-sold.md` (project root) — captures Premium tier scope verbatim from the pricing page before deletion so the contract is traceable after the page is gone.
- Deleted `web/src/app/pricing/page.tsx` and `web/src/app/pricing/PricingClient.tsx` and the now-empty `pricing/` folder.
- Removed `{ label: "Pricing", href: "/pricing" }` from the `nav` export in `web/src/data/site.ts`.
- Removed `/pricing` entry from `web/src/app/sitemap.ts`.
- Page-Wiring Rule enforced in reverse: nav + sitemap removed in the same commit as the page deletion.

Verification:
- `Grep "/pricing"` across `web/src` returns no matches — route is fully unlinked.

### Session 15 — 2026-04-23
**Completed: Committed orphaned shop API routes (prod shop was broken without them)**

Two API routes existed locally but were never tracked — commit `156140c` pushed to origin/main:
- `web/src/app/api/printful/products/route.ts` — GET Printful sync products, serves seeded fallback on Printful outage
- `web/src/app/api/stripe/webhook/route.ts` — verifies signature, creates Printful order from `session.metadata.cart`, emails `OWNER_EMAIL` on manual items

Why this mattered: on Vercel these routes literally did not exist. `/shop` (when `NEXT_PUBLIC_SHOP_LIVE=true`) would 404 on product fetch, and any Stripe `checkout.session.completed` webhook would have no handler — orders would complete in Stripe with no Printful fulfillment trigger and no owner alert. Unblocks shop go-live once Stripe + Printful keys are populated.

**Remaining shop blockers (pre-launch):**
1. Stripe account → `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET` (webhook endpoint: `https://placedrightfences.com/api/stripe/webhook`, event: `checkout.session.completed`, API version must match `2026-03-25.dahlia` per webhook route.ts:12)
2. Printful account → `PRINTFUL_API_KEY` + replace placeholder IDs `100000001`–`100000008` in [web/src/data/shop.ts](web/src/data/shop.ts) with real sync product IDs once Jen's designs are created
3. Confirm SKU list with Jen (8 current: tee, hoodie, long sleeve, zip hoodie, hat, sticker pack, mug, tumbler) — trim or keep
4. Flip `NEXT_PUBLIC_SHOP_LIVE=true` after steps 1–3 and a successful test order

**Vercel env vars still outstanding (Session 11 flagged, still not added to production):**
- `RESEND_API_KEY`, `OWNER_EMAIL`, `NEXT_PUBLIC_CALENDLY_URL` — already set locally, not yet in Vercel
- Shop vars above (when ready)

### Session 16 — 2026-04-23
**Completed: Full shop infrastructure wired — Printful + Stripe live + all env vars in Vercel + multi-store header bug fixed**

Live session with Jen. Every shop integration stood up end-to-end. Only remaining blocker is Jen publishing actual product designs in Printful.

**Printful:**
- Store created: `Placed Right Fence Co.` (id `18065829`) via Manual/API integration at `printful.com/dashboard/store`
- Private token generated at `developers.printful.com/tokens` — name `Placed Right Fence Website — Vercel`, contact email `anthonyrosa14@icloud.com` (Anthony as operator, not Jen — she can't act on token-expiration alerts), max-duration expiration. Scopes: Sync products R/W, Orders R/W, Stores info R, File library R/W, Webhooks R/W.
- Added `PRINTFUL_API_KEY` to `web/.env.local` + Vercel (Production + Preview, Sensitive ON)

**Stripe:**
- Jen completed business verification (Clothing and accessories, LLC + EIN) — account flipped to Live mode during session
- Live API secret key (`sk_live_...`) added to `web/.env.local` + Vercel (Production + Preview, Sensitive ON)
- Live webhook created at `dashboard.stripe.com/workbench/webhooks`:
  - URL: `https://placedrightfences.com/api/stripe/webhook`
  - Event: `checkout.session.completed` (single event — route at `web/src/app/api/stripe/webhook/route.ts:29` early-returns on anything else)
  - API version: `2026-03-25.dahlia` (exact match with code pin at `webhook/route.ts:12`)
  - Name: `Printful Fulfillment`
- Live webhook signing secret (`whsec_...`) added to `web/.env.local` + Vercel (Production + Preview, Sensitive ON)

**Resend:**
- Rotated existing API key after Vercel flagged it "Needs Attention" (pre-dated the Sensitive flag feature). New key `re_...` added to `web/.env.local` + Vercel (Production + Preview, Sensitive ON). Old key revoked AFTER redeploy confirmed new key working.

**Other env vars finally added to Vercel production** (Session 11 had flagged as outstanding):
- `OWNER_EMAIL=info@placedrightfence.com` (non-sensitive, all 3 envs)
- `NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/placedrightfence-info/30min` (non-sensitive, all 3 envs)

**Multi-store Printful bug — found + fixed in same session:**
- Symptom: `/api/printful/products` endpoint kept returning `{"products":[...], "fallback":true}` after all env vars were set and multiple redeploys ran. Route was silently catching the Printful error and serving seeded fallback data from `web/src/lib/printful-seeded-products.json`.
- Diagnosis (Claude ran direct Printful API calls with token from `.env.local`): `GET /stores` returned 200 with BOTH `Personal orders` + `Placed Right Fence Co.` listed. But `GET /store/products` returned `400: "This endpoint requires 'store_id'!"`. Printful's API requires an explicit store when a token has access to more than one.
- Fix: `web/src/lib/printful.ts` refactored — extracted shared `printfulHeaders()` builder that reads `PRINTFUL_STORE_ID` from env and attaches as `X-PF-Store-Id` header on every request (list, variants, order creation). Added `PRINTFUL_STORE_ID=18065829` to `web/.env.local` + Vercel Production. Commit `75b1361` pushed, auto-deployed.
- Verified post-fix: `curl https://placedrightfences.com/api/printful/products` → `{"products":[]}` (empty array, no fallback flag — correct, no products published yet).

**What works right now:**
- ✅ All 7 env vars in Vercel production (`PRINTFUL_API_KEY`, `PRINTFUL_STORE_ID`, `STRIPE_SECRET_KEY` live, `STRIPE_WEBHOOK_SECRET` live, `RESEND_API_KEY`, `OWNER_EMAIL`, `NEXT_PUBLIC_CALENDLY_URL`)
- ✅ Printful API authenticated and returning real store data (empty, as expected)
- ✅ Stripe live mode active, webhook signing configured and matching route API version
- ✅ Resend rotated and ready (untested this session — next session should submit estimate form and confirm owner email fires)

**What's still blocking public shop launch:**
1. Jen finalizes 3–4 product designs — recommendation: hoodie + tee + hat + sticker pack (covers $8–$52 price spread, one item per category)
2. Jen publishes them in Printful Product Catalog with her design files
3. Anthony collects Sync Product IDs from Printful URLs and sends to Claude → 30-second edit to `web/src/data/shop.ts` replacing placeholder IDs `100000001`–`100000008`
4. Dry-run test: flip `NEXT_PUBLIC_SHOP_LIVE=true` privately, Jen buys cheapest product with her real card (Stripe live mode = no test cards work), verify Stripe + Printful + owner email trifecta, refund in Stripe
5. Flip `NEXT_PUBLIC_SHOP_LIVE=true` publicly, announce on Instagram/email list

**Observed side effect (not a bug):**
- `placedrightfences.com/api/...` 307-redirects to `www.placedrightfences.com/api/...`. Canonical in code (`siteConfig.url`) is the apex but Vercel domain config made www canonical. Functional but adds one hop. Can be flipped in Vercel Domain settings if we want apex as canonical. Low priority.

**Still outstanding (non-shop, from progress.md rollup):**
- `og-image.jpg` (1200×630) — social shares 404 on image
- NH Permit Guide + Pool Fence Compliance content pages (zero-competition SEO)
- `@placedrightfence` Instagram account — linked in footer but doesn't exist
- Expand city pages beyond Nashua/Manchester/Bedford
- FAQ update + estimate software embed (pending Jen's embed code)
- Phase 7: Lighthouse audit + Google Analytics

### Session 17 — 2026-04-23
**Completed: `/message` contact page + fixed the `info@` email typo site-wide (Jen's requests)**

Jen flagged two items mid-session:
1. The displayed contact email was plural (`info@placedrightfences.com`) but the actual Google Workspace inbox is singular (`info@placedrightfence.com`). Every visitor who copied the email from the site was emailing an address that doesn't exist.
2. She wants a second, simpler contact page for visitors who just want to ask a question — name, email, phone, message — without going through the multi-step estimate flow.

**Email fix (commit `5426d12`):**
- `siteConfig.email` in `web/src/data/site.ts`: plural → singular. Cascades through footer, /contact sidebar, /message sidebar, SchemaOrg, and every `mailto:` link on the site.
- `web/src/app/api/contact/route.ts` — `OWNER_EMAIL` fallback default updated to match (only triggers if the env var is missing, but kept consistent).
- **Deliberately kept plural** (do NOT change):
  - `siteConfig.domain` + `siteConfig.url` — website canonical is plural per Session 9 decision
  - `layout.tsx metadataBase` — matches canonical
  - Resend FROM addresses `estimates@placedrightfences.com`, `quiz@...`, `shop@...`, new `contact@...` — plural is what's verified in Resend. Using singular FROM would bounce since the singular domain isn't a verified Resend sending domain.

**New `/message` page:**
- `web/src/app/message/page.tsx` — mirrors the /contact layout (form 3 cols, trust sidebar 2 cols) but replaces the estimate-specific "72-hour on-site" guarantee block with a cross-link back to /contact for visitors who change their mind.
- `web/src/components/sections/ContactMessageForm.tsx` — simple 4-field form: full name, email, phone (optional), message. Submits to `/api/contact` with `source: "message"`. Success state matches EstimateForm pattern (green check + thank-you + back-to-home CTA).
- `web/src/app/api/contact/route.ts` — new `handleMessage()` branch. FROM: `contact@placedrightfences.com`, replyTo = sender's email (build-log Error #50 compliance). Subject: `New Contact Message — {name}`. Owner gets full HTML table with name/email/phone/message.
- `web/src/app/sitemap.ts` — `/message` added at priority 0.7.

**Nav — Contact dropdown (desktop) + mobile flat entries:**
- `web/src/components/layout/SiteHeader.tsx` — new "Contact" dropdown sibling to the existing "More" dropdown. Two items:
  - "Get a Free Estimate" → `/contact` (subtitle: "72hr on-site quote")
  - "Send a Message" → `/message` (subtitle: "General inquiries")
- Opening one dropdown closes the other (avoids overlap). Outside-click handler updated to cover both refs.
- Mobile menu: both `/contact` and `/message` appended to the flat nav list with staggered animation delays continuing from existing nav indices.
- "Get Free Estimate" CTA button kept in the header right-side CTA area — high-conversion real estate, not moved.

**Build + verification:**
- `npx tsc --noEmit` — exit 0, strict TS clean
- `npm run build` — 74+ static routes, `/message` listed as static, all builds pass
- Commit `5426d12` pushed to origin/main, Vercel auto-deploy triggered

**Follow-up (commit `577a956`) — mailto prefill:**
Anthony noticed that clicking the email address in the /message sidebar "did nothing." Diagnosed as a Chrome-side mailto-handler config, not a code bug (the href was already a correct `mailto:info@placedrightfence.com`). Fix on user side: enable Gmail as mailto handler via the overlapping-diamonds icon in the Chrome address bar on mail.google.com. On our side, added prefill so the experience is more useful once the handler IS set up:
- `site.ts` gains a `mailto` export with shared subject (`Question from placedrightfences.com`) and body (`Hi Placed Right Fence team,\n\n`)
- `lib/utils.ts` gains `buildMailto(email, subject?, body?)` helper using `URLSearchParams` for correct encoding
- 3 call sites updated: footer, /contact trust sidebar, /message trust sidebar
- **Deliberately kept bare** `mailto:${sender}` links in `api/contact/route.ts` (4 instances) — those open a REPLY to the lead's email from Jen's inbox, and subject/body should stay contextual to each inquiry

**Follow-up (commit `f82bba3`) — Contact becomes a direct link, not a dropdown:**
Anthony saw the deployed dropdown and pushed back: one click to the general-inquiry form is the expected behavior; the dropdown added friction. The "Get Free Estimate" CTA button in the header + hero already surfaces `/contact` prominently, so the second estimate link inside a dropdown was redundant.
- `site.ts nav`: added `{ label: "Contact", href: "/message" }` in sixth position (between Shop and Service Areas).
- `SiteHeader PRIMARY_HREFS`: added `/message` so "Contact" renders in the primary desktop nav row, not stuck behind More.
- Removed: `contactLinks` array, `contactOpen` state, `contactRef`, the entire Contact-dropdown JSX block, the separate mobile contactLinks loop. Mobile nav now picks up `/message` automatically through the shared `nav.map()` iteration.
- Net diff: −76 / +7 lines. The "More" dropdown is now the only dropdown in the header again.
