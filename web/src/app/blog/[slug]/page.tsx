import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "next-sanity";
import type { PortableTextComponents } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery, allPostSlugsQuery } from "@/sanity/lib/queries";
import { siteConfig } from "@/data/site";

export const revalidate = 3600;

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const slugs: string[] = await client.fetch(allPostSlugsQuery).catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug }).catch(() => null);
  if (!post) return {};

  const title = post.seo?.metaTitle ?? post.title;
  const description = post.seo?.metaDescription ?? post.excerpt ?? "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/blog/${slug}`,
      images: post.mainImage?.asset?.url
        ? [{ url: post.mainImage.asset.url, alt: post.mainImage.alt ?? title }]
        : [],
    },
  };
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-display text-2xl lg:text-3xl mt-10 mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl lg:text-2xl mt-8 mb-3 leading-tight" style={{ color: "var(--text-primary)" }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-sans font-semibold text-lg mt-6 mb-2" style={{ color: "var(--text-primary)" }}>
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-4 pl-6 my-6 italic text-lg"
        style={{ borderColor: "var(--accent)", color: "var(--text-secondary)" }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 space-y-2 pl-6 list-disc" style={{ color: "var(--text-secondary)" }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 space-y-2 pl-6 list-decimal" style={{ color: "var(--text-secondary)" }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold" style={{ color: "var(--text-primary)" }}>
        {children}
      </strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code
        className="font-mono text-sm px-1.5 py-0.5 rounded"
        style={{ background: "var(--bg-elevated)", color: "var(--accent)" }}
      >
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="underline underline-offset-2 hover:opacity-80 transition-opacity"
        style={{ color: "var(--accent)" }}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset?.url ? (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={value.asset.url}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-sm text-center" style={{ color: "var(--text-muted)" }}>
              {value.caption}
            </figcaption>
          )}
        </figure>
      ) : null,
    callToAction: ({ value }) => (
      <div
        className="my-8 rounded-xl p-8 text-center border border-[var(--accent)]"
        style={{ background: "var(--accent-muted)" }}
      >
        {value.heading && (
          <h3 className="font-display text-xl mb-2" style={{ color: "var(--text-primary)" }}>
            {value.heading}
          </h3>
        )}
        {value.body && (
          <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
            {value.body}
          </p>
        )}
        <Link
          href={value.ctaHref ?? "/contact"}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all hover:brightness-110"
          style={{ background: "var(--accent)", color: "var(--primary)" }}
        >
          {value.ctaLabel ?? "Get Your Free Estimate →"}
        </Link>
      </div>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await client.fetch(postBySlugQuery, { slug }).catch(() => null);

  if (!post) notFound();

  return (
    <>
      {/* Post Hero */}
      <section className="bg-[var(--primary)] text-white pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="truncate">{post.title}</span>
          </nav>

          {/* Categories */}
          {post.categories?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((cat: { _id: string; title: string }) => (
                <span
                  key={cat._id}
                  className="text-xs font-mono tracking-[0.06em] uppercase px-2 py-0.5 rounded"
                  style={{ background: "var(--accent)", color: "var(--primary)" }}
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-3xl lg:text-4xl text-white leading-tight mb-4">
            {post.title}
          </h1>

          <div
            className="flex items-center gap-4 text-sm flex-wrap"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {post.author?.name && <span>By {post.author.name}</span>}
            {post.author?.name && <span>·</span>}
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            {post.estimatedReadingTime > 0 && (
              <>
                <span>·</span>
                <span>{post.estimatedReadingTime} min read</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Cover Image */}
      {post.mainImage?.asset?.url && (
        <div className="relative w-full h-72 lg:h-96 bg-[var(--bg-elevated)]">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt ?? post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder={post.mainImage.asset.metadata?.lqip ? "blur" : "empty"}
            blurDataURL={post.mainImage.asset.metadata?.lqip}
          />
        </div>
      )}

      {/* Article Body */}
      <section className="py-16" style={{ background: "var(--bg-base)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            {/* Main content */}
            <article className="max-w-prose">
              {post.excerpt && (
                <p
                  className="text-lg leading-relaxed mb-8 pb-8 border-b border-[var(--border)] font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {post.excerpt}
                </p>
              )}
              {post.body && (
                <PortableText value={post.body} components={portableTextComponents} />
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Estimate CTA */}
              <div
                className="rounded-xl p-6 border border-[var(--accent)]"
                style={{ background: "var(--accent-muted)" }}
              >
                <p
                  className="font-mono text-xs tracking-[0.08em] uppercase mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  Ready to Get Started?
                </p>
                <h3
                  className="font-display text-lg mb-2 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Free On-Site Estimate
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
                  We come to you within 72 hours. Written estimate before any work begins.
                </p>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-1 px-4 py-2.5 rounded-md font-semibold text-sm transition-all hover:brightness-110"
                  style={{ background: "var(--accent)", color: "var(--primary)" }}
                >
                  Get Free Estimate →
                </Link>
              </div>

              {/* Trust signals */}
              <div
                className="rounded-xl p-6 border border-[var(--border)]"
                style={{ background: "var(--bg-card)" }}
              >
                <p
                  className="font-mono text-xs tracking-[0.08em] uppercase mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Why Placed Right
                </p>
                <ul className="space-y-3">
                  {[
                    "Free estimate within 72 hours",
                    "Posts set below the frost line",
                    "Fully insured — NH born & raised",
                    "Written estimate that doesn't change",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--accent)" }} className="mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back to blog */}
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
                style={{ color: "var(--text-muted)" }}
              >
                ← Back to all articles
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
