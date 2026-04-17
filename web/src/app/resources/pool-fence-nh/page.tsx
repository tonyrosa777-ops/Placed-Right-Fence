// Content SEO — zero competitor competition for this topic
// Source: market-intelligence.md §5 Gap 5 (no NH fence contractor publishes pool code guides)

import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "NH Pool Fence Requirements — Code Compliance Guide for Homeowners",
  description:
    "Complete guide to pool fence requirements in New Hampshire. Height minimums, gate specifications, spacing rules, and how to pass inspection the first time.",
  openGraph: {
    title: "NH Pool Fence Requirements | Placed Right Fence Co. LLC",
    description:
      "NH pool barrier code explained. Height, gates, spacing, and inspection tips from a local installer.",
    url: `${siteConfig.url}/resources/pool-fence-nh`,
  },
};

const CODE_REQUIREMENTS = [
  { rule: "Minimum barrier height", spec: "48 inches (4 feet) from grade" },
  { rule: "Maximum opening size", spec: "No gap larger than 4 inches anywhere in the barrier" },
  { rule: "Bottom clearance", spec: "No more than 2 inches between the bottom of the fence and the ground" },
  { rule: "Gate type", spec: "Self-closing and self-latching" },
  { rule: "Latch height", spec: "At least 54 inches from grade (on pool side) for pedestrian gates" },
  { rule: "Gate swing direction", spec: "Must open away from the pool" },
  { rule: "No climbable elements", spec: "Horizontal rails, decorative elements, and nearby objects must not create footholds" },
  { rule: "Direct house access", spec: "If the house wall serves as part of the barrier, doors must have alarms or self-closing mechanisms" },
];

export default function PoolFenceNH() {
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
              Pool Fence Requirements in New Hampshire
            </h1>
            <p className="font-body text-white/60 max-w-xl mx-auto">
              NH law requires a barrier around residential swimming pools. Here's exactly
              what the code says and how to pass inspection the first time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 lg:py-20" style={{ backgroundColor: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-4">
              Why NH Requires Pool Fencing
            </h2>
            <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4">
              <p>
                New Hampshire RSA 485-A:22 requires a barrier around all outdoor
                residential swimming pools, hot tubs, and spas that hold water deeper than
                24 inches. The intent is drowning prevention, particularly for children
                under 5.
              </p>
              <p>
                Your town's building inspector will verify compliance before issuing a
                certificate of occupancy for a new pool, and many towns also inspect
                existing pools when a property changes hands or a fence permit is pulled.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-6">
              NH Pool Barrier Code Requirements
            </h2>
            <div className="space-y-3">
              {CODE_REQUIREMENTS.map((item) => (
                <div
                  key={item.rule}
                  className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 p-4 rounded-lg border"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
                >
                  <span className="font-body font-semibold text-sm text-text-primary shrink-0 sm:w-48">
                    {item.rule}
                  </span>
                  <span className="font-body text-sm text-text-secondary">
                    {item.spec}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-4">
              Best Fence Materials for Pool Areas
            </h2>
            <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4">
              <p>
                Not every fence material works well around a pool. Chlorine splash,
                constant moisture, and the need for visibility all factor into the right
                choice.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "white" }}>
                  <p className="font-body font-semibold text-sm text-text-primary mb-2">Aluminum (Recommended)</p>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    Rust-proof, powder-coated, meets code out of the box. Allows visibility
                    to the pool from inside the house. Most popular choice for NH pool
                    enclosures. Starting at $30/linear foot installed.
                  </p>
                </div>
                <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "white" }}>
                  <p className="font-body font-semibold text-sm text-text-primary mb-2">Vinyl Privacy</p>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    Good for full privacy around the pool area. Resistant to moisture and
                    chlorine. Blocks visibility, which some homeowners prefer. Starting at
                    $35/linear foot installed.
                  </p>
                </div>
                <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "white" }}>
                  <p className="font-body font-semibold text-sm text-text-primary mb-2">Chain Link with Privacy Slats</p>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    Budget-friendly option that meets code. Add privacy slats for screening.
                    Not the most attractive option but functional and affordable. Starting
                    at $15/linear foot installed.
                  </p>
                </div>
                <div className="p-4 rounded-lg border" style={{ borderColor: "var(--border)", backgroundColor: "white" }}>
                  <p className="font-body font-semibold text-sm text-text-primary mb-2">Wood (With Caveats)</p>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    Pressure-treated wood works but requires regular sealing in pool
                    environments. Picket spacing must not exceed 4 inches. Starting at
                    $25/linear foot installed.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-4">
              Common Inspection Failures
            </h2>
            <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4">
              <p>
                Most pool fence inspections fail for preventable reasons. The top issues
                we see:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Gate latch on the wrong side</strong> — the latch must be on the pool side, at least 54 inches from grade</li>
                <li><strong>Gate doesn't self-close</strong> — spring hinges must close the gate from any open position</li>
                <li><strong>Bottom gap too large</strong> — more than 2 inches of clearance under the fence fails code</li>
                <li><strong>Climbable objects within 36 inches</strong> — planters, AC units, deck furniture near the fence create footholds</li>
                <li><strong>House door without alarm</strong> — if the house wall is part of the barrier, any door opening to the pool area needs an alarm</li>
              </ul>
              <p>
                We check all of these during installation and catch issues before the
                inspector arrives.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-text-primary text-2xl mb-4">
              Above-Ground Pool Requirements
            </h2>
            <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4">
              <p>
                Above-ground pools with walls at least 48 inches tall may use the pool
                wall itself as part of the barrier, but the ladder or entry point must
                still be gated or removable. If the pool wall is shorter than 48 inches,
                you need a separate fence that meets the full barrier code.
              </p>
              <p>
                Many towns treat above-ground pools identically to in-ground pools for
                barrier purposes. Check with your local building department.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="eyebrow text-white/40 mb-3">Pass Inspection the First Time</p>
            <h2
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15 }}
            >
              We Know NH Pool Code Inside and Out
            </h2>
            <p className="font-body text-white/60 mb-8 max-w-lg mx-auto">
              Every pool fence we install is built to pass inspection on the first visit.
              We handle the measurements, the gate positioning, and the bottom clearance
              so you don't have to worry about it.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get a Pool Fence Estimate
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
