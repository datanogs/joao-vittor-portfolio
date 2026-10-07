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

Conteúdo profissional em `src/content/`; traduções em `src/content/ui.ts`. Não inventar resultados, empregadores, competências ou métricas. SQL/Python são apresentados como estudos. Dados públicos de Frota Leve são fictícios. Os cases explicam decisões e uso analítico. Inventários e limitações de inspeção ficam em `docs/CASE_STUDY_REVIEW.md`; a interface mantém apenas ressalvas que alteram a interpretação. Consulte `docs/EDITORIAL_NARRATIVE.md` para editar essas duas camadas.

A fotografia oficial é `public/images/profile/portrait.webp`, referenciada por `profile.images.portrait`. Hero e Sobre compartilham o asset com enquadramento CSS.

Não versionar credenciais, `.env` com valores, `.vercel`, dependências, builds, PBIX ou bases privadas. Certificados e imagens em `public/` são os materiais públicos do portfólio.

Os relatórios em `docs/` registram revisões anteriores; instruções Cloudflare e resultados antigos são históricos e não comprovam o estado do deploy atual. Este README descreve a configuração Vercel vigente.


## Segurança e manutenção

A revisão está em [docs/SECURITY_REVIEW.md](docs/SECURITY_REVIEW.md). Execute `npm ci`, `npm run audit:security`, `npm run check` e `VITE_SITE_URL=https://joao-vittor-portfolio.vercel.app npm run build:release` antes de publicar alterações de dependências. Não utilize `npm audit fix --force` sem avaliar compatibilidade.

Os metadados de origem do template estão em `docs/tooling/project-origin.json`, apenas como documentação. A pasta `.lovable` foi retirada; isso não revoga conexões entre serviços. O wrapper `@lovable.dev/vite-tanstack-config` ainda participa do build e não deve ser renomeado como se fosse código próprio. O destino de publicação continua sendo Vercel.

Nunca publique credenciais em variáveis `VITE_*`: elas podem integrar o bundle público. Dados originais de trabalho, PBIX e planilhas privadas não devem entrar em `public/` nem no histórico Git.
