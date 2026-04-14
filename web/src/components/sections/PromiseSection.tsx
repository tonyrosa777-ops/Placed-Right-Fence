// Client-confirmed 2026-04-14: 1% of every completed install donated to an animal shelter of the homeowner's choice.
// Copy: /data/site.ts → promise

import FadeIn from "@/components/animations/FadeIn";
import { promise } from "@/data/site";

export default function PromiseSection() {
  return (
    <section
      className="py-16 lg:py-20 border-t"
      style={{
        backgroundColor: "var(--bg-base)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          {/* Gold heart + black paw mark */}
          <div className="mb-6 flex items-center justify-center gap-2" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              className="w-9 h-9"
              fill="var(--accent)"
              stroke="var(--primary)"
              strokeWidth={1.2}
            >
              <path d="M12 21s-7.5-4.7-10-9.4C.3 8 2.4 4 6.2 4c2 0 3.5 1 4.8 2.6h2C14.3 5 15.8 4 17.8 4c3.8 0 5.9 4 4.2 7.6C19.5 16.3 12 21 12 21z" />
            </svg>
            <svg viewBox="0 0 32 32" className="w-8 h-8" fill="var(--primary)" aria-hidden="true">
              <ellipse cx="10" cy="10" rx="2.4" ry="3.2" />
              <ellipse cx="16" cy="7.5" rx="2.4" ry="3.2" />
              <ellipse cx="22" cy="10" rx="2.4" ry="3.2" />
              <ellipse cx="6" cy="16" rx="2" ry="2.6" />
              <ellipse cx="26" cy="16" rx="2" ry="2.6" />
              <path d="M16 14c-4 0-7 3.2-7 6.4 0 2.4 1.9 4 4.2 4 1.3 0 1.9-.6 2.8-.6s1.5.6 2.8.6c2.3 0 4.2-1.6 4.2-4 0-3.2-3-6.4-7-6.4z" />
            </svg>
          </div>

          <p
            className="eyebrow mb-3"
            style={{ color: "var(--accent)" }}
          >
            {promise.eyebrow}
          </p>
          <h2
            className="font-display mb-5"
            style={{
              color: "var(--text-primary)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.15,
            }}
          >
            {promise.headline}
          </h2>
          <p
            className="font-body leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}
          >
            {promise.body}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
