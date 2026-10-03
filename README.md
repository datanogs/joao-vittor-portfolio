# João Vittor Nogueira — Portfólio Dados / BI

Portfólio profissional PT/EN em React, TypeScript, Vite, TanStack Start/Router e Nitro, com SSR, temas Dark/Light e conteúdo centralizado em `src/content/`.

Repositório: https://github.com/datanogs/joao-vittor-portfolio
Branch de produção: `main`.

Site: https://joao-vittor-portfolio.vercel.app
Projeto Vercel: `joao-vittor-portfolio`, conta `eujoaovittornogueira-9878` (Hobby).

## Desenvolvimento e validação

Use Node.js 24.x e npm. O lockfile de referência é `package-lock.json`.

```bash
npm ci
npm run check
npm run build
npm run preview
```

`check` valida referências de conteúdo, TypeScript e lint. `preview` serve o build SSR local. Os avisos de Fast Refresh não impedem o build.

## Publicação na Vercel

O preset Nitro `vercel` gera `.vercel/output`, incluindo `functions/__server.func` e `static`. Não publique apenas `public`, não selecione `dist` e não adicione rewrite para `index.html`.

Configuração esperada:

- Repositório `datanogs/joao-vittor-portfolio`, branch `main`, raiz do repositório.
- Node.js `24.x`, instalação `npm ci`, build `npm run build:release`.
- Framework Other; Output Directory sem override (Build Output API).
- `VITE_SITE_URL` com a origem HTTPS definitiva atribuída pela Vercel, sem barra final.

A URL é incorporada durante o build aos canonicals, alternates PT/EN, Open Graph, robots e sitemap. Após alterar a variável, faça novo deploy. Previews devem manter a origem canônica de produção.

Para um build de release local, configure `VITE_SITE_URL` em `.env` usando `.env.example` como referência e execute `npm run build:release`. Um build comum sem a variável permite validação local, mas não gera canonical nem sitemap.

A integração GitHub → Vercel está conectada. Pushes em `main` geram deploys de produção automaticamente. Confira o commit associado e o estado Ready no painel; valide a URL em uma sessão sem login.

## Checklist após deploy

Teste Home PT/EN, Sobre, Projetos e quatro cases, Formação, DataNogs e Contato. Confira acesso direto e refresh em rotas internas, resposta 404, menu mobile, idiomas, persistência de tema, filtros, links, screenshots e 14 PDFs. Inspecione console, recursos essenciais e ausência de overflow em desktop, tablet e mobile. Confira canonical, alternates, Open Graph, `robots.txt` e `sitemap.xml` na origem pública.

## Conteúdo e privacidade

Conteúdo profissional em `src/content/`; traduções em `src/content/ui.ts`. Não inventar resultados, empregadores, competências ou métricas. SQL/Python são apresentados como estudos. Dados públicos de Frota Leve são fictícios. Os limites técnicos dos PBIX e dashboards externos permanecem descritos nos cases.

A fotografia oficial é `public/images/profile/portrait.webp`, referenciada por `profile.images.portrait`. Hero e Sobre compartilham o asset com enquadramento CSS.

Não versionar credenciais, `.env` com valores, `.vercel`, dependências, builds, PBIX ou bases privadas. Certificados e imagens em `public/` são os materiais públicos do portfólio.

Os relatórios em `docs/` registram revisões anteriores; instruções Cloudflare e resultados antigos são históricos e não comprovam o estado do deploy atual. Este README descreve a configuração Vercel vigente.

