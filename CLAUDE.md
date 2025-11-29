# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Planner Vidros is a Next.js 16 frontend application for a glass planning/scheduling business. It uses the App Router with React Server Components.

## Tech Stack

- **Framework:** Next.js 16.0.5 with App Router
- **React:** 19.2.0
- **Styling:** Tailwind CSS 4.x with PostCSS
- **Language:** TypeScript (strict mode)
- **Linting:** ESLint 9.x with Next.js and TypeScript presets

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Create production build
npm start        # Start production server (requires build first)
npm run lint     # Run ESLint
```

## Architecture

### Routing

Uses Next.js App Router (`app/` directory). Pages are server components by default.

### Styling

- Tailwind utility classes throughout
- CSS custom properties for theming in `app/globals.css`
- Dark mode via `prefers-color-scheme` media query
- Font variables: `--font-geist-sans`, `--font-geist-mono`

### Path Aliases

Import from root using `@/*` (e.g., `import { Component } from '@/components/Button'`)

## Key Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with metadata and fonts |
| `app/page.tsx` | Home page |
| `app/globals.css` | Global styles and Tailwind directives |
| `next.config.ts` | Next.js configuration |
| `tsconfig.json` | TypeScript configuration |
