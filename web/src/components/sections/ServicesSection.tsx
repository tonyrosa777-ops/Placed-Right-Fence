// Source: design-system.md §4 (3-col grid), §5 (service card spec)
// market-intelligence.md §5 (gap: solution-based nav like Finnegan Fence)
// Copy: /data/site.ts → services, sectionCopy.services

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/animations/SectionHeading";
import Button from "@/components/ui/Button";
import { services, sectionCopy } from "@/data/site";

const s = sectionCopy.services;

export default function ServicesSection({ limit }: { limit?: number } = {}) {
  const visibleServices = limit ? services.slice(0, limit) : services;
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "var(--bg-elevated)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <SectionHeading
          eyebrow={s.eyebrow}
          heading={s.headline}
          subheading={s.subheadline}
          align="center"
          className="mb-12 lg:mb-16 max-w-xl mx-auto"
        />

        {/* Services grid — 3 cols desktop, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.07} direction="up">
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={s.cta.href} variant="primary" size="lg">
            {s.cta.label} →
          </Button>
          {limit && (
            <Button href="/services" variant="secondary" size="lg">
              See All Services →
            </Button>
          )}
        </FadeIn>

      </div>
    </section>
  );
}

// ── Service Card ──────────────────────────────────────────────────────────────

type Service = (typeof services)[number];

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card-shine flex flex-col bg-white rounded-xl border transition-all duration-200 overflow-hidden hover:border-accent hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Card top accent bar — shows on hover */}
      <div
        className="h-1 w-0 group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div className="p-6 flex flex-col flex-1">

        {/* Icon */}
        <span className="text-3xl mb-4 block">{service.icon}</span>

        {/* Name + tagline */}
        <h3 className="font-body font-semibold text-lg text-text-primary mb-1">
          {service.name}
        </h3>
        <p
          className="font-display text-sm mb-3"
          style={{ color: "var(--accent)", fontStyle: "italic" }}
        >
          {service.tagline}
        </p>

        {/* Description */}
        <p className="font-body text-sm text-text-secondary leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        {/* Use case chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
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

        {/* Price range */}
        <div
          className="pt-4 border-t flex items-center justify-between"
          style={{ borderColor: "var(--border)" }}
        >
          <div>
            <p className="eyebrow text-[10px] text-text-muted mb-0.5">Starting from</p>
            <p className="font-body font-semibold text-sm text-text-primary">
              {service.priceRange}
            </p>
          </div>
          <span
            className="font-body text-sm font-medium transition-colors duration-150"
            style={{ color: "var(--accent)" }}
          >
            Learn more →
          </span>
        </div>

      </div>
    </Link>
  );
}
