import type { L } from "@/lib/i18n";
export type SkillGroup = {
  category: L;
  tools: { name: string; context: L }[];
};
export const heroStack = ["Power BI", "Power Query", "DAX", "Excel"];
export const skillGroups: SkillGroup[] = [
  {
    category: {
      pt: "BI aplicado nos cases",
      en: "BI in the case studies",
    },
    tools: [
      {
        name: "Power BI",
        context: {
          pt: "Relatórios navegáveis de Spotify, XSales, vendas e abastecimentos; páginas, filtros e visuais organizados por pergunta analítica.",
          en: "Navigable reports for Spotify, XSales, sales and refueling; pages, filters and visuals organized around analytical questions.",
        },
      },
      {
        name: "Power Query",
        context: {
          pt: "Importação de planilhas, definição de tipos, padronização de categorias e combinação das bases de lojas no case Acompanhamento de Vendas.",
          en: "Spreadsheet import, type conversion, category standardization and store-data combination in the sales tracking case study.",
        },
      },
      {
        name: "DAX",
        context: {
          pt: "Medidas de faturamento, margem, contagem, popularidade e posição. As fórmulas e suas interpretações estão nos cases.",
          en: "Measures for revenue, margin, counts, popularity and position. Formulas and their interpretations appear in the case studies.",
        },
      },
    ],
  },
  {
    category: {
      pt: "Rotina profissional",
      en: "Professional routine",
    },
    tools: [
      {
        name: "Excel",
        context: {
          pt: "Ferramenta presente nas atividades administrativas e no trabalho com dados; também é fonte dos dashboards deste portfólio.",
          en: "Used in administrative work and data-related activities; it also supplies data to this portfolio’s dashboards.",
        },
      },
      {
        name: "SAP ERP · SAT",
        context: {
          pt: "Sistemas presentes na rotina administrativa da empresa de transporte, em um contexto de compras e informações operacionais.",
          en: "Systems used in the transportation company’s administrative routine, in the context of purchasing and operational information.",
        },
      },
    ],
  },
  {
    category: {
      pt: "Desenvolvimento técnico",
      en: "Technical development",
    },
    tools: [
      {
        name: "SQL",
        context: {
          pt: "Estudo de fundamentos de consulta a dados, com curso de Fundamentos de SQL concluído.",
          en: "Study of data-query fundamentals, supported by a completed SQL Fundamentals course.",
        },
      },
      {
        name: "Python",
        context: {
          pt: "Área de estudo voltada à análise de dados e automação.",
          en: "An area of study focused on data analysis and automation.",
        },
      },
      {
        name: "APIs · Git · GitHub",
        context: {
          pt: "Temas de desenvolvimento contínuo em integração de dados, versionamento e documentação de projetos.",
          en: "Areas of continuing study in data integration, version control and project documentation.",
        },
      },
    ],
  },
];
