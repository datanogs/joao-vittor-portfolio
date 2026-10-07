# Redesign editorial — outubro de 2026

Base: f4618e7. Preserva a arquitetura, rotas, traduções, fotografia oficial e conteúdo técnico mais recente dos quatro cases.

## Auditoria e decisões

| Prioridade | Local                  | Problema                                                         | Correção e efeito                                                                                                    |
| ---------- | ---------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| P1         | Home, ordem das seções | Projetos interrompiam a apresentação e a stack                   | Sequência identidade, posicionamento, sobre, stack, projetos, experiência, formação, certificados, DataNogs, contato |
| P1         | styles.css, temas      | Superfícies e retrato precisavam de tratamento editorial próprio | Grafite em Dark; papel e superfícies quentes em Light; plano escuro atrás do retrato em ambos                        |
| P1         | Home, tipografia       | Nome excessivamente dominante no desktop                         | Display máximo de 3.5rem, entrelinha 1.08 e texto explicativo preservado                                             |
| P1         | Case studies           | Percurso entre os temas não estava explicitado visualmente       | Fluxos conceituais localizados, sem dados inventados ou relações causais atribuídas                                  |
| P1         | Blocos DAX, Light      | Código sem superfície técnica deliberada                         | Fundo grafite e texto claro, independentes do tema geral                                                             |
| P2         | Layout e cards         | Ritmo e interações pouco articulados                             | Revelação única, zoom 1.02 e transições discretas; sem dependências de animação                                      |

## Sistema visual

Inter permanece a única família de interface e leitura. Monoespaçada fica restrita ao código. Containers de até 75rem, gutters de 1.25rem e 2rem, texto de até 65ch e escala de espaçamento existente são preservados. O nome recebe ajuste fino, sem ampliar títulos secundários.

Dark: #0B0C0E, #15171B e #1F2125. Light: #F4F3EF, #ECEAE5 e #FAF9F6. Bordas sutis delimitam superfícies; não há novas sombras pesadas nem painéis de KPIs fictícios. Vermelho marca ações e o ponto final dos diagramas. Miniaturas continuam protagonistas.

A fotografia usa o asset oficial existente e o componente ProfilePhoto. Nenhuma manipulação facial ou substituição foi realizada. O plano de fundo é CSS; os crops responsivos existentes são preservados.

## Movimento e acessibilidade

SVG estático com animação de entrada única, CSS e IntersectionObserver. Não há canvas, loop, partículas aleatórias ou novas bibliotecas. Conteúdo permanece visível sem IntersectionObserver. `prefers-reduced-motion` remove os novos movimentos; mudanças na preferência são observadas e o observer é desconectado ao desmontar.

Diagramas decorativos ficam fora da árvore de acessibilidade. Fluxos informativos são listas com legenda e nota explícita sobre sua natureza conceitual. No mobile estreito, tornam-se verticais. Links, foco, menu, filtros e navegação existentes são preservados.

## Conteúdo e escopo

Nenhuma métrica, empresa, screenshot, resultado ou link foi inventado. Texto técnico, medidas, fontes e narrativa dos cases não foram reescritos. Os novos rótulos PT/EN estão em src/content/visual-language.ts. DataNogs permanece secundário. Não foram adicionadas novas páginas.

## Validação e limites

- Validação de conteúdo: 4 projetos, 14 certificados, 13 imagens de projetos, 14 PDFs e fotografia oficial.
- TypeScript e lint: sem erros; 7 avisos preexistentes de Fast Refresh.
- Build de release com a origem configurada: geração para Vercel/Nitro e SEO.
- Nenhuma nova dependência de runtime; DataFlow gera aproximadamente 1.24 kB gzip no build observado.
- Não foi possível concluir a matriz visual local 1440/1280/1024/768/480/375: o navegador remoto não alcançou localhost e o download do navegador de teste falhou neste ambiente. Não se declara aprovação visual, ausência de overflow ou auditoria WCAG automatizada sem esses testes.
- A referência externa de motion não pôde ser inspecionada; implementação baseada no briefing, sem alegar reprodução da referência.

## Arquivos principais

src/styles.css; src/routes/index.tsx; src/routes/datanogs.tsx; src/routes/projetos.$slug.tsx; src/components/site/SiteLayout.tsx; Header.tsx; Footer.tsx; DataFlow.tsx; useEditorialMotion.ts; src/content/visual-language.ts.

## Build

Node 24. Execute `npm ci`, `npm run check` e `npm run build:release`, configurando antes VITE_SITE_URL com a origem pública. A conexão GitHub/Vercel existente deve publicar a branch main. O resultado remoto precisa ser confirmado pelo status da implantação e pela URL pública.
