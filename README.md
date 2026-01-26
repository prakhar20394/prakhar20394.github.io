# Personal Website

React + Vite single-page site that highlights projects, background, and contact info with smooth in-page navigation and a dark/light theme toggle. Animated accents (cursor trail, intro motion) keep the experience playful while remaining focused on content.

## Features
- Dark/light theme persisted via local storage with system preference fallbacks
- Smooth scroll and URL section syncing powered by Intersection Observer
- Modular sections for hero, about, background, projects, and contact
- Styled-components theming with global design tokens
- Vercel-ready build and preview flow

## Tech Stack
- React 19, Vite 7
- styled-components for styling
- ESLint 9 with React Hooks/Refresh plugins

## Getting Started
1) Install dependencies
```bash
npm install
```
2) Run the dev server
```bash
npm run dev
```
3) Create a production build
```bash
npm run build
```
4) Preview the production build locally
```bash
npm run preview
```
5) Lint the project
```bash
npm run lint
```

## Project Layout
```text
src/
	App.jsx              # Shell wiring theme toggle, section tracking
	assets/              # Images and media
	components/          # Shared UI elements (nav, footer, modals, cursor trail)
	sections/            # Page sections (hero, about, background, projects, contact)
	styles/              # Global styles and animation helpers
public/                # Static assets served as-is
```

Key code paths:
- Theme toggle and section URL syncing live in [src/App.jsx](src/App.jsx#L1-L76)
- Global tokens and resets are defined in [src/styles/GlobalStyle.jsx](src/styles/GlobalStyle.jsx)
- Section content components reside under [src/sections](src/sections)

## Customization
- Swap copy, links, and media inside the relevant section components in [src/sections](src/sections) and shared pieces in [src/components](src/components)
- Add or adjust brand assets under [public](public) or [src/assets](src/assets)
- Update nav items and theme toggle wiring in [src/components/Nav.jsx](src/components/Nav.jsx)

## Deployment
- Build output in `dist/` is optimized for static hosting
- Includes [vercel.json](vercel.json) for quick Vercel deployment; run `npm run build` then deploy the `dist` folder
