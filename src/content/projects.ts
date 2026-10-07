/**
 * Projetos reais do portfólio.
 *
 * Regra editorial: conteúdo factual vem do usuário, dos PBIX e das screenshots reais.
 * Evidências técnicas observáveis podem preencher blocos `partial` quando a limitação é
 * explicitada. `absent` fica reservado para o que realmente não aparece nos materiais.
 */
import type { L } from "@/lib/i18n";

export type CompletionStatus = "complete" | "partial" | "absent";

export type CaseBlock = {
  status: CompletionStatus;
  content: L;
  items?: L[];
};

export type ProjectImage = {
  src: string;
  alt: L;
  label: L;
};

export type Project = {
  limitations: L[];
  observations: L[];
  challenges: { challenge: L; solution: L }[];
  title: L;
  slug: string;
  number: string;
  shortDescription: L;
  approach: L;
  categoryKey: "music" | "sales" | "fleet";
  category: L;
  featured: boolean;
  technologies: string[];
  coverImage: string;
  gallery: ProjectImage[];
  context: CaseBlock;
  problem: CaseBlock;
  objective: CaseBlock;
  data: {
    status: CompletionStatus;
    source: L;
    note: L;
  };
  treatment: CaseBlock;
  transformation: CaseBlock;
  modeling: {
    status: CompletionStatus;
    content: L;
  };
  metrics: {
    status: CompletionStatus;
    items: string[];
    definitions: { name: string; formula: string; interpretation: L; evidence: string }[];
    note: L;
  };
  dashboard: CaseBlock;
  dashboardUrl: string;
  dashboardPages: L[];
  insights: CaseBlock;
  results: CaseBlock;
  learnings: CaseBlock;
  githubUrl: string;
  youtubeUrl: string;
};

export const projects: Project[] = [
  {
    title: {
      pt: "Spotify — Top 50",
      en: "Spotify — Top 50",
    },
    slug: "spotify-top-50",
    number: "01",
    approach: {
      pt: "Normalização de categorias no Power Query, medidas DAX de contagem e ranking e quatro páginas para explorar artistas e músicas.",
      en: "Category normalization in Power Query, DAX counts and ranking measures, and four pages for exploring artists and songs.",
    },
    shortDescription: {
      pt: "Histórico do Spotify Top 50 organizado em quatro páginas: início, visão geral, artistas e músicas. Compara aparições no ranking, popularidade, duração e características das faixas por período.",
      en: "Spotify Top 50 history across four pages: Home, Overview, Artists and Songs. Compares ranking appearances, popularity, duration and track characteristics over time.",
    },
    categoryKey: "music",
    category: {
      pt: "BI · Música",
      en: "BI · Music",
    },
    featured: true,
    technologies: ["Excel", "Power Query", "Power BI", "DAX"],
    coverImage: "/images/projects/spotify/overview.webp",
    gallery: [
      {
        src: "/images/projects/spotify/home.webp",
        alt: {
          pt: "Tela inicial do dashboard Spotify",
          en: "Spotify dashboard home screen",
        },
        label: {
          pt: "Início",
          en: "Home",
        },
      },
      {
        src: "/images/projects/spotify/overview.webp",
        alt: {
          pt: "Página Visão Geral do dashboard Spotify",
          en: "Spotify dashboard Overview page",
        },
        label: {
          pt: "Visão Geral",
          en: "Overview",
        },
      },
      {
        src: "/images/projects/spotify/artists.webp",
        alt: {
          pt: "Página de análise de cantores do dashboard Spotify",
          en: "Spotify dashboard Artists page",
        },
        label: {
          pt: "Cantores",
          en: "Artists",
        },
      },
      {
        src: "/images/projects/spotify/songs.webp",
        alt: {
          pt: "Página de análise de músicas do dashboard Spotify",
          en: "Spotify dashboard Songs page",
        },
        label: {
          pt: "Músicas",
          en: "Songs",
        },
      },
    ],
    context: {
      status: "complete",
      content: {
        pt: "Neste projeto, organizei um histórico do Spotify Top 50 para explorar a presença de artistas e músicas no ranking. A navegação parte da visão geral e chega ao detalhe de cada artista ou faixa.",
        en: "In this project, I organized a historical Spotify Top 50 dataset to explore how artists and songs appear in the ranking. Navigation moves from an overview to individual artists and songs.",
      },
      items: [],
    },
    problem: {
      status: "complete",
      content: {
        pt: "Como comparar presença no ranking, popularidade, características das músicas e distribuição temporal sem confundir músicas únicas com aparições repetidas?",
        en: "How can ranking presence, popularity, song characteristics and time distribution be compared without confusing unique songs with repeated appearances?",
      },
      items: [],
    },
    objective: {
      status: "complete",
      content: {
        pt: "Organizar a exploração do Top 50 em três níveis analíticos — conjunto, artista e música — com indicadores, rankings, filtros e tabelas de detalhe.",
        en: "Organize Top 50 exploration at three analytical levels — dataset, artist and song — through indicators, rankings, filters and detail tables.",
      },
      items: [],
    },
    data: {
      status: "complete",
      source: {
        pt: "O histórico em Excel cobre o Top 50 diário entre maio de 2023 e novembro de 2024. Cada linha registra uma aparição por data e posição.",
        en: "The Excel dataset covers the daily Top 50 from May 2023 to November 2024. Each row records one appearance at a specific date and position.",
      },
      note: {
        pt: "Preservei as aparições ao longo dos dias para comparar recorrência sem confundi-la com variedade de músicas.",
        en: "I kept repeated appearances across dates so that recurrence could be compared separately from the number of distinct songs.",
      },
    },
    treatment: {
      status: "complete",
      content: {
        pt: "Tratei a base no Power Query, padronizando categorias de álbum, datas, tipos de dados e textos dos artistas. Isso organiza os atributos usados nos filtros e evita que variações de escrita se tornem grupos diferentes nas comparações.",
        en: "I prepared the data in Power Query, standardizing album categories, dates, data types and artist text. This makes filtering consistent and prevents spelling variations from splitting equivalent categories.",
      },
      items: [],
    },
    transformation: {
      status: "complete",
      content: {
        pt: "As medidas combinam presença no ranking, variedade de repertório, posição, popularidade e duração. Cada uma responde a uma pergunta diferente sobre o mesmo histórico.",
        en: "The measures cover ranking presence, repertoire variety, position, popularity and duration. Each answers a different question about the same history.",
      },
      items: [],
    },
    modeling: {
      status: "complete",
      content: {
        pt: "Mantive datas, posições e atributos das faixas em uma base analítica. Nas medidas DAX, separei a contagem de aparições das contagens distintas de títulos e artistas: uma faixa que aparece em vários dias contribui várias vezes para a recorrência, mas uma vez para a contagem de títulos no recorte.",
        en: "I kept dates, positions and track attributes in one analytical table. In DAX, I separated appearance counts from distinct song-title and artist counts: a track appearing on several days contributes repeatedly to recurrence, but once to the distinct-title count within the selection.",
      },
    },
    metrics: {
      status: "complete",
      items: [
        "Total Registros",
        "Total Songs Distintas",
        "Total Artistas Distintos",
        "Entradas em #1",
        "Popularidade Média",
        "Duração Média (min)",
      ],
      note: {
        pt: "As contagens distinguem aparições de itens únicos; popularidade e duração acrescentam contexto às comparações.",
        en: "Counts distinguish repeated appearances from unique items; popularity and duration add context to those comparisons.",
      },
      definitions: [
        {
          name: "Total Registros",
          formula: "\n        COUNTROWS('Base de dados - Spotify - TOP50')",
          interpretation: {
            pt: "Conta entradas no ranking; serve de referência para recorrência e proporções.",
            en: "Counts ranking entries; a reference for recurrence and proportions.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Total Songs Distintas",
          formula: "\n        DISTINCTCOUNT('Base de dados - Spotify - TOP50'[song])",
          interpretation: {
            pt: "Conta títulos diferentes no filtro; compara variedade, sem distinguir IDs de faixas homônimas.",
            en: "Counts different titles in context; compares variety without distinguishing track IDs sharing a title.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Total Artistas Distintos",
          formula: "\n        DISTINCTCOUNT('Base de dados - Spotify - TOP50'[artist])",
          interpretation: {
            pt: "Conta rótulos distintos de artista; compara diversidade dos créditos presentes.",
            en: "Counts distinct artist labels; compares the diversity of credits present.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Popularidade Média",
          formula: "\n        AVERAGE('Base de dados - Spotify - TOP50'[popularity])",
          interpretation: {
            pt: "Média da pontuação nas entradas filtradas; compara popularidade do recorte, não streams.",
            en: "Average score across filtered entries; compares popularity scores, not stream counts.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Duração Média (min)",
          formula: "\n        DIVIDE([Duração Média (ms)], 60000)",
          interpretation: {
            pt: "Duração média das faixas nas aparições selecionadas, em minutos.",
            en: "Average track duration across the selected appearances, in minutes.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Entradas em #1",
          formula:
            "\n        CALCULATE(\n            COUNTROWS('Base de dados - Spotify - TOP50'),\n            'Base de dados - Spotify - TOP50'[position] = 1\n        )",
          interpretation: {
            pt: "Conta registros na primeira posição; mede frequência de liderança no recorte.",
            en: "Counts first-position records; measures leadership frequency in the slice.",
          },
          evidence: "A · PBIX / DAX",
        },
      ],
    },
    dashboard: {
      status: "complete",
      content: {
        pt: "Organizei a navegação em quatro páginas. Home apresenta o relatório; Overview resume o ranking; Artists permite investigar o repertório e a presença de cada artista; Songs chega ao comportamento de uma faixa. Os botões mantêm esses níveis de leitura conectados.",
        en: "I organized navigation into four pages. Home introduces the report; Overview summarizes the ranking; Artists explores each artist’s repertoire and presence; Songs focuses on individual tracks. Page buttons connect these levels of analysis.",
      },
      items: [
        {
          pt: "Overview: comparar quantidade de músicas, popularidade e duração, além da distribuição por tipo de álbum, conteúdo explícito e período.",
          en: "Overview: compare song counts, popularity and duration, alongside album type, explicit content and time distributions.",
        },
        {
          pt: "Artists: distinguir quem aparece com frequência de quem reúne mais títulos, usando aparições, músicas distintas e entradas em primeiro lugar.",
          en: "Artists: distinguish frequent appearances from a broader repertoire using appearance counts, distinct titles and first-place entries.",
        },
        {
          pt: "Songs: comparar faixas por aparições, popularidade e liderança, com filtros para concentrar a leitura na música escolhida.",
          en: "Songs: compare tracks by appearances, popularity and first-place entries, using filters to focus on a selected song.",
        },
      ],
    },
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZjYwNDhjMjUtZDMwNC00MjE2LThmOWUtZDllMjkyZjdlYjM1IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    dashboardPages: [
      {
        pt: "Início",
        en: "Home",
      },
      {
        pt: "Visão Geral",
        en: "Overview",
      },
      {
        pt: "Cantores",
        en: "Artists",
      },
      {
        pt: "Músicas",
        en: "Songs",
      },
    ],
    insights: {
      status: "complete",
      content: {
        pt: "O relatório permite comparar a variedade de músicas de cada artista, a frequência das aparições e a posição no ranking. Os filtros ajudam a separar popularidade de permanência e a explorar o recorte por período e tipo de álbum.",
        en: "The report lets you compare the range of songs for each artist, how often they appear and their ranking positions. Filters help distinguish popularity from persistence and explore the dataset by period and album type.",
      },
      items: [
        {
          pt: "Uma música pode ter muitas aparições sem liderar em popularidade média. As duas medidas respondem a perguntas diferentes.",
          en: "A song can have many appearances without leading in average popularity. The two measures answer different questions.",
        },
        {
          pt: "As distribuições permitem investigar a composição do recorte monitorado; não representam todo o catálogo do Spotify.",
          en: "Distributions describe the monitored ranking rather than the entire Spotify catalogue.",
        },
      ],
    },
    results: {
      status: "complete",
      content: {
        pt: "Construí um relatório de quatro páginas para explorar o ranking por artista, música e período. Os cálculos permitem distinguir títulos, combinações música–artista e aparições, uma diferença essencial para ler os indicadores.",
        en: "I built a four-page report to explore the ranking by artist, song and period. The calculations distinguish titles, song–artist combinations and appearances, an essential difference when reading the indicators.",
      },
      items: [],
    },
    learnings: {
      status: "complete",
      content: {
        pt: "O case demonstra uso de Power Query, medidas DAX e parâmetros de campos, com navegação entre visão geral, artistas e músicas.",
        en: "The case demonstrates Power Query, DAX measures and field parameters, with navigation between overview, artist and song pages.",
      },
      items: [],
    },
    githubUrl: "",
    youtubeUrl: "",
    limitations: [
      {
        pt: "As contagens distintas usam títulos e créditos de artista: faixas com o mesmo nome podem ser agrupadas, e uma colaboração pode formar um único crédito.",
        en: "Distinct counts use song titles and artist credits: tracks sharing a title can be grouped together, and a collaboration can form one credit.",
      },
      {
        pt: "Popularidade é uma pontuação, não uma contagem de streams. No gráfico que soma essa pontuação, músicas com mais aparições podem acumular valores maiores. Ao comparar meses, selecione também o ano para separar períodos de anos diferentes.",
        en: "Popularity is a score, not a stream count. In the chart that sums this score, more frequent appearances can produce larger totals. Select the year when comparing months to keep different years separate.",
      },
    ],
    challenges: [
      {
        challenge: {
          pt: "Explorar níveis distintos sem concentrar tudo em uma tela.",
          en: "Explore different levels without concentrating everything on one screen.",
        },
        solution: {
          pt: "Quatro páginas conectadas por botões, com visão geral e focos em artista e música.",
          en: "Four button-connected pages, with overview, artist and song focuses.",
        },
      },
      {
        challenge: {
          pt: "Distinguir recorrência, variedade e posição.",
          en: "Distinguish recurrence, variety and position.",
        },
        solution: {
          pt: "Medidas separadas de entradas, títulos distintos, posição média e primeiro lugar.",
          en: "Separate measures for entries, distinct titles, average position and number-one entries.",
        },
      },
    ],
    observations: [
      {
        pt: "Na visão geral exibida, Taylor Swift reúne 85 títulos, contra 30 de Travis Scott. Essa leitura compara variedade no recorte; a página Artists complementa a comparação com a frequência de aparições.",
        en: "In the displayed overview, Taylor Swift has 85 titles compared with Travis Scott’s 30. This compares repertoire variety within that selection; Artists adds the frequency of ranking appearances.",
      },
    ],
  },
  {
    title: {
      pt: "XSales — Análise de Vendas",
      en: "XSales — Sales Analysis",
    },
    slug: "xsales",
    number: "02",
    approach: {
      pt: "Medidas de receita, custo, lucro e margem, calendário relacionado e recortes comerciais em páginas desktop e retrato.",
      en: "Revenue, cost, profit and margin measures, a related calendar, and commercial breakdowns on desktop and portrait pages.",
    },
    shortDescription: {
      pt: "Faturamento, descontos, custo, lucro e margem por mês, país, produto e tipo de cliente. Duas páginas, desktop e retrato, permitem comparar receita e rentabilidade.",
      en: "Revenue, discounts, cost, profit and margin by month, country, product and customer type. Desktop and portrait pages support comparisons of revenue and profitability.",
    },
    categoryKey: "sales",
    category: {
      pt: "BI · Vendas",
      en: "BI · Sales",
    },
    featured: false,
    technologies: ["Excel", "Power Query", "Power BI", "DAX"],
    coverImage: "/images/projects/xsales/dashboard.webp",
    gallery: [
      {
        src: "/images/projects/xsales/dashboard.webp",
        alt: {
          pt: "Dashboard XSales de análise de vendas",
          en: "XSales sales analysis dashboard",
        },
        label: {
          pt: "Dashboard desktop",
          en: "Desktop dashboard",
        },
      },
    ],
    context: {
      status: "complete",
      content: {
        pt: "Neste relatório, reuni vendas e indicadores financeiros para comparar países, produtos e tipos de cliente. Preparei duas composições: uma para desktop e outra em formato retrato.",
        en: "In this report, I brought sales and financial indicators together to compare countries, products and customer types. I created two compositions: one for desktop and one in portrait format.",
      },
      items: [],
    },
    problem: {
      status: "complete",
      content: {
        pt: "Como comparar faturamento, custo, lucro e margem entre recortes comerciais, sem tratar volume de receita como sinônimo de rentabilidade?",
        en: "How can revenue, cost, profit and margin be compared across commercial segments without treating revenue volume as profitability?",
      },
      items: [],
    },
    objective: {
      status: "complete",
      content: {
        pt: "Consolidar indicadores financeiros e permitir comparação mensal, geográfica, por produto e perfil de cliente.",
        en: "Consolidate financial indicators and enable monthly, geographical, product and customer-type comparisons.",
      },
      items: [],
    },
    data: {
      status: "complete",
      source: {
        pt: "Usei uma base em Excel com valores de vendas, descontos, custos e lucro, associados a período, país, produto e tipo de cliente. O histórico abrange setembro de 2018 a dezembro de 2019.",
        en: "I used an Excel dataset with sales, discounts, costs and profit, linked to period, country, product and customer type. The history runs from September 2018 to December 2019.",
      },
      note: {
        pt: "Essa combinação permite ler o desempenho financeiro junto aos segmentos comerciais que compõem cada total.",
        en: "This combines financial performance with the commercial segments contributing to each total.",
      },
    },
    treatment: {
      status: "complete",
      content: {
        pt: "No Power Query, organizei os campos comerciais e os tipos de datas e valores financeiros. Centralizei mês e ano no calendário do modelo para usar o mesmo recorte temporal nas comparações.",
        en: "In Power Query, I organized commercial fields and assigned date and financial data types. I centralized month and year in the model’s calendar so comparisons use the same time selection.",
      },
      items: [],
    },
    transformation: {
      status: "complete",
      content: {
        pt: "Estruturei a leitura em receita, custo, lucro e margem. O faturamento mostra o valor vendido; custo e lucro acrescentam a dimensão financeira; a margem permite comparar rentabilidade relativa entre segmentos de tamanhos diferentes.",
        en: "I structured the analysis around revenue, cost, profit and margin. Revenue shows sales value; cost and profit add financial context; margin compares relative profitability across segments of different sizes.",
      },
      items: [],
    },
    modeling: {
      status: "complete",
      content: {
        pt: "Relacionei a base de vendas a uma tabela calendário. País, produto e tipo de cliente permanecem na base e permitem comparar os indicadores sob os mesmos filtros. As medidas somam os valores financeiros da fonte e calculam a margem como lucro dividido pelo faturamento líquido.",
        en: "I linked the sales table to a calendar. Country, product and customer type remain in the sales table, allowing indicators to be compared under the same filters. Measures aggregate the source’s financial values and calculate margin as profit divided by net revenue.",
      },
    },
    metrics: {
      status: "complete",
      items: ["Faturamento_liquido", "Descontos", "Custo", "Lucro", "margem"],
      note: {
        pt: "Os valores absolutos e a margem devem ser lidos em conjunto: maior receita não implica maior rentabilidade.",
        en: "Absolute amounts and margin need to be read together: higher revenue does not imply higher profitability.",
      },
      definitions: [
        {
          name: "Faturamento_liquido",
          formula: "SUM(fVendas[Valor Total c/ Desconto])",
          interpretation: {
            pt: "Soma Valor Total c/ Desconto; base de comparação entre períodos, produtos e mercados.",
            en: "Sums Valor Total c/ Desconto; a basis for period, product and market comparisons.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Descontos",
          formula: "SUM(fVendas[Desconto])",
          interpretation: {
            pt: "Soma Desconto; permite observar o valor acumulado de descontos por recorte.",
            en: "Sums Desconto; supports examining accumulated discount values by slice.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Custo",
          formula: "SUM(fVendas[Custo Total])",
          interpretation: {
            pt: "Soma Custo Total; permite confrontar o custo registrado com receita e lucro.",
            en: "Sums Custo Total; enables comparison of recorded cost with revenue and profit.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Lucro",
          formula: "SUM(fVendas[Lucro])",
          interpretation: {
            pt: "Soma o lucro registrado na base para cada recorte.",
            en: "Sums profit recorded in the dataset for each selection.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "margem",
          formula: "DIVIDE([Lucro], [Faturamento_liquido])",
          interpretation: {
            pt: "Divide lucro por faturamento líquido; compara rentabilidade relativa.",
            en: "Divides profit by net revenue; compares relative profitability.",
          },
          evidence: "A · PBIX / DAX",
        },
      ],
    },
    dashboard: {
      status: "complete",
      content: {
        pt: "Na página desktop, reuni indicadores financeiros, evolução mensal e comparações por país, produto e tipo de cliente. O filtro de ano delimita o período; a tabela de produtos aproxima receita, custo, lucro e margem para facilitar a comparação.",
        en: "On the desktop page, I brought together financial indicators, monthly trends and comparisons by country, product and customer type. The year filter sets the period, while the product table places revenue, cost, profit and margin side by side.",
      },
      items: [
        {
          pt: "Criei também uma página em formato retrato, acessível por botão, reorganizando gráficos, tabela e filtros para uma leitura mais estreita.",
          en: "I also created a portrait page, accessible through a button, rearranging charts, the table and filters for a narrower format.",
        },
      ],
    },
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYTJlOTJkYzctOWIzZi00ZmQ3LWE1MzUtMzY2ZWEyODg2NjY1IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    dashboardPages: [
      {
        pt: "Dashboard",
        en: "Dashboard",
      },
      {
        pt: "Mobile",
        en: "Mobile",
      },
    ],
    insights: {
      status: "complete",
      content: {
        pt: "O relatório permite comparar receita, custo, lucro e margem nos mesmos filtros. Essa comparação ajuda a investigar se os segmentos com maior faturamento também apresentam maior margem.",
        en: "The report compares revenue, cost, profit and margin under the same filters. This helps investigate whether higher-revenue segments also have higher margins.",
      },
      items: [
        {
          pt: "O lucro é somado de uma coluna da base; a margem divide esse lucro pelo faturamento líquido. Ler os dois em conjunto ajuda a comparar valor absoluto e proporção, sem atribuir uma causa à diferença.",
          en: "Profit is summed from a source column; margin divides that profit by net revenue. Reading them together helps compare absolute values and proportions without attributing a cause to the difference.",
        },
      ],
    },
    results: {
      status: "complete",
      content: {
        pt: "O relatório reúne indicadores financeiros, filtro de ano e comparações por país, produto e tipo de cliente em páginas desktop e retrato.",
        en: "The report combines financial indicators, a year filter and comparisons by country, product and customer type on desktop and portrait pages.",
      },
      items: [],
    },
    learnings: {
      status: "complete",
      content: {
        pt: "Apliquei medidas financeiras e um calendário relacionado à base de vendas. Também adaptei a disposição dos gráficos e filtros para a página retrato.",
        en: "I used financial measures and a calendar related to the sales dataset. I also adapted the charts and filters for the portrait page.",
      },
      items: [],
    },
    githubUrl: "",
    youtubeUrl: "",
    limitations: [],
    challenges: [
      {
        challenge: {
          pt: "Comparar volume e rentabilidade.",
          en: "Compare volume and profitability.",
        },
        solution: {
          pt: "Receita e margem lado a lado por país e tipo de cliente; tabela de produto com custo e lucro.",
          en: "Revenue and margin side by side by country and customer type; a product table with cost and profit.",
        },
      },
      {
        challenge: {
          pt: "Reorganizar a leitura em formato estreito.",
          en: "Reorganize reading in a narrow format.",
        },
        solution: {
          pt: "Página retrato própria, com navegação por botão.",
          en: "A dedicated portrait page with button navigation.",
        },
      },
    ],
    observations: [
      {
        pt: "No recorte exibido, Grandes Empresas combina faturamento de 19,6 milhões com margem de −4,9%, enquanto Online apresenta 1,8 milhão e 72,7%. A comparação mostra por que volume de receita e rentabilidade precisam ser avaliados separadamente.",
        en: "In the displayed selection, Large Enterprises combines revenue of 19.6 million with a −4.9% margin, while Online shows 1.8 million and 72.7%. This illustrates why revenue volume and profitability need separate assessment.",
      },
    ],
  },
  {
    title: {
      pt: "Acompanhamento de Vendas",
      en: "Sales Tracking",
    },
    slug: "acompanhamento-vendas",
    number: "03",
    approach: {
      pt: "Consolidação de três lojas, modelo com dimensões comerciais e navegação da visão geral ao detalhamento de vendas.",
      en: "Three-store consolidation, a model with commercial dimensions, and navigation from a sales overview to detailed analysis.",
    },
    shortDescription: {
      pt: "Vendas de três lojas consolidadas em uma visão geral e uma página de detalhamento. Compara faturamento, quantidade e valor médio dos registros por loja, produto, vendedor e período.",
      en: "Sales from three stores combined in an overview and a detail page. Compares revenue, record counts and average record value by store, product, salesperson and period.",
    },
    categoryKey: "sales",
    category: {
      pt: "BI · Vendas",
      en: "BI · Sales",
    },
    featured: false,
    technologies: ["Excel", "Power Query", "Power BI", "DAX"],
    coverImage: "/images/projects/acompanhamento-vendas/overview.webp",
    gallery: [
      {
        src: "/images/projects/acompanhamento-vendas/overview.webp",
        alt: {
          pt: "Visão geral do dashboard Acompanhamento de Vendas",
          en: "Sales Tracking dashboard overview",
        },
        label: {
          pt: "Visão Geral",
          en: "Overview",
        },
      },
      {
        src: "/images/projects/acompanhamento-vendas/detail.webp",
        alt: {
          pt: "Detalhamento do dashboard Acompanhamento de Vendas",
          en: "Sales Tracking dashboard detail page",
        },
        label: {
          pt: "Detalhamento Loja",
          en: "Store Detail",
        },
      },
    ],
    context: {
      status: "complete",
      content: {
        pt: "Reuni os dados de três lojas para comparar vendas por produto, vendedor e período. A primeira página apresenta o conjunto; a segunda aprofunda a leitura de cada loja.",
        en: "I brought together data from three stores to compare sales by product, salesperson and period. The first page provides an overview; the second takes a closer look at each store.",
      },
      items: [],
    },
    problem: {
      status: "complete",
      content: {
        pt: "Como consolidar vendas de lojas distintas e investigar diferenças por período, produto e vendedor a partir de uma visão geral?",
        en: "How can sales from different stores be consolidated and differences by period, product and salesperson investigated from an overview?",
      },
      items: [],
    },
    objective: {
      status: "complete",
      content: {
        pt: "Reunir indicadores por loja e oferecer uma segunda página para aprofundar o faturamento e a distribuição dos registros de venda.",
        en: "Bring together store indicators and provide a second page for investigating revenue and the distribution of sales records.",
      },
      items: [],
    },
    data: {
      status: "complete",
      source: {
        pt: "Consolidei planilhas de três lojas e um cadastro de produtos em uma base de vendas. Os registros relacionam loja, vendedor, produto, preço, quantidade e data, cobrindo 2022 e 2023.",
        en: "I consolidated spreadsheets from three stores and a product register into a sales dataset. Records link store, salesperson, product, price, quantity and date, covering 2022 and 2023.",
      },
      note: {
        pt: "A consolidação permite comparar as lojas a partir da mesma estrutura, sem consultar cada planilha separadamente.",
        en: "Consolidation allows stores to be compared through one structure instead of separate spreadsheets.",
      },
    },
    treatment: {
      status: "complete",
      content: {
        pt: "No Power Query, combinei os dados das lojas, separei campos que reuniam preço e quantidade e padronizei identificadores e descrições. Mantive as vendas finalizadas e organizei cadastros sem duplicidade de lojas e vendedores, criando uma base comum para as comparações.",
        en: "In Power Query, I combined store data, separated fields containing both price and quantity, and standardized identifiers and descriptions. I kept completed sales and removed duplicate entries from the store and salesperson registers to create a consistent basis for comparison.",
      },
      items: [],
    },
    transformation: {
      status: "complete",
      content: {
        pt: "Combinei faturamento, quantidade de registros e valor médio por registro. Lidos juntos, esses indicadores ajudam a distinguir maior volume de registros de maior valor médio nas vendas.",
        en: "I combined revenue, record count and average value per record. Together, these indicators distinguish more sales records from a higher average record value.",
      },
      items: [],
    },
    modeling: {
      status: "complete",
      content: {
        pt: "Organizei as vendas em uma tabela fato relacionada a produtos, vendedores, lojas e calendário. Essa separação permite filtrar o mesmo faturamento por diferentes perspectivas, mantendo o vínculo entre cada registro e seus atributos. Calculei o valor de venda por preço unitário × quantidade.",
        en: "I organized sales in a fact table linked to products, salespeople, stores and a calendar. This allows the same revenue total to be filtered from different perspectives while preserving each record’s attributes. I calculated sales value as unit price × quantity.",
      },
    },
    metrics: {
      status: "complete",
      items: ["Faturamento", "TicketMedio", "Qntde_Pedidos"],
      note: {
        pt: "O dashboard usa os rótulos Pedidos e TicketMedio, mas as fórmulas calculam quantidade e valor médio de registros. Essa é a unidade de análise usada neste case.",
        en: "The dashboard labels these measures Pedidos and TicketMedio, but their formulas calculate record count and average record value. Records are the unit of analysis used in this case.",
      },
      definitions: [
        {
          name: "Faturamento",
          formula: "SUM(fVendas[TotalVendas])",
          interpretation: {
            pt: "Soma TotalVendas, calculado por preço × quantidade; compara valor vendido.",
            en: "Sums TotalVendas, calculated as price × quantity; compares sales value.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "TicketMedio",
          formula: "AVERAGE(fVendas[TotalVendas])",
          interpretation: {
            pt: "Média de TotalVendas por registro; compara valor médio das linhas, não pedidos distintos.",
            en: "Average TotalVendas per record; compares average row values, not distinct orders.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Qntde_Pedidos",
          formula: "COUNT(fVendas[TotalVendas])",
          interpretation: {
            pt: "Conta valores numéricos preenchidos em TotalVendas. Permite comparar a quantidade de registros nos filtros selecionados.",
            en: "Counts nonblank numeric values in TotalVendas. Compares the number of records under the selected filters.",
          },
          evidence: "A · PBIX / DAX",
        },
      ],
    },
    dashboard: {
      status: "complete",
      content: {
        pt: "Separei a visão consolidada da investigação detalhada. Visão Geral compara lojas, evolução temporal, cidades e vendedores. Detalhamento Loja permite escolher o recorte e investigar quais produtos ou vendedores compõem o resultado, sem concentrar todos os gráficos na primeira tela.",
        en: "I separated the consolidated view from detailed investigation. Visão Geral compares stores, time trends, cities and salespeople. Detalhamento Loja lets users select a segment and explore the products or salespeople behind its results, keeping the first page focused.",
      },
      items: [
        {
          pt: "O mapa compara faturamento por cidade; o treemap mostra a distribuição de registros por produto.",
          en: "The map compares revenue by city; the treemap shows how records are distributed across products.",
        },
        {
          pt: "No detalhamento, um parâmetro alterna a análise entre produto e vendedor. Um tooltip acrescenta informação durante a exploração.",
          en: "On the detail page, a field parameter switches analysis between product and salesperson. A tooltip provides additional context while exploring.",
        },
      ],
    },
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYmU5NmVkYmQtZTBjNi00YzFjLTg5MjQtOGYzY2ZiZjQzYjE1IiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    dashboardPages: [
      {
        pt: "Visão Geral",
        en: "Overview",
      },
      {
        pt: "Detalhamento Loja",
        en: "Store Detail",
      },
    ],
    insights: {
      status: "complete",
      content: {
        pt: "A análise começa pela comparação entre lojas e avança para os produtos, vendedores e períodos que compõem cada resultado. Os recortes ajudam a localizar diferenças e escolher o que investigar em detalhe.",
        en: "The analysis starts with store comparisons, then moves into the products, sellers and periods behind each result. These views help locate differences and decide what to investigate further.",
      },
      items: [
        {
          pt: "O treemap compara frequência de registros por produto; o mapa compara faturamento por cidade. Os visuais respondem a perguntas distintas sobre volume de registros e valor financeiro.",
          en: "The treemap compares sales-record frequency by product; the map compares revenue by city. These visuals answer different questions about record volume and financial value.",
        },
      ],
    },
    results: {
      status: "complete",
      content: {
        pt: "Construí duas páginas e um tooltip a partir da base consolidada de três lojas. Quatro dimensões relacionadas permitem navegar da visão geral para o detalhe por loja, produto, vendedor e período.",
        en: "I built two pages and a tooltip from the combined dataset of three stores. Four related dimensions support navigation from an overview to detail by store, product, salesperson and period.",
      },
      items: [],
    },
    learnings: {
      status: "complete",
      content: {
        pt: "Combinei consultas, tratei textos e organizei o modelo dimensional. Usei medidas de receita e parâmetros de campos para oferecer diferentes recortes da mesma base.",
        en: "I combined queries, cleaned text and organized the dimensional model. I used revenue measures and field parameters to provide different views of the same dataset.",
      },
      items: [],
    },
    githubUrl: "",
    youtubeUrl: "",
    limitations: [],
    challenges: [
      {
        challenge: {
          pt: "Consolidar três origens de loja.",
          en: "Consolidate three store sources.",
        },
        solution: {
          pt: "Combinei as bases e padronizei loja, preço e quantidade antes de relacionar as vendas aos cadastros.",
          en: "I combined the datasets and standardized store, price and quantity fields before linking sales to the reference tables.",
        },
      },
      {
        challenge: {
          pt: "Passar da visão executiva à investigação.",
          en: "Move from executive overview to investigation.",
        },
        solution: {
          pt: "Duas páginas conectadas, tooltip e parâmetro produto/vendedor.",
          en: "Two connected pages, a tooltip and a product/salesperson parameter.",
        },
      },
    ],
    observations: [
      {
        pt: "Na visão geral exibida, Filial 2 tem faturamento de 810.420, acima de Filial 3, com 721.000, e Matriz, com 581.600. O detalhamento permite investigar a composição dessa diferença por produto, vendedor e período.",
        en: "In the displayed overview, Branch 2 has revenue of 810,420, ahead of Branch 3 at 721,000 and the main store at 581,600. The detail page supports investigating that difference by product, salesperson and period.",
      },
    ],
  },
  {
    title: {
      pt: "Gestão de Abastecimentos — Frota Leve",
      en: "Fuel Management — Light Fleet",
    },
    slug: "gestao-abastecimentos-frota-leve",
    number: "04",
    approach: {
      pt: "Organização de registros operacionais e comparação de gastos por estado, cidade e veículo.",
      en: "Operational records organized for spending comparisons by state, city and vehicle.",
    },
    shortDescription: {
      pt: "Gastos e registros de abastecimento por estado, cidade e veículo. Criado para uma necessidade real de trabalho; a versão pública usa dados e placas fictícios para preservar a confidencialidade.",
      en: "Fuel spending and records by state, city and vehicle. Built for a real workplace need; the public version uses fictional data and license plates to protect confidentiality.",
    },
    categoryKey: "fleet",
    category: {
      pt: "BI · Frota",
      en: "BI · Fleet",
    },
    featured: false,
    technologies: ["Excel", "Power Query", "Power BI", "DAX"],
    coverImage: "/images/projects/frota-leve/dashboard.webp",
    gallery: [
      {
        src: "/images/projects/frota-leve/cover.webp",
        alt: {
          pt: "Tela de apresentação do dashboard de gestão de abastecimentos",
          en: "Fuel-management dashboard presentation screen",
        },
        label: {
          pt: "Apresentação",
          en: "Presentation",
        },
      },
      {
        src: "/images/projects/frota-leve/dashboard.webp",
        alt: {
          pt: "Dashboard de gestão de abastecimentos da frota leve",
          en: "Light-fleet fuel-management dashboard",
        },
        label: {
          pt: "Dashboard",
          en: "Dashboard",
        },
      },
    ],
    context: {
      status: "complete",
      content: {
        pt: "O projeto nasceu de uma necessidade real de acompanhar abastecimentos. Construí uma visão dos gastos por localização e veículo. Para o portfólio, substituí os dados e identificadores por informações fictícias, preservando a proposta analítica sem expor a operação.",
        en: "The project began with a real need to monitor refueling. I built a view of spending by location and vehicle. For the portfolio, I replaced data and identifiers with fictional information, preserving the analytical purpose without exposing the operation.",
      },
      items: [],
    },
    problem: {
      status: "complete",
      content: {
        pt: "Como consolidar gastos e registros de abastecimento e investigar sua distribuição por estado, cidade e veículo?",
        en: "How can fuel expenditure and refueling records be consolidated and their distribution by state, city and vehicle investigated?",
      },
      items: [],
    },
    objective: {
      status: "complete",
      content: {
        pt: "Reunir gasto total e quantidade de registros em uma visão que permita investigar sua distribuição por estado, cidade e veículo.",
        en: "Bring total spending and record count into one view for investigating their distribution by state, city and vehicle.",
      },
      items: [],
    },
    data: {
      status: "complete",
      source: {
        pt: "A base em Excel reúne datas, localização, veículo, produto, quantidade e valores dos registros de abastecimento.",
        en: "The Excel dataset contains dates, locations, vehicles, products, quantities and values for refueling records.",
      },
      note: {
        pt: "Esses campos permitem reunir o gasto total e depois examinar sua distribuição geográfica e por veículo.",
        en: "These fields support an overall spending total and breakdowns by geography and vehicle.",
      },
    },
    treatment: {
      status: "complete",
      content: {
        pt: "Preparei os registros no Power Query, selecionando os campos da análise e ajustando datas e valores financeiros. A base resultante reúne os atributos necessários para comparar gasto e frequência de registros por localização e veículo.",
        en: "I prepared the records in Power Query, selecting the analytical fields and assigning date and financial data types. The resulting dataset brings together the attributes needed to compare spending and record frequency by location and vehicle.",
      },
      items: [],
    },
    transformation: {
      status: "complete",
      content: {
        pt: "Usei gasto total e quantidade de registros como leituras complementares. Um local pode concentrar maior gasto sem necessariamente concentrar a mesma proporção de registros.",
        en: "I used total spending and record count as complementary views. A location’s share of spending can differ from its share of records.",
      },
      items: [],
    },
    modeling: {
      status: "partial",
      content: {
        pt: "Concentrei os indicadores na base de movimentos: uma medida soma o valor registrado e outra conta os registros com valor preenchido. Estado, cidade e veículo oferecem recortes do mesmo total, permitindo investigar onde o gasto se concentra.",
        en: "I based the indicators on the movement records: one measure sums recorded spending and another counts records with a populated value. State, city and vehicle provide breakdowns of the same total, supporting investigation of where spending is concentrated.",
      },
    },
    metrics: {
      status: "complete",
      items: ["TotalAbastecimento", "ContAbastecimentos"],
      note: {
        pt: "A contagem acompanha registros com valor preenchido; não representa litros nem uma contagem distinta de eventos.",
        en: "The count tracks records with a populated value; it represents neither liters nor distinct refueling events.",
      },
      definitions: [
        {
          name: "TotalAbastecimento",
          formula: "SUM('movimentos_detalhados (4)'[Valor Total da venda])",
          interpretation: {
            pt: "Soma Valor Total da venda; compara gasto registrado por localização e veículo.",
            en: "Sums Valor Total da venda; compares recorded expenditure by location and vehicle.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "ContAbastecimentos",
          formula: "COUNT('movimentos_detalhados (4)'[Valor Total da venda])",
          interpretation: {
            pt: "Conta valores numéricos preenchidos; monitora volume de registros, sem afirmar eventos únicos.",
            en: "Counts populated numeric values; monitors record volume without claiming unique events.",
          },
          evidence: "A · PBIX / DAX",
        },
      ],
    },
    dashboard: {
      status: "complete",
      content: {
        pt: "A página de apresentação leva ao dashboard por botões. Na página analítica, reuni gasto total, quantidade de registros e comparações por estado, cidade e placa, permitindo começar pelo total e escolher um recorte para investigar.",
        en: "The introduction page links to the dashboard through buttons. On the analytical page, I combined total spending, record count and comparisons by state, city and plate, allowing users to start with the total and choose a breakdown to investigate.",
      },
      items: [],
    },
    dashboardUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiYmFhZGI2NzUtY2U1Ni00NzMyLTllYTctNzQzZTdhY2I1MWUxIiwidCI6IjY1OWNlMmI4LTA3MTQtNDE5OC04YzM4LWRjOWI2MGFhYmI1NyJ9",
    dashboardPages: [
      {
        pt: "Apresentação",
        en: "Presentation",
      },
      {
        pt: "Dashboard",
        en: "Dashboard",
      },
    ],
    insights: {
      status: "complete",
      content: {
        pt: "O relatório permite comparar a concentração de gastos entre estados, cidades e veículos. A leitura conjunta de valor e quantidade de registros ajuda a formular perguntas sobre diferenças entre esses recortes, sem atribuir causas que os dados não demonstram.",
        en: "The report compares spending concentration across states, cities and vehicles. Reading amounts alongside record counts helps frame questions about differences between these groups without assuming causes that the data does not establish.",
      },
      items: [],
    },
    results: {
      status: "complete",
      content: {
        pt: "O entregável é um dashboard navegável que consolida gastos e registros de abastecimento e permite compará-los por localização e veículo.",
        en: "The deliverable is a navigable dashboard that consolidates refueling spending and records for comparison by location and vehicle.",
      },
      items: [],
    },
    learnings: {
      status: "complete",
      content: {
        pt: "O case demonstra preparação de registros operacionais, medidas de gasto e contagem, organização de filtros e cuidado com a exposição de informações de trabalho.",
        en: "The case demonstrates operational data preparation, spending and count measures, filter organization and care in presenting workplace information.",
      },
      items: [],
    },
    githubUrl: "",
    youtubeUrl: "",
    limitations: [
      {
        pt: "O recorte mensal ainda exige revisão da ligação entre calendário e medidas. Por isso, não uso a série mensal para tirar conclusões sobre evolução ou estabilidade dos gastos.",
        en: "Monthly filtering still requires a review of the calendar-to-measure relationship. I therefore do not use the monthly series to draw conclusions about spending trends or stability.",
      },
    ],
    challenges: [
      {
        challenge: {
          pt: "Comparar gastos em diferentes recortes.",
          en: "Compare expenditure across slices.",
        },
        solution: {
          pt: "Barras por UF, cidade e placa com a mesma medida de total.",
          en: "Bars by state, city and plate using the same total measure.",
        },
      },
      {
        challenge: {
          pt: "Apresentar um projeto de origem real sem expor a operação.",
          en: "Present a real-origin project without exposing the operation.",
        },
        solution: {
          pt: "Substituição dos dados e identificadores por informações fictícias na versão pública.",
          en: "Replacement of data and identifiers with fictional information in the public version.",
        },
      },
    ],
    observations: [],
  },
];
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const featuredProject = projects.find((project) => project.featured) ?? projects[0]!;
