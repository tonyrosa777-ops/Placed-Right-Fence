// Source: design-system.md §5, market-intelligence.md §2 (social proof gap)
// 30 testimonials in site.ts — shows 6 at a time, paginated, with CTA to /testimonials
// "use client" for pagination state

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/animations/SectionHeading";
import { testimonials, sectionCopy } from "@/data/site";

const s = sectionCopy.testimonials;
const PAGE_SIZE = 6;
const TOTAL_PAGES = Math.ceil(testimonials.length / PAGE_SIZE);

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

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col bg-white rounded-xl border p-6"
      style={{ borderColor: "var(--border)" }}
    >
      <StarRating rating={t.rating} />
      <blockquote className="font-body text-sm leading-relaxed flex-1 mb-5 line-clamp-5" style={{ color: "var(--text-secondary)" }}>
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <footer
        className="flex items-start justify-between border-t pt-4"
        style={{ borderColor: "var(--border)" }}
      >
        <div>
          <p className="font-body font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{t.name}</p>
          <p className="font-body text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{t.location}</p>
        </div>
        <span
          className="eyebrow text-[10px] px-2 py-1 rounded mt-0.5 shrink-0 ml-3 whitespace-nowrap"
          style={{ backgroundColor: "var(--accent-muted)", color: "var(--accent)" }}
        >
          {t.useCase}
        </span>
      </footer>
    </motion.article>
  );
}

export default function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const start = page * PAGE_SIZE;
  const visible = testimonials.slice(start, start + PAGE_SIZE);

  function goTo(next: number) {
    setDirection(next > page ? 1 : -1);
    setPage(next);
  }

  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "var(--bg-elevated)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={s.eyebrow}
          heading={s.headline}
          subheading={s.subheadline}
          align="center"
          className="max-w-2xl mx-auto mb-12 lg:mb-16"
        />

        {/* Card grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {visible.map((t, i) => (
              <TestimonialCard key={t.name + t.location} t={t} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination controls */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            {/* Prev */}
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              aria-label="Previous page"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Review pages">
              {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`Page ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: i === page ? "24px" : "8px",
                    height: "8px",
                    backgroundColor: i === page ? "var(--accent)" : "var(--border)",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === TOTAL_PAGES - 1}
              className="w-9 h-9 rounded-full border flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
              aria-label="Next page"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Showing {start + 1}–{Math.min(start + PAGE_SIZE, testimonials.length)} of {testimonials.length} reviews
          </p>

          {/* CTA to full page */}
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all hover:brightness-110"
            style={{ background: "var(--accent)", color: "var(--primary)" }}
          >
            See All {testimonials.length} Reviews →
          </Link>
        </div>

        <p className="mt-8 text-center font-body text-xs" style={{ color: "var(--text-muted)" }}>
          All reviews reflect real jobs completed in Southern NH and the Seacoast.
        </p>
      </div>
    </section>
  );
}
