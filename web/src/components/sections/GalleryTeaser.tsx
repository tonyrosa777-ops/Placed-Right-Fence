// Gallery Teaser — homepage section
// 3 hero-quality photos (wood, vinyl, aluminum) → drives to /gallery

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/animations/SectionHeading";
import Button from "@/components/ui/Button";

const GALLERY_PREVIEWS = [
  {
    src: "/images/gallery/wood-privacy.jpg",
    label: "Cedar Wood Privacy",
    detail: "Board-on-board. Built for NH winters.",
  },
  {
    src: "/images/gallery/vinyl-privacy.jpg",
    label: "Vinyl Privacy",
    detail: "Zero maintenance. Decades of clean.",
  },
  {
    src: "/images/gallery/aluminum-ornamental.jpg",
    label: "Ornamental Aluminum",
    detail: "Elegant. Pool-code ready.",
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
          subheading="Real installations across Southern NH — every post below the frost line."
          align="center"
          className="mb-12 max-w-2xl mx-auto"
        />

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {GALLERY_PREVIEWS.map((item, i) => (
            <FadeIn key={item.src} delay={i * 0.08} direction="up">
              <Link
                href="/gallery"
                className="group relative block rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Photo */}
                <div className="relative w-full h-64 lg:h-72 bg-[#1a1a1a]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display text-white text-base font-semibold leading-tight mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {item.detail}
                  </p>
                </div>

                {/* Hover arrow */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0"
                  style={{ background: "var(--accent)", color: "var(--primary)" }}
                >
                  <svg viewBox="0 0 12 12" fill="none" className="w-3.5 h-3.5">
                    <path d="M2 10 L10 2 M4 2 H10 V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
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
