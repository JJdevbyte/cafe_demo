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
- **Animation**: Framer Motion (useSpring, useMotionValue)
- **Icons**: Lucide React
- **Typography**: High-contrast Serif (Cormorant Garamond style) + Geometric Sans

### Coding Standards
- **Tailwind v4**: Utilize CSS-first configuration and modern utility patterns.
- **Component Composition**: Leverage shadcn primitives to maintain design system integrity.
- **Agency Motion**: Implement buttery-smooth mouse parallax and staggered entry animations (easing: `[0.33, 1, 0.68, 1]`).
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

## 4. Design Tokens (Current)
| Property | Value | Note |
| :--- | :--- | :--- |
| **Primary Color** | `#1a1a1a` | Espresso (Deep moody black) |
| **Secondary Color** | `#FAF9F6` | Rich Cream (Warm organic base) |
| **Accent Color** | `#4a5d4e` | Sage/Olive (Natural botanical) |
| **Heading Serif** | `Cormorant Garamond` | High-contrast, elegant Serif |
| **Utility Sans** | `Geist / Inter` | Geometric, clean UI typography |
| **Grid Lines** | `rgba(26, 26, 26, 0.05)` | Subtle structural markers |

## 5. Directory Structure & Assets
- `src/components/`: Modular UI components.
    - `Navbar.tsx`: Minimalist floating navigation.
    - `CafeHero.tsx`: Architectural hero section with mouse parallax and cinematic entry.
    - `MenuGrid.tsx`: Bestsellers grid with shadcn Badges and 3D hover tracking.
    - `BookingSection.tsx`: Table reservation system using shadcn form primitives.
- `public/`: High-performance WebP assets.
    - `hero-cinematic.webp`: Single high-impact hero asset.
    - `botanical-*.webp`: Fine-line coffee illustrations used as subtle background textures.

## 6. Strategic Constraints
- **MINIMALISM IS KEY**: If a section feels crowded, simplify.
- **AGENCY WOW FACTOR**: Every page load must feature a choreographed animation entry.
- **WHITESPACE IS A CHOICE**: Do not fill every gap; let the photography and typography breathe.
- **NO PLACEHOLDERS**: Generate high-fidelity assets using `generate_image`.

---
*Last Verified: 2026-05-11*
