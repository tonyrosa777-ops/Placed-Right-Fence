"use client";
// Fence Finder Quiz — 4-question wizard + lead capture
// Architecture modeled on enchanted-madison FindYourEscapeWizard pattern:
//   questions → contact capture → personalized result screen
// Submission: Web3Forms (same key as EstimateForm) — no backend required

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site";

// ─── Question data ────────────────────────────────────────────────────────────

const TRIGGERS = [
  { id: "dog",    label: "New dog or puppy",        emoji: "🐾" },
  { id: "pool",   label: "Pool safety or code",     emoji: "🏊" },
  { id: "kids",   label: "Kids' play area",         emoji: "👶" },
  { id: "privacy",label: "Privacy from neighbors",  emoji: "🌿" },
  { id: "storm",  label: "Storm damage / repair",   emoji: "🌪️" },
  { id: "line",   label: "Property boundary",       emoji: "📐" },
];

const FENCE_TYPES = [
  { id: "wood",      label: "Wood",       sub: "Natural, warm NH look",      emoji: "🪵" },
  { id: "vinyl",     label: "Vinyl",      sub: "Low-maintenance, clean lines",emoji: "⬜" },
  { id: "aluminum",  label: "Aluminum",   sub: "Sleek, pool-grade strength",  emoji: "🔩" },
  { id: "chainlink", label: "Chain Link", sub: "Durable, budget-friendly",    emoji: "🔗" },
  { id: "unsure",    label: "Not Sure",   sub: "Help me decide",              emoji: "❓" },
];

const TIMELINES = [
  { id: "asap",    label: "ASAP",            sub: "I need this done now" },
  { id: "spring",  label: "This spring",     sub: "Planning ahead" },
  { id: "months",  label: "A few months",    sub: "No big rush" },
  { id: "looking", label: "Just researching",sub: "Early stages" },
];

const SIZES = [
  { id: "small",  label: "Small",   sub: "Under 100 linear feet" },
  { id: "medium", label: "Average", sub: "100–200 linear feet" },
  { id: "large",  label: "Large",   sub: "200+ linear feet" },
  { id: "unsure", label: "Not Sure",sub: "I'll measure at the estimate" },
];

// ─── Result logic (mirrors enchanted-madison's getResult pattern) ─────────────

type Answers = { trigger: string; fenceType: string; timeline: string; size: string };

interface Recommendation {
  headline: string;
  material: string;
  why: string;
  startingAt: string;
}

function getRecommendation(answers: Answers): Recommendation {
  // Pool safety always gets aluminum
  if (answers.trigger === "pool") {
    return {
      headline: "Pool-Grade Aluminum Fence",
      material: "Aluminum",
      why: "NH pool code requires a minimum 48-inch aluminum or steel barrier with self-latching gates. We install pool-compliant fences that pass inspection — every time.",
      startingAt: "$30/linear ft installed",
    };
  }
  // Repair requests
  if (answers.trigger === "storm") {
    return {
      headline: "Repair + Material Assessment",
      material: "Depends on existing fence",
      why: "Storm damage usually affects posts first. We'll inspect the damage on-site, let you know what can be saved, and give you a written repair vs. replace estimate.",
      startingAt: "Free on-site assessment",
    };
  }
  // Explicit fence type selected
  if (answers.fenceType === "vinyl") {
    return {
      headline: "Vinyl Privacy Fence",
      material: "Vinyl / PVC",
      why: "Vinyl needs zero staining, survives NH freeze-thaw cycles without warping, and looks clean for 20+ years. Best long-term value in the NH market.",
      startingAt: "$25/linear ft installed",
    };
  }
  if (answers.fenceType === "aluminum") {
    return {
      headline: "Aluminum Ornamental Fence",
      material: "Aluminum",
      why: "Strong, rust-proof, and permanently powder-coated. Popular for decorative boundary lines and pool compliance in Southern NH.",
      startingAt: "$30/linear ft installed",
    };
  }
  if (answers.fenceType === "chainlink") {
    return {
      headline: "Black Vinyl-Coated Chain Link",
      material: "Chain Link",
      why: "The most cost-effective perimeter solution. Modern black vinyl coating replaces the dated galvanized look and holds up well through NH winters.",
      startingAt: "$10/linear ft installed",
    };
  }
  // Dog / kids / privacy → wood or vinyl
  if (answers.trigger === "dog" || answers.trigger === "kids" || answers.trigger === "privacy") {
    if (answers.fenceType === "wood" || answers.fenceType === "unsure") {
      return {
        headline: "Cedar Board-on-Board Privacy Fence",
        material: "Cedar Wood",
        why: "Cedar is naturally rot-resistant in NH's freeze-thaw conditions. Board-on-board construction eliminates gaps at ground level — critical for dog containment. The most popular privacy fence in Southern NH.",
        startingAt: "$25/linear ft installed",
      };
    }
  }
  // Property line / general
  return {
    headline: "Cedar Board-on-Board Privacy Fence",
    material: "Cedar Wood",
    why: "For most NH homeowners, cedar board-on-board is the right balance of durability, cost, and curb appeal. We'll confirm the best material choice when we see your yard.",
    startingAt: "$25/linear ft installed",
  };
}

// ─── Framer Motion variants ───────────────────────────────────────────────────

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function OptionCard({
  emoji, label, sub, selected, onClick,
}: { emoji: string; label: string; sub?: string; selected: boolean; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className="flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-all duration-150 cursor-pointer w-full"
      style={{
        borderColor: selected ? "var(--accent)" : "var(--border)",
        background: selected ? "rgba(201,168,76,0.12)" : "var(--bg-elevated)",
      }}
    >
      <span className="text-3xl">{emoji}</span>
      <span className="font-body font-semibold text-sm" style={{ color: selected ? "var(--accent)" : "var(--text-primary)" }}>
        {label}
      </span>
      {sub && <span className="text-xs" style={{ color: "var(--text-muted)" }}>{sub}</span>}
    </motion.button>
  );
}

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = ((step - 1) / (total - 1)) * 100;
  return (
    <div className="w-full h-1 rounded-full mb-8" style={{ background: "var(--border)" }}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: "var(--accent)" }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

type Step = "q0" | "q1" | "q2" | "q3" | "contact" | "result";

const STEP_ORDER: Step[] = ["q0", "q1", "q2", "q3", "contact", "result"];

export default function QuizClient() {
  const [step, setStep] = useState<Step>("q0");
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState({ trigger: "", fenceType: "", timeline: "", size: "" });
  const [contact, setContact] = useState({ name: "", phone: "", email: "", address: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  function advance(next: Step) {
    setDirection(1);
    setStep(next);
  }

  function back() {
    const idx = STEP_ORDER.indexOf(step);
    if (idx > 0) {
      setDirection(-1);
      setStep(STEP_ORDER[idx - 1]);
    }
  }

  function stepIndex() { return STEP_ORDER.indexOf(step); }
  const totalSteps = STEP_ORDER.length;

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError("");
    try {
      const body = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "DEMO_KEY",
        subject: `Fence Finder Quiz Lead — ${recommendation.material}`,
        from_name: contact.name,
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        address: contact.address,
        quiz_trigger: answers.trigger,
        quiz_fence_type: answers.fenceType,
        quiz_timeline: answers.timeline,
        quiz_size: answers.size,
        recommendation: recommendation.headline,
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (json.success || process.env.NEXT_PUBLIC_WEB3FORMS_KEY === undefined) {
        advance("result");
      } else {
        setSubmitError(`Something went wrong. Call us: ${siteConfig.phone}`);
      }
    } catch {
      // Demo mode — advance to results anyway
      advance("result");
    } finally {
      setSubmitting(false);
    }
  }

  const contactValid = contact.name && contact.phone && contact.email && contact.address;

  return (
    <div className="min-h-screen pt-[72px]" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-xl mx-auto px-4 py-16">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="font-mono text-xs tracking-[0.08em] uppercase mb-2" style={{ color: "var(--accent)" }}>
            Fence Finder
          </p>
          <h1 className="font-display text-3xl lg:text-4xl mb-2" style={{ color: "var(--text-primary)" }}>
            {step === "result" ? `Here's your recommendation, ${contact.name.split(" ")[0]}.` : "Don't know what fence you need?"}
          </h1>
          {step !== "result" && (
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              4 quick questions — we'll point you in the right direction.
            </p>
          )}
        </div>

        {/* Progress */}
        {step !== "result" && (
          <ProgressBar step={stepIndex() + 1} total={totalSteps} />
        )}

        {/* Step content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeOut" }}
          >

            {/* Q0 — Trigger */}
            {step === "q0" && (
              <div>
                <h2 className="font-body font-semibold text-lg mb-5" style={{ color: "var(--text-primary)" }}>
                  What's bringing you here today?
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {TRIGGERS.map((t) => (
                    <OptionCard
                      key={t.id}
                      emoji={t.emoji}
                      label={t.label}
                      selected={answers.trigger === t.id}
                      onClick={() => { setAnswers((a) => ({ ...a, trigger: t.id })); advance("q1"); }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Q1 — Fence type */}
            {step === "q1" && (
              <div>
                <h2 className="font-body font-semibold text-lg mb-5" style={{ color: "var(--text-primary)" }}>
                  What type of fence are you thinking?
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {FENCE_TYPES.map((t) => (
                    <OptionCard
                      key={t.id}
                      emoji={t.emoji}
                      label={t.label}
                      sub={t.sub}
                      selected={answers.fenceType === t.id}
                      onClick={() => { setAnswers((a) => ({ ...a, fenceType: t.id })); advance("q2"); }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Q2 — Timeline */}
            {step === "q2" && (
              <div>
                <h2 className="font-body font-semibold text-lg mb-5" style={{ color: "var(--text-primary)" }}>
                  When are you looking to get started?
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {TIMELINES.map((t) => (
                    <OptionCard
                      key={t.id}
                      emoji={t.id === "asap" ? "🔥" : t.id === "spring" ? "🌱" : t.id === "months" ? "📅" : "👀"}
                      label={t.label}
                      sub={t.sub}
                      selected={answers.timeline === t.id}
                      onClick={() => { setAnswers((a) => ({ ...a, timeline: t.id })); advance("q3"); }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Q3 — Size */}
            {step === "q3" && (
              <div>
                <h2 className="font-body font-semibold text-lg mb-5" style={{ color: "var(--text-primary)" }}>
                  How much of your yard needs fencing?
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {SIZES.map((s) => (
                    <OptionCard
                      key={s.id}
                      emoji={s.id === "small" ? "📏" : s.id === "medium" ? "📐" : s.id === "large" ? "🏠" : "❓"}
                      label={s.label}
                      sub={s.sub}
                      selected={answers.size === s.id}
                      onClick={() => { setAnswers((a) => ({ ...a, size: s.id })); advance("contact"); }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Contact capture */}
            {step === "contact" && (
              <div className="space-y-4">
                <div
                  className="rounded-xl p-4 mb-6"
                  style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "var(--accent)" }}>
                    Your Recommendation Is Ready
                  </p>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                    {recommendation.headline} — starting at {recommendation.startingAt}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                    Enter your info below to see the full recommendation + book your free estimate.
                  </p>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider block mb-1.5" style={{ color: "var(--text-muted)" }}>
                    Your name *
                  </label>
                  <input
                    type="text" placeholder="First and last name" value={contact.name}
                    onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
                    style={{ borderColor: "var(--border)", background: "var(--bg-elevated)", color: "var(--text-primary)" }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider block mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Phone *
                    </label>
                    <input
                      type="tel" placeholder="(603) 555-0100" value={contact.phone}
                      onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                      className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
                      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)", color: "var(--text-primary)" }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider block mb-1.5" style={{ color: "var(--text-muted)" }}>
                      Email *
                    </label>
                    <input
                      type="email" placeholder="you@example.com" value={contact.email}
                      onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                      className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
                      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)", color: "var(--text-primary)" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider block mb-1.5" style={{ color: "var(--text-muted)" }}>
                    Property address *
                  </label>
                  <input
                    type="text" placeholder="123 Main St, Nashua, NH" value={contact.address}
                    onChange={(e) => setContact((c) => ({ ...c, address: e.target.value }))}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
                    style={{ borderColor: "var(--border)", background: "var(--bg-elevated)", color: "var(--text-primary)" }}
                  />
                </div>

                {submitError && (
                  <p className="text-sm" style={{ color: "#f87171" }}>{submitError}</p>
                )}

                <motion.button
                  type="button"
                  disabled={!contactValid || submitting}
                  onClick={handleSubmit}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-semibold text-base transition-all disabled:opacity-50"
                  style={{ background: "var(--accent)", color: "var(--primary)" }}
                >
                  {submitting ? "Sending…" : "See My Recommendation →"}
                </motion.button>
                <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  No spam. We&apos;ll only use this to confirm your free estimate appointment.
                </p>
              </div>
            )}

            {/* Result screen */}
            {step === "result" && (
              <div className="space-y-6">
                {/* Recommendation card */}
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--bg-card)", border: "2px solid var(--accent)" }}
                >
                  <p className="font-mono text-xs tracking-[0.08em] uppercase mb-2" style={{ color: "var(--accent)" }}>
                    Our Recommendation
                  </p>
                  <h2 className="font-display text-2xl mb-1" style={{ color: "var(--text-primary)" }}>
                    {recommendation.headline}
                  </h2>
                  <p className="text-sm font-medium mb-3" style={{ color: "var(--accent)" }}>
                    Starting at {recommendation.startingAt}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {recommendation.why}
                  </p>
                </div>

                {/* What happens next */}
                <div className="rounded-2xl p-6 space-y-3" style={{ background: "var(--bg-elevated)" }}>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>What happens next</p>
                  {[
                    "We'll call or text you within a few hours to confirm your free estimate appointment.",
                    "We come to your property, measure the yard, and assess the ground conditions.",
                    "You get a written estimate — the number on that paper is the number on the invoice.",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{ background: "var(--accent)", color: "var(--primary)" }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full text-center py-4 rounded-xl font-semibold text-base transition-all hover:brightness-110"
                    style={{ background: "var(--accent)", color: "var(--primary)" }}
                  >
                    Book My Free Estimate →
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="block w-full text-center py-3.5 rounded-xl font-semibold text-base border transition-all hover:border-[var(--accent)]"
                    style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
                  >
                    Call Us Directly — {siteConfig.phone}
                  </a>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* Back button */}
        {step !== "q0" && step !== "result" && (
          <button
            type="button"
            onClick={back}
            className="mt-8 text-sm transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            ← Back
          </button>
        )}
        {step === "q0" && (
          <div className="mt-8 text-center">
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Already know what you need?{" "}
              <Link href="/contact" className="underline" style={{ color: "var(--accent)" }}>
                Skip to the estimate form →
              </Link>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
