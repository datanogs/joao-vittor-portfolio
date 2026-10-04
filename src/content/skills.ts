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
          pt: "Construo relatórios com páginas, filtros e visuais para explorar músicas, vendas e abastecimentos. Os quatro cases mostram esse trabalho.",
          en: "I build reports with pages, filters and visuals to explore music, sales and fuel data. The four case studies show this work.",
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
          pt: "Importo planilhas, ajusto tipos e categorias e combino bases. No case de vendas, reúno os dados das lojas antes da análise.",
          en: "I import spreadsheets, adjust types and categories, and combine datasets. In the sales tracking case, I bring store data together before analysis.",
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
          pt: "Construo medidas de faturamento, margem, contagem e posição. Nos cases, apresento as fórmulas e explico o que calculam.",
          en: "I build revenue, margin, count and ranking measures. The case studies include the formulas and explain what they calculate.",
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
          pt: "Exploro integração de dados, versionamento e documentação para apoiar a construção dos projetos.",
          en: "I am exploring data integration, version control and documentation to support my project work.",
        },
      },
    ],
  },
];
