# FilmBar

A web application for browsing films with filtering, search, trailers, and actor information.

## Tech Stack

- **React 18** — component-based UI
- **TypeScript** — static typing
- **Redux Toolkit** — state management with dynamic module loading
- **React Router DOM v6** — client-side routing with lazy-loaded pages
- **SCSS Modules** — scoped component styles
- **Service Workers (Workbox)** — offline caching and performance
- **react-slick** — carousels and sliders
- **json-server** — local mock API

## Features

- Browse films by genre and country with a filter panel
- Search modal with instant results
- Film detail page with trailer player, actors slider, sequels/prequels
- Skeleton loaders for all async content
- Error boundary and 404 page
- CI/CD via GitHub Actions (lint + build on every push)

## Getting Started

```bash
# Install dependencies
npm install

# Start the mock API server (port 5001)
npm run dev:server

# Start the development server
npm start
```

## Scripts

| Command | Description |
|---|---|
| `npm start` | Development server |
| `npm run build` | Production build |
| `npm run dev:server` | Mock API via json-server |
| `npm run lint:ts` | Lint TypeScript files |
| `npm run lint:ts:fix` | Lint and auto-fix TypeScript |
| `npm run lint:scss` | Lint SCSS files |
| `npm run lint:scss:fix` | Lint and auto-fix SCSS |

## Project Structure

```
src/
├── components/     # Feature components (sliders, filters, player, etc.)
├── pages/          # Route pages (lazy-loaded via .async.tsx)
├── shared/         # Reusable UI (Button, Modal, Loader, Skeleton, etc.)
├── store/          # Redux store and slices
├── hooks/          # Custom hooks
└── assets/         # Images (genres, countries, logo)
```

## License

MIT
