# VEDA CARE - Wellness E-Commerce App

## Overview
VEDA CARE is a Traditional Chinese wellness product e-commerce site built with React + Express + tRPC.

## Architecture

### Frontend
- **React 19** with TypeScript
- **Vite** as the build tool and dev server
- **TailwindCSS v4** for styling
- **Wouter** for client-side routing
- **tRPC** + **TanStack Query** for data fetching
- **Radix UI** components with shadcn/ui

### Backend
- **Express.js** server (TypeScript via `tsx`)
- **tRPC** for type-safe API layer
- **Drizzle ORM** with **MySQL** dialect (mysql2 driver)
- **Jose** for JWT/cookie-based auth
- OAuth integration support

### Database
- Uses MySQL (DATABASE_URL environment variable)
- Schema defined in `drizzle/schema.ts`
- Migrations in `drizzle/` directory
- DB gracefully degrades when DATABASE_URL is not set

## Project Structure
```
client/          - React frontend
  src/
    pages/       - Route pages (Home, Shop, ProductDetail, Cart, About, Policies)
    components/  - Shared components
    contexts/    - React contexts (Theme, Cart)
server/          - Express + tRPC backend
  _core/         - Core infrastructure (auth, vite, context, env, etc.)
  routers.ts     - API routes
  db.ts          - Database queries
  storage.ts     - Storage helpers
shared/          - Shared types/constants between client & server
drizzle/         - Database schema and migrations
```

## Key Scripts
- `pnpm run dev` - Start development server (frontend + backend on port 5000)
- `pnpm run build` - Build for production
- `pnpm run start` - Run production build
- `pnpm run db:push` - Generate and run DB migrations

## Running the App
The workflow `Start application` runs `PORT=5000 pnpm run dev` on port 5000.

In dev mode, the Express server serves the Vite frontend via middleware (no separate frontend port needed).

## Environment Variables
- `DATABASE_URL` - MySQL connection string (required for DB features)
- `JWT_SECRET` - Cookie signing secret
- `VITE_APP_ID` - App identifier
- `OAUTH_SERVER_URL` - OAuth server URL
- `OWNER_OPEN_ID` - OpenID of the admin user
- `BUILT_IN_FORGE_API_URL` / `BUILT_IN_FORGE_API_KEY` - LLM API credentials

## Deployment
Configured for autoscale deployment:
- Build: `pnpm run build`
- Run: `node dist/index.js`
