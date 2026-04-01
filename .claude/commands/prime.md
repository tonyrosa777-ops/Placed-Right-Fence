# project-prime.md — Optimus Business Solutions
# Placed Right Fence Co. LLC — Session Primer
# .claude/commands/prime.md — run /prime at the start of every session

---

You are the lead architect on a high-stakes website build for **Placed Right Fence Co. LLC** (placedrightfence.com) — a family-run residential fence installation and repair contractor based in Nashua, NH (serves Southern NH and Seacoast). This is a full ground-up build: new brand identity, conversion-optimized architecture, built on the Optimus standard stack.

Before you write a single line of code or make any design decision, you must read and internalize every file in this project. Here is the complete file manifest and reading protocol.

---

## MANDATORY PRE-READ SEQUENCE

Execute these reads in this exact order before doing anything else:

```
Step 1: read CLAUDE.md                                              ← Your rules. Non-negotiable.
Step 2: read progress.md                                            ← Where we are. Resume from here.
Step 3: read C:\Projects\Optimus Assets\knowledge\build-log.md     ← Known errors + patterns from all prior builds.
Step 4: read initial-business-data.md                               ← Business data: offers, pricing, audience, brand, goals.
Step 5: read market-intelligence.md                                 ← Competitive research, market gaps, strategic recommendations.
Step 6: read design-system.md                                       ← Brand identity, palette, typography, tone. The law.
Step 7: read frontend-design.md                                     ← UI/UX principles and implementation rules.
Step 8: read website-build-template.md                              ← Stack, directory structure, components, architecture. The build bible.
```

Do not skip steps. Do not proceed to any task until all eight files are loaded and acknowledged.
If a file does not yet exist, flag it immediately and halt until it is created.

---

## FIRST SESSION OBJECTIVE: ENVIRONMENT SETUP + PLANNING

**Phase 0 is complete for this project. Tasks 1–4 below are already done. Skip directly to Task 5 to confirm current state, then resume from progress.md.**

---

### Task 1 — Complete CLAUDE.md ✅ DONE

CLAUDE.md variables are filled:

| Variable | Value |
|----------|-------|
| `BUSINESS_NAME` | Placed Right Fence Co. LLC |
| `DOMAIN` | placedrightfence.com |
| `BUSINESS_TYPE` | family-run residential fence installation and repair contractor |
| `LOCATION` | Nashua, NH (serves Southern NH and Seacoast) |
| `LAUNCH_TARGET` | April 2026 |
| `PRIMARY_AUDIENCE` | NH homeowners aged 30–50 with children and/or pets needing fence installation or repair in Southern NH and Seacoast |
| `CORE_OFFER` | Fence installation and repair — wood, vinyl, aluminum, chain link; free on-site estimates within 72 hours |
| `KEY_GOAL` | Drive free estimate leads from local search — rank for "fence company near me" Nashua/Manchester and become the most trusted fence installer in Southern NH |
| `BOOKING_ENGINE` | Custom multi-step estimate form → email/phone lead delivery (no CRM; confirm exact tool before Phase 4) |
| `SCHEMA_TYPE` | LocalBusiness (HomeAndConstructionBusiness → Contractor) |

---

### Task 2 — Create progress.md ✅ DONE

progress.md exists at project root. Read it to determine current phase.

---

### Task 3 — Create design-system.md ✅ DONE

design-system.md exists at project root. Light theme: cream #F5F0E8 / navy #1B365D / terracotta #C4704B.
Fonts: DM Serif Display (display) + DM Sans (body) + IBM Plex Mono (mono/eyebrows).

---

### Task 4 — Scaffold the Project ✅ DONE

Next.js 16.2.2 + React 19 + Tailwind CSS v4 scaffolded in `web/` subdirectory.
Framer Motion + react-intersection-observer + clsx + tailwind-merge installed.
globals.css wired with brand tokens. layout.tsx wired with fonts.
/data/site.ts created with all copy. FadeIn animation wrapper created.
Pushed to: https://github.com/tonyrosa777-ops/Placed-Right-Fence

---

### Task 5 — Resume from progress.md

Read progress.md → find "Next Session Starts At" → resume from that task.
Do not re-execute Tasks 1–4.

---

## PROJECT CONTEXT

**Primary objective:**
Drive free estimate leads from local search — rank for "fence company near me" Nashua/Manchester and become the most trusted fence installer in Southern NH.

**Target audience:**
NH homeowners aged 30–50 with children and/or pets needing fence installation or repair in Southern NH and Seacoast.

**Core offerings:**
Fence installation and repair — wood, vinyl, aluminum, chain link; free on-site estimates within 72 hours.

**Tech stack:**
- Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion + TypeScript strict
- App lives in `web/` subdirectory — all commands run from `C:\Projects\Placed-Right-Fence\web`
- See website-build-template.md — Stack section for full details.

**Competitive advantages to own:**
- NH-born and raised — frost-line post setting, granite soil expertise (market-intelligence.md §1)
- Radical transparency: published pricing ranges, written estimates that don't change (market-intelligence.md §1)
- Response-time guarantee: free estimate within 72 hours, same-day callback (market-intelligence.md §7)
- Real project photos + before/after gallery — fal.ai generated until client photos arrive (build-log.md Pattern #4)
- NH-specific educational content: permits, frost line, pool codes — zero competition (market-intelligence.md §5)

---

## STANDING ORDERS

These apply to every session, every task, every line of code, forever:

1. **Read before you build.** The eight files in the pre-read sequence contain everything needed to avoid bad decisions. Use them every session.
2. **website-build-template.md is the build foundation.** Stack, directory structure, animation patterns, and base components are defined there. Scaffold from it first — then layer client-specific features on top based on initial-business-data.md and market-intelligence.md. Build custom additions using the same conventions the template establishes.
3. **design-system.md is the brand law.** Every color, font, and component rule comes from there. Do not improvise values not in the system.
4. **Mobile first, always.** Design at 390px. Then scale up. Never the reverse.
5. **Research backs every choice.** If you cannot point to market-intelligence.md or design-system.md to justify a decision, flag it before implementing.
6. **Commit atomically.** Every subtask = one commit. Never batch unrelated changes.
7. **Update progress.md after every subtask — not at session end.** Context can exhaust mid-build. If you defer, it's lost. Commit the progress.md update as part of each subtask commit. No exceptions.
8. **The conversion flow is sacred.** Every extra click costs conversions. Every domain redirect costs trust.
9. **All copy lives in /data/site.ts.** Zero hard-coded strings in components. Client handoff and future edits must be trivial.
10. **If it isn't in progress.md, it didn't happen.** Document everything.
11. **Log it or lose it.** Every resolved error → entry in `build-log.md` before continuing. Every completed project → retrospective entry. The knowledge base only works if it grows.
12. **Every new page gets wired immediately.** Any new route created must be added to navigation and sitemap.ts in the same commit. Never create a page without connecting it.
13. **Placeholder CTAs are blockers, not completions.** "Coming soon" or static CTA boxes are not acceptable phase sign-offs. Every primary conversion flow must have a demo-mode interactive component before the phase is marked complete. Flag it and propose the component before closing.
14. **Generated assets are part of the task.** Any script that outputs files into /public must commit those files as part of the same task commit. Generated images, videos, and data files are never a separate follow-up step.

---

Begin by executing the Mandatory Pre-Read Sequence.
Confirm each file was read.
Then read progress.md and resume from "Next Session Starts At".
Go.
