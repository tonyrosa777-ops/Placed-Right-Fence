import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MobileCTABar from "@/components/layout/MobileCTABar";
import SchemaOrg from "@/components/layout/SchemaOrg";
import ScrollProgress from "@/components/animations/ScrollProgress";
import PageTransition from "@/components/animations/PageTransition";
import { CartProvider } from "@/lib/cart";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Placed Right Fence Co. LLC — Fence Installation & Repair | Nashua, NH",
    template: "%s | Placed Right Fence Co. LLC",
  },
  description:
    "Southern NH's trusted family fence installer. Wood, vinyl, aluminum, and chain link — built below the frost line, built to last. Free on-site estimates within 72 hours. Serving Nashua, Manchester, and all of Southern NH.",
  metadataBase: new URL("https://placedrightfences.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://placedrightfences.com",
    siteName: "Placed Right Fence Co. LLC",
    title: "Placed Right Fence Co. LLC — Fence Installation & Repair | Nashua, NH",
    description:
      "Southern NH's trusted family fence installer. Free on-site estimates within 72 hours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Placed Right Fence Co. LLC — Fence Installation & Repair | Nashua, NH",
    description: "Southern NH's trusted family fence installer. Free estimates within 72 hours.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
          <CartProvider>
            <ScrollProgress />
            <SchemaOrg />
            <SiteHeader />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <SiteFooter />
            <MobileCTABar />
          </CartProvider>
        </body>
    </html>
  );
}
