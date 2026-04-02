import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { siteConfig } from "@/data/site";
import type { CartItem } from "@/lib/cart";

export async function POST(req: NextRequest) {
  // Demo mode — Stripe key not yet configured
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ demo: true });
  }

  // Instantiate inside handler — avoids module-level throw when STRIPE_SECRET_KEY is absent during build
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-03-25.dahlia", // build-log.md Error #7 — always check apiVersion.d.ts
  });

  const { items }: { items: CartItem[] } = await req.json();

  if (!items?.length) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_creation: "always", // ensures Stripe sends receipt email to customer
    line_items: items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          // Only absolute HTTPS URLs — local /public paths are silently dropped by Stripe
          ...(item.image?.startsWith("http") ? { images: [item.image] } : {}),
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB", "AU", "NZ"],
    },
    success_url: `${siteConfig.url}/shop?success=true`,
    cancel_url: `${siteConfig.url}/shop`,
    metadata: {
      // Full cart as JSON — webhook reads this to create Printful order
      cart: JSON.stringify(
        items.map((i) => ({
          id: i.id,
          name: i.name,
          quantity: i.quantity,
          price: i.price,
          printful_variant_id: i.printful_variant_id, // CRITICAL — flows to Printful
        }))
      ),
    },
  });

  return NextResponse.json({ url: session.url });
}
