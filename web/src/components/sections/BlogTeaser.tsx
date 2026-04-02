// Blog Teaser — homepage section — dark background
// 3 most recent blog posts with images and excerpt

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { staticBlogPosts } from "@/data/blog-posts";

const PREVIEW_POSTS = staticBlogPosts.slice(0, 3);

export default function BlogTeaser() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="text-center mb-12">
          <p
            className="font-mono text-xs tracking-[0.1em] uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Fence Advice
          </p>
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
          >
            Know Before You Buy.
          </h2>
          <p
            className="font-body text-sm max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            NH-specific guides on frost depth, permits, dog containment, pool code, and more.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {PREVIEW_POSTS.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.07} direction="up">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 h-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                {/* Image */}
                {post.image && (
                  <div className="relative w-full h-44 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(13,13,13,0.5) 0%, transparent 60%)" }}
                    />
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  {post.categories[0] && (
                    <span
                      className="eyebrow text-[10px] px-2 py-1 rounded self-start mb-3"
                      style={{ backgroundColor: "rgba(201,168,76,0.12)", color: "var(--accent)" }}
                    >
                      {post.categories[0]}
                    </span>
                  )}
                  <h3 className="font-body font-semibold text-sm leading-snug mb-2 flex-1" style={{ color: "rgba(255,255,255,0.9)" }}>
                    {post.title}
                  </h3>
                  <p className="font-body text-xs leading-relaxed line-clamp-2 mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {post.estimatedReadingTime} min read
                    </span>
                    <span className="font-body text-xs font-medium" style={{ color: "var(--accent)" }}>
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-body font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
            style={{ border: "1px solid rgba(201,168,76,0.35)", color: "var(--accent)" }}
          >
            Read All Articles →
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
