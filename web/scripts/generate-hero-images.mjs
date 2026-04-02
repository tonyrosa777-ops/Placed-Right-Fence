/**
 * Hero image generator — Placed Right Fence Co. LLC
 *
 * Usage (from web/ directory):
 *   node scripts/generate-hero-images.mjs              — generate both frames
 *   node scripts/generate-hero-images.mjs --before-only — re-edit before only (Kontext)
 *
 * Requires: FAL_KEY set in web/.env.local
 *
 * BEFORE frame: uses fal-ai/flux-pro/kontext to edit hero-after.jpg —
 *   removes fence, replaces boundary with a dark swampy cliff drop-off.
 *   Same angle, same house, same kids. Perfect for Kling AI I2V transition.
 *
 * AFTER frame:  uses fal-ai/flux-pro/v1.1 text-to-image (already generated).
 *
 * Output:
 *   web/public/images/hero-before.jpg
 *   web/public/images/hero-after.jpg
 */

import falPkg from "@fal-ai/client";
const { createFalClient } = falPkg;
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BEFORE_ONLY = process.argv.includes("--before-only");

// ── Load FAL_KEY ──────────────────────────────────────────────────────────────
const envPath = join(__dirname, "../.env.local");
if (!existsSync(envPath)) {
  console.error("❌  .env.local not found.");
  process.exit(1);
}
const envContent = readFileSync(envPath, "utf-8");
const falKeyMatch = envContent.match(/^FAL_KEY=(.+)$/m);
if (!falKeyMatch || !falKeyMatch[1].trim()) {
  console.error("❌  FAL_KEY is empty in .env.local — get yours at https://fal.ai/dashboard/keys");
  process.exit(1);
}
const FAL_KEY = falKeyMatch[1].trim();
const fal = createFalClient({ credentials: FAL_KEY });

// ── Prompts ───────────────────────────────────────────────────────────────────

// Kontext edit instruction — applied to hero-after.jpg
// Goal: remove fence, expose a dark swampy drop-off at the yard boundary
const KONTEXT_EDIT_PROMPT = [
  "Remove the cedar wood fence completely from the scene.",
  "Where the fence stood, the lawn ends abruptly at a steep drop-off that falls",
  "down into a dark gloomy swamp — murky dark water, thick dead cattails,",
  "twisted bare trees with no leaves, low fog hugging the water surface,",
  "an ominous threatening atmosphere at the yard's edge.",
  "The two children continue playing on the lawn, now dangerously close to the",
  "unprotected swampy edge with no barrier between them and the drop.",
  "Keep the white colonial house, the golden hour sunlight, the green lawn,",
  "the mature trees, and the children completely unchanged.",
  "Only remove the fence and replace its boundary with the dark swamp below.",
].join(" ");

// Text-to-image prompt for the after frame (already generated — kept for reruns)
const AFTER_PROMPT = [
  "Ultra-photorealistic exterior photograph of a beautiful New England colonial-style home in New Hampshire,",
  "late afternoon golden hour light, same warm amber sunlight, backyard angle looking toward the house,",
  "lush green lawn, mature oak trees, same two children now playing safely and joyfully within an enclosed yard,",
  "a stunning newly-installed cedar wood privacy fence runs the full perimeter of the backyard,",
  "fence boards tight and perfectly straight, capped with flat top rail,",
  "freshly stained warm honey-cedar tones, posts plumb and evenly spaced,",
  "the yard now feels private, complete, and safe — the fence is the hero,",
  "professional real estate photography, Canon EOS R5, 35mm lens, f/4, 8K, photorealistic",
].join(" ");

// ── Helpers ───────────────────────────────────────────────────────────────────

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

function toDataUrl(filePath) {
  const buf = readFileSync(filePath);
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

function progress(update) {
  if (update.status === "IN_QUEUE") {
    process.stdout.write("\r    ⏳  In queue...                                        ");
  } else if (update.status === "IN_PROGRESS") {
    const msg = update.logs?.at(-1)?.message ?? "";
    if (msg) process.stdout.write(`\r    ⚡  ${msg.slice(0, 62).padEnd(62)}`);
  }
}

// ── Generate before — Kontext image edit ─────────────────────────────────────

async function regenerateBefore(afterPath, beforePath) {
  console.log("\n🎨  Generating: BEFORE — remove fence, add swampy drop-off");
  console.log("    Model  : fal-ai/flux-pro/kontext (image editing)");
  console.log("    Source : hero-after.jpg");
  console.log(`    Output : ${beforePath.replace(join(__dirname, ".."), "")}`);
  console.log("");

  if (!existsSync(afterPath)) {
    throw new Error(`hero-after.jpg not found at ${afterPath}. Run without --before-only first.`);
  }

  const imageDataUrl = toDataUrl(afterPath);

  const result = await fal.subscribe("fal-ai/flux-pro/kontext", {
    input: {
      prompt: KONTEXT_EDIT_PROMPT,
      image_url: imageDataUrl,
      guidance_scale: 3.5,
      num_inference_steps: 28,
      output_format: "jpeg",
    },
    logs: true,
    onQueueUpdate: progress,
  });

  process.stdout.write("\n");

  const imageUrl = result.data?.images?.[0]?.url;
  if (!imageUrl) throw new Error(`No image URL returned. Response: ${JSON.stringify(result.data)}`);

  console.log("    ✓ Edit complete — downloading...");
  await downloadImage(imageUrl, beforePath);
  const kb = Math.round(readFileSync(beforePath).length / 1024);
  console.log(`    ✓ Saved (${kb} KB)`);
}

// ── Generate after — text to image ───────────────────────────────────────────

async function generateAfter(afterPath) {
  console.log("\n🎨  Generating: AFTER — cedar fence installed, yard complete");
  console.log("    Model  : fal-ai/flux-pro/v1.1");
  console.log(`    Output : ${afterPath.replace(join(__dirname, ".."), "")}`);
  console.log("");

  const result = await fal.subscribe("fal-ai/flux-pro/v1.1", {
    input: {
      prompt: AFTER_PROMPT,
      image_size: "landscape_16_9",
      num_images: 1,
      guidance_scale: 3.5,
      num_inference_steps: 28,
      safety_tolerance: "2",
      output_format: "jpeg",
    },
    logs: true,
    onQueueUpdate: progress,
  });

  process.stdout.write("\n");

  const imageUrl = result.data?.images?.[0]?.url;
  if (!imageUrl) throw new Error(`No image URL returned.`);

  console.log("    ✓ Generated — downloading...");
  await downloadImage(imageUrl, afterPath);
  const kb = Math.round(readFileSync(afterPath).length / 1024);
  console.log(`    ✓ Saved (${kb} KB)`);
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const mode = BEFORE_ONLY ? "BEFORE only (Kontext edit)" : "Full regeneration";
  console.log("\n╔══════════════════════════════════════════════════════════════╗");
  console.log(`║  Placed Right Fence — Hero Frame Generator  [${mode.padEnd(18)}]║`);
  console.log("╚══════════════════════════════════════════════════════════════╝");

  const outDir = join(__dirname, "../public/images");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const beforePath = join(outDir, "hero-before.jpg");
  const afterPath  = join(outDir, "hero-after.jpg");

  try {
    if (BEFORE_ONLY) {
      await regenerateBefore(afterPath, beforePath);
    } else {
      await generateAfter(afterPath);
      await regenerateBefore(afterPath, beforePath);
    }

    console.log("\n╔══════════════════════════════════════════════════════════════╗");
    console.log("║  ✅  Done!                                                    ║");
    console.log("║                                                               ║");
    console.log("║  hero-before.jpg — same yard, no fence, swampy drop-off      ║");
    console.log("║  hero-after.jpg  — same yard, cedar fence, kids safe          ║");
    console.log("║                                                               ║");
    console.log("║  Next:                                                        ║");
    console.log("║  1. Review both frames side by side                           ║");
    console.log("║  2. Upload to Kling AI — image-to-video, 5-8s, 16:9          ║");
    console.log("║  3. Save → web/public/images/hero-video.mp4                  ║");
    console.log("║  4. Uncomment <video> block in HeroSection.tsx               ║");
    console.log("╚══════════════════════════════════════════════════════════════╝\n");

  } catch (err) {
    console.error("\n❌  Failed:", err.message ?? err);
    process.exit(1);
  }
}

main();
