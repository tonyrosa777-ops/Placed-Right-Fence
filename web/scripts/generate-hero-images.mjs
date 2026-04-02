/**
 * Hero image generator — Placed Right Fence Co. LLC
 * Generates before + after hero frames using fal.ai flux-pro/v1.1
 *
 * Usage (from web/ directory):
 *   node scripts/generate-hero-images.mjs
 *
 * Requires: FAL_KEY set in web/.env.local
 *
 * Output:
 *   web/public/images/hero-before.jpg  — NH yard, no fence, kids playing
 *   web/public/images/hero-after.jpg   — same scene, beautiful fence installed
 *
 * Hand both images to Kling AI for the seamless transition video.
 * Save the final video as: web/public/images/hero-video.mp4
 */

import falPkg from "@fal-ai/client";
const { createFalClient } = falPkg;
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Load FAL_KEY from .env.local ──────────────────────────────────────────────
const envPath = join(__dirname, "../.env.local");

if (!existsSync(envPath)) {
  console.error("❌  .env.local not found. Create web/.env.local and add FAL_KEY=your_key");
  process.exit(1);
}

const envContent = readFileSync(envPath, "utf-8");
const falKeyMatch = envContent.match(/^FAL_KEY=(.+)$/m);

if (!falKeyMatch || !falKeyMatch[1].trim()) {
  console.error("❌  FAL_KEY is empty in .env.local");
  console.error("    Get your key at: https://fal.ai/dashboard/keys");
  process.exit(1);
}

const FAL_KEY = falKeyMatch[1].trim();
const fal = createFalClient({ credentials: FAL_KEY });

// ── Image prompts ─────────────────────────────────────────────────────────────
//
// BEFORE: Beautiful NH yard, clearly needs a fence — open, kids playing, exposed
// AFTER:  Same scene, stunning cedar fence installed, yard feels complete
//
// Both frames are shot from the same angle and lighting so Kling AI can produce
// a photorealistic morphing transition.

const BEFORE_PROMPT = [
  "Ultra-photorealistic exterior photograph of a beautiful New England colonial-style home in New Hampshire,",
  "late afternoon golden hour light, warm amber sunlight casting long shadows across the grass,",
  "lush perfectly manicured green lawn, two young children ages 5 and 8 playing freely in the wide open backyard,",
  "the yard is completely unfenced and open on all sides, suburban neighborhood setting,",
  "neighboring yard clearly visible on the left side, street visible in the background,",
  "the openness of the yard creates a subtle feeling of vulnerability — the yard clearly needs a fence,",
  "mature oak trees along the back property line, green shrubs along the house foundation,",
  "clear blue New Hampshire sky with light wispy clouds, no fence anywhere in the scene,",
  "professional real estate photography style, Canon EOS R5, 35mm lens, f/4,",
  "tack sharp, photorealistic, cinematic composition, 8K detail, wide shot showing full yard",
].join(" ");

const AFTER_PROMPT = [
  "Ultra-photorealistic exterior photograph of the exact same beautiful New England colonial-style home in New Hampshire,",
  "same late afternoon golden hour light, same warm amber sunlight, same camera angle and lens,",
  "same lush green lawn, same mature oak trees along the back property line, same green shrubs,",
  "same clear blue sky, same two children now playing safely and joyfully within the enclosed yard —",
  "but now a stunning newly-installed cedar wood privacy fence runs the full perimeter of the backyard,",
  "the fence boards are tight and perfectly straight, capped with a decorative flat top rail,",
  "freshly stained in warm honey-cedar tones, the fence posts are plumb and set at even spacing,",
  "the yard now feels private, complete, and safe — the fence is the hero of the image,",
  "professional real estate photography style, Canon EOS R5, 35mm lens, f/4,",
  "tack sharp, photorealistic, cinematic composition, 8K detail, wide shot showing full yard",
].join(" ");

// ── Download helper ───────────────────────────────────────────────────────────

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const chunks = [];

    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        // Follow redirect
        downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        writeFileSync(destPath, Buffer.concat(chunks));
        resolve(destPath);
      });
    }).on("error", reject);
  });
}

// ── Generate one image ────────────────────────────────────────────────────────

async function generateImage(label, prompt, outputPath) {
  console.log(`\n🎨  Generating: ${label}`);
  console.log(`    Model  : fal-ai/flux-pro/v1.1`);
  console.log(`    Size   : landscape 16:9`);
  console.log(`    Output : ${outputPath.replace(join(__dirname, ".."), "")}`);
  console.log("");

  let lastLog = "";

  const result = await fal.subscribe("fal-ai/flux-pro/v1.1", {
    input: {
      prompt,
      image_size: "landscape_16_9",
      num_images: 1,
      guidance_scale: 3.5,
      num_inference_steps: 28,
      safety_tolerance: "2",
      output_format: "jpeg",
    },
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === "IN_QUEUE") {
        process.stdout.write("\r    ⏳  In queue...                              ");
      } else if (update.status === "IN_PROGRESS") {
        const msg = update.logs?.at(-1)?.message ?? "";
        if (msg && msg !== lastLog) {
          process.stdout.write(`\r    ⚡  ${msg.slice(0, 65).padEnd(65)}`);
          lastLog = msg;
        }
      }
    },
  });

  process.stdout.write("\n");

  const imageUrl = result.data?.images?.[0]?.url;
  if (!imageUrl) {
    throw new Error(`No image URL in response. Result: ${JSON.stringify(result.data)}`);
  }

  console.log(`    ✓ Generated — downloading from CDN...`);
  await downloadImage(imageUrl, outputPath);
  const fileSizeKB = Math.round(readFileSync(outputPath).length / 1024);
  console.log(`    ✓ Saved (${fileSizeKB} KB)`);

  return outputPath;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("\n╔══════════════════════════════════════════════════════════════╗");
  console.log("║  Placed Right Fence — Hero Frame Generator                   ║");
  console.log("║  fal-ai/flux-pro/v1.1 · Landscape 16:9 · JPEG               ║");
  console.log("╚══════════════════════════════════════════════════════════════╝");

  const outDir = join(__dirname, "../public/images");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const beforePath = join(outDir, "hero-before.jpg");
  const afterPath = join(outDir, "hero-after.jpg");

  try {
    await generateImage("BEFORE — NH yard, no fence, kids playing", BEFORE_PROMPT, beforePath);
    await generateImage("AFTER  — Cedar privacy fence installed", AFTER_PROMPT, afterPath);

    console.log("\n╔══════════════════════════════════════════════════════════════╗");
    console.log("║  ✅  Both frames generated!                                   ║");
    console.log("║                                                               ║");
    console.log("║  Files:                                                       ║");
    console.log("║    web/public/images/hero-before.jpg                          ║");
    console.log("║    web/public/images/hero-after.jpg                           ║");
    console.log("║                                                               ║");
    console.log("║  Next steps:                                                  ║");
    console.log("║  1. Review both images — regenerate if needed                 ║");
    console.log("║  2. Upload to Kling AI — image-to-video, 5-8s transition      ║");
    console.log("║  3. Save video → web/public/images/hero-video.mp4             ║");
    console.log("║  4. Uncomment <video> block in HeroSection.tsx                ║");
    console.log("╚══════════════════════════════════════════════════════════════╝\n");

  } catch (err) {
    console.error("\n❌  Generation failed:", err.message ?? err);
    console.error("\n    Check your FAL_KEY and try again.");
    process.exit(1);
  }
}

main();
