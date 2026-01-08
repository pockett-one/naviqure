# Technical Specifications (Tech Specs) - Naviqure.ai

## 1. Executive Summary
This document outlines the technical architecture, technology stack, and development standards for the **Naviqure.ai** website. The project aims to build a high-performance, visually engaging marketing website using modern web technologies, ensuring scalability for future integrations like Headless CMS and Analytics.

## 2. Technology Stack

### 2.1 Core Framework
- **Next.js 15+ (App Router)**: Utilizing React Server Components (RSC) for performance and SEO optimization.
- **Language**: TypeScript (Strict mode) for type safety and maintainability.

### 2.2 Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid and consistent styling.
- **Shadcn UI**: Reusable, accessible component primitives based on Radix UI.
- **Lucide React**: Icon set for consistent visual language.
- **Motion.dev (Framer Motion)**: For high-performance animations, page transitions, and diverse micro-interactions.

### 2.3 Deployment & Infrastructure
- **Platform**: **Vercel** (Optimized for Next.js).
- **CI/CD**: Automatic deployments via Vercel Git integration.
- **CDN**: Vercel Edge Network.

## 3. Architecture Overview

### 3.1 Directory Structure (App Router)
```
src/
├── app/
│   ├── layout.tsx       # Root layout (fonts, global providers)
│   ├── page.tsx         # Home page
│   ├── about/           # About Us route
│   ├── solutions/       # Solutions route
│   ├── resources/       # Blog/Resources route
│   └── contact/         # Contact route
├── components/
│   ├── ui/              # Shadcn primitives (Button, Card, etc.)
│   ├── layout/          # Header, Footer, HeroSection
│   ├── sections/        # Page-specific sections (e.g., KeyValues, Testimonials)
│   └── shared/          # Reusable logical components
├── lib/
│   ├── utils.ts         # CN helper and other utilities
│   └── constants.ts     # Global constants
├── styles/
│   └── globals.css      # Tailwind directives & global variables
└── public/              # Static assets (images, fonts)
```

### 3.2 Component Design
- **Atomic Design Principles**:
  - **Atoms**: Buttons, Inputs, Typography (Shadcn UI).
  - **Molecules**: Form groups, Cards, Nav Items.
  - **Organisms**: Header, Footer, Hero Section, Pricing Table.
  - **Templates**: Page layouts (Standard, Blog Post).
- **Client vs. Server Components**: 
  - Use Server Components by default for SEO and initial load performance.
  - Use Client Components (`"use client"`) only for interactive elements (Motion animations, form state, toggles).

## 4. Feature Specifications

### 4.1 UI/UX Implementation
- **Responsive Design**: Mobile-first approach using Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).
- **Theming**:
  - Primary: Light Blue (`#1890FF`), Dark Blue (`#0A1F44`).
  - Accent: Violet (`#6C5CE7`), Teal (`#1ABC9C`).
  - Font: Montserrat (Headings) / Open Sans or Inter (Body).
- **Animations**:
  - Scroll-triggered reveal effects using `Motion.dev`.
  - Hover states on cards and buttons.
  - Smooth transitions between routes.

### 4.2 Future Integrations (Phase 2)
The architecture must support these upcoming features without major refactoring:
- **Analytics**:
  - **Google Analytics 4 (GA4)** via `@next/third-parties`.
  - **PostHog** for product analytics and heatmaps.
- **Content Management (CMS)**:
  - Architecture decoupling: Fetch content via robust typed interfaces to swap CMS (Contentful/Sanity/Strapi) easily later.
- **Forms**:
  - Contact Form submission handling (initially Server Actions or API routes).
  - **Calendly Embedded**: React component wrapper for Calendly booking.
  
## 5. Deployment Strategy (Vercel)

### 5.1 Configuration
- **Repository Connection**: Git (GitHub/GitLab) connected to Vercel Project.
- **Environment Variables**:
  - `NEXT_PUBLIC_SITE_URL`
  - Future: CMS API Keys, GA Measurement ID.
- **Build Settings**:
  - Command: `next build`
  - Output Directory: `.next`

### 5.2 Vercel Configuration (`vercel.json`)
A `vercel.json` file will be included to configure headers (security, caching) and potential redirects.

## 6. Security & Performance
- **SEO**: Dynamic metadata generation using Next.js `generateMetadata`.
- **Performance**:
  - Image optimization with `next/image`.
  - Font optimization with `next/font`.
  - Lazy loading of heavy components (e.g., interactive maps or heavy motion graphs).
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation testing.
