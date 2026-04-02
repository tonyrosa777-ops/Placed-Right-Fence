"use client";
// Source: design-system.md §3 (type scale), §4 (spacing), §5 (buttons)
// Dark hero — matches business card black + gold brand identity
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
      style={{ backgroundColor: "#0D0D0D", paddingTop: "72px" }}
    >
      {/*
        ── Video background ──────────────────────────────────────────────────
        Phase 4: Drop hero-video.mp4 (Kling AI output) into /public/images/
        and uncomment the <video> block below. The dark overlay + gradient
        above will handle legibility automatically.
        ─────────────────────────────────────────────────────────────────────
      */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      /> */}

      {/* Dark overlay — keeps text legible over video (or placeholder) */}
      <div className="pointer-events-none absolute inset-0 bg-black/50" />

      {/* Subtle gold radial glow — matches card atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 65% 50%, rgba(201,168,76,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 60%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <motion.p
              {...up(0)}
              className="eyebrow mb-5"
              style={{ color: "var(--accent)" }}
            >
              {hero.eyebrow}
            </motion.p>

            {/* H1 headline */}
            <motion.h1
              {...up(0.1)}
              className="font-display leading-[1.08] text-white mb-6"
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
              className="font-body text-[1.0625rem] lg:text-lg leading-relaxed mb-9"
              style={{ color: "rgba(255,255,255,0.65)", maxWidth: "520px" }}
            >
              {hero.subheadline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...up(0.3)} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button href={hero.primaryCta.href} variant="primary" size="lg">
                {hero.primaryCta.label} →
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
              >
                {hero.secondaryCta.label}
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div {...up(0.4)} className="flex flex-wrap gap-x-5 gap-y-2.5">
              {hero.trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <span
                    className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[#0D0D0D] text-[10px] font-bold"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    ✓
                  </span>
                  <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {badge}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Hero image placeholder ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
            className="hidden lg:block relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden w-full border"
              style={{ aspectRatio: "3/4", borderColor: "rgba(201,168,76,0.2)" }}
            >
              {/* Dark placeholder with gold glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #1A1A1A 0%, #111111 50%, #0D0D0D 100%)",
                }}
              />
              {/* Gold glow center */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(201,168,76,0.1) 0%, transparent 70%)",
                }}
              />
              {/* Decorative fence-plank lines in gold */}
              <div className="absolute inset-0 opacity-15">
                {[20, 35, 50, 65, 80].map((pct) => (
                  <div
                    key={pct}
                    className="absolute top-0 bottom-0 w-px"
                    style={{ left: `${pct}%`, backgroundColor: "var(--accent)" }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-8">
                <p className="eyebrow text-[11px] text-center" style={{ color: "rgba(201,168,76,0.4)" }}>
                  Photo · Phase 4
                </p>
              </div>
            </div>

            {/* Floating response-time card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute -bottom-5 -left-8 rounded-xl px-5 py-4 border"
              style={{
                backgroundColor: "#1A1A1A",
                borderColor: "rgba(201,168,76,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              <p className="eyebrow text-[10px] mb-1" style={{ color: "var(--accent)" }}>
                Response Guarantee
              </p>
              <p className="font-body font-semibold text-white text-sm">
                Free estimate within 72 hrs
              </p>
            </motion.div>

            {/* Floating insured badge */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85, duration: 0.4 }}
              className="absolute top-8 -right-6 rounded-xl px-4 py-3 border"
              style={{
                backgroundColor: "#1A1A1A",
                borderColor: "rgba(201,168,76,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              <p className="eyebrow text-[10px] mb-0.5" style={{ color: "var(--accent)" }}>
                Trust
              </p>
              <p className="font-body font-semibold text-white text-sm">Fully Insured</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient into next section (bg-elevated) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-elevated))",
        }}
      />
    </section>
  );
}
