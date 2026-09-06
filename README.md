# Trello Clone — Frontend

npm-workspaces monorepo: 3 apps + 1 shared UI package. React 18 (Vite) for the user/admin apps, Next.js 14 for the marketing landing site.

> Run alongside `Trello-Clone-Backend` and `Trello-Clone-Infra` as sibling repos.

## Layout

```
apps/
  user/      end-user Kanban app (React 18 + Vite SPA)
  admin/     platform-admin console (React 18 + Vite SPA)
  landing/   public marketing site (Next.js 14, App Router, SSR)
packages/
  ui/        shared design tokens, theming, AuthProvider, API client factory, permission hooks, UI kit
```

`apps/user` and `apps/admin` alias `@trello/ui` directly to `packages/ui/src` (source, not a build artifact).

## Quick start

```bash
npm install                 # installs all workspaces
npm run dev:user            # http://localhost:5173, proxies /api -> http://localhost:4000
npm run dev:admin           # separate Vite dev server
npm run dev:landing         # http://localhost:3000
```

Requires the backend API running (`Trello-Clone-Backend`, default `http://localhost:4000`) for anything beyond static pages.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev:user` / `dev:admin` / `dev:landing` | run one app's dev server |
| `npm run build` | build all three apps in sequence |

## Stack

React 18 · React Router 6 · `@tanstack/react-query` (server state, no Redux/Zustand) · Axios (`createApi()` factory with auto-refresh-on-401) · `socket.io-client` · `@dnd-kit` (drag & drop) · CSS custom properties for theming (no Tailwind, no CSS-in-JS).

## Auth

Access token kept **in memory only** (never `localStorage`), attached via an axios request interceptor. Refresh token is an httpOnly cookie, invisible to JS. `AuthProvider`/`useAuth` and `usePermission` come from `@trello/ui`; FE permission checks are UX-only — every mutation is re-checked by the backend.

## Realtime

`useBoardSocket(boardId)` joins the `board:<id>` room and invalidates the relevant React Query cache keys on `card:*`/`list:*`/`comment:*`/`attachment:*` events, keeping multiple open boards in sync live.

## Testing

No automated test suite yet.
