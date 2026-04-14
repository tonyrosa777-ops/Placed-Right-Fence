import type { Metadata } from "next";
import Link from "next/link";
import { testimonials, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer Reviews — Placed Right Fence Co. LLC",
  description:
    "Real reviews from Southern NH homeowners. See what families across Nashua, Manchester, Bedford, and beyond say about their fence installations and repairs.",
  openGraph: {
    title: "Customer Reviews — Placed Right Fence Co. LLC",
    description: "Real reviews from Southern NH homeowners on fence installation, repair, and pool compliance.",
    url: `${siteConfig.url}/testimonials`,
  },
};

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

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="flex flex-col rounded-xl border p-6 h-full"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
    >
      <StarRating rating={t.rating} />
      <blockquote
        className="font-body text-sm leading-relaxed flex-1 mb-5"
        style={{ color: "var(--text-secondary)" }}
      >
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <footer
        className="flex items-start justify-between border-t pt-4"
        style={{ borderColor: "var(--border)" }}
      >
        <div>
          <p className="font-body font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
            {t.name}
          </p>
          <p className="font-body text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            {t.location}
          </p>
        </div>
        <span
          className="eyebrow text-[10px] px-2 py-1 rounded mt-0.5 shrink-0 ml-3 whitespace-nowrap"
          style={{ backgroundColor: "var(--accent-muted)", color: "var(--accent)" }}
        >
          {t.useCase}
        </span>
      </footer>
    </article>
  );
}

export default function TestimonialsPage() {
  const totalRatings = testimonials.reduce((sum, t) => sum + t.rating, 0);
  const avgRating = (totalRatings / testimonials.length).toFixed(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs tracking-[0.08em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            What NH Homeowners Say
          </p>
          <h1 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-4">
            Real Jobs. Real Results.
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            {testimonials.length} verified reviews from families across Southern NH and the Seacoast —
            dog owners, pool installs, storm repairs, and first-time homeowners.
          </p>

          {/* Summary stats */}
          <div className="flex flex-wrap gap-8 mt-10">
            <div>
              <p className="font-display text-3xl text-white">{testimonials.length}</p>
              <p className="text-xs font-mono tracking-wide text-white/50 uppercase mt-1">Reviews</p>
            </div>
            <div>
              <p className="font-display text-3xl text-white">{avgRating}</p>
              <p className="text-xs font-mono tracking-wide text-white/50 uppercase mt-1">Avg Rating</p>
            </div>
            <div>
              <p className="font-display text-3xl text-white">25+</p>
              <p className="text-xs font-mono tracking-wide text-white/50 uppercase mt-1">NH Cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Review grid — all 30 */}
      <section className="py-16 lg:py-24" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <ReviewCard key={t.name + t.location} t={t} />
            ))}
          </div>

          <p className="mt-10 text-center text-sm" style={{ color: "var(--text-muted)" }}>
            All reviews reflect real jobs completed in Southern NH and the Seacoast.
            Real photos shared by clients are added to our{" "}
            <Link href="/gallery" className="underline underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>
              gallery
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--primary)] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p
            className="font-mono text-xs tracking-[0.08em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Ready to Get Started?
          </p>
          <h2 className="font-display text-3xl text-white mb-4">
            Get Your Free On-Site Estimate
          </h2>
          <p className="text-white/65 mb-8">
            We come to you within 72 hours. Written estimate before any work begins.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-sans font-semibold text-base transition-all hover:brightness-110 cta-pulse"
            style={{ background: "var(--accent)", color: "var(--primary)" }}
          >
            Get Your Free Estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
