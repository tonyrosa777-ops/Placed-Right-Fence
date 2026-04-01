// Source: market-intelligence.md §5 Gap 3 (photo proof gap — zero competitors have real photos)
// Gallery page — uses placeholder grid until fal.ai generated images are produced (Phase 4)
// When fal.ai images land: replace placeholder divs with <Image> components

import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { services, siteConfig } from "@/data/site";

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

// Gallery data — replace src with real paths when fal.ai assets land
const galleryItems = [
  { id: 1, type: "wood", label: "Cedar Privacy Fence", location: "Bedford, NH", aspectClass: "aspect-[4/3]" },
  { id: 2, type: "vinyl", label: "White Vinyl Privacy", location: "Nashua, NH", aspectClass: "aspect-square" },
  { id: 3, type: "aluminum", label: "Ornamental Aluminum", location: "Portsmouth, NH", aspectClass: "aspect-[4/3]" },
  { id: 4, type: "chain-link", label: "Galvanized Chain Link", location: "Manchester, NH", aspectClass: "aspect-[4/3]" },
  { id: 5, type: "wood", label: "Dog-Ear Privacy Fence", location: "Merrimack, NH", aspectClass: "aspect-square" },
  { id: 6, type: "vinyl", label: "Tan Vinyl with Gate", location: "Hudson, NH", aspectClass: "aspect-[4/3]" },
  { id: 7, type: "aluminum", label: "Pool Code Aluminum", location: "Exeter, NH", aspectClass: "aspect-[4/3]" },
  { id: 8, type: "wood", label: "Pressure-Treated Posts", location: "Londonderry, NH", aspectClass: "aspect-square" },
  { id: 9, type: "repair", label: "Storm Damage Repair", location: "Dover, NH", aspectClass: "aspect-[4/3]" },
] as const;

const SERVICE_FILTERS = [
  { value: "all", label: "All Projects" },
  { value: "wood", label: "Wood" },
  { value: "vinyl", label: "Vinyl" },
  { value: "aluminum", label: "Aluminum" },
  { value: "chain-link", label: "Chain Link" },
  { value: "repair", label: "Repair" },
] as const;

// Warm placeholder colors per fence type
const PALETTE: Record<string, string> = {
  wood: "linear-gradient(135deg, #C4704B22 0%, #F5F0E8 60%, #C4704B11 100%)",
  vinyl: "linear-gradient(135deg, #1B365D11 0%, #EDE8DF 60%, #1B365D22 100%)",
  aluminum: "linear-gradient(135deg, #6B7A8D22 0%, #F0EDE6 60%, #6B7A8D11 100%)",
  "chain-link": "linear-gradient(135deg, #8A7A6022 0%, #EDE8DF 60%, #8A7A6011 100%)",
  repair: "linear-gradient(135deg, #C4704B15 0%, #F5F0E8 60%, #C4704B22 100%)",
};

function GalleryCard({
  item,
}: {
  item: (typeof galleryItems)[number];
}) {
  const serviceMatch = services.find((s) => s.id === item.type);
  return (
    <FadeIn direction="up">
      <div
        className="rounded-xl overflow-hidden border group cursor-pointer transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:border-accent"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Image placeholder */}
        <div
          className={`${item.aspectClass} relative overflow-hidden`}
          style={{ background: PALETTE[item.type] }}
        >
          {/* Fence icon */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
            <span className="text-3xl opacity-40">{serviceMatch?.icon ?? "🏗️"}</span>
            <p
              className="eyebrow text-[10px] text-center opacity-50"
              style={{ color: "var(--primary)" }}
            >
              Photo coming soon
            </p>
          </div>
          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ background: "linear-gradient(to top, rgba(27,54,93,0.7) 0%, transparent 60%)" }}
          >
            <div>
              <p className="font-body font-semibold text-sm text-white">{item.label}</p>
              <p className="eyebrow text-[10px] text-white/70 mt-0.5">{item.location}</p>
            </div>
          </div>
        </div>
        {/* Card footer */}
        <div className="p-4 bg-white">
          <p className="font-body font-semibold text-sm text-text-primary">{item.label}</p>
          <p className="font-body text-xs text-text-muted mt-0.5">{item.location}</p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function GalleryPage() {
  return (
    <div className="pt-[72px]">

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

      {/* Filter bar */}
      <section
        className="py-6 border-b sticky top-[72px] z-30 bg-white"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {SERVICE_FILTERS.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className="eyebrow text-[11px] px-4 py-2 rounded-full border whitespace-nowrap transition-all duration-150 cursor-pointer shrink-0"
                style={{
                  borderColor: filter.value === "all" ? "var(--accent)" : "var(--border)",
                  backgroundColor: filter.value === "all" ? "var(--accent-muted)" : "transparent",
                  color: filter.value === "all" ? "var(--accent)" : "var(--text-muted)",
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>

          {/* Photo disclaimer */}
          <FadeIn className="mt-10 text-center" delay={0.1}>
            <p className="font-body text-xs text-text-muted max-w-sm mx-auto">
              Client photos from completed Southern NH installs being added weekly.
              Follow{" "}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors duration-150 hover:text-accent"
                style={{ color: "var(--text-secondary)" }}
              >
                {siteConfig.social.instagramHandle}
              </a>
              {" "}for the latest.
            </p>
          </FadeIn>
        </div>
      </section>

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
