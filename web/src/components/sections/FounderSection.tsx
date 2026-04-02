"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { about } from "@/data/site";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function FounderSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Left: headline + story — enters from left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <p className="eyebrow text-text-muted mb-3">Our Story</p>
        <h1
          className="font-display text-text-primary mb-6"
          style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}
        >
          {about.headline}
        </h1>
        <p className="font-body text-text-secondary text-lg leading-relaxed mb-6">
          {about.subheadline}
        </p>
        <div className="space-y-4">
          {about.story.map((paragraph, i) => (
            <p key={i} className="font-body text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Right: photo placeholder — enters from right */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <div
          className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          style={{ backgroundColor: "var(--bg-base)" }}
        >
          {/* Warm photo placeholder */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-muted) 0%, var(--bg-elevated) 60%, var(--accent-muted) 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: "white" }}
            >
              👨‍👩‍👧
            </div>
            <p
              className="font-display text-center text-base italic"
              style={{ color: "var(--primary)" }}
            >
              &ldquo;We build every fence the way we&rsquo;d want our own yard done.&rdquo;
            </p>
            <p className="eyebrow text-[10px] text-text-muted">
              — Roger LaVault, Placed Right Fence
            </p>
          </div>
          {/* Trust badge overlay */}
          <div
            className="absolute bottom-4 right-4 rounded-lg px-3 py-2 flex items-center gap-2"
            style={{ backgroundColor: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={1.75} className="w-4 h-4 shrink-0">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <p className="font-body text-xs font-semibold text-text-primary">Fully Insured</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
