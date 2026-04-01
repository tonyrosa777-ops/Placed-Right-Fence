# progress.md — Placed Right Fence Co. LLC Website Build

**Project:** placedrightfence.com — new website build
**Client:** Placed Right Fence Co. LLC | Nashua, NH (Southern NH and Seacoast)
**Business Type:** Family-run residential fence installation and repair contractor
**Launch Target:** April 2026 (ASAP — client wants live in 3–4 weeks; spring is peak season)
**Last Updated:** 2026-03-31
**Current Phase:** Phase 1 — Design System & Brand Identity

---

## Phase Overview

| Phase | Name | Status |
|-------|------|--------|
| 0 | Environment Setup & Strategy | ✅ Complete |
| 1 | Design System & Brand Identity | 🔄 In Progress |
| 2 | Site Architecture & Content Planning | ⬜ Not Started |
| 3 | Core Pages Build | ⬜ Not Started |
| 4 | Conversion Flow Integration | ⬜ Not Started |
| 5 | Secondary Pages & Content | ⬜ Not Started |
| 6 | SEO, Schema & Analytics | ⬜ Not Started |
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
- Build complete — next: Card component + homepage hero section

**Blockers:**
- None — Vercel connected ✅
