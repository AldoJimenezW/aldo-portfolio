# AGENTS.md — aldo-portfolio

## Stack
- Astro v4, **static output** (`astro.config.mjs`)
- Pure Astro components + vanilla JS. No React/Vue/Svelte.
- TypeScript (strict) via Astro defaults.
- Fonts: Unbounded + DM Sans from Google Fonts (loaded in `Layout.astro`).

## Dev commands
```bash
npm run dev    # http://localhost:4321
npm run build  # dist/
npm run preview
```
No tests, no linter, no formatter are configured.

## Architecture
- **Entry page**: `src/pages/index.astro` composes all sections via Layout.
- **Layout.astro** is the single source of truth for client-side JS:
  - i18n toggle (ES ↔ EN)
  - Intro animation orchestration (timings + FLIP/drop math)
  - Navbar show/hide on scroll
  - Scroll reveal (IntersectionObserver)
  - **SkillMarquee generation** (`buildMarquee`) — items come from `translations.ts`, rendered into `#marquee-track` at runtime.
- **i18n**: Client-side only. Copy lives in `src/i18n/translations.ts`. All text nodes use `data-i18n` / `data-i18n-html` attributes. The marquee array key is `marquee`.
- **Intro animation**: `Intro.astro` provides two fixed layers (`#intro-bg`, `#intro-name`). Layout.astro drives the sequence with `setTimeout`. Changing intro start position or hero target position requires updating both `Intro.astro` CSS **and** the JS deltas in `Layout.astro`.

## Critical file relationships
| File | Role |
|---|---|
| `src/layouts/Layout.astro` | Client JS hub: i18n, intro timeline, marquee builder, nav scroll. |
| `src/components/Intro.astro` | Fixed intro layers. CSS must match `.hero-name` sizing for pixel-perfect landing. |
| `src/components/Hero.astro` | Contains `.hero-name` (#hero-name), the intro landing target. Also hosts `<SkillMarquee />`. |
| `src/components/SkillMarquee.astro` | Empty `#marquee-track` on server; populated by `buildMarquee()` in Layout.astro. |
| `src/i18n/translations.ts` | Source of truth for all copy including the `marquee` skill list. |
| `src/styles/global.css` | Design tokens (`--nsz`, `--spring`, `--ease`), scroll-reveal utilities, section base. |

## Styling conventions
- Uses CSS custom properties from `global.css`:
  - `--D`: Unbounded (display)
  - `--B`: DM Sans (body)
  - `--nsz`: hero name size (must match between intro and hero)
  - `--spring`: `cubic-bezier(0.16, 1, 0.3, 1)` (primary entrance easing)
  - `--ease`: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (color/background transitions)
- Scroll-reveal class: `.rev` + `.on` toggle. Delay variants: `.d1`, `.d2`, `.d3`.
- Tagline entrance: `.hero-tag` uses `.on` + `translateY(-36px → 0)`.

## Gotchas
- **Hero name sizing**: `--nsz` must stay identical in `Intro.astro`, `Hero.astro`, and `global.css`. If changed, the intro drop math breaks.
- **No framework components**: Do not add React/Vue imports. Astro scoped `<style>` + `<script>` is the intended pattern.
- **Marquee build timing**: `buildMarquee('es')` runs immediately in Layout.astro's script. If `#marquee-track` is missing at runtime, the marquee will be empty.
- **Intro is not optional**: Removing `Intro.astro` from `index.astro` will break the timeline in Layout.astro because it expects `#intro-bg` and `#intro-name`.
- **Comments are in English**: All source comments have been standardized to minimal English for readability.
