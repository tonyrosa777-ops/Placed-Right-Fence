// Simple contact / general-inquiry page
// Alternative to the multi-step estimate form at /contact for visitors who just want to ask a question
// Form delivery: Resend via /api/contact (source: "message")

import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import ContactMessageForm from "@/components/sections/ContactMessageForm";
import { siteConfig, trustSignals, mailto } from "@/data/site";
import { buildMailto } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Send a Message — Placed Right Fence Co. LLC",
  description:
    "Have a question about fence installation, repair, or materials? Send us a quick message and we'll reply the same day. Serving Southern NH and the Seacoast.",
  openGraph: {
    title: "Send a Message | Placed Right Fence Co. LLC",
    description:
      "Quick way to reach a real person at Placed Right Fence. Name, email, message — we reply same day.",
    url: `${siteConfig.url}/message`,
  },
};

export default function MessagePage() {
  return (
    <div className="pt-[100px]">

      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: form — 3 cols */}
            <div className="lg:col-span-3">
              <FadeIn>
                <p className="eyebrow text-text-muted mb-3">Send a Message</p>
                <h1
                  className="font-display text-text-primary mb-3"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
                >
                  Got a Question? We're Here.
                </h1>
                <p className="font-body text-text-secondary mb-8">
                  Not quite ready to request an estimate? Drop us a line — material questions, pricing ballparks, timing, repair advice, anything. A real person reads every message and replies the same day.
                </p>
                <div
                  className="bg-white rounded-2xl border p-6 lg:p-8"
                  style={{ borderColor: "var(--border)" }}
                >
                  <ContactMessageForm />
                </div>
              </FadeIn>
            </div>

            {/* Right: trust sidebar — 2 cols */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.1} direction="up">

                {/* Estimate cross-link */}
                <div
                  className="rounded-2xl border p-6 mb-6"
                  style={{ borderColor: "var(--border)", backgroundColor: "white" }}
                >
                  <p className="eyebrow text-[10px] text-text-muted mb-3">Ready for an Estimate?</p>
                  <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
                    If you already know roughly what you want and you'd like an on-site quote, our estimate form captures the details we need to show up prepared.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-body font-semibold text-sm transition-colors duration-150"
                    style={{ color: "var(--accent)" }}
                  >
                    Get a Free Estimate →
                  </a>
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
                    href={buildMailto(siteConfig.email, mailto.subject, mailto.body)}
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

    </div>
  );
}
