"use client";
// The Forge — Canvas 2D implementation of the fence-forging hero animation
//
// Phase 1 (per picket): 6–8 bezier convergence streams pull gold particles
//          toward the picket base position
// Phase 2: Forge flash — 2 ring pulses + 8 spark lines fire from base
// Phase 3: Picket extrudes upward with spring overshoot; color cools
//          white-hot → orange → molten gold → deep settled gold
// Phase 4: Top rail draws left→right after last picket settles
// Idle:    Subtle emissive breathing on all pickets + particle rail sweep
//
// Fully respects prefers-reduced-motion (shows settled fence immediately)
// No Three.js, no GSAP — pure requestAnimationFrame + Canvas API

import { useEffect, useRef } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface StreamParticle {
  sx: number; sy: number;   // bezier source
  cx: number; cy: number;   // bezier control point
  t: number;                // 0→1 progress along curve
  speed: number;
  size: number;
}

interface Ring {
  x: number; y: number;
  startR: number; maxR: number;
  born: number; duration: number;
}

interface Spark {
  x: number; y: number;
  angle: number;
  maxLen: number;
  born: number; duration: number;
  white: boolean;
}

type Phase = "wait" | "stream" | "rise" | "settle";

interface Picket {
  x: number; groundY: number;
  w: number; fullH: number; curH: number;
  phase: Phase;
  streamAt: number;   // elapsed ms → start streaming
  forgeAt: number;    // elapsed ms → fire forge
  particles: StreamParticle[];
  coolingT: number;   // 0 = white hot, 1 = fully cooled
}

// ─── Color utilities ───────────────────────────────────────────────────────────

// Heat → color stops: white-hot → orange → molten gold → deep gold
const HEAT: [number, number, number, number][] = [
  [0.00, 255, 255, 255],
  [0.14, 255, 135, 30],
  [0.36, 255, 215,  0],
  [0.62, 201, 168, 76],
  [1.00, 120,  90, 18],
];

function heatRGB(t: number): [number, number, number] {
  const c = Math.max(0, Math.min(1, t));
  for (let i = 0; i < HEAT.length - 1; i++) {
    const [t0, r0, g0, b0] = HEAT[i];
    const [t1, r1, g1, b1] = HEAT[i + 1];
    if (c >= t0 && c <= t1) {
      const f = (c - t0) / (t1 - t0);
      return [
        Math.round(r0 + (r1 - r0) * f),
        Math.round(g0 + (g1 - g0) * f),
        Math.round(b0 + (b1 - b0) * f),
      ];
    }
  }
  return [120, 90, 18];
}

function heatCSS(t: number, a = 1): string {
  const [r, g, b] = heatRGB(t);
  return `rgba(${r},${g},${b},${a})`;
}

// ─── Spring easing ─────────────────────────────────────────────────────────────
// Slight overshoot at top, settles back — "physical extrusion" feel

function springOut(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return 1 - Math.pow(2, -9 * t) * Math.cos(t * 10 * Math.PI * 0.68);
}

// ─── Layout ────────────────────────────────────────────────────────────────────

interface Layout {
  n: number; spacing: number; w: number; fullH: number;
  startX: number; groundY: number;
  isMobile: boolean;
}

function getLayout(W: number, H: number): Layout {
  if (W < 640) {
    // Mobile: single centered spear-tip picket — tall gold beacon behind the headline
    // Tip lands just below the subheadline text
    const n = 1; const w = 18; const fullH = 200;
    return {
      n, spacing: 0, w, fullH,
      startX: W * 0.5,
      groundY: H * 0.88,
      isMobile: true,
    };
  }
  if (W < 1024) {
    // Tablet: moderate fence, centered lower half
    const n = 8; const spacing = 36; const w = 12; const fullH = 100;
    return {
      n, spacing, w, fullH,
      startX: W * 0.5 - ((n - 1) * spacing) / 2,
      groundY: H * 0.80,
      isMobile: false,
    };
  }
  // Desktop: full 10-picket fence, right-side positioned
  const n = 10; const spacing = 46; const w = 15; const fullH = 148;
  return {
    n, spacing, w, fullH,
    startX: W * 0.72 - ((n - 1) * spacing) / 2,
    groundY: H * 0.73,
    isMobile: false,
  };
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function ForgeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── Timing constants ────────────────────────────────────────────────────
    const STREAM_LEAD = 520;   // ms of streaming before forge fires
    const RISE_MS     = 460;   // ms for picket to fully rise
    const COOL_MS     = 1900;  // ms to cool white → settled
    const STAGGER     = 200;   // ms between picket starts
    const RAIL_DUR    = 520;   // ms to draw rail across

    // ── Scene state ─────────────────────────────────────────────────────────
    let raf: number;
    let t0: number | null = null;   // animation start timestamp
    let pickets: Picket[] = [];
    let rings: Ring[]     = [];
    let sparks: Spark[]   = [];
    let railAt  = -1;              // elapsed ms when rail starts
    let railParticles: { t: number; speed: number }[] = [];
    let currentLayout: Layout = getLayout(800, 600); // will be overwritten on first resize

    // ── Build pickets from layout ────────────────────────────────────────────
    function build(lout: Layout) {
      currentLayout = lout;
      pickets = [];
      rings   = [];
      sparks  = [];
      railAt  = -1;
      t0      = null;
      railParticles = [{ t: 0, speed: 0.003 }, { t: 0.4, speed: 0.0025 }, { t: 0.7, speed: 0.0035 }];

      for (let i = 0; i < lout.n; i++) {
        const streamAt = 180 + i * STAGGER;
        const forgeAt  = streamAt + STREAM_LEAD;

        if (reduced) {
          // Immediately settle all pickets — no animation
          pickets.push({
            x: lout.startX + i * lout.spacing, groundY: lout.groundY,
            w: lout.w, fullH: lout.fullH, curH: lout.fullH,
            phase: "settle", streamAt, forgeAt,
            particles: [], coolingT: 1,
          });
        } else {
          pickets.push({
            x: lout.startX + i * lout.spacing, groundY: lout.groundY,
            w: lout.w, fullH: lout.fullH, curH: 0,
            phase: "wait", streamAt, forgeAt,
            particles: [], coolingT: 0,
          });
        }
      }

      if (reduced) railAt = 0; // draw rail immediately
    }

    // ── Resize handler ───────────────────────────────────────────────────────
    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      build(getLayout(canvas.width, canvas.height));
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    // ── Spawn convergence streams ────────────────────────────────────────────
    function spawnStreams(p: Picket) {
      const mobile = currentLayout.isMobile;
      // Single picket on mobile needs wider spread to fill the viewport dramatically
      const n      = mobile ? 9 : (6 + Math.floor(Math.random() * 3));
      const spread = mobile ? 1.5 : 0.8;
      const jitter = mobile ? 48  : 38;

      for (let i = 0; i < n; i++) {
        const angle = (i / n) * Math.PI * 2 + Math.random() * 0.7;
        const dist  = p.fullH * (0.45 + Math.random() * spread);
        const sx    = p.x + Math.cos(angle) * dist;
        const sy    = p.groundY - Math.random() * p.fullH * 0.55 + Math.sin(angle) * dist * 0.25;
        const cx    = sx + (p.x - sx) * (0.25 + Math.random() * 0.35) + (Math.random() - 0.5) * jitter;
        const cy    = sy + (p.groundY - sy) * 0.3 + (Math.random() - 0.5) * (jitter * 0.6);
        p.particles.push({ sx, sy, cx, cy, t: 0, speed: 0.007 + Math.random() * 0.005, size: 1.2 + Math.random() * 1.2 });
      }
    }

    // ── Forge flash ──────────────────────────────────────────────────────────
    function triggerForge(p: Picket, now: number, lout: Layout) {
      // Single picket on mobile — larger ring burst and more sparks to match impact
      const maxR      = lout.isMobile ? 60  : 72;
      const nSparks   = lout.isMobile ? 11  : 8;
      const sparkBase = lout.isMobile ? 28  : 26;
      const sparkRng  = lout.isMobile ? 36  : 38;

      rings.push({ x: p.x, y: p.groundY, startR: 3, maxR,          born: now, duration: 400 });
      rings.push({ x: p.x, y: p.groundY, startR: 2, maxR: maxR / 2, born: now, duration: 250 });

      for (let i = 0; i < nSparks; i++) {
        const angle = (i / nSparks) * Math.PI * 2 + Math.random() * 0.55;
        sparks.push({
          x: p.x, y: p.groundY, angle,
          maxLen: sparkBase + Math.random() * sparkRng,
          born: now, duration: 280 + Math.random() * 110,
          white: Math.random() > 0.45,
        });
      }
    }

    // ── Draw one picket ──────────────────────────────────────────────────────
    function drawPicket(p: Picket) {
      if (p.curH < 1 || !ctx) return;
      const { x, groundY: gy, curH: h, fullH: fh, w } = p;

      // Idle breathing offset applied externally to coolingT — clamp here
      const ct = Math.max(0, Math.min(1, p.coolingT));

      const [r, g, b] = heatRGB(ct);
      const glow  = Math.max(0, 1 - ct);
      const maxBlur = currentLayout.isMobile ? 26 : 28;
      const blur  = glow * maxBlur + 4;

      const shY  = gy - h * 0.78;   // shoulder y (where shaft meets tip)
      const tipY = gy - h;           // tip point

      ctx.save();
      ctx.shadowColor = `rgb(${r},${g},${b})`;
      ctx.shadowBlur  = blur;

      // Picket silhouette — spear-point profile matching logo
      ctx.beginPath();
      ctx.moveTo(x - w / 2, gy);
      ctx.lineTo(x - w / 2, shY);
      ctx.lineTo(x, tipY);
      ctx.lineTo(x + w / 2, shY);
      ctx.lineTo(x + w / 2, gy);
      ctx.closePath();

      const grad = ctx.createLinearGradient(x, gy, x, tipY);
      grad.addColorStop(0,    `rgba(${Math.round(r*0.32)},${Math.round(g*0.32)},${Math.round(b*0.32)},0.97)`);
      grad.addColorStop(0.52, `rgba(${r},${g},${b},1)`);
      grad.addColorStop(1,    `rgba(${Math.min(255,r+52)},${Math.min(255,g+52)},${Math.min(255,b+22)},1)`);
      ctx.fillStyle = grad;
      ctx.fill();

      // Edge shimmer
      ctx.shadowBlur  = 0;
      ctx.strokeStyle = `rgba(${Math.min(255,r+70)},${Math.min(255,g+70)},${Math.min(255,b+28)},${0.28 + glow * 0.52})`;
      ctx.lineWidth   = 0.7;
      ctx.stroke();
      ctx.restore();
    }

    // ── Main tick ────────────────────────────────────────────────────────────
    function tick(now: number) {
      if (!canvas || !ctx) { raf = requestAnimationFrame(tick); return; }
      if (t0 === null) t0 = now;
      const elapsed = now - t0;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      // ── Update picket state ────────────────────────────────────────────────
      let lastForgeAt = 0;
      for (const p of pickets) {
        if (p.forgeAt > lastForgeAt) lastForgeAt = p.forgeAt;

        if (p.phase === "wait" && elapsed >= p.streamAt) {
          p.phase = "stream";
          spawnStreams(p);
        }

        if (p.phase === "stream" && elapsed >= p.forgeAt) {
          p.phase = "rise";
          p.particles = [];
          triggerForge(p, now, currentLayout);
        }

        if (p.phase === "rise") {
          const rt = Math.min(1, (elapsed - p.forgeAt) / RISE_MS);
          p.curH = p.fullH * springOut(rt);
          if (rt >= 1) { p.curH = p.fullH; p.phase = "settle"; }
        }

        // Cooling starts just after forge fires (both rise and settle phases)
        if (p.phase === "rise" || p.phase === "settle") {
          p.coolingT = Math.min(1, Math.max(0, (elapsed - p.forgeAt - 60) / COOL_MS));
        }
      }

      // ── Schedule rail ──────────────────────────────────────────────────────
      if (railAt < 0 && elapsed > lastForgeAt + 220) {
        railAt = elapsed;
      }

      const railT = railAt >= 0 ? Math.min(1, (elapsed - railAt) / RAIL_DUR) : 0;

      // ── Idle breathing — fires after rail completes, or immediately for single picket
      // Single picket has no rail; trigger breathing after its cooling phase finishes
      const singlePicketIdle = pickets.length === 1 && elapsed > (pickets[0].forgeAt + COOL_MS * 0.85);
      if (railT >= 1 || singlePicketIdle) {
        for (const p of pickets) {
          if (p.phase === "settle") {
            // Oscillate coolingT in [0.89, 0.96] — subtle amber-gold pulse
            const breathe = Math.sin(elapsed * 0.00085 + p.x * 0.013) * 0.035;
            p.coolingT = 0.925 + breathe;
          }
        }
      }

      // ── Advance stream particles ───────────────────────────────────────────
      for (const p of pickets) {
        if (p.phase !== "stream") continue;
        for (const pt of p.particles) {
          pt.t = Math.min(1, pt.t + pt.speed);
        }
      }

      // ── Draw convergence streams ───────────────────────────────────────────
      for (const p of pickets) {
        if (p.phase !== "stream") continue;
        for (const pt of p.particles) {
          const t  = pt.t;
          const bx = (1-t)*(1-t)*pt.sx + 2*(1-t)*t*pt.cx + t*t*p.x;
          const by = (1-t)*(1-t)*pt.sy + 2*(1-t)*t*pt.cy + t*t*p.groundY;

          // Gold brightens as particle approaches base
          const bright = 0.44 + t * 0.56;
          const alpha  = t < 0.12 ? t / 0.12 : t > 0.86 ? (1 - t) / 0.14 : 1;

          const pr = Math.round(184 + 71 * t);
          const pg = Math.round(134 + 81 * t);
          const pb = Math.round(11  + 64 * t);

          ctx.save();
          ctx.beginPath();
          ctx.arc(bx, by, pt.size * bright, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${pr},${pg},${pb},${(alpha * 0.88).toFixed(2)})`;
          ctx.fill();

          // Soft halo
          ctx.beginPath();
          ctx.arc(bx, by, pt.size * bright * 2.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,200,60,${(alpha * 0.10).toFixed(2)})`;
          ctx.fill();
          ctx.restore();
        }
      }

      // ── Draw ring pulses ───────────────────────────────────────────────────
      for (let i = rings.length - 1; i >= 0; i--) {
        const rg = rings[i];
        const tp = (now - rg.born) / rg.duration;
        if (tp >= 1) { rings.splice(i, 1); continue; }

        const rad   = rg.startR + (rg.maxR - rg.startR) * tp;
        const alpha = (1 - tp) * 0.85;

        ctx.save();
        ctx.beginPath();
        ctx.arc(rg.x, rg.y, rad, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,215,0,${alpha.toFixed(2)})`;
        ctx.lineWidth   = 1.4 + (1 - tp) * 1.2;
        ctx.shadowColor = "#FFD700";
        ctx.shadowBlur  = 7;
        ctx.stroke();
        ctx.restore();
      }

      // ── Draw sparks ────────────────────────────────────────────────────────
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        const tp = (now - sp.born) / sp.duration;
        if (tp >= 1) { sparks.splice(i, 1); continue; }

        const len   = sp.maxLen * Math.min(1, tp * 2.4);
        const alpha = Math.pow(1 - tp, 1.6);
        const ex    = sp.x + Math.cos(sp.angle) * len;
        const ey    = sp.y + Math.sin(sp.angle) * len;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(sp.x, sp.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = sp.white
          ? `rgba(255,255,255,${(alpha * 0.88).toFixed(2)})`
          : `rgba(255,215,0,${(alpha * 0.85).toFixed(2)})`;
        ctx.lineWidth   = 0.9 + (1 - tp);
        ctx.lineCap     = "round";
        ctx.shadowColor = sp.white ? "#FFFFFF" : "#FFD700";
        ctx.shadowBlur  = 5;
        ctx.stroke();
        ctx.restore();
      }

      // ── Draw pickets ───────────────────────────────────────────────────────
      for (const p of pickets) {
        drawPicket(p);
      }

      // ── Draw top rail ──────────────────────────────────────────────────────
      if (railT > 0 && pickets.length >= 2) {
        const first = pickets[0];
        const last  = pickets[pickets.length - 1];
        const railY = first.groundY - first.fullH * 0.80;
        const x1    = first.x;
        const x2cur = x1 + (last.x - x1) * railT;

        // Rail cools as it draws
        const railCool = Math.min(1, railT * 0.65 + 0.28);
        const [rr, rg, rb] = heatRGB(railCool);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x1, railY);
        ctx.lineTo(x2cur, railY);
        ctx.strokeStyle = `rgb(${rr},${rg},${rb})`;
        ctx.lineWidth   = first.w * 0.55;
        ctx.lineCap     = "square";
        ctx.shadowColor = `rgb(${rr},${rg},${rb})`;
        ctx.shadowBlur  = 8 + (1 - railCool) * 18;
        ctx.stroke();
        ctx.restore();

        // Rail particle sweep (idle) — 3 small embers traveling the rail
        if (railT >= 1 && railParticles.length > 0) {
          for (const rp of railParticles) {
            rp.t = (rp.t + rp.speed) % 1;
            const px = x1 + (last.x - x1) * rp.t;
            const glowA = 0.4 + Math.sin(elapsed * 0.003 + rp.t * 10) * 0.2;

            ctx.save();
            ctx.beginPath();
            ctx.arc(px, railY, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,215,0,${glowA.toFixed(2)})`;
            ctx.shadowColor = "#FFD700";
            ctx.shadowBlur  = 8;
            ctx.fill();
            ctx.restore();
          }
        }
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
