// About Teaser — homepage section
// Founder story intro + 4 values → drives to /about
// Source: market-intelligence.md §7 (trust gap: no face/story on competitor sites)

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { about } from "@/data/site";

const VALUE_ICONS: Record<string, string> = {
  "Built for NH": "🏔️",
  "Honest Pricing": "📋",
  "Family First": "🏡",
  "We Show Up": "⏱️",
};

export default function AboutTeaser() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — story */}
          <FadeIn direction="up">
            <p
              className="font-mono text-xs tracking-[0.1em] uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              Who We Are
            </p>
            <h2
              className="font-display mb-5"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.1,
                color: "var(--text-primary)",
              }}
            >
              {about.headline}
            </h2>
            {/* Gold rule */}
            <div className="h-px w-16 mb-6" style={{ backgroundColor: "var(--accent)" }} />
            <p
              className="font-body text-base leading-relaxed mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              {about.story[0]}
            </p>
            <p
              className="font-body text-sm leading-relaxed mb-8"
              style={{ color: "var(--text-muted)" }}
            >
              {about.story[1]}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm transition-colors"
              style={{ color: "var(--accent)" }}
            >
              Our Story →
            </Link>
          </FadeIn>

          {/* Right — values grid */}
          <FadeIn direction="up" delay={0.12}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.values.map((value, i) => (
                <div
                  key={value.label}
                  className="rounded-2xl border p-5"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span className="text-2xl block mb-3">
                    {VALUE_ICONS[value.label] ?? "✓"}
                  </span>
                  <p
                    className="font-body font-semibold text-sm mb-1.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value.label}
                  </p>
                  <p
                    className="font-body text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {value.detail}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
