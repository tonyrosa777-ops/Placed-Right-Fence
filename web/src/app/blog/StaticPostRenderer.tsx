import Link from "next/link";
import type { Section } from "@/data/blog-posts";

export default function StaticPostRenderer({ sections }: { sections: readonly Section[] }) {
  return (
    <div>
      {sections.map((section, i) => {
        switch (section.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="font-display text-2xl lg:text-3xl mt-10 mb-4 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {section.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="font-display text-xl lg:text-2xl mt-8 mb-3 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {section.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {section.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="my-4 space-y-2 pl-6 list-disc"
                style={{ color: "var(--text-secondary)" }}
              >
                {section.items.map((item, j) => (
                  <li key={j} className="text-base leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="my-4 space-y-2 pl-6 list-decimal"
                style={{ color: "var(--text-secondary)" }}
              >
                {section.items.map((item, j) => (
                  <li key={j} className="text-base leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <div
                key={i}
                className="my-8 rounded-xl p-8 text-center border border-[var(--accent)]"
                style={{ background: "var(--accent-muted)" }}
              >
                <h3
                  className="font-display text-xl mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {section.heading}
                </h3>
                <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
                  {section.body}
                </p>
                <Link
                  href={section.href ?? "/contact"}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all hover:brightness-110"
                  style={{ background: "var(--accent)", color: "var(--primary)" }}
                >
                  {section.cta ?? "Get Your Free Estimate →"}
                </Link>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
