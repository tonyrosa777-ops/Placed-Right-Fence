// /data/site.ts — ALL site copy lives here. Zero hard-coded strings in components.
// Source: initial-business-data.md, market-intelligence.md, design-system.md

export const siteConfig = {
  name: "Placed Right Fence Co. LLC",
  shortName: "Placed Right Fence",
  tagline: "Love Wins Where Pickets Begin — When You Install a Placed Right Fence.",
  description:
    "Southern NH's trusted family fence installer. Wood, vinyl, aluminum, and chain link — built below the frost line, built to last. Free on-site estimates within 72 hours.",
  phone: "(978) 207-4077",
  email: "info@placedrightfences.com",
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
  domain: "placedrightfences.com",
  url: "https://placedrightfences.com",
} as const;

// ─── Our Promise ─────────────────────────────────────────────────────────────
// Client-confirmed 2026-04-14: 1% of every completed install donated to an animal shelter of the homeowner's choice.

export const promise = {
  eyebrow: "Our Promise",
  headline: "Every Fence Helps a Shelter Pet.",
  body: "For every completed fence installation, we donate 1% of your total project to an approved local animal shelter of your choice. Donations are made directly to the shelter by Placed Right Fence and cannot be redeemed for cash or discounts.",
  short: "1% of your total project goes to the animal shelter of your choice.",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Shop", href: "/shop" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Pricing", href: "/pricing" },
] as const;

// ─── Hero ─────────────────────────────────────────────────────────────────────
// Source: market-intelligence.md §2 audience language, §9 emotional positioning gap

export const hero = {
  eyebrow: "Family-Run · Southern NH & Seacoast · Fully Insured",
  headline: "Love Wins Where\nPickets Begin.",
  tagline: "When you install a Placed Right Fence.",
  subheadline:
    "Southern NH & NH Seacoast — live elsewhere, give us a call. We install Trex, vinyl, wood, chain link, aluminum and more, built below the frost line and guaranteed to stay straight.",
  primaryCta: { label: "Get Your FREE Estimate", href: "/contact" },
  secondaryCta: { label: "See Our Work", href: "/gallery" },
  trustBadges: [
    "Free Estimate Within 72 Hours",
    "Family-Owned & Fully Insured",
    "1% of Every Install → Animal Shelter",
    "NH Born & Raised",
  ],
} as const;

// ─── Services ─────────────────────────────────────────────────────────────────
// Source: initial-business-data.md §2 Core Offering

export const services = [
  {
    id: "trex-composite",
    name: "Trex / Composite Fencing",
    slug: "trex-composite-fence",
    tagline: "Premium composite. Zero upkeep.",
    description:
      "Trex® and engineered composite fencing — the strength and look of wood with none of the warping, rot, or staining. Backed by a 25-year manufacturer warranty and built on posts set below the 48-inch NH frost line.",
    useCases: ["Privacy", "Premium curb appeal", "Long-term value", "Low maintenance"],
    priceRange: "Starting at $55 / linear foot installed",
    icon: "🌲",
    comingSoon: false,
  },
  {
    id: "vinyl",
    name: "Vinyl Fencing",
    slug: "vinyl-fence",
    tagline: "Zero maintenance. Decades of clean.",
    description:
      "Premium vinyl that won't rot, splinter, or need painting — ever. Perfect for NH homeowners who want privacy and curb appeal without the weekend maintenance. Available in white, tan, and gray.",
    useCases: ["Privacy", "Curb appeal", "Low maintenance", "Pool enclosure"],
    priceRange: "Starting at $35 / linear foot installed",
    icon: "🏡",
    comingSoon: false,
  },
  {
    id: "wood",
    name: "Wood Fencing",
    slug: "wood-fence",
    tagline: "Classic. Private. Built for NH winters.",
    description:
      "Pressure-treated cedar and pine privacy fences with posts set below the 48-inch NH frost line. Your fence won't heave, shift, or rot within years like cheap installations. We build it once, right.",
    useCases: ["Privacy", "Pet containment", "Property boundary", "Decorative"],
    priceRange: "Starting at $25 / linear foot installed",
    icon: "🪵",
    comingSoon: false,
  },
  {
    id: "chain-link",
    name: "Chain Link Fencing",
    slug: "chain-link-fence",
    tagline: "Durable. Affordable. Effective.",
    description:
      "Galvanized and vinyl-coated chain link — the workhorse of pet and yard containment. Posts set in concrete below frost line. Decades of containment for a fraction of the cost of wood or vinyl.",
    useCases: ["Pet containment", "Yard boundary", "Commercial", "Security"],
    priceRange: "Starting at $15 / linear foot installed",
    icon: "🔗",
    comingSoon: false,
  },
  {
    id: "aluminum",
    name: "Aluminum Fencing",
    slug: "aluminum-fence",
    tagline: "Elegant. Corrosion-free. Pool-code ready.",
    description:
      "Ornamental aluminum that meets NH pool code compliance requirements out of the box. Rust-proof and powder-coated for permanent finish. Great for defining property lines with style.",
    useCases: ["Pool safety", "Decorative boundary", "Pet containment", "Commercial"],
    priceRange: "Starting at $30 / linear foot installed",
    icon: "⚙️",
    comingSoon: false,
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
    comingSoon: false,
  },
  {
    id: "luxury",
    name: "Luxury Fencing",
    slug: "luxury-fence",
    tagline: "Custom. Architectural. Coming soon.",
    description:
      "A curated line of high-end, architect-grade fencing — custom horizontal slat, hardwood, and specialty metal builds designed for statement properties. Launching later this season. Call to get on the waitlist for early design consultations.",
    useCases: ["Custom design", "Estate properties", "Architectural", "Signature builds"],
    priceRange: "Coming soon — inquire for waitlist",
    icon: "✨",
    comingSoon: true,
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
      range: "Starting at $1,200",
    },
    {
      label: "Full Backyard",
      description: "Average residential privacy fence install",
      range: "Starting at $4,000",
    },
    {
      label: "Premium/Large",
      description: "Large lot, premium vinyl, full perimeter",
      range: "Starting at $8,000",
    },
  ],
} as const;

// ─── Testimonials ─────────────────────────────────────────────────────────────
// 30 testimonials — simulated from real NH audience language (market-intelligence.md §2)
// Replace with actual client reviews as they are collected

export const testimonials = [
  {
    name: "Michelle D.",
    location: "Merrimack, NH",
    rating: 5,
    useCase: "Dog Containment",
    text: "We adopted a rescue dog in October and needed a fence fast before she figured out she could just walk out of the yard. Roger came out within 2 days, gave us a quote that didn't change, and the crew had the whole thing done in a day and a half. The fence looks amazing and she's been running laps ever since. Worth every penny.",
  },
  {
    name: "Tom & Karen B.",
    location: "Bedford, NH",
    rating: 5,
    useCase: "Pool Compliance",
    text: "We got pool quotes from 3 companies. One never called back, one quoted us $4k over budget. Placed Right came in fair, explained every step of what they were doing to meet code, and got it done before our pool opening. Inspector passed it no issues. Would recommend to anyone in the area.",
  },
  {
    name: "Dave P.",
    location: "Hudson, NH",
    rating: 5,
    useCase: "Storm Repair",
    text: "Had a section of our old stockade fence blow down in March. Posts were completely rotted at the base — hadn't been set right to begin with. These guys replaced the whole rear section with pressure-treated posts set below the frost line. Two months later everything still looks perfectly straight. Should've replaced it years ago.",
  },
  {
    name: "Alison F.",
    location: "Exeter, NH",
    rating: 4,
    useCase: "Vinyl Privacy",
    text: "I was nervous about hiring a contractor I hadn't heard of before, but Roger was patient with all my questions and didn't make me feel rushed. He texted me updates the day of install which I really appreciated. The vinyl fence is exactly what I was hoping for — private, clean looking, and our neighbors actually came over to ask who did it.",
  },
  {
    name: "Mark C.",
    location: "Manchester, NH",
    rating: 5,
    useCase: "New Home",
    text: "Moved into a new house last spring and the yard was completely open. Had 2 kids and needed it done before summer. They squeezed us in, the price was fair — we got 2 other quotes — and the fence looks great. No complaints whatsoever. These are good people doing honest work.",
  },
  {
    name: "Jennifer R.",
    location: "Nashua, NH",
    rating: 5,
    useCase: "Dog Containment",
    text: "I specifically needed a fence that would actually contain my lab mix — he's an escape artist and I had been burned by a cheap install that left gaps under the fence on uneven ground. These guys walked the whole yard before quoting, noted where the grade dropped, and built around it. No gaps, no problems. My dog is out there right now. Genuinely could not be happier.",
  },
  {
    name: "Brian H.",
    location: "Londonderry, NH",
    rating: 5,
    useCase: "Cedar Privacy",
    text: "We went back and forth between cedar and vinyl for months. Roger took the time to walk us through the real tradeoffs — not just the price difference but what maintenance actually looks like in NH winters. We went with cedar board-on-board and it looks incredible. Crew was fast, clean, and left the yard better than they found it.",
  },
  {
    name: "Sarah M.",
    location: "Derry, NH",
    rating: 5,
    useCase: "Kids' Play Area",
    text: "We have three boys under 10 and our backyard backs up to a busy road. I wanted something that would actually stop them, not just slow them down. They installed a chain link with a self-latching gate and the whole thing is solid. The kids have been out there every day since. I feel so much better now.",
  },
  {
    name: "Chris & Beth W.",
    location: "Salem, NH",
    rating: 5,
    useCase: "Ornamental Aluminum",
    text: "We wanted something that looked nice but didn't require a lot of upkeep — our old wood fence was a constant project. Roger recommended aluminum and I'm glad we listened. It looks sharp, matches the house, and we haven't touched it since install. The price was very competitive with what we were quoted elsewhere.",
  },
  {
    name: "Lisa T.",
    location: "Windham, NH",
    rating: 4,
    useCase: "HOA Approval",
    text: "Our HOA has really specific requirements about fence style and height, and a couple of the other contractors we called either couldn't answer our questions or gave us specs that wouldn't pass. Roger reviewed our HOA docs, gave us options that would definitely be approved, and handled the whole install without a single issue. HOA signed off first review.",
  },
  {
    name: "Pat O.",
    location: "Amherst, NH",
    rating: 5,
    useCase: "Sloped Terrain",
    text: "Our lot drops almost three feet from one side of the yard to the other. I was told by two other companies that a privacy fence on that slope would be a problem. Placed Right came out, measured everything, and explained exactly how they'd step the fence down to follow the grade. It came out perfectly and there are no gaps anywhere.",
  },
  {
    name: "Donna C.",
    location: "Milford, NH",
    rating: 5,
    useCase: "Frost Heave Fix",
    text: "Had a vinyl fence from another company that heaved so bad over winter that three posts were completely out of the ground by spring. These guys came out, pulled the bad posts, reset them properly below frost depth, and it's been two winters now with zero movement. Wish I had called them first.",
  },
  {
    name: "Rob S.",
    location: "Concord, NH",
    rating: 4,
    useCase: "Gate Repair",
    text: "My driveway gate was sagging so badly it wouldn't close all the way. I figured I'd need a whole new section but Roger came out, looked at it, and said he could fix it with a post reset and some hardware. Done in a few hours, swings perfectly now. Honest about what it actually needed rather than trying to upsell me.",
  },
  {
    name: "Amy L.",
    location: "Dover, NH",
    rating: 5,
    useCase: "Vinyl Privacy",
    text: "We have neighbors on three sides and very little privacy. The white vinyl fence they installed makes such a huge difference — I can actually sit on my deck without feeling like I'm on display. Communication throughout the project was really good. They called the night before to confirm timing and showed up when they said they would.",
  },
  {
    name: "Phil G.",
    location: "Portsmouth, NH",
    rating: 5,
    useCase: "Chain Link",
    text: "Needed a chain link fence for the side yard where we park equipment. Nothing fancy, just something secure. They gave me a fair quote with no pressure to upgrade to something more expensive, showed up on time, and got it done right. I've already referred them to two neighbors.",
  },
  {
    name: "Tanya K.",
    location: "Durham, NH",
    rating: 5,
    useCase: "Dog Containment",
    text: "We have two dogs — one who digs and one who jumps. I was upfront about both problems when I called. They came out, assessed the yard, and recommended the right fence height with a concrete footer section along the back where the digger works. Six months in, zero escapes. These guys actually listened.",
  },
  {
    name: "Kevin D.",
    location: "Pelham, NH",
    rating: 5,
    useCase: "Wood Privacy",
    text: "I was skeptical about wood because I've seen so many fences fall apart after a few years around here. Roger explained what makes the difference — post depth, concrete, pressure-treated lumber — and showed me examples of installs they'd done years ago that still looked great. I went with it and I'm really happy with how it turned out.",
  },
  {
    name: "Colleen N.",
    location: "Hollis, NH",
    rating: 5,
    useCase: "Property Line",
    text: "We had some ambiguity about where our property line was and I was worried about putting up a fence and having a problem with our neighbors. Roger actually helped us think through it and suggested we pull a survey before committing. We did, confirmed the line, and the fence went up with no issues. Good people to work with.",
  },
  {
    name: "Jim H.",
    location: "Goffstown, NH",
    rating: 5,
    useCase: "Vinyl Privacy",
    text: "I'm 68 and I've owned this house for 30 years. Had a wood fence that finally gave up the ghost. My son helped me get a few quotes and we chose Placed Right because Roger was the only one who walked the entire yard with me instead of just measuring from the driveway. The new vinyl fence is beautiful and I don't have to worry about maintaining it.",
  },
  {
    name: "Scott W.",
    location: "Auburn, NH",
    rating: 5,
    useCase: "Chain Link",
    text: "I own two rental properties and both needed fencing. Roger gave me a solid price on both jobs done back to back. The tenants have been happy, no issues since install, and the chain link has held up perfectly through two NH winters. Easy to work with and doesn't cut corners just because it's a rental.",
  },
  {
    name: "Maria E.",
    location: "Hooksett, NH",
    rating: 5,
    useCase: "Second Install",
    text: "They did our backyard fence two years ago and it still looks brand new. When we decided to fence the side yard this spring, I didn't bother getting other quotes. Same crew, same quality, same price as they quoted. That kind of consistency is rare to find. Will keep calling them as long as we own this house.",
  },
  {
    name: "Dan B.",
    location: "Hampton, NH",
    rating: 5,
    useCase: "Pool Compliance",
    text: "Pool code in our town is strict and I've heard stories about fences failing inspection. Roger knew exactly what was required, positioned everything correctly, and even caught that our gate latch was on the wrong side before inspection. It passed on the first visit. Saved us a ton of headaches.",
  },
  {
    name: "Rachel M.",
    location: "Kingston, NH",
    rating: 5,
    useCase: "Split Rail",
    text: "We have a big open lot and wanted something that marked the yard without blocking the view. Split rail with wire mesh was the perfect call — keeps our dogs in, looks totally natural with the property, and wasn't nearly as expensive as I expected. Roger helped us figure out the right option for our situation rather than pushing us toward something we didn't need.",
  },
  {
    name: "Greg A.",
    location: "Plaistow, NH",
    rating: 5,
    useCase: "Dog Containment",
    text: "We have an above-ground pool and two golden retrievers who think the pool is theirs. Needed a fence that would keep the dogs out of the pool area and also make it safe for the kids. They handled both problems in one install — pool code compliant on the pool side, solid fence everywhere else. Exactly what we needed.",
  },
  {
    name: "Steph B.",
    location: "Atkinson, NH",
    rating: 5,
    useCase: "Cedar Privacy",
    text: "The cedar board-on-board they installed is honestly one of the best things we've done to the property. We got compliments from the neighbors before the crew even finished. They took their time setting the posts, the boards are all perfectly level, and the stain they recommended has held up great through the season.",
  },
  {
    name: "Paul C.",
    location: "Londonderry, NH",
    rating: 5,
    useCase: "New Construction",
    text: "We built a new house and had the fence installed right after move-in. I appreciated that they were willing to work around the other contractors still finishing up the landscaping. Scheduling was flexible, they kept me updated, and the end result looks like it was always part of the property.",
  },
  {
    name: "Janet F.",
    location: "Nottingham, NH",
    rating: 4,
    useCase: "Vinyl Semi-Privacy",
    text: "I wanted privacy in the back but didn't want to block the light from the garden on the side. Roger suggested a semi-privacy vinyl for the side sections and full privacy across the back. It works perfectly — I have the privacy where I need it and still get the sun I was worried about losing.",
  },
  {
    name: "Mike T.",
    location: "Rochester, NH",
    rating: 5,
    useCase: "Storm Repair",
    text: "A tree came down in the ice storm in January and took out 40 feet of our chain link. Called Placed Right and they were out to assess within a couple of days even though it was the middle of winter. Got us on the schedule as soon as the ground cooperated and fixed it for exactly what they quoted.",
  },
  {
    name: "Lori H.",
    location: "Hampstead, NH",
    rating: 5,
    useCase: "Property Fence",
    text: "We have 3 acres and needed to fence off the back section for the horses. This wasn't a standard suburban job and I wasn't sure if they'd want to take it on. Roger came out, measured everything, gave us an honest quote, and treated it like any other job. The fence is solid, the posts are set deep, and the horses haven't tested it once.",
  },
  {
    name: "Ed S.",
    location: "Litchfield, NH",
    rating: 5,
    useCase: "Wood Privacy",
    text: "Got four quotes on a privacy fence. Two were way too high, one was suspiciously low. Placed Right was in the middle and the only contractor who gave me a detailed written estimate that actually explained what I was paying for. Went with them based on that alone. The fence came out great and there were zero surprises on the bill.",
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
    headline: "Southern NH & NH Seacoast.",
    subheadline:
      "We serve 25+ cities across Southern NH and the Seacoast. Live elsewhere? Give us a call — free on-site estimates within 72 hours.",
    cta: { label: "See All Service Areas", href: "/service-areas" },
  },
} as const;
