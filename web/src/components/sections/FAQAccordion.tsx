"use client";
// Interactive FAQ accordion — extracted from page.tsx to allow server metadata export
// Source: market-intelligence.md §2 buying blockers

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { faq, siteConfig } from "@/data/site";

function AccordionItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 0.04} direction="up">
      <div
        className="border-b last:border-b-0"
        style={{ borderColor: "var(--border)" }}
      >
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer group"
          aria-expanded={open}
        >
          <span className="font-body font-semibold text-base text-text-primary group-hover:text-accent transition-colors duration-150">
            {question}
          </span>
          <span
            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              backgroundColor: open ? "var(--accent)" : "var(--bg-elevated)",
              color: open ? "white" : "var(--text-muted)",
            }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-3 h-3 transition-transform duration-200"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <polyline points="2 4 6 8 10 4" />
            </svg>
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p className="font-body text-sm text-text-secondary leading-relaxed pb-5">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function FAQAccordion() {
  return (
    <>
      <div
        className="bg-white rounded-2xl border px-6 lg:px-8"
        style={{ borderColor: "var(--border)" }}
      >
        {faq.map((item, i) => (
          <AccordionItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            index={i}
          />
        ))}
      </div>

      <FadeIn className="mt-10 text-center" delay={0.1}>
        <div
          className="rounded-2xl border p-8"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
        >
          <p className="font-body font-semibold text-text-primary mb-2 text-lg">
            Still have a question?
          </p>
          <p className="font-body text-sm text-text-secondary mb-6 max-w-sm mx-auto">
            Call us directly — we're happy to talk through your project before you decide anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" variant="primary" size="md">
              Get a Free Estimate →
            </Button>
            <Button href={`tel:${siteConfig.phone}`} variant="secondary" size="md">
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
