"use client";
// Multi-step estimate form — 3 steps: fence type → project details → contact info
// Source: market-intelligence.md §5 Gap 4 (visual fence-type selector)
// Form delivery: Web3Forms (free, no backend) — set WEB3FORMS_KEY in .env.local
// Placeholder CTA Rule compliance: fully interactive with success state

import { useState } from "react";
import Button from "@/components/ui/Button";
import { services } from "@/data/site";

type FenceType = (typeof services)[number]["id"];

interface FormData {
  fenceType: FenceType | "";
  linearFeet: string;
  timeline: string;
  notes: string;
  name: string;
  phone: string;
  email: string;
  address: string;
}

const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-month", label: "Within 1 month" },
  { value: "2-3-months", label: "2–3 months" },
  { value: "planning", label: "Just planning ahead" },
];

const STEP_LABELS = ["Fence Type", "Project Details", "Your Info"];

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {STEP_LABELS.map((label, i) => {
        const idx = i + 1;
        const isActive = idx === step;
        const isDone = idx < step;
        return (
          <div key={label} className="flex items-center gap-2 flex-1 last:flex-none">
            <div className="flex items-center gap-1.5 shrink-0">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-200"
                style={{
                  backgroundColor: isDone || isActive ? "var(--accent)" : "var(--bg-elevated)",
                  color: isDone || isActive ? "white" : "var(--text-muted)",
                  border: isActive ? "2px solid var(--accent)" : "none",
                }}
              >
                {isDone ? (
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                    <polyline points="10 3 5 9 2 6" />
                  </svg>
                ) : (
                  idx
                )}
              </div>
              <span
                className="eyebrow text-[10px] hidden sm:block"
                style={{ color: isActive ? "var(--accent)" : "var(--text-muted)" }}
              >
                {label}
              </span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: isDone ? "var(--accent)" : "var(--border)" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Step 1: Fence Type ─────────────────────────────────────────────────────────

function Step1({ value, onChange }: { value: FenceType | ""; onChange: (v: FenceType) => void }) {
  return (
    <div>
      <h3 className="font-body font-semibold text-text-primary text-lg mb-1">
        What type of fence are you looking for?
      </h3>
      <p className="font-body text-sm text-text-secondary mb-6">Select the option that best fits what you have in mind.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.filter((s) => !s.comingSoon).map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => onChange(service.id as FenceType)}
            className="flex items-start gap-3 rounded-xl border p-4 text-left transition-all duration-150 cursor-pointer"
            style={{
              borderColor: value === service.id ? "var(--accent)" : "var(--border)",
              backgroundColor: value === service.id ? "var(--accent-muted)" : "white",
              outline: "none",
            }}
          >
            <span className="text-2xl shrink-0 mt-0.5">{service.icon}</span>
            <div>
              <p
                className="font-body font-semibold text-sm"
                style={{ color: value === service.id ? "var(--accent)" : "var(--text-primary)" }}
              >
                {service.name}
              </p>
              <p className="font-body text-xs text-text-muted leading-snug mt-0.5">
                {service.tagline}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Step 2: Project Details ────────────────────────────────────────────────────

function Step2({
  data,
  onChange,
}: {
  data: Pick<FormData, "linearFeet" | "timeline" | "notes">;
  onChange: (key: keyof FormData, value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-body font-semibold text-text-primary text-lg mb-1">
          Tell us about your project.
        </h3>
        <p className="font-body text-sm text-text-secondary mb-6">
          Don't worry if you don't know exact numbers — we'll figure that out on-site.
        </p>
      </div>

      {/* Linear footage */}
      <div>
        <label className="eyebrow text-[10px] text-text-muted block mb-2" htmlFor="linearFeet">
          Approximate linear footage (optional)
        </label>
        <input
          id="linearFeet"
          type="text"
          placeholder="e.g. 150 feet, or 'not sure'"
          value={data.linearFeet}
          onChange={(e) => onChange("linearFeet", e.target.value)}
          className="w-full rounded-lg border px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-150 focus:border-accent"
          style={{ borderColor: "var(--border)", backgroundColor: "white" }}
        />
      </div>

      {/* Timeline */}
      <div>
        <label className="eyebrow text-[10px] text-text-muted block mb-2">
          When do you want this done?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {TIMELINE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange("timeline", opt.value)}
              className="rounded-lg border px-3 py-2.5 font-body text-sm text-left transition-all duration-150 cursor-pointer"
              style={{
                borderColor: data.timeline === opt.value ? "var(--accent)" : "var(--border)",
                backgroundColor: data.timeline === opt.value ? "var(--accent-muted)" : "white",
                color: data.timeline === opt.value ? "var(--accent)" : "var(--text-secondary)",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="eyebrow text-[10px] text-text-muted block mb-2" htmlFor="notes">
          Anything else we should know? (optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          placeholder="e.g. sloped yard, rocky ground, existing fence to remove, pool compliance needed..."
          value={data.notes}
          onChange={(e) => onChange("notes", e.target.value)}
          className="w-full rounded-lg border px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-150 focus:border-accent resize-none"
          style={{ borderColor: "var(--border)", backgroundColor: "white" }}
        />
      </div>
    </div>
  );
}

// ── Step 3: Contact Info ───────────────────────────────────────────────────────

function Step3({
  data,
  onChange,
}: {
  data: Pick<FormData, "name" | "phone" | "email" | "address">;
  onChange: (key: keyof FormData, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="font-body font-semibold text-text-primary text-lg mb-1">
          How do we reach you?
        </h3>
        <p className="font-body text-sm text-text-secondary mb-6">
          We'll confirm your estimate appointment within a few hours.
        </p>
      </div>

      <div>
        <label className="eyebrow text-[10px] text-text-muted block mb-2" htmlFor="name">
          Your name *
        </label>
        <input
          id="name"
          type="text"
          placeholder="First and last name"
          required
          value={data.name}
          onChange={(e) => onChange("name", e.target.value)}
          className="w-full rounded-lg border px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-150 focus:border-accent"
          style={{ borderColor: "var(--border)", backgroundColor: "white" }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="eyebrow text-[10px] text-text-muted block mb-2" htmlFor="phone">
            Phone number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(603) 555-0100"
            required
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className="w-full rounded-lg border px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-150 focus:border-accent"
            style={{ borderColor: "var(--border)", backgroundColor: "white" }}
          />
        </div>
        <div>
          <label className="eyebrow text-[10px] text-text-muted block mb-2" htmlFor="email">
            Email address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="w-full rounded-lg border px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-150 focus:border-accent"
            style={{ borderColor: "var(--border)", backgroundColor: "white" }}
          />
        </div>
      </div>

      <div>
        <label className="eyebrow text-[10px] text-text-muted block mb-2" htmlFor="address">
          Property address *
        </label>
        <input
          id="address"
          type="text"
          placeholder="123 Main St, Nashua, NH"
          required
          value={data.address}
          onChange={(e) => onChange("address", e.target.value)}
          className="w-full rounded-lg border px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-150 focus:border-accent"
          style={{ borderColor: "var(--border)", backgroundColor: "white" }}
        />
        <p className="font-body text-xs text-text-muted mt-1.5">
          We need this to come out and give you an accurate on-site estimate.
        </p>
      </div>
    </div>
  );
}

// ── Success State ──────────────────────────────────────────────────────────────

function SuccessState({ name }: { name: string }) {
  return (
    <div className="text-center py-8">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{ backgroundColor: "var(--accent-muted)" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={2} className="w-8 h-8">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="font-display text-text-primary text-2xl mb-3">
        You're all set, {name.split(" ")[0]}.
      </h3>
      <p className="font-body text-text-secondary text-base mb-2">
        We received your request and we'll be in touch today.
      </p>
      <p className="font-body text-sm text-text-muted max-w-sm mx-auto">
        Most estimate requests get a response within a few hours. You'll hear from us via phone and email to confirm your on-site appointment.
      </p>
      <div
        className="mt-8 rounded-xl border p-4 inline-block"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
      >
        <p className="eyebrow text-[10px] text-text-muted mb-1">Response Guarantee</p>
        <p className="font-body font-semibold text-sm text-text-primary">
          Free on-site estimate within 72 hours
        </p>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function EstimateForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<FormData>({
    fenceType: "",
    linearFeet: "",
    timeline: "",
    notes: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  function handleChange(key: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function canAdvance() {
    if (step === 1) return formData.fenceType !== "";
    if (step === 2) return formData.timeline !== "";
    if (step === 3) return formData.name && formData.phone && formData.email && formData.address;
    return false;
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError("");
    try {
      const selectedService = services.find((s) => s.id === formData.fenceType);
      const selectedTimeline = TIMELINE_OPTIONS.find((t) => t.value === formData.timeline);
      const body = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "DEMO_KEY",
        subject: `New Fence Estimate Request — ${selectedService?.name ?? formData.fenceType}`,
        from_name: formData.name,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        fence_type: selectedService?.name ?? formData.fenceType,
        linear_feet: formData.linearFeet || "Not provided",
        timeline: selectedTimeline?.label ?? formData.timeline,
        notes: formData.notes || "None",
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us directly at (978) 207-4077.");
      }
    } catch {
      setError("Something went wrong. Please call us directly at (978) 207-4077.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return <SuccessState name={formData.name} />;
  }

  return (
    <div>
      <ProgressBar step={step} />

      <div className="min-h-[380px]">
        {step === 1 && (
          <Step1
            value={formData.fenceType}
            onChange={(v) => handleChange("fenceType", v)}
          />
        )}
        {step === 2 && (
          <Step2
            data={{ linearFeet: formData.linearFeet, timeline: formData.timeline, notes: formData.notes }}
            onChange={handleChange}
          />
        )}
        {step === 3 && (
          <Step3
            data={{ name: formData.name, phone: formData.phone, email: formData.email, address: formData.address }}
            onChange={handleChange}
          />
        )}
      </div>

      {error && (
        <p className="font-body text-sm mt-3" style={{ color: "var(--accent)" }}>
          {error}
        </p>
      )}

      <div className="flex items-center justify-between mt-8 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="font-body text-sm text-text-muted hover:text-text-primary transition-colors duration-150 cursor-pointer"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <Button
            onClick={() => setStep((s) => s + 1)}
            variant="primary"
            size="md"
            disabled={!canAdvance()}
          >
            Next Step →
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            variant="primary"
            size="md"
            disabled={!canAdvance() || submitting}
          >
            {submitting ? "Sending…" : "Send My Request →"}
          </Button>
        )}
      </div>
    </div>
  );
}
