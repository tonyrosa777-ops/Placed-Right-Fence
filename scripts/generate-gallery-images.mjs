/**
 * Gallery image generator — Placed Right Fence Co. LLC
 * Generates 9 photorealistic fence installation photos using fal.ai flux-pro
 *
 * Usage: node scripts/generate-gallery-images.mjs
 * Requires: FAL_KEY in web/.env.local
 *
 * Output: web/public/gallery/gallery-{1-9}.jpg
 *
 * After generation: gallery page auto-uses these paths via <Image> components
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import https from "https";
import http from "http";

// Resolve @fal-ai/client from web/node_modules using createRequire
// (package is CJS; createRequire anchored to web/package.json resolves correctly)
const __dirname = dirname(fileURLToPath(import.meta.url));
const webRequire = createRequire(join(__dirname, "../web/package.json"));
const { createFalClient } = webRequire("@fal-ai/client");

// ── Load FAL_KEY from web/.env.local ──────────────────────────────────────────
const envPath = join(__dirname, "../web/.env.local");

if (!existsSync(envPath)) {
  console.error("❌  web/.env.local not found. Add FAL_KEY=your_key");
  process.exit(1);
}

const envContent = readFileSync(envPath, "utf-8");
const falKeyMatch = envContent.match(/^FAL_KEY=(.+)$/m);

if (!falKeyMatch || !falKeyMatch[1].trim()) {
  console.error("❌  FAL_KEY is empty in web/.env.local");
  process.exit(1);
}

const FAL_KEY = falKeyMatch[1].trim();
const fal = createFalClient({ credentials: FAL_KEY });

// ── Gallery items + prompts ───────────────────────────────────────────────────
// image_size values: "landscape_4_3" (1365×1024) | "square_hd" (1024×1024)

const GALLERY = [
  {
    id: 1,
    filename: "gallery-1.jpg",
    image_size: "landscape_4_3",
    label: "Cedar Privacy Fence — Bedford, NH",
    prompt: `Ultra-photorealistic professional exterior photograph of a freshly installed cedar wood privacy fence in the backyard of a suburban New England colonial home in New Hampshire, honey-cedar stained vertical boards with cap rail and kickboard, perfectly plumb posts, lush green lawn, mature deciduous trees showing late summer foliage, warm afternoon sunlight highlighting wood grain, residential neighborhood, Canon EOS R5 35mm f/5.6, tack sharp, photorealistic, 8K detail, no people`,
  },
  {
    id: 2,
    filename: "gallery-2.jpg",
    image_size: "square_hd",
    label: "White Vinyl Privacy — Nashua, NH",
    prompt: `Ultra-photorealistic professional photograph of a brand-new bright white vinyl privacy fence enclosing the backyard of a residential home in New Hampshire, crisp white PVC boards with routed top rail and gothic post caps, immaculate clean modern look, well-maintained green lawn with garden beds along the fence base, blue sky with light clouds, suburban neighborhood setting, Canon EOS R5 50mm f/5.6, tack sharp, photorealistic, 8K detail, no people`,
  },
  {
    id: 3,
    filename: "gallery-3.jpg",
    image_size: "landscape_4_3",
    label: "Ornamental Aluminum — Portsmouth, NH",
    prompt: `Ultra-photorealistic professional photograph of an ornamental black powder-coated aluminum fence with spear-top pickets surrounding the front yard of a classic New England craftsman home in New Hampshire, decorative iron-style fence with pointed tops, white painted colonial home behind fence, professional landscaping with flower beds and brick pathway, mature trees, late afternoon golden hour light, Canon EOS R5 35mm f/5.6, tack sharp, photorealistic, 8K detail, no people`,
  },
  {
    id: 4,
    filename: "gallery-4.jpg",
    image_size: "landscape_4_3",
    label: "Galvanized Chain Link — Manchester, NH",
    prompt: `Ultra-photorealistic professional photograph of a freshly installed galvanized steel chain link fence running along the perimeter of a residential property in New Hampshire, standard 4-foot galvanized chain link with tension wire and straight plumb posts set in concrete, suburban backyard, green grass lawn, residential neighborhood, clean professional contractor installation, Canon EOS R5 35mm f/8, sharp detail on chain link diamond pattern, photorealistic, 8K detail, no people`,
  },
  {
    id: 5,
    filename: "gallery-5.jpg",
    image_size: "square_hd",
    label: "Dog-Ear Privacy Fence — Merrimack, NH",
    prompt: `Ultra-photorealistic professional photograph of a classic wooden dog-ear privacy fence in a residential backyard in New Hampshire, alternating dog-ear pointed board tops in warm pressure-treated lumber, fence attached to a wooden deck, patio scene, New Hampshire colonial home visible behind fence, late afternoon warm light casting long shadows, Canon EOS R5 50mm f/5.6, photorealistic, 8K detail, no people`,
  },
  {
    id: 6,
    filename: "gallery-6.jpg",
    image_size: "landscape_4_3",
    label: "Tan Vinyl with Gate — Hudson, NH",
    prompt: `Ultra-photorealistic professional photograph of a tan khaki-colored vinyl privacy fence with a matching vinyl single swing gate installed at a residential property in New Hampshire, warm beige tan PVC wide boards with post caps, decorative iron latch hardware on gate, lush green lawn, mature trees, suburban home visible behind fence, the gate is slightly ajar revealing the backyard beyond, Canon EOS R5 35mm f/5.6, photorealistic, 8K detail, no people`,
  },
  {
    id: 7,
    filename: "gallery-7.jpg",
    image_size: "landscape_4_3",
    label: "Pool Code Aluminum — Exeter, NH",
    prompt: `Ultra-photorealistic professional photograph of a black powder-coated aluminum pool safety fence surrounding an in-ground swimming pool at a suburban home in New Hampshire, pool code compliant 48-inch aluminum picket fence with self-closing self-latching gate, sparkling blue swimming pool visible through fence pickets, concrete pool deck with patio furniture, professional landscaping, summer afternoon sunlight, Canon EOS R5 35mm f/5.6, photorealistic, 8K detail, no people`,
  },
  {
    id: 8,
    filename: "gallery-8.jpg",
    image_size: "square_hd",
    label: "Pressure-Treated Posts — Londonderry, NH",
    prompt: `Ultra-photorealistic professional photograph of a newly completed pressure-treated wooden fence section at a residential property in New Hampshire, green pressure-treated lumber fence posts perfectly plumb and aligned, horizontal rails installed, clean professional contractor workmanship, New Hampshire suburban backyard with lush lawn and trees, bright afternoon light, Canon EOS R5 50mm f/8, sharp detail on wood grain and post caps, photorealistic, 8K detail, no people`,
  },
  {
    id: 9,
    filename: "gallery-9.jpg",
    image_size: "landscape_4_3",
    label: "Storm Damage Repair — Dover, NH",
    prompt: `Ultra-photorealistic professional photograph of a completed fence storm damage repair job at a residential property in New Hampshire, a section of cedar wood privacy fence expertly repaired after storm damage, new matching boards and posts blend seamlessly with the existing weathered fence, clean professional workmanship, some boards slightly lighter showing fresh lumber, New Hampshire suburban backyard, overcast natural daylight, Canon EOS R5 35mm f/8, photorealistic, 8K detail, no people`,
  },
];

// ── Download helper ───────────────────────────────────────────────────────────

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const chunks = [];

    client.get(url, (res) => {
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        writeFileSync(destPath, Buffer.concat(chunks));
        resolve(destPath);
      });
    }).on("error", reject);
  });
}

// ── Generate one image ────────────────────────────────────────────────────────

async function generateImage(item, outDir) {
  const outputPath = join(outDir, item.filename);
  console.log(`\n🎨  [${item.id}/9] ${item.label}`);
  console.log(`    Size: ${item.image_size} → ${outputPath}`);

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
  if (!imageUrl) {
    throw new Error(`No image URL returned for ${item.label}. Result: ${JSON.stringify(result)}`);
  }

  process.stdout.write("\n");
  console.log(`    ✓ Generated — downloading...`);
  await downloadImage(imageUrl, outputPath);
  console.log(`    ✓ Saved → ${item.filename}`);

  return outputPath;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔══════════════════════════════════════════════════════════╗");
  console.log("║  Placed Right Fence — Gallery Image Generator            ║");
  console.log("║  9 photos · fal-ai/flux-pro/v1.1 · JPEG                 ║");
  console.log("╚══════════════════════════════════════════════════════════╝");

  const outDir = join(__dirname, "../web/public/gallery");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const failed = [];

  for (const item of GALLERY) {
    try {
      await generateImage(item, outDir);
    } catch (err) {
      console.error(`\n❌  Failed: ${item.label} — ${err.message}`);
      failed.push(item.id);
    }
  }

  console.log("\n╔══════════════════════════════════════════════════════════╗");
  if (failed.length === 0) {
    console.log("║  ✅  All 9 gallery images generated successfully!        ║");
    console.log("║                                                          ║");
    console.log("║  Next step:                                              ║");
    console.log("║  Images live at web/public/gallery/gallery-{1-9}.jpg    ║");
    console.log("║  Gallery page already wired — deploy to see results.    ║");
  } else {
    console.log(`║  ⚠️   ${9 - failed.length}/9 generated. Failed IDs: ${failed.join(", ")}`.padEnd(59) + "║");
    console.log("║  Re-run the script — failed images will regenerate.     ║");
  }
  console.log("╚══════════════════════════════════════════════════════════╝\n");
}

main().catch((err) => {
  console.error("\n❌  Fatal:", err.message ?? err);
  process.exit(1);
});
