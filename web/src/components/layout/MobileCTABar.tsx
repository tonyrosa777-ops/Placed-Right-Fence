"use client";
// Source: design-system.md §5 — Sticky mobile bottom CTA bar
// Fixed bottom-0, navy bg, 56px height. Hidden on desktop.
// Hides when mobile nav is open (would duplicate CTA).

import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function MobileCTABar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex items-center h-14"
      style={{ backgroundColor: "var(--primary)" }}
    >
      {/* Estimate CTA — takes 60% width */}
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center h-full font-body font-bold text-sm text-[#0D0D0D] tracking-wide border-r border-black/20"
        style={{ backgroundColor: "var(--accent)" }}
      >
        Get Free Estimate →
      </Link>

      {/* Phone call — takes 40% width */}
      <a
        href={`tel:${siteConfig.phone}`}
        className="w-[40%] flex items-center justify-center h-full font-body font-medium text-xs text-white/80 hover:text-white transition-colors"
      >
        📞 {siteConfig.phone}
      </a>
    </div>
  );
}
