---
name: awesome-design-md
description: Curated collection and engine for 73+ production DESIGN.md specifications extracted from world-class websites (Linear, Stripe, Supabase, Raycast, Vercel, Notion, Framer, Airbnb, PostHog, etc.). Use when designing, building, or refining web and mobile interfaces to enforce battle-tested design tokens, typography scales, color hierarchies, component structures, hairline borders, and elevation styles without resorting to generic AI slop.
---

# Awesome DESIGN.md

A production-grade design system reference containing 73+ analyzed `DESIGN.md` files from the most celebrated, craft-driven developer and consumer interfaces.

## What is DESIGN.md?

Introduced by Google Stitch, `DESIGN.md` is a plain-text design system document written in Markdown that AI coding agents read to generate consistent, taste-driven UI.
Instead of relying on fuzzy guesswork, a `DESIGN.md` file defines exact:
- **Color Tokens**: Primary, accent, surface levels (surface-1 to surface-4), canvas background, hairline borders, text contrast scales (ink, ink-muted, ink-subtle).
- **Typography Scale**: Exact font families, sizes, tracking (letter-spacing), line heights, weights.
- **Component Geometry**: Border radii, padding densities, card elevations, subtle shadows.
- **Micro-Interactions**: Hover, active, focus states, and transitions.
- **Anti-Patterns**: Explicit guidelines on what NOT to do.

## Available Design Systems in `design-md/`

The library contains 73+ specifications located in `design-md/`:
- **Developer / Precision Tools**:
  - `linear.app`: Deep charcoal canvas (`#010102`), lavender accent (`#5e6ad2`), hairline borders (`#23252a`), tight negative tracking, dense craft.
  - `raycast`: Deep dark mode, vibrant hot-key badges, high contrast, compact utilitarian layout.
  - `supabase`: Deep emerald green (`#3ecf8e`), dark slate surfaces, subtle gradients.
  - `stripe`: Multi-layered smooth mesh gradients, clean light typography, crisp pill tags, elevated white cards with multi-stop box shadows.
  - `vercel`: Pure monochrome (`#000000` / `#ffffff`), geometric minimalism, high-contrast monospace accents.
  - `posthog`: Retro-modern, playful, distinctive illustration accents, bold high-contrast borders.
  - `warp`: Modern terminal aesthetic, neon accents, blocky panels.
  - `resend`: Ultra-clean minimalist light and dark modes with impeccable typography.
  - `notion`, `figma`, `framer`, `claude`, `airbnb`, `bmw`, `spacex`, and 55+ others.

## How to Use This Skill

### 1. Identify the Matching Aesthetic
When working on a project, analyze the desired character:
- **Technical / Engineering / Forum**: Look at `linear.app`, `supabase`, `raycast`, or `posthog`.
- **Prestigious / Editorial / Institutional**: Look at `stripe`, `apple`, `resend`, or `ibm`.
- **Modern Clean Product**: Look at `framer`, `figma`, `cal`.

### 2. Read the Specific DESIGN.md
Read the relevant specification from `design-md/<brand>/DESIGN.md`. For example:
- Read `design-md/linear.app/DESIGN.md` for dark mode craft, hairline borders, and tight tracking.
- Read `design-md/stripe/DESIGN.md` for clean cards, multi-tier typography, and button micro-states.

### 3. Extract and Apply Design Tokens
Translate the design tokens into your CSS or Tailwind config:
```javascript
// Example: Tailwind theme extension based on DESIGN.md
theme: {
  extend: {
    colors: {
      canvas: '#0B0F17',
      surface: {
        1: '#111827',
        2: '#1F2937',
        3: '#374151'
      },
      accent: {
        DEFAULT: '#D97706', // e.g. engineering amber
        hover: '#B45309'
      },
      hairline: '#1E293B'
    }
  }
}
```

### 4. Anti-Slop Enforcement
- Never use arbitrary saturated purple/pink gradient blobs.
- Avoid low-contrast text on dark backgrounds (`text-gray-500` on black).
- Never use unstyled default buttons or emoji icons.
- Ensure every interactive element has active, hover, and focus-visible states.
