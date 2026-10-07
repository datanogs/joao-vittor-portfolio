# Revisão editorial para recrutamento — 7/10/2026

## Princípio
Explicar intenção e uso analítico da técnica. Primeira pessoa para execução demonstrável; capacidades de análise sem inventar impactos ou motivações pessoais.

## Camadas
O inventário anterior permanece preservado no histórico Git, commit `10b662f`, em `src/content/projects.ts` e `src/content/project-process.ts`: 24 fórmulas, evidências, etapas de preparação e ressalvas. A documentação técnica existente em `CASE_STUDY_REVIEW.md` continua como referência de manutenção e não é importada pela aplicação. Não foi publicada uma nova cópia integral do inventário técnico.
A narrativa pública vive em `src/content/projects.ts` e `project-process.ts`. A interface usa preparação dos dados, modelagem e métricas, experiência de análise e o que o case demonstra. Mantém as âncoras anteriores para preservar links.

## Mudanças
- Spotify: preparação para consistência de categorias e atributos; aparições versus títulos distintos; navegação Home → Overview → Artists → Songs explicada por perguntas de análise.
- XSales: receita → custo → lucro → margem, calendário e comparações comerciais; página retrato descrita como página própria, sem afirmar layout nativo automático.
- Vendas: consolidação das três lojas, cadastros e modelo dimensional; visão geral → investigação por produto/vendedor. Pedidos e TicketMedio explicados como contagem e média por registro.
- Frota: origem real e versão pública fictícia; gasto e frequência por localização/veículo. Nota mensal mantida porque a relação calendário/medidas afeta a leitura. Não houve edição de PBIX ou dashboard externo.
- Home e Sobre: substituída a ênfase em documentar fórmulas/limitações por exemplos das decisões tomadas nos projetos.
- Stack: Power Query e DAX ligados a escolhas concretas de Spotify, XSales e Vendas.
- DataNogs: papel de documentação dos estudos descrito sem afirmar frequência ou volume de publicações.
- Experiência, Formação, Certificações e Contato: revisados; mantidos onde já eram factuais e diretos. Sem inventar cargo, empregador, curso, data, impacto ou novos canais.
- PT/EN revisados em conjunto; inglês usa termos naturais de análise e nomes das páginas do dashboard quando necessário.

## Métricas públicas
- Spotify: aparições, títulos distintos, créditos de artistas distintos, primeiro lugar, popularidade média e duração média.
- XSales: faturamento líquido, descontos, custo, lucro e margem.
- Vendas: faturamento, quantidade de registros e valor médio por registro.
- Frota: gasto total e quantidade de registros com valor preenchido.
As 16 fórmulas selecionadas são preservadas literalmente. Demais fórmulas permanecem no histórico de conteúdo. Nome público, definição e uso analítico precedem o cálculo, que fica em “Ver cálculo DAX”.

## Remoções da narrativa pública
Excel.Workbook, Table.Combine, Text.Proper e listas de cliques/etapas; número total de medidas; contagens de linhas sem função narrativa; listas cruas de campos/tabelas; avisos sobre extração e origem não confirmada; repetição de cautelas de auditoria. Números de screenshots foram reduzidos a exemplos que explicam uma comparação.

## Rigor preservado
Popularidade não é streams; títulos não são IDs de faixa; colaborações podem formar um crédito; contagens de venda não comprovam pedidos distintos; dados fictícios da Frota não representam resultados empresariais. A limitação mensal da Frota continua visível. Não foi prometida correção técnica dos relatórios.

## Validação
`npm run check` e build de produção. Conferência automatizada de fórmulas, slugs, links e imagens contra o inventário; nenhuma alteração de CSS, fotografia, temas ou animações nesta etapa. Verificação das traduções, links de capítulos e disclosures na versão publicada.

## Pendências reais
Para apresentar evolução mensal da Frota como validada, é necessário revisar o relacionamento no Power BI e fornecer/publicar a versão corrigida. Não é necessário preencher dados pessoais ou empresariais ausentes para esta revisão editorial.
