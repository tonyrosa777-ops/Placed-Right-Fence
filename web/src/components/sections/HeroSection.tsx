"use client";
// Source: design-system.md §3 (type scale), §4 (spacing), §5 (buttons)
// Dark hero — full-bleed video background (hero-video.mp4) with copy overlay
// Layout: video fills 100vw/100vh, content centered in lower-left third
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
      className="relative w-full min-h-screen flex items-end overflow-hidden"
      style={{ backgroundColor: "#0D0D0D", paddingTop: "72px" }}
    >

      {/* ── Desktop (lg+): full-bleed video ──────────────────────────────── */}
      <div className="hidden lg:block absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="/images/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* ── Mobile (< lg): Ken Burns still — hero-after.jpg ──────────────── */}
      <div className="lg:hidden absolute inset-0 overflow-hidden">
        <div
          className="animate-kenburns absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-after.jpg')" }}
        />
      </div>

      {/* ── Layered overlays for legibility ───────────────────────────────── */}

      {/* Base dark scrim — takes the raw video down to usable brightness */}
      <div className="pointer-events-none absolute inset-0 bg-black/45" />

      {/* Strong bottom gradient — pulls text up from the content area */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.1) 65%, transparent 100%)",
        }}
      />

      {/* Subtle left-side gradient — adds depth behind the copy column */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Vignette edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 55%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Gold atmospheric glow — brand accent layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 30% 75%, rgba(201,168,76,0.18) 0%, transparent 70%)",
        }}
      />

      {/* ── Content — positioned in lower section, clear of video action ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.p
            {...up(0)}
            className="eyebrow mb-4"
            style={{ color: "var(--accent)" }}
          >
            {hero.eyebrow}
          </motion.p>

          {/* H1 */}
          <motion.h1
            {...up(0.1)}
            className="font-display text-white leading-[1.06] mb-5"
            style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.25rem)" }}
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
            className="font-body text-[1.0625rem] lg:text-lg leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.72)", maxWidth: "480px" }}
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div {...up(0.3)} className="flex flex-col sm:flex-row gap-3 mb-8">
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
          <motion.div
            {...up(0.4)}
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {hero.trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <span
                  className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[#0D0D0D] text-[10px] font-bold"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  ✓
                </span>
                <span
                  className="font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Bottom fade into ServicesSection (bg-elevated) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--bg-elevated))",
        }}
      />
    </section>
  );
}
