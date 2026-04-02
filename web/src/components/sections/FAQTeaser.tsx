// FAQ Teaser — homepage section
// 3 most common buying-blocker questions → drives to /faq
// Source: market-intelligence.md §2 (buying blockers: price, timing, frost depth)

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/animations/SectionHeading";
import { faq } from "@/data/site";

// First 3 FAQs are the highest-stakes buying blockers
const PREVIEW_FAQS = faq.slice(0, 3);

export default function FAQTeaser() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "var(--bg-elevated)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Common Questions"
          heading="Plain Answers. No Contractor Runaround."
          align="center"
          className="mb-12 max-w-xl mx-auto"
        />

        <div className="space-y-4 mb-10">
          {PREVIEW_FAQS.map((item, i) => (
            <FadeIn key={item.question} delay={i * 0.08} direction="up">
              <div
                className="rounded-2xl border p-6"
                style={{
                  backgroundColor: "var(--bg-card, white)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{ background: "var(--accent)", color: "var(--primary)" }}
                  >
                    Q
                  </span>
                  <div>
                    <h3
                      className="font-body font-semibold text-base mb-3"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.question}
                    </h3>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center" delay={0.25}>
          <p className="font-body text-sm text-text-muted mb-4">
            More questions? We've got {faq.length - 3} more answers on our FAQ page.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm border transition-all duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            See All FAQs →
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
