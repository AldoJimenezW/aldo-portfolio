# Aldo Jiménez Wiehoff — Portfolio

<p align="center">
  <a href="https://aldojimenezw.dev" target="_blank">
    <img src="public/favicon.svg" width="64" height="64" alt="AJW Logo" />
  </a>
</p>

<h1 align="center">Aldo Jiménez Wiehoff</h1>
<p align="center">
  <strong>Backend & DevOps Engineer</strong> · Computer Engineer · Coffee Enthusiast
</p>

<p align="center">
  <a href="https://aldojimenezw.dev" target="_blank">🌐 Live Site</a> •
  <a href="https://www.linkedin.com/in/aldo-jimenez-wiehoff/" target="_blank">LinkedIn</a> •
  <a href="https://github.com/AldoJimenezW" target="_blank">GitHub</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-4.0-BC52EE?logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Output-static-8A2BE2" alt="Static" />
  <img src="https://img.shields.io/badge/License-View%20Only-ff69b4" alt="License" />
</p>

---

## Overview

A dark, editorial, single-page portfolio built with **Astro** and **vanilla TypeScript**. No React, no Vue, no Svelte — just Astro components, scoped `<style>` blocks, and a single client-side script orchestrating animations, i18n, and smooth scroll.

The site features a cinematic intro animation, bilingual support (ES/EN), smooth Lenis scrolling with section snap, a 3D-like skill stack, and an interactive card carousel in the About section.

---

## Preview

| Desktop | Mobile |
|---------|--------|
| *(screenshot placeholder)* | *(screenshot placeholder)* |

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build) v4 (static output) |
| Language | TypeScript (strict) |
| Styling | Pure CSS (custom properties, no preprocessor) |
| Animation | CSS transitions + FLIP technique |
| Smooth Scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Fonts | Unbounded (display) + DM Sans (body) via Google Fonts |

**No UI frameworks.** Every component is a native `.astro` file with scoped `<style>`.

---

## Features

- **🎬 Cinematic intro** — name drops from the center of the screen into the hero using FLIP math with pixel-perfect timing
- **🌐 Bilingual (ES/EN)** — client-side i18n toggle; all copy lives in `src/i18n/translations.ts`
- **🧈 Smooth scroll** — Lenis with section snap (disabled inside Skills so the 3D stack scrolls freely)
- **🎴 Interactive card stack** — auto-rotating info cards with keyboard, touch, and arrow navigation
- **🎞️ Infinite marquee** — skill ticker built at runtime for language switching
- **📜 Scroll reveal** — IntersectionObserver-based entrance animations with stagger
- **📱 Fully responsive** — mobile-first, `svh` units, and adaptive grid layouts

---

## Project Structure

```
├── astro.config.mjs          # Static output config
├── package.json
├── public/                     # Static assets (photo, favicon, images)
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # HTML shell, fonts, meta, client JS hub
│   ├── pages/
│   │   └── index.astro         # Composes all sections
│   ├── components/
│   │   ├── Intro.astro         # Fixed intro layers (bg + name)
│   │   ├── Nav.astro           # Fixed navbar (hide on scroll down)
│   │   ├── Hero.astro          # Taglines, photo, name
│   │   ├── SkillMarquee.astro  # Empty server-side; populated by JS
│   │   ├── About.astro         # Card stack + bio
│   │   ├── Skills.astro         # 3D-like sticky scroll tech stack
│   │   ├── Experience.astro    # Editorial timeline
│   │   ├── Projects.astro      # Clickable project rows
│   │   ├── Education.astro     # Degrees + certifications
│   │   ├── Contact.astro       # Big CTA + contact links
│   │   └── Footer.astro
│   ├── i18n/
│   │   └── translations.ts     # ES/EN copy source of truth
│   └── styles/
│       └── global.css            # Design tokens, reset, scroll-reveal, sections
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

### Build

```bash
npm run build
```

Static files are output to `dist/`.

### Preview

```bash
npm run preview
```

---

## Customization Guide

### Replace the photo

1. Add your image to `public/` (e.g., `public/photo.jpg`)
2. In `src/components/Hero.astro`, update:
   ```astro
   <img src="/photo.jpg" alt="Your Name" loading="eager" />
   ```

### Update contact links

Edit `src/i18n/translations.ts`:

```ts
contacto: {
  links: [
    { label: 'Email',    value: 'you@example.com', href: 'mailto:you@example.com' },
    { label: 'LinkedIn', value: 'Your Name',       href: 'https://linkedin.com/in/you' },
    { label: 'GitHub',   value: 'github.com/you',  href: 'https://github.com/you' },
  ],
}
```

### Add experience or projects

Append new objects to `exp.items` or `proyectos.items` in `src/i18n/translations.ts`. The site renders them automatically.

### Change the intro name size

`--nsz` in `src/styles/global.css` must match the font-size in both `Intro.astro` and `Hero.astro`. Changing it also requires updating the FLIP delta math in `Layout.astro`.

---

## Architecture Notes

- **Intro &rarr; Hero handoff** — `Intro.astro` provides two independent fixed layers (`#intro-bg`, `#intro-name`). They are separate so opacity changes on the background do not affect the name. `Layout.astro` orchestrates the timeline.
- **FLIP animation** — `getBoundingClientRect()` calculates the exact delta in pixels between the intro name and the hero name. The hero name has a permanent `translateY(-50%)` that the FLIP must land on.
- **Marquee** — `SkillMarquee.astro` is empty on the server. `buildMarquee()` in `Layout.astro` populates `#marquee-track` at runtime so the list can switch languages instantly.
- **Skills scroll** — A tall `.skills-track` drives a sticky `.skills-window`. JS maps scroll progress to `translateY` on the rail and parallax on the background image.

---

## License

This source code is provided for **viewing and reference only**.

You may:
- Browse and read the code
- Fork it to your own GitHub account for **personal study**

You may **not**:
- Use it (or any part of it) in a commercial or personal project
- Redistribute, sell, or sublicense it
- Create derivative works from it
- Remove or alter copyright notices

See [LICENSE](LICENSE) for the full terms.

© 2026 Aldo Jiménez Wiehoff. All rights reserved.

---

<p align="center">
  Designed & developed with ♥
</p>
