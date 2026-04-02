// FAQ Teaser — homepage section — dark background
// 3 most common buying-blocker questions → drives to /faq

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { faq } from "@/data/site";

const PREVIEW_FAQS = faq.slice(0, 3);

export default function FAQTeaser() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="text-center mb-12">
          <p
            className="font-mono text-xs tracking-[0.1em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Common Questions
          </p>
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
          >
            Plain Answers. No Contractor Runaround.
          </h2>
        </FadeIn>

        <div className="space-y-3 mb-10">
          {PREVIEW_FAQS.map((item, i) => (
            <FadeIn key={item.question} delay={i * 0.08} direction="up">
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
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
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {item.question}
                    </h3>
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.55)" }}
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
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-semibold text-sm transition-all duration-150 hover:border-[rgba(201,168,76,0.5)]"
            style={{ border: "1px solid rgba(201,168,76,0.25)", color: "var(--accent)" }}
          >
            See All {faq.length} FAQs →
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
