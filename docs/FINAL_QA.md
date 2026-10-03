# Final QA — pré-publicação

Esta revisão trata o portfólio como material prestes a ser apresentado a recrutadores e gestores de Dados/BI. Nenhum conteúdo profissional foi inventado para preencher lacunas.

## Classificação

### P0 — crítico

Nenhum P0 confirmado por inspeção estática após as correções desta etapa.

> Limitação: o build/browser real continua dependente da instalação das dependências. Portanto, ausência de P0 confirmado não substitui executar `npm run check`, `npm run build` e QA manual antes do deploy.

### P1 — corrigidos

- **Primeira impressão:** o nome de João Vittor ganhou mais presença no Hero sem substituir a frase editorial aprovada.
- **Home/contato:** um e-mail real não é mais apresentado como “link pendente”; a Home conduz para a página de Contato, onde a cópia do endereço já é suportada.
- **Filtros de projetos:** a contagem de resultados agora é anunciada com `aria-live`.
- **Fallback crítico de SSR:** a página de erro fatal agora possui PT/EN, sem indexação, foco visível e alvos mínimos de toque.
- **Integridade de conteúdo:** `npm run validate` verifica assets de projetos, PDFs, fotos, unicidade de IDs/slugs e pares de rotas PT/EN. O validador roda antes do build.
- **Identidade técnica:** o nome do pacote deixou de ser o nome genérico do scaffold.
- **SEO de imagens:** cases com Open Graph image também publicam `og:image:alt` e `twitter:image:alt`.

### P2 — corrigidos quando seguros

- galeria dos cases permanece lazy-loaded mesmo na primeira imagem, já que a capa prioritária já foi carregada no topo;
- placeholders de localização/disponibilidade não utilizados foram convertidos em campos vazios, evitando resíduo de conteúdo em uma versão final;
- geometria do monograma/favion foi ajustada para caber integralmente no `viewBox`;
- documentação de troca de foto foi atualizada para refletir o componente já conectado.

## Avaliação por perspectiva

### Recrutador

A primeira dobra identifica João Vittor Nogueira, o posicionamento em Dados/BI e oferece acesso imediato aos projetos. A narrativa passa de posicionamento para stack, cases, experiência, formação, certificados, DataNogs e contato. O principal conteúdo ainda dependente do autor é a profundidade narrativa de alguns cases (tratamento, transformação, insights, resultados e aprendizados).

### Gestor de BI

Os cases mostram modelo, medidas identificadas no PBIX, páginas do dashboard e limites da evidência. A ausência de resultados é explicitada em vez de ser preenchida com números fictícios. Para elevar a capacidade de avaliação técnica, ainda vale documentar decisões reais de Power Query/modelagem/DAX e aprendizados quando essas informações forem fornecidas.

### Design / UX

A linguagem visual é consistente, editorial e pouco dependente de cards. Dark/Light compartilham o mesmo sistema de tokens; vermelho é usado como sinal. Navegação, filtros e CTAs têm alvos de toque adequados e estados de foco. A estrutura mobile é própria e os principais grids usam `minmax(0,1fr)`/quebra de texto para evitar overflow.

### Frontend

Conteúdo permanece separado da apresentação, rotas PT/EN reutilizam páginas, dependências foram reduzidas e o projeto ganhou uma validação de integridade sem nova biblioteca. A configuração de build ainda depende de `@lovable.dev/vite-tanstack-config`; migrá-la sem um build/deploy de referência continua sendo uma alteração opcional e de maior risco.

### Acessibilidade

Há skip link, foco visível, labels, fieldsets/legends, `aria-pressed`, `aria-live`, texto alternativo, retorno de foco no menu/preview de certificado e reduced motion. O fallback fatal do servidor também foi alinhado a esses princípios.

### SEO

Titles/descriptions, PT/EN, canonical/hreflang condicionados ao domínio real, Open Graph, Twitter, favicon, robots, sitemap gerado no build e Person JSON-LD estão estruturados. `VITE_SITE_URL` continua obrigatório em produção para canonical, alternates, `og:url` e sitemap absolutos.

### Mobile

A estrutura foi revisada para 375/480/768 e cresce para 1024/1280/1440 sem depender de uma versão “encolhida” do desktop. O menu usa `dvh`, a foto possui crop mobile e PDFs/imagens permanecem limitados ao container.

## Conteúdo que ainda depende do autor

Sem inventar informações, continuam dependentes de João Vittor:

- instituição e datas das três formações acadêmicas, se forem desejadas publicamente;
- cargo formal, empresa e período exato da experiência profissional, caso queira publicá-los;
- tratamento, transformação, insights, resultados e aprendizados não documentados nos cases;
- links GitHub/YouTube específicos de cada case, quando existirem;
- domínio definitivo em `VITE_SITE_URL`;
- atualização de data editorial em `profile.lastUpdate`, se desejar exibi-la.

## Gate de publicação

Antes do deploy real:

```bash
npm install
npm run validate
npm run check
VITE_SITE_URL=https://SEU-DOMINIO npm run build
```

Depois, faça QA manual em PT/EN, Dark/Light e 1440, 1280, 1024, 768, 480 e 375 px, testando teclado, menu, filtros, PDFs, links externos e os quatro dashboards públicos.
