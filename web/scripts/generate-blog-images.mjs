/**
 * Blog card image generator — Placed Right Fence Co. LLC
 *
 * Usage (from web/ directory):
 *   node scripts/generate-blog-images.mjs
 *   node scripts/generate-blog-images.mjs --slug nh-pool-fence-code-requirements
 *
 * Generates one photorealistic 16:9 image per blog post using fal-ai/flux-pro/v1.1.
 * Output: web/public/images/blog/<slug>.jpg
 *
 * Requires: FAL_KEY set in web/.env.local
 */

import falPkg from "@fal-ai/client";
const { createFalClient } = falPkg;
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Load FAL_KEY ──────────────────────────────────────────────────────────────
const envPath = join(__dirname, "../.env.local");
if (!existsSync(envPath)) {
  console.error("❌  .env.local not found.");
  process.exit(1);
}
const envContent = readFileSync(envPath, "utf-8");
const falKeyMatch = envContent.match(/^FAL_KEY=(.+)$/m);
if (!falKeyMatch || !falKeyMatch[1].trim()) {
  console.error("❌  FAL_KEY is empty in .env.local");
  process.exit(1);
}
const FAL_KEY = falKeyMatch[1].trim();
const fal = createFalClient({ credentials: FAL_KEY });

// ── Per-post prompts ──────────────────────────────────────────────────────────
// Each prompt: photorealistic, NH/New England residential, topic-specific.
// Style baseline: Canon EOS R5, natural light, professional real estate photography.

const POSTS = [
  {
    slug: "nh-pool-fence-code-requirements",
    prompt: [
      "Ultra-photorealistic photograph of a pristine white aluminum pool safety fence surrounding a blue in-ground swimming pool",
      "in a lush New Hampshire residential backyard, late afternoon sunlight, green manicured lawn,",
      "self-closing safety gate with latch, 48-inch barrier height clearly visible, New England colonial home in background,",
      "mature oak and maple trees, summer, suburban NH neighborhood,",
      "professional real estate photography, Canon EOS R5, 35mm, f/4, 8K resolution",
    ].join(" "),
  },
  {
    slug: "how-deep-fence-posts-new-hampshire",
    prompt: [
      "Ultra-photorealistic photograph of fence post installation in a New Hampshire residential yard,",
      "a pressure-treated 4x4 wooden post being set in a deep concrete-filled hole,",
      "hole depth marker visible showing 48 inches deep below frost line,",
      "early spring NH landscape, partially frozen ground, professional installer in work gear,",
      "suburban New England neighborhood, natural daylight, documentary photography style,",
      "Canon EOS R5, 35mm lens, f/5.6, photorealistic",
    ].join(" "),
  },
  {
    slug: "wood-vs-vinyl-fence-new-hampshire",
    prompt: [
      "Ultra-photorealistic photograph of a New Hampshire residential backyard showing two fence panels side by side,",
      "left half: natural cedar wood privacy fence with warm honey-brown tones,",
      "right half: bright white vinyl privacy fence, both panels perfectly installed and same height,",
      "green lawn, colonial home in background, New England afternoon light, fall foliage on trees,",
      "comparison photography, clean and well-lit, professional real estate photography,",
      "Canon EOS R5, 50mm, f/4, 8K, photorealistic",
    ].join(" "),
  },
  {
    slug: "fence-permit-guide-new-hampshire",
    prompt: [
      "Ultra-photorealistic photograph of a New Hampshire suburban backyard with freshly installed cedar privacy fence,",
      "property survey stakes with orange flags marking the lot line near the fence,",
      "clipboard with building permit paperwork resting on a fence post,",
      "professional installer in foreground reviewing documents, green lawn, colonial home,",
      "bright spring day, authentic NH residential street visible in background,",
      "documentary photography, Canon EOS R5, 35mm, f/5.6, photorealistic",
    ].join(" "),
  },
  {
    slug: "best-fence-for-dogs-new-hampshire",
    prompt: [
      "Ultra-photorealistic photograph of a happy golden retriever running freely inside a fully fenced New Hampshire backyard,",
      "tall cedar wood privacy fence surrounding the yard, no gaps at the base,",
      "two young children playing on the lawn nearby, golden afternoon light,",
      "green lawn, mature trees, white New England colonial home visible,",
      "warm family scene, authentic NH suburban neighborhood, summer,",
      "professional photography, Canon EOS R5, 50mm, f/2.8, shallow depth of field, 8K",
    ].join(" "),
  },
  {
    slug: "fence-installation-cost-new-hampshire-2025",
    prompt: [
      "Ultra-photorealistic photograph of a professional fence installation crew working in a New Hampshire residential backyard,",
      "two workers in branded work shirts setting cedar privacy fence posts,",
      "company pickup truck and trailer with fence materials visible in driveway,",
      "neat suburban NH neighborhood, white colonial home, green lawn, summer afternoon,",
      "authentic blue-collar trades photography, Canon EOS R5, 35mm, f/5.6, photorealistic",
    ].join(" "),
  },
  {
    slug: "best-time-install-fence-new-hampshire",
    prompt: [
      "Ultra-photorealistic photograph of a New Hampshire residential backyard in late spring,",
      "professional fence crew installing a cedar wood privacy fence, ground thawed and workable,",
      "maple trees just leafing out in bright spring green, light cloud cover, ideal working conditions,",
      "neat NH suburban neighborhood, colonial home, no snow, fresh green lawn emerging,",
      "authentic documentary photography, Canon EOS R5, 35mm, f/5.6, photorealistic",
    ].join(" "),
  },
  {
    slug: "chain-link-vs-aluminum-fence-new-hampshire",
    prompt: [
      "Ultra-photorealistic photograph of two fence sections in a New Hampshire yard,",
      "foreground left: classic galvanized chain-link fence, utilitarian appearance,",
      "foreground right: elegant black ornamental aluminum fence with decorative posts,",
      "same green residential lawn background, New England colonial home, mature trees,",
      "clean comparison composition, afternoon light, authentic suburban NH setting,",
      "professional photography, Canon EOS R5, 50mm, f/4, 8K, photorealistic",
    ].join(" "),
  },
  {
    slug: "how-to-choose-fence-contractor-southern-nh",
    prompt: [
      "Ultra-photorealistic photograph of a professional fence contractor meeting with a homeowner",
      "in a New Hampshire suburban backyard, contractor in branded polo shirt reviewing a written estimate on a clipboard,",
      "homeowner couple listening, mature cedar trees and colonial home in background,",
      "daytime, warm and professional atmosphere, authentic NH residential setting,",
      "documentary style, Canon EOS R5, 35mm, f/4, photorealistic, 8K",
    ].join(" "),
  },
  {
    slug: "fence-repair-vs-replace-new-hampshire",
    prompt: [
      "Ultra-photorealistic photograph of a New Hampshire residential fence showing storm damage on one section,",
      "left portion: weathered and leaning cedar wood fence with a broken post and split boards,",
      "right portion: same fence style but newly replaced — fresh cedar boards, plumb post, clean finish,",
      "autumn NH yard, fallen leaves on ground, colonial home background, overcast light,",
      "authentic before-and-after side by side in one scene, documentary photography,",
      "Canon EOS R5, 35mm, f/5.6, photorealistic",
    ].join(" "),
  },
];

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
      res.on("end", () => {
        writeFileSync(destPath, Buffer.concat(chunks));
        resolve(destPath);
      });
    }).on("error", reject);
  });
}

function onProgress(update) {
  if (update.status === "IN_QUEUE") {
    process.stdout.write("\r    ⏳  In queue...                                        ");
  } else if (update.status === "IN_PROGRESS") {
    const msg = update.logs?.at(-1)?.message ?? "";
    if (msg) process.stdout.write(`\r    ⚡  ${msg.slice(0, 62).padEnd(62)}`);
  }
}

async function generateImage(slug, prompt, outDir) {
  const destPath = join(outDir, `${slug}.jpg`);

  if (existsSync(destPath)) {
    const kb = Math.round(readFileSync(destPath).length / 1024);
    console.log(`    ⏭  Already exists (${kb} KB) — skipping`);
    return;
  }

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
    onQueueUpdate: onProgress,
  });

  process.stdout.write("\n");

  const imageUrl = result.data?.images?.[0]?.url;
  if (!imageUrl) throw new Error(`No image URL returned. Response: ${JSON.stringify(result.data)}`);

  console.log("    ✓ Generated — downloading...");
  await downloadImage(imageUrl, destPath);
  const kb = Math.round(readFileSync(destPath).length / 1024);
  console.log(`    ✓ Saved → public/images/blog/${slug}.jpg (${kb} KB)`);
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const slugFilter = process.argv.find((a) => a.startsWith("--slug="))?.split("=")[1] ?? null;
  const posts = slugFilter ? POSTS.filter((p) => p.slug === slugFilter) : POSTS;

  if (slugFilter && posts.length === 0) {
    console.error(`❌  No post found with slug: ${slugFilter}`);
    process.exit(1);
  }

  console.log("\n╔══════════════════════════════════════════════════════════════╗");
  console.log(`║  Placed Right Fence — Blog Image Generator                   ║`);
  console.log(`║  ${posts.length} image(s) — fal-ai/flux-pro/v1.1               `.padEnd(65) + "║");
  console.log("╚══════════════════════════════════════════════════════════════╝");

  const outDir = join(__dirname, "../public/images/blog");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  let succeeded = 0;
  let failed = 0;

  for (let i = 0; i < posts.length; i++) {
    const { slug, prompt } = posts[i];
    console.log(`\n[${i + 1}/${posts.length}] ${slug}`);
    try {
      await generateImage(slug, prompt, outDir);
      succeeded++;
    } catch (err) {
      console.error(`\n    ❌  Failed: ${err.message}`);
      failed++;
    }
  }

  console.log("\n╔══════════════════════════════════════════════════════════════╗");
  console.log(`║  Done: ${succeeded} generated, ${failed} failed`.padEnd(64) + "║");
  console.log("║  Output: web/public/images/blog/<slug>.jpg                   ║");
  console.log("╚══════════════════════════════════════════════════════════════╝\n");

  if (failed > 0) process.exit(1);
}

main();
