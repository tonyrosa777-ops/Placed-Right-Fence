// OG Image — 1200x630 via Next.js ImageResponse (build-log Pattern #12)
// Automatically serves at /opengraph-image for all social share previews

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Placed Right Fence Co. LLC — Fence Installation & Repair | Nashua, NH";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D0D0D",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle gold gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #C9A84C, #E8D48B, #C9A84C)",
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-1px",
            marginBottom: "8px",
            display: "flex",
          }}
        >
          Placed Right Fence Co.
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "#C9A84C",
            fontStyle: "italic",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          Love Wins Where Our Pickets Begin.
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "2px",
            background: "#C9A84C",
            marginBottom: "32px",
          }}
        />

        {/* Services list */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span>Wood</span>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
          <span>Vinyl</span>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
          <span>Aluminum</span>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
          <span>Chain Link</span>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
          <span>Trex</span>
          <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
          <span>Repair</span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 16,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <span>Nashua, NH</span>
          <span>·</span>
          <span>Southern NH & Seacoast</span>
          <span>·</span>
          <span>Free Estimates Within 72 Hours</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
