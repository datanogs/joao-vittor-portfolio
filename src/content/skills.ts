import type { L } from "@/lib/i18n";
export type SkillGroup = {
  category: L;
  tools: { name: string; context: L }[];
};
export const heroStack = ["Power BI", "Power Query", "DAX", "Excel"];
export const skillGroups: SkillGroup[] = [
  {
    category: {
      pt: "BI e visualização",
      en: "BI and visualization",
    },
    tools: [
      {
        name: "Power BI",
        context: {
          pt: "Construo relatórios de ranking musical, vendas e abastecimentos, com páginas de visão geral, filtros e detalhamento.",
          en: "I build reports on music rankings, sales and fuel records, with overview pages, filters and detailed views.",
        },
      },
    ],
  },
  {
    category: {
      pt: "Preparação dos dados",
      en: "Data preparation",
    },
    tools: [
      {
        name: "Excel",
        context: {
          pt: "Utilizo na rotina administrativa e no trabalho com dados. Planilhas também são a fonte dos dashboards do portfólio.",
          en: "I use it in administrative and data work. Spreadsheets also supply the data for the portfolio dashboards.",
        },
      },
      {
        name: "Power Query",
        context: {
          pt: "No projeto de vendas, reúno as bases de três lojas; no Spotify, padronizo categorias e atributos para manter consistência nos filtros e agrupamentos.",
          en: "In the sales project, I combine datasets from three stores; in Spotify, I standardize categories and attributes for consistent filtering and grouping.",
        },
      },
    ],
  },
  {
    category: {
      pt: "Modelagem e cálculos",
      en: "Modeling and calculations",
    },
    tools: [
      {
        name: "DAX",
        context: {
          pt: "No Spotify, distingo aparições de títulos únicos. No XSales, relaciono lucro e faturamento para comparar a margem entre segmentos.",
          en: "In Spotify, I distinguish appearances from unique titles. In XSales, I relate profit to revenue to compare margins across segments.",
        },
      },
      {
        name: "SQL",
        context: {
          pt: "Estudo consultas a dados, com o curso de Fundamentos de SQL concluído. Os projetos publicados aqui usam Power Query e DAX.",
          en: "I am studying data queries and have completed SQL Fundamentals. The projects published here use Power Query and DAX.",
        },
      },
    ],
  },
  {
    category: {
      pt: "Estudos complementares",
      en: "Further studies",
    },
    tools: [
      {
        name: "Python",
        context: {
          pt: "Estudo programação aplicada à análise de dados e automação.",
          en: "I am studying programming for data analysis and automation.",
        },
      },
      {
        name: "APIs · Git · GitHub",
        context: {
          pt: "Estudo integração por APIs. Utilizo Git e GitHub no versionamento deste portfólio.",
          en: "I study API integration and use Git and GitHub to version this portfolio.",
        },
      },
    ],
  },
];
