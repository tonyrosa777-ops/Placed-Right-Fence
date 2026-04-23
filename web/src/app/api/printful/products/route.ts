import { NextResponse } from "next/server";
import { getSyncProducts } from "@/lib/printful";
import seeded from "@/lib/printful-seeded-products.json";

export async function GET() {
  try {
    const data = await getSyncProducts();
    return NextResponse.json({ products: data });
  } catch {
    // Printful unavailable — serve seeded fallback so shop always renders
    return NextResponse.json({ products: seeded.products, fallback: true });
  }
}
