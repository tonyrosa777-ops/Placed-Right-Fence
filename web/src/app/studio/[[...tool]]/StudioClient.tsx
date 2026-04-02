"use client";
// All Sanity imports isolated here — this module is client-bundle only
// (parent page.tsx uses dynamic(..., { ssr: false }))
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioClient() {
  return <NextStudio config={config} />;
}
