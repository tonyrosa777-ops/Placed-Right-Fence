"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

// ─── Tier data ────────────────────────────────────────────────────────────────

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: 1500,
    badge: null,
    headline: "Your foundation online.",
    description:
      "A professional, conversion-ready website that outclasses every competitor in Southern NH from day one.",
    features: [
      "Custom homepage with Forge hero animation",
      "About, Contact & FAQ pages",
      "Multi-step estimate form → email/phone delivery",
      "6 homepage testimonials",
      "3 city-specific service area pages",
      "LocalBusiness + schema markup",
      "Mobile-first responsive design",
      "Vercel deployment + 1 year hosting setup",
      "1 revision round",
    ],
    notIncluded: [
      "SEO blog + Sanity CMS",
      "Photo gallery",
      "Lead capture quiz",
      "Individual fence type pages",
      "Merch shop",
    ],
    cta: "Start with Starter",
    ctaHref: "/contact?tier=starter",
    featured: false,
    color: "var(--text-muted)",
  },
  {
    id: "growth",
    name: "Growth",
    price: 3000,
    badge: "Most Popular",
    headline: "Dominate local search.",
    description:
      "The complete SEO engine. 10 articles targeting your best keywords, a gallery that converts visitors, and a lead capture system that pre-qualifies every prospect.",
    features: [
      "Everything in Starter",
      "Photo gallery with category filter (Before/After)",
      "10 full SEO blog articles targeting NH fence keywords",
      "Sanity CMS — publish posts without a developer",
      "3-step visual estimate form (lead capture system)",
      "30-review testimonials page (/reviews)",
      "6 city-specific service area pages",
      "4 individual fence type pages (Wood, Vinyl, Aluminum, Chain Link)",
      "Services hub page",
      "FAQ schema markup (rich snippets in Google)",
      "2 revision rounds",
    ],
    notIncluded: [
      "Branded merch shop (Stripe + Printful)",
      "Priority support & monthly calls",
      "10+ service area pages",
    ],
    cta: "Get the Growth Plan",
    ctaHref: "/contact?tier=growth",
    featured: true,
    color: "var(--accent)",
  },
  {
    id: "premium",
    name: "Premium",
    price: 5500,
    badge: "Full Service",
    headline: "The complete build.",
    description:
      "Every capability, fully built and launched. Includes the full merch store, 10+ service area pages, and 30 days of post-launch support so nothing breaks silently.",
    features: [
      "Everything in Growth",
      "Branded merch shop (Stripe checkout + Printful POD fulfillment)",
      "10+ city-specific service area pages",
      "Priority support — 48hr response SLA",
      "Monthly 30-min check-in call",
      "Sanity CMS training session (recorded)",
      "Staging environment for safe updates",
      "3 revision rounds",
      "30 days post-launch support",
    ],
    notIncluded: [],
    cta: "Get the Premium Plan",
    ctaHref: "/contact?tier=premium",
    featured: false,
    color: "var(--accent)",
  },
];

// ─── Feature comparison rows ──────────────────────────────────────────────────

const COMPARISON = [
  { label: "Custom homepage + Forge hero animation", starter: true, growth: true, premium: true },
  { label: "About, Contact, FAQ pages", starter: true, growth: true, premium: true },
  { label: "Estimate form → phone/email delivery", starter: true, growth: true, premium: true },
  { label: "Mobile-first + schema markup", starter: true, growth: true, premium: true },
  { label: "Vercel deployment", starter: true, growth: true, premium: true },
  { label: "Photo gallery (category filter)", starter: false, growth: true, premium: true },
  { label: "10 SEO blog articles", starter: false, growth: true, premium: true },
  { label: "Sanity CMS (edit blog yourself)", starter: false, growth: true, premium: true },
  { label: "3-step visual lead capture form", starter: false, growth: true, premium: true },
  { label: "30-review testimonials page", starter: false, growth: true, premium: true },
  { label: "Individual fence type pages (4)", starter: false, growth: true, premium: true },
  { label: "FAQ rich snippets (Google schema)", starter: false, growth: true, premium: true },
  { label: "Branded merch shop (Stripe + Printful)", starter: false, growth: false, premium: true },
  { label: "10+ service area city pages", starter: false, growth: false, premium: true },
  { label: "Priority 48hr support SLA", starter: false, growth: false, premium: true },
  { label: "Monthly check-in call", starter: false, growth: false, premium: true },
  { label: "30 days post-launch support", starter: false, growth: false, premium: true },
];

const SERVICE_AREA_COUNT: Record<string, string> = {
  starter: "3 cities",
  growth: "6 cities",
  premium: "10+ cities",
};

const REVISION_COUNT: Record<string, string> = {
  starter: "1 round",
  growth: "2 rounds",
  premium: "3 rounds",
};

// ─── CountUp hook ─────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 800) {
  const [display, setDisplay] = useState(target);
  const rafRef = useRef<number>(0);
  const prevRef = useRef(target);

  useEffect(() => {
    const start = prevRef.current;
    const diff = target - start;
    if (diff === 0) return;

    const t0 = performance.now();
    cancelAnimationFrame(rafRef.current);

    function step(now: number) {
      const progress = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.round(start + diff * ease));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
      else prevRef.current = target;
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return display;
}

// ─── ROI Calculator ───────────────────────────────────────────────────────────

function ROICalculator({ selectedTierIndex }: { selectedTierIndex: number }) {
  // Defaults based on market-intelligence.md:
  // • Average NH fence project (sweet spot): ~$5,200 ($3k–$7k range)
  // • Conservative leads/month from local SEO: 8
  // • Close rate with transparent pricing site: 30% (vs 20% industry avg)
  const [leads, setLeads] = useState(8);
  const [closeRate, setCloseRate] = useState(30);
  const [avgValue, setAvgValue] = useState(5200);

  const tierPrice = TIERS[selectedTierIndex].price;

  const metrics = useMemo(() => {
    const closed = leads * (closeRate / 100);
    const monthly = closed * avgValue;
    const annual = monthly * 12;
    const bkMonths = monthly > 0 ? tierPrice / monthly : 0;
    const bkClients = avgValue > 0 ? tierPrice / avgValue : 0;
    const roi = monthly > 0 ? ((annual - tierPrice) / tierPrice) * 100 : 0;
    return { closed, monthly, annual, bkMonths, bkClients, roi };
  }, [leads, closeRate, avgValue, tierPrice]);

  const monthlyDisplay = useCountUp(Math.round(metrics.monthly));
  const annualDisplay = useCountUp(Math.round(metrics.annual));
  const roiDisplay = useCountUp(Math.round(metrics.roi));

  return (
    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
      {/* Header */}
      <div className="px-8 py-6 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}>
        <p className="font-mono text-xs tracking-[0.08em] uppercase mb-1" style={{ color: "var(--accent)" }}>
          Revenue Projection
        </p>
        <h3 className="font-display text-2xl" style={{ color: "var(--text-primary)" }}>
          Your Website as a Revenue Engine
        </h3>
        <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
          Numbers based on Southern NH fence market data. Adjust sliders to match your goals.
        </p>
      </div>

      <div className="p-8 space-y-8">
        {/* Sliders */}
        <div className="space-y-6">
          {/* Monthly leads */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                Monthly website leads
              </label>
              <span className="font-mono font-bold text-sm" style={{ color: "var(--accent)" }}>
                {leads} leads/mo
              </span>
            </div>
            <input
              type="range" min={1} max={20} value={leads}
              onChange={(e) => setLeads(Number(e.target.value))}
              className="w-full accent-[var(--accent)] cursor-pointer"
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>1 (minimal SEO)</span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>20 (strong SEO)</span>
            </div>
          </div>

          {/* Close rate */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                Lead-to-client conversion rate
              </label>
              <span className="font-mono font-bold text-sm" style={{ color: "var(--accent)" }}>
                {closeRate}%
              </span>
            </div>
            <input
              type="range" min={5} max={60} value={closeRate}
              onChange={(e) => setCloseRate(Number(e.target.value))}
              className="w-full accent-[var(--accent)] cursor-pointer"
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>5% (industry avg)</span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>60% (strong referrals)</span>
            </div>
          </div>

          {/* Average job value */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                Average project value
              </label>
              <span className="font-mono font-bold text-sm" style={{ color: "var(--accent)" }}>
                ${avgValue.toLocaleString()}
              </span>
            </div>
            <input
              type="range" min={1000} max={12000} step={200} value={avgValue}
              onChange={(e) => setAvgValue(Number(e.target.value))}
              className="w-full accent-[var(--accent)] cursor-pointer"
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>$1,000 (small yards)</span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>$12,000 (large/premium)</span>
            </div>
          </div>
        </div>

        {/* Output cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl p-5 text-center" style={{ background: "var(--bg-elevated)" }}>
            <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
              Monthly Revenue
            </p>
            <p className="font-display text-3xl" style={{ color: "var(--text-primary)" }}>
              ${monthlyDisplay.toLocaleString()}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              {metrics.closed.toFixed(1)} clients/mo
            </p>
          </div>

          <div className="rounded-xl p-5 text-center" style={{ background: "var(--bg-elevated)" }}>
            <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
              Annual Revenue
            </p>
            <p className="font-display text-3xl" style={{ color: "var(--accent)" }}>
              ${annualDisplay.toLocaleString()}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              from website leads alone
            </p>
          </div>

          <div className="rounded-xl p-5 text-center" style={{ background: "var(--bg-elevated)" }}>
            <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
              Year-1 ROI
            </p>
            <p className="font-display text-3xl" style={{ color: roiDisplay > 0 ? "#4ade80" : "var(--text-primary)" }}>
              {roiDisplay > 0 ? `${roiDisplay.toLocaleString()}%` : "—"}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
              on ${tierPrice.toLocaleString()} investment
            </p>
          </div>
        </div>

        {/* Break-even callout */}
        {metrics.bkMonths > 0 && (
          <div
            className="rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4"
            style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)" }}
          >
            <div className="text-center sm:text-left flex-1">
              <p className="font-display text-lg" style={{ color: "var(--text-primary)" }}>
                Break-even in{" "}
                <span style={{ color: "var(--accent)" }}>
                  {metrics.bkMonths < 1
                    ? `${Math.round(metrics.bkMonths * 30)} days`
                    : `${metrics.bkMonths.toFixed(1)} months`}
                </span>
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                That&apos;s{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  {metrics.bkClients < 1
                    ? "less than 1 job"
                    : `${metrics.bkClients.toFixed(1)} jobs`}
                </strong>{" "}
                to cover the entire website investment — then everything after is pure upside.
              </p>
            </div>
            <div
              className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-display text-2xl"
              style={{ background: "var(--accent)", color: "var(--primary)" }}
            >
              ✓
            </div>
          </div>
        )}

        {/* Market data footnote */}
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          Defaults based on Southern NH fence market research: average residential project $5,200 (
          $3k–$7k sweet spot), 8 monthly leads from local SEO strategy, 30% conversion rate with
          transparent pricing and multi-step form (vs. 20% industry average for no-pricing sites).
          Sources: ProMatcher NH, HomeBlue Manchester, Angi regional data, Brentwood Fence published
          cost data.
        </p>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PricingClient() {
  const [selectedTierIndex, setSelectedTierIndex] = useState(1); // default: Growth

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16" style={{ background: "var(--primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <p className="font-mono text-xs tracking-[0.08em] uppercase mb-4" style={{ color: "var(--accent)" }}>
              Website Plans
            </p>
            <h1 className="font-display text-5xl lg:text-6xl text-white mb-4 leading-tight">
              Website investment.
              <br />
              <span style={{ color: "var(--accent)" }}>Not website cost.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              The average Southern NH fence project brings in $5,200. At a 30% conversion rate,
              8 monthly leads pays back the entire Growth plan in under two weeks — then it generates
              revenue for years.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium"
              style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.35)", color: "rgba(255,255,255,0.8)" }}>
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
              All plans include Placed Right Fence — already built and deployed
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Tier Cards ────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-start">
            {TIERS.map((tier, i) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setSelectedTierIndex(i)}
                className={`relative rounded-2xl flex flex-col cursor-pointer transition-all duration-200 ${
                  tier.featured ? "lg:scale-105" : ""
                }`}
                style={{
                  background: "var(--bg-card)",
                  border: `2px solid ${selectedTierIndex === i ? "var(--accent)" : tier.featured ? "rgba(201,168,76,0.35)" : "var(--border)"}`,
                }}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                    style={{ background: "var(--accent)", color: "var(--primary)" }}>
                    {tier.badge}
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  {/* Name + price */}
                  <div className="mb-6">
                    <p className="font-mono text-xs tracking-[0.08em] uppercase mb-2" style={{ color: tier.featured ? "var(--accent)" : "var(--text-muted)" }}>
                      {tier.name}
                    </p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="font-display text-5xl" style={{ color: "var(--text-primary)" }}>
                        ${tier.price.toLocaleString()}
                      </span>
                      <span className="text-sm" style={{ color: "var(--text-muted)" }}>one-time</span>
                    </div>
                    <p className="font-display text-lg mb-1" style={{ color: "var(--text-primary)" }}>{tier.headline}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{tier.description}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px mb-6" style={{ background: "var(--border)" }} />

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm">
                        <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                          style={{ background: tier.featured ? "var(--accent)" : "rgba(201,168,76,0.2)", color: tier.featured ? "var(--primary)" : "var(--accent)" }}>
                          ✓
                        </span>
                        <span style={{ color: "var(--text-secondary)" }}>{f}</span>
                      </li>
                    ))}
                    {/* Service area count */}
                    <li className="flex gap-2.5 text-sm">
                      <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                        style={{ background: tier.featured ? "var(--accent)" : "rgba(201,168,76,0.2)", color: tier.featured ? "var(--primary)" : "var(--accent)" }}>
                        ✓
                      </span>
                      <span style={{ color: "var(--text-secondary)" }}>{SERVICE_AREA_COUNT[tier.id]} service area landing pages</span>
                    </li>
                    <li className="flex gap-2.5 text-sm">
                      <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                        style={{ background: tier.featured ? "var(--accent)" : "rgba(201,168,76,0.2)", color: tier.featured ? "var(--primary)" : "var(--accent)" }}>
                        ✓
                      </span>
                      <span style={{ color: "var(--text-secondary)" }}>{REVISION_COUNT[tier.id]} of revisions</span>
                    </li>

                    {/* Not included — dimmed */}
                    {tier.notIncluded.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm opacity-35">
                        <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold"
                          style={{ background: "var(--border)", color: "var(--text-muted)" }}>
                          —
                        </span>
                        <span style={{ color: "var(--text-muted)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={tier.ctaHref}
                    onClick={(e) => e.stopPropagation()}
                    className="block w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all hover:brightness-110"
                    style={
                      tier.featured
                        ? { background: "var(--accent)", color: "var(--primary)" }
                        : { background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border)" }
                    }
                  >
                    {tier.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tier selector for ROI calculator */}
          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Click a plan above to see its ROI projection below ↓
            </p>
          </div>
        </div>
      </section>

      {/* ── ROI Calculator ───────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-10">
              <p className="font-mono text-xs tracking-[0.08em] uppercase mb-3" style={{ color: "var(--accent)" }}>
                ROI Calculator
              </p>
              <h2 className="font-display text-4xl mb-3" style={{ color: "var(--text-primary)" }}>
                What does this site actually earn?
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                Calculating against the{" "}
                <span style={{ color: "var(--accent)" }}>{TIERS[selectedTierIndex].name} plan</span> at ${TIERS[selectedTierIndex].price.toLocaleString()}.
              </p>
            </div>
          </FadeIn>

          {/* Tier tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {TIERS.map((tier, i) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTierIndex(i)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  background: selectedTierIndex === i ? "var(--accent)" : "transparent",
                  color: selectedTierIndex === i ? "var(--primary)" : "var(--text-secondary)",
                  border: `1px solid ${selectedTierIndex === i ? "var(--accent)" : "var(--border)"}`,
                }}
              >
                {tier.name} — ${tier.price.toLocaleString()}
              </button>
            ))}
          </div>

          <ROICalculator selectedTierIndex={selectedTierIndex} />
        </div>
      </section>

      {/* ── Comparison Table ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <p className="font-mono text-xs tracking-[0.08em] uppercase mb-3" style={{ color: "var(--accent)" }}>
                Everything Compared
              </p>
              <h2 className="font-display text-4xl" style={{ color: "var(--text-primary)" }}>
                What&apos;s in each plan
              </h2>
            </div>
          </FadeIn>

          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
            {/* Header */}
            <div className="grid grid-cols-4 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}>
              <div className="p-5 col-span-1" />
              {TIERS.map((tier) => (
                <div key={tier.id} className="p-5 text-center border-l" style={{ borderColor: "var(--border)", background: tier.featured ? "rgba(201,168,76,0.07)" : "transparent" }}>
                  <p className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: tier.featured ? "var(--accent)" : "var(--text-muted)" }}>
                    {tier.name}
                  </p>
                  <p className="font-display text-xl" style={{ color: "var(--text-primary)" }}>
                    ${tier.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Rows */}
            {COMPARISON.map((row, i) => (
              <div
                key={row.label}
                className="grid grid-cols-4 border-b last:border-b-0"
                style={{ borderColor: "var(--border)", background: i % 2 === 0 ? "var(--bg-card)" : "transparent" }}
              >
                <div className="p-4 pl-5 text-sm col-span-1" style={{ color: "var(--text-secondary)" }}>
                  {row.label}
                </div>
                {(["starter", "growth", "premium"] as const).map((k) => (
                  <div key={k} className="p-4 flex justify-center items-center border-l"
                    style={{ borderColor: "var(--border)", background: k === "growth" ? "rgba(201,168,76,0.04)" : "transparent" }}>
                    {row[k] ? (
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                        style={{ background: "var(--accent)", color: "var(--primary)" }}>✓</span>
                    ) : (
                      <span className="text-lg" style={{ color: "var(--border)" }}>—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Service area row */}
            <div className="grid grid-cols-4 border-t" style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}>
              <div className="p-4 pl-5 text-sm" style={{ color: "var(--text-secondary)" }}>Service area pages</div>
              {(["starter", "growth", "premium"] as const).map((k) => (
                <div key={k} className="p-4 flex justify-center items-center border-l text-sm font-medium"
                  style={{ borderColor: "var(--border)", color: "var(--accent)", background: k === "growth" ? "rgba(201,168,76,0.04)" : "transparent" }}>
                  {SERVICE_AREA_COUNT[k]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <p className="font-mono text-xs tracking-[0.08em] uppercase mb-4" style={{ color: "var(--accent)" }}>
              Ready to move forward?
            </p>
            <h2 className="font-display text-4xl mb-4" style={{ color: "var(--text-primary)" }}>
              Spring is peak season.
              <br />
              <span style={{ color: "var(--accent)" }}>Every week costs real jobs.</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
              Placed Right Fence is already built and deployed. Choose your plan and it goes live
              this week — right before homeowners start planning their spring projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact?tier=growth"
                className="px-8 py-4 rounded-xl font-semibold text-base transition-all hover:brightness-110"
                style={{ background: "var(--accent)", color: "var(--primary)" }}
              >
                Get the Growth Plan — $3,000
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-semibold text-base transition-all"
                style={{ background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border)" }}
              >
                Ask a question first
              </Link>
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
              No deposit required to discuss. Response within 4 hours.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
