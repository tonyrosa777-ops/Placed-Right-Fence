// Gallery Teaser — homepage section
// Shows fence type categories as a visual grid → drives to /gallery
// Source: market-intelligence.md §5 Gap 5 (gallery converts — show your work)

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/animations/SectionHeading";
import Button from "@/components/ui/Button";

const GALLERY_TYPES = [
  {
    label: "Wood Privacy",
    detail: "Cedar board-on-board. Classic NH.",
    accent: "#8B6914",
    bg: "#F9F5EB",
    icon: "🪵",
  },
  {
    label: "Vinyl Fencing",
    detail: "Clean, zero-maintenance, lasts decades.",
    accent: "#4A7C59",
    bg: "#EFF7F2",
    icon: "🏡",
  },
  {
    label: "Aluminum",
    detail: "Ornamental. Pool-code ready.",
    accent: "#3D5A80",
    bg: "#EEF3F8",
    icon: "⚙️",
  },
  {
    label: "Chain Link",
    detail: "Pet containment that works.",
    accent: "#666",
    bg: "#F5F5F5",
    icon: "🔗",
  },
  {
    label: "Pool Fencing",
    detail: "NH code compliant. Passes first review.",
    accent: "#1A6B8A",
    bg: "#EAF4F9",
    icon: "🏊",
  },
  {
    label: "Fence Repairs",
    detail: "Storm damage? Post replacement. Fixed right.",
    accent: "#8B4513",
    bg: "#FBF2EC",
    icon: "🔧",
  },
];

export default function GalleryTeaser() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Our Work"
          heading="Built to Last Through Every NH Winter."
          subheading="Real installations across Southern NH — wood, vinyl, aluminum, and chain link. Every post below the frost line."
          align="center"
          className="mb-12 max-w-2xl mx-auto"
        />

        {/* Type grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {GALLERY_TYPES.map((type, i) => (
            <FadeIn key={type.label} delay={i * 0.06} direction="up">
              <Link
                href={`/gallery?type=${encodeURIComponent(type.label.toLowerCase().replace(" ", "-"))}`}
                className="group relative flex flex-col justify-between rounded-2xl p-6 border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 overflow-hidden"
                style={{ backgroundColor: type.bg, borderColor: "var(--border)" }}
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: type.accent }}
                />
                <span className="text-4xl mb-4 block">{type.icon}</span>
                <div>
                  <p
                    className="font-display font-semibold text-base mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {type.label}
                  </p>
                  <p className="font-body text-xs leading-snug" style={{ color: "var(--text-muted)" }}>
                    {type.detail}
                  </p>
                </div>
                <span
                  className="mt-4 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  style={{ color: type.accent }}
                >
                  Browse photos →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <Button href="/gallery" variant="primary" size="lg">
            View Full Gallery →
          </Button>
        </FadeIn>

      </div>
    </section>
  );
}
