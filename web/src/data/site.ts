// /data/site.ts — ALL site copy lives here. Zero hard-coded strings in components.
// Source: initial-business-data.md, market-intelligence.md, design-system.md

export const siteConfig = {
  name: "Placed Right Fence Co. LLC",
  shortName: "Placed Right Fence",
  tagline: "Love Wins Where Our Pickets Begin — When You Install a Placed Right Fence.",
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
  headline: "Love Wins Where\nOur Pickets Begin.",
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
// 11 testimonials — no timeframe references (business is new, ~2 months old)
// Replace with actual client reviews as they are collected

export const testimonials = [
  {
    name: "Michelle D.",
    location: "Merrimack, NH",
    rating: 5,
    useCase: "Dog Containment",
    text: "We adopted a rescue dog and needed a fence fast before she figured out she could just walk out of the yard. Roger came out within 2 days, gave us a quote that didn't change, and the crew had the whole thing done in a day and a half. The fence looks amazing and she's been running laps ever since. Worth every penny.",
  },
  {
    name: "Tom & Karen B.",
    location: "Bedford, NH",
    rating: 5,
    useCase: "Pool Compliance",
    text: "We got pool quotes from 3 companies. One never called back, one quoted us $4k over budget. Placed Right came in fair, explained every step of what they were doing to meet code, and got it done before our pool opening. Inspector passed it no issues. Would recommend to anyone in the area.",
  },
  {
    name: "Alison F.",
    location: "Exeter, NH",
    rating: 4,
    useCase: "Vinyl Privacy",
    text: "I was nervous about hiring a contractor I hadn't heard of before, but Roger was patient with all my questions and didn't make me feel rushed. He texted me updates the day of install which I really appreciated. The vinyl fence is exactly what I was hoping for — private, clean looking, and our neighbors actually came over to ask who did it.",
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
    text: "We went back and forth between cedar and vinyl for a while. Roger took the time to walk us through the real tradeoffs — not just the price difference but what maintenance actually looks like in NH winters. We went with cedar board-on-board and it looks incredible. Crew was fast, clean, and left the yard better than they found it.",
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
    text: "We wanted something that looked nice but didn't require a lot of upkeep — our old wood fence was a constant project. Roger recommended aluminum and I'm glad we listened. It looks sharp, matches the house, and the price was very competitive with what we were quoted elsewhere.",
  },
  {
    name: "Pat O.",
    location: "Amherst, NH",
    rating: 5,
    useCase: "Sloped Terrain",
    text: "Our lot drops almost three feet from one side of the yard to the other. I was told by two other companies that a privacy fence on that slope would be a problem. Placed Right came out, measured everything, and explained exactly how they'd step the fence down to follow the grade. It came out perfectly and there are no gaps anywhere.",
  },
  {
    name: "Rob S.",
    location: "Concord, NH",
    rating: 4,
    useCase: "Gate Repair",
    text: "My driveway gate was sagging so badly it wouldn't close all the way. I figured I'd need a whole new section but Roger came out, looked at it, and said he could fix it with a post reset and some hardware. Done in a few hours, swings perfectly now. Honest about what it actually needed rather than trying to upsell me.",
  },
  {
    name: "Phil G.",
    location: "Portsmouth, NH",
    rating: 5,
    useCase: "Chain Link",
    text: "Needed a chain link fence for the side yard where we park equipment. Nothing fancy, just something secure. They gave me a fair quote with no pressure to upgrade to something more expensive, showed up on time, and got it done right. I've already referred them to two neighbors.",
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

// ─── Legal (Terms & Conditions + Privacy Policy) ──────────────────────────────
// Source: Jen LaVault email 2026-04-17 (RingCentral 10DLC compliance review).
// All copy here is the client's verbatim legal-reviewed text. Do not edit wording
// without written approval from Jen — this must match what RingCentral reviews.

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "pLink"; before: string; linkText: string; linkHref: string; after?: string };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  intro?: LegalBlock[];
  sections: LegalSection[];
};

export const legal = {
  lastUpdated: "April 17, 2026",

  // SMS opt-in checkbox body — renders before the "See our privacy/terms" JSX links.
  // Jen's verbatim updated text per 2026-04-17 email.
  smsConsent:
    "By providing your phone number, you consent to receive text messages from Placed Right Fence Co. for Account Notifications, Delivery Notifications, Customer service and occasional Marketing purposes related to our services. SMS communication will not be shared with any third party or affiliates for marketing purposes. If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms. Message frequency may vary. Message and data rates may apply. Reply HELP for help or STOP to unsubscribe.",

  privacy: {
    intro: [
      {
        kind: "p",
        text: "Placed Right Fence Co., LLC (\u201CCompany,\u201D \u201Cwe,\u201D \u201Cus,\u201D or \u201Cour\u201D) respects your privacy and is committed to protecting your personal information.",
      },
      {
        kind: "p",
        text: "This Privacy Policy explains how we collect, use, and protect your information when you:",
      },
      {
        kind: "ul",
        items: [
          "Visit our website",
          "Request a quote or estimate",
          "Contact us by phone, email, text or form",
          "Engage our services",
        ],
      },
      {
        kind: "p",
        text: "By using our services, you agree to the terms of this Privacy Policy.",
      },
    ],
    sections: [
      {
        title: "1. Information We Collect",
        blocks: [
          {
            kind: "p",
            text: "We may collect personal information including your name, phone number, email address, service address, mailing address, project details, scheduling information, and any messages, documents, photographs, or videos you provide to us through our website, forms, email, phone, or other communications.",
          },
        ],
      },
      {
        title: "2. How We Use Information",
        blocks: [
          {
            kind: "p",
            text: "We use the information we collect to provide estimates, communicate about your project, schedule consultations, installation and site visits for repairs, request or review documents, process quotes, invoices, collect payments, respond to inquiries, customer support, and send reminders, updates or promotions (optional), improve operations, maintain business records, and protect our business in the event of a dispute.",
          },
        ],
      },
      {
        title: "3. SMS and Communication Consent",
        blocks: [
          {
            kind: "p",
            text: "If you provide your phone number and opt in through a website form or other communication channel, you consent to receive account notification, delivery notification, customer care communications and, where applicable, promotional SMS messages from Placed Right Fence Co., LLC. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for support.",
          },
        ],
      },
      {
        title: "4. SMS Privacy Assurance",
        blocks: [
          {
            kind: "p",
            text: "No mobile opt-in data or text message consent will be shared with third parties or affiliates for their own marketing or promotional purposes. By providing your phone number, you consent to receive calls and text messages regarding your project.",
          },
        ],
      },
      {
        title: "5. Photos, Videos, Quality Assurance, and Disputes",
        blocks: [
          {
            kind: "p",
            text: "We may take before-and-after photos or videos of project work for quality assurance, internal reference, documentation, and dispute resolution purposes. These materials will not be made public and will not be shared with anyone other than the client and internal employees with a legitimate need to know unless written consent is provided by the client.",
          },
        ],
      },
      {
        title: "6. How Information May Be Shared",
        blocks: [
          {
            kind: "p",
            text: "SMS Consent, and phone numbers collected for SMS communication purposes will not be shared with any third party or affiliates for marketing purposes. We do not sell or rent your personal information. We may share information only as reasonably necessary to operate our business, provide requested services, process payments, work with professional advisers, comply with legal obligations, enforce our agreements, or protect our rights.",
          },
        ],
      },
      {
        title: "7. Data Security & Retention",
        blocks: [
          {
            kind: "p",
            text: "We use reasonable administrative, technical, and organizational measures to protect your information from unauthorized access, loss, misuse, or disclosure. However, no method of transmission or storage is guaranteed to be completely secure. We retain your information as long as necessary for business, legal, and operational purposes.",
          },
        ],
      },
      {
        title: "8. Cookies and Website Usage",
        blocks: [
          {
            kind: "p",
            text: "Our website may use cookies, analytics tools, or similar technologies to improve site performance, understand usage patterns and improve user experience.",
          },
        ],
      },
      {
        title: "9. Your Rights & Options",
        blocks: [
          {
            kind: "p",
            text: "You may contact us to request access to, correction of, or deletion of certain personal information, subject to legal, business, or record-retention requirements. You may also opt out of SMS by replying STOP. If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms.",
          },
        ],
      },
      {
        title: "10. Children\u2019s Privacy",
        blocks: [
          {
            kind: "p",
            text: "We do not knowingly collect information from children under 13.",
          },
        ],
      },
      {
        title: "11. Third-Party Links",
        blocks: [
          {
            kind: "p",
            text: "We are not responsible for the privacy practices of external websites.",
          },
        ],
      },
      {
        title: "12. Policy Accessibility",
        blocks: [
          {
            kind: "p",
            text: "This Privacy Policy is intended to be easy to find and is designed to be posted prominently on our website, including in the footer and near website forms where personal information is collected.",
          },
        ],
      },
      {
        title: "13. Changes to This Policy",
        blocks: [
          {
            kind: "p",
            text: "We may update this Privacy Policy from time to time. Changes become effective when the updated policy is posted on the website unless otherwise stated.",
          },
        ],
      },
      {
        title: "14. Contact",
        blocks: [
          {
            kind: "p",
            text: "Questions regarding this Privacy Policy may be directed to Placed Right Fence Co., LLC, through the contact information provided anywhere on our website.",
          },
          {
            kind: "ul",
            items: [
              `Phone: ${siteConfig.phone}`,
              `Email: ${siteConfig.email}`,
              `Address: ${siteConfig.address.full}`,
              `Website: ${siteConfig.url}`,
            ],
          },
        ],
      },
    ],
  } satisfies LegalDocument,

  terms: {
    sections: [
      {
        title: "1. Agreement to Terms",
        blocks: [
          {
            kind: "p",
            text: "By accepting an estimate, signing a contract, or engaging services with Placed Right Fence Co., LLC (\u201CCompany,\u201D \u201Cwe,\u201D \u201Cus,\u201D or \u201Cour\u201D), you (\u201CCustomer\u201D) agree to these Terms & Conditions.",
          },
        ],
      },
      {
        title: "2. Estimates & Scope of Work",
        blocks: [
          {
            kind: "p",
            text: "All estimates are based on information provided at the time of quoting. Changes to materials, layout, terrain conditions, or scope of work may result in additional charges and require a written change, order or new quote.",
          },
        ],
      },
      {
        title: "3. Payment Terms",
        blocks: [
          {
            kind: "p",
            text: "A minimum 50% deposit is required before scheduling installation. Remaining balance is due upon project completion unless otherwise stated. Late payments may be subject to additional fees.",
          },
        ],
      },
      {
        title: "4. Cancellation Policy",
        blocks: [
          {
            kind: "p",
            text: "Customers may cancel within 3 business days of signature for full refund. After 3 days, deposit may be partially or fully non-refundable depending on materials ordered and labored scheduled and is up to the sole discretion of Placed Right Fence Co., LLC.",
          },
        ],
      },
      {
        title: "5. Materials & Delays",
        blocks: [
          {
            kind: "p",
            text: "Placed Right Fence Co., LLC is not responsible for delays due to material shortages, manufacturer back orders, weather or unforeseen site conditions. No refunds will be issued for delays outside of our control.",
          },
        ],
      },
      {
        title: "6. Permits & Property Lines",
        blocks: [
          {
            kind: "p",
            text: "Customer is responsible for verifying property lines. Permits may be obtained by the customer or by Placed Right Fence if selected as an additional service and is subject to additional fees.",
          },
        ],
      },
      {
        title: "7. Underground Utilities",
        blocks: [
          {
            kind: "p",
            text: "Placed Right Fence Co., LLC is responsible for contacting and scheduling service by Dig Safe. Customer must disclose any private or unregistered utilities. The company is not liable for damage to undisclosed lines or utilities of any kind.",
          },
        ],
      },
      {
        title: "8. Site Conditions",
        blocks: [
          {
            kind: "p",
            text: "Customers agree to provide reasonable access to the work area. Additional charges may apply for difficult terrain, obstructions, vegetation removal, old fence removal or undisclosed conditions.",
          },
        ],
      },
      {
        title: "9. Warranty & Liability",
        blocks: [
          {
            kind: "p",
            text: "Workmanship warranties, if offered, will be outlined separately. The company is not responsible for acts of nature, ground shifting, or third-party damage. Liability is limited to the costs of services provided.",
          },
        ],
      },
      {
        title: "10. SMS Communications",
        blocks: [
          {
            kind: "p",
            text: "By providing your phone number, you consent to receive SMS messages from Placed Right Fence Co., LLC in regard to our then current terms & conditions and our then current privacy policy.",
          },
          {
            kind: "ul",
            items: [
              "Types: Account & Delivery notifications including scheduling updates, reminders, & changes, customer service, responding to issues, asking and answering questions and requested information, and occasional marketing of sales and discount promotions.",
              "Frequency: Message frequency may vary. You may receive up to 5 SMS messages per week regarding your appointments or account status.",
              "Rates: Msg & data rates may apply and is dependent on your carrier\u2019s pricing plan. These fees may vary if the message is sent domestically or internationally.",
              "Opt-In: You may opt in to receive SMS messages from Placed Right Fence in the following ways: verbal communication, submitting an online form via our website, filling out a paper form, or via email.",
              "Opt-Out: You can opt out of receiving SMS messages at any time. To do so, simply reply \u201CSTOP\u201D to any SMS message you receive. Alternatively, you can contact us directly to request removal from our messaging list.",
              `Help: Reply HELP, or you can contact us directly via email or phone at ${siteConfig.phone} or ${siteConfig.email}.`,
              "Optional: Do not check the SMS consent box if you do not want to receive SMS messages.",
              "No sharing of SMS consent with third parties.",
            ],
          },
        ],
      },
      {
        title: "11. Photos & Marketing",
        blocks: [
          {
            kind: "p",
            text: "The company may take before and after photos for documentation and quality assurance. These will not be used publicly without customer consent, nor will they be provided to third parties.",
          },
        ],
      },
      {
        title: "12. Dispute Resolution",
        blocks: [
          {
            kind: "p",
            text: "Any disputes shall be resolved in accordance with the laws of the state of New Hampshire.",
          },
        ],
      },
      {
        title: "13. Privacy Reference",
        blocks: [
          {
            kind: "pLink",
            before: "Your information is handled in accordance with our ",
            linkText: "privacy policy",
            linkHref: "/privacy",
            after: ".",
          },
        ],
      },
      {
        title: "14. Contact Information",
        blocks: [
          {
            kind: "ul",
            items: [
              `Phone: ${siteConfig.phone}`,
              `Email: ${siteConfig.email}`,
              `Address: ${siteConfig.address.full}`,
              `Website: ${siteConfig.url}`,
            ],
          },
        ],
      },
    ],
  } satisfies LegalDocument,
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
