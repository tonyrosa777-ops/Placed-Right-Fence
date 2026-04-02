"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

const galleryItems = [
  { id: 1, type: "wood",       label: "Cedar Privacy Fence",    aspectClass: "aspect-[4/3]", src: "/gallery/gallery-1.jpg" },
  { id: 2, type: "vinyl",      label: "White Vinyl Privacy",     aspectClass: "aspect-square", src: "/gallery/gallery-2.jpg" },
  { id: 3, type: "aluminum",   label: "Ornamental Aluminum",     aspectClass: "aspect-[4/3]", src: "/gallery/gallery-3.jpg" },
  { id: 4, type: "chain-link", label: "Galvanized Chain Link",   aspectClass: "aspect-[4/3]", src: "/gallery/gallery-4.jpg" },
  { id: 5, type: "wood",       label: "Dog-Ear Privacy Fence",   aspectClass: "aspect-square", src: "/gallery/gallery-5.jpg" },
  { id: 6, type: "vinyl",      label: "Tan Vinyl with Gate",     aspectClass: "aspect-[4/3]", src: "/gallery/gallery-6.jpg" },
  { id: 7, type: "aluminum",   label: "Pool Code Aluminum",      aspectClass: "aspect-[4/3]", src: "/gallery/gallery-7.jpg" },
  { id: 8, type: "wood",       label: "Pressure-Treated Posts",  aspectClass: "aspect-square", src: "/gallery/gallery-8.jpg" },
  { id: 9, type: "repair",     label: "Storm Damage Repair",     aspectClass: "aspect-[4/3]", src: "/gallery/gallery-9.jpg" },
] as const;

type FilterValue = "all" | "wood" | "vinyl" | "aluminum" | "chain-link" | "repair";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all",        label: "All Projects" },
  { value: "wood",       label: "Wood" },
  { value: "vinyl",      label: "Vinyl" },
  { value: "aluminum",   label: "Aluminum" },
  { value: "chain-link", label: "Chain Link" },
  { value: "repair",     label: "Repair" },
];

function GalleryCard({ item }: { item: (typeof galleryItems)[number] }) {
  return (
    <div
      className="rounded-xl overflow-hidden border group cursor-pointer transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:border-accent"
      style={{ borderColor: "var(--border)" }}
    >
      <div className={`${item.aspectClass} relative overflow-hidden`}>
        <Image
          src={item.src}
          alt={item.label}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: "linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 60%)" }}
        >
          <p className="font-body font-semibold text-sm text-white">{item.label}</p>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="font-body font-semibold text-sm text-text-primary">{item.label}</p>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [active, setActive] = useState<FilterValue>("all");

  const visible = active === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.type === active);

  return (
    <>
      {/* Filter bar */}
      <section
        className="py-6 border-b sticky top-[72px] z-30 bg-white"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {FILTERS.map((filter) => {
              const isActive = filter.value === active;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActive(filter.value)}
                  className="eyebrow text-[11px] px-4 py-2 rounded-full border whitespace-nowrap transition-all duration-150 cursor-pointer shrink-0"
                  style={{
                    borderColor:     isActive ? "var(--accent)" : "var(--border)",
                    backgroundColor: isActive ? "var(--accent-muted)" : "transparent",
                    color:           isActive ? "var(--accent)" : "var(--text-muted)",
                  }}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery grid — animated filter */}
      <section
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <GalleryCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-10 text-center">
            <p className="font-body text-xs text-text-muted max-w-sm mx-auto">
              Client photos from completed Southern NH installs being added weekly.
              Follow{" "}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors duration-150 hover:text-accent"
                style={{ color: "var(--text-secondary)" }}
              >
                {siteConfig.social.instagramHandle}
              </a>
              {" "}for the latest.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
