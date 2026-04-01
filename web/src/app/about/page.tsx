// Source: initial-business-data.md §1, §4 — brand story, values, owner background
// market-intelligence.md §9 — emotional positioning gap: no NH competitor tells a real family story

import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { about, siteConfig, trustSignals } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us — NH Born. Family Built.",
  description:
    "Placed Right Fence Co. LLC is a family-run fence contractor from Nashua, NH. We have kids and dogs too. Every fence we install, we build the way we'd want our own yard done.",
  openGraph: {
    title: "About Placed Right Fence Co. LLC | NH Born. Family Built.",
    description:
      "A family-run fence contractor from Nashua, NH. Fully insured. Posts below the frost line. Estimates that don't change.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-[72px]">

      {/* Page Hero */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: headline + story */}
            <FadeIn>
              <p className="eyebrow text-text-muted mb-3">Our Story</p>
              <h1
                className="font-display text-text-primary mb-6"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}
              >
                {about.headline}
              </h1>
              <p className="font-body text-text-secondary text-lg leading-relaxed mb-6">
                {about.subheadline}
              </p>
              <div className="space-y-4">
                {about.story.map((paragraph, i) => (
                  <p key={i} className="font-body text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* Right: photo placeholder */}
            <FadeIn delay={0.15} direction="up">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                style={{ backgroundColor: "var(--bg-base)" }}
              >
                {/* Warm photo placeholder */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--accent-muted) 0%, var(--bg-elevated) 60%, var(--accent-muted) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: "white" }}
                  >
                    👨‍👩‍👧
                  </div>
                  <p
                    className="font-display text-center text-base italic"
                    style={{ color: "var(--primary)" }}
                  >
                    "We build every fence the way we'd want our own yard done."
                  </p>
                  <p className="eyebrow text-[10px] text-text-muted">
                    — Anthony, Placed Right Fence
                  </p>
                </div>
                {/* Trust badge overlay */}
                <div
                  className="absolute bottom-4 right-4 rounded-lg px-3 py-2 flex items-center gap-2"
                  style={{ backgroundColor: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.75} className="w-4 h-4 shrink-0">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p className="font-body text-xs font-semibold text-text-primary">Fully Insured</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-xl mb-12">
            <p className="eyebrow text-text-muted mb-3">What We Stand For</p>
            <h2
              className="font-display text-text-primary"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
            >
              Four Things We'll Never Compromise On.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {about.values.map((value, i) => (
              <FadeIn key={value.label} delay={i * 0.08} direction="up">
                <div
                  className="bg-white rounded-xl border p-6 lg:p-8 h-full"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="w-8 h-0.5 mb-5"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <h3 className="font-body font-semibold text-lg text-text-primary mb-3">
                    {value.label}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {value.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals strip */}
      <section
        className="py-12 border-t border-b"
        style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {trustSignals.map((signal) => (
                <div key={signal.label} className="text-center">
                  <p className="font-body font-semibold text-sm text-text-primary mb-0.5">
                    {signal.label}
                  </p>
                  <p className="font-body text-xs text-text-muted leading-snug">{signal.detail}</p>
                </div>
              ))}
            </div>
          </FadeIn>
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
              We'd Love to Earn Your Business.
            </h2>
            <p
              className="font-body text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Call us, fill out the form, or reach out on Instagram. We'll get back to you the same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Get a Free Estimate →
              </Button>
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="ghost"
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                Call {siteConfig.phone}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
