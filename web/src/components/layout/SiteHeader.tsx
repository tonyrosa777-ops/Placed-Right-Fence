"use client";
// Source: design-system.md §5 Navigation — black + gold brand theme
// Always dark background (matches business card identity).
// Transparent on homepage hero → solid #0D0D0D on scroll. Always solid on inner pages.

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { nav, siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300",
          isTransparent
            ? "bg-transparent"
            : "bg-[#0D0D0D] border-b border-[rgba(201,168,76,0.15)]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

          {/* Logo wordmark */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            onClick={() => setMobileOpen(false)}
          >
            <span className="font-display text-[1.25rem] tracking-tight text-white transition-colors duration-200 group-hover:text-accent">
              Placed Right Fence
            </span>
            <span className="eyebrow text-[10px] mt-0.5 text-white/40">
              Nashua, NH · Est. 2024
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body font-medium text-[15px] text-white/75 hover:text-accent transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA row */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-body font-medium text-sm text-white/55 hover:text-accent transition-colors duration-150"
            >
              {siteConfig.phone}
            </a>
            <Button href="/contact" variant="primary" size="sm">
              Get Free Estimate
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "block w-6 h-0.5 bg-white transition-all duration-300 origin-center",
                mobileOpen ? "translate-y-[7px] rotate-45" : ""
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-white transition-all duration-300",
                mobileOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-white transition-all duration-300 origin-center",
                mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
              )}
            />
          </button>

        </div>
      </header>

      {/* Mobile full-screen nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: "#0D0D0D", paddingTop: "72px" }}
          >
            {/* Nav links */}
            <nav className="flex flex-col px-8 pt-10 gap-0 flex-1 overflow-y-auto">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.25 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-display text-[2.25rem] leading-none text-white py-4 border-b border-white/10 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.25 }}
              className="px-8 pb-10 pt-6 space-y-3"
            >
              <a
                href={`tel:${siteConfig.phone}`}
                className="block text-center font-body text-white/50 text-sm"
              >
                {siteConfig.phone}
              </a>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Your Free Estimate →
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
