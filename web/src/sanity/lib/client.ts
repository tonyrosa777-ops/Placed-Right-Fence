import { createClient } from "next-sanity";

// During build without env vars, use a no-op placeholder so the build doesn't throw.
// Real fetches will gracefully return empty data — the blog shows its empty state.
// Use || (not ??) so empty strings from .env.local also fall through to the stub
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "p0000000";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

// Server-side client with write token (used only in API routes, never client-side)
export function getServerClient(token: string) {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
    apiVersion: "2024-01-01",
    token,
    useCdn: false,
  });
}
