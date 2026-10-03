# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
defines a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `sobre.tsx` | `/sobre` |
| `projetos.index.tsx` | `/projetos` |
| `projetos.$slug.tsx` | `/projetos/:slug` |
| `en.index.tsx` | `/en` |
| `en.about.tsx` | `/en/about` |
| `en.projects.index.tsx` | `/en/projects` |
| `en.projects.$slug.tsx` | `/en/projects/:slug` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic — bare `$`, no curly braces) |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment) |
| `files/$.tsx` | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx` | layout route (renders children via `<Outlet />`) |
| `__root.tsx` | app shell — wraps every page; preserve `<Outlet />` |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.

## Localização

As rotas `en.*` são wrappers finos que reutilizam as páginas compartilhadas em português; não duplique componentes de UI. A equivalência de URLs fica em `src/lib/i18n.tsx`.

`routeTree.gen.ts` continua sendo um artefato do TanStack Router e deve ser regenerado pelo plugin em `dev`/`build` quando as dependências estiverem instaladas.
