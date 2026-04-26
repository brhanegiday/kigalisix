# CLAUDE.md

The full project context lives in **[AGENTS.md](./AGENTS.md)**. Read that first — it is the source of truth for stack, design tokens, conventions, and constraints.

This file contains only Claude-specific notes that don't belong in the cross-tool spec.

---

## Working with this codebase

When you start a task:

1. Read `AGENTS.md` end to end if you haven't this session.
2. Skim `reference/prototype.jsx` — it is the visual spec. The production code should reproduce its aesthetic, not depart from it.
3. Look at `lib/data/members.ts` to understand the data shape before touching any component that renders members.

When you finish a task:

1. Run `pnpm lint && pnpm typecheck` (or `npm run` equivalents). Fix anything that fails.
2. Run `pnpm build` if you've touched routing, layouts, or anything that affects the production bundle.
3. Summarize what changed and what didn't, in 3–5 bullets. Flag anything you skipped or stubbed.

## Default behaviors

- **Edit, don't recreate.** When changing a component, edit the existing file. Don't write a parallel "v2" file and leave the old one behind.
- **Small commits.** If a task touches more than ~150 lines across more than ~4 files, stop and ask whether to split.
- **Explain trade-offs, not steps.** I can read the diff for steps. Tell me what you considered and rejected.
- **No premature abstraction.** Two similar components are fine. Extract a shared component on the third occurrence, not the second.

## When to ask vs. when to decide

Decide on your own:
- File names, internal function names, prop names
- CSS animation timing and easing within reason
- Whether something is a Server Component or Client Component (use the rules in `AGENTS.md`)
- Minor copy tweaks (typos, punctuation)

Stop and ask:
- Anything that adds a new dependency
- Anything that changes a design token
- Any change to the member data shape or the URL structure
- Any new top-level route or folder
- Any deviation from the prototype's visual language

## Tone in commit messages and PR descriptions

Match the voice of the site: plain, specific, slightly understated. No exclamation marks, no emoji, no "✨ feat:". Conventional commit prefixes are fine.

Example:
> `feat: add individual member route at /six/[slug]`
>
> Reads from `lib/data/members.ts`. Falls back to `not-found` for unknown slugs. Reuses the `SectionLabel` and `TagList` primitives from the homepage rather than introducing new ones.

Not:
> `✨ Add awesome member pages! 🚀`