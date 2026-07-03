# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

## Project: Yo! Galina landing page

Vite + React + TypeScript static site (no router, no SSR). Current work lives on `feature/v2_new_design`; `main` and `backup/v1_static_page` still hold the old plain-HTML v1 site (`docs/`, `f1_landing/v1/`) for reference.

### Commands
- `npm install` — install dependencies (has `package-lock.json`)
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build`, outputs the static site to `dist/`
- `npm run preview` — serve the production build locally

No test runner or linter is configured in this project.

### Architecture
- Entry chain: `index.html` → `src/main.tsx` → `src/App.tsx`, which composes the page from `src/components/`.
- Every visual section of the page is its own component (`Nav`, `Hero`, `Prices`, `Directions`, `Reviews`, `Locations`, `Footer`), each paired with its own `.css` file. `Schedule` is the one exception — it's rendered *inside* `Hero`, not as a top-level section in `App.tsx`: on desktop (`min-width: 1024px`) it overlays the hero image using CSS Grid stacking (both placed in the same grid cell), on mobile it falls back to a plain static block below the image. Read `Hero.css` and `Schedule.css` together before changing either.
- Design tokens (colors, fonts, spacing scale, radii) live in `src/styles/tokens.css` as CSS custom properties — reference these in component CSS instead of hardcoding hex/px values. `src/styles/global.css` has resets/body defaults.
- Content data (schedule slots, reviews, locations, external links) lives in `src/data/*.ts`, not inline in components. Prices are the one exception (hardcoded in `Prices.tsx` since each price card has distinct markup, not a uniform list).
- Images are imported as ES modules from `src/assets/` (Vite fingerprints/bundles them). Favicons and `CNAME` sit in `public/` since those need fixed filenames/paths.
- Single responsive breakpoint used everywhere: `min-width: 1024px` (mobile-first CSS, no other breakpoints).
- Deploy: `.github/workflows/deploy.yml` builds and pushes `dist/` to GitHub Pages on push to `main` — requires repo Settings → Pages → Source set to "GitHub Actions". Custom domain is `yogalina.vepsify.com` via `public/CNAME`.
- Design source of truth: a claude.ai Design project ("yo!Galina web", read via the `claude_design` MCP), Dark Forest theme, file `Yo Galina Redesign.dc.html` (frames A = mobile, C = desktop). That project is a regular project, not a design-system, so it's not currently a two-way `/design-sync` target.
