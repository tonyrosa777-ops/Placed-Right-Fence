"use client";
// Sanity Studio — client-only, cannot SSR
// Access at /studio (no-index — see metadata export)
import dynamic from "next/dynamic";

// Both the config and NextStudio are loaded lazily inside dynamic()
// so sanity.config (which calls createContext at module level) never
// runs on the server during Next.js build page-data collection.
const NextStudio = dynamic(
  async () => {
    const [{ NextStudio: Studio }, { default: config }] = await Promise.all([
      import("next-sanity/studio"),
      import("../../../../sanity.config"),
    ]);
    const Page = () => <Studio config={config} />;
    Page.displayName = "SanityStudioPage";
    return Page;
  },
  { ssr: false }
);

export default function StudioPage() {
  return <NextStudio />;
}
