// Source: design-system.md §5, market-intelligence.md §2 (buying blockers)
// Addresses the 6 core fears from real NH 1-star reviews — ghost, gaps, rot, bait-switch, damage, delays
// Copy: /data/site.ts → trustSignals, sectionCopy.trust

import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/animations/SectionHeading";
import { trustSignals, sectionCopy, hero } from "@/data/site";

const s = sectionCopy.trust;

const icons: Record<string, React.ReactNode> = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  anchor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="w-6 h-6">
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="8" x2="12" y2="22" />
      <path d="M5 15H2a10 10 0 0 0 20 0h-3" />
    </svg>
  ),
};

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Trust badge strip */}
        <FadeIn direction="up" delay={0}>
          <div className="flex flex-wrap gap-3 mb-12 lg:mb-16">
            {hero.trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-body font-medium"
                style={{ borderColor: "rgba(201,168,76,0.35)", color: "rgba(255,255,255,0.75)", backgroundColor: "rgba(201,168,76,0.08)" }}
              >
                <span
                  className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}
                >
                  ✓
                </span>
                {badge}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Header */}
        <SectionHeading
          eyebrow={s.eyebrow}
          heading={s.headline}
          subheading={s.subheadline}
          align="left"
          className="max-w-2xl mb-12 lg:mb-16"
          dark
        />

        {/* Trust signals grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustSignals.map((signal, i) => (
            <FadeIn key={signal.label} delay={i * 0.06} direction="up">
              <div
                className="flex gap-4 p-6 rounded-xl border transition-all duration-200 hover:border-[rgba(201,168,76,0.4)]"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                {/* Icon circle */}
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(201,168,76,0.12)", color: "var(--accent)" }}
                >
                  {icons[signal.icon]}
                </div>
                {/* Text */}
                <div>
                  <p className="font-body font-semibold mb-1" style={{ color: "rgba(255,255,255,0.9)" }}>
                    {signal.label}
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {signal.detail}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
