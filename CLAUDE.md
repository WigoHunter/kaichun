# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint with Next.js + TypeScript rules
```

## Architecture Overview

This is a bilingual (English/Chinese) personal website built with Next.js 15 App Router, showcasing both software engineering work and creative writing.

### Key Architectural Patterns

**Internationalized Routing**: Uses next-intl with `/app/[locale]/` structure where `locale` is either `en` or `zh`. All pages must support both languages.

**Static Data Management**: Content is managed through TypeScript files in `/data/`:
- `posts.tsx` - Newsletter/blog posts (external Substack links)
- `books.tsx` - Reading list with ratings and reviews
- `novels.tsx` - Creative writing projects
- `metadata.tsx` - SEO metadata for all pages

**Component Structure**: 
- `/components/` contains reusable UI components
- Uses Headless UI + Heroicons for interactive elements
- Tailwind CSS for styling with mobile-first approach

### Internationalization Implementation

- Translation messages in `/messages/en.json` and `/messages/zh.json`
- Page routing: `/en/path` and `/zh/path` 
- Use `useTranslations()` hook for component translations
- Metadata must be localized for SEO

### Content Management Workflow

When adding new content:
1. **Posts**: Add to `data/posts.tsx` with external Substack URLs
2. **Books**: Add to `data/books.tsx` with ratings and thoughts
3. **Novels**: Update `data/novels.tsx` and create corresponding pages
4. **Translations**: Update both `messages/en.json` and `messages/zh.json`
5. **SEO**: Update `data/metadata.tsx` for new pages

### SEO Architecture

- JSON-LD structured data for articles and personal profile
- Comprehensive Open Graph and Twitter Card metadata
- Sitemap generation for both locales
- Google Analytics and Vercel Analytics integration

## Technology Stack

- **Next.js 15** with App Router and React 19
- **TypeScript** with strict configuration
- **Tailwind CSS 4** for styling
- **next-intl** for internationalization
- **Headless UI** for accessible components
- **Vercel** for deployment and analytics