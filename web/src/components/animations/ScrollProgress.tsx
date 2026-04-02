"use client";

import { useScroll, useSpring, motion, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  if (shouldReduce) return null;

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: "var(--accent)",
        zIndex: 60,
      }}
      aria-hidden="true"
    />
  );
}
