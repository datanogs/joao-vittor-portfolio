# Camada de motion de dados

Implementação incremental sobre o redesign e a correção mobile da fotografia. Nenhuma imagem, resultado ou medida foi inventada. Os desenhos são conceituais e não têm eixos, números ou escala quantitativa.

## Onde está cada comportamento

| Página / área                                            | Componente                          | Movimento                                                                                                  | Gatilho                                                   |
| -------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Home, abaixo do conteúdo do Hero, separado da fotografia | DataScene, variante structure       | Pontos dispersos convergem para posições organizadas; grid e percurso são desenhados; ponto final vermelho | Viewport, uma execução                                    |
| Home, Como trabalho                                      | DataFlow + DataScene                | Dados → Tratamento → Modelo → Análise → Decisão; nós e conexões sequenciais                                | Viewport; desktop também responde ao scroll               |
| Home, Como trabalho                                      | useEditorialMotion                  | Etapa ativa, percurso SVG e linha de progresso avançam com a posição da seção                              | Scroll passivo, requestAnimationFrame, sem travar rolagem |
| Spotify, abertura do overview                            | DataScene ranking                   | Pontos primeiro se agrupam por coluna, depois alinham-se verticalmente                                     | Viewport                                                  |
| XSales, abertura do overview                             | DataFlow + DataScene finance        | Receita → Custo → Lucro → Margem; conexões e nós sequenciais                                               | Viewport                                                  |
| Acompanhamento de Vendas, overview                       | DataScene drill                     | Pontos convergem em patamares sucessivos de detalhamento                                                   | Viewport                                                  |
| Frota Leve, overview                                     | DataScene refine                    | Mês → Estado → Cidade → Veículo; refinamento em patamares                                                  | Viewport                                                  |
| Projetos e Home                                          | ProjectCard / FeaturedProject e CSS | Miniatura escala 1.02, título responde, seta avança; foco preservado                                       | Hover / teclado                                           |
| Cases, imagem principal e galeria; projetos, destaque    | featured-image / case-gallery       | Máscara horizontal descobre a imagem                                                                       | Viewport                                                  |
| Cases, índice de leitura                                 | case-nav + useEditorialMotion       | Nó e link da seção atual recebem destaque e aria-current                                                   | Scroll                                                    |
| Cases, métricas                                          | metric-list                         | Linha desenhada, nome e definição entram em sequência                                                      | Viewport                                                  |
| DataNogs, introdução                                     | DataScene document                  | Fragmentos se alinham em linhas organizadas, com percurso e ponto de sinal                                 | Viewport                                                  |
| Títulos de seção                                         | section-heading                     | Linha editorial avança horizontalmente                                                                     | Viewport                                                  |

DataScene usa SVG; o grid reutilizável é ativado no Hero, no pipeline e em DataNogs. DataFlow usa lista semântica e nós CSS, junto à composição SVG. Os indicadores de leitura e linhas editoriais são CSS.

## Temas

Dark reutiliza graphite/cinza e um único ponto de insight vermelho. Light utiliza os tokens próprios de grid cinza quente, pontos charcoal e deep red. Não há glow, inversão automática de cores ou alteração da paleta aprovada.

## Mobile e movimento reduzido

Abaixo de 768px, não há visualização controlada pela rolagem: o fluxo funciona como sequência breve. Grid, varredura e parte dos nós são removidos; a composição do Hero é compacta e permanece separada da foto. Abaixo de 480px, as conexões da lista são verticais.

Com prefers-reduced-motion, os diagramas mostram seu estado estático, os percursos estão completos e as máscaras abertas. Animações e transições de conteúdo são removidas. O índice continua indicando a seção atual sem animação. Conteúdo profissional permanece legível sem JavaScript.

## Performance

Sem dependências novas. Um IntersectionObserver compartilhado por página; listener passivo de scroll e atualização agrupada por requestAnimationFrame. Cálculo do pipeline restrito ao viewport. Animações pausadas fora do viewport e com a aba oculta; todas as sequências são finitas. Não há loops, canvas, WebGL, parallax ou animação de width/height/top/left.

Impacto esperado baixo para esse número de elementos; isso é uma estimativa de implementação, não uma medição de LCP, CLS, INP ou FPS em celular real. SVGs reservam a proporção antes da animação.

## Referência e validação

A referência fornecida foi aberta e inspecionada no navegador: composição gráfica de nós no Hero, grid e marcadores nas transições. A implementação utiliza outra linguagem (organização, documentação e etapas analíticas), sem copiar marca, cores, textos, métricas ou componentes.

Validações locais: conteúdo, TypeScript, lint e build de release. A matriz visual completa de dispositivos e medidas de performance em hardware real continua pendente por limitações do ambiente. Não se declara equivalência subjetiva de acabamento com a referência sem revisão em todos os dispositivos.

## Arquivos

Criados: src/components/site/DataScene.tsx; docs/MOTION.md.

Alterados: src/components/site/DataFlow.tsx; src/components/site/useEditorialMotion.ts; src/content/visual-language.ts; src/routes/index.tsx; src/routes/datanogs.tsx; src/styles.css.

Tokens: --motion-fast, --motion-base, --motion-slow, --motion-sequence, --ease-standard, --ease-out e --ease-emphasized. Edição dos rótulos em visual-language.ts; edição da geometria em DataScene.tsx. A fotografia não é modificada por nenhum componente de motion.
