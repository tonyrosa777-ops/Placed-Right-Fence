// Source: design-system.md §2 (navy bg), initial-business-data.md §5 (contact)
// Static server component — no interactivity needed.

import Link from "next/link";
import { nav, siteConfig, trustSignals } from "@/data/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--primary)" }} className="text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col leading-none mb-4">
              <span className="font-display text-xl text-white tracking-tight">
                Placed Right Fence Co. LLC
              </span>
              <span className="eyebrow text-[10px] text-white/40 mt-1">
                Nashua, NH · Est. 2024
              </span>
            </Link>
            <p className="font-body text-sm text-white/70 max-w-xs leading-relaxed mb-6">
              {siteConfig.tagline} Serving Southern NH and the Seacoast — free on-site estimates within 72 hours.
            </p>
            {/* Trust badges strip */}
            <div className="flex flex-wrap gap-2">
              {["Fully Insured", "Family-Owned", "NH Born & Raised", "Free Estimates"].map((badge) => (
                <span
                  key={badge}
                  className="eyebrow text-[10px] text-white/60 border border-white/15 rounded px-2 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="eyebrow text-[11px] text-white/40 mb-4">Navigation</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-[11px] text-white/40 mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-body text-sm text-white/70 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <address className="not-italic font-body text-sm text-white/50 leading-relaxed">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </address>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/50 hover:text-white transition-colors"
                >
                  {siteConfig.social.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/40">
            © {year} Placed Right Fence Co. LLC. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/30">
            Nashua, NH · Serving Southern NH &amp; Seacoast
          </p>
        </div>
      </div>
    </footer>
  );
}
