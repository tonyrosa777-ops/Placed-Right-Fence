// Source: initial-business-data.md §3 Geography, market-intelligence.md §5 Gap 2 (local SEO)
// Primary local SEO vehicle — 25+ NH cities with schema-ready structure
// Zero competitor has a proper service area page with city-level detail

import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/animations/SectionHeading";
import CountUp from "@/components/animations/CountUp";
import Button from "@/components/ui/Button";
import { serviceAreas, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Service Areas — Southern NH & Seacoast Fence Installation",
  description:
    "Placed Right Fence Co. LLC serves 25+ cities across Southern NH and the Seacoast — Nashua, Manchester, Bedford, Portsmouth, and more. Free estimates within 72 hours wherever you are.",
  openGraph: {
    title: "Service Areas | Placed Right Fence Co. LLC",
    description:
      "Fence installation and repair across Southern NH and the Seacoast. 25+ cities served. Free on-site estimates within 72 hours.",
    url: `${siteConfig.url}/service-areas`,
  },
};

type RegionProps = {
  title: string;
  subtitle: string;
  cities: readonly string[];
  delay?: number;
};

function RegionBlock({ title, subtitle, cities, delay = 0 }: RegionProps) {
  return (
    <FadeIn delay={delay} direction="up">
      <div
        className="bg-white rounded-2xl border p-6 lg:p-8 h-full"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
          <p className="eyebrow text-text-muted text-xs">{subtitle}</p>
        </div>
        <h2
          className="font-display text-text-primary mb-6"
          style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)", lineHeight: 1.2 }}
        >
          {title}
        </h2>
        <ul className="space-y-0" role="list">
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <li key={city}>
                <span
                  className="font-body text-sm px-3 py-1.5 rounded-full border block transition-colors duration-150"
                  style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                >
                  {city}, NH
                </span>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </FadeIn>
  );
}

export default function ServiceAreasPage() {
  return (
    <div className="pt-[72px]">

      {/* Page Hero */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <p className="eyebrow text-text-muted mb-3">Where We Work</p>
            <h1
              className="font-display text-text-primary mb-5"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}
            >
              Southern NH & the Seacoast.
            </h1>
            <p className="font-body text-text-secondary text-lg leading-relaxed max-w-2xl">
              We're based in Nashua and serve 25+ cities across Southern New Hampshire and the Seacoast. Free on-site estimates within 72 hours — wherever you are in our coverage area.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Region grid */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <RegionBlock
              title="Southern NH"
              subtitle="Primary Service Area"
              cities={serviceAreas.primary}
              delay={0}
            />
            <RegionBlock
              title="NH Seacoast"
              subtitle="Seacoast Service Area"
              cities={serviceAreas.seacoast}
              delay={0.1}
            />
          </div>

          {/* Coverage note */}
          <FadeIn className="text-center" delay={0.15}>
            <div
              className="inline-block rounded-xl border p-6 max-w-xl"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
            >
              <p className="font-body font-semibold text-text-primary mb-2">
                Don't see your town?
              </p>
              <p className="font-body text-sm text-text-secondary mb-4">
                We regularly travel outside our listed coverage area for larger jobs. If you're in NH and within reason of Southern NH, reach out — we'll let you know if we can make it work.
              </p>
              <Button href="/contact" variant="primary" size="sm">
                Contact Us Anyway →
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why local matters section */}
      <section
        className="py-16 lg:py-20 border-t"
        style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <SectionHeading
                eyebrow="Why Local Matters"
                heading="NH Winters Punish Fences Set by Out-of-State Crews."
                align="left"
                className="mb-5"
              />
              <div className="space-y-4">
                <p className="font-body text-text-secondary leading-relaxed">
                  New Hampshire has a 48-inch frost depth. Our soil is full of granite. Mud season moves everything that isn't properly anchored. If your installer doesn't know these realities firsthand, your fence pays the price.
                </p>
                <p className="font-body text-text-secondary leading-relaxed">
                  We've been in Southern NH our entire lives. We've seen what frost heave does to posts set at 24 inches. We know which towns have bylaws on fence height and which require permits for front-yard installs. We don't learn on your property — we already know.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12} direction="up">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { to: 48,  suffix: "″",    label: "Minimum post depth — NH frost line" },
                  { to: 72,  suffix: " hrs", label: "Free estimate turnaround" },
                  { to: 25,  suffix: "+",    label: "Cities in our coverage area" },
                  { to: 100, suffix: "%",    label: "Written estimates before work begins" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border bg-white p-5 text-center"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <CountUp
                      to={item.to}
                      suffix={item.suffix}
                      duration={1600}
                      className="font-display text-3xl mb-1 block"
                      style={{ color: "var(--accent)" }}
                    />
                    <p className="font-body text-xs text-text-muted leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
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
              Get Your Free Estimate Today.
            </h2>
            <p
              className="font-body text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              On-site within 72 hours. Written quote before any work starts.
            </p>
            <Button href="/contact" variant="primary" size="lg" className="cta-pulse">
              Request a Free Estimate →
            </Button>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
