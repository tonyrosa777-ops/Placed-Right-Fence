"use client";
// Source: design-system.md §3 (type scale), §4 (spacing), §5 (buttons)
// market-intelligence.md §2 (Sarah Pelletier persona — safety, trust, no-ghost fear)
// Copy from /data/site.ts — hero object

import { motion } from "framer-motion";
import { hero } from "@/data/site";
import Button from "@/components/ui/Button";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: EASE },
});

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)", paddingTop: "72px" }}
    >
      {/* Subtle warm texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(196,112,75,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <motion.p {...up(0)} className="eyebrow text-text-muted mb-5">
              {hero.eyebrow}
            </motion.p>

            {/* H1 headline — DM Serif Display */}
            <motion.h1
              {...up(0.1)}
              className="font-display leading-[1.08] text-text-primary mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
            >
              {hero.headline.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...up(0.2)}
              className="font-body text-[1.0625rem] lg:text-lg text-text-secondary leading-relaxed mb-9"
              style={{ maxWidth: "520px" }}
            >
              {hero.subheadline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...up(0.3)}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button href={hero.primaryCta.href} variant="primary" size="lg">
                {hero.primaryCta.label} →
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              {...up(0.4)}
              className="flex flex-wrap gap-x-5 gap-y-2.5"
            >
              {hero.trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <span
                    className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    ✓
                  </span>
                  <span className="font-body text-sm text-text-secondary">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Hero image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="hidden lg:block relative"
          >
            {/* Image container — aspect 3:4, warm placeholder until fal.ai */}
            <div
              className="relative rounded-2xl overflow-hidden w-full"
              style={{ aspectRatio: "3/4" }}
            >
              {/* TODO Phase 4: swap this div for <Image src="/gallery/hero.jpg" ...> (fal.ai generated) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #EDE8DF 0%, #D9CFC0 40%, #C8B89A 100%)",
                }}
              />
              {/* Decorative fence-plank lines */}
              <div className="absolute inset-0 opacity-10">
                {[20, 35, 50, 65, 80].map((pct) => (
                  <div
                    key={pct}
                    className="absolute top-0 bottom-0 w-px"
                    style={{
                      left: `${pct}%`,
                      backgroundColor: "var(--primary)",
                    }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="eyebrow text-text-muted text-[11px]">Photo · Phase 4</p>
              </div>
            </div>

            {/* Floating response-time card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute -bottom-5 -left-8 bg-white rounded-xl px-5 py-4 shadow-[0_8px_32px_rgba(27,54,93,0.12)]"
            >
              <p className="eyebrow text-[10px] text-text-muted mb-1">Response Guarantee</p>
              <p className="font-body font-semibold text-text-primary text-sm">
                Free estimate within 72 hrs
              </p>
            </motion.div>

            {/* Floating insured badge */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.4 }}
              className="absolute top-8 -right-6 bg-white rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(27,54,93,0.10)]"
            >
              <p className="eyebrow text-[10px] text-text-muted mb-0.5">Trust</p>
              <p className="font-body font-semibold text-text-primary text-sm">Fully Insured</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--bg-base))",
        }}
      />
    </section>
  );
}
