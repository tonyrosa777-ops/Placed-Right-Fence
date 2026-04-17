// Source: initial-business-data.md §3 Geography, market-intelligence.md §5 Gap 2 (local SEO)
// Primary local SEO vehicle — 25+ NH cities with schema-ready structure

import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/animations/SectionHeading";
import CountUp from "@/components/animations/CountUp";
import Button from "@/components/ui/Button";
import { serviceAreas, siteConfig } from "@/data/site";
import { CITY_SLUGS } from "@/data/service-area-cities";

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

const STATS = [
  { to: 48,  suffix: "″",    label: "Minimum post depth", sub: "NH frost line" },
  { to: 72,  suffix: " hrs", label: "Free estimate",       sub: "turnaround guarantee" },
  { to: 25,  suffix: "+",    label: "Cities served",       sub: "Southern NH & Seacoast" },
  { to: 100, suffix: "%",    label: "Written estimates",   sub: "before work begins" },
];

const FEATURED_CITIES = [
  { name: "Nashua", slug: "nashua" },
  { name: "Manchester", slug: "manchester" },
  { name: "Bedford", slug: "bedford" },
];

export default function ServiceAreasPage() {
  return (
    <div className="pt-[100px]">

      {/* ── Hero — dark ────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ backgroundColor: "var(--primary)" }}
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <p
              className="font-mono text-xs tracking-[0.1em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Where We Work
            </p>
            <h1
              className="font-display text-white mb-5"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05 }}
            >
              Southern NH &{" "}
              <span style={{ color: "var(--accent)" }}>the Seacoast.</span>
            </h1>
            <div className="h-px w-20 mb-6" style={{ backgroundColor: "var(--accent)" }} />
            <p
              className="font-body text-lg leading-relaxed max-w-xl mb-10"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Based in Nashua. Serving 25+ cities across Southern New Hampshire
              and the Seacoast. Free on-site estimates within 72 hours — wherever
              you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="primary" size="lg" className="cta-pulse">
                Get Your Free Estimate →
              </Button>
              <Button
                href="#coverage"
                variant="secondary"
                size="lg"
                className="border-white/20 text-white/80 hover:bg-white/8 hover:border-white/40"
              >
                View Coverage Map
              </Button>
            </div>
          </FadeIn>

          {/* Featured city pages — quick links */}
          <FadeIn delay={0.18} className="mt-14 flex flex-wrap gap-3">
            <span className="font-body text-xs self-center" style={{ color: "rgba(255,255,255,0.35)" }}>
              Dedicated pages:
            </span>
            {FEATURED_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-150 hover:scale-[1.02]"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {city.name}, NH
                <svg viewBox="0 0 10 10" fill="none" className="w-3 h-3 opacity-60">
                  <path d="M2 8L8 2M4 2h4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Stats row ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--bg-elevated)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
            style={{ borderColor: "var(--border)" }}>
            {STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.06}>
                <div className="py-8 px-6 text-center">
                  <CountUp
                    to={s.to}
                    suffix={s.suffix}
                    duration={1600}
                    className="font-display block mb-1"
                    style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "var(--accent)" }}
                  />
                  <p className="font-body text-sm font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>
                    {s.label}
                  </p>
                  <p className="font-body text-xs" style={{ color: "var(--text-muted)" }}>
                    {s.sub}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage grid ──────────────────────────────────────────────────── */}
      <section
        id="coverage"
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="Coverage Area"
            heading="Every Corner of Southern NH."
            subheading="From the Massachusetts border to the Seacoast — we cover it."
            align="center"
            className="max-w-xl mx-auto mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

            {/* Southern NH card */}
            <FadeIn direction="up">
              <div
                className="rounded-2xl overflow-hidden border h-full"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Card header */}
                <div
                  className="px-6 py-5 border-b flex items-center justify-between"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    <p className="font-mono text-xs tracking-[0.08em] uppercase" style={{ color: "var(--text-muted)" }}>
                      Primary Service Area
                    </p>
                  </div>
                  <span
                    className="font-body text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "rgba(201,168,76,0.1)", color: "var(--accent)" }}
                  >
                    {serviceAreas.primary.length} cities
                  </span>
                </div>
                <div className="p-6">
                  <h2
                    className="font-display mb-5"
                    style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}
                  >
                    Southern NH
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.primary.map((city) => {
                      const slug = city.toLowerCase().replace(/\s+/g, "-");
                      const hasPage = CITY_SLUGS.includes(slug);
                      return hasPage ? (
                        <Link
                          key={city}
                          href={`/service-areas/${slug}`}
                          className="font-body text-sm px-3 py-1.5 rounded-full border transition-all duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[rgba(201,168,76,0.05)]"
                          style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                        >
                          {city}, NH →
                        </Link>
                      ) : (
                        <span
                          key={city}
                          className="font-body text-sm px-3 py-1.5 rounded-full border"
                          style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                        >
                          {city}, NH
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Seacoast card */}
            <FadeIn direction="up" delay={0.08}>
              <div
                className="rounded-2xl overflow-hidden border h-full"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="px-6 py-5 border-b flex items-center justify-between"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    <p className="font-mono text-xs tracking-[0.08em] uppercase" style={{ color: "var(--text-muted)" }}>
                      Seacoast Service Area
                    </p>
                  </div>
                  <span
                    className="font-body text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "rgba(201,168,76,0.1)", color: "var(--accent)" }}
                  >
                    {serviceAreas.seacoast.length} cities
                  </span>
                </div>
                <div className="p-6">
                  <h2
                    className="font-display mb-5"
                    style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}
                  >
                    NH Seacoast
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.seacoast.map((city) => {
                      const slug = city.toLowerCase().replace(/\s+/g, "-");
                      const hasPage = CITY_SLUGS.includes(slug);
                      return hasPage ? (
                        <Link
                          key={city}
                          href={`/service-areas/${slug}`}
                          className="font-body text-sm px-3 py-1.5 rounded-full border transition-all duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[rgba(201,168,76,0.05)]"
                          style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                        >
                          {city}, NH →
                        </Link>
                      ) : (
                        <span
                          key={city}
                          className="font-body text-sm px-3 py-1.5 rounded-full border"
                          style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                        >
                          {city}, NH
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Don't see your town */}
          <FadeIn delay={0.14}>
            <div
              className="rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 100%)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <div>
                <p className="font-body font-semibold text-base mb-1" style={{ color: "var(--text-primary)" }}>
                  Don't see your town?
                </p>
                <p className="font-body text-sm max-w-xl" style={{ color: "var(--text-secondary)" }}>
                  We regularly travel outside our listed area for larger jobs. If you're in NH and within
                  reason of Southern NH, reach out — we'll let you know if we can make it work.
                </p>
              </div>
              <Button href="/contact" variant="primary" size="sm" className="shrink-0">
                Contact Us Anyway →
              </Button>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── Why local matters — dark ───────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <FadeIn>
              <p
                className="font-mono text-xs tracking-[0.1em] uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                Why Local Matters
              </p>
              <h2
                className="font-display text-white mb-5"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
              >
                NH Winters Punish Fences Set by Out-of-State Crews.
              </h2>
              <div className="h-px w-16 mb-6" style={{ backgroundColor: "var(--accent)" }} />
              <div className="space-y-4">
                <p className="font-body leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  New Hampshire has a 48-inch frost depth. Our soil is full of granite. Mud season moves
                  everything that isn't properly anchored. If your installer doesn't know these realities
                  firsthand, your fence pays the price.
                </p>
                <p className="font-body leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  We've been in Southern NH our entire lives. We've seen what frost heave does to posts
                  set at 24 inches. We know which towns have bylaws on fence height and which require
                  permits for front-yard installs. We don't learn on your property — we already know.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Frost-line certified installs", "Granite soil experience", "NH permit knowledge"].map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Stats 2×2 */}
            <FadeIn delay={0.12} direction="up">
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-6 text-center"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <CountUp
                      to={s.to}
                      suffix={s.suffix}
                      duration={1600}
                      className="font-display block mb-1"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--accent)" }}
                    />
                    <p className="font-body text-sm font-medium mb-0.5" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {s.label}
                    </p>
                    <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--bg-elevated)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="font-mono text-xs tracking-[0.1em] uppercase mb-3" style={{ color: "var(--accent)" }}>
              Ready to Start?
            </p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.1, color: "var(--text-primary)" }}
            >
              Free estimate. On-site within 72 hours.
            </h2>
            <p className="font-body text-base mb-8" style={{ color: "var(--text-secondary)" }}>
              Written quote before any work starts. No pressure, no hidden costs.
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
