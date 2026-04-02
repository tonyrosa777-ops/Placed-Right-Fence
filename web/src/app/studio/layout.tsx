import type { Metadata } from "next";

// Prevent Sanity Studio from being indexed by search engines
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
