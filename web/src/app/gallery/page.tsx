// Source: market-intelligence.md §5 Gap 3 (photo proof gap — zero competitors have real photos)
// Gallery page — fal.ai generated images in /public/gallery/

import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import GalleryGrid from "./GalleryGrid";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Project Gallery — NH Fence Installation Photos",
  description:
    "See Placed Right Fence installations across Southern NH and the Seacoast. Wood privacy fences, vinyl, aluminum, chain link, and repair jobs — all installed below the NH frost line.",
  openGraph: {
    title: "Project Gallery | Placed Right Fence Co. LLC",
    description:
      "Real NH fence installations — wood, vinyl, aluminum, chain link. Southern NH and Seacoast.",
    url: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <div className="pt-[100px]">

      {/* Page Hero */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--bg-elevated)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow text-text-muted mb-3">Our Work</p>
            <h1
              className="font-display text-text-primary mb-5"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}
            >
              Built Across Southern NH.
            </h1>
            <p className="font-body text-text-secondary text-lg leading-relaxed">
              Every project installed below the 48-inch frost line. Every estimate in writing. Every fence exactly what we quoted.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Interactive filter bar + grid */}
      <GalleryGrid />

      {/* Bottom CTA */}
      <section className="py-16" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
            >
              Want Your Yard to Look Like This?
            </h2>
            <p
              className="font-body text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Free on-site estimate. Written quote. No pressure.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get Your Free Estimate →
            </Button>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
