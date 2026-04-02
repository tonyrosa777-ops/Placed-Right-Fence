"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1600,
  className,
  style,
}: CountUpProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const count = useMotionValue(0);
  const startTime = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const hasStarted = useRef(false);

  const display = useTransform(count, (latest) => {
    return `${prefix}${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (!inView || hasStarted.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      count.set(to);
      return;
    }

    hasStarted.current = true;
    startTime.current = null;

    function frame(timestamp: number) {
      if (startTime.current === null) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      count.set(eased * to);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(frame);
      }
    }

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, to, duration, count]);

  return (
    <motion.span ref={ref} className={className} style={style}>
      {display}
    </motion.span>
  );
}
