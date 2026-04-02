import { groq } from "next-sanity";

// All published posts, newest first
export const allPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage { asset->{url, metadata{lqip}}, alt },
    "categories": categories[]->{ _id, title, slug },
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200)
  }
`;

// Single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && !(_id in path('drafts.**'))][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage { asset->{url, metadata{lqip, dimensions}}, alt },
    body,
    "categories": categories[]->{ _id, title, slug },
    "author": author->{ name, image { asset->{url} } },
    seo,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200)
  }
`;

// All post slugs (for generateStaticParams)
export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))].slug.current
`;

// All categories
export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id, title, slug, description
  }
`;

// Posts by category slug
export const postsByCategoryQuery = groq`
  *[_type == "post" && $categorySlug in categories[]->slug.current && !(_id in path('drafts.**'))]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage { asset->{url, metadata{lqip}}, alt },
    "categories": categories[]->{ _id, title, slug },
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200)
  }
`;
