# design-system.md — Placed Right Fence Co. LLC
# Brand Constitution — synthesized from market-intelligence.md + initial-business-data.md
# Created: 2026-03-31
# Status: Approved for Phase 1 scaffolding

---

## 1. Brand Identity Statement

Placed Right Fence Co. LLC is a family-run NH fence company built on the conviction that a fence is not a product — it is a feeling. It is a child running free in the backyard. A dog who never darts toward the road again. A yard that finally feels private, safe, and yours. Every competitor in the NH market leads with product specs and tenure. Placed Right leads with transformation: what life looks like after the fence goes in. The brand is warm without being soft, professional without being corporate, local without being small. Within 5 seconds of landing on the website, a visitor should feel: *This is a real person who knows New Hampshire, builds things right, and will actually call me back.* That feeling — trust, warmth, competence — is the entire design brief.

**Source:** market-intelligence.md Section 2 (persona Sarah Pelletier), Section 8 (visual differentiation), Section 9 (emotional positioning gap). initial-business-data.md Section 4 (tone of voice, brand personality).

---

## 2. Color Palette

**Theme:** Hybrid — near-black brand surfaces (header, hero, footer) + warm cream content sections.
**Source of truth:** Business card (IMG_1107.jpeg) — glossy black with warm gold lettering and picket fence logo.
**Rationale:** The client's existing brand identity is black + gold, established via printed business cards. The hybrid approach preserves this premium identity at first impression (header, hero) while keeping content sections light for conversion optimization. No NH fence competitor uses this palette — maximum differentiation. (Updated 2026-04-01)

### CSS Custom Properties (globals.css)

```css
:root {
  /* Brand Colors — black + gold (source: business card) */
  --primary: #0D0D0D;                       /* Near-black — header, hero, footer bg */
  --primary-muted: rgba(13, 13, 13, 0.6);   /* Primary at 60% */
  --accent: #C9A84C;                         /* Warm gold — CTAs, highlights, eyebrows */
  --accent-muted: rgba(201, 168, 76, 0.14);  /* Gold tint — tag backgrounds, icon circles */
  --accent-dark: #A8893A;                    /* Darker gold — hover states */

  /* Background Scale (light content sections — hybrid approach) */
  --bg-base: #F5F0E8;       /* Warm cream/ivory — page background */
  --bg-elevated: #EDE8DF;   /* Slightly warmer cream — section alternates */
  --bg-card: #FFFFFF;       /* Pure white — cards, form fields */

  /* Text Scale (for light content sections) */
  --text-primary: #1A1A1A;                   /* Near-black — headings, primary copy */
  --text-secondary: rgba(26, 26, 26, 0.68);  /* Body text */
  --text-muted: rgba(26, 26, 26, 0.42);      /* Eyebrows, labels, micro-copy */

  /* Supporting Colors */
  --sage: #7A8B6F;           /* Muted sage green — use-case chips */
  --sage-muted: rgba(122, 139, 111, 0.15);
  --border: rgba(0, 0, 0, 0.1);        /* Neutral border */
  --border-hover: rgba(0, 0, 0, 0.2);
}
```

### Color Usage Rules

| Token | Use |
|-------|-----|
| `--primary` | Header bg, hero bg, footer bg, mobile overlay bg |
| `--accent` | Gold — CTA buttons, eyebrows on dark sections, checkmarks, icon circles, hover states |
| `--bg-base` | Cream — page body bg, light section backgrounds |
| `--bg-elevated` | Warmer cream — alternating section backgrounds |
| `--bg-card` | White — cards, form fields |
| `--text-primary` | Headings + body on light sections |
| `--text-secondary` | Supporting copy on light sections |
| `--text-muted` | Eyebrows, labels, micro-copy on light sections |

### Dark Section Text Rules (header, hero, footer, dark CTAs)
- Headings: `text-white`
- Body/subheadline: `rgba(255,255,255,0.65)`
- Eyebrows: `var(--accent)` (gold)
- Muted: `rgba(255,255,255,0.40)`

### Button Rules (updated for gold)
- Primary: gold bg (`var(--accent)`) + near-black text (`#0D0D0D`) — works on both dark and light sections
- Secondary on light sections: dark border + dark text (`border-primary text-primary`)
- Secondary on dark sections: white border + white text (className override required)
| `--sage` | Icon fills, decorative elements, "certified/insured" badges |

**Never use:** Purple gradients, cold corporate gray, generic lime green, or any palette from the NH fence competitor set (navy/gray, green/brown). (Source: market-intelligence.md Section 8 — competitor palette audit)

---

## 3. Typography System

**Rationale:** DM Serif Display for headings is the single most differentiated typography choice in the NH fence market — every single competitor uses sans-serif headings. A warm, elegant serif signals craftsmanship and premium quality while the tagline "Love Wins Where Our Pickets Begin" has poetic quality that only a serif can carry with weight. DM Sans pairs perfectly from the same type family, ensuring text-rendering harmony. (Source: market-intelligence.md Section 8)

### Font Definitions

```css
/* Add to globals.css after CSS custom properties */
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root {
  --font-display: 'DM Serif Display', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', 'Courier New', monospace;
}
```

### Type Scale

| Element | Font | Size (mobile) | Size (desktop) | Weight | Line Height |
|---------|------|---------------|----------------|--------|-------------|
| H1 Hero | DM Serif Display | 2.5rem (40px) | 3.75rem (60px) | 400 | 1.1 |
| H2 Section | DM Serif Display | 2rem (32px) | 2.75rem (44px) | 400 | 1.15 |
| H3 Sub-section | DM Serif Display | 1.5rem (24px) | 1.875rem (30px) | 400 | 1.25 |
| H4 Card Title | DM Sans | 1.125rem (18px) | 1.25rem (20px) | 600 | 1.3 |
| Body large | DM Sans | 1.0625rem (17px) | 1.125rem (18px) | 400 | 1.65 |
| Body | DM Sans | 1rem (16px) | 1.0625rem (17px) | 400 | 1.65 |
| Small / Caption | DM Sans | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.5 |
| Eyebrow / Label | IBM Plex Mono | 0.75rem (12px) | 0.8125rem (13px) | 500 | 1.4 |
| Button | DM Sans | 1rem (16px) | 1rem (16px) | 600 | 1 |
| Nav | DM Sans | — | 0.9375rem (15px) | 500 | 1 |

### Font Application Rules
- Headlines (H1–H3) always use DM Serif Display — never DM Sans for a headline
- Eyebrows (small all-caps labels above headings, e.g., "FAMILY-RUN · SOUTHERN NH") use IBM Plex Mono, letter-spacing: 0.08em
- Buttons use DM Sans 600 weight only
- All-caps text: only for eyebrow labels; never for body copy, headings, or CTAs

---

## 4. Spacing & Layout System

```
Max-width containers:
  Full:     100% (no max — full bleed sections)
  Content:  max-w-7xl (1280px) — standard page content
  Narrow:   max-w-3xl (768px) — blog posts, FAQ, focused content

Section vertical padding:
  Desktop:  py-24 (96px top + bottom)
  Mobile:   py-16 (64px top + bottom)
  Hero:     pt-32 pb-24 desktop / pt-24 pb-16 mobile

Card padding:
  Standard: p-6 (24px)
  Large:    p-8 (32px)
  Small:    p-4 (16px)

Grid system:
  Services grid:    3 columns desktop / 1 column mobile (md:grid-cols-3)
  Two-column:       2 columns desktop / 1 column mobile (md:grid-cols-2)
  Cities grid:      4 columns desktop / 2 columns mobile (sm:grid-cols-2 lg:grid-cols-4)

Gutters:
  Section grid:     gap-8 (32px)
  Card grid:        gap-6 (24px)
  Inline:           gap-4 (16px)
```

---

## 5. Component Style Rules

### Buttons

```
Primary (terracotta):
  bg: --accent (#C4704B)
  text: white
  hover: bg #B3613D (10% darker)
  border-radius: 6px
  padding: px-6 py-3 (desktop) / px-5 py-3 (mobile)
  font: DM Sans 600, 16px
  shadow: 0 2px 8px rgba(196, 112, 75, 0.3)
  hover shadow: 0 4px 16px rgba(196, 112, 75, 0.4)

Secondary (navy outline):
  bg: transparent
  border: 2px solid --primary
  text: --primary
  hover: bg --primary, text white
  border-radius: 6px
  padding: px-6 py-3

Ghost (cream):
  bg: transparent
  text: --primary
  hover: text --accent, underline
  No border, no shadow

Sticky mobile bottom bar:
  bg: --primary (navy)
  text: white
  Full-width, fixed bottom-0
  Height: 56px
  CTA text: "Get Free Estimate →"
  Secondary: tel: link "Call (978) 207-4077" (update to 603 when acquired)
```

### Cards

```
Service card:
  bg: --bg-card (white)
  border: 1px solid --border
  border-radius: 12px
  padding: p-6
  hover: border-color --accent, shadow 0 8px 32px rgba(0,0,0,0.08)
  transition: all 0.2s ease

Gallery card:
  Aspect ratio: 4/3
  border-radius: 8px
  overflow: hidden
  hover: scale(1.02), shadow
```

### Form Inputs

```
Input / Select:
  bg: white
  border: 1.5px solid --border
  border-radius: 8px
  padding: px-4 py-3
  font: DM Sans 400, 16px
  focus: border-color --accent, outline: none, ring: 2px --accent-muted
  placeholder: --text-muted

Multi-step form step container:
  bg: --bg-card
  border: 1px solid --border
  border-radius: 16px
  padding: p-8
  max-width: 640px, centered

Visual selector cards (Step 1 — fence type):
  bg: white
  border: 2px solid --border
  border-radius: 12px
  padding: p-4
  selected: border-color --accent, bg --accent-muted
  hover: border-color --primary-muted
```

### Navigation

```
Desktop nav:
  bg: white / transparent on hero (scrolled → white with shadow)
  height: 72px
  logo: left
  links: DM Sans 500, --text-primary, hover --accent
  CTA button: Primary terracotta
  sticky: yes

Mobile nav:
  hamburger → full-screen overlay
  bg: --primary (navy)
  links: DM Serif Display, white, large
  CTA: full-width terracotta button at bottom
```

---

## 6. Photography & Media Direction

**Concept: "Life Behind the Fence"** — Show what fences enable, not just the product. (Source: market-intelligence.md Section 8)

### Required Shot Types (for client photo brief)

| Type | Description | Priority |
|------|-------------|----------|
| Lifestyle — pets | Dog running freely in fenced yard, natural/candid | P0 |
| Lifestyle — kids | Children playing in fenced backyard | P0 |
| Completed fence — full yard | Wide shot showing full property transformation | P0 |
| Before/after pairs | Same angle: before installation, after completion | P0 |
| Installation in progress | Crew setting posts, leveling, concrete | P1 |
| Craftsmanship close-up | Post footing, hardware, boards, picket alignment | P1 |
| Seasonal | Any season (NH four-season appeal) | P2 |
| Owner/team | Owner on job site, professional but natural | P2 |

### Aspect Ratios

| Use | Ratio |
|-----|-------|
| Hero (desktop) | 16:9 or 3:2 — full bleed |
| Hero (mobile) | 4:5 — portrait crop |
| Gallery cards | 4:3 |
| Before/after slider | 16:9 (same ratio for both) |
| Service section | 1:1 (square) or 3:2 |

### Processing Style
- Warm color grading — slightly golden tones, never cold/blue
- High contrast — fences should visually "pop" against backgrounds
- Natural light preferred over artificial
- No filters that look Instagram-processed
- No stock photography — real job photos only from client

### Prohibited
- Stock photos of fences or families (destroys credibility per market-intelligence.md Section 9)
- Images with visible Unsplash or stock library URL parameters
- Cold, blue, or desaturated processing
- Empty yards with no human/animal presence in lifestyle shots

---

## 7. Tone of Voice

**Core principle:** Speak like a knowledgeable NH neighbor, not a contractor quoting a brochure. (Source: initial-business-data.md Section 4, market-intelligence.md Section 2 — Sarah Pelletier persona)

### Writing Principles

**1. Lead with the outcome, not the product**
- Rule: Name what the fence enables before naming what it is.
- BEFORE (wrong): "We install 6-foot vinyl privacy fence panels with aluminum framing and self-closing gate hardware."
- AFTER (correct): "Finally, the yard that feels like yours — private, safe, and beautiful through every New England season."

**2. Name the fear before dismissing it**
- Rule: Acknowledge what buyers are afraid of before making claims. (Source: market-intelligence.md Section 2 — buying blockers)
- BEFORE (wrong): "We're reliable and professional — call us today!"
- AFTER (correct): "We know you've heard contractors promise and disappear. So here's our guarantee: you'll hear from us within 4 hours or the first consultation is free."

**3. Earn NH with specifics, not slogans**
- Rule: Use real NH details (frost line depth, granite soil, specific towns, frost heave) rather than just claiming to be "local."
- BEFORE (wrong): "We know the area and understand New England weather."
- AFTER (correct): "NH posts go in at 60 inches minimum — well below our 48-inch frost line — because granite soil and freeze-thaw cycles destroy shallow footings."

**4. Warm but never fluffy**
- Rule: Emotional warmth is in the outcomes and details, not in exclamation points or filler phrases.
- BEFORE (wrong): "We're so excited to help you transform your outdoor space!!!"
- AFTER (correct): "The day your dog runs the backyard without a leash for the first time — that's what we build for."

**5. Price respect over price anxiety**
- Rule: Reference pricing ranges openly and matter-of-factly. Hiding prices treats buyers like they can't handle the truth.
- BEFORE (wrong): "Every project is unique — contact us for a quote!"
- AFTER (correct): "Most 150-foot cedar privacy fences in Southern NH run $4,800–$7,200 installed. What moves the number: material, gates, and whether we're drilling through ledge."

---

## 8. Brand Personality Axes

```
Warm & Personal  ◄━━━━━━━━●━━━━━━━━━► Cold & Corporate
                           ↑ Placed Right: 70% warm, 30% professional credibility

Craft & Artisan  ◄━━━━━━●━━━━━━━━━━━► Industrial Utility
                         ↑ Placed Right: 60% craft emphasis

NH Local         ◄━━━━━━━━━━●━━━━━━━► Regional/National
                              ↑ Placed Right: Unapologetically NH-specific

Transparent      ◄━━━━━━━━━━━━━━━●━━► Opaque
                                  ↑ Placed Right: Radical transparency on pricing and process
```

---

## 9. Competitor Differentiation Statement

**vs. Fences Unlimited (market leader, 55+ years, 4 locations):**
Fences Unlimited wins on tenure, scale, and content depth. Placed Right cannot and should not compete on those axes. The differentiation is personal access and local warmth. Fences Unlimited's website reads like a regional supplier catalog. Placed Right's should feel like you're calling a neighbor who happens to be the best fence installer in NH. The owner's name on every page, a personal guarantee, and family-first brand language make Placed Right's small size an asset, not a liability. Visual treatment: where Fences Unlimited uses safe blue/white corporate palette, Placed Right uses warm terracotta and cream — instantly distinguishable.

**vs. Finnegan Fence (best website UX in market, 8/10):**
Finnegan is the strongest direct competitor in terms of digital presence. Their solution-based navigation (Pool Safety, Pet Safety, Privacy) is the best UX pattern in the market — Placed Right should adopt this structure rather than material-based navigation. The differentiation is emotional depth: Finnegan's copy is good but still product-focused. Placed Right's copy leads with outcomes and feelings. Photography strategy: where Finnegan shows completed fences, Placed Right shows what happens *inside* the fenced space — kids playing, dogs running, families outside. Typography: Finnegan uses sans-serif throughout; Placed Right's DM Serif Display headings are immediately distinguishable.

**vs. Superior Fence & Rail (national franchise, 30K+ reviews):**
Superior wins on social proof at scale but loses on local authenticity — their Nashua page contains testimonials from Nashville and Boise. Placed Right's counter-positioning is hyper-local specificity: real NH project photos, real NH customer names, real NH towns in testimonials, specific frost-line engineering language, and a human owner you can look up. Every element of the design should signal "this person lives where you live" — which is the one thing a national franchise can never fake.

---

## 10. Design Anti-Patterns (The Prohibited List)

Derived from market-intelligence.md Section 8 (competitor analysis) and Section 9 (AVOID directives).

1. **No stock photography.** Unsplash/Getty images of generic fences destroy credibility. Real job photos only. Every competitor's stock photos are identifiable — ours will not be.
2. **No cold/corporate palette.** Navy-on-white without warmth is what Fences Unlimited does. The terracotta accent must appear above the fold.
3. **No sans-serif-only typography.** All competitors use 100% sans-serif. DM Serif Display headings are a non-negotiable visual differentiator.
4. **No "call for a quote" as the only pricing signal.** Pricing opacity is the market default and a trust destroyer. Publish ranges.
5. **No 3-field contact forms.** Name/Email/Message without phone, fence type, or project context. Multi-step visual form only.
6. **No sliding carousels in hero.** Slow, low engagement, penalty for first-load performance.
7. **No video background in hero.** Kills mobile load time.
8. **No social media icons in header.** Sends leads away from the site.
9. **No purple gradients.** Generic AI-generated aesthetic — completely wrong for a trades contractor.
10. **No "coming soon" CTA placeholders.** Per CLAUDE.md Placeholder CTA Rule — every conversion flow must be interactive before phase sign-off.
11. **No generic trust badge overload.** "Licensed, Bonded, Insured" icons alone are not trust signals. Specific claims with proof: "Fully insured — certificate available on request" is more credible than an icon.
12. **No homepage that leads with fence materials.** Lead with outcomes (safety, privacy, freedom) not product specs (vinyl, cedar, chain link).

---

## 11. Sections to Include / Remove / Add

### Base Template Sections (from website-build-template.md removal guide)

| Section | Include? | Rationale |
|---------|----------|-----------|
| Shop (Stripe + Printful) | **No** | Service business, not e-commerce. Remove entirely. |
| Blog (Sanity CMS) | **Simplified** | Phase 3: 2–3 static content pages (permits, frost line, pool code). Full CMS in Phase 5 only if client wants to self-manage content. Given 3–4 week launch target, static is faster. |
| Quiz / Lead capture | **Yes — replace with multi-step estimate form** | The "quiz" pattern becomes the multi-step visual estimate form (CUSTOM BUILD — market-intelligence.md Section 5 Gap 4). Route: /estimate or modal on every page. |
| Instagram feed | **Phase 5** | Client only has 3 posts on @placedrightfence. No feed worth showing at launch. Add once they have 12+ posts. |
| ROI Calculator | **No** | Dev/sales tool — irrelevant for fence contractor. Remove entirely. |
| Particle system hero background | **No** | Template's particle canvas is designed for luxury personal brands. Replace with real project photo + warm gradient overlay for this client. |

### Custom Additions Required (not in template)

| Custom Feature | Source | Complexity | Phase |
|----------------|--------|------------|-------|
| Multi-step visual estimate form (3-step: type → purpose → contact) | market-intelligence.md Section 5 Gap 4, Section 7 | Medium | Phase 4 |
| Before/after photo comparison slider component | market-intelligence.md Section 5 Gap 3 | Medium | Phase 4 |
| Sticky mobile bottom CTA bar (fixed, persists through scroll) | market-intelligence.md Section 7 | Low | Phase 3 |
| Response-time guarantee + auto-confirmation on form submit | market-intelligence.md Section 7 | Low | Phase 4 |
| Service area page with 25+ city-level copy blocks | initial-business-data.md Section 3 | Medium | Phase 5 |
| Transparent pricing ranges section (Good/Better/Best tiers) | market-intelligence.md Section 4 | Low | Phase 5 |
| NH Fence Permit Guide page | market-intelligence.md Section 5 Gap 1 | Low | Phase 5 |
| Pool Fence Code Compliance page | market-intelligence.md Section 5 Gap 5 | Low | Phase 5 |
| Frost Line Engineering content page | market-intelligence.md Section 5 Gap 2 | Low | Phase 5 |
| Solution-based navigation (Pool Safety / Pet Safety / Privacy / Decorative) | market-intelligence.md Section 3 — Finnegan pattern | Low | Phase 3 |

### Standard Template Sections — Confirmed Active

| Section | Route / Location | Notes |
|---------|-----------------|-------|
| Hero | / | Real photo bg, NOT particle canvas. Add trust micro-bar below CTAs. |
| Services overview | / (section) | Solution-based: Privacy, Pool Safety, Pet Safety, Decorative, Repair |
| Social proof strip | / (section) | Google stars, "NH Born & Family Run," "Licensed & Insured," "72-hr estimate" |
| Trust / Why Us | / (section) | Address all 7 buying blockers from market-intelligence.md Section 2 |
| Gallery preview | / (section) | 6 best photos → links to /gallery |
| FAQ preview | / (section) | 4–5 highest-anxiety questions → links to /faq |
| Contact CTA | / (section) | Final homepage CTA before footer |
| Services page | /services | Fence types + use cases. Solution-first nav. |
| About page | /about | Owner story, NH roots, family, insurance |
| Gallery page | /gallery | Before/after slider + category filter |
| Service Areas | /service-areas | 25+ NH cities |
| FAQ page | /faq | Full objection handling |
| Contact / Estimate | /contact | Multi-step form Phase 4, simple form Phase 3 |
| Footer | All pages | NAP, links, insurance note, copyright |
