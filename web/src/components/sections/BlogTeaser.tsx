// Blog Teaser — homepage section
// 3 most recent blog posts with images and excerpt
// Source: market-intelligence.md §3 (SEO — blog authority gap)

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/animations/SectionHeading";
import Button from "@/components/ui/Button";
import { staticBlogPosts } from "@/data/blog-posts";

const PREVIEW_POSTS = staticBlogPosts.slice(0, 3);

export default function BlogTeaser() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "var(--bg-elevated)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Fence Advice"
          heading="Know Before You Buy."
          subheading="NH-specific guides on frost depth, permits, dog containment, pool code, and more. Written by someone who installs fences here — not an SEO agency."
          align="center"
          className="mb-12 max-w-2xl mx-auto"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PREVIEW_POSTS.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.07} direction="up">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl border overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 h-full"
                style={{ borderColor: "var(--border)" }}
              >
                {/* Image */}
                {post.image && (
                  <div className="relative w-full h-44 overflow-hidden bg-[#F0EBE0]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  {/* Category chip */}
                  {post.categories[0] && (
                    <span
                      className="eyebrow text-[10px] px-2 py-1 rounded self-start mb-3"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.1)",
                        color: "var(--accent)",
                      }}
                    >
                      {post.categories[0]}
                    </span>
                  )}

                  <h3 className="font-body font-semibold text-sm leading-snug text-text-primary mb-2 flex-1">
                    {post.title}
                  </h3>

                  <p className="font-body text-xs text-text-muted leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                    <span className="font-body text-xs text-text-muted">
                      {post.estimatedReadingTime} min read
                    </span>
                    <span
                      className="font-body text-xs font-medium transition-colors"
                      style={{ color: "var(--accent)" }}
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center">
          <Button href="/blog" variant="secondary" size="lg">
            Read All Articles →
          </Button>
        </FadeIn>

      </div>
    </section>
  );
}
