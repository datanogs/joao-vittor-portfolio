# Ferramentas e tecnologias — revisão de 7/10/2026

## Auditoria
Power BI estava restrito aos temas dos relatórios. Excel aparecia principalmente como fonte. Power Query e DAX eram explicados pelos cases. SQL incluía uma ressalva sobre outras tecnologias em vez de descrever o foco dos estudos. APIs, Git e GitHub estavam agrupados, misturando integração, versionamento e níveis de uso. Python já tinha uma descrição direta, preservada em essência.

## Organização
1. Organização e preparação: Excel e Power Query — em uso.
2. Business Intelligence e análise: Power BI e DAX — em uso.
3. Dados e programação: SQL, Python e APIs — em desenvolvimento.
4. Versionamento e desenvolvimento: Git e GitHub — em uso neste portfólio.

Os rótulos descrevem aplicação atual, não proficiência. Não há notas, barras ou níveis arbitrários. Os exemplos de projetos permanecem nos cases. Não foram adicionadas bibliotecas ou competências não confirmadas.

## Antes e depois

### Excel

**Antes:** Utilizo na rotina administrativa e no trabalho com dados. Planilhas também são a fonte dos dashboards do portfólio.

**Agora (PT):** Utilizo Excel para organizar e conferir dados, estruturar tabelas e acompanhar informações da rotina profissional. Também preparo bases para análise e uso em outras ferramentas.

**Agora (EN):** I use Excel to organize and check data, structure tables and track information in my day-to-day work. I also prepare datasets for analysis and use in other tools.

### Power Query

**Antes:** No projeto de vendas, reúno as bases de três lojas; no Spotify, padronizo categorias e atributos para manter consistência nos filtros e agrupamentos.

**Agora (PT):** Importo e combino fontes, corrijo inconsistências e padronizo valores, tipos e colunas. Preparo as bases para que filtros, agrupamentos e cálculos partam de uma estrutura consistente.

**Agora (EN):** I import and combine sources, correct inconsistencies and standardize values, data types and columns. I prepare datasets so filtering, grouping and calculations use a consistent structure.

### Power BI

**Antes:** Construo relatórios de ranking musical, vendas e abastecimentos, com páginas de visão geral, filtros e detalhamento.

**Agora (PT):** Estruturo modelos analíticos e relacionamentos e construo dashboards com indicadores, visualizações e filtros. Organizo a navegação e a hierarquia visual para conectar a visão geral ao detalhamento.

**Agora (EN):** I structure analytical models and relationships and build dashboards with measures, visuals and filters. I organize navigation and visual hierarchy to connect the overview with detailed analysis.

### DAX

**Antes:** No Spotify, distingo aparições de títulos únicos. No XSales, relaciono lucro e faturamento para comparar a margem entre segmentos.

**Agora (PT):** Crio medidas para agregações, percentuais, rankings e comparações. Trabalho o contexto de filtro para que os indicadores respondam ao período e aos recortes selecionados.

**Agora (EN):** I write measures for aggregations, percentages, rankings and comparisons. I use filter context so indicators respond to the selected period and analytical breakdowns.

### SQL

**Antes:** Estudo consultas a dados, com o curso de Fundamentos de SQL concluído. Os projetos publicados aqui usam Power Query e DAX.

**Agora (PT):** Estou desenvolvendo SQL para consultar e explorar dados relacionais, com foco na organização de consultas e na seleção das informações necessárias à análise.

**Agora (EN):** I am developing my SQL skills to query and explore relational data, focusing on structuring queries and selecting the information needed for analysis.

### Python

**Antes:** Estudo programação aplicada à análise de dados e automação.

**Agora (PT):** Estou desenvolvendo Python com foco em programação, análise de dados e automação de tarefas.

**Agora (EN):** I am developing my Python skills for programming, data analysis and task automation.

### APIs

**Antes:** Estudo integração por APIs. Utilizo Git e GitHub no versionamento deste portfólio.

**Agora (PT):** Estudo o consumo de dados de fontes externas e a integração entre sistemas por APIs, com foco em aplicações de dados e automação.

**Agora (EN):** I am studying how to retrieve data from external sources and connect systems through APIs, with a focus on data applications and automation.

### Git

**Antes:** Estudo integração por APIs. Utilizo Git e GitHub no versionamento deste portfólio.

**Agora (PT):** Utilizo Git para registrar alterações e manter o histórico do desenvolvimento deste portfólio.

**Agora (EN):** I use Git to track changes and maintain this portfolio’s development history.

### GitHub

**Antes:** Estudo integração por APIs. Utilizo Git e GitHub no versionamento deste portfólio.

**Agora (PT):** Utilizo GitHub para hospedar e organizar o repositório do portfólio, manter sua documentação e acompanhar as versões publicadas.

**Agora (EN):** I use GitHub to host and organize the portfolio repository, maintain its documentation and track published versions.

## Implementação e manutenção
- `src/content/skills.ts`: grupos, descrições PT/EN e status `inUse`/`developing`.
- `src/content/ui.ts`: título, descrição e traduções dos dois estados.
- `src/routes/index.tsx`: rótulo textual do estado por grupo, usando tipografia e cores existentes.
- Layout, temas, animações, grid responsivo e cases preservados. Nenhuma alteração de CSS.

## Validação
Executar `npm run check` e `VITE_SITE_URL=https://joao-vittor-portfolio.vercel.app npm run build:release`. Conferir a seção `#stack` em PT/EN: nove tecnologias, quatro grupos, três tecnologias em desenvolvimento e seis em uso. O rótulo é texto legível e não depende de cor. A mudança não introduz largura fixa ou novo breakpoint.
