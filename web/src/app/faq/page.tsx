// Source: market-intelligence.md §2 buying blockers, §5 Gap 5 (content SEO)
// FAQ page — addresses 8 highest-barrier buying objections
// Copy: /data/site.ts → faq

import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import FAQAccordion from "@/components/sections/FAQAccordion";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ — Fence Installation & Repair Questions Answered",
  description:
    "How much does a fence cost in NH? How quickly can you come out? Will it survive a New Hampshire winter? Honest answers to every question before you call.",
  openGraph: {
    title: "FAQ | Placed Right Fence Co. LLC",
    description:
      "Answers to the most common fence installation questions for Southern NH homeowners. Cost, materials, frost line, permits, deposits.",
    url: `${siteConfig.url}/faq`,
  },
};

export default function FAQPage() {
  return (
    <div className="pt-[100px]">

      {/* Page Hero */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--bg-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow text-text-muted mb-3">Common Questions</p>
            <h1
              className="font-display text-text-primary mb-5"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}
            >
              Everything You Want to Know Before You Call.
            </h1>
            <p className="font-body text-text-secondary text-lg leading-relaxed">
              We get the same questions before every job. Here are honest answers — no sales fluff.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ accordion */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
        </div>
      </section>

    </div>
  );
}
