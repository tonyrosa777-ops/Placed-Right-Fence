// LocalBusiness schema — HomeAndConstructionBusiness → Contractor
// Source: CLAUDE.md SCHEMA_TYPE, market-intelligence.md §6 (SEO gap — zero competitors have schema)
// Injected in layout.tsx for sitewide coverage

import { siteConfig, serviceAreas } from "@/data/site";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.7654,
      longitude: -71.4676,
    },
    areaServed: [
      ...serviceAreas.primary.map((city) => ({
        "@type": "City",
        name: city,
        containedInPlace: { "@type": "State", name: "New Hampshire" },
      })),
      ...serviceAreas.seacoast.map((city) => ({
        "@type": "City",
        name: city,
        containedInPlace: { "@type": "State", name: "New Hampshire" },
      })),
    ],
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Check, Credit Card",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "15:00",
      },
    ],
    sameAs: [siteConfig.social.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fence Installation and Repair Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Fence Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vinyl Fence Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aluminum Fence Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chain Link Fence Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fence Repair" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
