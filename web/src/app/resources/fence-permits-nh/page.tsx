// Content SEO — zero competitor competition for this topic
// Source: market-intelligence.md §5 Gap 5 (no NH fence contractor publishes permit guides)

import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "NH Fence Permit Guide — Do You Need a Permit to Build a Fence?",
  description:
    "Complete guide to fence permits in New Hampshire. Which towns require permits, height restrictions, setback rules, and how to get approved fast. Updated for 2026.",
  openGraph: {
    title: "NH Fence Permit Guide | Placed Right Fence Co. LLC",
    description:
      "Which NH towns require fence permits? Height limits, setback rules, and how to get approved. Free guide from a local installer.",
    url: `${siteConfig.url}/resources/fence-permits-nh`,
  },
};

const PERMIT_DATA = [
  { city: "Nashua", permit: "Required", note: "Zoning permit required for most fences. 6' max rear/side, 4' max front. 3-5 business days processing." },
  { city: "Manchester", permit: "Over 6'", note: "Fences at or below 6' generally don't need a permit. Setback rules still apply." },
  { city: "Bedford", permit: "Varies", note: "Town zoning applies plus HOA restrictions in many neighborhoods. Check covenants first." },
  { city: "Merrimack", permit: "Required", note: "Building permit required. Height and material restrictions vary by zone." },
  { city: "Hudson", permit: "Over 6'", note: "No permit needed under 6'. Front yard fences limited to 4'." },
  { city: "Londonderry", permit: "Required", note: "Zoning permit required. 6' max in residential zones." },
  { city: "Dover", permit: "Required", note: "Building permit required for all fences. Shoreland setback rules near rivers." },
  { city: "Portsmouth", permit: "Required", note: "Permit required. Historic district overlay adds material/style restrictions in some areas." },
  { city: "Exeter", permit: "Required", note: "Building permit required. Flood zone properties have additional elevation requirements." },
  { city: "Hampton", permit: "Required", note: "Permit required. Coastal zone setbacks and wind-load requirements apply near the beach." },
];

export default function FencePermitsNH() {
  return (
    <div className="pt-[100px]">
      {/* Hero */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="eyebrow text-white/40 mb-3">NH Homeowner Guide</p>
            <h1
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", lineHeight: 1.1 }}
            >
              Do You Need a Permit to Build a Fence in New Hampshire?
            </h1>
            <p className="font-body text-white/60 max-w-xl mx-auto">
              The short answer: it depends on your town. Here's what you need to know
              before you start digging.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 lg:py-20" style={{ backgroundColor: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-4">
              The General Rule in NH
            </h2>
            <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4">
              <p>
                New Hampshire does not have a statewide fence permit requirement. Fence
                regulations are handled at the municipal level, which means the rules
                change from town to town. Some municipalities require a permit for any
                fence. Others only require one if the fence exceeds 6 feet. A few have
                almost no restrictions at all.
              </p>
              <p>
                The safest approach is to call your town's building department or planning
                office before ordering materials. We do this for every job as part of our
                free estimate process.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-4">
              Common Height Restrictions
            </h2>
            <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4">
              <p>Most NH municipalities follow a similar pattern:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Rear and side yards:</strong> 6 feet maximum</li>
                <li><strong>Front yards:</strong> 4 feet maximum (sometimes 3 feet)</li>
                <li><strong>Corner lots:</strong> Sight-line setbacks may reduce allowed height near intersections</li>
                <li><strong>Pool enclosures:</strong> Minimum 48 inches required by NH code, regardless of town</li>
              </ul>
              <p>
                Some towns allow taller fences with a variance or conditional use permit.
                If you need more than 6 feet for privacy or security, ask about the
                variance process during the permit application.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-4">
              Setback Requirements
            </h2>
            <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4">
              <p>
                Most towns require fences to be set back from the property line by 6
                inches to 2 feet. This prevents encroachment disputes with neighbors and
                ensures maintenance access on both sides.
              </p>
              <p>
                We always recommend getting a property survey if you're unsure where your
                line falls. A $300 survey is much cheaper than moving a fence after it's
                installed.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-6">
              Permit Requirements by Town
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-body border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "var(--bg-elevated)" }}>
                    <th className="text-left px-4 py-3 font-semibold text-text-primary border-b" style={{ borderColor: "var(--border)" }}>Town</th>
                    <th className="text-left px-4 py-3 font-semibold text-text-primary border-b" style={{ borderColor: "var(--border)" }}>Permit?</th>
                    <th className="text-left px-4 py-3 font-semibold text-text-primary border-b" style={{ borderColor: "var(--border)" }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {PERMIT_DATA.map((row) => (
                    <tr key={row.city}>
                      <td className="px-4 py-3 text-text-primary font-medium border-b" style={{ borderColor: "var(--border)" }}>{row.city}</td>
                      <td className="px-4 py-3 border-b" style={{ borderColor: "var(--border)", color: row.permit === "Required" ? "var(--accent)" : "var(--text-secondary)" }}>
                        {row.permit}
                      </td>
                      <td className="px-4 py-3 text-text-secondary border-b" style={{ borderColor: "var(--border)" }}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs text-text-muted mt-3">
              This table covers major service area towns. Regulations change. Always
              confirm with your local building department before starting a project.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-4">
              The 48-Inch Frost Line Rule
            </h2>
            <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4">
              <p>
                Regardless of permit requirements, every fence post in New Hampshire
                should be set below the 48-inch frost line. This isn't optional. Posts set
                above frost depth will heave out of the ground during freeze-thaw cycles,
                causing leaning panels, broken rails, and cracked concrete footings.
              </p>
              <p>
                We set every post at 54-60 inches in concrete. It costs the same amount of
                concrete. It takes the same amount of time. There is no reason to cut this
                corner.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-4">
              HOA Restrictions
            </h2>
            <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4">
              <p>
                Many Southern NH neighborhoods have HOA covenants that go beyond town
                zoning. Common HOA restrictions include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Approved fence materials only (often no chain link in front-facing areas)</li>
                <li>Color restrictions (white or tan vinyl only)</li>
                <li>Maximum heights below the town's allowance</li>
                <li>Required architectural review before installation</li>
              </ul>
              <p>
                Always check your HOA covenants before ordering materials. We can help you
                navigate HOA requirements and suggest compliant designs during the estimate.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="eyebrow text-white/40 mb-3">Skip the Research</p>
            <h2
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15 }}
            >
              We Handle the Permits for You
            </h2>
            <p className="font-body text-white/60 mb-8 max-w-lg mx-auto">
              Every free estimate includes a permit check for your specific property. We
              handle the paperwork, the city coordination, and the inspection scheduling.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Your Free Estimate
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
