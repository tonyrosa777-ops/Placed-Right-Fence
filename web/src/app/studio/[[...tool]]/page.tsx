"use client";
// Sanity Studio — rendered client-only via StudioClient
// Access at /studio (robots: no-index set in layout.tsx)
import dynamic from "next/dynamic";

// dynamic + ssr:false ensures StudioClient (which calls React.createContext
// at module level through sanity packages) never runs on the server.
const StudioClient = dynamic(() => import("./StudioClient"), { ssr: false });

export default function StudioPage() {
  return <StudioClient />;
}
