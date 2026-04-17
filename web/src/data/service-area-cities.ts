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
  // ─── CORE CITIES ───────────────────────────────────────────────
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

  // ─── SOUTHERN NH ───────────────────────────────────────────────
  {
    slug: "merrimack",
    name: "Merrimack",
    county: "Hillsborough County",
    population: "26,000+",
    tagline: "Fence Installation & Repair in Merrimack, NH",
    mapQuery: "Merrimack, NH",
    intro:
      "Merrimack sits right between Nashua and Manchester along the Merrimack River, and it's one of the towns we work in most often. The residential areas off Continental Boulevard and around Merrimack Village have a mix of older established lots and newer subdivisions. Soil conditions vary quite a bit here, from sandy stretches near the river to clay-heavy ground in the western neighborhoods near Baboosic Lake.",
    localNote:
      "Merrimack requires a building permit for fences. The town enforces a 6-foot maximum height in rear and side yards and 4 feet in front yards. Setbacks from the property line also apply, so a current property survey is recommended before installation.",
    faqs: [
      {
        q: "Do I need a fence permit in Merrimack, NH?",
        a: "Yes. Merrimack requires a building permit for fence installations. The town limits height to 6 feet in rear/side yards and 4 feet in front. We pull the permit and coordinate with the town's Community Development department on your behalf.",
      },
      {
        q: "What fence styles are popular in Merrimack?",
        a: "White vinyl privacy and cedar stockade are the two most common requests. Families with kids and dogs gravitate toward 6-foot privacy fencing for the backyard, while aluminum is popular for pool enclosures and decorative front-yard borders.",
      },
      {
        q: "Is the soil in Merrimack difficult for fence installation?",
        a: "It depends on where in town. Properties near the Merrimack River and Baboosic Lake tend to have sandier, wetter soil that drains well but requires deeper concrete footings. Western areas can hit clay or occasional ledge. We assess soil conditions during the free estimate visit.",
      },
    ],
  },
  {
    slug: "hudson",
    name: "Hudson",
    county: "Hillsborough County",
    population: "25,000+",
    tagline: "Fence Installation & Repair in Hudson, NH",
    mapQuery: "Hudson, NH",
    intro:
      "Hudson is just across the Merrimack River from Nashua, and we're over there constantly. It's a family-oriented town with a lot of residential neighborhoods along routes like Lowell Road, Bush Hill Road, and the areas around Robinson Pond. Many Hudson properties are mid-size suburban lots where homeowners want a good backyard fence for kids and dogs without breaking the budget. We know the terrain here well and can get most Hudson jobs done quickly.",
    localNote:
      "Hudson does not require a permit for fences 6 feet and under, but the town's zoning ordinance restricts front-yard fence height to 4 feet and requires that the finished side face outward toward the neighbor. We always confirm setback rules before digging.",
    faqs: [
      {
        q: "Does Hudson, NH require a fence permit?",
        a: "For fences 6 feet and under, Hudson generally does not require a permit. However, front-yard fences are limited to 4 feet, and setback requirements still apply. We verify your specific lot requirements before starting any work.",
      },
      {
        q: "What's the best fence for a dog in Hudson?",
        a: "A 6-foot vinyl or cedar privacy fence with no gaps at the bottom is the most reliable option for dogs. For smaller dogs, a 4-foot picket with tighter spacing works well. We can add a bottom rail close to grade to prevent diggers from getting under.",
      },
      {
        q: "How long does a typical fence installation take in Hudson?",
        a: "Most residential fence jobs in Hudson take 1 to 3 days depending on the linear footage and material. A standard backyard privacy fence on a quarter-acre lot is usually a two-day job. We'll give you a specific timeline at the estimate.",
      },
    ],
  },
  {
    slug: "londonderry",
    name: "Londonderry",
    county: "Rockingham County",
    population: "26,000+",
    tagline: "Fence Installation & Repair in Londonderry, NH",
    mapQuery: "Londonderry, NH",
    intro:
      "Londonderry is a fast-growing town with a mix of established neighborhoods and newer developments off routes like Mammoth Road and Pillsbury Road. A lot of the residential areas have that classic Southern NH look: good-sized lots, mature trees, and families who want a solid backyard fence. The terrain here is generally workable, though some properties near Musquash Swamp or the apple orchards have wetter conditions that we account for during planning.",
    localNote:
      "Londonderry requires a building permit for all fences. The town enforces a 6-foot maximum height in rear and side yards and 4 feet in front yards. Some subdivisions in Londonderry also have deed restrictions or HOA covenants that go beyond the town code.",
    faqs: [
      {
        q: "Do I need a permit for a fence in Londonderry, NH?",
        a: "Yes. Londonderry requires a building permit for all fence installations. Height is limited to 6 feet in rear/side yards and 4 feet in front. We handle the entire permit process and make sure your fence meets code before we start.",
      },
      {
        q: "Are there HOA restrictions on fences in Londonderry?",
        a: "Several Londonderry subdivisions have HOA covenants that restrict fence material, color, and style. These rules are separate from the town's building code. We recommend checking your HOA guidelines before the estimate, and we can help you pick a compliant design.",
      },
      {
        q: "What type of fence holds up best in Londonderry winters?",
        a: "Vinyl and aluminum handle New Hampshire winters the best. They don't rot, warp, or require annual staining. Cedar is also a strong choice if you prefer the natural wood look, but it does need periodic sealing to maintain its appearance. We set all posts below the 48-inch frost line to prevent heave.",
      },
    ],
  },
  {
    slug: "hooksett",
    name: "Hooksett",
    county: "Merrimack County",
    population: "14,000+",
    tagline: "Fence Installation & Repair in Hooksett, NH",
    mapQuery: "Hooksett, NH",
    intro:
      "Hooksett straddles the Merrimack River just north of Manchester, and it's a town that's been growing steadily. The residential areas along Route 3 and Whitehall Road have a variety of lot sizes, from compact subdivisions to larger rural parcels. There's a fair amount of rocky soil in the hillier parts of town, especially heading toward the eastern side near Bear Brook State Park. We're familiar with the digging conditions here and plan accordingly.",
    localNote:
      "Hooksett requires a building permit for fence installations. The town follows standard NH height guidelines of 6 feet for side/rear and 4 feet for front yards. Properties near the Merrimack River may be subject to additional floodplain setback requirements.",
    faqs: [
      {
        q: "Does Hooksett require a fence permit?",
        a: "Yes. Hooksett requires a building permit for fences. You'll need to meet height restrictions and setback distances from the property line. We handle the permit application and make sure everything's squared with the town before we dig.",
      },
      {
        q: "Can you install a fence on a sloped lot in Hooksett?",
        a: "Absolutely. Many Hooksett properties have grade changes, especially in the hillier areas east of Route 3. We use stepped or racked panel configurations depending on the slope and your preferred style. We'll measure the grade during the estimate and show you the best approach.",
      },
      {
        q: "What about fencing near the Merrimack River in Hooksett?",
        a: "Properties in the floodplain have specific setback and construction requirements. We verify your lot's flood zone status before planning. In these areas, we may recommend aluminum fencing since it handles periodic flooding better than wood.",
      },
    ],
  },
  {
    slug: "goffstown",
    name: "Goffstown",
    county: "Hillsborough County",
    population: "18,000+",
    tagline: "Fence Installation & Repair in Goffstown, NH",
    mapQuery: "Goffstown, NH",
    intro:
      "Goffstown has a nice mix of village charm and rural space, sitting along the Piscataquog River west of Manchester. The neighborhoods around Goffstown Village and Pinardville are more densely settled, while the areas out toward Uncanoonuc Mountain and Shirley Hill have larger, more wooded lots. Fencing here often involves navigating uneven terrain, tree roots, and rocky patches. We enjoy working in Goffstown because the properties have real character.",
    localNote:
      "Goffstown requires a building permit for fences. The town's zoning ordinance sets a 6-foot maximum height in rear and side yards. Properties in the historic village area may have additional restrictions. We recommend Dig Safe markings before any project, which we coordinate as part of the job.",
    faqs: [
      {
        q: "Do I need a permit for a fence in Goffstown?",
        a: "Yes. Goffstown requires a building permit for fence installations. The town enforces a 6-foot height maximum in rear and side yards. We pull the permit on your behalf and confirm setback distances before installation.",
      },
      {
        q: "Can you fence a wooded lot in Goffstown?",
        a: "Yes, and it's something we do regularly. Wooded lots often have root systems and uneven ground that need to be worked around. We'll walk the property with you to determine the best fence line that avoids major roots and works with the terrain rather than against it.",
      },
      {
        q: "What fence material works best on hilly Goffstown properties?",
        a: "Aluminum is the most versatile for steep slopes because it can be racked to follow the grade. Vinyl panels can also be stepped on moderate slopes. For a natural look that blends with wooded lots, cedar board-on-board is a popular choice. We'll recommend the best option based on your specific grade.",
      },
    ],
  },
  {
    slug: "auburn",
    name: "Auburn",
    county: "Rockingham County",
    population: "5,600+",
    tagline: "Fence Installation & Repair in Auburn, NH",
    mapQuery: "Auburn, NH",
    intro:
      "Auburn is a quiet, rural-residential town east of Manchester with larger lots and a real country feel. Most Auburn properties are at least an acre, many with well water and septic systems. The terrain tends toward rocky and wooded, with granite outcroppings scattered across the landscape. Lake Massabesic borders the west side of town, and properties near the reservoir have specific considerations we always account for. Fencing in Auburn usually means longer runs on bigger parcels.",
    localNote:
      "Auburn's zoning requires a fence permit, and the town limits fence height to 6 feet in rear/side yards. Properties adjacent to Lake Massabesic's watershed may have additional setback requirements. With larger lots, longer fence runs are common, so accurate property surveys are especially important here.",
    faqs: [
      {
        q: "Is Auburn, NH good for fence installation with all the rocks?",
        a: "Auburn has some of the rockier soil in the area, but we're equipped for it. Our hydraulic augers handle most rocky ground. If we hit solid ledge, we switch to surface-mount posts with concrete footings. We'll assess your specific lot conditions during the free estimate.",
      },
      {
        q: "How much does it cost to fence a large lot in Auburn?",
        a: "Cost depends on linear footage, material, and terrain. Auburn lots tend to be larger than suburban towns, so total footage adds up. We provide free on-site estimates with exact pricing. Many Auburn homeowners fence the backyard only rather than the full perimeter to manage cost.",
      },
      {
        q: "Do I need a survey before fencing in Auburn?",
        a: "We strongly recommend it, especially in Auburn where lot lines can be ambiguous on larger rural parcels. A recent survey prevents disputes with neighbors. If you don't have one, we can recommend local surveyors we trust.",
      },
    ],
  },
  {
    slug: "candia",
    name: "Candia",
    county: "Rockingham County",
    population: "4,000+",
    tagline: "Fence Installation & Repair in Candia, NH",
    mapQuery: "Candia, NH",
    intro:
      "Candia is a small, rural town between Auburn and Raymond, known for its farmland, ponds, and quiet backroads. Properties here tend to be spacious, often surrounded by woods or open fields. The soil in Candia varies from sandy near the ponds to rocky clay further inland. Homeowners here usually want fencing to contain animals, define property boundaries on larger lots, or add security to more isolated properties.",
    localNote:
      "Candia requires a building permit for fences. The town has a rural character with many lots exceeding 2 acres, so fence runs can be substantial. Properties near wetlands or designated agricultural land may have additional restrictions that the town's building inspector can clarify.",
    faqs: [
      {
        q: "Does Candia, NH require a fence permit?",
        a: "Yes. Candia requires a building permit for fences. The town's building inspector reviews plans for height compliance and setback distances. We handle the application and approval process as part of every project.",
      },
      {
        q: "What's the best fence for livestock containment in Candia?",
        a: "For horses and livestock, we install split-rail with mesh backing, high-tensile wire, or board fencing depending on what you're containing. We also install agricultural-grade chain link and woven wire. We'll discuss the best option based on your animals and property layout.",
      },
      {
        q: "Can you fence around wetland areas in Candia?",
        a: "We can, but there are setback rules. Candia has significant wetland areas, and the town enforces buffer zone restrictions. We verify wetland boundaries before planning the fence line and stay compliant with all setback requirements.",
      },
    ],
  },
  {
    slug: "weare",
    name: "Weare",
    county: "Hillsborough County",
    population: "9,000+",
    tagline: "Fence Installation & Repair in Weare, NH",
    mapQuery: "Weare, NH",
    intro:
      "Weare is a sprawling rural town west of Goffstown with winding back roads, big wooded lots, and a strong independent streak. The center of town along Route 114 has smaller residential parcels, but once you get out toward South Weare or toward Mount William, the properties open up. The terrain here can be challenging, with granite ledge, steep grades, and dense tree cover. It's the kind of place where careful site planning makes all the difference in a fence project.",
    localNote:
      "Weare requires a building permit for fence installations. Given the town's rural character, many lots have unclear boundaries, so we recommend a property survey before starting. Soil conditions in Weare are highly variable, and granite ledge is common in the hillier areas west of Route 114.",
    faqs: [
      {
        q: "Can you install a fence on a heavily wooded lot in Weare?",
        a: "Yes. We work on wooded lots regularly in Weare. In many cases, some selective clearing along the fence line is needed. We can coordinate that as part of the project, or you can clear ahead of time. We'll walk the proposed line with you during the estimate to plan around large trees.",
      },
      {
        q: "Is there ledge in Weare that could affect fence post depth?",
        a: "Weare has some of the most granite-heavy terrain in the area. We carry equipment to handle rocky conditions, and if we hit solid ledge, we use surface-mount posts with concrete bases. We identify potential ledge areas during the free estimate so there are no surprises on install day.",
      },
      {
        q: "What type of fence works best for rural Weare properties?",
        a: "Cedar split-rail is very popular on larger Weare properties because it looks natural and defines boundaries without feeling suburban. For privacy or pet containment, cedar stockade or vinyl privacy fencing are the go-to options. We'll match the style to your property's character.",
      },
    ],
  },
  {
    slug: "litchfield",
    name: "Litchfield",
    county: "Hillsborough County",
    population: "8,500+",
    tagline: "Fence Installation & Repair in Litchfield, NH",
    mapQuery: "Litchfield, NH",
    intro:
      "Litchfield is a small residential town squeezed between the Merrimack River and Route 3A, right next to Hudson and Merrimack. It's a family-focused community with well-kept suburban lots, many of them with backyards that border the river or conservation land. Fencing is popular here for backyard privacy, pool enclosures, and keeping kids and pets safe. The soil along the river side tends to be sandy, while properties further from the water hit more typical NH rocky ground.",
    localNote:
      "Litchfield requires a building permit for fence installations. The town limits residential fences to 6 feet in rear/side yards and 4 feet in front yards. Properties along the Merrimack River may fall within the floodplain, which could affect post footing requirements.",
    faqs: [
      {
        q: "Does Litchfield, NH require a fence permit?",
        a: "Yes. Litchfield requires a building permit for all fence installations. Height limits are 6 feet in rear/side yards and 4 feet in front. We file the permit with the town and confirm all setback requirements before starting.",
      },
      {
        q: "What about fencing near the Merrimack River in Litchfield?",
        a: "Properties near the river often have sandier soil and may be in a flood zone. We verify flood zone status and adjust our approach accordingly. Aluminum and vinyl hold up better than wood in flood-prone areas because they resist water damage and don't rot.",
      },
      {
        q: "What's the most popular fence in Litchfield?",
        a: "Vinyl privacy fencing is the most requested style in Litchfield, followed by cedar privacy. A lot of homeowners here want a clean, low-maintenance backyard enclosure for kids and pets. Black aluminum is popular for pool areas and decorative front-yard fencing.",
      },
    ],
  },
  {
    slug: "new-boston",
    name: "New Boston",
    county: "Hillsborough County",
    population: "6,000+",
    tagline: "Fence Installation & Repair in New Boston, NH",
    mapQuery: "New Boston, NH",
    intro:
      "New Boston is a classic New Hampshire country town with rolling hills, stone walls, and properties that range from a half-acre to dozens of acres. The village center along Route 13 has a tight-knit community feel, while the outlying roads like Mont Vernon Road and Francestown Turnpike lead to more remote parcels. Fencing in New Boston often means working with slopes, fieldstone, and tree lines. It's rewarding work when the finished fence fits the landscape.",
    localNote:
      "New Boston requires a building permit for fences. The town has a rural character with conservation land throughout, so some parcels may have easements or wetland buffers to navigate. A property survey is especially helpful on larger New Boston lots where boundary markers may be hard to find.",
    faqs: [
      {
        q: "What type of fence fits the look of New Boston?",
        a: "Cedar split-rail and post-and-rail fencing are very popular in New Boston because they complement the rural landscape. For privacy, cedar board-on-board blends in naturally. Some homeowners use a combination: split-rail along the road frontage and privacy fencing around the backyard.",
      },
      {
        q: "Can you install a fence on hilly terrain in New Boston?",
        a: "Yes. New Boston has plenty of grade changes, and we install on slopes regularly. We use racked panels for aluminum fencing and stepped configurations for vinyl or cedar. We'll measure the slope during the estimate and show you how the finished fence will look.",
      },
      {
        q: "Do I need a survey for fence installation in New Boston?",
        a: "We highly recommend it. New Boston lots are often large and irregularly shaped, and old boundary markers can be hard to locate. A survey ensures we place the fence accurately on your property and avoids potential disputes with neighbors.",
      },
    ],
  },
  {
    slug: "mont-vernon",
    name: "Mont Vernon",
    county: "Hillsborough County",
    population: "2,600+",
    tagline: "Fence Installation & Repair in Mont Vernon, NH",
    mapQuery: "Mont Vernon, NH",
    intro:
      "Mont Vernon is a small hilltop town between New Boston and Milford with a quintessential New England village center and surrounding countryside. Properties here tend to be large, wooded, and private. The terrain is hilly with rocky soil typical of the Souhegan Valley area. Mont Vernon homeowners often want fencing that respects the natural landscape while solving a practical need like pet containment or property definition.",
    localNote:
      "Mont Vernon requires a building permit for fences. The town is predominantly residential-agricultural, and many lots have steep grades or rocky soil that require careful site evaluation. We recommend scheduling a site visit early in the planning process for Mont Vernon properties.",
    faqs: [
      {
        q: "Is fence installation difficult on Mont Vernon's hilly lots?",
        a: "It can be more involved than flat suburban lots, but it's something we handle regularly. The hills and rocky soil in Mont Vernon mean we need to plan post placement carefully. We walk every property before estimating to identify the best approach for the terrain.",
      },
      {
        q: "What fence styles do Mont Vernon homeowners choose?",
        a: "Natural wood fences like cedar split-rail and board-on-board are the most popular here because they match the town's rural character. Aluminum is also a good fit for properties that want an open, traditional look without blocking views.",
      },
      {
        q: "Do you serve Mont Vernon even though it's a small town?",
        a: "Absolutely. Mont Vernon is within our core service area, and we're happy to work there. The drive from Nashua is short, and we treat every project the same regardless of town size. You'll get the same quality, communication, and follow-through.",
      },
    ],
  },
  {
    slug: "milford",
    name: "Milford",
    county: "Hillsborough County",
    population: "16,000+",
    tagline: "Fence Installation & Repair in Milford, NH",
    mapQuery: "Milford, NH",
    intro:
      "Milford sits along the Souhegan River southwest of Nashua and has a great mix of village-center living and rural properties on the outskirts. The downtown Oval area and neighborhoods along Elm Street and Union Street have smaller lots where fence placement precision matters. Further out on roads like Mont Vernon Road and Brookline Road, lots get larger and the terrain gets hillier. Milford is a town where we see everything from quick picket-fence installs to full-perimeter privacy jobs.",
    localNote:
      "Milford requires a building permit for fences. The town limits fence height to 6 feet in rear/side yards and 4 feet in front setbacks. Properties near the Souhegan River may be in the floodplain, and the town's community development office can confirm flood zone status for your address.",
    faqs: [
      {
        q: "Does Milford, NH require a fence permit?",
        a: "Yes. Milford requires a building permit for all fence installations. We file the permit application and coordinate with the town's community development office. The process is straightforward and typically takes a few days.",
      },
      {
        q: "Can you fence a property near the Souhegan River in Milford?",
        a: "Yes, but floodplain regulations may apply. If your property is in a flood zone, we factor that into the fence design and materials. Aluminum and vinyl are preferred in flood-prone areas because they handle water exposure much better than wood.",
      },
      {
        q: "What's the turnaround time for a fence job in Milford?",
        a: "From estimate to installation, most Milford jobs take 2 to 4 weeks depending on material availability and permit processing. The actual installation is typically 1 to 3 days for a standard residential backyard fence. We'll give you a specific timeline at the estimate.",
      },
    ],
  },

  // ─── SEACOAST ──────────────────────────────────────────────────
  {
    slug: "epping",
    name: "Epping",
    county: "Rockingham County",
    population: "7,000+",
    tagline: "Fence Installation & Repair in Epping, NH",
    mapQuery: "Epping, NH",
    intro:
      "Epping is a growing town along Route 101 between Manchester and the Seacoast, with a mix of residential subdivisions and rural lots. The Lamprey River runs through town, and the terrain ranges from flat areas near the river to hillier, wooded parcels further out. Epping has been adding new housing developments steadily, and a lot of those new homeowners are looking for fencing as soon as they move in. We serve Epping regularly and know the area well.",
    localNote:
      "Epping requires a building permit for fence installations. The town enforces standard height restrictions: 6 feet in rear/side yards, 4 feet in front. Properties near the Lamprey River may be subject to floodplain or shoreland protection regulations.",
    faqs: [
      {
        q: "Do I need a permit for a fence in Epping, NH?",
        a: "Yes. Epping requires a building permit for all fence installations. Height is limited to 6 feet in rear/side yards and 4 feet in front. We handle the permit process from start to finish so you don't have to deal with town hall.",
      },
      {
        q: "Is Epping far from your service area?",
        a: "Not at all. Epping is well within our Seacoast service area. The drive from Nashua via Route 101 is straightforward, and we're in the area regularly for other projects. There's no extra travel charge for Epping jobs.",
      },
      {
        q: "What should I know about fencing near the Lamprey River in Epping?",
        a: "Properties near the Lamprey River may have shoreland protection setbacks and floodplain restrictions. We check your lot's flood zone status and any buffer requirements before planning the fence line. This ensures we stay compliant and avoid any issues with the town.",
      },
    ],
  },
  {
    slug: "exeter",
    name: "Exeter",
    county: "Rockingham County",
    population: "16,000+",
    tagline: "Fence Installation & Repair in Exeter, NH",
    mapQuery: "Exeter, NH",
    intro:
      "Exeter is one of NH's most historic towns, with a classic downtown, Phillips Exeter Academy, and neighborhoods that range from colonial-era homes to modern subdivisions. The Exeter River winds through the center of town, and many properties have mature landscaping and established character. Fence work in Exeter often requires attention to aesthetics since the historic district and surrounding neighborhoods have higher visual standards. We approach Exeter jobs with that context in mind.",
    localNote:
      "Exeter's Heritage District has additional design review requirements for fences. Even outside the district, the town requires a building permit for all fences. Fences in the historic area may need approval from the Heritage Commission for material and style compatibility.",
    faqs: [
      {
        q: "Does Exeter have special rules for fences in the historic district?",
        a: "Yes. The Exeter Heritage District has design review requirements that may affect fence material, style, and placement. If your property falls within the district, we'll help you navigate the Heritage Commission review process and recommend historically appropriate designs.",
      },
      {
        q: "What fence styles look right in Exeter?",
        a: "Exeter's character lends itself to white picket fences, black aluminum ornamental, and natural cedar. For privacy, cedar board-on-board is a popular choice that fits the town's aesthetic. We avoid industrial-looking materials that would clash with the neighborhood.",
      },
      {
        q: "Can you install a fence around an older Exeter property with uneven ground?",
        a: "Yes. Many Exeter properties have settled terrain, old stone walls, and mature root systems. We plan the fence line carefully to work around these features. Stepped or racked configurations handle grade changes, and we can integrate the fence with existing stone walls where appropriate.",
      },
    ],
  },
  {
    slug: "lee",
    name: "Lee",
    county: "Strafford County",
    population: "4,500+",
    tagline: "Fence Installation & Repair in Lee, NH",
    mapQuery: "Lee, NH",
    intro:
      "Lee is a small, rural town between Epping and Durham, known for its conservation land, horse farms, and quiet residential roads. Most Lee properties are on the larger side, with wooded lots and open fields. The soil here tends to be a mix of rocky and loamy, typical of interior Strafford County. Homeowners in Lee usually want fencing for animal containment, property boundaries, or privacy on their more secluded lots.",
    localNote:
      "Lee requires a building permit for fences. The town has significant wetland and conservation areas, so many properties have buffer zones that affect fence placement. We verify wetland setbacks and any conservation easements before planning the fence line.",
    faqs: [
      {
        q: "Does Lee, NH require a fence permit?",
        a: "Yes. Lee requires a building permit for all fence installations. We handle the application process and confirm setback distances from property lines, wetlands, and conservation areas before any work begins.",
      },
      {
        q: "What fencing works for horses and livestock in Lee?",
        a: "For horses, we install 3- and 4-rail post-and-board fencing, split-rail, and high-tensile options depending on your needs and budget. Board fencing with a top rail at 54 to 60 inches is the most popular choice for horse properties in the area.",
      },
      {
        q: "Can you fence around conservation land in Lee?",
        a: "You can fence your property near conservation land, but we need to respect any easements or buffer zones. We verify your property boundaries and any conservation restrictions during the planning phase. A current survey is highly recommended for Lee properties adjacent to conservation areas.",
      },
    ],
  },
  {
    slug: "durham",
    name: "Durham",
    county: "Strafford County",
    population: "17,000+",
    tagline: "Fence Installation & Repair in Durham, NH",
    mapQuery: "Durham, NH",
    intro:
      "Durham is home to the University of New Hampshire and sits along the Oyster River and Great Bay estuary. Beyond the campus area, Durham has residential neighborhoods with established homes, many near the bay or along Packers Falls Road and Route 108. The mix of tidal marshland, wooded areas, and suburban streets means fence projects here require site-specific planning. We work with both long-term residents and newer homeowners who want quality fencing that fits Durham's character.",
    localNote:
      "Durham requires a building permit for fence installations. The town has extensive tidal shoreland and wetland areas with strict buffer requirements under NH's Shoreland Water Quality Protection Act. Properties near Great Bay or the Oyster River should expect additional setback considerations.",
    faqs: [
      {
        q: "Does Durham have restrictions on fencing near Great Bay?",
        a: "Yes. Properties near Great Bay and its tidal tributaries are subject to NH's Shoreland Water Quality Protection Act, which imposes buffer zones where construction is restricted. We identify these zones early and plan your fence line to stay fully compliant.",
      },
      {
        q: "What fence materials hold up near saltwater in Durham?",
        a: "Aluminum and vinyl are the best choices near the coast and tidal areas because they resist corrosion. Wood fences near saltwater environments deteriorate faster unless treated specifically for marine conditions. We'll recommend the right material based on your property's proximity to the water.",
      },
      {
        q: "Do you serve the residential areas of Durham, not just near campus?",
        a: "Yes. Most of our Durham work is in the residential neighborhoods away from campus, like Packers Falls Road, Bagdad Road, and the areas near Oyster River. We serve homeowners throughout the entire town.",
      },
    ],
  },
  {
    slug: "madbury",
    name: "Madbury",
    county: "Strafford County",
    population: "1,900+",
    tagline: "Fence Installation & Repair in Madbury, NH",
    mapQuery: "Madbury, NH",
    intro:
      "Madbury is one of the smallest towns in our service area, tucked between Durham and Dover with a quiet, rural character. Properties here are spread out along roads like Town Hall Road and Nute Road, with a lot of open land, farms, and wooded parcels. The Bellamy River runs through town, and the terrain is generally gentle compared to the hillier towns in our Southern NH coverage. Madbury homeowners tend to value privacy and rural aesthetics in their fence choices.",
    localNote:
      "Madbury requires a building permit for fences. The town's small size means fewer regulations compared to larger municipalities, but setback and height rules still apply. Properties near the Bellamy River or wetland areas may face additional restrictions.",
    faqs: [
      {
        q: "Does tiny Madbury still require a fence permit?",
        a: "Yes. Even small towns like Madbury require building permits for fence installations. The process is straightforward, and we handle the paperwork on your behalf. The town's building inspector reviews plans for height and setback compliance.",
      },
      {
        q: "What kind of fencing do Madbury homeowners typically install?",
        a: "Cedar split-rail and post-and-board fencing are the most popular for Madbury's rural properties. For backyard privacy closer to the house, cedar board-on-board or vinyl privacy fencing works well. The style depends on whether you're fencing a small yard or a larger perimeter.",
      },
      {
        q: "Do you charge extra for a small town like Madbury?",
        a: "No. Madbury is within our Seacoast service area and there's no additional travel charge. We treat Madbury projects exactly the same as any other town we serve, with the same quality, communication, and pricing structure.",
      },
    ],
  },
  {
    slug: "dover",
    name: "Dover",
    county: "Strafford County",
    population: "32,000+",
    tagline: "Fence Installation & Repair in Dover, NH",
    mapQuery: "Dover, NH",
    intro:
      "Dover is the largest city in Strafford County and one of the fastest-growing communities on the Seacoast. The neighborhoods range from the dense downtown area along Central Avenue to the more suburban developments off Route 108 and Back River Road. The Cochecho River and Bellamy River run through town, creating varied terrain and soil conditions. Dover has a strong mix of older homes with character and new construction that all need quality fencing.",
    localNote:
      "Dover requires a building permit for most fences. The city has specific setback requirements and enforces height maximums of 6 feet in rear/side yards and 4 feet in front. The historic downtown area may have additional design considerations. We coordinate with Dover's Planning Department for every project.",
    faqs: [
      {
        q: "Does Dover, NH require a fence permit?",
        a: "Yes. Dover requires a building permit for fence installations. Setback requirements and height limits apply. We file the permit and coordinate with Dover's Planning and Community Development department before any work starts.",
      },
      {
        q: "What fence is best for Dover's dense neighborhoods?",
        a: "In the tighter neighborhoods near downtown and Central Avenue, vinyl and cedar privacy fencing are the most popular because they maximize backyard privacy on smaller lots. We pay close attention to property line placement in dense areas, and a survey is strongly recommended.",
      },
      {
        q: "Can you work on fences near the Cochecho River in Dover?",
        a: "Yes, but properties near the Cochecho and Bellamy Rivers may be in flood zones or shoreland protection areas. We verify all applicable restrictions before planning. Aluminum and vinyl are the best materials for flood-prone locations because they handle water exposure without rotting.",
      },
    ],
  },
  {
    slug: "portsmouth",
    name: "Portsmouth",
    county: "Rockingham County",
    population: "22,000+",
    tagline: "Fence Installation & Repair in Portsmouth, NH",
    mapQuery: "Portsmouth, NH",
    intro:
      "Portsmouth is New Hampshire's only seaport city, with a mix of historic architecture, compact downtown lots, and waterfront properties. From the older neighborhoods around South End and the Plains to the residential areas along Islington Street and Lafayette Road, fencing in Portsmouth requires an eye for detail. Salt air, tight lot lines, and the city's historic character all factor into how we plan and build fences here. Portsmouth projects tend to prioritize aesthetics as much as function.",
    localNote:
      "Portsmouth requires a building permit for fences, and properties in the Historic District must receive approval from the Historic District Commission before installation. Salt air accelerates corrosion on metal hardware, so we use stainless steel or hot-dipped galvanized fasteners on all Portsmouth coastal projects.",
    faqs: [
      {
        q: "Does Portsmouth's Historic District affect what fence I can build?",
        a: "Yes. If your property is in Portsmouth's Historic District, fence plans must be reviewed and approved by the Historic District Commission. They evaluate material, height, style, and placement for compatibility with the district's character. We can guide you through the process and recommend approved styles.",
      },
      {
        q: "What fence materials hold up to salt air in Portsmouth?",
        a: "Vinyl and aluminum are the most durable in coastal conditions because they resist salt corrosion. If you prefer wood, cedar holds up better than pine, but it still needs more frequent maintenance near the ocean. We use marine-grade or stainless steel fasteners on all Portsmouth installations.",
      },
      {
        q: "How do you handle tight lot lines in Portsmouth?",
        a: "Portsmouth lots, especially near downtown, can be very tight. We work precisely off property surveys and recommend your neighbor be present during stakeout. In some cases, we install fences a few inches inside the property line to avoid encroachment. Accuracy matters in a city this dense.",
      },
    ],
  },
  {
    slug: "rye",
    name: "Rye",
    county: "Rockingham County",
    population: "5,500+",
    tagline: "Fence Installation & Repair in Rye, NH",
    mapQuery: "Rye, NH",
    intro:
      "Rye is a coastal town right on the Atlantic, known for Rye Beach, Jenness Beach, and Wallis Sands. Properties here range from oceanfront estates to inland residential lots along Washington Road and Pioneer Road. Fencing near the ocean means contending with salt spray, wind exposure, and sandy soil conditions. Rye homeowners expect fencing that looks good and holds up against the coastal elements. We build with those conditions front of mind on every Rye project.",
    localNote:
      "Rye requires a building permit for fences. Coastal properties are subject to NH's Shoreland Water Quality Protection Act and may have additional setback requirements. Wind and salt exposure are significant factors in Rye, so material selection and fastener quality are critical.",
    faqs: [
      {
        q: "What fence material lasts longest near the ocean in Rye?",
        a: "Aluminum and vinyl are the clear winners for oceanfront and near-ocean properties. They don't rust, rot, or corrode from salt spray. For a more traditional look, cedar works but needs sealing every 1 to 2 years in heavy salt-air environments. We use stainless steel fasteners on all coastal jobs.",
      },
      {
        q: "Can you install fence posts in sandy coastal soil in Rye?",
        a: "Yes. Sandy soil near the beaches drains quickly and doesn't hold posts as firmly as clay or loam. We compensate by using larger concrete footings and setting posts deeper. Proper footing size in sandy soil is one of the most important details for a long-lasting coastal fence.",
      },
      {
        q: "Are there special setback rules for oceanfront fences in Rye?",
        a: "Yes. Oceanfront properties in Rye are subject to shoreland setback rules under state law, and the town may have additional requirements. We verify all setback distances from the high-water mark and any coastal buffer zones before planning your fence line.",
      },
    ],
  },
  {
    slug: "greenland",
    name: "Greenland",
    county: "Rockingham County",
    population: "4,000+",
    tagline: "Fence Installation & Repair in Greenland, NH",
    mapQuery: "Greenland, NH",
    intro:
      "Greenland is a small town between Portsmouth and Exeter along Route 33 and Route 151, with a rural-suburban character and proximity to Great Bay. The residential areas along Breakfast Hill Road and Post Road have well-maintained properties where curb appeal matters. Great Bay's tidal marshes border the east side of town, and some properties have views of the bay. Fencing in Greenland is usually about backyard privacy, pet containment, or adding structure to these attractive residential lots.",
    localNote:
      "Greenland requires a building permit for fences. Properties near Great Bay may be subject to tidal shoreland buffer requirements. The town's proximity to the coast means salt air can affect metal components, though not as aggressively as direct oceanfront towns like Rye.",
    faqs: [
      {
        q: "Does Greenland, NH require a fence permit?",
        a: "Yes. Greenland requires a building permit for all fence installations. Standard height and setback rules apply. We handle the permit application and coordinate with the town's building department on your behalf.",
      },
      {
        q: "Is salt air a concern for fences in Greenland?",
        a: "It's less intense than direct oceanfront towns like Rye or Portsmouth, but salt air still reaches Greenland, especially properties closer to Great Bay. We recommend vinyl or aluminum for maximum durability, and we always use corrosion-resistant fasteners in the Seacoast area.",
      },
      {
        q: "What about fencing near the Great Bay marshes in Greenland?",
        a: "Properties adjacent to Great Bay's tidal marshes may have buffer zone restrictions. We verify your lot's proximity to tidal areas and any applicable setback rules before planning. The town and state both have regulations that protect tidal wetlands.",
      },
    ],
  },
  {
    slug: "stratham",
    name: "Stratham",
    county: "Rockingham County",
    population: "8,000+",
    tagline: "Fence Installation & Repair in Stratham, NH",
    mapQuery: "Stratham, NH",
    intro:
      "Stratham is a well-kept town between Exeter and Portsmouth, centered around Route 101 and Route 108. It has grown steadily with quality residential developments, and the town maintains a strong sense of community. Many Stratham properties are in organized subdivisions with HOA guidelines, while others are on larger lots along roads like Winnicutt Road and Union Road. The terrain is relatively flat and workable, making Stratham a smooth town for fence installation.",
    localNote:
      "Stratham requires a building permit for fences. Several subdivisions in town have HOA covenants that dictate fence materials, colors, and heights. We recommend reviewing your HOA documents before the estimate so we can design a compliant fence from the start.",
    faqs: [
      {
        q: "Do Stratham subdivisions have HOA fence rules?",
        a: "Many do. Stratham has several neighborhoods with active HOAs that specify allowed fence materials, maximum heights, and approved colors. These rules are in addition to the town's building code. We'll help you understand what's allowed and design accordingly.",
      },
      {
        q: "What's the most popular fence style in Stratham?",
        a: "White vinyl privacy and black aluminum ornamental are the two most requested styles. Stratham homeowners tend to prioritize clean, low-maintenance options that look good alongside well-landscaped yards. Cedar is also popular for those who prefer a natural wood look.",
      },
      {
        q: "How flat is the terrain in Stratham for fence installation?",
        a: "Stratham is one of the flatter towns in our service area, which makes for straightforward installations. Most properties don't require special racking or stepping for grade changes. Soil conditions are generally good, with less ledge than the hillier towns further west.",
      },
    ],
  },
  {
    slug: "hampton",
    name: "Hampton",
    county: "Rockingham County",
    population: "16,000+",
    tagline: "Fence Installation & Repair in Hampton, NH",
    mapQuery: "Hampton, NH",
    intro:
      "Hampton is one of the most well-known towns on the NH Seacoast, with Hampton Beach drawing summer crowds and the inland residential areas offering year-round family living. Neighborhoods along High Street, Winnacunnet Road, and the areas near Hampton Academy have solid residential fencing demand. Properties closer to the beach deal with salt air and sandy soil, while the inland areas along Route 27 and Route 101 have more standard conditions. We adjust our approach based on where in Hampton you are.",
    localNote:
      "Hampton requires a building permit for fences. Properties near the beach and tidal marshes are subject to shoreland protection and flood zone requirements. Salt-air exposure varies significantly between beach-area and inland Hampton properties, and we select materials and hardware accordingly.",
    faqs: [
      {
        q: "Does salt air from Hampton Beach affect inland fences?",
        a: "It depends on distance. Properties within a mile or so of the ocean get meaningful salt exposure. Further inland along Route 27 or near the Exeter border, it's much less of a factor. We assess your property's exposure level and recommend materials accordingly.",
      },
      {
        q: "Can you install a fence on a Hampton beach property?",
        a: "Yes, but beach-area properties have specific considerations: sandy soil requires larger footings, salt spray demands corrosion-resistant materials, and flood zone rules may apply. We design for these conditions from the start. Aluminum and vinyl are the best choices near the water.",
      },
      {
        q: "What are Hampton's fence permit requirements?",
        a: "Hampton requires a building permit for all fence installations, with standard height limits of 6 feet in rear/side yards and 4 feet in front. Coastal properties may have additional requirements. We handle the full permit process and verify all applicable regulations for your specific lot.",
      },
    ],
  },
  {
    slug: "north-hampton",
    name: "North Hampton",
    county: "Rockingham County",
    population: "4,500+",
    tagline: "Fence Installation & Repair in North Hampton, NH",
    mapQuery: "North Hampton, NH",
    intro:
      "North Hampton is a small coastal town between Hampton and Rye, with a mix of oceanfront properties and quieter inland neighborhoods along Atlantic Avenue and Route 1. The town has a more residential, less tourist-oriented feel than neighboring Hampton Beach. Properties near Little Boars Head and the coast face full salt-air exposure, while those further west along Winnicut Road have more sheltered conditions. We tailor every North Hampton fence to the specific conditions of the lot.",
    localNote:
      "North Hampton requires a building permit for fences. Oceanfront and near-ocean properties are subject to shoreland protection setbacks and may be in flood zones. The town has relatively modest zoning compared to Portsmouth or Exeter, but permit requirements still apply to all fence installations.",
    faqs: [
      {
        q: "What fence works best near Little Boars Head in North Hampton?",
        a: "Aluminum and vinyl are the best choices for properties near Little Boars Head and the coast. Salt spray and wind exposure will shorten the life of untreated wood significantly. We use marine-grade fasteners on all coastal North Hampton jobs to prevent hardware corrosion.",
      },
      {
        q: "Does North Hampton have strict fence regulations?",
        a: "North Hampton's fence regulations are straightforward: you need a building permit, and standard height limits apply. Coastal properties have additional shoreland setback rules. The town is not as restrictive as some larger municipalities, but we still confirm all requirements before starting.",
      },
      {
        q: "Can you install a privacy fence on a North Hampton lot?",
        a: "Yes. Privacy fencing is common in North Hampton, especially for backyards. Cedar board-on-board and vinyl privacy are the most popular options. For oceanside properties, we recommend vinyl for its durability in salt air. We'll help you choose the best material for your specific location.",
      },
    ],
  },
];

export const CITY_SLUGS = CITY_PAGES.map((c) => c.slug);
