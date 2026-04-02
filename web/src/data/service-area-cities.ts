// City-specific data for /service-areas/[city] pages
// Source: market-intelligence.md §5 Gap 7 — city-specific pages capture location searches
// Map URL pattern from codys-complete-junk-removal architecture

export interface CityData {
  slug: string;
  name: string;
  county: string;
  population: string;
  tagline: string;
  mapQuery: string;       // passed to Google Maps embed
  intro: string;
  localNote: string;      // permit / frost / terrain detail specific to this city
  faqs: Array<{ q: string; a: string }>;
}

export const CITY_PAGES: CityData[] = [
  {
    slug: "nashua",
    name: "Nashua",
    county: "Hillsborough County",
    population: "91,000+",
    tagline: "Fence Installation & Repair in Nashua, NH",
    mapQuery: "Nashua, NH",
    intro:
      "Nashua is our home base — we've installed fences on streets throughout the east and west sides, from Hollis Street to the Mine Falls area. We know which neighborhoods have sloped lots, which streets require permits, and where the granite shelf comes up fast. If you're in Nashua, you're getting our best crew on your best day.",
    localNote:
      "Nashua requires a zoning permit for most residential fences. We handle all permit coordination at no extra charge and can typically get approval within 3–5 business days before installation begins.",
    faqs: [
      {
        q: "Do I need a permit to build a fence in Nashua, NH?",
        a: "Yes — Nashua requires a zoning permit for most fence installations. Height restrictions apply: 6 feet maximum in rear/side yards, 4 feet in front yards. We handle all permit paperwork and city coordination before any work starts.",
      },
      {
        q: "How deep do fence posts need to be set in Nashua?",
        a: "Nashua follows NH's 48-inch frost line requirement. Every post we set goes below that threshold — typically 54–60 inches in our post holes — to prevent frost heave from shifting your fence over winter.",
      },
      {
        q: "Can you install a fence in winter in Nashua?",
        a: "We stop digging when the ground freezes hard (typically late December through February). The ideal installation window is April through November. Fall installations are a great value — demand drops and we have better availability.",
      },
    ],
  },
  {
    slug: "manchester",
    name: "Manchester",
    county: "Hillsborough County",
    population: "115,000+",
    tagline: "Fence Installation & Repair in Manchester, NH",
    mapQuery: "Manchester, NH",
    intro:
      "Manchester is the largest city in New Hampshire and one of our most active service areas. From the historic Millyard district neighborhoods to the newer developments in the North End, we've fenced properties across the city. Manchester lots vary widely — you'll find rocky soil in the hills, flood-prone areas near the Merrimack River, and densely packed residential streets where property line precision matters.",
    localNote:
      "Manchester requires a building permit for fences over 6 feet in height. Fences at or below 6 feet generally do not require a permit, but setback requirements still apply. We recommend confirming with the city's Planning & Community Development office for your specific address.",
    faqs: [
      {
        q: "Does Manchester, NH require a fence permit?",
        a: "Fences 6 feet and under typically don't require a permit in Manchester, but setback rules still apply — you cannot install directly on the property line in many zones. We verify your property survey before staking anything.",
      },
      {
        q: "I have a rocky yard in Manchester — can you still install a fence?",
        a: "Yes. We use hydraulic augers that can bore through most rocky NH soil. In extreme cases where ledge prevents proper post depth, we use surface mounts with reinforced footings. We'll assess your yard at the free estimate and tell you exactly what we're dealing with.",
      },
      {
        q: "Do you do fence repair in Manchester?",
        a: "Yes — repair is a significant part of what we do. We handle storm damage, rotted post replacement, leaning sections, broken pickets, and gate rehang. Most repairs can be done in a single visit.",
      },
    ],
  },
  {
    slug: "bedford",
    name: "Bedford",
    county: "Hillsborough County",
    population: "23,000+",
    tagline: "Fence Installation & Repair in Bedford, NH",
    mapQuery: "Bedford, NH",
    intro:
      "Bedford is one of the most sought-after residential communities in Southern NH — and fence aesthetics matter here. Most Bedford properties are larger lots with high curb appeal standards, active HOAs, and proximity to the Merrimack River lowlands. Cedar privacy fences, white vinyl rail fences, and black aluminum ornamental fences are the most requested styles in this area. We understand what looks right in Bedford and we build accordingly.",
    localNote:
      "Bedford has active HOAs in many neighborhoods that impose fence material, color, and height restrictions beyond the town's zoning code. Always verify your HOA's covenants before ordering materials. We've navigated Bedford HOA requirements many times and can advise on compliant design options.",
    faqs: [
      {
        q: "Does Bedford, NH have an HOA that controls fence styles?",
        a: "Many Bedford neighborhoods have HOA covenants that specify fence materials, colors, and maximum heights. Common restrictions include no chain link in front yards, white or tan vinyl only, and 4-foot height limits in front setbacks. We'll help you identify what's permitted before the estimate.",
      },
      {
        q: "What's the most popular fence style in Bedford?",
        a: "Cedar board-on-board privacy and white vinyl privacy are the two most requested styles. For ornamental or decorative purposes, black aluminum is popular around pool areas and property boundaries. Most Bedford homeowners prioritize aesthetics alongside function.",
      },
      {
        q: "Do you install pool fences in Bedford?",
        a: "Yes — pool fence installation is a specialty. NH requires a minimum 48-inch barrier, self-closing/self-latching gates, and maximum 2-inch bottom gaps. We install pool-code-compliant aluminum fencing and handle the geometry of sloped pool surrounds.",
      },
    ],
  },
];

export const CITY_SLUGS = CITY_PAGES.map((c) => c.slug);
