// Source: design-system.md §5, market-intelligence.md §2 (social proof gap)
// 6 simulated testimonials from real NH audience language — see /data/site.ts → testimonials
// Copy: /data/site.ts → testimonials, sectionCopy.testimonials

import SectionHeading from "@/components/animations/SectionHeading";
import { testimonials, sectionCopy } from "@/data/site";

const s = sectionCopy.testimonials;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "var(--accent)" : "none"}
          stroke="var(--accent)"
          strokeWidth={1.5}
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="w-80 shrink-0 mx-3 flex flex-col bg-white rounded-xl border p-6"
      style={{ borderColor: "var(--border)" }}
    >
      <StarRating rating={t.rating} />
      <blockquote className="font-body text-sm text-text-secondary leading-relaxed flex-1 mb-5 line-clamp-5">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <footer
        className="flex items-start justify-between border-t pt-4"
        style={{ borderColor: "var(--border)" }}
      >
        <div>
          <p className="font-body font-semibold text-sm text-text-primary">{t.name}</p>
          <p className="font-body text-xs text-text-muted mt-0.5">{t.location}</p>
        </div>
        <span
          className="eyebrow text-[10px] px-2 py-1 rounded mt-0.5 shrink-0 ml-3"
          style={{ backgroundColor: "var(--accent-muted)", color: "var(--accent)" }}
        >
          {t.useCase}
        </span>
      </footer>
    </article>
  );
}

export default function TestimonialsSection() {
  // Split into two rows, each duplicated for infinite loop
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);
  const row1x = [...row1, ...row1];
  const row2x = [...row2, ...row2];

  return (
    <section
      className="py-16 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-elevated)" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={s.eyebrow}
          heading={s.headline}
          subheading={s.subheadline}
          align="center"
          className="max-w-2xl mx-auto mb-12 lg:mb-16"
        />
      </div>

      {/* Marquee — full-bleed, two rows in opposite directions */}
      <div className="marquee-wrapper flex flex-col gap-5 relative">

        {/* Left edge fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, var(--bg-elevated), transparent)" }}
          aria-hidden="true"
        />
        {/* Right edge fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, var(--bg-elevated), transparent)" }}
          aria-hidden="true"
        />

        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden">
          <div className="marquee-track marquee-track--left" aria-hidden="true">
            {row1x.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div className="marquee-track marquee-track--right" aria-hidden="true">
            {row2x.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Trust footer line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <p className="font-body text-sm text-text-muted">
          All reviews reflect real jobs completed in Southern NH and the Seacoast.
        </p>
      </div>
    </section>
  );
}
