"use client";
// Simple contact form — name / email / phone / message
// Alternative to the multi-step estimate form for people who just want to ask a question
// Form delivery: Resend via /api/contact (source: "message")

import { useState } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY: FormData = { name: "", email: "", phone: "", message: "" };

export default function ContactMessageForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "message",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us or try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: "var(--accent-muted)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth={2} className="w-7 h-7">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          className="font-display text-text-primary mb-3"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.15 }}
        >
          Message Sent. Thank You.
        </h3>
        <p className="font-body text-text-secondary max-w-md mx-auto mb-6">
          We read every message and reply the same day. If it's urgent, a quick call is always fastest.
        </p>
        <Button
          href="/"
          variant="secondary"
          size="sm"
        >
          Back to Home
        </Button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border bg-white px-4 py-3 font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 transition";
  const inputStyle = { borderColor: "var(--border)" };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div>
        <label htmlFor="msg-name" className="block font-body text-sm font-semibold text-text-primary mb-1.5">
          Full Name
        </label>
        <input
          id="msg-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
          style={inputStyle}
          placeholder="Jane Doe"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="msg-email" className="block font-body text-sm font-semibold text-text-primary mb-1.5">
            Email
          </label>
          <input
            id="msg-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            style={inputStyle}
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label htmlFor="msg-phone" className="block font-body text-sm font-semibold text-text-primary mb-1.5">
            Phone <span className="font-normal text-text-muted">(optional)</span>
          </label>
          <input
            id="msg-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            style={inputStyle}
            placeholder="(603) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="msg-message" className="block font-body text-sm font-semibold text-text-primary mb-1.5">
          Message
        </label>
        <textarea
          id="msg-message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass}
          style={inputStyle}
          placeholder="Tell us what you're thinking about — a question, a quote check, or anything fence-related."
        />
      </div>

      {error && (
        <p className="font-body text-sm" style={{ color: "#b91c1c" }}>
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitting}
        className="w-full justify-center"
      >
        {submitting ? "Sending…" : "Send Message"}
      </Button>

      <p className="font-body text-xs text-text-muted text-center">
        We reply the same day. Prefer to talk? Call or text us anytime.
      </p>
    </form>
  );
}
