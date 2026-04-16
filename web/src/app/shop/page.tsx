"use client";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/lib/cart";
import { getColorHex } from "@/lib/printful";
import { products, SHOP_CATEGORIES } from "@/data/shop";
import type { Product } from "@/data/shop";

// ── Launch flag ───────────────────────────────────────────────────────────────
// Set NEXT_PUBLIC_SHOP_LIVE=true once Stripe + Printful keys are configured in Vercel.
// Until then, the page shows a "Coming Soon" takeover with email capture.
const SHOP_LIVE = process.env.NEXT_PUBLIC_SHOP_LIVE === "true";

// ── Coming Soon takeover ─────────────────────────────────────────────────────

function ComingSoonShop() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "shop_waitlist",
          email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--primary)] pt-32 pb-20 relative overflow-hidden">
        {/* Subtle background accent */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--accent) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--accent) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <p
            className="font-mono text-xs tracking-[0.08em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Placed Right Merch
          </p>
          <h1 className="font-display text-4xl lg:text-6xl text-white leading-tight mb-5">
            Going Live Soon.
          </h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Branded hats, tees, hoodies, and stickers for homeowners, crew, and anyone who
            appreciates a fence built right. Drop your email and we&rsquo;ll let you know the
            minute the shop opens.
          </p>

          {/* Email capture */}
          {status === "success" ? (
            <div
              className="inline-flex flex-col items-center gap-2 px-6 py-5 rounded-xl"
              style={{
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.35)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" style={{ color: "var(--accent)" }}>
                <path
                  d="M5 12l5 5L20 7"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-display text-xl text-white">You&rsquo;re on the list.</p>
              <p className="text-sm text-white/60">
                We&rsquo;ll email you the moment the shop opens.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-md border text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "white",
                }}
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-md font-semibold text-sm transition-all hover:brightness-110 disabled:opacity-50 cta-pulse"
                style={{ background: "var(--accent)", color: "var(--primary)" }}
              >
                {status === "loading" ? "Sending…" : "Notify Me"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-sm" style={{ color: "#f87171" }}>
              {errorMsg}
            </p>
          )}

          <p className="mt-6 text-xs text-white/40 max-w-sm mx-auto">
            We&rsquo;ll only email you about the shop launch. No newsletter, no spam.
          </p>
        </div>
      </section>

      {/* Sneak peek — greyscale/blurred product silhouettes to signal life */}
      <section className="py-20" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs tracking-[0.08em] uppercase mb-3 text-center"
            style={{ color: "var(--text-muted)" }}
          >
            Dropping Soon
          </p>
          <h2
            className="font-display text-2xl lg:text-3xl mb-10 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            A sneak peek at the first collection.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Hoodie", "Hat", "Tee", "Sticker Pack"].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-xl border flex flex-col items-center justify-center gap-3 transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, var(--primary) 0%, #1a1a1a 100%)",
                  borderColor: "var(--border)",
                }}
              >
                <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 opacity-40">
                  <rect x="4" y="20" width="40" height="24" rx="2" stroke="var(--accent)" strokeWidth="2" />
                  <path d="M4 20 L24 8 L44 20" stroke="var(--accent)" strokeWidth="2" />
                </svg>
                <span
                  className="font-mono text-[10px] tracking-[0.12em] uppercase"
                  style={{ color: "var(--accent)", opacity: 0.6 }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── Original live shop (kept intact — renders when SHOP_LIVE is true) ────────

interface Variant {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  preview_url: string | null;
}

function SuccessBanner() {
  const params = useSearchParams();
  if (!params.get("success")) return null;
  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full text-sm font-semibold shadow-lg"
      style={{ background: "var(--accent)", color: "var(--primary)" }}>
      ✓ Order placed! Check your email for confirmation.
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [variants, setVariants] = useState<Variant[]>([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/printful/variants/${product.id}`)
      .then((r) => r.json())
      .then(({ variants: v }) => {
        setVariants(v ?? []);
        if (v?.[0]) {
          setSelectedSize(v[0].size || "");
          setSelectedColor(v[0].color || "");
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [product.id]);

  const sizes = [...new Set(variants.map((v) => v.size).filter(Boolean))];
  const colors = [...new Set(variants.map((v) => v.color).filter(Boolean))];

  const matchedVariant = variants.find(
    (v) => v.size === selectedSize && v.color === selectedColor
  ) ?? variants.find((v) => v.color === selectedColor)
    ?? variants.find((v) => v.size === selectedSize)
    ?? variants[0];

  const displayPrice = matchedVariant?.price ?? product.price;
  const previewUrl = matchedVariant?.preview_url ?? product.image ?? null;

  function handleAdd() {
    addItem({
      id: product.id,
      name: product.name,
      price: displayPrice,
      quantity: 1,
      image: previewUrl ?? undefined,
      selectedSize: selectedSize || undefined,
      selectedColor: selectedColor || undefined,
      printful_variant_id: matchedVariant?.id,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
    openCart();
  }

  return (
    <article
      className="rounded-xl overflow-hidden border border-[var(--border)] flex flex-col transition-shadow hover:shadow-lg"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="relative h-56 bg-[var(--bg-elevated)]">
        {previewUrl ? (
          <Image src={previewUrl} alt={product.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #222 50%, #1a1a1a 100%)" }}
          >
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 opacity-30">
              <rect x="4" y="20" width="40" height="24" rx="2" stroke="#C9A84C" strokeWidth="2"/>
              <path d="M4 20 L24 8 L44 20" stroke="#C9A84C" strokeWidth="2"/>
            </svg>
            <span className="font-mono text-[10px] tracking-widest uppercase opacity-25" style={{ color: "var(--accent)" }}>
              PRF Merch
            </span>
          </div>
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 text-xs font-mono tracking-[0.06em] uppercase px-2 py-0.5 rounded"
            style={{ background: "var(--accent)", color: "var(--primary)" }}>
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-display text-lg leading-tight" style={{ color: "var(--text-primary)" }}>{product.name}</h3>
          <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{product.description}</p>
        </div>

        {loading ? (
          <div className="space-y-2">
            <div className="h-4 rounded animate-pulse w-1/2" style={{ background: "var(--bg-elevated)" }} />
            <div className="h-8 rounded animate-pulse" style={{ background: "var(--bg-elevated)" }} />
          </div>
        ) : (
          <>
            {colors.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    title={color}
                    className="w-6 h-6 rounded-full border-2 transition-all"
                    style={{
                      background: getColorHex(color),
                      borderColor: selectedColor === color ? "var(--accent)" : "transparent",
                      outline: selectedColor === color ? "2px solid var(--accent)" : "none",
                    }}
                  />
                ))}
              </div>
            )}

            {sizes.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="px-2.5 py-1 rounded text-xs font-medium border transition-all"
                    style={{
                      borderColor: selectedSize === size ? "var(--accent)" : "var(--border)",
                      background: selectedSize === size ? "var(--accent-muted)" : "transparent",
                      color: selectedSize === size ? "var(--text-primary)" : "var(--text-muted)",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
            ${displayPrice.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-md text-sm font-semibold transition-all hover:brightness-110"
            style={{ background: "var(--accent)", color: "var(--primary)" }}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

function LiveShop() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="bg-[var(--primary)] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.08em] uppercase mb-3" style={{ color: "var(--accent)" }}>
            Placed Right Merch
          </p>
          <h1 className="font-display text-4xl lg:text-5xl text-white mb-3">Represent NH.</h1>
          <p className="text-white/60 text-lg max-w-xl mb-6">
            Branded gear for homeowners, crew, and anyone who appreciates a fence built right.
          </p>
        </div>
      </section>

      <div className="bg-[var(--bg-elevated)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 flex-wrap">
          {SHOP_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all"
              style={{
                background: activeCategory === cat ? "var(--accent)" : "transparent",
                color: activeCategory === cat ? "var(--primary)" : "var(--text-secondary)",
                borderColor: activeCategory === cat ? "var(--accent)" : "var(--border)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <SuccessBanner />
      </Suspense>
    </>
  );
}

export default function ShopPage() {
  return SHOP_LIVE ? <LiveShop /> : <ComingSoonShop />;
}
