# Kigali Six

Portfolio site for a six-person collective of engineers, researchers, and product builders from Carnegie Mellon University Africa. Editorial in tone — closer to a literary magazine masthead than a startup template.

Stack: Next.js 16 (App Router), Tailwind CSS v4, `next/font/google`. No state management library, no UI kit, no animation library.

---

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # production build
```

---

## Design tokens

All tokens live in `app/globals.css` as CSS custom properties on `:root`:

| Token      | Value     | Use                            |
|------------|-----------|--------------------------------|
| `--bg`     | `#14130F` | Page background                |
| `--fg`     | `#EFEAE0` | Body text, headings            |
| `--muted`  | `#8C8478` | Secondary text, nav, labels    |
| `--accent` | `#C8553D` | Terracotta — use sparingly     |
| `--hair`   | `#2A2722` | Hairlines, dividers, grids     |

Three typefaces, configured in `lib/fonts.ts` and loaded via `next/font/google`:

- **Instrument Serif** — display headings (`--font-display`, `.font-display`)
- **Geist** — body text (`--font-body`, `.font-body`)
- **JetBrains Mono** — eyebrows, labels, nav (`--font-mono`, `.font-mono`)

Do not introduce additional colors or typefaces without updating `app/globals.css` and `AGENTS.md`.

---

## Members

The source of truth is `lib/data/members.ts`. Each entry is a `Member` object:

```ts
{
  slug: string;     // URL segment: /six/[slug]
  index: string;    // "01" through "06"
  name: string;
  tags: string[];   // 3–5 short capabilities shown on the card
  bioShort: string; // 1–2 sentences — used on the homepage card
  bioLong: string;  // Two paragraphs separated by \n\n — used on the member page
  place: string;
  links?: { linkedin?: string; github?: string; site?: string; email?: string };
}
```

Order in the file is the order on the site. To add or edit a member, update `lib/data/members.ts`. The member page at `app/six/[slug]/page.tsx` reads from the same array — no other files need changing.

The visual reference for all components is `reference/prototype.jsx`. It is not imported anywhere; treat it as a read-only spec.

---

## Deploying

The site pre-renders to static HTML. Deploy to Vercel with no configuration changes required.

1. Push to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new) and select the Next.js preset.
3. After the first deploy, copy the production URL and update three places:
   - `siteUrl` in `app/layout.tsx`
   - `base` in `app/sitemap.ts`
   - `sitemap` URL in `app/robots.ts`
4. Redeploy (or let the next push trigger it).

---

## Open issues

Search the codebase for `// TODO` to find items marked for review before launch — primarily member links, bio verification, and the production domain.
