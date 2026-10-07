import type { L } from "@/lib/i18n";
export type SkillGroup = {
  category: L;
  status: "inUse" | "developing";
  tools: { name: string; context: L }[];
};
export const heroStack = ["Power BI", "Power Query", "DAX", "Excel"];
export const skillGroups: SkillGroup[] = [
  {
    category: { pt: "Organização e preparação", en: "Organization and preparation" },
    status: "inUse",
    tools: [
      {
        name: "Excel",
        context: {
          pt: "Utilizo Excel para organizar e conferir dados, estruturar tabelas e acompanhar informações da rotina profissional. Também preparo bases para análise e uso em outras ferramentas.",
          en: "I use Excel to organize and check data, structure tables and track information in my day-to-day work. I also prepare datasets for analysis and use in other tools.",
        },
      },
      {
        name: "Power Query",
        context: {
          pt: "Importo e combino fontes, corrijo inconsistências e padronizo valores, tipos e colunas. Preparo as bases para que filtros, agrupamentos e cálculos partam de uma estrutura consistente.",
          en: "I import and combine sources, correct inconsistencies and standardize values, data types and columns. I prepare datasets so filtering, grouping and calculations use a consistent structure.",
        },
      },
    ],
  },
  {
    category: { pt: "Business Intelligence e análise", en: "Business Intelligence and analysis" },
    status: "inUse",
    tools: [
      {
        name: "Power BI",
        context: {
          pt: "Estruturo modelos analíticos e relacionamentos e construo dashboards com indicadores, visualizações e filtros. Organizo a navegação e a hierarquia visual para conectar a visão geral ao detalhamento.",
          en: "I structure analytical models and relationships and build dashboards with measures, visuals and filters. I organize navigation and visual hierarchy to connect the overview with detailed analysis.",
        },
      },
      {
        name: "DAX",
        context: {
          pt: "Crio medidas para agregações, percentuais, rankings e comparações. Trabalho o contexto de filtro para que os indicadores respondam ao período e aos recortes selecionados.",
          en: "I write measures for aggregations, percentages, rankings and comparisons. I use filter context so indicators respond to the selected period and analytical breakdowns.",
        },
      },
    ],
  },
  {
    category: { pt: "Dados e programação", en: "Data and programming" },
    status: "developing",
    tools: [
      {
        name: "SQL",
        context: {
          pt: "Estou desenvolvendo SQL para consultar e explorar dados relacionais, com foco na organização de consultas e na seleção das informações necessárias à análise.",
          en: "I am developing my SQL skills to query and explore relational data, focusing on structuring queries and selecting the information needed for analysis.",
        },
      },
      {
        name: "Python",
        context: {
          pt: "Estou desenvolvendo Python com foco em programação, análise de dados e automação de tarefas.",
          en: "I am developing my Python skills for programming, data analysis and task automation.",
        },
      },
      {
        name: "APIs",
        context: {
          pt: "Estudo o consumo de dados de fontes externas e a integração entre sistemas por APIs, com foco em aplicações de dados e automação.",
          en: "I am studying how to retrieve data from external sources and connect systems through APIs, with a focus on data applications and automation.",
        },
      },
    ],
  },
  {
    category: { pt: "Versionamento e desenvolvimento", en: "Version control and development" },
    status: "inUse",
    tools: [
      {
        name: "Git",
        context: {
          pt: "Utilizo Git para registrar alterações e manter o histórico do desenvolvimento deste portfólio.",
          en: "I use Git to track changes and maintain this portfolio’s development history.",
        },
      },
      {
        name: "GitHub",
        context: {
          pt: "Utilizo GitHub para hospedar e organizar o repositório do portfólio, manter sua documentação e acompanhar as versões publicadas.",
          en: "I use GitHub to host and organize the portfolio repository, maintain its documentation and track published versions.",
        },
      },
    ],
  },
];
