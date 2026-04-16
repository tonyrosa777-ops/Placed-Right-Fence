"use client";

import { useEffect } from "react";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function CalendlyEmbed() {
  useEffect(() => {
    if (!CALENDLY_URL) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  if (!CALENDLY_URL) return null;

  return (
    <div
      className="calendly-inline-widget"
      data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=fdfaf6&text_color=0f172a&primary_color=c87533`}
      style={{ minWidth: 320, height: 700, width: "100%" }}
    />
  );
}
