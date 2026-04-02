/**
 * Hero image generator — Placed Right Fence Co. LLC
 * Generates before + after hero frames using fal.ai flux-pro
 *
 * Usage: node scripts/generate-hero-images.mjs
 * Requires: FAL_KEY in web/.env.local
 *
 * Output:
 *   web/public/images/hero-before.jpg  — NH yard, no fence, kids playing
 *   web/public/images/hero-after.jpg   — same scene, beautiful fence installed
 *
 * After generation: hand both images to Kling AI for the transition video.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
import https from "https";
import http from "http";

// Resolve @fal-ai/client from web/node_modules
const __dirnamePre = dirname(fileURLToPath(import.meta.url));
const _require = createRequire(join(__dirnamePre, "../web/node_modules/@fal-ai/client/package.json"));
const { createClient } = await import(join(__dirnamePre, "../web/node_modules/@fal-ai/client/dist/index.js"));

// ── Load FAL_KEY from web/.env.local ─────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "../web/.env.local");

if (!existsSync(envPath)) {
  console.error("❌  web/.env.local not found. Create it and add FAL_KEY=your_key");
  process.exit(1);
}

const envContent = readFileSync(envPath, "utf-8");
const falKeyMatch = envContent.match(/^FAL_KEY=(.+)$/m);

if (!falKeyMatch || !falKeyMatch[1].trim()) {
  console.error("❌  FAL_KEY is empty in web/.env.local. Add your key from https://fal.ai/dashboard/keys");
  process.exit(1);
}

const FAL_KEY = falKeyMatch[1].trim();
const fal = createClient({ credentials: FAL_KEY });

// ── Image prompts ─────────────────────────────────────────────────────────────

const BEFORE_PROMPT = `Ultra-photorealistic exterior photograph of a beautiful New England colonial-style home in New Hampshire, late afternoon golden hour light, lush perfectly manicured green lawn, two young children (ages 5 and 8) playing freely in the wide open backyard, the yard is completely unfenced and open on all sides, suburban neighborhood setting, neighboring yard visible on both sides, street visible in the background creating a sense of vulnerability and openness, mature oak trees along the property edge, green shrubs along the house foundation, clear blue sky with light clouds, warm amber sunlight casting long shadows across the grass, professional architectural real estate photography, Canon EOS R5, 35mm lens, f/4, tack sharp, photorealistic, 8K detail, no fence anywhere in the scene`;

const AFTER_PROMPT = `Ultra-photorealistic exterior photograph of the exact same beautiful New England colonial-style home in New Hampshire, late afternoon golden hour light, exact same lush green lawn and yard layout, same mature oak trees, same green shrubs, same clear blue sky, same warm amber sunlight — but now a stunning newly-installed cedar wood privacy fence with cap-top boards runs the full perimeter of the backyard, the fence is freshly stained in warm honey-cedar tones, the same two children now playing safely and joyfully within the fully enclosed yard, the fence posts are perfectly straight and plumb, the yard now feels complete and private, professional architectural real estate photography, Canon EOS R5, 35mm lens, f/4, tack sharp, photorealistic, 8K detail, the fence is the hero of the image`;

// ── Download helper ───────────────────────────────────────────────────────────

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const file = { data: [] };

    client.get(url, (res) => {
      res.on("data", (chunk) => file.data.push(chunk));
      res.on("end", () => {
        const buffer = Buffer.concat(file.data);
        writeFileSync(destPath, buffer);
        resolve(destPath);
      });
    }).on("error", reject);
  });
}

// ── Generate one image ────────────────────────────────────────────────────────

async function generateImage(label, prompt, outputPath) {
  console.log(`\n🎨  Generating ${label}...`);
  console.log(`    Model: fal-ai/flux-pro/v1.1`);
  console.log(`    Output: ${outputPath}`);

  const result = await fal.subscribe("fal-ai/flux-pro/v1.1", {
    input: {
      prompt,
      image_size: "landscape_16_9",   // 1920×1080 — ideal for hero video frame
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
    throw new Error(`No image URL returned for ${label}. Full result: ${JSON.stringify(result)}`);
  }

  process.stdout.write("\n");
  console.log(`    ✓ Image generated — downloading...`);
  await downloadImage(imageUrl, outputPath);
  console.log(`    ✓ Saved to ${outputPath}`);

  return outputPath;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔══════════════════════════════════════════════════════════╗");
  console.log("║  Placed Right Fence — Hero Image Generator               ║");
  console.log("║  Model: fal-ai/flux-pro/v1.1 | Format: 16:9 JPEG        ║");
  console.log("╚══════════════════════════════════════════════════════════╝");

  const outDir = join(__dirname, "../web/public/images");
  const beforePath = join(outDir, "hero-before.jpg");
  const afterPath = join(outDir, "hero-after.jpg");

  try {
    await generateImage("BEFORE — NH yard, no fence", BEFORE_PROMPT, beforePath);
    await generateImage("AFTER  — Beautiful fence installed", AFTER_PROMPT, afterPath);

    console.log("\n╔══════════════════════════════════════════════════════════╗");
    console.log("║  ✅  Both frames generated successfully!                 ║");
    console.log("║                                                          ║");
    console.log("║  Next steps:                                             ║");
    console.log("║  1. Review: web/public/images/hero-before.jpg            ║");
    console.log("║  2. Review: web/public/images/hero-after.jpg             ║");
    console.log("║  3. Upload both to Kling AI for transition video         ║");
    console.log("║  4. Save video as: web/public/images/hero-video.mp4      ║");
    console.log("╚══════════════════════════════════════════════════════════╝\n");

  } catch (err) {
    console.error("\n❌  Generation failed:", err.message ?? err);
    process.exit(1);
  }
}

main();
