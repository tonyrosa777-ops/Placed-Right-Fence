// Required by 10DLC SMS compliance (RingCentral).
// All legal copy lives in /data/site.ts under `legal.privacy` — per CLAUDE.md line 121.
// Jen LaVault supplied the verbatim text on 2026-04-17.

import type { Metadata } from "next";
import { siteConfig, legal } from "@/data/site";
import { LegalBlockRenderer, LegalSection } from "@/components/legal/LegalRenderer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Placed Right Fence Co. LLC. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Placed Right Fence Co. LLC",
    description: "How we collect, use, and protect your personal information.",
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-[100px]">
      {/* Hero */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-white/40 mb-3">Legal</p>
          <h1
            className="font-display text-white mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Privacy Policy
          </h1>
          <p className="font-body text-sm text-white/50">
            Last updated: {legal.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20" style={{ backgroundColor: "var(--bg-base)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-container space-y-10">
            {legal.privacy.intro && (
              <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-text-secondary">
                {legal.privacy.intro.map((block, i) => (
                  <LegalBlockRenderer key={`intro-${i}`} block={block} />
                ))}
              </div>
            )}
            {legal.privacy.sections.map((section) => (
              <LegalSection key={section.title} section={section} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
