# CLAUDE.md — Aalaya

## Project

Aalaya is a human-to-human emotional support platform. AI is safety infrastructure only. Never a companion, never a replacement for human connection. Every line of code serves that constraint.

## Developer

Nox. Data engineer, not a frontend/backend dev. Do not assume React/Next.js/Supabase knowledge. Flag non-obvious patterns briefly.

## Workflow

- Always ask before running any command, editing, deleting, or creating files.
- Show proposed changes as diffs before executing.
- Flag when new information conflicts with existing docs. Never silently overwrite.
- Only document decisions that were made. Never reference rejected alternatives.

## Project docs

Full design docs live in .claude/docs/ (gitignored, local only). Read them before making architectural decisions.

@.claude/docs/vision.md
@.claude/docs/ai-function.md
@.claude/docs/privacy-and-data.md
@.claude/docs/technical-implementation.md

## Git

Branch from dev. Never commit directly to main.
w/
## Code standards

- Server components by default. Client components only when necessary.
- TypeScript strict mode. No `any` types.
- All AI/API calls server-side only. Keys never exposed to client.
- RLS on every Supabase table. No exceptions.
- British English in all code comments, docs, and UI copy. No LLM prose.

## Red lines

These are hard constraints. Violating any of these contradicts the project's core philosophy.

- AI never participates in human conversations. Safety screening and content retrieval only.
- AI never generates advice, facilitates, mediates, or simulates human presence.
- AI never retains memory of users between sessions. Stateless.
- Haiku 4.5 only for all AI calls. Not Sonnet, not Opus.
- Crisis language is never blocked. Crisis always wins over moderation.
- No persistent emotional profiling. No ai_memory table.
- No end-to-end encryption. Moderation requires message visibility.
- Never monetised. No ads, no subscriptions, no data selling.

## Common gotchas

_This section grows via the self-updating protocol below._

## Self-updating protocol

When Claude discovers a reusable pattern, convention, or gotcha during a session, it proposes an update to this file.

**Process:**
1. Claude identifies something that would save time or prevent mistakes in future sessions.
2. Claude shows the exact proposed change as a diff.
3. Nox approves or rejects.
4. Only approved changes are written.

**Qualifies:** new conventions, stack gotchas, dependency decisions, naming patterns, testing patterns, deployment procedures.

**Does not qualify:** one-off fixes, temporary workarounds, single-file specifics.