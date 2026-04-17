// Dynamic fence type detail pages — pre-rendered for all non-comingSoon services
// Source: initial-business-data.md §2 Core Offering, market-intelligence.md §5 Gap 1
// SEO: individual fence type pages capture "[type] fence installation NH" searches

import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { services, siteConfig } from "@/data/site";

// ─── Benefits data per fence type ────────────────────────────────────────────

const benefitsMap: Record<string, { title: string; detail: string }[]> = {
  "trex-composite": [
    {
      title: "Zero Annual Maintenance",
      detail:
        "No staining, sealing, or painting — ever. Trex composite resists fading, staining, and mold so your fence looks new year after year without weekend upkeep.",
    },
    {
      title: "Built for Freeze-Thaw",
      detail:
        "Engineered composite does not warp, crack, or splinter through New Hampshire's brutal freeze-thaw cycles the way natural wood does.",
    },
    {
      title: "25-Year Manufacturer Warranty",
      detail:
        "Trex backs their fencing with a 25-year limited warranty — one of the longest in the industry. Our installation workmanship guarantee stacks on top.",
    },
    {
      title: "Premium Curb Appeal",
      detail:
        "Rich woodgrain texture with consistent color throughout. No mismatched boards, no gray weathering, no pressure-washing required.",
    },
  ],
  vinyl: [
    {
      title: "Truly Zero Maintenance",
      detail:
        "Vinyl never needs painting, staining, or sealing. A garden hose is the only tool you will ever need. It resists rot, insects, and UV fading.",
    },
    {
      title: "NH Winter-Proof",
      detail:
        "Modern vinyl is engineered with UV stabilizers and impact modifiers specifically designed for cold climates. It flexes under snow load instead of cracking.",
    },
    {
      title: "Pool Code Compliant",
      detail:
        "Our vinyl privacy and semi-privacy panels meet NH pool enclosure requirements. We handle the measurements and compliance so the inspector passes it the first time.",
    },
    {
      title: "Lifetime Manufacturer Warranty",
      detail:
        "Most premium vinyl fencing carries a lifetime limited warranty from the manufacturer — the longest warranty of any fence material on the market.",
    },
  ],
  wood: [
    {
      title: "Classic Privacy at the Best Value",
      detail:
        "Wood privacy fencing delivers the most square footage of visual barrier per dollar. Cedar and pressure-treated pine give you full privacy without the premium composite price tag.",
    },
    {
      title: "Customizable Designs",
      detail:
        "Board-on-board, stockade, picket, horizontal slat — wood offers more design flexibility than any other material. Stain it, paint it, or let it weather naturally.",
    },
    {
      title: "Posts Set Below 48\" Frost Line",
      detail:
        "The single biggest reason wood fences fail in NH is shallow post depth. We set every post below the 48-inch frost line in concrete — no heaving, no shifting.",
    },
    {
      title: "Locally Sourced Materials",
      detail:
        "We source pressure-treated lumber and cedar from regional suppliers. Shorter supply chains mean fresher wood, better quality, and faster project timelines.",
    },
  ],
  "chain-link": [
    {
      title: "Most Affordable Containment",
      detail:
        "Chain link delivers secure pet and yard containment at a fraction of the cost of wood or vinyl. The lowest per-foot installed price of any permanent fence.",
    },
    {
      title: "Decades of Durability",
      detail:
        "Galvanized steel resists rust and corrosion for 20+ years. Vinyl-coated options (black, green, brown) add an extra layer of weather protection and curb appeal.",
    },
    {
      title: "Transparent Sightlines",
      detail:
        "Chain link keeps kids and pets in without blocking views or light. Ideal for side yards, back boundaries, and properties where an open feel matters.",
    },
    {
      title: "Fast Installation",
      detail:
        "Chain link installs faster than any other fence type. Most residential chain link projects are completed in a single day — less disruption to your yard and schedule.",
    },
  ],
  aluminum: [
    {
      title: "NH Pool Code Ready",
      detail:
        "Our aluminum panels meet NH pool safety code requirements out of the box — proper picket spacing, self-closing gates, and latch heights. Inspector-approved the first time.",
    },
    {
      title: "Rust-Proof for Life",
      detail:
        "Aluminum does not rust, corrode, or deteriorate — even through salt air on the Seacoast. Powder-coated finish is baked on permanently, not painted.",
    },
    {
      title: "Elegant Curb Appeal",
      detail:
        "Ornamental aluminum adds a classic, refined look that complements colonial, cape, and contemporary architecture without the maintenance iron demands.",
    },
    {
      title: "Follows Any Grade",
      detail:
        "Rackable aluminum panels follow your yard's natural slope smoothly — no stair-stepping required. Perfect for NH's hilly, uneven lots.",
    },
  ],
  repair: [
    {
      title: "Root-Cause Diagnosis",
      detail:
        "We do not just patch the visible damage. We diagnose why it failed — shallow posts, rot, frost heave, root intrusion — and fix the underlying cause so it does not recur.",
    },
    {
      title: "All Materials, All Brands",
      detail:
        "Wood, vinyl, aluminum, chain link — regardless of who installed it originally, we can match materials and repair it. We carry common replacement parts on every truck.",
    },
    {
      title: "Storm Damage Response",
      detail:
        "NH ice storms and nor'easters knock down fences every winter. We respond quickly to storm damage calls and work with your homeowner's insurance documentation.",
    },
    {
      title: "Free Assessment Included",
      detail:
        "Every repair starts with a free on-site assessment. We tell you exactly what needs fixing, what it costs, and whether repair or replacement makes more financial sense.",
    },
  ],
};

// ─── FAQ data per fence type ─────────────────────────────────────────────────

const faqMap: Record<string, { question: string; answer: string }[]> = {
  "trex-composite": [
    {
      question: "How long does Trex composite fencing last?",
      answer:
        "Trex composite fencing is engineered to last 25+ years with virtually zero maintenance. The manufacturer warranty covers fading, staining, and structural defects for 25 years.",
    },
    {
      question: "Is Trex fencing worth the higher upfront cost?",
      answer:
        "When you factor in zero staining, painting, or sealing over the life of the fence, composite typically costs less than wood over a 15-year period. No annual maintenance weekends, no re-staining every 2-3 years.",
    },
    {
      question: "What colors does Trex fencing come in?",
      answer:
        "Trex offers several woodgrain finishes — Winchester Grey, Saddle, and Woodland Brown are the most popular in Southern NH. We bring samples to your estimate so you can see them against your home.",
    },
  ],
  vinyl: [
    {
      question: "How long does vinyl fencing last in New Hampshire?",
      answer:
        "Quality vinyl fencing lasts 20-30 years in NH with zero maintenance. Modern vinyl is UV-stabilized and impact-modified for cold climates — it will not yellow, crack, or become brittle.",
    },
    {
      question: "Can vinyl fencing handle heavy snow loads?",
      answer:
        "Yes. Premium vinyl panels are reinforced with aluminum inserts for structural strength. They flex under load rather than cracking. We install with proper post spacing to handle NH snow and wind loads.",
    },
    {
      question: "Does vinyl fencing meet NH pool code?",
      answer:
        "Yes — our vinyl privacy and semi-privacy panels meet NH pool enclosure height and gap requirements. We verify compliance during the estimate so your inspection passes the first time.",
    },
  ],
  wood: [
    {
      question: "How deep do you set fence posts for wood fencing in NH?",
      answer:
        "Every post goes below the 48-inch NH frost line and is set in concrete. This is the single most important factor in whether your wood fence lasts 5 years or 25. We never shortcut post depth.",
    },
    {
      question: "Should I choose cedar or pressure-treated pine?",
      answer:
        "Cedar is naturally rot-resistant and weathers to a beautiful silver-gray. Pressure-treated pine is more affordable and can be stained any color. Both perform well in NH when properly installed. We walk you through the tradeoffs during your estimate.",
    },
    {
      question: "How often does a wood fence need maintenance?",
      answer:
        "Plan on staining or sealing every 2-3 years for the best longevity. Cedar can be left untreated if you like the natural weathered look. Pressure-treated should be stained within the first year after installation.",
    },
  ],
  "chain-link": [
    {
      question: "Is chain link strong enough to contain large dogs?",
      answer:
        "Yes. We install 11-gauge galvanized chain link as standard — strong enough for large breeds. For aggressive diggers, we add a tension wire or buried bottom rail. We assess your dog's behavior during the estimate.",
    },
    {
      question: "Can chain link be made more private?",
      answer:
        "Yes. Privacy slats (vertical inserts), privacy mesh, or hedge plantings along the fence line can add visual screening. Vinyl-coated chain link in black or green also reduces visibility and improves appearance.",
    },
    {
      question: "How long does galvanized chain link last?",
      answer:
        "Galvanized chain link typically lasts 20-25 years before needing replacement. Vinyl-coated chain link lasts even longer. Both are virtually maintenance-free — no painting, staining, or sealing required.",
    },
  ],
  aluminum: [
    {
      question: "Does aluminum fencing rust in NH coastal areas?",
      answer:
        "No. Aluminum does not rust or corrode — it is naturally corrosion-resistant and the powder-coated finish is baked on permanently. It is the best metal fence option for NH Seacoast properties.",
    },
    {
      question: "Can aluminum fencing follow a sloped yard?",
      answer:
        "Yes. Aluminum panels are rackable, meaning they adjust to follow your yard's natural grade smoothly without stair-stepping. This is especially important on NH's hilly lots where flat panels would leave gaps.",
    },
    {
      question: "Is aluminum fencing strong enough for security?",
      answer:
        "Aluminum ornamental fencing is a visual boundary and a deterrent — not a high-security barrier. For properties requiring true security, we recommend chain link with barbed wire or a solid wood/vinyl privacy fence.",
    },
  ],
  repair: [
    {
      question: "How quickly can you respond to storm damage?",
      answer:
        "We prioritize storm damage calls and aim to assess the damage within 24-48 hours. For safety hazards (downed fence on sidewalk or road), we respond as quickly as possible.",
    },
    {
      question: "Will my homeowner's insurance cover fence repair?",
      answer:
        "Many policies cover fence damage from storms, fallen trees, and wind. We provide detailed documentation and photos of the damage for your insurance claim. We cannot guarantee coverage — that depends on your specific policy.",
    },
    {
      question: "Should I repair or replace my fence?",
      answer:
        "It depends on the extent of the damage and the age of the fence. If more than 30% of the fence is damaged or if posts are rotting systemically, full replacement is usually more cost-effective. We give you an honest assessment during the free on-site visit.",
    },
  ],
};

// ─── Static generation ───────────────────────────────────────────────────────

export function generateStaticParams() {
  return services
    .filter((s) => !s.comingSoon)
    .map((s) => ({ slug: s.slug }));
}

// ─── SEO metadata ────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const title =
    service.id === "repair"
      ? `Fence Repair in Southern NH — ${siteConfig.shortName}`
      : `${service.name} Installation in Southern NH — ${siteConfig.shortName}`;

  const description =
    service.id === "repair"
      ? `${service.description} Free assessment included. Serving Nashua, Manchester, and all of Southern NH.`
      : `${service.description} ${service.priceRange}. Free on-site estimates within 72 hours across Southern NH.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  // comingSoon services redirect to contact
  if (service.comingSoon) {
    redirect("/contact");
  }

  const benefits = benefitsMap[service.id] ?? [];
  const faqs = faqMap[service.id] ?? [];

  const ctaLabel =
    service.id === "repair"
      ? "Schedule Your Free Assessment"
      : `Get Your Free ${service.name} Estimate`;

  return (
    <div className="pt-[100px]">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ background: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-xs mb-6"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span aria-hidden="true">›</span>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span aria-hidden="true">›</span>
              <span style={{ color: "rgba(255,255,255,0.8)" }}>{service.name}</span>
            </nav>

            <p
              className="font-mono text-xs tracking-[0.08em] uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              {service.id === "repair" ? "Repair Services" : "Installation Services"}
            </p>

            <h1
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1 }}
            >
              {service.name}
            </h1>

            <p
              className="font-display text-lg italic max-w-2xl"
              style={{ color: "var(--accent)" }}
            >
              {service.tagline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Overview ───────────────────────────────────────────────────────── */}
      <section
        className="py-16 lg:py-24"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Description */}
            <FadeIn className="lg:col-span-2">
              <h2
                className="font-display text-text-primary mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15 }}
              >
                {service.id === "repair" ? "Expert Fence Repair" : `Why ${service.name}?`}
              </h2>
              <p className="font-body text-text-secondary text-base lg:text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Use cases as chips */}
              <div className="flex flex-wrap gap-2">
                {service.useCases.map((useCase) => (
                  <span
                    key={useCase}
                    className="font-mono text-xs tracking-[0.04em] uppercase px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: "var(--sage-muted)",
                      color: "var(--sage)",
                    }}
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Price range callout */}
            <FadeIn delay={0.1} className="lg:col-span-1">
              <div
                className="rounded-xl border p-6 lg:p-8"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border)",
                }}
              >
                <p className="eyebrow text-text-muted mb-2">Pricing</p>
                <p
                  className="font-display text-xl mb-4"
                  style={{ color: "var(--primary)", lineHeight: 1.2 }}
                >
                  {service.priceRange}
                </p>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                  Final pricing depends on lot size, terrain, material grade, and site
                  conditions. Every estimate is free and given in writing.
                </p>
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  Get a Free Estimate →
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Why Choose [Type] in NH ────────────────────────────────────────── */}
      {benefits.length > 0 && (
        <section
          className="py-16 lg:py-24 border-t"
          style={{
            backgroundColor: "var(--bg-elevated)",
            borderColor: "var(--border)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="max-w-2xl mb-12">
              <p className="eyebrow text-text-muted mb-3">Why Choose This Material</p>
              <h2
                className="font-display text-text-primary"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15 }}
              >
                Why {service.name} in New Hampshire
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <FadeIn key={benefit.title} delay={i * 0.07} direction="up">
                  <div
                    className="bg-white rounded-xl border p-6 h-full"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <div
                      className="w-8 h-0.5 mb-4"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                    <p className="font-body font-semibold text-text-primary mb-2">
                      {benefit.title}
                    </p>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {benefit.detail}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section
          className="py-16 lg:py-24 border-t"
          style={{
            backgroundColor: "var(--bg-base)",
            borderColor: "var(--border)",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-12">
              <p className="eyebrow text-text-muted mb-3">Common Questions</p>
              <h2
                className="font-display text-text-primary"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15 }}
              >
                {service.name} FAQ
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <FadeIn key={faq.question} delay={i * 0.07} direction="up">
                  <div
                    className="bg-white rounded-xl border p-6"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <h3 className="font-body font-semibold text-text-primary mb-3">
                      {faq.question}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ─────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "var(--primary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2
              className="font-display text-white mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
            >
              {ctaLabel}
            </h2>
            <p
              className="font-body text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Free on-site estimate within 72 hours. Written quote before any work
              begins. No pressure, no surprises.
            </p>
            <Button href="/contact" variant="primary" size="lg" className="cta-pulse">
              {ctaLabel} →
            </Button>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
