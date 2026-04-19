# Optimus Sales Agreement — Placed Right Fence Co. LLC

**Date sold:** 2026-04-19
**Client:** Jen LeVault — Placed Right Fence Co. LLC (Nashua, NH)
**Package purchased:** **Premium — $5,500 (one-time)**
**Status:** Live. Pricing/sales page removed from production on 2026-04-19.

This file is the durable record of the exact offer the client accepted. The
public-facing `/pricing` page (Optimus sales comparison page) was deleted once
the sale closed, so this document is the canonical source for what was promised
in Premium.

---

## Premium package — what was sold

Headline: "The complete build."
Description: "Every capability, fully built and launched. Includes the full
merch store, 10+ service area pages, and 30 days of post-launch support so
nothing breaks silently."

### Included (Premium = Everything in Growth + the following)

**From Starter (foundation):**
- Custom homepage with Forge hero animation
- About, Contact & FAQ pages
- Basic estimate form → phone/email lead delivery
- 6 homepage testimonials
- LocalBusiness + schema markup
- Mobile-first responsive design
- Vercel deployment + 1 year hosting setup

**From Growth (SEO engine + conversion tools):**
- 3-step visual estimate form (fence type → details → contact)
- Fence Finder Quiz — "Don't know what you need?" wizard with personalized recommendation
- Photo gallery with category filter (Before/After)
- 10 full SEO blog articles targeting NH fence keywords
- 30-review testimonials page (`/reviews`)
- 4 individual fence type pages (Wood, Vinyl, Aluminum, Chain Link)
- Services hub page
- FAQ schema markup (rich snippets in Google)

**Premium-exclusive adds:**
- Branded merch shop (Stripe checkout + Printful POD fulfillment)
- **10+ city-specific service area pages** (delivered: 27 cities — over-delivered)
- Priority support — 48hr response SLA
- Monthly 30-min check-in call
- Sanity CMS training session (recorded)
- Staging environment for safe updates
- **3 revision rounds**
- **30 days post-launch support**

### Not included / out of scope
Nothing was explicitly excluded in Premium — it was the top tier.

---

## What the client actually received at launch

As of 2026-04-19, delivered scope exceeds the Premium contract on several axes:
- 27 city service area pages (promised 10+)
- Full blog with 10+ articles + content SEO guides (Phase 5)
- Stripe + Printful merch shop wired end-to-end (API routes under `web/src/app/api/stripe/*` and `web/src/app/api/printful/*`)
- RingCentral 10DLC SMS compliance review passed (T&C, privacy, SMS opt-in)

Items still open against contract (check `progress.md` for current state):
- Revision rounds — track usage; 3 included
- 30-day post-launch support window starts at go-live date (not yet set)
- Monthly 30-min check-in calls — recurring obligation
- Sanity CMS training session — recorded, pending delivery

---

## Source of truth

The Premium tier definition was taken from the now-deleted
`web/src/app/pricing/PricingClient.tsx` (commit history preserves it if needed).
If the scope is ever disputed, this file and the git history of `PricingClient.tsx`
are the authoritative references.
