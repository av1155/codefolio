# AGENTS.md

Guide for coding agents operating in this repository.

## Project Snapshot
- Framework: Next.js 14 (App Router)
- Language: TypeScript (`strict: true`)
- Styling: Tailwind CSS + `src/app/globals.css`
- Package manager: pnpm (`packageManager` pinned)
- CI on `main`: install, lint, build

## Environment and Setup
1. Use Node.js 20.x.
2. Enable Corepack: `corepack enable pnpm`
3. Install deps: `pnpm install --frozen-lockfile`
4. Optional env var for contact form: `NEXT_PUBLIC_FORMSPREE_KEY`

## Build, Lint, Test Commands
Run commands from repository root.

### Core Commands
- Dev server: `pnpm dev`
- Build: `pnpm build`
- Start production server: `pnpm start`
- Lint full repo: `pnpm lint`
- Type-check (no emit): `pnpm exec tsc --noEmit`

### Tests (Current State)
No dedicated test runner is configured right now (`test` script is absent).

- Best repo-wide verification: `pnpm lint && pnpm build`
- CI parity: `pnpm install --frozen-lockfile && pnpm lint && pnpm build`

### Single-Test / Single-File Validation
Since there is no unit/integration test framework yet, use targeted lint/type checks as a single-test proxy.

- Lint one file:
  - `pnpm exec next lint --file src/app/page.tsx`
- Lint multiple files:
  - `pnpm exec next lint --file src/components/header.tsx --file src/components/footer.tsx`
- Type-check edited code paths:
  - `pnpm exec tsc --noEmit`

If a formal test runner is added later (Vitest/Jest/Playwright), update this file with native single-test commands.

## CI Expectations
Workflow: `.github/workflows/ci.yml`

1. `pnpm install --frozen-lockfile`
2. `pnpm lint`
3. `pnpm build`

Run this sequence locally before opening or merging PRs when possible.

## Important Paths
- App routes/pages: `src/app/**`
- Reusable components: `src/components/**`
- Static data/constants: `src/data/**`
- Global styles/tokens: `src/app/globals.css`
- Security headers/config: `next.config.mjs`

## Code Style Guidelines
Inferred from current code and config.

### TypeScript and Types
- Keep code strict-mode safe.
- Prefer explicit interfaces/types for props and structured objects.
- Use unions for constrained values (for example filter categories).
- Use optional properties (`?`) only when values are truly optional.
- Avoid `any`; use precise types or generics.
- Use `import type` for type-only imports when practical.

### React and Next.js
- Default to server components; add `"use client"` only when needed.
- Keep `page.tsx` files lean and delegate behavior to local client components.
- Use App Router conventions for metadata exports (`Metadata`, `Viewport`).
- Prefer `next/image` and `next/link` over raw tags for internal image/navigation flows.
- Keep hooks at top level in stable order.
- Keep state local; lift state only when multiple components need shared control.

### Imports and Module Paths
- Prefer alias imports from `@/*` for internal modules.
- Avoid deep relative paths when an alias is clearer.
- Keep imports grouped and readable.
- One logical import per line.

### Naming Conventions
- Components and exported types/interfaces: PascalCase.
- Variables, functions, and local constants: camelCase.
- Route segments/files: Next.js conventions (`app/<segment>/page.tsx`).
- Keep existing folder-level naming patterns; do not mass-rename without reason.

### Formatting and Readability
- Match repository style:
  - Semicolons.
  - Double quotes.
  - Trailing commas when valid.
  - 4-space indentation in TS/TSX files.
- Keep JSX multiline formatting readable and consistent.
- Prefer small focused components over oversized monoliths.
- Add comments only when logic is not obvious from code.

### Tailwind and Styling
- Prefer Tailwind utility classes for component styling.
- Keep visual style aligned with existing gradients and palette unless redesign is requested.
- Keep shared color tokens/variables in `globals.css` coherent.
- Avoid introducing a second styling system that conflicts with Tailwind/global CSS.

### Error Handling and Robustness
- Fail safely in UI flows with sensible defaults/fallbacks.
- Handle missing query/data lookups explicitly.
- Use `console.warn`/`console.error` sparingly and only for actionable diagnostics.
- Do not silently swallow errors.
- Validate boundaries around env-driven values and URL/query inputs.

### Accessibility Baselines
- Use semantic structure (`header`, `nav`, `main`, `footer`).
- Provide accessible labels (`aria-label`, `sr-only`) for interactive controls.
- Keep keyboard interactions intact for menus/modals.
- Preserve responsive behavior on mobile and desktop.

## Data and Content Patterns
- Keep static catalog-like content centralized in `src/data/*`.
- Preserve object schema consistency with existing interfaces.
- Keep ordering stable when appending to long arrays.

## Security and Configuration Notes
- Security headers are defined in `next.config.mjs`; do not weaken casually.
- Never commit secrets. `NEXT_PUBLIC_*` variables are public by design.
- Keep `poweredByHeader: false` unless a task explicitly requires changing it.

## Cursor and Copilot Rules
Checked and currently absent:

- `.cursor/rules/`
- `.cursorrules`
- `.github/copilot-instructions.md`

No repository-specific Cursor/Copilot instruction files exist right now.
If they are added, include and prioritize their rules in this document.

## Agent Workflow Recommendations
1. Read relevant files before editing and keep diffs focused.
2. Prefer targeted checks first, then run `pnpm lint && pnpm build`.
3. Follow existing architecture/patterns before introducing new abstractions.
4. Update this file whenever commands, tooling, or conventions change.
