"use client";
// Quiz CTA — strategic placement on homepage after ServicesSection
// "Not sure which fence is right for you?" → drives to /quiz
// Source: market-intelligence.md §2 (buying blocker: decision paralysis)

import { motion } from "framer-motion";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

const STEPS = [
  { n: "1", label: "Answer 4 quick questions about your yard" },
  { n: "2", label: "Get a personalized fence recommendation" },
  { n: "3", label: "Book your free estimate in under 60 seconds" },
];

export default function QuizCTASection() {
  return (
    <section
      className="py-16 lg:py-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--primary)" }}
    >
      {/* Subtle gold glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <p
            className="font-mono text-xs tracking-[0.1em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            60-Second Fence Finder
          </p>
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
          >
            Not Sure Which Fence Is Right for You?
          </h2>
          <p
            className="font-body text-base mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Dogs, kids, pools, privacy — every yard is different. Answer 4 quick
            questions and we'll match you to the right fence type and material for
            your specific situation.
          </p>
        </FadeIn>

        {/* Step pills */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex items-center gap-3">
                <div
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.25)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                    style={{ background: "var(--accent)", color: "var(--primary)" }}
                  >
                    {step.n}
                  </span>
                  {step.label}
                </div>
                {i < STEPS.length - 1 && (
                  <span className="hidden sm:block text-white/20 text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-body font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "var(--accent)",
              color: "var(--primary)",
              boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
            }}
          >
            Take the Free Fence Quiz →
          </Link>
          <p className="mt-3 font-body text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            Takes 60 seconds · No signup required
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
