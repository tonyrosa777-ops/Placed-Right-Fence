// Source: design-system.md §5, market-intelligence.md §5 (local SEO gap), §9
// 25+ NH cities across 2 regions — primary local SEO vehicle
// Copy: /data/site.ts → serviceAreas, sectionCopy.serviceAreas

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { serviceAreas, sectionCopy } from "@/data/site";

const s = sectionCopy.serviceAreas;

export default function ServiceAreasSection() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="eyebrow text-text-muted mb-3">{s.eyebrow}</p>
          <h2
            className="font-display text-text-primary mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1.15 }}
          >
            {s.headline}
          </h2>
          <p className="font-body text-text-secondary text-lg">{s.subheadline}</p>
        </FadeIn>

        {/* Two-column region layout */}
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

            {/* Southern NH */}
            <div
              className="rounded-xl border p-6 lg:p-8 bg-white"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <p className="eyebrow text-text-muted text-xs">Southern NH</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.primary.map((city) => (
                  <CityChip key={city} city={city} />
                ))}
              </div>
            </div>

            {/* Seacoast */}
            <div
              className="rounded-xl border p-6 lg:p-8 bg-white"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <p className="eyebrow text-text-muted text-xs">Seacoast</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.seacoast.map((city) => (
                  <CityChip key={city} city={city} />
                ))}
              </div>
            </div>

          </div>
        </FadeIn>

        {/* Coverage note + CTA */}
        <FadeIn className="text-center" delay={0.1}>
          <p className="font-body text-sm text-text-muted mb-6">
            Don't see your town?{" "}
            <Link
              href="/contact"
              className="underline underline-offset-2 transition-colors duration-150"
              style={{ color: "var(--accent)" }}
            >
              Contact us
            </Link>
            {" "}— we often travel outside our listed area for larger jobs.
          </p>
          <Button href={s.cta.href} variant="secondary" size="lg">
            {s.cta.label}
          </Button>
        </FadeIn>

      </div>
    </section>
  );
}

function CityChip({ city }: { city: string }) {
  return (
    <span
      className="font-body text-sm px-3 py-1.5 rounded-full border transition-colors duration-150"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-secondary)",
      }}
    >
      {city}
    </span>
  );
}
