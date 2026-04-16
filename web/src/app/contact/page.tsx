// Source: market-intelligence.md §5 Gap 4 (multi-step form), §7 (response guarantee)
// Placeholder CTA Rule: EstimateForm is fully interactive with success state
// Form delivery: Web3Forms — set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local

import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import EstimateForm from "@/components/sections/EstimateForm";
import CalendlyEmbed from "@/components/sections/CalendlyEmbed";
import { siteConfig, trustSignals } from "@/data/site";

export const metadata: Metadata = {
  title: "Get a Free Estimate — Fence Installation & Repair",
  description:
    "Request a free on-site fence estimate in Southern NH. We come to you within 72 hours, give you a written quote, and start when you're ready. No pressure. No hidden costs.",
  openGraph: {
    title: "Get Your Free Fence Estimate | Placed Right Fence Co. LLC",
    description:
      "Free on-site estimate within 72 hours. Written quote before any work begins. Serving Southern NH and the Seacoast.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="pt-[72px]">

      {/* Page layout: form left, trust right */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: form — takes 3 cols */}
            <div className="lg:col-span-3">
              <FadeIn>
                <p className="eyebrow text-text-muted mb-3">Free Estimate</p>
                <h1
                  className="font-display text-text-primary mb-3"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
                >
                  Let's Get Your Yard Right.
                </h1>
                <p className="font-body text-text-secondary mb-8">
                  Fill out the form below and we'll be in touch within a few hours to confirm your free on-site estimate appointment.
                </p>
                <div
                  className="bg-white rounded-2xl border p-6 lg:p-8"
                  style={{ borderColor: "var(--border)" }}
                >
                  <EstimateForm />
                </div>
              </FadeIn>
            </div>

            {/* Right: trust sidebar — takes 2 cols */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.1} direction="up">

                {/* Response guarantee */}
                <div
                  className="rounded-2xl border p-6 mb-6"
                  style={{ borderColor: "var(--border)", backgroundColor: "white" }}
                >
                  <p className="eyebrow text-[10px] text-text-muted mb-3">Our Guarantee</p>
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--accent-muted)" }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.75} className="w-5 h-5">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-text-primary mb-1">
                        Free On-Site Estimate Within 72 Hours
                      </p>
                      <p className="font-body text-sm text-text-secondary leading-relaxed">
                        We come to you. We walk the property. You get a written quote with everything itemized before we ask you to sign anything.
                      </p>
                    </div>
                  </div>
                  <div
                    className="rounded-lg p-3 text-center"
                    style={{ backgroundColor: "var(--accent-muted)" }}
                  >
                    <p className="font-body text-sm font-semibold" style={{ color: "var(--accent)" }}>
                      Most requests get a same-day response.
                    </p>
                  </div>
                </div>

                {/* Contact alternatives */}
                <div
                  className="rounded-2xl border p-6 mb-6"
                  style={{ borderColor: "var(--border)", backgroundColor: "white" }}
                >
                  <p className="eyebrow text-[10px] text-text-muted mb-4">Prefer to Call or Text?</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-3 mb-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--bg-elevated)" }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth={1.75} className="w-4 h-4">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.58 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-text-primary group-hover:text-accent transition-colors duration-150">
                        {siteConfig.phone}
                      </p>
                      <p className="font-body text-xs text-text-muted">Call or text anytime</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--bg-elevated)" }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth={1.75} className="w-4 h-4">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-text-primary group-hover:text-accent transition-colors duration-150">
                        {siteConfig.email}
                      </p>
                      <p className="font-body text-xs text-text-muted">We respond same day</p>
                    </div>
                  </a>
                </div>

                {/* Trust mini-grid */}
                <div
                  className="rounded-2xl border p-6"
                  style={{ borderColor: "var(--border)", backgroundColor: "white" }}
                >
                  <p className="eyebrow text-[10px] text-text-muted mb-4">Why Placed Right</p>
                  <div className="space-y-3">
                    {trustSignals.slice(0, 4).map((signal) => (
                      <div key={signal.label} className="flex items-start gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: "var(--accent)" }}
                        />
                        <div>
                          <p className="font-body font-semibold text-sm text-text-primary">
                            {signal.label}
                          </p>
                          <p className="font-body text-xs text-text-muted leading-snug">{signal.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly inline scheduler */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-elevated)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-8">
              <p className="eyebrow text-text-muted mb-3">
                Prefer to Pick a Time?
              </p>
              <h2
                className="font-display text-text-primary mb-3"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.15,
                }}
              >
                Schedule Your Free Estimate
              </h2>
              <p className="font-body text-text-secondary max-w-lg mx-auto">
                Choose a time that works for you and we'll come out to walk the
                property and give you a written quote on the spot.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl border overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <CalendlyEmbed />
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
