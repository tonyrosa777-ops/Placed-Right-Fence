"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

// ── Per-type item arrays (9 each) ─────────────────────────────────────────────
// aspect: "aspect-[4/3]" | "aspect-square"

const WOOD = [
  { id: 1,  label: "Cedar Privacy Fence",       aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-1.jpg"  },
  { id: 5,  label: "Dog-Ear Privacy Fence",      aspectClass: "aspect-square", src: "/gallery/gallery-5.jpg"  },
  { id: 8,  label: "Pressure-Treated Posts",     aspectClass: "aspect-square", src: "/gallery/gallery-8.jpg"  },
  { id: 10, label: "Shadowbox Wood Fence",        aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-10.jpg" },
  { id: 11, label: "Board-on-Board with Lattice", aspectClass: "aspect-square", src: "/gallery/gallery-11.jpg" },
  { id: 12, label: "Split-Rail with Wire Mesh",   aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-12.jpg" },
  { id: 13, label: "Horizontal Cedar Slat",       aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-13.jpg" },
  { id: 14, label: "Classic White Picket",        aspectClass: "aspect-square", src: "/gallery/gallery-14.jpg" },
  { id: 15, label: "Wood Fence on Sloped Terrain",aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-15.jpg" },
] as const;

const VINYL = [
  { id: 2,  label: "White Vinyl Privacy",         aspectClass: "aspect-square", src: "/gallery/gallery-2.jpg"  },
  { id: 6,  label: "Tan Vinyl with Gate",          aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-6.jpg"  },
  { id: 16, label: "Grey Vinyl Privacy Fence",     aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-16.jpg" },
  { id: 17, label: "White Vinyl Semi-Privacy",     aspectClass: "aspect-square", src: "/gallery/gallery-17.jpg" },
  { id: 18, label: "Vinyl 3-Rail Ranch Fence",     aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-18.jpg" },
  { id: 19, label: "White Vinyl Picket Fence",     aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-19.jpg" },
  { id: 20, label: "Tan Vinyl Decorative Caps",    aspectClass: "aspect-square", src: "/gallery/gallery-20.jpg" },
  { id: 21, label: "White Vinyl Pool Enclosure",   aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-21.jpg" },
  { id: 22, label: "Ivory Vinyl Corner Fence",     aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-22.jpg" },
] as const;

const ALUMINUM = [
  { id: 3,  label: "Ornamental Aluminum",          aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-3.jpg"  },
  { id: 7,  label: "Pool Code Aluminum",           aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-7.jpg"  },
  { id: 23, label: "Flat-Top Aluminum Picket",     aspectClass: "aspect-square", src: "/gallery/gallery-23.jpg" },
  { id: 24, label: "Bronze Aluminum Driveway",     aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-24.jpg" },
  { id: 25, label: "Aluminum with Arched Gate",    aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-25.jpg" },
  { id: 26, label: "Aluminum Around Deck",         aspectClass: "aspect-square", src: "/gallery/gallery-26.jpg" },
  { id: 27, label: "Aluminum with Stone Pillars",  aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-27.jpg" },
  { id: 28, label: "Aluminum on Sloped Terrain",   aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-28.jpg" },
  { id: 29, label: "Aluminum Corner Fence",        aspectClass: "aspect-square", src: "/gallery/gallery-29.jpg" },
] as const;

const CHAIN_LINK = [
  { id: 4,  label: "Galvanized Chain Link",        aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-4.jpg"  },
  { id: 30, label: "Black Vinyl-Coated Chain Link", aspectClass: "aspect-square", src: "/gallery/gallery-30.jpg" },
  { id: 31, label: "Chain Link with Privacy Slats", aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-31.jpg" },
  { id: 32, label: "Chain Link Dog Kennel Run",     aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-32.jpg" },
  { id: 33, label: "Chain Link Sports Court",       aspectClass: "aspect-square", src: "/gallery/gallery-33.jpg" },
  { id: 34, label: "Mini-Mesh Chain Link",          aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-34.jpg" },
  { id: 35, label: "Chain Link Gate",               aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-35.jpg" },
  { id: 36, label: "Chain Link Along Wooded Edge",  aspectClass: "aspect-square", src: "/gallery/gallery-36.jpg" },
] as const;

const REPAIR = [
  { id: 9,  label: "Storm Damage Repair",           aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-9.jpg"  },
  { id: 38, label: "Rotted Post Replacement",        aspectClass: "aspect-square", src: "/gallery/gallery-38.jpg" },
  { id: 39, label: "Reset After Frost Heave",        aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-39.jpg" },
  { id: 40, label: "Gate Rehang & Alignment",        aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-40.jpg" },
  { id: 41, label: "Board Replacement",              aspectClass: "aspect-square", src: "/gallery/gallery-41.jpg" },
  { id: 42, label: "Leaning Fence Straightened",     aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-42.jpg" },
  { id: 43, label: "Chain Link Storm Repair",        aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-43.jpg" },
  { id: 44, label: "Post-and-Rail Repair",           aspectClass: "aspect-square", src: "/gallery/gallery-44.jpg" },
  { id: 45, label: "Full Section Rebuild",           aspectClass: "aspect-[4/3]",  src: "/gallery/gallery-45.jpg" },
] as const;

// "All" view: interleave wood → vinyl → aluminum → chain-link → repair, repeating
const ALL_ITEMS = Array.from({ length: 9 }, (_, i) => [
  WOOD[i], VINYL[i], ALUMINUM[i], CHAIN_LINK[i], REPAIR[i],
]).flat().filter((item): item is NonNullable<typeof item> => Boolean(item));

type FilterValue = "all" | "wood" | "vinyl" | "aluminum" | "chain-link" | "repair";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all",        label: "All Projects" },
  { value: "wood",       label: "Wood" },
  { value: "vinyl",      label: "Vinyl" },
  { value: "aluminum",   label: "Aluminum" },
  { value: "chain-link", label: "Chain Link" },
  { value: "repair",     label: "Repair" },
];

const ITEMS_BY_TYPE: Record<FilterValue, readonly { id: number; label: string; aspectClass: string; src: string }[]> = {
  all:          ALL_ITEMS,
  wood:         WOOD,
  vinyl:        VINYL,
  aluminum:     ALUMINUM,
  "chain-link": CHAIN_LINK,
  repair:       REPAIR,
};

function GalleryCard({ item }: { item: { id: number; label: string; aspectClass: string; src: string } }) {
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
  const visible = ITEMS_BY_TYPE[active];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence initial={false} mode="popLayout">
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
          </div>

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
