# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies (required before first run)
npm run dev        # start dev server at http://localhost:5173
npm run build      # type-check (tsc -b) then bundle to dist/
npm run lint       # run ESLint on all .ts/.tsx files
npm run preview    # serve the production dist/ build locally
```

There is no test runner configured.

## Architecture

This is a single-page React 19 + Vite 7 + TypeScript app with no routing.

**CSS is split across two files with distinct responsibilities:**
- `src/index.css` — loaded by `main.tsx`; owns CSS custom properties (design tokens), reset, and global utility classes (`.container`, `.gradient-text`, `.btn-filled`, `.btn-outlined`). All color, spacing, and typography tokens live here as `--color-*`, `--space-*`, `--font-size-*` variables.
- `src/App.css` — loaded by `App.tsx`; owns per-section styles, keyframe animations, responsive breakpoints, and the `#root` override that undoes Vite's default `max-width: 1280px` centering.

**`src/App.tsx` is the entire component tree** — one file with no sub-directories:
- Data arrays (`FEATURES`, `STEPS`) are typed `const` arrays defined at module scope, above all components.
- Component order matches DOM order: `NavBar → HeroSection → FeaturesSection → HowItWorksSection → PreOrderSection → Footer`.

## TypeScript Constraints

`tsconfig.app.json` enforces strict settings worth knowing:
- `erasableSyntaxOnly: true` — no enums; use `interface` or `type` instead.
- `noUnusedLocals` / `noUnusedParameters` — unused variables are errors, not warnings.
- `verbatimModuleSyntax` — use `import type` for type-only imports.
- `noEmit: true` — `tsc` only type-checks; Vite handles the actual build.

## Design System

All visual values come from CSS custom properties defined in `src/index.css`. When adding new styles, consume tokens (e.g. `var(--color-accent-blue)`) rather than hardcoding values. The `--color-nav-bg` token includes `rgba` opacity for the frosted-glass navbar; `backdrop-filter: blur(20px)` must accompany it.
