// /data/shop.ts — Placed Right Fence branded merchandise catalog
// IDs correspond to Printful sync product IDs — update after creating products in Printful

export interface Product {
  id: number | string;
  name: string;
  price: number;
  description: string;
  category: string;
  badge?: string;
  image?: string;
  printful_variant_id?: number; // pre-set if you want to skip variant resolution at checkout
}

export const SHOP_CATEGORIES = ["All", "Apparel", "Accessories", "Drinkware"] as const;

// Seeded catalog — Printful IDs must be replaced with real sync product IDs
// after creating products in your Printful store (Settings → Store → Products)
export const products: Product[] = [
  {
    id: 100000001,
    name: "Placed Right Fence Tee",
    price: 28.0,
    description:
      "Classic unisex tee with the Placed Right Fence logo. Soft, comfortable, built to last — like our fences.",
    category: "Apparel",
  },
  {
    id: 100000002,
    name: "Placed Right Fence Hoodie",
    price: 52.0,
    description:
      "Heavyweight pullover hoodie with embroidered logo. NH winters call for this.",
    category: "Apparel",
    badge: "POPULAR",
  },
  {
    id: 100000005,
    name: "Placed Right Fence Long Sleeve",
    price: 34.0,
    description:
      "Soft long-sleeve tee with chest logo. Spring and fall job site staple.",
    category: "Apparel",
  },
  {
    id: 100000006,
    name: "Placed Right Fence Zip Hoodie",
    price: 58.0,
    description:
      "Full-zip fleece hoodie. Back logo, front pocket. Easy layer for early NH mornings.",
    category: "Apparel",
  },
  {
    id: 100000003,
    name: "Placed Right Fence Hat",
    price: 32.0,
    description:
      "Structured snapback with embroidered Placed Right Fence logo. One size fits most.",
    category: "Accessories",
  },
  {
    id: 100000007,
    name: "Placed Right Fence Sticker Pack",
    price: 8.0,
    description:
      "Set of 3 die-cut vinyl stickers. Truck-grade, weatherproof, NH-proud.",
    category: "Accessories",
    badge: "NEW",
  },
  {
    id: 100000004,
    name: "Placed Right Fence Mug",
    price: 18.0,
    description:
      "15oz glossy ceramic mug. A good fence and a good cup of coffee both require patience.",
    category: "Drinkware",
  },
  {
    id: 100000008,
    name: "Placed Right Fence Tumbler",
    price: 26.0,
    description:
      "20oz insulated stainless steel tumbler. Keeps coffee hot through an NH winter install.",
    category: "Drinkware",
  },
];
