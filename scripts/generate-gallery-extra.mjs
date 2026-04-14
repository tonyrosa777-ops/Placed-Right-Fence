/**
 * Gallery extra image generator — Placed Right Fence Co. LLC
 * Generates gallery-10.jpg through gallery-45.jpg (36 new photos)
 * 5 types × 9 photos each — varied season, angle, home style, yard setting
 *
 * Usage: node scripts/generate-gallery-extra.mjs
 * Requires: FAL_KEY in web/.env.local
 * Skips files that already exist (safe to re-run on failure)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import https from "https";
import http from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const webRequire = createRequire(join(__dirname, "../web/package.json"));
const { createFalClient } = webRequire("@fal-ai/client");

// ── Load FAL_KEY ──────────────────────────────────────────────────────────────
const envPath = join(__dirname, "../web/.env.local");
if (!existsSync(envPath)) { console.error("❌  web/.env.local not found"); process.exit(1); }
const envContent = readFileSync(envPath, "utf-8");
const falKeyMatch = envContent.match(/^FAL_KEY=(.+)$/m);
if (!falKeyMatch?.[1]?.trim()) { console.error("❌  FAL_KEY missing in web/.env.local"); process.exit(1); }
const fal = createFalClient({ credentials: falKeyMatch[1].trim() });

// ── Shared prompt suffix ──────────────────────────────────────────────────────
const BASE = "New Hampshire suburban residential setting, professional real estate photography, Canon EOS R5, tack sharp, photorealistic, 8K detail, no people, no text";

// ── 36 new gallery items ──────────────────────────────────────────────────────
// Aspect: "landscape_4_3" (1365×1024) | "square_hd" (1024×1024)

const IMAGES = [

  // ── WOOD extras (gallery-10 to gallery-15) ────────────────────────────────
  {
    id: 10, filename: "gallery-10.jpg", image_size: "landscape_4_3",
    label: "Shadowbox Wood Fence",
    prompt: `Ultra-photorealistic photograph of a freshly installed shadowbox wood fence (alternating overlapping boards creating partial privacy) in a large New Hampshire backyard, pressure-treated pine boards with uniform spacing, warm summer morning light, lush green grass, cape cod style home in background, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 11, filename: "gallery-11.jpg", image_size: "square_hd",
    label: "Board-on-Board with Lattice Top",
    prompt: `Ultra-photorealistic photograph of a board-on-board cedar privacy fence with decorative lattice top section in a New England residential front yard, warm honey-stained cedar, colonial home behind fence, mature maple trees, overcast afternoon light giving even shadows, Canon EOS R5 50mm f/5.6, ${BASE}`,
  },
  {
    id: 12, filename: "gallery-12.jpg", image_size: "landscape_4_3",
    label: "Split-Rail with Wire Mesh",
    prompt: `Ultra-photorealistic photograph of a two-rail split-rail wood fence with welded wire mesh attached behind the rails for pet containment, rustic weathered grey cedar rails, wide open New Hampshire yard with wooded tree line in the background, bright autumn foliage, golden afternoon light, wide establishing shot, Canon EOS R5 24mm f/8, ${BASE}`,
  },
  {
    id: 13, filename: "gallery-13.jpg", image_size: "landscape_4_3",
    label: "Horizontal Cedar Slat Fence",
    prompt: `Ultra-photorealistic photograph of a modern horizontal cedar slat privacy fence with tight spacing, natural unstained cedar, contemporary craftsman home, professionally landscaped yard with ornamental grasses and stone path, late afternoon summer sun casting long horizontal shadows across the boards, architectural photography, Canon EOS R5 35mm f/4, ${BASE}`,
  },
  {
    id: 14, filename: "gallery-14.jpg", image_size: "square_hd",
    label: "Classic White Picket Fence",
    prompt: `Ultra-photorealistic photograph of a classic white-painted wood picket fence enclosing the front yard of a charming New England colonial home, evenly spaced pointed pickets, white post caps, lush green lawn and colorful perennial flower beds along the fence line, bright blue sky, spring morning, Canon EOS R5 50mm f/5.6, ${BASE}`,
  },
  {
    id: 15, filename: "gallery-15.jpg", image_size: "landscape_4_3",
    label: "Wood Fence on Sloped Terrain",
    prompt: `Ultra-photorealistic photograph of a racked cedar privacy fence following a gently sloping New Hampshire backyard, fence steps down the grade with each panel racked to follow the slope, warm golden fall foliage visible over the top of the fence, red and orange maple trees, late October afternoon light, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },

  // ── VINYL extras (gallery-16 to gallery-22) ───────────────────────────────
  {
    id: 16, filename: "gallery-16.jpg", image_size: "landscape_4_3",
    label: "Grey Vinyl Privacy Fence",
    prompt: `Ultra-photorealistic photograph of a brand new grey vinyl privacy fence enclosing the backyard of a modern contemporary New Hampshire home, warm grey PVC boards with post caps, black metal gate hardware, well-maintained lawn with ornamental shrubs, bright overcast day giving clean even light, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 17, filename: "gallery-17.jpg", image_size: "square_hd",
    label: "White Vinyl Semi-Privacy",
    prompt: `Ultra-photorealistic photograph of a white vinyl semi-privacy fence with alternating board spacing allowing light and air through, decorative lattice top section, New England colonial home, raised garden beds along the fence interior, spring morning light, Canon EOS R5 50mm f/5.6, ${BASE}`,
  },
  {
    id: 18, filename: "gallery-18.jpg", image_size: "landscape_4_3",
    label: "Vinyl 3-Rail Ranch Fence",
    prompt: `Ultra-photorealistic photograph of a white vinyl 3-rail ranch-style fence bordering a large New Hampshire residential property, sweeping wide shot showing fence running across a broad green lawn, mature shade trees beyond the fence line, blue sky with scattered clouds, summer afternoon, Canon EOS R5 24mm f/8, ${BASE}`,
  },
  {
    id: 19, filename: "gallery-19.jpg", image_size: "landscape_4_3",
    label: "White Vinyl Picket Fence",
    prompt: `Ultra-photorealistic photograph of a white vinyl scalloped picket fence around the front yard of a charming New Hampshire cape cod home, evenly spaced rounded picket tops creating a scalloped pattern, flower beds with tulips and daffodils in bloom, white vinyl gate with latch, spring morning, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 20, filename: "gallery-20.jpg", image_size: "square_hd",
    label: "Tan Vinyl with Decorative Caps",
    prompt: `Ultra-photorealistic photograph of a tan vinyl privacy fence with premium routed boards and pyramid post caps, warm sand-beige color PVC, close-up three-quarter angle showing board texture and post cap detail, well-trimmed lawn along fence base, afternoon light, Canon EOS R5 50mm f/4, ${BASE}`,
  },
  {
    id: 21, filename: "gallery-21.jpg", image_size: "landscape_4_3",
    label: "White Vinyl Pool Enclosure",
    prompt: `Ultra-photorealistic photograph of a white vinyl privacy fence enclosing an in-ground swimming pool area at a New Hampshire residential home, pool code compliant fence with self-latching gate, sparkling blue pool water visible over the fence top, concrete pool deck with lounge chairs, sunny summer afternoon, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 22, filename: "gallery-22.jpg", image_size: "landscape_4_3",
    label: "Ivory Vinyl Corner Fence",
    prompt: `Ultra-photorealistic photograph of an ivory white vinyl privacy fence wrapping around a corner lot in a New Hampshire neighborhood, fence turns a clean 90-degree corner with mitered post, winter afternoon light, light snow dusting on top of the fence cap rail, bare deciduous trees in background, Canon EOS R5 35mm f/8, ${BASE}`,
  },

  // ── ALUMINUM extras (gallery-23 to gallery-29) ────────────────────────────
  {
    id: 23, filename: "gallery-23.jpg", image_size: "square_hd",
    label: "Flat-Top Aluminum Picket",
    prompt: `Ultra-photorealistic photograph of a black powder-coated aluminum flat-top picket fence around the front yard of a red brick colonial New England home, evenly spaced square-top pickets, brick pathway leading to front door visible through fence, mature foundation shrubs, spring afternoon, Canon EOS R5 50mm f/5.6, ${BASE}`,
  },
  {
    id: 24, filename: "gallery-24.jpg", image_size: "landscape_4_3",
    label: "Bronze Aluminum Driveway Fence",
    prompt: `Ultra-photorealistic photograph of a bronze powder-coated aluminum fence running along a residential driveway in New Hampshire, warm bronze finish, spear-top pickets, stone wall pillar at the driveway entrance, manicured lawn, late afternoon golden hour light, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 25, filename: "gallery-25.jpg", image_size: "landscape_4_3",
    label: "Aluminum with Arched Gate",
    prompt: `Ultra-photorealistic photograph of a black aluminum ornamental fence with a beautiful arched double entry gate, decorative scrollwork in the gate panels, estate-style New Hampshire residential home driveway, stone pillar posts flanking the gate, evening golden light, Canon EOS R5 35mm f/4, ${BASE}`,
  },
  {
    id: 26, filename: "gallery-26.jpg", image_size: "square_hd",
    label: "Aluminum Fence Around Deck",
    prompt: `Ultra-photorealistic photograph of a black aluminum fence installed around the perimeter of a raised backyard deck, flat-top aluminum pickets matching the deck railing style, composite deck boards, New Hampshire backyard with lawn below, summer afternoon, Canon EOS R5 50mm f/5.6, ${BASE}`,
  },
  {
    id: 27, filename: "gallery-27.jpg", image_size: "landscape_4_3",
    label: "Aluminum with Stone Pillars",
    prompt: `Ultra-photorealistic photograph of a black wrought-iron style aluminum fence with large granite stone pillar posts, upscale New Hampshire residential property, ornamental spear-top pickets between stone pillars, professional landscaping with boxwood hedges, overcast soft light, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 28, filename: "gallery-28.jpg", image_size: "landscape_4_3",
    label: "Aluminum on Sloped Terrain",
    prompt: `Ultra-photorealistic photograph of a black aluminum fence racked to follow a sloped New Hampshire backyard, fence panels step down the hillside in racked sections, spear-top pickets, wooded hillside visible behind fence, autumn foliage, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 29, filename: "gallery-29.jpg", image_size: "square_hd",
    label: "Aluminum Corner Property Fence",
    prompt: `Ultra-photorealistic photograph of a black aluminum perimeter fence wrapping around a large corner residential property in New Hampshire, wide establishing shot showing fence line stretching along two street sides, mature oak trees, summer morning light, Canon EOS R5 24mm f/8, ${BASE}`,
  },

  // ── CHAIN-LINK extras (gallery-30 to gallery-37) ─────────────────────────
  {
    id: 30, filename: "gallery-30.jpg", image_size: "square_hd",
    label: "Black Vinyl-Coated Chain Link",
    prompt: `Ultra-photorealistic photograph of a 4-foot black vinyl-coated chain link fence installed around the backyard of a New Hampshire home, clean black diamond mesh, black posts and top rail, neatly trimmed lawn, suburban neighborhood, late afternoon light, Canon EOS R5 50mm f/8, ${BASE}`,
  },
  {
    id: 31, filename: "gallery-31.jpg", image_size: "landscape_4_3",
    label: "Chain Link with Privacy Slats",
    prompt: `Ultra-photorealistic photograph of a galvanized chain link fence with dark green privacy slats woven through the mesh providing partial screening, residential backyard New Hampshire, close-up shot showing slat texture and pattern, afternoon sunlight, Canon EOS R5 50mm f/5.6, ${BASE}`,
  },
  {
    id: 32, filename: "gallery-32.jpg", image_size: "landscape_4_3",
    label: "Chain Link Dog Kennel Run",
    prompt: `Ultra-photorealistic photograph of a standalone galvanized chain link dog kennel run installed in a New Hampshire backyard, 6-foot high chain link panels forming a rectangular enclosure, chain link roof panels, gravel floor, sunny summer day, Canon EOS R5 35mm f/8, ${BASE}`,
  },
  {
    id: 33, filename: "gallery-33.jpg", image_size: "square_hd",
    label: "Chain Link Sports Court Fence",
    prompt: `Ultra-photorealistic photograph of a black vinyl-coated chain link fence surrounding a residential backyard sports court with a basketball hoop visible, 10-foot tall chain link, top rail and tension wire, well-maintained asphalt court, suburban New Hampshire home, summer afternoon, Canon EOS R5 35mm f/8, ${BASE}`,
  },
  {
    id: 34, filename: "gallery-34.jpg", image_size: "landscape_4_3",
    label: "Mini-Mesh Chain Link Fence",
    prompt: `Ultra-photorealistic photograph of a small-aperture mini-mesh chain link fence (tight 1-inch mesh) installed for small dog containment in a New Hampshire backyard, galvanized steel, 4 feet tall, neatly installed along property line, suburban yard, overcast day with soft even light, Canon EOS R5 35mm f/8, ${BASE}`,
  },
  {
    id: 35, filename: "gallery-35.jpg", image_size: "landscape_4_3",
    label: "Chain Link Gate with Hardware",
    prompt: `Ultra-photorealistic photograph of a galvanized chain link single swing gate with heavy-duty industrial hinge hardware and padlock latch, gate hanging perfectly plumb in frame, residential driveway New Hampshire, detail shot showing hardware quality, afternoon light, Canon EOS R5 50mm f/5.6, ${BASE}`,
  },
  {
    id: 36, filename: "gallery-36.jpg", image_size: "square_hd",
    label: "Chain Link Along Wooded Edge",
    prompt: `Ultra-photorealistic photograph of a galvanized chain link fence running along the edge of a wooded property in New Hampshire, fence follows the tree line, dappled light through forest canopy creating patterns on the fence, autumn leaves on the ground, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 37, filename: "gallery-37.jpg", image_size: "landscape_4_3",
    label: "Commercial Chain Link Installation",
    prompt: `Ultra-photorealistic photograph of a heavy-gauge galvanized chain link fence installation along a commercial-residential boundary in New Hampshire, 6-foot tall chain link with top rail and tension wire, straight clean installation, industrial aesthetic, overcast sky, Canon EOS R5 35mm f/8, ${BASE}`,
  },

  // ── REPAIR extras (gallery-38 to gallery-45) ─────────────────────────────
  {
    id: 38, filename: "gallery-38.jpg", image_size: "square_hd",
    label: "Rotted Post Replacement",
    prompt: `Ultra-photorealistic photograph of a fence contractor replacing a rotted wooden fence post, the new pressure-treated green lumber post is freshly set in concrete next to the repaired existing weathered grey fence sections, close-up showing contrast between new post and old fence boards, New Hampshire backyard, overcast day, Canon EOS R5 50mm f/5.6, ${BASE}`,
  },
  {
    id: 39, filename: "gallery-39.jpg", image_size: "landscape_4_3",
    label: "Fence Section Re-Set After Frost Heave",
    prompt: `Ultra-photorealistic photograph of a repaired cedar fence section after frost heave, newly straightened fence posts perfectly plumb and level, fresh concrete collar at base of posts, repaired section matches existing weathered fence panels, New Hampshire spring, muddy ground around posts, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 40, filename: "gallery-40.jpg", image_size: "landscape_4_3",
    label: "Gate Rehang and Alignment",
    prompt: `Ultra-photorealistic photograph of a freshly rehinged and realigned wood fence gate, new stainless steel heavy-duty hinges and latch hardware, gate hanging perfectly level and plumb in the fence opening, cedar fence surrounding New Hampshire backyard, afternoon light, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 41, filename: "gallery-41.jpg", image_size: "square_hd",
    label: "Board Replacement on Aging Fence",
    prompt: `Ultra-photorealistic photograph showing a completed wood fence board replacement repair, several fresh new cedar boards visible among the weathered grey existing boards, the new boards are lighter in color, clean professional workmanship, New Hampshire suburban backyard, overcast natural light, Canon EOS R5 50mm f/8, ${BASE}`,
  },
  {
    id: 42, filename: "gallery-42.jpg", image_size: "landscape_4_3",
    label: "Leaning Fence Straightened",
    prompt: `Ultra-photorealistic photograph of a completed fence repair where a leaning privacy fence section has been straightened and reset, fence now perfectly plumb and level, fresh concrete poured at post bases, New Hampshire residential backyard, spring morning light, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
  {
    id: 43, filename: "gallery-43.jpg", image_size: "landscape_4_3",
    label: "Chain Link Storm Repair",
    prompt: `Ultra-photorealistic photograph of a completed chain link fence storm repair, new galvanized chain link fabric patched and woven into the existing fence, new tension bars and ties, repaired section blends with existing fence, New Hampshire suburban backyard, overcast day, Canon EOS R5 35mm f/8, ${BASE}`,
  },
  {
    id: 44, filename: "gallery-44.jpg", image_size: "square_hd",
    label: "Post-and-Rail Repair",
    prompt: `Ultra-photorealistic photograph of a completed post-and-rail wood fence repair, one new pressure-treated post and two new rails replaced, fresh lumber contrasting slightly with the weathered existing rails, rural New Hampshire property with open lawn, afternoon light, Canon EOS R5 50mm f/5.6, ${BASE}`,
  },
  {
    id: 45, filename: "gallery-45.jpg", image_size: "landscape_4_3",
    label: "Full Section Rebuild After Tree Fall",
    prompt: `Ultra-photorealistic photograph of a completely rebuilt cedar privacy fence section after a large tree fell on it, newly installed fence section perfectly matches the existing fence on both sides in style and stain color, fresh lumber, one section noticeably cleaner and newer than the rest, New Hampshire backyard, fallen tree debris cleared away, autumn afternoon, Canon EOS R5 35mm f/5.6, ${BASE}`,
  },
];

// ── Download helper ───────────────────────────────────────────────────────────
function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const chunks = [];
    client.get(url, (res) => {
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => { writeFileSync(destPath, Buffer.concat(chunks)); resolve(destPath); });
    }).on("error", reject);
  });
}

// ── Generate one image ────────────────────────────────────────────────────────
async function generateImage(item, outDir) {
  const outputPath = join(outDir, item.filename);

  if (existsSync(outputPath)) {
    console.log(`⏭   [${item.id}/45] ${item.label} — already exists, skipping`);
    return;
  }

  console.log(`\n🎨  [${item.id}/45] ${item.label}`);
  console.log(`    Size: ${item.image_size} → ${item.filename}`);

  const result = await fal.subscribe("fal-ai/flux-pro/v1.1", {
    input: {
      prompt: item.prompt,
      image_size: item.image_size,
      num_images: 1,
      guidance_scale: 3.5,
      num_inference_steps: 28,
      safety_tolerance: "2",
      output_format: "jpeg",
    },
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === "IN_PROGRESS") {
        const latest = update.logs?.at(-1)?.message;
        if (latest) process.stdout.write(`\r    ${latest.slice(0, 70).padEnd(70)}`);
      }
    },
  });

  const imageUrl = result.data?.images?.[0]?.url;
  if (!imageUrl) throw new Error(`No URL returned. Result: ${JSON.stringify(result)}`);

  process.stdout.write("\n");
  console.log(`    ✓ Generated — downloading...`);
  await downloadImage(imageUrl, outputPath);
  console.log(`    ✓ Saved → ${item.filename}`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("╔══════════════════════════════════════════════════════════╗");
  console.log("║  Placed Right Fence — Gallery Extra Generator            ║");
  console.log("║  36 photos · gallery-10 to gallery-45 · JPEG            ║");
  console.log("╚══════════════════════════════════════════════════════════╝");

  const outDir = join(__dirname, "../web/public/gallery");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const failed = [];

  for (const item of IMAGES) {
    try {
      await generateImage(item, outDir);
    } catch (err) {
      console.error(`\n❌  Failed [${item.id}] ${item.label}: ${err.message}`);
      failed.push(item.id);
    }
  }

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  if (failed.length === 0) {
    console.log("║  ✅  All 36 extra images generated successfully!         ║");
  } else {
    console.log(`║  ⚠️   ${36 - failed.length}/36 done. Failed IDs: ${failed.join(", ")}`.padEnd(59) + "║");
    console.log("║  Re-run the script — existing files will be skipped.    ║");
  }
  console.log("╚══════════════════════════════════════════════════════════╝\n");
}

main().catch((err) => { console.error("\n❌  Fatal:", err.message ?? err); process.exit(1); });
