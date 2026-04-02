/**
 * Gallery teaser image generator — Placed Right Fence Co. LLC
 *
 * Generates 3 hero-quality images for the homepage GalleryTeaser section.
 * Usage (from web/ directory):
 *   node scripts/generate-gallery-images.mjs
 *
 * Output: web/public/images/gallery/<name>.jpg
 * Requires: FAL_KEY in web/.env.local
 */

import falPkg from "@fal-ai/client";
const { createFalClient } = falPkg;
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));

const envPath = join(__dirname, "../.env.local");
if (!existsSync(envPath)) { console.error("❌  .env.local not found."); process.exit(1); }
const envContent = readFileSync(envPath, "utf-8");
const falKeyMatch = envContent.match(/^FAL_KEY=(.+)$/m);
if (!falKeyMatch?.[1]?.trim()) { console.error("❌  FAL_KEY empty in .env.local"); process.exit(1); }
const fal = createFalClient({ credentials: falKeyMatch[1].trim() });

const IMAGES = [
  {
    name: "wood-privacy",
    prompt: [
      "Ultra-photorealistic photograph of a stunning cedar board-on-board privacy fence",
      "in a lush New Hampshire residential backyard, golden late-afternoon sunlight,",
      "rich honey-brown cedar tones, perfectly level boards with tight vertical seams,",
      "lush green manicured lawn, mature maple and oak trees behind fence,",
      "white New England colonial home visible through garden, warm summer evening,",
      "shallow depth of field, fence fills frame, premium construction quality evident,",
      "no people, architectural real estate photography, Canon EOS R5, 50mm, f/2.8, 8K",
    ].join(" "),
  },
  {
    name: "vinyl-privacy",
    prompt: [
      "Ultra-photorealistic photograph of a pristine bright-white vinyl privacy fence",
      "surrounding a New Hampshire suburban backyard, bright midday summer light,",
      "crisp clean panels with elegant post caps, zero imperfections, freshly installed,",
      "vibrant green lawn, colorful perennial flower garden along fence base,",
      "classic white colonial home in background, blue sky with soft clouds,",
      "no people, pristine curb-appeal photography, Canon EOS R5, 35mm, f/4, 8K",
    ].join(" "),
  },
  {
    name: "aluminum-ornamental",
    prompt: [
      "Ultra-photorealistic photograph of an elegant black powder-coated ornamental aluminum fence",
      "surrounding a landscaped New Hampshire residential property, dusk golden hour light,",
      "decorative spear-tip pickets, strong vertical lines casting long shadows on lawn,",
      "well-manicured garden, stone walkway, large colonial home illuminated in background,",
      "premium upscale suburban neighborhood, moody warm lighting, luxury feel,",
      "no people, architectural photography, Canon EOS R5, 35mm, f/3.5, 8K",
    ].join(" "),
  },
];

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const chunks = [];
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
      }
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => { writeFileSync(destPath, Buffer.concat(chunks)); resolve(destPath); });
    }).on("error", reject);
  });
}

async function main() {
  const outDir = join(__dirname, "../public/images/gallery");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  console.log("\n╔══════════════════════════════════════════════════════════════╗");
  console.log("║  Placed Right Fence — Gallery Image Generator                ║");
  console.log("║  3 images — fal-ai/flux-pro/v1.1                             ║");
  console.log("╚══════════════════════════════════════════════════════════════╝");

  let ok = 0, fail = 0;
  for (let i = 0; i < IMAGES.length; i++) {
    const { name, prompt } = IMAGES[i];
    const dest = join(outDir, `${name}.jpg`);
    console.log(`\n[${i + 1}/3] ${name}`);

    if (existsSync(dest)) {
      console.log(`    ⏭  Already exists — skipping`);
      ok++; continue;
    }

    try {
      const result = await fal.subscribe("fal-ai/flux-pro/v1.1", {
        input: { prompt, image_size: "landscape_16_9", num_images: 1,
          guidance_scale: 3.5, num_inference_steps: 28,
          safety_tolerance: "2", output_format: "jpeg" },
        logs: true,
        onQueueUpdate: (u) => {
          if (u.status === "IN_QUEUE") process.stdout.write("\r    ⏳  In queue...                              ");
          else if (u.status === "IN_PROGRESS") {
            const msg = u.logs?.at(-1)?.message ?? "";
            if (msg) process.stdout.write(`\r    ⚡  ${msg.slice(0, 55).padEnd(55)}`);
          }
        },
      });
      process.stdout.write("\n");
      const url = result.data?.images?.[0]?.url;
      if (!url) throw new Error("No image URL in response");
      await downloadImage(url, dest);
      const kb = Math.round(readFileSync(dest).length / 1024);
      console.log(`    ✓ Saved → public/images/gallery/${name}.jpg (${kb} KB)`);
      ok++;
    } catch (err) {
      console.error(`\n    ❌  Failed: ${err.message}`);
      fail++;
    }
  }

  console.log("\n╔══════════════════════════════════════════════════════════════╗");
  console.log(`║  Done: ${ok} generated, ${fail} failed`.padEnd(64) + "║");
  console.log("╚══════════════════════════════════════════════════════════════╝\n");
  if (fail > 0) process.exit(1);
}

main();
