# Project: CafeHero ☕️

> **Source of Truth for Antigravity AI Agent**
> This document defines the architectural standards, design philosophy, and technical workflows for the CafeHero project. It must be consulted before every major implementation.
> **UPDATE RULE**: This file MUST be updated at the end of every task or significant architectural change to remain the "Source of Truth".

## 1. Core Vision & Aesthetic
**Mission**: Create a high-end, "Architectural Minimalist" digital presence for elite cafe establishments.
- **Tone**: Sophisticated, structural, and cinematic.
- **Visual Pillars**:
    - **Whitespace as Luxury**: Generous use of empty space to create a "gallery" feel.
    - **Typography as Architecture**: High-contrast Serifs for headlines; geometric Sans-serifs for utility.
    - **Grid Structure**: Subtle 1px lines and asymmetrical layouts inspired by premium design agencies.

## 2. Technical Stack & Standards
### Core Stack
- **Framework**: Next.js (App Router) + React
- **Design System**: shadcn/ui (Radix Primitives)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (useSpring, useMotionValue) + Centralized `src/lib/transitions.ts`
- **Icons**: Lucide React
- **Typography**: High-contrast Serif (Cormorant Garamond style) + Geometric Sans

### Coding Standards
- **Tailwind v4**: Utilize CSS-first configuration and modern utility patterns.
- **Component Composition**: Leverage shadcn primitives to maintain design system integrity.
- **Agency Motion**: Implement buttery-smooth mouse parallax and staggered entry animations using centralized constants in `src/lib/transitions.ts`.
- **Data Management**: Prefer typed structures in `src/data/` over hardcoded component content.
- **Asset Strategy**: Use single, high-fidelity cinematic images via `next/image` to optimize LCP.

## 3. Workflows & Commands
### Development
- `npm run dev`: Start local development server.
- `npm run build`: Production build.
- `npm run start`: Start production server.

### AI Agent Skillsets
- **frontend-design**: Creative direction for modern layout patterns.
- **shadcn**: Component-driven development via the shadcn registry.
- **framer-motion**: Expert-level motion orchestration.
- **visual-emotion-engineer**: Aesthetic tuning for sensory engagement.

## 4. Design Tokens (Moody Luxury)
| Property | Value | Note |
| :--- | :--- | :--- |
| **Deepest Navy** | `#1A2331` | Primary background, shadows, and base layer |
| **Rich Espresso** | `#3D2C22` | Cards, secondary containers, and dividers |
| **Polished Brass** | `#C49A5F` | Accents, glow auras, icons, and CTA borders |
| **Creamy Vanilla** | `#FDF9F3` | Primary typography and highly readable text |
| **Dark Charcoal** | `#121212` | Technical detail bases and deepest anchor shadows |

## 5. Directory Structure & Assets
- `src/data/`: Centralized data management.
    - `menu.ts`: Typed menu items and categories.
- `src/lib/`: Core utility and configuration.
    - `transitions.ts`: Shared Framer Motion variant and transition constants.
    - `utils.ts`: Standard Tailwind merge and utility functions.
- `src/components/`: Modular UI components.
    - `Navbar.tsx`: Minimalist floating navigation.
    - `CafeHero.tsx`: Architectural hero section featuring dynamic "Floating Brass Blob" lighting overlays.
    - `StorySection.tsx`: Cinematic scroll-expansion storytelling experience.
    - `MenuGrid.tsx`: Bestsellers grid featuring high-fidelity 3D tracker tilt physics and brass glow auras.
    - `LocationsSection.tsx`: Controller for interactive 3D map rendering and location state.
    - `BookingSection.tsx`: Table reservation system with rotating brass-to-vanilla gradient borders.
    - `TastefulFooter.tsx`: Sophisticated asymmetrical footer with standardized vertical rhythm.
- `src/components/ui/`: Complex interactive primitives.
    - `scroll-expansion-hero.tsx`: Scroll-sensitive media expansion component with Framer Motion `useScroll`.
    - `expand-map.tsx`: Interactive 3D location map with mouse-tracking tilt and click-to-expand functionality.
- `src/app/`: Core application logic.
    - `page.tsx`: Main landing page integrating all sections into a seamless single-page experience.
    - `globals.css`: Contains CSS-first design tokens and custom 3D utilities (`.perspective-1000`, `.canvas-grid`, `.tracker`).
- `public/`: High-performance WebP assets.
    - `hero-cinematic.webp`: Single high-impact hero asset.

## 6. Strategic Constraints
- **MINIMALISM IS KEY**: If a section feels crowded, simplify.
- **AGENCY WOW FACTOR**: Every page load must feature a choreographed animation entry.
- **DATA-DRIVEN**: Abstract content into `src/data` to maintain a clean, production-grade codebase.
- **WHITESPACE IS A CHOICE**: Do not fill every gap; let the photography and typography breathe.
- **NO PLACEHOLDERS**: Generate high-fidelity assets using `generate_image`.
- **NATIVE SCROLLING**: Prefer native scroll tracking (e.g., Framer Motion `useScroll` with `position: sticky`) over aggressive JavaScript event hijacking for scroll-linked animations.

---
*Last Verified: 2026-05-14*
