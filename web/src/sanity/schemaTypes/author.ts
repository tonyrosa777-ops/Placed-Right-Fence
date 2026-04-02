import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Name", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", title: "Slug", options: { source: "name" } }),
    defineField({ name: "image", type: "image", title: "Photo", options: { hotspot: true } }),
    defineField({ name: "bio", type: "text", title: "Bio", rows: 3 }),
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
});
