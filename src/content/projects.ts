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
  evidence: { confirmed: string[]; inference: string };
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
    entities: string[];
    fields: string[];
    note: L;
  };
  treatment: CaseBlock;
  transformation: CaseBlock;
  modeling: {
    status: CompletionStatus;
    content: L;
    entities: string[];
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
      pt: "Quais músicas e artistas aparecem no Top 50, e como essa presença muda ao longo do tempo? Quatro páginas em Power BI exploram o ranking, a popularidade e as características das músicas.",
      en: "Which songs and artists appear in the Top 50, and how does their presence change over time? Four Power BI pages explore ranking positions, popularity and song characteristics.",
    },
    categoryKey: "music",
    category: {
      pt: "BI · Música",
      en: "BI · Music",
    },
    featured: true,
    technologies: ["Power BI", "Power Query", "DAX"],
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
        pt: "Arquivo Excel identificado no Power Query; a origem externa anterior ao arquivo não foi confirmada. O snapshot contém 27.800 registros em 556 datas, de 18/05/2023 a 27/11/2024.",
        en: "An Excel file identified in Power Query; its upstream external source was not confirmed. The snapshot contains 27,800 records across 556 dates, from 18 May 2023 to 27 November 2024.",
      },
      entities: ["Base de dados - Spotify - TOP50", "Medidas", "Filtro_Tri_Mes"],
      fields: [
        "song",
        "artist",
        "position",
        "date",
        "release_date",
        "popularity",
        "duration_ms",
        "album_type",
        "is_explicit",
        "total_tracks",
        "album_cover_url",
      ],
      note: {
        pt: "A granularidade observada é uma entrada por data e posição: 50 posições por data, sem duplicatas dessa chave no snapshot. São 789 títulos distintos, 342 rótulos de artista e 825 combinações música–artista. Um rótulo pode representar uma colaboração; não equivale necessariamente a uma pessoa.",
        en: "The observed grain is one entry per date and position: 50 positions per date, with no duplicate keys in this snapshot. There are 789 distinct titles, 342 artist labels and 825 song–artist combinations. A label can represent a collaboration rather than one person.",
      },
    },
    treatment: {
      status: "complete",
      content: {
        pt: "No Power Query, promovi cabeçalhos, defini os tipos e selecionei 11 campos. Também padronizei categorias de álbum e corrigi a codificação de um nome de artista.",
        en: "In Power Query, I promoted headers, set data types and selected 11 fields. I also standardized album categories and corrected the encoding of an artist name.",
      },
      items: [
        {
          pt: "Datas convertidas para date; popularidade, posição e duração para inteiros; conteúdo explícito para lógico.",
          en: "Dates converted to date; popularity, position and duration to integers; explicit content to logical.",
        },
        {
          pt: "Text.Proper em album_type; Single → Solo e Compilation → Compilado; correção de codificação de Beyoncé.",
          en: "Text.Proper on album_type; Single → Solo and Compilation → Compilado; Beyoncé encoding correction.",
        },
        {
          pt: "A etapa final Table.SelectRows(each true) não remove registros. Não foi detectada remoção de duplicatas.",
          en: "The final Table.SelectRows(each true) step does not remove records. No deduplication step was detected.",
        },
      ],
    },
    transformation: {
      status: "complete",
      content: {
        pt: "O modelo contém 70 medidas com expressão e dois objetos de medida vazios. Os cálculos cobrem contagens, médias, duração, posição, Top 10, primeiro lugar, conteúdo explícito e índices próprios de desempenho. Nem todas as medidas são utilizadas nos visuais.",
        en: "The model contains 70 measures with expressions and two empty measure objects. Calculations cover counts, averages, duration, position, Top 10, number-one entries, explicit content and custom performance indices. Not every measure is used in visuals.",
      },
      items: [
        {
          pt: "Colunas calculadas Mes, num_mes, trimestre e Ano organizam recortes temporais; Filtro_Tri_Mes alterna campos de mês e trimestre.",
          en: "Calculated Mes, num_mes, trimestre and Ano columns organize time slices; Filtro_Tri_Mes switches month and quarter fields.",
        },
        {
          pt: "As medidas de popularidade por artista ou música usam AVERAGEX sobre valores distintos; sua ponderação difere da média de todas as entradas.",
          en: "Artist- and song-level popularity measures use AVERAGEX over distinct values; their weighting differs from the average across all entries.",
        },
        {
          pt: "O índice próprio combina popularidade e posição média: popularidade × (51 − posição média) / 50. Não é um indicador oficial do Spotify.",
          en: "The custom index combines popularity and average position: popularity × (51 − average position) / 50. It is not an official Spotify metric.",
        },
      ],
    },
    modeling: {
      status: "complete",
      content: {
        pt: "Tabela analítica principal com atributos de música e artista na própria base, tabela de medidas e parâmetro de campos. Calendários automáticos atendem date e release_date. Não há dimensões separadas de músicas e artistas que sustentem descrever o modelo como estrela.",
        en: "A main analytical table holds song and artist attributes, alongside a measure table and field parameter. Automatic calendars support date and release_date. There are no separate song and artist dimensions to support describing this as a star schema.",
      },
      entities: ["Base de dados - Spotify - TOP50", "Medidas", "Filtro_Tri_Mes"],
    },
    metrics: {
      status: "complete",
      items: [
        "Total Registros",
        "Total Songs Distintas",
        "Total Artistas Distintos",
        "Total Combinações Song-Artista",
        "Popularidade Média",
        "Duração Média (min)",
        "Posição Média",
        "Entradas em #1",
        "Aparições por Song",
        "Índice de Performance Song",
      ],
      note: {
        pt: "Veja o que cada medida calcula e como pode ser usada na análise. As fórmulas DAX abaixo foram extraídas do modelo.",
        en: "See what each measure calculates and how it can be used in analysis. The DAX formulas below were extracted from the model.",
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
          name: "Total Combinações Song-Artista",
          formula:
            "\n        COUNTROWS(\n            SUMMARIZE(\n                'Base de dados - Spotify - TOP50',\n                'Base de dados - Spotify - TOP50'[song],\n                'Base de dados - Spotify - TOP50'[artist]\n            )\n        )",
          interpretation: {
            pt: "Conta pares título–artista; distingue títulos associados a artistas diferentes.",
            en: "Counts title–artist pairs; distinguishes titles associated with different artists.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Popularidade Média",
          formula: "\n        AVERAGE('Base de dados - Spotify - TOP50'[popularity])",
          interpretation: {
            pt: "Média da pontuação nas entradas filtradas; compara popularidade do recorte, não streams.",
            en: "Average score across filtered entries; compares snapshot popularity, not streams.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Duração Média (min)",
          formula: "\n        DIVIDE([Duração Média (ms)], 60000)",
          interpretation: {
            pt: "Converte duração média para minutos; compara extensão das músicas representadas.",
            en: "Converts average duration to minutes; compares the length of represented songs.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Posição Média",
          formula: "\n        AVERAGE('Base de dados - Spotify - TOP50'[position])",
          interpretation: {
            pt: "Resume posição nas entradas; valores menores representam posições mais altas.",
            en: "Summarizes position across entries; lower values represent higher ranks.",
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
        {
          name: "Aparições por Song",
          formula: "\n        DIVIDE([Total Registros], [Total Songs Distintas])",
          interpretation: {
            pt: "Divide entradas por títulos distintos; em uma música indica aparições, no total indica média por título.",
            en: "Divides entries by distinct titles; for one song it indicates appearances, overall an average per title.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Índice de Performance Song",
          formula: "\n        [Popularidade Média] * DIVIDE(51 - [Posição Média], 50)",
          interpretation: {
            pt: "Combina popularidade média com posição média em uma fórmula própria; permite comparação relativa no modelo.",
            en: "Combines average popularity and position in a custom formula; supports relative comparison within the model.",
          },
          evidence: "A · PBIX / DAX",
        },
      ],
    },
    dashboard: {
      status: "complete",
      content: {
        pt: "Home funciona como ponto de entrada. Overview reúne volume, popularidade, duração e distribuições; Artists focaliza presença e repertório por artista; Songs compara faixas e posições. Botões com destinos de página explícitos conectam as quatro telas, todas em 1280 × 720.",
        en: "Home is the entry point. Overview brings together volume, popularity, duration and distributions; Artists focuses on artist presence and repertoire; Songs compares tracks and positions. Buttons with explicit page destinations connect all four 1280 × 720 pages.",
      },
      items: [
        {
          pt: "Overview: cartões, distribuições por tipo de álbum, conteúdo explícito e ano; séries mensais e comparação entre artistas.",
          en: "Overview: cards, album-type, explicit-content and year distributions; monthly series and artist comparisons.",
        },
        {
          pt: "Artists: entradas em primeiro lugar, títulos distintos e aparições por artista, com tabela de músicas, lançamento, tipo, duração e popularidade.",
          en: "Artists: number-one entries, distinct titles and appearances by artist, with a table of songs, release dates, types, duration and popularity.",
        },
        {
          pt: "Songs: entradas em primeiro lugar, popularidade média e aparições por música. Segmentadores de música e capa aparecem nas páginas analíticas.",
          en: "Songs: number-one entries, average popularity and appearances by song. Song and cover slicers appear on analytical pages.",
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
          en: "Distributions support investigation of the monitored snapshot; they do not represent the entire Spotify catalogue.",
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
        pt: "Apliquei Power Query, medidas DAX e parâmetros de campos. Organizei a navegação para passar da visão geral ao detalhe sem perder a pergunta da análise.",
        en: "I used Power Query, DAX measures and field parameters. I organized navigation to move from overview to detail while keeping the analytical question in view.",
      },
      items: [],
    },
    githubUrl: "",
    youtubeUrl: "",
    evidence: {
      confirmed: ["PBIX: modelo, fórmulas e definição do relatório", "Screenshots fornecidas"],
      inference:
        "Capacidades analíticas derivadas da estrutura observada; não representam impacto empresarial medido.",
    },
    limitations: [
      {
        pt: "Seis medidas dependem de single/compilation, mas o Power Query converte essas categorias para Solo/Compilado. Essas fórmulas precisam de revisão antes de serem apresentadas como indicadores validados.",
        en: "Six measures depend on single/compilation, but Power Query converts these categories to Solo/Compilado. These formulas require review before being presented as validated indicators.",
      },
      {
        pt: "O visual “Popularidade por Música” soma popularity; esse valor acumula pontuações nas aparições e não mede streams. Duração total soma durações dos registros, não horas ouvidas.",
        en: "The “Popularidade por Música” visual sums popularity; it accumulates scores across appearances and does not measure streams. Total duration sums record durations, not listening hours.",
      },
      {
        pt: "DISTINCTCOUNT(song) distingue títulos, não IDs de faixas. Contagens de conteúdo explícito e Top 10 contam entradas. “Artistas/Songs Distintos por Dia” divide o total distinto pelo número de datas, sem calcular a média das contagens diárias.",
        en: "DISTINCTCOUNT(song) distinguishes titles, not track IDs. Explicit-content and Top 10 counts count entries. “Artistas/Songs Distintos por Dia” divides the overall distinct count by the number of dates instead of averaging daily counts.",
      },
      {
        pt: "Eixos com apenas o nome do mês podem reunir anos diferentes. Não foi identificada uma página mobile dedicada neste arquivo.",
        en: "Axes containing only month names can combine different years. No dedicated mobile page was identified in this file.",
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
        pt: "Na screenshot Overview, Taylor Swift apresenta 85 títulos distintos, contra 30 de Travis Scott. Na página Artists, são exibidas 1.871 aparições para Taylor Swift e 860 para Billie Eilish. Comparações restritas aos filtros e dados exibidos.",
        en: "In the Overview screenshot, Taylor Swift has 85 distinct titles versus 30 for Travis Scott. Artists displays 1,871 appearances for Taylor Swift and 860 for Billie Eilish. These comparisons apply only to the displayed data and filters.",
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
      pt: "Uma leitura das vendas por país, produto e tipo de cliente, com faturamento, descontos, custo, lucro e margem. O relatório tem uma página desktop e uma composição em formato retrato.",
      en: "A view of sales by country, product and customer type, covering revenue, discounts, costs, profit and margin. The report includes a desktop page and a portrait composition.",
    },
    categoryKey: "sales",
    category: {
      pt: "BI · Vendas",
      en: "BI · Sales",
    },
    featured: false,
    technologies: ["Power BI", "Power Query", "DAX"],
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
        pt: "Planilha BD de um arquivo Excel local, identificada no Power Query. A base importada contém 700 registros, cinco países, cinco tipos de cliente e seis produtos.",
        en: "The BD sheet of a local Excel file, identified in Power Query. The imported dataset contains 700 records, five countries, five customer types and six products.",
      },
      entities: ["fVendas", "dCalendario", "Medidas"],
      fields: [
        "Data",
        "País",
        "Tipos de Clientes",
        "Produto",
        "Valor Total",
        "Valor Total c/ Desconto",
        "Custo Total",
        "Lucro",
        "Desconto",
      ],
      note: {
        pt: "Existem 16 datas distintas, todas no primeiro dia do mês, entre setembro de 2018 e dezembro de 2019. Não há identificador de venda que comprove uma transação única por linha.",
        en: "There are 16 distinct dates, all on the first day of the month, between September 2018 and December 2019. No sale identifier establishes a unique transaction per row.",
      },
    },
    treatment: {
      status: "complete",
      content: {
        pt: "O Power Query promove cabeçalhos, tipa valores financeiros como moeda e Data como data, remove as colunas Mês e Ano e remove a última linha com Table.RemoveLastN(..., 1). O motivo dessa remoção não é demonstrado pelo arquivo.",
        en: "Power Query promotes headers, types financial values as currency and Data as date, removes Mês and Ano, and removes the final row with Table.RemoveLastN(..., 1). The file does not establish the reason for that removal.",
      },
      items: [],
    },
    transformation: {
      status: "complete",
      content: {
        pt: "Sete medidas consolidam valores brutos, líquidos, descontos, custos, lucro, margem e faturamento médio. O calendário usa CALENDARAUTO(), com mês, ano e mês–ano derivados.",
        en: "Seven measures consolidate gross and net values, discounts, costs, profit, margin and average revenue. The calendar uses CALENDARAUTO(), with derived month, year and month–year fields.",
      },
      items: [],
    },
    modeling: {
      status: "complete",
      content: {
        pt: "fVendas relaciona Data a dCalendario[Date], em muitos-para-um, ativo e com filtro unidirecional do calendário para a base. País, produto e tipo de cliente permanecem como atributos da fato. Há uma tabela de medidas; não há dimensões comerciais separadas.",
        en: "fVendas relates Data to dCalendario[Date] through an active many-to-one relationship, with one-way filtering from calendar to fact. Country, product and customer type remain fact attributes. A measure table is present; separate commercial dimensions are not.",
      },
      entities: ["fVendas", "dCalendario", "Medidas"],
    },
    metrics: {
      status: "complete",
      items: [
        "Faturamento_Bruto",
        "Faturamento_liquido",
        "Descontos",
        "Custo",
        "Lucro",
        "margem",
        "FatMM",
      ],
      note: {
        pt: "Veja o que cada medida calcula e como pode ser usada na análise. As fórmulas DAX abaixo foram extraídas do modelo.",
        en: "See what each measure calculates and how it can be used in analysis. The DAX formulas below were extracted from the model.",
      },
      definitions: [
        {
          name: "Faturamento_Bruto",
          formula: "SUM(fVendas[Valor Total])",
          interpretation: {
            pt: "Soma Valor Total; referência bruta para comparação com o valor líquido.",
            en: "Sums Valor Total; a gross reference for comparison with the net value.",
          },
          evidence: "A · PBIX / DAX",
        },
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
            pt: "Soma a coluna Lucro; compara resultado absoluto dos segmentos, sem recalcular a regra da fonte.",
            en: "Sums the Lucro column; compares absolute segment results without recalculating the source rule.",
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
        {
          name: "FatMM",
          formula: "DIVIDE([Faturamento_liquido], DISTINCTCOUNT(fVendas[Data]))",
          interpretation: {
            pt: "Divide receita por datas distintas; corresponde a média por mês apenas na granularidade observada.",
            en: "Divides revenue by distinct dates; corresponds to a monthly average only at the observed grain.",
          },
          evidence: "A · PBIX / DAX",
        },
      ],
    },
    dashboard: {
      status: "complete",
      content: {
        pt: "Dashboard (1280 × 720) reúne cartões financeiros, evolução mensal, receita e margem por país e tipo de cliente, tabela por produto e filtro de ano. Mobile (720 × 1280) é uma página retrato separada, oculta na navegação padrão e acessível por botão.",
        en: "Dashboard (1280 × 720) combines financial cards, monthly trends, revenue and margin by country and customer type, a product table and a year filter. Mobile (720 × 1280) is a separate portrait page, hidden from standard navigation and reachable by button.",
      },
      items: [
        {
          pt: "A página retrato preserva evolução, comparações comerciais, tabela e filtro. Sua estrutura não contém os mesmos cartões de KPI da página desktop.",
          en: "The portrait page preserves trends, commercial comparisons, the table and filter. Its structure does not contain the same KPI cards as the desktop page.",
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
        pt: "Faturamento e lucro contam partes diferentes da história. O relatório permite comparar receita, custo e margem no mesmo recorte e investigar segmentos que vendem mais, mas apresentam menor rentabilidade.",
        en: "Revenue and profit tell different parts of the story. The report lets you compare revenue, cost and margin within the same selection and investigate segments with higher sales but lower profitability.",
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
        pt: "Construí um relatório com indicadores financeiros, filtros por país, produto e cliente e duas composições de página. A comparação entre receita e margem orienta a leitura.",
        en: "I built a report with financial indicators, country, product and customer filters, and two page compositions. Comparing revenue with margin guides the analysis.",
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
    evidence: {
      confirmed: ["PBIX: modelo, fórmulas e definição do relatório", "Screenshots fornecidas"],
      inference:
        "Capacidades analíticas derivadas da estrutura observada; não representam impacto empresarial medido.",
    },
    limitations: [
      {
        pt: "FatMM divide receita pelo número de datas distintas. No snapshot, cada data corresponde a um mês; a fórmula não garante média mensal se a granularidade da fonte mudar.",
        en: "FatMM divides revenue by the number of distinct dates. Each date corresponds to a month in this snapshot; the formula does not guarantee a monthly average if source granularity changes.",
      },
      {
        pt: "A página retrato comprova uma composição mobile dedicada, mas não comprova ativação automática do layout nativo de telefone do Power BI. A natureza real ou sintética dos dados não foi confirmada.",
        en: "The portrait page establishes a dedicated mobile composition, but not automatic activation of Power BI’s native phone layout. Whether the data is real or synthetic was not confirmed.",
      },
    ],
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
        pt: "Na imagem desktop, Grandes Empresas exibe faturamento de 19,6 milhões e margem de −4,9%; Online exibe 1,8 milhão e 72,7%. O contraste ilustra por que receita e margem devem ser analisadas juntas, no recorte exibido.",
        en: "In the desktop image, Grandes Empresas shows revenue of 19.6 million and a −4.9% margin; Online shows 1.8 million and 72.7%. This contrast illustrates why revenue and margin should be examined together within the displayed slice.",
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
      pt: "Como as vendas se distribuem entre lojas, produtos e vendedores? Duas páginas permitem comparar faturamento e registros de venda e aprofundar a análise de cada loja.",
      en: "How are sales distributed across stores, products and sellers? Two pages compare revenue and sales records and provide a closer look at each store.",
    },
    categoryKey: "sales",
    category: {
      pt: "BI · Vendas",
      en: "BI · Sales",
    },
    featured: false,
    technologies: ["Power BI", "Power Query", "DAX"],
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
        pt: "Consultas Loja1, Loja2 e Loja3 carregam planilhas Excel e são combinadas em fVendas. O modelo contém 1.000 registros, 20 produtos, nove vendedores e três lojas.",
        en: "Loja1, Loja2 and Loja3 queries load Excel worksheets and are combined into fVendas. The model contains 1,000 records, 20 products, nine salespeople and three stores.",
      },
      entities: [
        "fVendas",
        "dProdutos",
        "dVendedores",
        "dLojas",
        "dCalendario",
        "Medidas",
        "ProdutoEVendedores",
      ],
      fields: [
        "Cloja",
        "Matricula",
        "Código Produto",
        "PrecoU",
        "Qtde",
        "Data Venda",
        "TotalVendas",
      ],
      note: {
        pt: "A linha representa um registro de venda com produto, quantidade, preço, vendedor, loja e data. Não há identificador único de pedido na estrutura analisada. O período exibido é 2022–2023.",
        en: "Each row is a sales record with product, quantity, price, salesperson, store and date. The inspected structure has no unique order identifier. The displayed period is 2022–2023.",
      },
    },
    treatment: {
      status: "complete",
      content: {
        pt: "A sequência M recuperada comprova consolidação, tratamento textual, tipagem e filtragem de vendas finalizadas.",
        en: "The recovered M sequence confirms consolidation, text processing, type conversion and filtering to finalized sales.",
      },
      items: [
        {
          pt: "Combinação das três consultas; promoção de cabeçalhos; remoção da primeira linha após essa etapa; preenchimento para baixo do identificador de loja.",
          en: "Combination of three queries; header promotion; first-row removal after that step; fill-down of the store identifier.",
        },
        {
          pt: "Separação do texto de loja por “ -> ” e de preço/quantidade por “-”; conversão de chaves para texto, preço para moeda e quantidade para inteiro; filtro Status Venda = Finalizada.",
          en: "Store text split on “ -> ” and price/quantity on “-”; keys converted to text, price to currency and quantity to integer; filter Status Venda = Finalizada.",
        },
        {
          pt: "Remoção de duplicatas na dimensão de lojas e por matrícula em vendedores. Em produtos, correções Tevelisão → Televisão e Liqidificado → Liquidificador.",
          en: "Deduplication in the store dimension and by employee identifier in salespeople. Product corrections include Tevelisão → Televisão and Liqidificado → Liquidificador.",
        },
      ],
    },
    transformation: {
      status: "complete",
      content: {
        pt: "TotalVendas é uma coluna calculada como PrecoU × Qtde. Dez medidas incluem faturamento, média por registro, contagem de registros, produtos distintos, extremos de venda e totais por loja.",
        en: "TotalVendas is a calculated column equal to PrecoU × Qtde. Ten measures include revenue, average record value, record counts, distinct products, sales extrema and store totals.",
      },
      items: [
        {
          pt: "CALENDAR(MIN(Data Venda), MAX(Data Venda)) cria o calendário; colunas derivam mês, ano, dia da semana e fim do mês.",
          en: "CALENDAR(MIN(Data Venda), MAX(Data Venda)) creates the calendar; columns derive month, year, weekday and month-end.",
        },
        {
          pt: "ProdutoEVendedores usa NAMEOF para alternar o campo de análise entre produto e vendedor.",
          en: "ProdutoEVendedores uses NAMEOF to switch the analytical field between product and salesperson.",
        },
      ],
    },
    modeling: {
      status: "complete",
      content: {
        pt: "O núcleo de vendas tem estrutura dimensional: fVendas relaciona-se a dProdutos por código de produto, dVendedores por matrícula, dLojas por Cloja e dCalendario por data. As quatro relações são ativas, muitos-para-um e unidirecionais das dimensões para a fato.",
        en: "The sales core is dimensional: fVendas relates to dProdutos by product code, dVendedores by employee identifier, dLojas by Cloja and dCalendario by date. All four relationships are active, many-to-one and one-way from dimensions to fact.",
      },
      entities: [
        "fVendas",
        "dProdutos",
        "dVendedores",
        "dLojas",
        "dCalendario",
        "Medidas",
        "ProdutoEVendedores",
      ],
    },
    metrics: {
      status: "complete",
      items: ["Faturamento", "TicketMedio", "Qntde_Pedidos", "Produtos_distintos", "FatX"],
      note: {
        pt: "Veja o que cada medida calcula e como pode ser usada na análise. As fórmulas DAX abaixo foram extraídas do modelo.",
        en: "See what each measure calculates and how it can be used in analysis. The DAX formulas below were extracted from the model.",
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
            pt: "Conta valores numéricos preenchidos em TotalVendas; compara frequência de registros.",
            en: "Counts populated numeric TotalVendas values; compares record frequency.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "Produtos_distintos",
          formula: "DISTINCTCOUNT(fVendas[Código Produto])",
          interpretation: {
            pt: "Conta códigos de produto distintos na fato filtrada; mede variedade vendida.",
            en: "Counts distinct product codes in the filtered fact; measures variety sold.",
          },
          evidence: "A · PBIX / DAX",
        },
        {
          name: "FatX",
          formula:
            "\n        SUMX(fVendas, \n            fVendas[PrecoU]\n                *fVendas[Qtde])",
          interpretation: {
            pt: "Recalcula preço × quantidade com SUMX; oferece uma agregação por linha do faturamento.",
            en: "Recalculates price × quantity using SUMX; provides a row-wise revenue aggregation.",
          },
          evidence: "A · PBIX / DAX",
        },
      ],
    },
    dashboard: {
      status: "complete",
      content: {
        pt: "Visão Geral apresenta totais por loja, evolução temporal, mapa por cidade, treemap e Top 3 vendedores. Detalhamento Loja concentra indicadores, período e investigação por produto/vendedor. Botões ligam as duas páginas de 1280 × 720.",
        en: "Visão Geral presents store totals, time trends, a city map, a treemap and Top 3 salespeople. Detalhamento Loja focuses on indicators, period selection and product/salesperson investigation. Buttons connect the two 1280 × 720 pages.",
      },
      items: [
        {
          pt: "Há ainda a página oculta TP_QTDEPEDIDO, de 320 × 240, configurada como tooltip. Ela complementa a leitura sem ser uma terceira página principal.",
          en: "A hidden 320 × 240 page, TP_QTDEPEDIDO, is configured as a tooltip. It complements reading without serving as a third main page.",
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
    evidence: {
      confirmed: ["PBIX: modelo, fórmulas e definição do relatório", "Screenshots fornecidas"],
      inference:
        "Capacidades analíticas derivadas da estrutura observada; não representam impacto empresarial medido.",
    },
    limitations: [
      {
        pt: "Qntde_Pedidos usa COUNT(TotalVendas): conta registros numéricos não vazios, não pedidos distintos. TicketMedio usa AVERAGE(TotalVendas): é média por registro, sem comprovação de ticket por pedido. Os nomes originais foram preservados e sua semântica explicitada.",
        en: "Qntde_Pedidos uses COUNT(TotalVendas): it counts nonblank numeric records, not distinct orders. TicketMedio uses AVERAGE(TotalVendas): it is an average per record, not a verified order-level average. Original names are preserved and their semantics clarified.",
      },
      {
        pt: "Não foi identificada página mobile dedicada. A natureza real ou sintética da base não foi confirmada.",
        en: "No dedicated mobile page was identified. Whether the dataset is real or synthetic was not confirmed.",
      },
    ],
    challenges: [
      {
        challenge: {
          pt: "Consolidar três origens de loja.",
          en: "Consolidate three store sources.",
        },
        solution: {
          pt: "Table.Combine e tratamentos de loja, preço e quantidade antes da modelagem.",
          en: "Table.Combine and store, price and quantity processing before modeling.",
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
        pt: "Na screenshot Visão Geral, Filial 2 apresenta 810.420, acima de Filial 3 (721.000) e Matriz (581.600). No treemap, Colchão apresenta 70 registros e Cama Box, 64; esses valores não devem ser interpretados como unidades vendidas.",
        en: "In the Visão Geral screenshot, Filial 2 shows 810,420, above Filial 3 (721,000) and Matriz (581,600). The treemap shows 70 records for Colchão and 64 for Cama Box; these values must not be interpreted as units sold.",
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
      pt: "Gastos por localização e veículo em uma versão pública com dados fictícios. A comparação mensal requer a validação descrita no case.",
      en: "Spending by location and vehicle in a public version with fictional data. Monthly comparison requires the validation described in the case study.",
    },
    shortDescription: {
      pt: "Um dashboard para acompanhar gastos e registros de abastecimento por veículo e localização, criado a partir de uma necessidade real. A versão pública usa dados e placas fictícios.",
      en: "A dashboard for tracking fuel spending and records by vehicle and location, built for a real need. The public version uses fictional data and license plates.",
    },
    categoryKey: "fleet",
    category: {
      pt: "BI · Frota",
      en: "BI · Fleet",
    },
    featured: false,
    technologies: ["Power BI", "Power Query", "DAX"],
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
        pt: "Criei este projeto para acompanhar abastecimentos em uma situação real de trabalho. Para apresentá-lo no portfólio, substituí dados, placas e identificadores por informações fictícias. Os valores públicos servem para demonstrar o relatório.",
        en: "I created this project to track fuel records in a real work situation. For the portfolio, I replaced data, license plates and identifiers with fictional information. The public figures demonstrate how the report works.",
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
        pt: "Oferecer uma visão de monitoramento com total de gastos, contagem de registros e recortes geográficos e por veículo, mantendo a apresentação pública desvinculada de identificadores reais.",
        en: "Provide a monitoring view with total expenditure, record counts, geographic and vehicle slices, while keeping the public presentation separate from real identifiers.",
      },
      items: [],
    },
    data: {
      status: "complete",
      source: {
        pt: "Planilha Excel de movimentos de abastecimento, carregada pelo Power Query. O portfólio apresenta somente a versão ilustrativa do dashboard.",
        en: "An Excel spreadsheet of fuel records, loaded through Power Query. The portfolio shows only the illustrative version of the dashboard.",
      },
      entities: ["movimentos_detalhados (4)", "dCalendario"],
      fields: [
        "Data",
        "Cidade",
        "UF",
        "Tp. Abastecimento",
        "Produto",
        "Qtde",
        "Valor Unitário",
        "Valor Item",
        "Placa",
        "Valor Total da venda",
      ],
      note: {
        pt: "As medidas usam registros com valor de venda, sem um identificador único de evento confirmado na estrutura. Valores e placas desta versão são fictícios.",
        en: "Measures use records containing a sale value, with no confirmed unique event identifier in the structure. Values and license plates in this version are fictional.",
      },
    },
    treatment: {
      status: "complete",
      content: {
        pt: "O Power Query promove cabeçalhos, define tipos, seleciona campos, converte valores financeiros para moeda e Data de datetime para date; uma coluna de nota fiscal é removida em etapa posterior. A leitura técnica foi restrita a estrutura e fórmulas, sem publicar registros identificadores.",
        en: "Power Query promotes headers, sets types, selects fields, converts financial values to currency and Data from datetime to date; an invoice column is removed in a later step. Technical inspection was limited to structure and formulas, without publishing identifying records.",
      },
      items: [],
    },
    transformation: {
      status: "complete",
      content: {
        pt: "Duas medidas consolidam valor total e contagem de registros com valor preenchido. O calendário deriva dos limites de Data da tabela movimentos_detalhados (4).",
        en: "Two measures consolidate total value and the count of records with a populated value. The calendar derives from the Data boundaries in movimentos_detalhados (4).",
      },
      items: [],
    },
    modeling: {
      status: "partial",
      content: {
        pt: "No arquivo sem “(1)”, movimentos_detalhados (4)[Data] relaciona-se ativamente ao calendário, em muitos-para-um e filtro unidirecional. Na versão “(1)”, o calendário está ligado a movimentos_detalhados (5), enquanto as medidas continuam na tabela (4). Essa diferença interrompe o caminho esperado de filtro mensal para os indicadores.",
        en: "In the file without “(1)”, movimentos_detalhados (4)[Data] has an active many-to-one, one-way relationship with the calendar. In version “(1)”, the calendar relates to movimentos_detalhados (5), while measures remain on table (4). This difference breaks the expected monthly filter path to the indicators.",
      },
      entities: [
        "movimentos_detalhados (4)",
        "movimentos_detalhados (5) — versão (1)",
        "dCalendario",
      ],
    },
    metrics: {
      status: "complete",
      items: ["TotalAbastecimento", "ContAbastecimentos"],
      note: {
        pt: "Veja o que cada medida calcula e como pode ser usada na análise. As fórmulas DAX abaixo foram extraídas do modelo.",
        en: "See what each measure calculates and how it can be used in analysis. The DAX formulas below were extracted from the model.",
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
        pt: "Apresentação oferece entrada por botões para Dashboard. A página analítica combina total gasto, contagem de registros, comparações por UF, cidade e placa e um segmentador de mês. Ambas as páginas têm 1280 × 720.",
        en: "Apresentação provides button navigation to Dashboard. The analytical page combines expenditure, record counts, comparisons by state, city and plate, and a month slicer. Both pages are 1280 × 720.",
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
        pt: "O relatório permite comparar a concentração de gastos por estado, cidade e veículo. Para analisar a evolução mensal, é necessário corrigir e validar o relacionamento temporal identificado na versão publicada.",
        en: "The report supports comparisons of spending by state, city and vehicle. Monthly analysis requires correcting and validating the time relationship identified in the published version.",
      },
      items: [],
    },
    results: {
      status: "complete",
      content: {
        pt: "Construí uma visão de gastos e registros de abastecimento por localização e veículo. A versão pública usa dados fictícios. A análise mensal permanece com uma pendência de relacionamento temporal, explicada neste case.",
        en: "I built a view of fuel spending and records by location and vehicle. The public version uses fictional data. Monthly analysis still has a time-relationship issue, explained in this case study.",
      },
      items: [],
    },
    learnings: {
      status: "complete",
      content: {
        pt: "Preparei registros operacionais e construí medidas e filtros para acompanhar os gastos. A revisão do modelo também mostrou onde o caminho entre calendário e medidas precisa ser validado.",
        en: "I prepared operational records and built measures and filters to track spending. Reviewing the model also showed where the path between the calendar and measures needs validation.",
      },
      items: [],
    },
    githubUrl: "",
    youtubeUrl: "",
    evidence: {
      confirmed: ["PBIX: modelo, fórmulas e definição do relatório", "Screenshots fornecidas"],
      inference:
        "Capacidades analíticas derivadas da estrutura observada; não representam impacto empresarial medido.",
    },
    limitations: [
      {
        pt: "A imagem repete aproximadamente R$ 442 mil em janeiro, fevereiro, março e abril. Em conjunto com o relacionamento encontrado, isso indica necessidade de correção/validação do filtro temporal; não comprova estabilidade mensal do gasto.",
        en: "The image repeats approximately R$442 thousand in January, February, March and April. Together with the inspected relationship, this indicates a need to correct/validate time filtering; it does not demonstrate stable monthly spending.",
      },
      {
        pt: "A contagem representa linhas com valor numérico, não litros nem eventos distintos comprovados. Não foi identificada uma página mobile dedicada.",
        en: "The count represents rows with numeric values, not litres or verified distinct events. No dedicated mobile page was identified.",
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
          pt: "Versão pública com dados e identificadores fictícios, conforme declaração do autor.",
          en: "A public version with fictional data and identifiers, according to the author.",
        },
      },
    ],
    observations: [
      {
        pt: "Na screenshot fictícia, MT apresenta 177 mil e GO, 70 mil. Os cartões mostram aproximadamente R$ 442 mil e 2.034 registros. Esses números ilustram a composição do dashboard e não são resultados da empresa real.",
        en: "In the fictional screenshot, MT shows 177 thousand and GO 70 thousand. Cards display approximately R$442 thousand and 2,034 records. These figures illustrate the dashboard composition and are not results from the real company.",
      },
    ],
  },
];
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const featuredProject = projects.find((project) => project.featured) ?? projects[0]!;
