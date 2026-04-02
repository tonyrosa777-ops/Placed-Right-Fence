import { defineType, defineArrayMember } from "sanity";

// Portable Text body field — used in blog posts
export const blockContent = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "URL",
            fields: [
              { name: "href", type: "url", title: "URL" },
              { name: "blank", type: "boolean", title: "Open in new tab", initialValue: false },
            ],
          },
        ],
      },
    }),
    // Inline images
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alt text" },
        { name: "caption", type: "string", title: "Caption (optional)" },
      ],
    }),
    // Call-to-action block (estimate CTA inside posts)
    defineArrayMember({
      name: "callToAction",
      type: "object",
      title: "Call to Action",
      fields: [
        { name: "heading", type: "string", title: "Heading" },
        { name: "body", type: "text", title: "Body" },
        { name: "ctaLabel", type: "string", title: "Button label" },
        { name: "ctaHref", type: "string", title: "Button URL", initialValue: "/contact" },
      ],
    }),
  ],
});
