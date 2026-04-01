// Source: initial-business-data.md §2 Core Offering, market-intelligence.md §5 Gap 1 (solution-based nav)
// SEO: hub page for all fence types, links to individual type pages (Phase 5)

import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { services, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Fence Installation Services — Wood, Vinyl, Aluminum & Chain Link",
  description:
    "Placed Right Fence installs wood, vinyl, aluminum, and chain link fences across Southern NH. Every post set below the 48-inch frost line. Free estimates within 72 hours.",
  openGraph: {
    title: "Fence Installation Services | Placed Right Fence Co. LLC",
    description:
      "Wood, vinyl, aluminum, chain link, and repair — built for New Hampshire winters. Free on-site estimates within 72 hours.",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-[72px]">

      {/* Page Hero */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--bg-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow text-text-muted mb-3">What We Install</p>
            <h1
              className="font-display text-text-primary mb-5"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}
            >
              Built for Every NH Yard.
            </h1>
            <p className="font-body text-text-secondary text-lg leading-relaxed max-w-2xl">
              From privacy fences for young families to pool-code aluminum for compliance — we install every fence type with posts set below the 48-inch frost line. One call, one crew, done right.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.05} direction="up">
                <div
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white rounded-xl border p-6 lg:p-8 transition-all duration-200 hover:shadow-[0_4px_24px_rgba(27,54,93,0.07)]"
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* Left: icon + name */}
                  <div className="lg:col-span-1">
                    <span className="text-4xl block mb-3">{service.icon}</span>
                    <h2 className="font-body font-semibold text-xl text-text-primary mb-1">
                      {service.name}
                    </h2>
                    <p
                      className="font-display text-sm italic mb-4"
                      style={{ color: "var(--accent)" }}
                    >
                      {service.tagline}
                    </p>
                    <div
                      className="font-body text-sm font-semibold"
                      style={{ color: "var(--primary)" }}
                    >
                      {service.priceRange}
                    </div>
                  </div>

                  {/* Middle: description + use cases */}
                  <div className="lg:col-span-1">
                    <p className="font-body text-sm text-text-secondary leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.useCases.map((u) => (
                        <span
                          key={u}
                          className="eyebrow text-[10px] px-2 py-1 rounded"
                          style={{
                            backgroundColor: "var(--sage-muted)",
                            color: "var(--sage)",
                          }}
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="lg:col-span-1 flex flex-col justify-between items-start lg:items-end gap-4">
                    <div
                      className="rounded-lg p-4 w-full lg:w-auto"
                      style={{ backgroundColor: "var(--bg-elevated)" }}
                    >
                      <p className="eyebrow text-[10px] text-text-muted mb-0.5">Starting from</p>
                      <p className="font-body font-semibold text-sm text-text-primary">
                        {service.priceRange}
                      </p>
                    </div>
                    <Button href="/contact" variant="primary" size="sm">
                      Get a Free Estimate →
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why our installations last */}
      <section
        className="py-16 lg:py-20 border-t"
        style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl mx-auto text-center mb-12">
            <p className="eyebrow text-text-muted mb-3">Why Our Installations Last</p>
            <h2
              className="font-display text-text-primary mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
            >
              The Difference Is What You Don't See.
            </h2>
            <p className="font-body text-text-secondary">
              The part of your fence you'll never see — the post, the concrete, the depth — is the only part that matters for how long it lasts. We do that part right.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                label: "Below the Frost Line",
                detail:
                  "Every post goes down to 48 inches minimum — NH code requirement. Posts above frost depth heave out within 1–2 winters. We never shortcut this.",
              },
              {
                label: "Concrete-Set Posts",
                detail:
                  "We use fast-setting concrete on every post, not just tamped soil. It holds through freeze-thaw cycles, root pressure, and mud-season movement.",
              },
              {
                label: "Written Estimates",
                detail:
                  "You get a written estimate before any work begins. The final invoice matches the estimate. No new line items at the end. No surprises.",
              },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.07} direction="up">
                <div
                  className="bg-white rounded-xl border p-6"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="w-8 h-0.5 mb-4"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <p className="font-body font-semibold text-text-primary mb-2">{item.label}</p>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
            >
              Ready to Get Your Yard Right?
            </h2>
            <p className="font-body text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              Free on-site estimate within 72 hours. Written quote before any work begins.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Your Free Estimate →
            </Button>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
