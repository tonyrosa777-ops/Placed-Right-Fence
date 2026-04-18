import Link from "next/link";
import type { LegalBlock, LegalSection as LegalSectionType } from "@/data/site";

export function LegalBlockRenderer({ block }: { block: LegalBlock }) {
  if (block.kind === "p") {
    return <p>{block.text}</p>;
  }
  if (block.kind === "ul") {
    return (
      <ul>
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <p>
      {block.before}
      <Link
        href={block.linkHref}
        className="underline hover:opacity-70 transition-opacity"
        style={{ color: "var(--accent)" }}
      >
        {block.linkText}
      </Link>
      {block.after}
    </p>
  );
}

export function LegalSection({ section }: { section: LegalSectionType }) {
  return (
    <div>
      <h2
        className="font-display text-text-primary mb-4"
        style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
      >
        {section.title}
      </h2>
      <div className="font-body text-text-secondary text-sm leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-text-secondary">
        {section.blocks.map((block, i) => (
          <LegalBlockRenderer key={i} block={block} />
        ))}
      </div>
    </div>
  );
}
