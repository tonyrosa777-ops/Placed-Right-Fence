// Shop Teaser — homepage section
// 3 product cards → drives to /shop
// Source: website-build-template.md §Shop (demo mode until Stripe/Printful keys added)

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { products } from "@/data/shop";

// Show hoodie, hat, sticker pack — most visually distinct
const PREVIEW_IDS = [100000002, 100000003, 100000007];
const PREVIEW_PRODUCTS = products.filter((p) => PREVIEW_IDS.includes(p.id as number));

// SVG placeholder matching the shop page style
function ProductPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="w-full h-44 flex items-center justify-center rounded-t-2xl"
      style={{ background: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)" }}
    >
      <svg viewBox="0 0 80 60" className="w-16 h-12 opacity-30" fill="none">
        <rect x="8" y="8" width="64" height="44" rx="4" stroke="#C9A84C" strokeWidth="1.5" />
        <line x1="8" y1="24" x2="72" y2="24" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="24" cy="16" r="4" stroke="#C9A84C" strokeWidth="1" />
        <text x="40" y="42" fontSize="8" fill="#C9A84C" textAnchor="middle" opacity="0.6">
          {name.split(" ").slice(-1)[0]}
        </text>
      </svg>
    </div>
  );
}

export default function ShopTeaser() {
  return (
    <section
      className="py-16 lg:py-20"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="text-center mb-12">
          <p
            className="font-mono text-xs tracking-[0.1em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Placed Right Gear · Going Live Soon
          </p>
          <h2
            className="font-display text-white mb-3"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1 }}
          >
            Represent NH&rsquo;s Fence Company.
          </h2>
          <p
            className="font-body text-sm max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Hats, hoodies, and stickers dropping soon. Join the waitlist to get early access.
          </p>
        </FadeIn>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {PREVIEW_PRODUCTS.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.08} direction="up">
              <Link
                href="/shop"
                className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-200 hover:border-[rgba(201,168,76,0.5)] hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#111",
                  borderColor: "rgba(201,168,76,0.15)",
                }}
              >
                <ProductPlaceholder name={product.name} />

                <div className="p-4">
                  {product.badge && (
                    <span
                      className="eyebrow text-[9px] px-2 py-0.5 rounded mb-2 inline-block"
                      style={{
                        background: "rgba(201,168,76,0.15)",
                        color: "var(--accent)",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <p className="font-body font-semibold text-sm text-white mb-1">
                    {product.name}
                  </p>
                  <p className="font-body text-xs mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-base" style={{ color: "var(--accent)" }}>
                      ${product.price.toFixed(2)}
                    </span>
                    <span
                      className="font-body text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--accent)" }}
                    >
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "var(--accent)",
              color: "var(--primary)",
            }}
          >
            Join the Waitlist →
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
