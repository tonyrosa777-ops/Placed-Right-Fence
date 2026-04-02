import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Website Plans & Pricing",
  description:
    "Compare website plans for Placed Right Fence Co. See exactly what's included in each tier and calculate the revenue your new site is projected to generate.",
};

export default function PricingPage() {
  return <PricingClient />;
}
