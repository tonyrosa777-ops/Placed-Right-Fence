// Printful API client for Placed Right Fence merch store
// Env: PRINTFUL_API_KEY (token from developers.printful.com)
// Env: PRINTFUL_STORE_ID (store ID — required when token has access to multiple stores)

const PRINTFUL_BASE = "https://api.printful.com";

function printfulHeaders() {
  const key = process.env.PRINTFUL_API_KEY;
  if (!key) throw new Error("PRINTFUL_API_KEY is not set");

  const headers: Record<string, string> = {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };

  const storeId = process.env.PRINTFUL_STORE_ID;
  if (storeId) headers["X-PF-Store-Id"] = storeId;

  return headers;
}

async function printfulFetch(path: string) {
  const res = await fetch(`${PRINTFUL_BASE}${path}`, {
    headers: printfulHeaders(),
    next: { revalidate: 3600 }, // cache 1h
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Printful ${res.status}: ${text}`);
  }

  const json = await res.json();
  return json.result ?? json;
}

// Fetch all sync products in the store
export async function getSyncProducts() {
  return printfulFetch("/store/products");
}

// Fetch sync variants for a specific sync product ID
export async function getSyncVariants(syncProductId: number | string) {
  const data = await printfulFetch(`/store/products/${syncProductId}`);
  return data.sync_variants ?? [];
}

// Create a Printful order (called from Stripe webhook)
// confirm=true must be a query param, NOT in the body (build-log.md Pattern #1)
export async function createPrintfulOrder(orderPayload: Record<string, unknown>) {
  const res = await fetch(`${PRINTFUL_BASE}/orders?confirm=true`, {
    method: "POST",
    headers: printfulHeaders(),
    body: JSON.stringify(orderPayload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Printful order creation failed ${res.status}: ${text}`);
  }

  const json = await res.json();
  return json.result ?? json;
}

// ─── Variant Name Parser ───────────────────────────────────────────────────────
// Handles Printful's inconsistent variant name formats (build-log.md template §7)

const KNOWN_COLORS = new Set([
  "Black", "White", "Navy", "Navy Blue", "Red", "Forest Green", "Military Green",
  "Bottle Green", "Storm", "Sport Grey", "Dark Heather", "Heather", "Maroon",
  "Ash", "Sand", "Royal", "Royal Blue", "Purple", "Orange", "Gold", "Yellow",
  "Pink", "Light Pink", "Charcoal", "Light Blue", "Vintage White", "Carolina Blue",
  "Heather Blue", "Olive", "Brown", "Chocolate", "Burgundy", "Mustard", "Cream",
  "Cranberry", "Dark Navy", "Slate", "Mint", "Coral", "Teal", "Indigo", "Green",
  "Blue", "Grey", "Gray", "Silver", "Rose Gold", "Rose", "Lavender", "Sky Blue",
  "Cobalt", "Aqua",
]);

export function parseVariantName(name: string): { size: string; color: string } {
  const parts = name.split(" / ").map((p) => p.trim());

  if (parts.length === 1) return { size: parts[0], color: "" };

  if (parts.length === 2) {
    const [a, b] = parts;
    if (KNOWN_COLORS.has(b)) return { size: KNOWN_COLORS.has(a) ? "" : a, color: b };
    if (KNOWN_COLORS.has(a)) return { size: b, color: a };
    return { size: b, color: a };
  }

  // 3+ parts: last is usually color, second-to-last is size
  const color = parts[parts.length - 1];
  const size = parts[parts.length - 2];
  if (KNOWN_COLORS.has(color)) return { size, color };
  if (KNOWN_COLORS.has(size)) return { size: color, color: size };
  return { size, color };
}

// ─── Color Swatch Map ─────────────────────────────────────────────────────────

export const COLOR_MAP: Record<string, string> = {
  Black: "#1a1a1a",
  White: "#ffffff",
  Navy: "#1a2744",
  "Navy Blue": "#1a2744",
  "Forest Green": "#2d4a2d",
  "Military Green": "#4a5c3a",
  "Bottle Green": "#1e3d2f",
  "Sport Grey": "#9a9a9a",
  "Dark Heather": "#5a5a5a",
  Heather: "#b0b0b0",
  Maroon: "#6b1a1a",
  Red: "#cc2200",
  "Royal Blue": "#1a4799",
  Royal: "#1a4799",
  Purple: "#5a2d82",
  Gold: "#c8a96e",
  Ash: "#d4d4d4",
  Sand: "#d4c4a0",
  Charcoal: "#3a3a3a",
  Storm: "#6a7a8a",
  "Light Blue": "#87b8d4",
  "Vintage White": "#f5f0e8",
};

export function getColorHex(color: string): string {
  const normalized = color.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  return COLOR_MAP[color] ?? COLOR_MAP[normalized] ?? "#999999";
}
