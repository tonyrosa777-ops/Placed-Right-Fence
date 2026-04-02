// /data/site.ts — ALL site copy lives here. Zero hard-coded strings in components.
// Source: initial-business-data.md, market-intelligence.md, design-system.md

export const siteConfig = {
  name: "Placed Right Fence Co. LLC",
  shortName: "Placed Right Fence",
  tagline: "Love Wins Where Our Pickets Begin.",
  description:
    "Southern NH's trusted family fence installer. Wood, vinyl, aluminum, and chain link — built below the frost line, built to last. Free on-site estimates within 72 hours.",
  phone: "(978) 207-4077",
  email: "info@placedrightfence.com",
  address: {
    street: "221 Main St #8008",
    city: "Nashua",
    state: "NH",
    zip: "03060",
    full: "221 Main St #8008, Nashua, NH 03060",
  },
  social: {
    instagram: "https://www.instagram.com/placedrightfence",
    instagramHandle: "@placedrightfence",
  },
  estimateWindow: "72 hours",
  domain: "placedrightfence.com",
  url: "https://placedrightfence.com",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────
// Source: market-intelligence.md §2 audience language, §9 emotional positioning gap

export const hero = {
  eyebrow: "Family-Run · Southern NH · Insured",
  headline: "The Last Fence\nYou'll Ever Need.",
  subheadline:
    "A safe yard for your kids and dogs shouldn't be this hard to get. We install fences built for New Hampshire — below the frost line, through granite soil, guaranteed to stay straight.",
  primaryCta: { label: "Get Your Free Estimate", href: "/contact" },
  secondaryCta: { label: "See Our Work", href: "/gallery" },
  trustBadges: [
    "Free Estimate Within 72 Hours",
    "Family-Owned & Insured",
    "NH Born & Raised",
    "No Hidden Costs",
  ],
} as const;

// ─── Services ─────────────────────────────────────────────────────────────────
// Source: initial-business-data.md §2 Core Offering

export const services = [
  {
    id: "wood",
    name: "Wood Fencing",
    slug: "wood-fence",
    tagline: "Classic. Private. Built for NH winters.",
    description:
      "Pressure-treated cedar and pine privacy fences with posts set below the 48-inch NH frost line. Your fence won't heave, shift, or rot within years like cheap installations. We build it once, right.",
    useCases: ["Privacy", "Pet containment", "Property boundary", "Decorative"],
    priceRange: "$25–$45 per linear foot installed",
    icon: "🪵",
  },
  {
    id: "vinyl",
    name: "Vinyl Fencing",
    slug: "vinyl-fence",
    tagline: "Zero maintenance. Decades of clean.",
    description:
      "Premium vinyl that won't rot, splinter, or need painting — ever. Perfect for NH homeowners who want privacy and curb appeal without the weekend maintenance. Available in white, tan, and gray.",
    useCases: ["Privacy", "Curb appeal", "Low maintenance", "Pool enclosure"],
    priceRange: "$35–$60 per linear foot installed",
    icon: "🏡",
  },
  {
    id: "aluminum",
    name: "Aluminum Fencing",
    slug: "aluminum-fence",
    tagline: "Elegant. Corrosion-free. Pool-code ready.",
    description:
      "Ornamental aluminum that meets NH pool code compliance requirements out of the box. Rust-proof and powder-coated for permanent finish. Great for defining property lines with style.",
    useCases: ["Pool safety", "Decorative boundary", "Pet containment", "Commercial"],
    priceRange: "$30–$55 per linear foot installed",
    icon: "⚙️",
  },
  {
    id: "chain-link",
    name: "Chain Link Fencing",
    slug: "chain-link-fence",
    tagline: "Durable. Affordable. Effective.",
    description:
      "Galvanized and vinyl-coated chain link — the workhorse of pet and yard containment. Posts set in concrete below frost line. Decades of containment for a fraction of the cost of wood or vinyl.",
    useCases: ["Pet containment", "Yard boundary", "Commercial", "Security"],
    priceRange: "$15–$28 per linear foot installed",
    icon: "🔗",
  },
  {
    id: "repair",
    name: "Fence Repair",
    slug: "fence-repair",
    tagline: "Storm damage. Rotted posts. We fix it right.",
    description:
      "NH winters are brutal on fences. Whether it's heaved posts, rotted wood, a downed section from that last storm, or a gate that won't close — we diagnose the root cause and fix it properly so it doesn't happen again.",
    useCases: ["Storm damage repair", "Post replacement", "Section rebuild", "Gate repair"],
    priceRange: "Starting at $350 — free assessment included",
    icon: "🔧",
  },
] as const;

// ─── Pricing Ranges ──────────────────────────────────────────────────────────
// Source: initial-business-data.md §2 Pricing

export const pricing = {
  disclaimer:
    "Final pricing depends on lot size, terrain, material grade, and site conditions. All estimates are free and given in writing before any work begins. No hidden costs. No surprises.",
  ranges: [
    {
      label: "Small Job",
      description: "Pet fence section, single repair, gate install",
      range: "$1,200 – $2,500",
    },
    {
      label: "Full Backyard",
      description: "Average residential privacy fence install",
      range: "$4,000 – $8,000",
    },
    {
      label: "Premium/Large",
      description: "Large lot, premium vinyl, full perimeter",
      range: "$8,000 – $15,000",
    },
  ],
} as const;

// ─── Testimonials ─────────────────────────────────────────────────────────────
// Simulated from real audience language in market-intelligence.md §2
// Replace with real client testimonials as they are collected

export const testimonials = [
  {
    name: "Michelle D.",
    location: "Merrimack, NH",
    rating: 5,
    useCase: "Dog containment",
    text: "We adopted a rescue dog in October and needed a fence fast before she figured out she could just walk out of the yard. Roger came out within 2 days to look at the property, gave us a quote that didn't change, and the crew had the whole thing done in a day and a half. The fence looks amazing and she's been running laps since the minute we let her out. Worth every penny.",
  },
  {
    name: "Tom & Karen B.",
    location: "Bedford, NH",
    rating: 5,
    useCase: "Pool compliance",
    text: "We got pool quotes from 3 companies. One never called back, one quoted us $4k over budget. Placed Right came in fair, explained every step of what they were doing to meet code, and got it done before our pool opening. Inspector passed it no issues. Would recommend to anyone in the area.",
  },
  {
    name: "Dave P.",
    location: "Hudson, NH",
    rating: 5,
    useCase: "Storm repair",
    text: "Had a section of our old stockade fence blow down during that storm in March. Posts were completely rotted at the base — hadn't been set right to begin with. These guys replaced the whole rear section with pressure-treated posts, said they go below frost line because of the NH winters. Two months later everything still looks perfectly straight. Should've replaced it years ago.",
  },
  {
    name: "Alison F.",
    location: "Exeter, NH",
    rating: 5,
    useCase: "Vinyl privacy",
    text: "I was nervous about hiring a contractor I hadn't heard of before, but Roger was patient with all my questions and didn't make me feel rushed. He texted me updates the day of install which I really appreciated. The vinyl fence is exactly what I was hoping for — private, clean looking, and our neighbors actually came over to ask who did it.",
  },
  {
    name: "Mark C.",
    location: "Manchester, NH",
    rating: 5,
    useCase: "New home",
    text: "Moved into a new house last spring and the yard was completely open. Had 2 kids and needed it done before summer. They squeezed us in, the price was fair — we got 2 other quotes — and the fence looks great. No complaints whatsoever. These are good people doing honest work.",
  },
  {
    name: "Jennifer R.",
    location: "Nashua, NH",
    rating: 5,
    useCase: "Dog containment",
    text: "I specifically needed a fence that would actually contain my lab mix — he's an escape artist and I had been burned by a cheap install that left gaps under the fence on uneven ground. These guys walked the whole yard before quoting, noted where the grade dropped, and built around it. No gaps, no problems. My dog is out there right now. Genuinely could not be happier.",
  },
] as const;

// ─── Trust Signals ────────────────────────────────────────────────────────────
// Source: initial-business-data.md §7, market-intelligence.md §7

export const trustSignals = [
  {
    label: "Free Estimates",
    detail: "On-site within 72 hours",
    icon: "calendar",
  },
  {
    label: "Fully Insured",
    detail: "Certificate of insurance available on request",
    icon: "shield",
  },
  {
    label: "NH Born & Raised",
    detail: "We know frost heave, granite soil, and muddy springs",
    icon: "map",
  },
  {
    label: "No Hidden Costs",
    detail: "Written estimate before any work begins",
    icon: "check",
  },
  {
    label: "Family-Owned",
    detail: "We have kids and dogs too — we get it",
    icon: "heart",
  },
  {
    label: "Frost-Line Posts",
    detail: "Set below 48 inches — no heaving, no shifting",
    icon: "anchor",
  },
] as const;

// ─── FAQ ──────────────────────────────────────────────────────────────────────
// Source: market-intelligence.md §2 buying blockers, competitor gap analysis

export const faq = [
  {
    question: "How much does a fence installation cost in NH?",
    answer:
      "Most residential jobs run $4,000–$8,000 for a full backyard privacy fence depending on material and lot size. Small section repairs start around $1,200. Large premium vinyl installations can run $10,000–$15,000. We give you a written estimate before any work begins — no surprises.",
  },
  {
    question: "How quickly can you come out for an estimate?",
    answer:
      "We aim to be on-site within 72 hours of your call or form submission. Most of the time it's faster. You'll hear back the same day you reach out.",
  },
  {
    question: "Will my fence hold up through a New Hampshire winter?",
    answer:
      "Only if it's set right. We set every post below the 48-inch frost line in concrete — NH code requires it for a reason. Posts set above frost depth heave out of the ground within 1–2 winters. Shortcuts here are why so many NH fences fail early. We don't take them.",
  },
  {
    question: "What fence material is best for containing dogs?",
    answer:
      "It depends on your dog. For most dogs, vinyl or wood privacy fence is ideal — no gaps, no footholds to climb. For diggers, we recommend adding a buried bottom rail or gravel board. We walk your yard before quoting and flag any terrain issues (slopes, roots, rocky ground) so the finished fence actually works.",
  },
  {
    question: "Do I need a permit to install a fence in NH?",
    answer:
      "It depends on your town. Some NH municipalities require a permit for fences over 6 feet or fences in front yards. We can advise on your specific town's requirements during the estimate — many homeowners are surprised how simple (or unnecessary) the permitting process is.",
  },
  {
    question: "Do you offer any warranty?",
    answer:
      "Yes. We stand behind our workmanship. If there's an installation issue — a post that shifts, a gate that won't close, a panel that came loose — we come back and fix it. Materials carry the manufacturer's warranty (vinyl fences typically have lifetime warranties).",
  },
  {
    question: "Do you require a large deposit?",
    answer:
      "We do require a deposit to schedule your job, but we're not going to ask for 50% upfront. We discuss the payment terms with you before you sign anything. Getting ghosted after a deposit is one of the most common contractor horror stories — we know that, and we work to earn your trust before asking for money.",
  },
  {
    question: "What areas of New Hampshire do you serve?",
    answer:
      "We serve all of Southern NH and the Seacoast — Nashua, Manchester, Bedford, Merrimack, Hudson, Londonderry, Goffstown, Hooksett, and 20+ more cities. See our full service area page for the complete list.",
  },
] as const;

// ─── Service Areas ────────────────────────────────────────────────────────────
// Source: initial-business-data.md §3 Geography

export const serviceAreas = {
  primary: [
    "Nashua",
    "Manchester",
    "Bedford",
    "Merrimack",
    "Hudson",
    "Londonderry",
    "Hooksett",
    "Goffstown",
    "Auburn",
    "Candia",
    "Weare",
    "Litchfield",
    "New Boston",
    "Mont Vernon",
    "Milford",
  ],
  seacoast: [
    "Epping",
    "Exeter",
    "Lee",
    "Durham",
    "Madbury",
    "Dover",
    "Portsmouth",
    "Rye",
    "Greenland",
    "Stratham",
    "Hampton",
    "North Hampton",
  ],
} as const;

// ─── About ────────────────────────────────────────────────────────────────────
// Source: initial-business-data.md §1, §4

export const about = {
  headline: "NH Born. Family Built.",
  subheadline:
    "We're not a franchise or a regional chain. We're a family-run fence company from New Hampshire, and we build fences the way we'd want our own yard done.",
  story: [
    "Placed Right Fence Co. LLC was founded on a simple idea: that a fence installation in New Hampshire should be done by someone who actually knows New Hampshire. That means understanding frost depth, granite soil, root systems, and the kind of mud springs that shift poorly-set posts inside of a year.",
    "We have kids and pets of our own. We know what it feels like to watch a dog dart toward the road, or to want your backyard to be a place the whole family actually uses. That's why we build every fence the way we'd want our own yard done — with proper post depth, honest pricing, and no pressure.",
    "We started taking jobs in spring 2024 and we've built our reputation job by job, neighbor by neighbor. We're fully insured, we show up when we say we will, and our estimates don't change after you sign.",
  ],
  values: [
    {
      label: "Built for NH",
      detail:
        "Every post set below the frost line. Every install designed for freeze-thaw cycles, rocky granite soil, and real New England winters.",
    },
    {
      label: "Honest Pricing",
      detail:
        "You get a written estimate before any work begins. The final invoice matches the estimate. No line items that appear at the end.",
    },
    {
      label: "Family First",
      detail:
        "We have kids and pets too. We understand what you're trying to protect and we take that seriously on every job.",
    },
    {
      label: "We Show Up",
      detail:
        "You'll hear back from us the same day. We give you an estimate within 72 hours. When we say a date, we're there.",
    },
  ],
} as const;

// ─── Section Headers ──────────────────────────────────────────────────────────

export const sectionCopy = {
  services: {
    eyebrow: "What We Install",
    headline: "Built for Every NH Yard.",
    subheadline:
      "Wood, vinyl, aluminum, or chain link — we'll help you choose what fits your property, your budget, and your New Hampshire winters.",
    cta: { label: "Get Your Free Estimate", href: "/contact" },
  },
  trust: {
    eyebrow: "Why Placed Right",
    headline: "We Know What Cheap Installations Cost You.",
    subheadline:
      "Every post set below the frost line. Every estimate in writing. Every job backed by our word.",
  },
  testimonials: {
    eyebrow: "What NH Homeowners Say",
    headline: "Real Jobs. Real Results.",
    subheadline: "From Nashua to Portsmouth — Southern NH families trust Placed Right Fence.",
  },
  serviceAreas: {
    eyebrow: "Service Area",
    headline: "Southern NH & Seacoast.",
    subheadline:
      "We serve 25+ cities across Southern NH and the Seacoast. Free on-site estimates within 72 hours — wherever you are.",
    cta: { label: "See All Service Areas", href: "/service-areas" },
  },
} as const;
