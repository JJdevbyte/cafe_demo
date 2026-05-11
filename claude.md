# Project: CafeHero ☕️

> **Source of Truth for Antigravity AI Agent**
> This document defines the architectural standards, design philosophy, and technical workflows for the CafeHero project. It must be consulted before every major implementation.
> **UPDATE RULE**: This file MUST be updated at the end of every task or significant architectural change to remain the "Source of Truth".

## 1. Core Vision & Aesthetic
**Mission**: Create a premium, "Luxury Organic" digital presence for high-end cafe establishments.
- **Tone**: Sophisticated, editorial, and tactile.
- **Target Persona**: Discerning customers who value craftsmanship and atmosphere.
- **Visual Pillars**:
    - **Depth**: Extensive use of Glassmorphism (`backdrop-filter: blur()`).
    - **Typography**: Editorial contrast between high-end Serifs and modern Sans-serifs.
    - **Color Palette**: Deep, moody, and natural (Organic tones).

## 2. Technical Stack & Standards
### Core Stack
- **Framework**: Next.js (App Router) + React
- **Styling**: Tailwind CSS v4 / CSS Modules
- **Icons**: Lucide React
- **Typography**: Google Fonts (Playfair Display, Montserrat)

### Coding Standards
- **Tailwind First**: Use Tailwind utility classes and theme tokens (`text-espresso`, `bg-sage`).
- **Component Integrity**: Keep complex custom styles (like 3D trackers) scoped in `.module.css`.
- **Performance**: Optimize all background assets (WebP) via `next/image` where applicable, or `public/` absolute paths.
- **Accessibility**: Ensure high contrast for glass elements and semantic HTML5.

## 3. Workflows & Commands
### Development
- `npm run dev`: Start local development server.
- `npm run build`: Production build.
- `npm run start`: Start production server.

### AI Agent Skillsets
- **skill-audit**: **MANDATORY** security review before installing any third-party skill.
- **find-skills**: Used to discover best-in-class tools for specific features.
- **review-claudemd**: Periodic review of conversation logs to harden this document.

### Skill Security Policy
- **Zero Trust**: No third-party skill is installed without a 6-phase audit.
- **Manual Verification**: Verify GitHub reputation and install counts before recommendation.
- **Global Deployment**: Skills are installed globally (`-g`) to maintain consistent capabilities across projects.

## 4. Design Tokens (Current)
| Property | Value | Note |
| :--- | :--- | :--- |
| **Primary Color** | `#1a1a1a` | Espresso (Deep moody black) |
| **Secondary Color** | `#FAF9F6` | Rich Cream (Warm organic base) |
| **Accent Color** | `#4a5d4e` | Sage/Olive (Natural botanical) |
| **Glass Background** | `rgba(255, 255, 255, 0.03)` | Ultra-thin translucency |
| **Glass Blur** | `25px` | Deep organic depth |
| **Primary Serif** | `Playfair Display` | High-craft editorial typography |
| **Primary Sans** | `Montserrat` | Clean, modern UI typography |

## 5. Directory Structure & Assets
- `src/components/`: Modular UI components.
    - `Navbar.tsx`: Floating glassmorphism header.
    - `CafeHero.tsx`: Main editorial hero section (Stop-motion canvas engine).
    - `MenuGrid.tsx`: Bestsellers grid with botanical decorations, 3D hover tracking, and Click-to-Focus state.
    - `BookingSection.tsx`: Table reservation system with background layer.
- `public/`: High-performance WebP assets (served at root `/`).
    - `cafe-bg.webp`: Main hero background interior.
    - `botanical-branch.webp`: Fine-line coffee branch illustration.
    - `botanical-beans.webp`: Fine-line coffee bean illustrations.
    - `menu-*.webp`: High-fidelity editorial food/drink photography.

## 6. Strategic Constraints
- **NO PLACEHOLDERS**: Always generate high-fidelity assets using `generate_image`.
- **AESTHETICS ARE CRITICAL**: If a component looks "basic," it is a failure. Always push for "Premium" design details.
- **PERFORMANCE FIRST**: Use WebP format served from `public` folder to reduce bundle size and LCP.
- **INTERACTIVE PATTERNS**:
    - **3D Hover**: Use the 25-cell CSS tracker pattern for tilting cards without JS.
    - **Focus-Blur**: Use React state to apply `blurred` and `focused` classes to grid layouts for spotlighting.
- **DOCUMENTATION FIRST**: All major architectural decisions must be recorded here.

---
*Last Verified: 2026-05-10*
