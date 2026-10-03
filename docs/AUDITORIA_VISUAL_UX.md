# João Vittor Nogueira — auditoria visual, UX e direção de design

Data: 02/10/2026, America/Cuiaba. Base: portfolio-joao-projetos-case-studies-v2(1).zip. Esta análise foi registrada antes das alterações de interface. O apêndice de validação registra os resultados posteriores à implementação.

## Diagnóstico central

A interface tem conteúdo real, rotas bilíngues e componentes reutilizáveis. O problema principal é a relação entre escala, largura e densidade: títulos de campanha ocupam colunas de produto, explicações recebem tratamento de legenda e pequenos rótulos ganham colunas inteiras. Três famílias, caixa alta e tracking amplo reforçam fragmentação. Trocar somente a fonte não resolveria.

Na Home original em 1440 × 900, o H1 de 100,8 px quebra em sete linhas; cargo, explicação e CTA ficam abaixo da primeira tela. Em inglês, a expansão do texto mantém o problema. Em 375 px o título cai para 39,2 px, mas as etiquetas continuam minúsculas. O painel de método sob a foto cria altura sem oferecer evidência de projeto.

Não foram encontrados gráficos fictícios, partículas, cérebros, neon ou 3D nos componentes examinados. As contagens de formação e certificados vêm dos arrays reais. Também não se confirmou overflow horizontal nas medições originais; não se deve confundir o excesso de rolagem vertical com uma quebra horizontal.

## Cobertura e método

Código de todas as rotas e componentes de apresentação lido. Chromium headless: 20 URLs × 6 larguras × 2 temas = 240 combinações antes das alterações. Altura de referência: 900 px. Larguras: 1440, 1280, 1024, 768, 480 e 375. HTTP, H1, imagens, erros de execução e elementos fora da largura foram medidos. Capturas de abertura em 1440 e 375 nos dois temas; capturas integrais em 1440/dark e 375/light para revisão do ritmo. Revisão visual das capturas e leitura do código complementam as medições; não é teste com recrutadores reais.

| Área | PT | EN | Observação |
|---|---|---|---|
| Home | `/` | `/en` | Mesma estrutura; texto localizado |
| Sobre | `/sobre` | `/en/about` | Foto, biografia, experiência e formação |
| Projetos | `/projetos` | `/en/projects` | Destaque e filtros |
| Formação | `/formacao` | `/en/education` | Formação e biblioteca de certificados |
| Certificações | `/formacao#certificados` | `/en/education#certificados` | Seção, não rota independente |
| DataNogs | `/datanogs` | `/en/datanogs` | Iniciativa autoral |
| Contato | `/contato` | `/en/contact` | Canais e cópia do e-mail |
| Cases (4) | `/projetos/{slug}` | `/en/projects/{slug}` | Spotify, XSales, Acompanhamento de Vendas e Frota Leve |

Slugs: `spotify-top-50`, `xsales`, `acompanhamento-vendas`, `gestao-abastecimentos-frota-leve`. Cada case foi incluído, não apenas um exemplar. Resultados originais: 240 respostas HTTP 200, nenhum erro de execução capturado e nenhuma ocorrência de elementos fora da largura. Isso não certifica integralmente acessibilidade ou funcionamento externo dos dashboards.

## Oito perspectivas

| Perspectiva | Evidência e consequência | Decisão |
|---|---|---|
| Recrutador de tecnologia | Nome pequeno, slogan enorme e projetos fora da dobra desktop | Nome como H1, cargo logo abaixo e acesso direto a projetos e trajetória |
| Gestor de BI | Processo genérico no Hero concorre com projetos; cases mostram honestamente lacunas | Remover painel decorativo da abertura; manter limites das evidências e criar índice para análise e resultados |
| Product designer | Ações repetidas e abertura longa retardam a tarefa central | Uma ação principal por bloco; percurso identidade → projeto → detalhe → contato |
| UX designer | Cases com 15 tópicos sem navegação local; certificações descobertas apenas mais abaixo | Índice por âncoras e atalho para certificados |
| UI designer | Bordas, números, chips e linhas repetem o mesmo peso | Superfícies neutras e divisores funcionais; projetos sem molduras redundantes |
| Tipógrafo | Display 100,8 px / body 14–16 px; mono de 9–11 px e tracking de até 0,18 em | Inter unificada, corpo de 16 px e metadados de 13 px |
| Frontend developer | Bons componentes compartilhados; escala parcialmente centralizada, mas muitas exceções locais | Ajustes em tokens e componentes existentes; preservar roteamento, i18n e conteúdo |
| Usuário mobile | Leitura longa, textos auxiliares minúsculos; foto e painel após muitos blocos | Hierarquia compacta, alvos confortáveis, foto proporcional, sem painel extra |

## Inventário tipográfico original

Três famílias carregadas em `src/routes/__root.tsx`: Inter 400/500/600; Space Grotesk 500/600; JetBrains Mono 400/500. Fallbacks de sistema definidos em `src/styles.css`.

| Papel | Fonte / peso | Tamanho / entrelinha / tracking | Local |
|---|---|---|---|
| Display | Space Grotesk 600 | clamp(39,2 px, 7vw, 102,4 px); 0,96; −0,055 em | `text-display`, Home e DataNogs |
| H1 internos e H2 | Space Grotesk 600 | clamp(32 px, 4vw, 58,4 px); 1,02; −0,045 em | `text-section-title`, `Section` e cases |
| H3 de cards | Space Grotesk 600 | 20 px / 1,25 / −0,03 em | `ProjectCard`, `CertificateCard` |
| Destaque | Space Grotesk 600 | 30/36 px, 1,05, −0,045 em | Home e Projetos |
| Texto de seção | Inter 400 | 15/16 px, 28 px | `Section`, max-w-2xl (672 px) |
| Texto narrativo | Inter 400 | 14/16 px, 24/28 px | Sobre, listas, cards e cases |
| Eyebrow | JetBrains Mono 500 | 11 px / 1,25 / 0,18 em, uppercase | `text-eyebrow` |
| Tags | JetBrains Mono | 10 px / tracking 0,12 em, uppercase | `Tag`, certificados |
| Status / datas / índices | JetBrains Mono | 9–12 px / tracking variável | Cases, formação, rodapé |
| Filtros | JetBrains Mono | 11 px / tracking 0,08 em, uppercase | `filter-chip` |
| Menu desktop | JetBrains Mono | 10 px / tracking 0,07 em, uppercase | `Header`, visível ≥1280 px |
| Botões | Inter 600 | 14 px / 1,2; altura mínima 44 px | `button-base` |

H1 e H2 compartilham a mesma classe nas páginas internas. Há títulos intermediários de 16, 18, 20, 24, 30 e 36 px sem papéis centralizados. A hierarquia semântica de educação na página Formação salta de H2 da seção para H3 dos itens adequadamente; o que falta é diferenciação visual consistente, não transformar cada heading em H1.

Larguras: `site-container` = até 1200 px; gutters de 20 px, reduzidos a 16 px abaixo de 640. Textos usam max-w-lg/xl/2xl/3xl (512/576/672/768 px), mas grids aninhados frequentemente reduzem a largura real muito abaixo disso. Em Sobre, a coluna de biografia se divide novamente em índice, título e corpo a partir de 1024 px.

## Problemas priorizados

Referências de linhas correspondem ao ZIP original; nomes de componentes e seletores permanecem a referência estável após as alterações.

| ID | Prioridade | Onde / evidência concreta | Por que prejudica | Correção proposta | Impacto esperado |
|---|---|---|---|---|---|
| 01 | P0 | `styles.css:238`, `index.tsx:46`: 7vw, line-height 0,96; Home 1440 tem H1 de 100,8 px | Cargo e CTA ficam abaixo de 900 px; a identidade profissional vira informação secundária | Nome no H1, papel profissional a seguir, proposta em lead de 18–20 px; display máximo 56 px | Reconhecimento e acesso a projetos na abertura |
| 02 | P0 | `Header:81`, `Tag`, `text-eyebrow`, status dos cases: 9–11 px | Navegação e informações importantes exigem esforço; aspecto de microinterface técnica | Menu 14 px; metadados 13 px; Inter, caixa normal e tracking discreto | Leitura e seleção mais confortáveis nos dois idiomas |
| 03 | P1 | `Section` em `primitives.tsx:26`: grid 0,72fr/1,28fr; `mt-12 sm:mt-16` | Rótulo isolado à esquerda, conteúdo começa longe e abaixo; padrão repete-se em todas as páginas | Cabeçalho vertical alinhado; texto até 65ch; intervalo conteúdo 32 px | Continuidade entre título, explicação e conteúdo |
| 04 | P1 | `section-space`: 80–128 px por lado; mobile 64 px por lado | Seções adjacentes somam até 256 px antes de considerar margens internas | Seções com 40/48 px por lado; bloco de leitura do case 24/32 px | Menos rolagem vazia, sem comprimir parágrafos |
| 05 | P1 | `HeroVisual`, `index.tsx:39,72`: foto + painel de cinco linhas, grid de fundo e linhas verticais | Abertura tem dois focos e aparência de UI kit; painel está `aria-hidden` | Retirar painel da Home e guias decorativas; foto com largura controlada | A fotografia e a identidade voltam a organizar o Hero |
| 06 | P1 | `ProfilePhoto` e `profile.images`: três caminhos independentes; `sizes` sem srcset por resolução | Troca futura pode deixar versões antigas; `sizes` sozinho não seleciona outra resolução | Um `profile.images.portrait`, um arquivo WebP real e crop por CSS | Identidade consistente em todas as telas e temas |
| 07 | P1 | `sobre.tsx:27`: grid dentro de grid, `lg:grid-cols-[3rem_0.75fr_1.25fr]` | Coluna de corpo estreita junto da foto; leitura fragmentada | Índice curto + bloco com título acima do parágrafo | Biografia legível em tablet e desktop |
| 08 | P1 | `projetos.$slug.tsx`, `Narrative`: 15 tópicos, repetição de coluna de status e seções altas | Gestor precisa rolar muito para métricas, insights e resultados | Índice local e IDs, seções compactas, coluna auxiliar curta | Inspeção objetiva e rastreável dos quatro cases |
| 09 | P1 | Home e `ProjectCard`: `object-cover`, proporção 16/10, destaque min-height 28rem | Partes do dashboard podem ser cortadas para preencher a moldura | 16/9 e `object-contain`, preservando a imagem integral | Evidência visual íntegra; não embelezar ocultando dados |
| 10 | P1 | `datanogs.tsx`: display no grid 0,72/1,28, selo DN e label DataNogs duplicado | Título longo domina a página; múltiplas assinaturas competem | Cabeçalho simples com nome/rótulo, H1 moderado e lead | Identidade autoral mais calma e coerente |
| 11 | P1 | Filtros de Projetos e Certificados: uppercase 11 px, pills; links de PDF com pouca altura | Filtros parecem metadados, e não controles; leitura pior em mobile | Filtro Inter 14 px, estado selecionado claro, mínimo 44 px; links de ação com área confortável | Controles reconhecíveis e consistentes |
| 12 | P1 | `Header`: menu aberto trava body, mas não fecha ao cruzar xl | Se a janela passa de mobile para desktop com menu aberto, o menu some e o body pode permanecer travado | Fechar menu ao entrar em ≥1280 px; manter Escape e foco | Elimina armadilha de rolagem por resize |
| 13 | P1 | Formação: grande resumo + seção acadêmica antes da biblioteca; menu diz apenas Formação | Quem procura comprovantes não encontra entrada direta na abertura | Link de âncora para certificados na abertura; preservar PDFs e busca | Menos procura e navegação mais explícita |
| 14 | P2 | `surface-card`, `editorial-panel`, tags e cards de certificados | Bordas, sombras e fundo competem com conteúdo | Sombras leves/ausentes e separadores só nos agrupamentos úteis | Aparência mais sóbria, sem reconstrução estrutural |
| 15 | P2 | Números vermelhos em listas, labels e canais | Vermelho deixa de indicar prioridade | Índices e metadados em neutro; vermelho reservado a ações e estados | Sinalização mais seletiva |
| 16 | P2 | Home repete formação, experiência, certificados e CTA; DataNogs repete descrição | Página longa mesmo após corrigir escala | Preservar conteúdo nesta etapa; futura edição pode condensar blocos com validação editorial | Evitar reescrita desnecessária agora |

## Observações por página e tema

Home: a primeira tela original vende uma frase, não apresenta suficientemente a pessoa. O nome será o H1. A proposta já fornecida permanecerá como texto de valor; cargo e trajetória não receberão resultados novos. O CTA secundário será trajetória, mantendo LinkedIn acessível nos canais e Contato.

Sobre: conteúdo factual consistente, mas o grid aninhado comprime os parágrafos. Foto menor e texto corrido ao lado formam uma composição mais humana. Experiência e formação continuam com listas próprias.

Projetos: o destaque usa imagem real, bom ponto de partida. Título e resumo precisam de proporção menor, imagem integral e filtros legíveis. Cards são links reais e continuarão sendo; não serão convertidos em painéis de aparência clicável sem ação.

Cases: o sistema distingue completo/parcial/ausente e evita inventar análise. Isso deve ser preservado. O problema visual está na repetição de seções muito altas e status isolados. Spotify tem galeria mais extensa; XSales tem imagem com bastante detalhe; Acompanhamento de Vendas contém telas distintas; Frota Leve tem título longo. Os quatro precisam de navegação local, título que quebra naturalmente e imagens sem crop. Não há necessidade de editar dados para corrigir a apresentação.

Formação: as contagens reais podem permanecer, porém discretas. Certificações: cards são adequados a itens com PDF, busca, categoria e tecnologia; remover todos os cards seria contraproducente. Ajustar fontes, bordas e densidade, preservar preview inline e retorno de foco.

DataNogs: preservar a distinção entre profissional e iniciativa autoral. Remover a duplicação gráfica do monograma DN e reduzir a escala do slogan.

Contato: a lista de canais funciona e possui e-mail visível mesmo sem clipboard. Melhorar metadados e alinhamento; não criar formulário sem infraestrutura.

PT/EN: as rotas EN reutilizam componentes PT. Isso evita duas implementações divergentes. Revisar quebra de títulos longos, filtros, status e botões em ambos, sem alturas fixas para texto.

Dark: bom contraste aparente e acento com preenchimento próprio; repetição de bordas finas cria uma sensação de painel. Light: os mesmos problemas de hierarquia ficam visíveis como grandes áreas vazias, não são resolvidos por inverter cores. Manter tokens separados, sem filtrar ou recolorir a fotografia no tema claro. Contraste visual não equivale a laudo WCAG completo.

## Direção de design final — editorial de análise

1. **Tipografia:** Inter para títulos, leitura e controles, pesos 400/500/600. Space Grotesk não oferece ganho suficiente neste conjunto e sai do carregamento. Monoespaçada fica reservada a `code`/`pre`, usando fallback de sistema; JetBrains não precisa ser carregada enquanto não houver blocos técnicos. Marca mantém monograma vetorial existente.
2. **Escala:** H1 explícito, H2 explícito e corpo com presença. Valores na tabela abaixo. Tracking de títulos −0,03 em, sem tracking negativo no corpo. Metadados com 0 a 0,04 em, sem caixa alta generalizada.
3. **Spacing:** base 4 px; passos 4, 8, 12, 16, 24, 32, 48, 64, 96. Título → lead 16 px; lead → ação 24 px; cabeçalho → conteúdo 32 px. Padding de seção 40 px mobile e 48 px desktop por lado; cases 24/32 px por lado.
4. **Containers:** máximo 1200 px; gutters 16 px em 375/480, 24 px em 768/1024, 32 px em 1280. Em 1440, margem real de 120 px por centralização. Texto contínuo até 65ch; leads até 60ch. Grids sempre `minmax(0,...)` quando houver risco de conteúdo longo.
5. **Cores:** preservar tokens OKLCH existentes e dois temas; `foreground` para títulos, `muted-foreground` para explicações, `primary-solid` nos CTAs e `primary` em links/estados. Nenhuma nova cor de categoria. Não reduzir a opacidade do corpo de texto.
6. **Superfícies:** fundo contínuo; superfície secundária apenas em formulário, certificado e mídia. Sem grid técnico decorativo em aberturas.
7. **Bordas:** 1 px, neutras; separar itens e controles. Remover a combinação desnecessária de linha superior, moldura de imagem e moldura externa quando não houver função.
8. **Cards:** projetos com imagem + título + resumo + stack discreta. Certificados podem manter cards por terem ações próprias. Sem sombra flutuante ou zoom obrigatório para indicar clique.
9. **Botões:** mínimo 44 px, texto 14 px/600. Primário vermelho; secundário neutro; links editoriais para ações de menor prioridade. Não usar vermelho em todos os elementos de uma linha.
10. **Filtros:** Inter 14 px, caixa normal, raio de 6 px, quebra de linha livre; estado via `aria-pressed`, fundo e borda; contagem anunciada preservada.
11. **Imagens:** dashboards em `object-contain`; nenhum dado cortado para simular estética. Links existentes de abrir imagem preservados.
12. **Fotografia:** exatamente `imagem portfolio.png` desta sequência (1122 × 1402), convertido para WebP sem retoque facial. Um arquivo de referência, croppado por `object-fit/object-position`. Hero 4:5 com tamanho máximo controlado; mobile quadrado; Sobre 4:5. Mesmos pixels e cores em Dark/Light. Troca futura em `src/content/profile.ts` alterando apenas `images.portrait`.
13. **Navegação:** preservar rotas e troca de idioma contextual, menu desktop ≥1280, menu compacto abaixo disso; fechar ao atingir breakpoint desktop. Índice local nos cases, âncora para certificados, skip-link existente.
14. **Mobile:** ordem nome → cargo → proposta → projetos/trajetória → foto. Texto de 16 px, metadados ≥13 px, sem tabela horizontal artificial, botões quebram texto. Tablet em duas colunas apenas onde a largura real comportar o conteúdo.
15. **Microinterações:** transições existentes de 150–180 ms, sem animações contínuas. Hover de cor/borda; foco visível; preservar `prefers-reduced-motion`. Nada de partículas, gráficos novos, 3D ou efeito neon.

### Escala final em px (16 px de raiz)

| Papel | 1440 | 1280 | 1024 | 768 | 480 | 375 | Peso / line-height |
|---|---:|---:|---:|---:|---:|---:|---|
| Display (nome na Home) | 56 | 56 | 48 | 44 | 36 | 32 | 600 / 1,12 |
| H1 interno | 44 | 44 | 40 | 36 | 32 | 30 | 600 / 1,15 |
| H2 seção | 32 | 32 | 30 | 28 | 26 | 26 | 600 / 1,22 |
| H3 card/bloco | 22 | 22 | 22 | 20 | 20 | 20 | 600 / 1,3 |
| Lead | 20 | 20 | 18 | 18 | 18 | 18 | 400 / 1,55 |
| Body Large | 18 | 18 | 18 | 18 | 18 | 18 | 400 / 1,65 |
| Body | 16 | 16 | 16 | 16 | 16 | 16 | 400 / 1,7 |
| Small/controle | 14 | 14 | 14 | 14 | 14 | 14 | 400–600 / 1,5 |
| Metadata | 13 | 13 | 13 | 13 | 13 | 13 | 400–500 / 1,5 |

Breakpoints de tokens: 480, 768, 1024 e 1280 px; 1440 mantém o teto. Os breakpoints utilitários originais 640/768/1024/1280 permanecem para layouts existentes. Tamanho de texto e mudança de grid têm funções distintas.

## Escopo da implementação

Aplicar P0 e P1 nos tokens e componentes existentes; P2 14/15 apenas onde acompanha essas mudanças. Manter conteúdo dos projetos, PDFs, URLs, SEO, i18n, tema persistente, filtros e preview. Não publicar nem trocar infraestrutura. O ZIP revisado conterá o relatório e instruções de execução. P2 16 fica como decisão editorial futura, sem apagar conteúdo nesta fase.


## Apêndice — implementação e validação final

### Resultado por prioridade

P0 01–02 e P1 03–13 implementados. P2 14–15 aplicados de forma localizada (superfícies sem sombras desnecessárias, tags neutras, índices discretos). P2 16 permanece como refinamento editorial futuro: o conteúdo longo da Home não foi excluído nem reescrito nesta etapa.

A aplicação mantém React, TanStack Router/Start, Vite, Tailwind, rotas, conteúdo bilíngue, persistência do tema, PDFs e links existentes. Nenhum dado de projeto, métrica ou insight foi inventado. A nova fotografia recebeu apenas conversão WebP e enquadramento por CSS. O painel `HeroVisual` permanece como arquivo sem uso na Home, permitindo recuperação sem reconstrução.

### Medidas de comparação

Altura total da página em px, viewport de 900 px de altura, PT/dark. Menor altura não é objetivo isolado: legibilidade pode exigir mais espaço, principalmente nos certificados mobile.

| Página | Largura | Antes | Depois | Variação |
|---|---:|---:|---:|---:|
| Home | 1440 | 9867 | 7706 | -21.9% |
| Home | 375 | 13245 | 12734 | -3.9% |
| Sobre | 1440 | 3456 | 2962 | -14.3% |
| Sobre | 375 | 4983 | 4949 | -0.7% |
| Projetos | 1440 | 3905 | 3415 | -12.5% |
| Projetos | 375 | 5509 | 5591 | +1.5% |
| Case Spotify | 1440 | 13838 | 10875 | -21.4% |
| Case Spotify | 375 | 12989 | 11973 | -7.8% |
| Case XSales | 1440 | 11163 | 8141 | -27.1% |
| Case XSales | 375 | 11074 | 10077 | -9.0% |
| Case Vendas | 1440 | 12003 | 8964 | -25.3% |
| Case Vendas | 375 | 11664 | 10681 | -8.4% |
| Case Frota | 1440 | 12026 | 8924 | -25.8% |
| Case Frota | 375 | 11253 | 10416 | -7.4% |
| Formação + Certificações | 1440 | 4519 | 4164 | -7.9% |
| Formação + Certificações | 375 | 8779 | 8961 | +2.1% |
| DataNogs | 1440 | 4234 | 2994 | -29.3% |
| DataNogs | 375 | 5357 | 5076 | -5.2% |
| Contato | 1440 | 1261 | 1145 | -9.2% |
| Contato | 375 | 2141 | 2212 | +3.3% |

H1 da Home: 100,8 → 56 px em 1440; 89,6 → 56 px em 1280; 71,68 → 48 px em 1024; 53,76 → 44 px em 768; 39,2 → 36 px em 480; 39,2 → 32 px em 375. O texto também mudou de papel: o H1 agora identifica João Vittor Nogueira, enquanto a frase de valor ganhou estilo Lead. Na abertura desktop, cargo e CTAs passaram a ficar visíveis antes da rolagem.

### Validação executada

- Matriz final: 240 combinações, 20 URLs, 6 larguras, PT/EN e Dark/Light. Todas retornaram 200; zero erros de execução capturados, zero imagens quebradas detectadas e zero elementos de conteúdo fora da largura do viewport. Todas as páginas têm exatamente um H1.
- Capturas finais também em 768 e 1024 para conferir tablet; composição da Home, foto, Sobre e Formação revisadas nessas larguras.
- 17 verificações de interação aprovadas: abrir menu; Escape/foco; resize desktop/rolagem; ativar tema; persistência do tema; idioma mantendo o case; âncora do índice; quatro projetos; filtro; limpar filtro; atalho de certificados; busca vazia; busca DAX; abrir preview/foco; fechar preview; copiar e-mail; movimento reduzido.
- `validate-content.mjs`: 4 slugs, 14 certificados, 13 referências de imagens de projetos, 14 PDFs, 1 fotografia e 7 pares estruturais de rotas validados.
- TypeScript (`tsc --noEmit`): aprovado. Foram corrigidos dois pontos de tipagem que já falhavam na base: parâmetros `slug` do link localizado e acesso a `VITE_SITE_URL` por assinatura de índice. A URL final continua localizada e o slug é codificado.
- ESLint: zero erros, sete avisos preexistentes de Fast Refresh (exportações de utilitários junto de componentes). A formatação obrigatória foi normalizada; não houve mudança de conteúdo profissional por essa formatação.
- Build final Vite de cliente, SSR e Nitro: aprovado. Avisos de configuração já existentes (`vite-tsconfig-paths`, `inlineDynamicImports`) permanecem, sem bloquear o build.
- O arquivo `package-lock.json` registra as dependências resolvidas nesta validação; `package.json` não recebeu atualização de versões.

### Limites e pendências explícitos

A checagem de layout cobre Chromium headless, não substitui testes em Safari/iOS, Firefox, dispositivos físicos ou leitores de tela. Não se afirma conformidade WCAG integral. Os PDFs foram preservados e seu preview foi acionado; a renderização nativa do PDF depende do navegador. Dashboards e canais externos não foram modificados nem auditados internamente. A hospedagem não foi alterada ou publicada. A URL canônica segue dependendo da configuração de ambiente já prevista pelo projeto.

As fontes continuam vindo do Google Fonts com fallback de sistema. Auto-hospedagem pode ser uma melhoria posterior, mas não foi introduzida como dependência desta entrega. A condensação editorial da Home (P2 16) também fica para uma etapa posterior.

### Arquivos principais e manutenção

| Arquivo | Responsabilidade |
|---|---|
| `src/styles.css` | Escala, gutters, seções, filtros e crop responsivo |
| `src/components/site/primitives.tsx` | Cabeçalhos alinhados, H1/H2 distintos, tags |
| `src/routes/index.tsx` | Nova hierarquia do Hero, foto, CTAs |
| `src/components/site/ProfilePhoto.tsx` | Fonte única e carregamento da foto |
| `src/content/profile.ts` | `images.portrait`; demais textos profissionais preservados |
| `src/routes/projetos.$slug.tsx` | Índice, âncoras e ritmo dos cases |
| `src/components/site/Header.tsx` | Menu legível e correção de resize |
| `src/routes/formacao.tsx` | Acesso direto à biblioteca de certificados |
| `src/components/site/LocalizedLink.tsx` | URLs PT/EN com slug codificado |
| `docs/AUDITORIA_VISUAL_UX.md` | Este relatório |
| `docs/auditoria/` | Matrizes, interações e capturas comparativas selecionadas |

Para executar: `npm ci`, `npm run dev`. Para validar: `npm run validate`, `npm run typecheck`, `npm run lint`, `npm run build`. O ZIP é um projeto de código-fonte: não se abre como um único arquivo HTML. O relatório HTML, por outro lado, pode ser aberto diretamente e inclui capturas incorporadas.
