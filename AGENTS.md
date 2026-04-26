# AGENTS.md

> Project context for AI coding agents (Claude Code, Cursor, Codex, Continue, etc.).
> If you are an AI agent working on this repo, read this file fully before changing code.

---

## Project

**Kigali Six** — a portfolio site for a six-person collective of engineers, researchers, and product builders out of Carnegie Mellon University Africa, Kigali.

The site is editorial in tone — closer to a literary magazine masthead than a tech-startup template. Every design decision should serve that tone. When in doubt: more restrained, more typographic, more deliberate.

## Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS + CSS variables for design tokens
- **Fonts**: Loaded via `next/font/google` (no external `@import` at runtime)
- **Icons**: `lucide-react`
- **Deployment**: Vercel
- **Node**: 20.x or higher

No state management library, no UI kit, no animation library. Pure CSS animations and Tailwind utilities are sufficient for this site. Do not add `framer-motion`, `shadcn/ui`, `mantine`, or similar without explicit instruction.

## Setup

```bash
pnpm install        # or npm / yarn — match the existing lockfile
pnpm dev            # http://localhost:3000
pnpm build          # production build
pnpm lint           # eslint
pnpm typecheck      # tsc --noEmit (add this script if missing)
```

Always run `pnpm typecheck` and `pnpm lint` before reporting a task complete.

## File structure

```
app/
  layout.tsx              # Root layout, fonts, metadata
  page.tsx                # Homepage (composes the section components)
  six/
    [slug]/
      page.tsx            # Individual member pages
      not-found.tsx
  globals.css             # Design tokens, base resets, animations

components/
  layout/
    header.tsx
    footer.tsx
    grain.tsx             # Site-wide noise overlay
    marquee.tsx
  sections/
    hero.tsx
    premise.tsx
    the-six.tsx
    practice.tsx
    contact.tsx
  ui/
    section-label.tsx     # The "01 — Premise" eyebrow
    member-card.tsx
    cta-button.tsx

lib/
  data/
    members.ts            # Source of truth for the six
    practices.ts
  fonts.ts                # next/font configuration

reference/
  prototype.jsx           # Original design prototype — DO NOT IMPORT, reference only
```

Do not introduce new top-level folders without updating this section.

## Design tokens

These are the canonical values. They live in `app/globals.css` as CSS custom properties on `:root`. Reference them everywhere via `var(--token)` — never hardcode.

```css
:root {
    --bg: #14130f; /* deep warm ink */
    --fg: #efeae0; /* warm parchment */
    --muted: #8c8478; /* secondary text */
    --accent: #c8553d; /* terracotta — use sparingly */
    --hair: #2a2722; /* hairlines, dividers, card grids */
}
```

The palette is warm and dark. Pure black (`#000`) and pure white (`#fff`) are forbidden. Cool grays are forbidden. The accent is a single warm terracotta — do not introduce a second accent color, do not gradient it, do not use it for body text.

## Typography

Three families, loaded via `next/font/google` and exposed as CSS variables:

| Role    | Family           | Weight          | Use                                            |
| ------- | ---------------- | --------------- | ---------------------------------------------- |
| Display | Instrument Serif | 400 + italic    | All headings, hero, member names, big numerics |
| Body    | Geist            | 300/400/500/600 | Paragraphs, UI text                            |
| Mono    | JetBrains Mono   | 400/500         | Eyebrows, section indices, labels, micro-text  |

Italic is meaningful — used for emphasis on a single phrase per heading, often colored with `var(--accent)`. Do not italicize whole headings.

Set up in `lib/fonts.ts`:

```ts
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";

export const display = Instrument_Serif({
    weight: ["400"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-display",
});
export const body = Geist({ subsets: ["latin"], variable: "--font-body" });
export const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});
```

In `globals.css`:

```css
.font-display {
    font-family: var(--font-display), serif;
}
.font-body {
    font-family: var(--font-body), system-ui, sans-serif;
}
.font-mono {
    font-family: var(--font-mono), monospace;
}
```

## Layout conventions

- **Page max width**: `max-w-[1400px] mx-auto`
- **Section padding**: `px-6 lg:px-12`, vertical `py-24 lg:py-32`
- **Section dividers**: `border-t` with `border-color: var(--hair)` between sections
- **Editorial grid**: 12-column grid (`lg:grid-cols-12`). Section labels live in columns 1–3, content lives in columns 5–12. Maintain this asymmetry — it is the page's visual signature.
- **Eyebrow pattern**: every major section opens with a mono label like `01 — Premise`, all caps, letter-spacing `0.22em`, color `var(--muted)`.

## Component patterns

- **Server Components by default.** Mark a file `"use client"` only when it actually needs state, effects, or browser APIs (the marquee animation does not — it's CSS).
- **No prop drilling.** Section components read from `lib/data/*` directly.
- **Variants via discriminated unions**, not boolean prop soup.
- **Class composition**: prefer Tailwind utilities. For dynamic styles tied to tokens, use inline `style` with CSS variables — that's intentional, not a code smell.

## Accessibility minimums

- Every interactive element has a focus ring (visible, accent-colored).
- Color contrast meets WCAG AA against `var(--bg)`. Body text on background must hit 7:1; the `--muted` token is for secondary text only and must not be used for primary content.
- Decorative SVGs (grain, ornaments) get `aria-hidden="true"`.
- Heading hierarchy is strict: one `h1` per page, sections use `h2`, member cards use `h3`.
- Marquee animation respects `prefers-reduced-motion`.

## Member data

Source of truth: `lib/data/members.ts`. Shape:

```ts
export type Member = {
    slug: string; // url-safe, e.g. "brhane-giday"
    index: string; // "01" through "06"
    name: string;
    tags: string[]; // 3–5 short capabilities
    bioShort: string; // 1–2 sentences for the card
    bioLong: string; // paragraph(s) for the individual page
    place: string; // "Kigali · Axum"
    links?: {
        linkedin?: string;
        github?: string;
        site?: string;
        email?: string;
    };
};
```

Order in the file is the order on the site. Don't sort alphabetically.

## What not to do

- Don't add a UI library (shadcn, mantine, chakra, etc.).
- Don't add an animation library — CSS animations and `@keyframes` are sufficient.
- Don't introduce purple, indigo, blue, or cool grays anywhere.
- Don't use Inter, Roboto, Arial, or system-ui as a display font.
- Don't use generic stock photography. Member portraits, when added, must be shot in a consistent style or commissioned as illustrations.
- Don't use emoji in headings or body copy.
- Don't write marketing-speak ("revolutionize," "synergy," "leverage," "cutting-edge"). The voice is plain, specific, and slightly understated.
- Don't add analytics that send PII. If analytics is needed, use Plausible or Vercel Analytics.

## Voice & copy

Short sentences. Concrete nouns. Specific over general. Confident without hyperbole. When you write copy, the test is: would this sentence appear in _The New Yorker_ or in a Series A pitch deck? Aim for the former.

## Pull request / commit conventions

- Conventional commits: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `style:`.
- One concern per commit.
- PR descriptions explain _why_, not _what_. The diff already shows what.
- Before merging: `pnpm lint && pnpm typecheck && pnpm build` must pass.

## When in doubt

Open `reference/prototype.jsx`. It is the canonical visual reference. If a design question can be answered by looking at the prototype, that answer wins over your own intuition.
