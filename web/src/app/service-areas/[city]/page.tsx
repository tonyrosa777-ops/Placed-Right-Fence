// Dynamic city service area pages — pre-rendered for Nashua, Manchester, Bedford
// Architecture: codys-complete-junk-removal CityPageClient pattern
// Maps: Google Maps iframe with encoded city query (no API key required)
// Source: market-intelligence.md §5 Gap 7 — city pages capture location searches

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { CITY_PAGES, CITY_SLUGS } from "@/data/service-area-cities";

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return CITY_SLUGS.map((slug) => ({ city: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = CITY_PAGES.find((c) => c.slug === city);
  if (!data) return {};
  return {
    title: data.tagline,
    description: `Placed Right Fence Co. LLC installs and repairs fences in ${data.name}, NH. Free on-site estimates within 72 hours. Wood, vinyl, aluminum, and chain link.`,
    openGraph: {
      title: `${data.tagline} | Placed Right Fence Co. LLC`,
      description: `Local fence installation and repair in ${data.name}, NH. Family-run, fully insured. Free estimates within 72 hours.`,
      url: `${siteConfig.url}/service-areas/${data.slug}`,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: "🪵", label: "Wood Fences" },
  { icon: "⬜", label: "Vinyl Fences" },
  { icon: "🔩", label: "Aluminum Fences" },
  { icon: "🔗", label: "Chain Link" },
  { icon: "🏊", label: "Pool Fences" },
  { icon: "🔧", label: "Fence Repair" },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = CITY_PAGES.find((c) => c.slug === city);
  if (!data) notFound();

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&output=embed&hl=en`;

  return (
    <div className="pt-[72px]">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
              <span>›</span>
              <span style={{ color: "rgba(255,255,255,0.8)" }}>{data.name}</span>
            </nav>

            <p className="font-mono text-xs tracking-[0.08em] uppercase mb-3" style={{ color: "var(--accent)" }}>
              Now Serving {data.county}
            </p>
            <h1
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
            >
              {data.tagline}
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8 leading-relaxed">
              Family-run, fully insured, NH-born. Free on-site estimates within 72 hours —
              anywhere in {data.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="primary" size="lg" className="cta-pulse">
                Get a Free Estimate →
              </Button>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
              >
                📞 {siteConfig.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── About + Map ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: content */}
            <FadeIn direction="up">
              <p className="font-mono text-xs tracking-[0.08em] uppercase mb-3" style={{ color: "var(--accent)" }}>
                Your Local Fence Experts in {data.name}
              </p>
              <h2
                className="font-display mb-5"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15, color: "var(--text-primary)" }}
              >
                {data.name} Fence Installation & Repair
              </h2>
              <p className="leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                {data.intro}
              </p>

              {/* Local note */}
              <div
                className="rounded-xl p-4 mb-6"
                style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
                  Local Note
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {data.localNote}
                </p>
              </div>

              {/* Feature bullets */}
              <ul className="space-y-2.5">
                {[
                  "Free on-site estimate within 72 hours",
                  "Written quote — price doesn't change after you sign",
                  "Posts set below NH's 48-inch frost line",
                  "Fully licensed and insured",
                  "Family-run — owner on every job",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm">
                    <span
                      className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ background: "var(--accent)", color: "var(--primary)" }}
                    >✓</span>
                    <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Right: Google Map */}
            <FadeIn direction="up" delay={0.12}>
              <div className="rounded-2xl overflow-hidden border h-80 lg:h-[420px]" style={{ borderColor: "var(--border)" }}>
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Fence installation service area — ${data.name}, NH`}
                />
              </div>
              <p className="text-xs mt-2 text-center" style={{ color: "var(--text-muted)" }}>
                We serve all of {data.name} and surrounding areas.
              </p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Services offered ───────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              className="font-display text-center mb-10"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--text-primary)" }}
            >
              Fencing Services in {data.name}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.05} direction="up">
                <div
                  className="rounded-xl p-5 text-center border transition-all hover:border-[var(--accent)]"
                  style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
                >
                  <span className="text-3xl block mb-2">{s.icon}</span>
                  <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>{s.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              className="font-display text-center mb-10"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--text-primary)" }}
            >
              {data.name} Fence FAQs
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.06} direction="up">
                <div className="rounded-xl border p-6" style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}>
                  <h3 className="font-body font-semibold text-base mb-3" style={{ color: "var(--text-primary)" }}>
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {faq.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "var(--primary)" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeIn>
            <h2
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
            >
              Ready for a free estimate in {data.name}?
            </h2>
            <p className="text-white/60 text-base mb-8">
              On-site within 72 hours. Written quote before any work starts. No pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="cta-pulse">
                Request a Free Estimate →
              </Button>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
              >
                📞 {siteConfig.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
