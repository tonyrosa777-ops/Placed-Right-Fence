"use client";
// Source: website-build-template.md §Hero — text-based, animated
// Pattern: canvas particles + breathing orbs + staggered word reveal
// No video, no photo — pure typography driven by brand identity

import { motion } from "framer-motion";
import { hero } from "@/data/site";
import Button from "@/components/ui/Button";
import ForgeCanvas from "@/components/animations/ForgeCanvas";

const EASE = [0.25, 0.1, 0.25, 1] as const;

// ── Word-by-word headline reveal ─────────────────────────────────────────────
function WordReveal({
  text,
  startDelay = 0,
  stagger = 0.08,
  className = "",
}: {
  text: string;
  startDelay?: number;
  stagger?: number;
  className?: string;
}) {
  const lines = text.split("\n");
  let wordIndex = 0;

  return (
    <span className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word) => {
            const delay = startDelay + wordIndex++ * stagger;
            return (
              <motion.span
                key={`${li}-${word}-${delay}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay, ease: EASE }}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

// ── Fade up helper ────────────────────────────────────────────────────────────
const up = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function HeroSection() {
  // Headline word count → derive CTA delays
  const headlineWords = hero.headline.replace(/\n/g, " ").split(" ").length;
  const headlineEndDelay = 0.15 + headlineWords * 0.08; // ~0.7s for 7 words
  const subDelay = headlineEndDelay + 0.1;
  const ctaDelay = subDelay + 0.3;

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0D0D0D", paddingTop: "72px" }}
    >

      {/* ── Breathing orbs — ambient gold glow ─────────────────────────── */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* ── The Forge — canvas 2D fence-forging animation ─────────────── */}
      <ForgeCanvas />

      {/* ── Subtle center vignette — focuses eye on content ───────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-20 lg:pb-28">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            {...up(0)}
            className="eyebrow mb-5 tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            {hero.eyebrow}
          </motion.p>

          {/* H1 — word-by-word reveal */}
          <h1
            className="font-display text-white leading-[1.06] mb-6"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
          >
            <WordReveal text={hero.headline} startDelay={0.15} stagger={0.08} />
          </h1>

          {/* Gold accent rule — appears after headline */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: headlineEndDelay, ease: EASE }}
            className="h-px w-24 mb-6"
            style={{ backgroundColor: "var(--accent)" }}
          />

          {/* Subheadline */}
          <motion.p
            {...up(subDelay)}
            className="font-body text-lg lg:text-xl leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.65)", maxWidth: "540px" }}
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...up(ctaDelay)}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button href={hero.primaryCta.href} variant="primary" size="lg" className="cta-pulse">
              {hero.primaryCta.label} →
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              size="lg"
              className="border-white/25 text-white hover:bg-white/8 hover:border-white/50"
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>


        </div>
      </div>

      {/* ── Bottom fade into ServicesSection ───────────────────────────── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg-elevated))" }}
      />
    </section>
  );
}
