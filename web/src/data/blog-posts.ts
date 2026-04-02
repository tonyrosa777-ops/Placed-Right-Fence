// Static blog posts — served when Sanity is not configured.
// 10 SEO-optimized articles targeting Southern NH fence searches.
// Source: market-intelligence.md §3 (keyword targets), §2 (audience pain points)

export type Section =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; heading: string; body: string; cta?: string; href?: string };

export interface StaticPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  categories: string[];
  estimatedReadingTime: number;
  sections: Section[];
}

export const staticBlogPosts: StaticPost[] = [
  // ── 1 ──────────────────────────────────────────────────────────────────────
  {
    slug: "nh-pool-fence-code-requirements",
    title: "NH Pool Fence Requirements: What You Need to Pass Inspection",
    excerpt:
      "New Hampshire follows strict pool barrier codes. Here's exactly what your fence needs before the inspector shows up — heights, gate specs, gaps, and the common mistakes that cause re-inspections.",
    publishedAt: "2025-04-01",
    categories: ["Pool Compliance"],
    estimatedReadingTime: 6,
    sections: [
      {
        type: "p",
        text: "If you have a pool in New Hampshire — or you're putting one in — your fence is not optional. NH follows model barrier codes based on the International Residential Code (IRC), and most towns have adopted them with local amendments. Get it wrong and your pool sits closed while you wait for a re-inspection. Get it right and your family is in the water by Memorial Day.",
      },
      {
        type: "h2",
        text: "What NH Pool Fence Code Requires",
      },
      {
        type: "p",
        text: "The core requirements come from RSA 485-A and the IRC Section AG105. Here's what your barrier needs to meet:",
      },
      {
        type: "h3",
        text: "Minimum Height: 48 Inches",
      },
      {
        type: "p",
        text: "The barrier must be at least 48 inches tall as measured from the finished grade on the outside (non-pool side). This is measured from ground level, not from the top of a footer or base. Many homeowners get caught because their fence measures 48 inches from the top rail to the bottom rail, but the bottom rail sits 3 inches above grade — the inspector measures from the ground up.",
      },
      {
        type: "h3",
        text: "Gate Requirements",
      },
      {
        type: "ul",
        items: [
          "Self-closing: the gate must close and latch under its own weight from any open position",
          "Self-latching: the latch must engage automatically without manual operation",
          "Latch position: if the latch is less than 54 inches from grade, it must be on the pool side of the gate (out of reach of small children on the outside)",
          "Swing direction: gates must swing away from the pool, not toward it",
          "No protrusions: the gate hardware cannot create footholds or hand-holds that allow climbing",
        ],
      },
      {
        type: "h3",
        text: "Openings and Gaps",
      },
      {
        type: "p",
        text: "No opening in the fence or gate can be large enough to allow a 4-inch sphere to pass through. This is a child-safety standard — a 4-inch sphere approximates the head size of a small child. Chain link is acceptable only if the mesh is tight enough to prevent the 4-inch opening. Standard 2×2 inch chain link mesh typically passes. Ornamental aluminum is ideal if picket spacing is 3.5 inches or less.",
      },
      {
        type: "h3",
        text: "Climbability",
      },
      {
        type: "p",
        text: "The fence cannot have horizontal members that would serve as a ladder. That rules out post-and-rail designs and most horizontal-slat wood fences for pool barriers. Vertical pickets (aluminum, vinyl, or wood) are the most code-friendly options. Chain link is acceptable only if the openings don't create a toehold — diamond-pattern chain link typically passes.",
      },
      {
        type: "h2",
        text: "Common Reasons Pool Fences Fail Inspection in NH",
      },
      {
        type: "ul",
        items: [
          "Gate latch is on the outside of the fence (accessible to children)",
          "Gate swings toward the pool instead of away from it",
          "Fence height is measured incorrectly — bottom rail sits above grade",
          "Gaps between bottom of fence and grade exceed 4 inches on uneven terrain",
          "Horizontal rails give children footholds for climbing",
          "Gate doesn't self-close all the way due to settling or misalignment",
          "Fence stops at the house wall without the required connection and house door latch",
        ],
      },
      {
        type: "h2",
        text: "The House Wall as Part of the Barrier",
      },
      {
        type: "p",
        text: "If your house wall forms part of the pool barrier, every door from the house to the pool area must have an alarm or a self-closing, self-latching mechanism at a height of 54 inches or more. Sliding glass doors need door alarms that meet specific decibel requirements. Many homeowners forget this requirement entirely and fail inspection because the door to the pool deck isn't compliant.",
      },
      {
        type: "h2",
        text: "Town-Specific Amendments to Watch For",
      },
      {
        type: "p",
        text: "While NH follows the IRC baseline, some municipalities have stricter local amendments. Bedford, Nashua, Manchester, and Portsmouth all have active building departments that may interpret certain requirements more strictly. Before you install anything, pull your town's specific pool barrier ordinance — or hire a contractor who already knows it.",
      },
      {
        type: "h2",
        text: "Best Fence Materials for NH Pool Compliance",
      },
      {
        type: "ul",
        items: [
          "Aluminum picket: the most common choice — vertical pickets, no climbability, corrosion-resistant, available in pool-code heights",
          "Vinyl privacy or semi-privacy: passes code, very low maintenance, no corrosion risk near water",
          "Chain link: passes if mesh is tight (2×2 inch diamond max) — less common around pools because of the aesthetic, but fully compliant",
          "Wood privacy: passes if posts are set correctly and gaps are managed, but requires maintenance near a pool environment",
        ],
      },
      {
        type: "callout",
        heading: "We know pool code cold.",
        body: "We've installed pool barriers in Bedford, Nashua, Manchester, and across Southern NH. We handle the inspection — you just handle the opening day party.",
        cta: "Get a Free Pool Fence Estimate",
        href: "/contact",
      },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────────────────────
  {
    slug: "how-deep-fence-posts-new-hampshire",
    title: "How Deep Do Fence Posts Need to Be in New Hampshire?",
    excerpt:
      "NH's frost line sits at 48 inches in most of the state. Get post depth wrong and you'll be resetting your fence every spring. Here's how to do it right the first time.",
    publishedAt: "2025-04-03",
    categories: ["Installation Tips"],
    estimatedReadingTime: 5,
    sections: [
      {
        type: "p",
        text: "This is the single question that separates a fence that lasts 20 years from one that leans, heaves, and fails within three. In New Hampshire, the ground freezes deep — and if your fence posts don't go below that freeze line, the expanding soil will push them out of the ground every single winter.",
      },
      {
        type: "h2",
        text: "NH's Frost Depth: 48 Inches",
      },
      {
        type: "p",
        text: "New Hampshire's design frost depth is 48 inches in most of the state — 4 feet below finished grade. This is the depth at which the ground is expected to freeze during a severe winter. Posts that end above this depth sit in soil that cycles between frozen and thawed each season. That cycle exerts enormous upward pressure on anything buried in it — a process called frost heave.",
      },
      {
        type: "p",
        text: "Note: some coastal towns (Portsmouth, Hampton, Rye) have slightly shallower frost depths around 42 inches. Check with your local building department, but when in doubt, 48 is the right target.",
      },
      {
        type: "h2",
        text: "What Frost Heave Actually Does to a Fence",
      },
      {
        type: "p",
        text: "Frost heave doesn't just push a post slightly off level. Over two or three winters, it can raise a post 3–4 inches out of the ground. When one post heaves and the adjacent posts don't, the fence section between them torques, the rails crack or separate, and gates fall completely out of alignment. By spring, what looked like a solid fence in October looks like a war casualty.",
      },
      {
        type: "h2",
        text: "The Right Way to Set a Post in NH",
      },
      {
        type: "ol",
        items: [
          "Dig to at least 48 inches below finished grade — deeper if you're on high ground or in the northern part of the state",
          "Add 4–6 inches of crushed stone (3/4-inch gravel) at the bottom for drainage — standing water at the base rots wood and accelerates heave on concrete",
          "Set the post and brace it plumb",
          "Pour concrete around the post, slightly crowning the top so water drains away from the base rather than pooling",
          "Let concrete cure for at least 24 hours before attaching rails and panels — ideally 48 hours in cold weather",
        ],
      },
      {
        type: "h3",
        text: "Use Only Ground-Contact Rated Pressure-Treated Lumber",
      },
      {
        type: "p",
        text: "In-ground fence posts must be ground-contact rated pressure-treated lumber — look for the .40 or .60 retention level stamp on the wood. Above-ground rated (.25 retention) or standard untreated lumber will rot within 5–7 years when buried, even with concrete. Most fence failures we see from other installers come from posts set at the wrong depth, wrong lumber grade, or both.",
      },
      {
        type: "h2",
        text: "Why Contractors Cut Corners on Post Depth",
      },
      {
        type: "p",
        text: "Digging to 48 inches in New Hampshire is hard work, especially in granite soil or ledge. A contractor who sets posts at 24–30 inches can quote you less, get the job done faster, and the fence looks identical on day one. But 18 months later — after two freeze-thaw cycles — that fence starts to move. By year three, you're calling someone to fix it.",
      },
      {
        type: "p",
        text: "The only way to verify post depth is to ask your contractor directly and check your contract. Our written estimates specify post depth explicitly. If a contractor won't put it in writing, that's your answer.",
      },
      {
        type: "h2",
        text: "What About Rocky Soil and Ledge?",
      },
      {
        type: "p",
        text: "Southern NH has significant ledge in many areas, particularly in Londonderry, Hollis, Amherst, and the hillier parts of Nashua. When ledge prevents a full 48-inch hole, experienced installers use surface-mount post brackets set in concrete above the ledge, or drill into the ledge itself with a masonry bit. The right solution depends on how close to the surface the ledge is. This is why a walkthrough before quoting matters — not every yard is the same.",
      },
      {
        type: "callout",
        heading: "We set every post below the frost line.",
        body: "Our written estimates specify post depth, lumber grade, and concrete spec. If you've had a fence heave before, we can explain exactly why — and how we do it differently.",
        cta: "Get a Written Estimate",
        href: "/contact",
      },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────────────────────
  {
    slug: "wood-vs-vinyl-fence-new-hampshire",
    title: "Wood vs. Vinyl Fence in NH: A Real Cost Comparison",
    excerpt:
      "Wood costs less upfront. Vinyl costs less over 15 years. Here's the honest breakdown for NH homeowners — material costs, maintenance reality, lifespan, and what the resale data actually says.",
    publishedAt: "2025-04-05",
    categories: ["Materials Guide"],
    estimatedReadingTime: 7,
    sections: [
      {
        type: "p",
        text: "This is the question we get on almost every estimate call in Southern NH. Wood or vinyl? The honest answer is: it depends on how long you plan to own the house, how much you want to maintain the fence, and what your yard looks like. Here's the real breakdown — not the sales pitch version.",
      },
      {
        type: "h2",
        text: "Upfront Cost",
      },
      {
        type: "p",
        text: "Wood is almost always less expensive upfront. For a typical 150 linear foot privacy fence in Southern NH, expect:",
      },
      {
        type: "ul",
        items: [
          "Cedar privacy fence (installed): $22–$32 per linear foot",
          "Pressure-treated pine privacy fence (installed): $18–$26 per linear foot",
          "White vinyl privacy fence (installed): $28–$40 per linear foot",
          "Tan or gray vinyl privacy fence (installed): $28–$42 per linear foot",
        ],
      },
      {
        type: "p",
        text: "On a 150-foot job, that's roughly a $1,500–$2,000 upfront premium for vinyl. For a lot of homeowners, that's the end of the conversation. But it shouldn't be.",
      },
      {
        type: "h2",
        text: "The Maintenance Reality in NH",
      },
      {
        type: "p",
        text: "Wood fences in New Hampshire require real maintenance. The freeze-thaw cycle, wet springs, humid summers, and the amount of snow we see means an untreated cedar fence will start to gray and weather within 2–3 years. If you want it to hold its color and resist rot, here's the maintenance schedule:",
      },
      {
        type: "ul",
        items: [
          "Year 1–2: Apply a quality penetrating stain or sealant",
          "Year 3–4: Re-stain or re-seal as needed based on wear",
          "Every 5–7 years: More thorough application, check all post connections",
          "Ongoing: Annual inspection for loose boards, splitting rails, and post rot at grade level",
        ],
      },
      {
        type: "p",
        text: "Vinyl requires essentially no maintenance — occasional washing with a garden hose to remove pollen and mildew. It doesn't rot, doesn't need staining, and doesn't split. The color is molded throughout the material, not painted on.",
      },
      {
        type: "h2",
        text: "Lifespan in NH Climate",
      },
      {
        type: "ul",
        items: [
          "Cedar (properly maintained): 20–30 years",
          "Pressure-treated pine (properly maintained): 15–20 years",
          "Vinyl (quality manufacturer): 25–40 years",
          "Vinyl (budget manufacturer): 10–15 years before fading, cracking, or brittleness in cold",
        ],
      },
      {
        type: "p",
        text: "The vinyl lifespan qualifier matters. Cheap vinyl becomes brittle in NH winters — especially in direct sun — and can crack when hit. Quality vinyl (brands like ActiveYards, Bufftech, or CertainTeed) uses UV stabilizers and virgin PVC. Ask your contractor what brand they're using and look up whether it has a manufacturer's warranty.",
      },
      {
        type: "h2",
        text: "Appearance Over Time",
      },
      {
        type: "p",
        text: "Fresh-installed cedar looks warm, natural, and beautiful — arguably better than vinyl at day one. But 5 years in, unmaintained wood looks rough. 10 years in, you're looking at a fence that's seen better days. Vinyl looks essentially the same at year 10 as it did at year 1, provided you chose quality material.",
      },
      {
        type: "p",
        text: "If you love the natural wood look and will commit to maintaining it, wood is a great choice. If you want a low-maintenance fence that holds its appearance, vinyl wins.",
      },
      {
        type: "h2",
        text: "Resale Value Consideration",
      },
      {
        type: "p",
        text: "Real estate agents in Southern NH will tell you that a well-maintained fence is a selling point, and a weathered, failing fence is a deduction from list price. If you're planning to sell within 10 years, vinyl often has an advantage because it still looks clean and fresh at resale time, without requiring you to refinish it before listing.",
      },
      {
        type: "h2",
        text: "Which One Is Right for You?",
      },
      {
        type: "ul",
        items: [
          "Choose wood if: you love the aesthetic, you're willing to maintain it, and upfront cost is the primary driver",
          "Choose vinyl if: you want zero maintenance, you're staying in the house long-term, or you're thinking about resale",
          "Don't choose based on price alone: a wood fence that's replaced in 12 years because of rot and neglect costs more than a vinyl fence that runs 30 years without any attention",
        ],
      },
      {
        type: "callout",
        heading: "Not sure which is right for your yard?",
        body: "We'll walk your property, show you samples of both, and give you honest numbers for each option. No pressure, no upsell.",
        cta: "Schedule a Free Estimate",
        href: "/contact",
      },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────────────────────
  {
    slug: "fence-permit-guide-new-hampshire",
    title: "Do You Need a Fence Permit in NH? A Town-by-Town Guide",
    excerpt:
      "Some NH towns require permits for fences over 6 feet. Others have no requirements at all. Here's what to check before you dig — and what happens if you skip the permit and get caught.",
    publishedAt: "2025-04-07",
    categories: ["Permits & Regulations"],
    estimatedReadingTime: 5,
    sections: [
      {
        type: "p",
        text: "New Hampshire does not have a statewide fence permit requirement. Permitting is entirely at the local level, which means the rules in Nashua are different from the rules in Bedford, which are different from the rules in a small town with no zoning enforcement at all. Before you start any fence project, you need to know what your specific town requires.",
      },
      {
        type: "h2",
        text: "The General Rule in Most NH Towns",
      },
      {
        type: "p",
        text: "In most Southern NH municipalities, residential fences 6 feet or shorter on non-front-yard property lines do not require a building permit. However, almost every town has setback requirements, height restrictions by yard location (front vs. back), and sometimes HOA overlay restrictions that operate independently of the town permit system.",
      },
      {
        type: "h2",
        text: "Where Permits Are Commonly Required",
      },
      {
        type: "ul",
        items: [
          "Pool barrier fences: virtually always require a permit and inspection regardless of height",
          "Fences over 6 feet: most towns require a zoning or building permit",
          "Front yard fences: many towns have strict height limits (4 feet is common) and sometimes prohibit solid privacy fences in front yards entirely",
          "Commercial properties: typically require permits for any fence installation",
          "Fences within road right-of-way setbacks: requires special approval",
        ],
      },
      {
        type: "h2",
        text: "Town-by-Town Snapshot",
      },
      {
        type: "p",
        text: "This is a general overview — always verify with your town's building or zoning department before starting:",
      },
      {
        type: "ul",
        items: [
          "Nashua: No permit required for residential fences ≤6 feet on rear/side lots. Front yard fences limited to 4 feet. Pool barriers require permit + inspection.",
          "Manchester: Similar to Nashua — ≤6 feet rear/side = no permit. Check with Manchester Planning for front yard restrictions.",
          "Bedford: Has specific setback requirements from property lines. Pool barriers strictly enforced. Recommend calling Building & Zoning before any install.",
          "Hudson: No permit required for standard residential fences. Pool barriers require permit.",
          "Merrimack: No permit for standard residential fences ≤6 feet. Front yard height limits apply.",
          "Londonderry: Review town zoning ordinance. HOA restrictions common in many developments.",
          "Derry: No permit required for standard residential privacy fences. Pool barriers require permit.",
          "Salem: Permit required for pool barriers. General fences: verify with Building Department.",
          "Windham: Many neighborhoods have HOA restrictions that are stricter than town code. Check both.",
          "Exeter/Dover/Portsmouth: More active building departments — call before installing anything.",
        ],
      },
      {
        type: "h2",
        text: "What Happens If You Skip the Permit",
      },
      {
        type: "p",
        text: "For general residential fences in most of these towns, the practical risk of skipping a permit (when one isn't required) is zero — because no permit is required. But if you install a pool barrier without a permit, or put up a 7-foot fence in a town where anything over 6 requires approval, you risk a stop-work order, a requirement to remove and reinstall the fence, and potential fines.",
      },
      {
        type: "p",
        text: "The more serious risk: if a child is injured at a non-compliant pool barrier and the barrier was installed without a permit, you have a significant liability exposure.",
      },
      {
        type: "h2",
        text: "HOA Rules Are Separate from Town Permits",
      },
      {
        type: "p",
        text: "If you live in a planned development or any neighborhood with a homeowners association, the HOA's covenants, conditions, and restrictions (CC&Rs) control fence style, height, material, and color — independently of anything the town says. HOA rules are often stricter. Always check with your HOA board and get written approval before installing. We've seen homeowners get forced to remove brand-new fences because they got town approval but forgot about their HOA.",
      },
      {
        type: "h2",
        text: "Before You Call a Contractor",
      },
      {
        type: "ol",
        items: [
          "Call your town's building or zoning department — ask specifically about fence height limits by yard location and whether a permit is required for your project",
          "Pull your deed and survey — know where your property lines actually are before installing",
          "Check your HOA documents if applicable",
          "For pool barriers, always pull a permit and schedule inspection",
        ],
      },
      {
        type: "callout",
        heading: "We handle the permit research for you.",
        body: "We know the requirements for every town in Southern NH. Tell us your project and we'll tell you exactly what the permit situation looks like before we quote.",
        cta: "Get Your Free Estimate",
        href: "/contact",
      },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────────────────────
  {
    slug: "best-fence-for-dogs-new-hampshire",
    title: "Best Fence for Dogs in NH: Containment That Actually Works",
    excerpt:
      "Escape artists, diggers, and jumpers each need a different solution. Here's how NH homeowners are solving each type of problem — and what to watch for on uneven terrain.",
    publishedAt: "2025-04-09",
    categories: ["Dog Owners"],
    estimatedReadingTime: 6,
    sections: [
      {
        type: "p",
        text: "Dog owners make up a big percentage of fence customers in Southern NH — and for good reason. A yard that isn't fenced is a yard a dog can't safely use. But not every fence works for every dog. The right choice depends on your dog's size, temperament, and whether they're a jumper, a digger, or an escape artist who finds creative solutions.",
      },
      {
        type: "h2",
        text: "Know Your Dog's Escape Style First",
      },
      {
        type: "ul",
        items: [
          "Jumpers: dogs that clear fences by jumping require minimum 5–6 foot height — sometimes more for large athletic breeds like huskies, labs, and shepherds",
          "Climbers: dogs that climb chain link need smooth-sided fencing (vinyl, wood) without footholds",
          "Diggers: dogs that tunnel under require a concrete footer, buried hardware cloth, or a concrete/compacted gravel trench below the fence line",
          "Gap finders: dogs that squeeze through gaps need tight spacing — no more than 2 inches between boards or pickets for medium/large dogs",
          "Fence fighters: dogs that throw themselves at the fence and stress the structure need a system built to handle serious impact",
        ],
      },
      {
        type: "h2",
        text: "Best Fence Options by Dog Type",
      },
      {
        type: "h3",
        text: "For Most Dogs: Wood Privacy Fence",
      },
      {
        type: "p",
        text: "A 5 or 6-foot wood privacy fence — dog-ear or board-on-board cedar — is the most popular dog containment choice in Southern NH for a reason. It's solid, blocks sight lines (which reduces fence-reactive behavior), doesn't provide footholds for climbers, and looks great. With pressure-treated posts set below the frost line and boards installed tight to the ground, it contains most dogs effectively.",
      },
      {
        type: "h3",
        text: "For Diggers: Buried Hardware Cloth or Concrete Footer",
      },
      {
        type: "p",
        text: "If your dog digs, the above-ground fence doesn't matter — they'll go under it. The solution is a continuous L-shaped hardware cloth apron buried 6–12 inches underground, extending 12 inches outward from the fence base. When the dog digs down, they hit the barrier and give up. On very serious diggers or around pool barriers, a concrete footer at the base is the more permanent solution.",
      },
      {
        type: "h3",
        text: "For High Jumpers: 6-Foot Minimum, Consider Coyote Rollers",
      },
      {
        type: "p",
        text: "A 5-foot fence won't hold a motivated husky or German shepherd. 6-foot privacy or vinyl is the minimum for athletic jumpers. For extreme jumpers, coyote rollers (horizontal rotating tubes mounted on top of the fence) prevent the dog from getting purchase at the top — they can't grip and pull themselves over. These work on wood, vinyl, and chain link.",
      },
      {
        type: "h3",
        text: "For Small Dogs: Watch the Gaps",
      },
      {
        type: "p",
        text: "Small breeds can squeeze through surprisingly small gaps. A standard 4-foot privacy fence with boards installed tight is usually fine, but check for gaps at the bottom on uneven terrain. A 4-inch gap that looks minor to you is an exit route for a Yorkie. If your yard has grade changes, make sure your contractor accounts for it — boards should follow the grade, not leave open triangular gaps at the low spots.",
      },
      {
        type: "h2",
        text: "Uneven Terrain: The NH-Specific Problem",
      },
      {
        type: "p",
        text: "A lot of Southern NH yards aren't flat. Lots that slope, drop off, or have grade changes create natural escape routes if the fence doesn't account for them. The best dog fences on sloped terrain use one of two techniques: stepping (fence follows a stair-step pattern down the slope) or raking (fence follows the grade at a continuous angle). Both can be effective for dog containment, but stepping leaves small triangular gaps at each step that need to be filled.",
      },
      {
        type: "h2",
        text: "Chain Link: Pros and Cons for Dogs",
      },
      {
        type: "p",
        text: "Chain link is practical and less expensive than wood or vinyl, but it has real drawbacks for dogs. Most dogs can climb chain link if motivated — it's a natural ladder. It also doesn't block sight lines, which can increase fence reactivity and frustrated barrier behavior. That said, for a dog run, exercise area, or large property where looks are secondary to function, chain link with adequate height and a concrete footer is a solid choice.",
      },
      {
        type: "h2",
        text: "Gates Are Where Dog Fences Fail",
      },
      {
        type: "p",
        text: "The fence can be perfect and the gate can undo everything. Dog-proof gates need: self-closing hinges, a latch the dog can't nudge open, and a gap-free bottom. We install gravity latches or spring latches on dog-containment gates specifically because standard handle latches are often too easy for a determined large dog to manipulate.",
      },
      {
        type: "callout",
        heading: "We'll walk the yard with your dog in mind.",
        body: "Before we quote, we walk every foot of the fence line, check grade changes, and ask about your dog. We've contained labs, huskies, mastiffs, and everything in between.",
        cta: "Get a Free Estimate",
        href: "/contact",
      },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────────────────────
  {
    slug: "fence-installation-cost-new-hampshire-2025",
    title: "How Much Does a Fence Cost in NH? 2025 Price Guide",
    excerpt:
      "Real price ranges for wood, vinyl, aluminum, and chain link — per linear foot, installed, in Southern NH. What drives cost up, what drives it down, and what suspiciously low quotes usually mean.",
    publishedAt: "2025-04-11",
    categories: ["Pricing"],
    estimatedReadingTime: 6,
    sections: [
      {
        type: "p",
        text: "Fence pricing in New Hampshire varies by material, terrain, project size, and what's underneath the ground. Here are real 2025 price ranges for installed fencing in Southern NH — Nashua, Manchester, Bedford, Hudson, Merrimack, and surrounding towns.",
      },
      {
        type: "h2",
        text: "Installed Price Ranges by Material (2025)",
      },
      {
        type: "h3",
        text: "Wood Fences",
      },
      {
        type: "ul",
        items: [
          "Pressure-treated pine privacy: $18–$28 per linear foot installed",
          "Cedar privacy (dog-ear or board-on-board): $22–$35 per linear foot installed",
          "Cedar horizontal slat (modern style): $28–$45 per linear foot installed",
          "Split-rail (2 or 3 rail): $12–$20 per linear foot installed",
          "Classic picket fence: $18–$28 per linear foot installed",
        ],
      },
      {
        type: "h3",
        text: "Vinyl Fences",
      },
      {
        type: "ul",
        items: [
          "Vinyl privacy (white or tan): $28–$42 per linear foot installed",
          "Vinyl semi-privacy: $26–$38 per linear foot installed",
          "Vinyl picket: $24–$36 per linear foot installed",
          "Vinyl 3-rail ranch: $16–$22 per linear foot installed",
        ],
      },
      {
        type: "h3",
        text: "Aluminum Fences",
      },
      {
        type: "ul",
        items: [
          "Standard ornamental aluminum (4 ft): $24–$36 per linear foot installed",
          "Pool-code aluminum (4.5–5 ft): $28–$42 per linear foot installed",
          "Heavy commercial-grade aluminum: $40–$60 per linear foot installed",
        ],
      },
      {
        type: "h3",
        text: "Chain Link Fences",
      },
      {
        type: "ul",
        items: [
          "Galvanized chain link (4 ft): $14–$22 per linear foot installed",
          "Galvanized chain link (6 ft): $18–$28 per linear foot installed",
          "Black vinyl-coated chain link: $18–$30 per linear foot installed",
        ],
      },
      {
        type: "h2",
        text: "Gates",
      },
      {
        type: "p",
        text: "Gates are priced separately because they involve additional hardware, framing, and time:",
      },
      {
        type: "ul",
        items: [
          "Standard walk gate (3–4 ft): $250–$600 depending on material",
          "Double drive gate (10–12 ft): $600–$1,800 depending on material and hardware",
          "Self-closing pool gate with hardware: add $100–$250 to base gate cost",
        ],
      },
      {
        type: "h2",
        text: "What Drives Cost Up",
      },
      {
        type: "ul",
        items: [
          "Rocky soil or ledge: requires drilling, alternative post systems, or additional equipment — adds $3–$8 per linear foot in affected areas",
          "Steep slopes: stepping or raking fence sections takes more time — adds $2–$5 per linear foot",
          "Old fence removal: typically $3–$6 per linear foot to remove and dispose of an existing fence",
          "Long fence lines with limited access: materials have to be carried further",
          "Lumber and material costs: 2025 material costs are above pre-2020 levels — this affects all wood and vinyl pricing",
        ],
      },
      {
        type: "h2",
        text: "What a Suspiciously Low Quote Usually Means",
      },
      {
        type: "p",
        text: "If you get a quote that's 30–40% below the ranges above, one of the following is usually true: posts are being set at 24–30 inches instead of below the frost line, below-standard lumber is being used (wrong retention level for in-ground use), materials are lower quality than quoted, the contractor has no insurance (your liability if something goes wrong), or something is being left out of the scope that you'll discover after the job.",
      },
      {
        type: "p",
        text: "A fence that heaves after two winters or rots at the posts in five years is more expensive than the premium you would have paid for a proper install.",
      },
      {
        type: "h2",
        text: "How to Get an Accurate Quote",
      },
      {
        type: "ol",
        items: [
          "Know your linear footage: walk the fence line with a measuring wheel or use Google Earth's measurement tool for an estimate",
          "Know what's under the ground: call Dig Safe (811) before anyone digs — it's free and required by law in NH",
          "Ask specifically about post depth in your written estimate",
          "Ask what brand and grade of material is being used",
          "Get it in writing: your quote should specify linear footage, material, post depth, and total price — not just a total number",
        ],
      },
      {
        type: "callout",
        heading: "Written estimate. Price that doesn't change.",
        body: "We give every customer a written estimate that specifies every detail before any work begins. The number we quote is the number you pay.",
        cta: "Get Your Free Estimate",
        href: "/contact",
      },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────────────────────
  {
    slug: "best-time-install-fence-new-hampshire",
    title: "When's the Best Time to Install a Fence in NH?",
    excerpt:
      "Spring is peak season — and the worst time to get a fast install or a competitive price. Here's when NH contractors actually prefer to work, and how to get on the schedule before the rush.",
    publishedAt: "2025-04-13",
    categories: ["Installation Tips"],
    estimatedReadingTime: 4,
    sections: [
      {
        type: "p",
        text: "In Southern NH, everyone wants their fence installed in May. That makes May the hardest time to get a fence installed quickly. Understanding when to call — and why — can save you weeks of waiting and sometimes money.",
      },
      {
        type: "h2",
        text: "The NH Fence Season Reality",
      },
      {
        type: "p",
        text: "Fencing in NH runs roughly from mid-April through November, with the ground freeze making installation impractical from late December through early March in most years. Here's how the season actually breaks down:",
      },
      {
        type: "h3",
        text: "April–May: Peak Demand, Longest Waits",
      },
      {
        type: "p",
        text: "Every homeowner who thought about a fence all winter calls in April. Contractors are booking out 4–8 weeks by late April in Southern NH. If you call in early May wanting it done before Memorial Day, you are competing with every other homeowner in your town. Expect waits, limited scheduling flexibility, and sometimes higher pricing during material cost spikes.",
      },
      {
        type: "h3",
        text: "June–August: Steady Season, Moderate Waits",
      },
      {
        type: "p",
        text: "Summer bookings are steady. A 2–4 week lead time is typical for most contractors. This is actually a good window — ground is workable, weather is predictable, and there's less of a rush. If you can be flexible on your exact install date, summer often works well.",
      },
      {
        type: "h3",
        text: "September–October: The Sweet Spot",
      },
      {
        type: "p",
        text: "Fall is genuinely the best time to install a fence in NH. Demand drops significantly after Labor Day. Contractors have more schedule flexibility, lead times compress to 1–2 weeks, and some offer end-of-season pricing to keep crews working. The ground is still workable, the weather is cool and comfortable for crews, and your new fence goes into the most honest test of all — its first NH winter — immediately.",
      },
      {
        type: "h3",
        text: "November–March: Limited but Possible",
      },
      {
        type: "p",
        text: "Late fall installations are possible in NH as long as the ground hasn't frozen solid. November is often fine. December is hit or miss. January through March, the ground is typically too frozen to dig post holes to the required 48-inch depth without powered equipment, and most contractors don't work through it. If you want a spring install, the best move is to get on a contractor's books in the fall for an early-spring slot.",
      },
      {
        type: "h2",
        text: "Does Rain or Cold Weather Affect Install Quality?",
      },
      {
        type: "p",
        text: "Light rain during installation isn't a problem. What matters is that concrete has time to cure before the first hard freeze — concrete needs roughly 24–48 hours at above-freezing temperatures to set properly. A fence installed in October is fine if the forecast is clear; a fence installed in November with a hard frost coming the next night is not.",
      },
      {
        type: "h2",
        text: "The Practical Recommendation",
      },
      {
        type: "p",
        text: "If you know you want a fence this year, call in February or early March. Contractors are scheduling their spring season, you can often get a better slot, and you avoid the spring rush entirely. For a fall install, call in August. For a spring install, the single best thing you can do is get a deposit down with your contractor before the season starts.",
      },
      {
        type: "callout",
        heading: "Don't wait until May.",
        body: "We start booking spring installations in February. If you want to beat the rush, get your free estimate now and we'll hold your slot.",
        cta: "Get Your Free Estimate",
        href: "/contact",
      },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────────────────────
  {
    slug: "chain-link-vs-aluminum-fence-new-hampshire",
    title: "Chain Link vs. Aluminum Fence in NH: Which One Is Right for You?",
    excerpt:
      "Both are low-maintenance metal options that handle NH winters well. Chain link costs roughly half as much. Aluminum looks three times better. Here's how to decide.",
    publishedAt: "2025-04-15",
    categories: ["Materials Guide"],
    estimatedReadingTime: 5,
    sections: [
      {
        type: "p",
        text: "If you've decided you want a metal fence and you've narrowed it down to chain link or aluminum, you're asking the right question. Both are durable, both handle NH's freeze-thaw cycle without heaving issues (they're not affected the same way wood or vinyl are), and both are low-maintenance. The differences come down to cost, appearance, and what you're trying to accomplish.",
      },
      {
        type: "h2",
        text: "Cost Comparison",
      },
      {
        type: "ul",
        items: [
          "Chain link (galvanized, 4 ft, installed): $14–$22 per linear foot",
          "Chain link (vinyl-coated black, 6 ft, installed): $18–$30 per linear foot",
          "Aluminum ornamental (4 ft, installed): $24–$36 per linear foot",
          "Aluminum pool-code height (4.5–5 ft, installed): $28–$42 per linear foot",
        ],
      },
      {
        type: "p",
        text: "On a 150-foot job, chain link is typically $1,500–$2,500 less expensive than aluminum. That's a real number. For property where appearance isn't a priority — a back lot line, a utility area, a dog run — chain link is a perfectly sensible choice.",
      },
      {
        type: "h2",
        text: "Appearance",
      },
      {
        type: "p",
        text: "This is where aluminum wins and it isn't close. Galvanized chain link is utilitarian — it says 'practical' more than 'residential.' Black vinyl-coated chain link is significantly better-looking than galvanized and can blend into landscaping reasonably well, but it still reads as industrial to most homeowners.",
      },
      {
        type: "p",
        text: "Aluminum ornamental fencing — vertical pickets with decorative finials, available in black, bronze, or white — looks like wrought iron at a fraction of the cost and weight. It complements the property instead of just securing it. For front yards, pool areas, and anywhere the fence is visible from the street, aluminum is the clear aesthetic winner.",
      },
      {
        type: "h2",
        text: "Durability and Maintenance in NH",
      },
      {
        type: "h3",
        text: "Chain Link",
      },
      {
        type: "ul",
        items: [
          "Galvanized chain link: will rust eventually — timeline depends on gauge and quality, but expect surface rust in 10–15 years in NH's wet climate",
          "Vinyl-coated chain link: the coating protects the galvanized core; lasts significantly longer and resists rust well",
          "Snow and ice: chain link handles NH winters without issue — it flexes slightly and doesn't crack",
          "Maintenance: very low — inspect for rust spots and treat early",
        ],
      },
      {
        type: "h3",
        text: "Aluminum",
      },
      {
        type: "ul",
        items: [
          "Powder-coated aluminum: doesn't rust — aluminum forms a stable oxide layer that protects it naturally",
          "NH winters: aluminum handles cold, snow, and ice without issue; the material doesn't become brittle like cheap vinyl",
          "Impact resistance: aluminum dents under significant impact, unlike steel; a falling tree branch will leave a mark",
          "Maintenance: essentially none — hose it down occasionally",
        ],
      },
      {
        type: "h2",
        text: "Best Use Cases for Each",
      },
      {
        type: "h3",
        text: "Chain Link Is the Right Call When:",
      },
      {
        type: "ul",
        items: [
          "You need to secure a large area on a budget (dog run, side lot, utility area)",
          "You need a quick, durable solution and appearance is secondary",
          "You're enclosing a commercial or agricultural area",
          "The fence is not visible from the street or doesn't affect curb appeal",
        ],
      },
      {
        type: "h3",
        text: "Aluminum Is the Right Call When:",
      },
      {
        type: "ul",
        items: [
          "You need a pool barrier that looks good (aluminum is the most popular pool fence material in Southern NH)",
          "The fence is visible from the street and curb appeal matters",
          "You want something that looks like wrought iron without the cost or maintenance",
          "Your HOA requires an ornamental style",
          "You're adding value to the property and want the fence to contribute to it",
        ],
      },
      {
        type: "h2",
        text: "The Honest Bottom Line",
      },
      {
        type: "p",
        text: "If you're on the fence (no pun intended) and appearance matters even a little, go aluminum. The cost premium is real but not enormous, and the aesthetic difference is significant. If budget is the primary driver and the fence location is practical rather than decorative, chain link is a perfectly good fence that will do exactly what you need.",
      },
      {
        type: "callout",
        heading: "We'll show you samples of both.",
        body: "We bring samples to every estimate so you can see the actual product before you decide. No pressure — just honest numbers for each option.",
        cta: "Schedule a Free Estimate",
        href: "/contact",
      },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────────────────────
  {
    slug: "how-to-choose-fence-contractor-southern-nh",
    title: "How to Choose a Fence Contractor in Southern NH (5 Questions to Ask)",
    excerpt:
      "Most fence contractors in NH do fine work. A few don't. Here are the five questions that separate a company you can trust from one you'll regret — and the red flags to watch for.",
    publishedAt: "2025-04-17",
    categories: ["Hiring Tips"],
    estimatedReadingTime: 5,
    sections: [
      {
        type: "p",
        text: "Getting multiple quotes on a fence is smart. But comparing quotes without knowing what questions to ask means you might be comparing a proper install to a shortcut install at a lower price — and you won't know the difference until your fence starts moving two winters from now. Here are the five questions that actually matter.",
      },
      {
        type: "h2",
        text: "1. How deep will you set the posts?",
      },
      {
        type: "p",
        text: "This is the most important technical question and the one most homeowners don't ask. In New Hampshire, posts need to go below the 48-inch frost line to prevent frost heave. A contractor who says '18 to 24 inches is standard' is telling you they're going to install a fence that moves. The correct answer is 48 inches minimum, or to below the frost line if the local depth is different.",
      },
      {
        type: "p",
        text: "Follow-up question: Is that in your written estimate? If a contractor won't put post depth in writing, it won't be respected on installation day.",
      },
      {
        type: "h2",
        text: "2. Are you licensed and insured?",
      },
      {
        type: "p",
        text: "New Hampshire doesn't require a contractor's license specifically for fence installation, but the contractor should carry general liability insurance and workers' compensation. Ask for a certificate of insurance and verify it's current. If a worker is injured on your property and the contractor doesn't have workers' comp, you could be liable. If the crew damages your property or your neighbor's, liability insurance is what covers it. Any legitimate contractor will provide a certificate without hesitation.",
      },
      {
        type: "h2",
        text: "3. What brand and grade of material are you using?",
      },
      {
        type: "p",
        text: "Quotes that look similar on price can use very different materials. For wood fences, ask about lumber retention level — ground-contact posts need .40 or .60 retention, not above-ground .25. For vinyl, ask the manufacturer name — there's a significant quality difference between budget vinyl and brands like Bufftech, ActiveYards, or CertainTeed. Cheap vinyl becomes brittle in NH winters within 5–10 years. For aluminum, ask about the gauge (thickness) and powder coat warranty.",
      },
      {
        type: "h2",
        text: "4. Will I get a written estimate with line items?",
      },
      {
        type: "p",
        text: "A handshake quote or a single-line number texted to you is not a contract. A real estimate should specify: linear footage, fence style and height, post depth and spacing, gate quantity and hardware, material brand/grade, total price, and payment terms. If you have this in writing, everyone is on the same page and there's no room for scope creep or surprise charges at the end.",
      },
      {
        type: "h2",
        text: "5. Can I see examples of your recent work?",
      },
      {
        type: "p",
        text: "A contractor who has been installing fences in Southern NH should be able to show you recent completed jobs — either photos or references you can call. Ask specifically for jobs done in your town or with the same material you're choosing. A portfolio of vinyl privacy fences doesn't tell you much about their aluminum pool fence work.",
      },
      {
        type: "h2",
        text: "Red Flags to Watch For",
      },
      {
        type: "ul",
        items: [
          "Requires full payment upfront before work begins — a deposit of 25–50% is normal; full payment before a dig is a sign of a company you may not see again",
          "No written estimate — verbal quotes are how disputes start",
          "Significantly below every other quote — review what's different about the scope and materials",
          "Won't produce a certificate of insurance",
          "No local presence — a company with no local reviews, no address, or a recently-created website deserves extra scrutiny",
          "Pressure to decide immediately — good contractors don't need to pressure you",
        ],
      },
      {
        type: "h2",
        text: "Green Flags That Signal a Professional Operation",
      },
      {
        type: "ul",
        items: [
          "Comes to your property before quoting — not just a drive-by or a Google Earth estimate",
          "Asks about your dog, your terrain, your HOA — shows they're thinking about your specific situation",
          "Gives you a detailed written estimate without being asked",
          "Mentions frost line depth and post material proactively",
          "Has verifiable reviews from your town or area",
          "Calls Dig Safe (811) before any digging — required by law in NH",
        ],
      },
      {
        type: "callout",
        heading: "Come see how we run a quote.",
        body: "We walk the property with you, answer every question, and give you a written estimate that specifies every detail. No pressure, no vague numbers.",
        cta: "Schedule a Free Walk-Through",
        href: "/contact",
      },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────────────────────
  {
    slug: "fence-repair-vs-replace-new-hampshire",
    title: "Fence Repair vs. Replacement in NH: How to Tell the Difference",
    excerpt:
      "A leaning fence isn't always a dead fence. Here's how to assess what you're actually dealing with — and when repair makes financial sense vs. when you're throwing money at a losing cause.",
    publishedAt: "2025-04-19",
    categories: ["Repair & Maintenance"],
    estimatedReadingTime: 5,
    sections: [
      {
        type: "p",
        text: "After a hard NH winter — or after years of deferred maintenance — a fence can look pretty rough. Before you call a contractor and assume you need to start over, it's worth understanding what the actual problem is. Sometimes a $400 post repair buys you 10 more years. Sometimes a $400 repair buys you 18 months on a fence that's already failing everywhere.",
      },
      {
        type: "h2",
        text: "The Single Most Important Assessment: The Posts",
      },
      {
        type: "p",
        text: "The posts are the foundation of your fence. Everything else — rails, boards, panels — is secondary. When you're evaluating a damaged or aging fence, start with the posts:",
      },
      {
        type: "ul",
        items: [
          "Push on the post firmly at mid-height. Does it move? If yes, it's either rotted at the base, the concrete has separated, or it was never set deep enough.",
          "Check the base where the post meets the ground. Probe with a screwdriver or awl — if it sinks into the wood easily, the post is rotted.",
          "Look at the concrete collar if visible. Has it separated from the post, leaving a gap where water gets in?",
          "Check for lean — a post that's leaning away from plumb is usually heaving (shallow set) or rotting at grade.",
        ],
      },
      {
        type: "h2",
        text: "When Repair Makes Sense",
      },
      {
        type: "h3",
        text: "Isolated post failure",
      },
      {
        type: "p",
        text: "If 1–3 posts out of a 100-foot fence run are rotted or heaving, and the rest of the posts are solid, targeted post replacement is almost always the right call. Pull the bad posts, reset them below frost line, re-attach the rails and boards. You get another 15–20 years out of the rest of the fence.",
      },
      {
        type: "h3",
        text: "Storm damage to boards or rails",
      },
      {
        type: "p",
        text: "If a storm blew down a section — boards stripped off, a rail snapped — but the posts are still solid and plumb, this is pure repair territory. Replacing boards and rails is straightforward work and doesn't require touching the rest of the fence.",
      },
      {
        type: "h3",
        text: "Gate problems",
      },
      {
        type: "p",
        text: "A gate that won't latch, swings poorly, or sags is almost always repairable. Gate issues are usually a hinge adjustment, a post reset on the hinge side, or hardware replacement. A gate replacement is rarely necessary unless the gate frame itself is rotted or severely damaged.",
      },
      {
        type: "h2",
        text: "When Replacement Makes More Sense",
      },
      {
        type: "h3",
        text: "Widespread post rot",
      },
      {
        type: "p",
        text: "If more than 30–40% of the posts are rotted at grade, you're looking at a fence that's going to keep failing one post at a time. At that point, the labor cost of progressive repairs over 3–5 years will exceed the cost of pulling the fence and starting fresh. A new fence with properly treated posts and proper depth will outlast the repair cycle.",
      },
      {
        type: "h3",
        text: "Posts set too shallow",
      },
      {
        type: "p",
        text: "If your fence is heaving every year and the posts were clearly set too shallow — a common problem with older installs and budget contractors — you can reset them one by one, but you'll likely find yourself doing it repeatedly. If the original post depth was 18–24 inches throughout, a full reset at proper depth is usually more cost-effective long-term.",
      },
      {
        type: "h3",
        text: "Material failure throughout",
      },
      {
        type: "p",
        text: "Cheap vinyl that has gone brittle, pressure-treated lumber that was the wrong retention level and has failed throughout, or galvanized chain link that has rusted through — these aren't repair situations. The material itself has reached end of life, and patching individual sections is just delaying the inevitable.",
      },
      {
        type: "h2",
        text: "How to Get an Honest Assessment",
      },
      {
        type: "p",
        text: "Any contractor worth working with will tell you honestly whether your fence is repairable or needs replacement — and why. Be skeptical of a contractor who immediately recommends full replacement without explaining the post condition. Be equally skeptical of a contractor who agrees to repair a fence that's clearly failing throughout just to get the job.",
      },
      {
        type: "p",
        text: "Ask to see the posts that are being identified as the problem. Ask what the contractor expects the life of the repair to be. Get it in writing.",
      },
      {
        type: "callout",
        heading: "Not sure what you're dealing with?",
        body: "We'll come out and give you an honest assessment — repair or replace, and exactly why. We don't upsell replacement when repair is the right answer.",
        cta: "Schedule a Free Assessment",
        href: "/contact",
      },
    ],
  },
];
