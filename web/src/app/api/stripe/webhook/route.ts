import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { createPrintfulOrder } from "@/lib/printful";
import type { CartItem } from "@/lib/cart";

// All Placed Right Fence merch is POD via Printful — no manual items
// Add manual item slugs here if you ever add handmade products
const MANUAL_ITEM_IDS = new Set<string>([]);

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-03-25.dahlia" });
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Webhook error";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // 1. Parse cart from metadata
  const cart: CartItem[] = JSON.parse(session.metadata?.cart ?? "[]");

  // 2. Shipping address — build-log.md Error #7: `collected_information` in Stripe dahlia
  const sessionAny = session as unknown as {
    collected_information?: { shipping_details?: unknown };
    shipping_details?: unknown;
  };
  const shipping = sessionAny.collected_information?.shipping_details ?? sessionAny.shipping_details;

  const shippingAddress = shipping as {
    name?: string;
    address?: {
      line1?: string;
      city?: string;
      state?: string;
      country?: string;
      postal_code?: string;
    };
  } | null | undefined;

  // 3. Split POD vs manual
  const podItems = cart.filter((i) => !MANUAL_ITEM_IDS.has(String(i.id)));
  const manualItems = cart.filter((i) => MANUAL_ITEM_IDS.has(String(i.id)));

  // 4. Create Printful order for POD items
  if (podItems.length > 0 && shippingAddress?.address) {
    try {
      await createPrintfulOrder({
        recipient: {
          name: shippingAddress.name ?? session.customer_details?.name ?? "Customer",
          address1: shippingAddress.address.line1 ?? "",
          city: shippingAddress.address.city ?? "",
          state_code: shippingAddress.address.state ?? "",
          country_code: shippingAddress.address.country ?? "US",
          zip: shippingAddress.address.postal_code ?? "",
          email: session.customer_details?.email ?? undefined,
        },
        items: podItems.map((i) => ({
          sync_variant_id: i.printful_variant_id,
          quantity: i.quantity,
        })),
      });
    } catch (err) {
      // Log but don't fail the webhook — Printful can be retried manually
      console.error("Printful order creation failed:", err);
    }
  }

  // 5. Owner alert for manual items (none expected for merch, but wired just in case)
  if (manualItems.length > 0 && process.env.OWNER_EMAIL) {
    const itemList = manualItems
      .map((i) => `• ${i.name} × ${i.quantity} (${i.selectedSize ?? ""} ${i.selectedColor ?? ""})`.trim())
      .join("\n");

    await resend.emails.send({
      from: "shop@placedrightfences.com",
      to: process.env.OWNER_EMAIL,
      subject: `⚠️ Manual fulfillment needed — Order ${session.id.slice(-8).toUpperCase()}`,
      text: `A new order contains items that need manual shipping.\n\nCustomer: ${
        session.customer_details?.name ?? "Unknown"
      } <${session.customer_details?.email ?? ""}>\n\nItems:\n${itemList}\n\nShip to:\n${
        shippingAddress?.name ?? ""
      }\n${shippingAddress?.address?.line1 ?? ""}\n${shippingAddress?.address?.city ?? ""}, ${
        shippingAddress?.address?.state ?? ""
      } ${shippingAddress?.address?.postal_code ?? ""}`,
    });
  }

  return NextResponse.json({ received: true });
}
