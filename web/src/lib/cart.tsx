"use client";
// Custom React Context cart — do NOT use Snipcart (build-log.md Pattern #2)
// Persists to localStorage so cart survives page refresh

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  selectedSize?: string;
  selectedColor?: string;
  /** CRITICAL: must be passed through to Stripe metadata → webhook → Printful */
  printful_variant_id?: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: string | number, size?: string, color?: string) => void;
  updateQuantity: (id: string | number, qty: number, size?: string, color?: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextType | null>(null);

/** Unique key per variant — avoids collisions when same product has different size/color */
function itemKey(item: Pick<CartItem, "id" | "selectedSize" | "selectedColor">) {
  return `${item.id}__${item.selectedSize ?? ""}__${item.selectedColor ?? ""}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("prf_cart");
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // localStorage unavailable or malformed — start fresh
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("prf_cart", JSON.stringify(items));
    } catch {
      // quota exceeded — ignore
    }
  }, [items]);

  const addItem = useCallback((incoming: CartItem) => {
    setItems((prev) => {
      const key = itemKey(incoming);
      const existing = prev.find((i) => itemKey(i) === key);
      if (existing) {
        return prev.map((i) =>
          itemKey(i) === key ? { ...i, quantity: i.quantity + incoming.quantity } : i
        );
      }
      return [...prev, incoming];
    });
  }, []);

  const removeItem = useCallback(
    (id: string | number, size?: string, color?: string) => {
      setItems((prev) =>
        prev.filter((i) => itemKey(i) !== itemKey({ id, selectedSize: size, selectedColor: color }))
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (id: string | number, qty: number, size?: string, color?: string) => {
      if (qty <= 0) {
        removeItem(id, size, color);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          itemKey(i) === itemKey({ id, selectedSize: size, selectedColor: color })
            ? { ...i, quantity: qty }
            : i
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const CART_SSR_FALLBACK: CartContextType = {
  items: [],
  isOpen: false,
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  total: 0,
  count: 0,
};

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  // Return no-op fallback during SSR prerender — real context is present on the client
  return ctx ?? CART_SSR_FALLBACK;
}
