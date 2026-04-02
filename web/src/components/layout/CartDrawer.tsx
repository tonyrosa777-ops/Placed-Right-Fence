"use client";
import { useCart } from "@/lib/cart";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, count, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const router = useRouter();

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.demo) {
        setDemoMode(true);
        setLoading(false);
        return;
      }
      if (data.url) {
        clearCart();
        router.push(data.url);
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm flex flex-col shadow-2xl"
            style={{ background: "var(--bg-card)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
              <span className="font-display text-lg" style={{ color: "var(--text-primary)" }}>
                Cart {count > 0 && <span className="font-sans text-sm font-normal" style={{ color: "var(--text-muted)" }}>({count})</span>}
              </span>
              <button
                onClick={closeCart}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--bg-elevated)] transition-colors"
                style={{ color: "var(--text-muted)" }}
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="text-center pt-16">
                  <p className="text-3xl mb-3">🛒</p>
                  <p style={{ color: "var(--text-muted)" }} className="text-sm">Your cart is empty.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex gap-3"
                  >
                    {item.image ? (
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-[var(--bg-elevated)]">
                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-lg shrink-0 flex items-center justify-center bg-[var(--bg-elevated)] text-2xl">
                        👕
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate" style={{ color: "var(--text-primary)" }}>{item.name}</p>
                      {(item.selectedSize || item.selectedColor) && (
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                          {[item.selectedSize, item.selectedColor].filter(Boolean).join(" · ")}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize, item.selectedColor)}
                            className="w-6 h-6 rounded border border-[var(--border)] text-xs flex items-center justify-center hover:border-[var(--accent)] transition-colors"
                            style={{ color: "var(--text-secondary)" }}
                          >−</button>
                          <span className="w-6 text-center text-sm" style={{ color: "var(--text-primary)" }}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)}
                            className="w-6 h-6 rounded border border-[var(--border)] text-xs flex items-center justify-center hover:border-[var(--accent)] transition-colors"
                            style={{ color: "var(--text-secondary)" }}
                          >+</button>
                        </div>
                        <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.selectedSize, item.selectedColor)}
                      className="self-start text-xs mt-1 hover:opacity-70 transition-opacity"
                      style={{ color: "var(--text-muted)" }}
                      aria-label="Remove item"
                    >✕</button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-5 py-4 border-t border-[var(--border)] space-y-3">
                {demoMode ? (
                  <div className="rounded-lg p-4 text-center space-y-2" style={{ background: "var(--accent-muted)", border: "1px solid var(--accent)" }}>
                    <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Shop Launching Soon</p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      Secure checkout via Stripe + Printful print-on-demand fulfillment is fully wired — API keys activate it. Your cart is ready.
                    </p>
                    <button
                      onClick={() => setDemoMode(false)}
                      className="text-xs underline"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Back to cart
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: "var(--text-muted)" }}>Subtotal</span>
                      <span className="font-semibold" style={{ color: "var(--text-primary)" }}>${total.toFixed(2)}</span>
                    </div>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>Shipping calculated at checkout.</p>
                    <button
                      onClick={handleCheckout}
                      disabled={loading}
                      className="w-full py-3 rounded-md font-semibold text-sm transition-all hover:brightness-110 disabled:opacity-50"
                      style={{ background: "var(--accent)", color: "var(--primary)" }}
                    >
                      {loading ? "Redirecting…" : `Checkout · $${total.toFixed(2)}`}
                    </button>
                  </>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
