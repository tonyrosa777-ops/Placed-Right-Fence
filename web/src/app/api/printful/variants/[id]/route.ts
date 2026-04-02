import { NextResponse, type NextRequest } from "next/server";
import { getSyncVariants, parseVariantName } from "@/lib/printful";
import seeded from "@/lib/printful-seeded-products.json";

type SeededVariant = {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  preview_url: string | null;
};

const SEEDED_VARIANTS = (seeded as unknown as {
  _seeded_variants: Record<string, SeededVariant[]>;
})._seeded_variants;

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const rawVariants: Array<{
      id: number;
      name: string;
      retail_price: string;
      files?: Array<{ preview_url?: string }>;
    }> = await getSyncVariants(id);

    const variants = rawVariants.map((v) => {
      const { size, color } = parseVariantName(v.name);
      return {
        id: v.id,
        name: v.name,
        size,
        color,
        price: parseFloat(v.retail_price),
        preview_url: v.files?.find((f) => f.preview_url)?.preview_url ?? null,
      };
    });

    return NextResponse.json({ variants });
  } catch {
    // Printful unavailable — return seeded variants for known demo product IDs
    const fallback = SEEDED_VARIANTS[id];
    if (fallback) {
      return NextResponse.json({ variants: fallback, fallback: true });
    }
    return NextResponse.json({ variants: [] });
  }
}
