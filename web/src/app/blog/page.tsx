import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { allPostsQuery, allCategoriesQuery } from "@/sanity/lib/queries";
import { siteConfig } from "@/data/site";
import { staticBlogPosts } from "@/data/blog-posts";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "NH Fence Blog — Tips, Guides & Local Insights",
  description:
    "Expert fence guides for New Hampshire homeowners — permits, frost-line installation, pool code compliance, seasonal timing, and material comparisons. Free advice from your local NH fence installer.",
  openGraph: {
    title: "NH Fence Blog — Placed Right Fence Co. LLC",
    description: "Expert fence guides for NH homeowners: permits, frost line, pool codes, and more.",
    url: `${siteConfig.url}/blog`,
  },
};

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  mainImage: { asset: { url: string; metadata: { lqip: string | null } }; alt: string } | null;
  categories: { _id: string; title: string; slug: { current: string } }[];
  estimatedReadingTime: number;
}

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

// Shape static posts to match the Sanity Post interface
const STATIC_AS_POSTS: Post[] = staticBlogPosts.map((p) => ({
  _id: p.slug,
  title: p.title,
  slug: { current: p.slug },
  publishedAt: p.publishedAt,
  excerpt: p.excerpt,
  mainImage: p.image
    ? { asset: { url: p.image, metadata: { lqip: null } }, alt: p.title }
    : null,
  categories: p.categories.map((cat) => ({
    _id: cat,
    title: cat,
    slug: { current: cat.toLowerCase().replace(/\s+/g, "-") },
  })),
  estimatedReadingTime: p.estimatedReadingTime,
}));

export default async function BlogPage() {
  const [sanityCms, categories]: [Post[], Category[]] = await Promise.all([
    client.fetch(allPostsQuery).catch(() => []),
    client.fetch(allCategoriesQuery).catch(() => []),
  ]);

  // Use Sanity posts when available; fall back to static articles
  const posts: Post[] = sanityCms.length > 0 ? sanityCms : STATIC_AS_POSTS;

  const featuredPost = posts[0] ?? null;
  const remainingPosts = posts.slice(1);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[var(--primary)] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="font-mono text-xs tracking-[0.08em] uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            NH Fence Resource Center
          </p>
          <h1 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-4">
            Guides for NH Homeowners
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            Permit requirements, frost-line engineering, pool code compliance, material
            comparisons — everything you need to make a smart fence decision in New Hampshire.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="bg-[var(--bg-elevated)] border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex gap-2 flex-wrap">
              <span
                className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={{
                  background: "var(--accent)",
                  color: "var(--primary)",
                }}
              >
                All
              </span>
              {categories.map((cat) => (
                <span
                  key={cat._id}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cat.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className="py-16 lg:py-24 min-h-[60vh]"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <EmptyState />
          ) : (
            // posts always has content (static fallback ensures this)
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-16">
                  <FeaturedPostCard post={featuredPost} />
                </div>
              )}

              {/* Post Grid */}
              {remainingPosts.length > 0 && (
                <>
                  <h2
                    className="font-display text-2xl mb-8"
                    style={{ color: "var(--text-primary)" }}
                  >
                    More Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {remainingPosts.map((post) => (
                      <PostCard key={post._id} post={post} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

      {/* Estimate CTA */}
      <section className="bg-[var(--primary)] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p
            className="font-mono text-xs tracking-[0.08em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Ready to Get Started?
          </p>
          <h2 className="font-display text-3xl text-white mb-4">
            Get Your Free On-Site Estimate
          </h2>
          <p className="text-white/65 mb-8">
            We come to you within 72 hours. Written estimate before any work begins.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-sans font-semibold text-base transition-all hover:brightness-110"
            style={{ background: "var(--accent)", color: "var(--primary)" }}
          >
            Get Your Free Estimate →
          </Link>
        </div>
      </section>
    </>
  );
}

function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="group block">
      <article
        className="rounded-2xl overflow-hidden border border-[var(--border)] transition-shadow hover:shadow-xl"
        style={{ background: "var(--bg-card)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-64 lg:h-full min-h-[280px] bg-[var(--bg-elevated)]">
            {post.mainImage?.asset?.url ? (
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt ?? post.title}
                fill
                className="object-cover"
                placeholder={post.mainImage.asset.metadata?.lqip ? "blur" : "empty"}
                blurDataURL={post.mainImage.asset.metadata?.lqip ?? undefined}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "var(--accent-muted)" }}
              >
                <span className="text-5xl">🏡</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              <span
                className="text-xs font-mono tracking-[0.06em] uppercase px-2 py-1 rounded"
                style={{ background: "var(--accent)", color: "var(--primary)" }}
              >
                Featured
              </span>
              {post.categories?.slice(0, 2).map((cat) => (
                <span
                  key={cat._id}
                  className="text-xs font-mono tracking-[0.06em] uppercase px-2 py-1 rounded border border-[var(--border)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {cat.title}
                </span>
              ))}
            </div>

            <h2
              className="font-display text-2xl lg:text-3xl leading-tight mb-3 group-hover:text-[var(--accent)] transition-colors"
              style={{ color: "var(--text-primary)" }}
            >
              {post.title}
            </h2>
            {post.excerpt && (
              <p className="text-base leading-relaxed mb-6 line-clamp-3" style={{ color: "var(--text-secondary)" }}>
                {post.excerpt}
              </p>
            )}
            <div
              className="flex items-center gap-4 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
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
        </div>
      </article>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="group block h-full">
      <article
        className="h-full rounded-xl overflow-hidden border border-[var(--border)] transition-all hover:shadow-lg hover:border-[var(--accent)] flex flex-col"
        style={{ background: "var(--bg-card)" }}
      >
        {/* Image */}
        <div className="relative h-48 bg-[var(--bg-elevated)]">
          {post.mainImage?.asset?.url ? (
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt ?? post.title}
              fill
              className="object-cover"
              placeholder={post.mainImage.asset.metadata?.lqip ? "blur" : "empty"}
              blurDataURL={post.mainImage.asset.metadata?.lqip ?? undefined}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-4xl"
              style={{ background: "var(--accent-muted)" }}
            >
              🏡
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {post.categories?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {post.categories.slice(0, 2).map((cat) => (
                <span
                  key={cat._id}
                  className="text-xs font-mono tracking-[0.06em] uppercase px-2 py-0.5 rounded border border-[var(--border)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {cat.title}
                </span>
              ))}
            </div>
          )}

          <h3
            className="font-display text-xl leading-tight mb-2 group-hover:text-[var(--accent)] transition-colors"
            style={{ color: "var(--text-primary)" }}
          >
            {post.title}
          </h3>

          {post.excerpt && (
            <p
              className="text-sm leading-relaxed line-clamp-3 flex-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {post.excerpt}
            </p>
          )}

          <div
            className="flex items-center gap-3 mt-4 pt-4 border-t border-[var(--border)] text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
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
      </article>
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-24">
      <p className="text-5xl mb-4">📝</p>
      <h2 className="font-display text-2xl mb-2" style={{ color: "var(--text-primary)" }}>
        Guides coming soon
      </h2>
      <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
        NH fence permit guides, frost-line engineering, pool code compliance — publishing shortly.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all hover:brightness-110"
        style={{ background: "var(--accent)", color: "var(--primary)" }}
      >
        Get Your Free Estimate →
      </Link>
    </div>
  );
}
