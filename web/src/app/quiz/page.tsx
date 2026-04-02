import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Fence Finder Quiz — Find Your Perfect Fence",
  description:
    "Not sure what fence you need? Answer 4 quick questions and we'll recommend the right material, style, and price range for your NH yard — then book your free estimate.",
  openGraph: {
    title: "Fence Finder Quiz | Placed Right Fence Co. LLC",
    description:
      "4 questions. Personalized fence recommendation. Free estimate within 72 hours.",
    url: `${siteConfig.url}/quiz`,
  },
};

export default function QuizPage() {
  return <QuizClient />;
}
