# Dubai Mall Sales Deck

An interactive, browser-based sales presentation for Dubai Mall - the world's largest shopping and entertainment destination.

## Overview

This project transforms the traditional fragmented sales process into a cinematic, self-contained web experience that drives leasing, sponsorship, and event bookings.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Smooth Scrolling**: Lenis
- **UI Components**: Custom components with React

## Features

### Phase 1 - Core Interactive Overview
- Cinematic hero section with video background
- Data-driven statistics and metrics
- Retail, luxury, dining, and entertainment showcases
- Event hosting capabilities
- Responsive design with luxury brand aesthetics

### Phase 2 - Expandable Architecture
- **Venues Module**: Detailed venue specifications (Performing Arts Center, Convention Hub, Fashion Runway)
- **Leasing Module**: Segmented paths for Luxury, Mid-Tier, F&B, and Pop-Up retailers
- **Sponsorship Module**: Partnership tiers with audience data and activation examples

## Design Decisions

1. **Luxury Brand Inspiration**: Minimal chrome, maximum impact inspired by Apple, Hermès, Tesla
2. **Video-First Storytelling**: Hero video and scroll-triggered visuals as primary narrative
3. **Non-Linear Navigation**: Navbar with smooth scroll to any section
4. **Modular Architecture**: Components designed for easy expansion without rewrites
5. **Performance Optimized**: Lazy loading, optimized assets, smooth animations

## AI Integration

- **Asset Generation**: Supplemented limited real assets with AI-generated imagery from Unsplash
- **Component Structure**: AI-assisted architecture planning for modular expansion
- **Content Strategy**: AI-guided copywriting for compelling business narratives

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the sales deck.

## Project Structure

```
app/
├── components/
│   ├── animations/     # Reveal, transition animations
│   ├── layout/         # Navbar, loader, scroll components
│   ├── sections/       # Page sections (Hero, Retail, Events, etc.)
│   └── ui/             # Reusable components
├── globals.css
└── layout.tsx
```

## Development

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Deployment

Deploy to Vercel, Netlify, or GitHub Pages. The app is statically exportable.

## License

Private - Dubai Mall Sales Deck