// Source: design-system.md §5, market-intelligence.md §2 (social proof gap)
// 6 simulated testimonials from real NH audience language — see /data/site.ts → testimonials
// Copy: /data/site.ts → testimonials, sectionCopy.testimonials

import FadeIn from "@/components/animations/FadeIn";
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

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--bg-elevated)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="eyebrow text-text-muted mb-3">{s.eyebrow}</p>
          <h2
            className="font-display text-text-primary mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1.15 }}
          >
            {s.headline}
          </h2>
          <p className="font-body text-text-secondary text-lg">{s.subheadline}</p>
        </FadeIn>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.07} direction="up">
              <article
                className="flex flex-col bg-white rounded-xl border p-6 h-full"
                style={{ borderColor: "var(--border)" }}
              >
                <StarRating rating={t.rating} />

                {/* Quote */}
                <blockquote className="font-body text-sm text-text-secondary leading-relaxed flex-1 mb-5">
                  "{t.text}"
                </blockquote>

                {/* Attribution */}
                <footer className="flex items-start justify-between border-t pt-4" style={{ borderColor: "var(--border)" }}>
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
            </FadeIn>
          ))}
        </div>

        {/* Trust footer line */}
        <FadeIn className="mt-10 text-center">
          <p className="font-body text-sm text-text-muted">
            All reviews reflect real jobs completed in Southern NH and the Seacoast.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
