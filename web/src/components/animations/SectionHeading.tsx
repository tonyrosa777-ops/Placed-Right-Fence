"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EASE = [0.25, 0.1, 0.25, 1] as const;

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  level?: 1 | 2 | 3;
  className?: string;
  delay?: number;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  level = 2,
  className,
  delay = 0,
  dark = false,
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  const centerClass = align === "center" ? "text-center" : "";

  return (
    <div ref={ref} className={`${centerClass} ${className ?? ""}`}>
      {eyebrow && (
        <p className="eyebrow mb-3" style={{ color: dark ? "var(--accent)" : "var(--text-muted)" }}>
          {eyebrow}
        </p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay, ease: EASE }}
      >
        <Tag
          className="font-display"
          style={{
            fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
            lineHeight: 1.15,
            color: dark ? "rgba(255,255,255,0.95)" : "var(--text-primary)",
          }}
        >
          {heading}
        </Tag>
      </motion.div>

      {/* Gold rule — scaleX reveal, matches hero pattern */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.15, ease: EASE }}
        className="h-px w-16 my-4"
        style={{
          backgroundColor: "var(--accent)",
          transformOrigin: align === "center" ? "center" : "left",
        }}
        aria-hidden="true"
      />

      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.25, ease: EASE }}
          className="font-body text-lg"
          style={{
            maxWidth: align === "left" ? "540px" : undefined,
            color: dark ? "rgba(255,255,255,0.55)" : "var(--text-secondary)",
          }}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}
