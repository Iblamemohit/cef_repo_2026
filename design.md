# SInC

## Mission
Create implementation-ready, token-driven UI guidance for SInC that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand
- Product/brand: SInC
- URL: https://www.sinciitd.in/
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: structured, tokenized, content-first
- Main font style: `font.family.primary=Geist`, `font.family.stack=Geist, Geist Fallback, system-ui, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24.8px`
- Typography scale: `font.size.xs=10px`, `font.size.sm=11px`, `font.size.md=12px`, `font.size.lg=14px`, `font.size.xl=16px`, `font.size.2xl=18px`, `font.size.3xl=20px`, `font.size.4xl=24px`
- Color palette: `color.text.primary=#cecac3`, `color.text.secondary=#e5e2d1`, `color.text.tertiary=#a69e92`, `color.text.inverse=#b4ada3`, `color.surface.base=#000000`, `color.surface.muted=#25210f`, `color.surface.raised=#252315`, `color.surface.strong=#181a1b`, `color.border.muted=#3a3f42`
- Spacing scale: `space.1=2px`, `space.2=4px`, `space.3=8px`, `space.4=12px`, `space.5=16px`, `space.6=20px`, `space.7=24px`, `space.8=32px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=999px`, `radius.md=22369600px` | `shadow.1=rgba(30, 32, 33, 0.04) 0px 1px 2px 0px, rgba(30, 32, 33, 0.03) 0px 4px 12px 0px`, `shadow.2=rgba(26, 44, 74, 0.1) 3px 3px 0px 0px`, `shadow.3=rgb(26, 44, 74) 0px 0px 0px 1px inset` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (50), cards (35), buttons (6), lists (5), navigation (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
