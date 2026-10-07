import type { L } from "@/lib/i18n";

/** Diagramas conceituais: etapas e recortes, nunca séries ou resultados quantitativos. */
export const visualLanguage = {
  method: { pt: "Dos dados à decisão", en: "From data to decision" },
  methodSteps: [
    { pt: "Dados", en: "Data" },
    { pt: "Tratamento", en: "Transform" },
    { pt: "Modelo", en: "Model" },
    { pt: "Análise", en: "Analyze" },
    { pt: "Decisão", en: "Decide" },
  ] satisfies L[],
  projectLabel: { pt: "Percurso de leitura", en: "Reading path" },
  projectNote: {
    pt: "Conexões conceituais entre os temas do relatório; não representam valores ou relações causais.",
    en: "Conceptual connections between report topics; these do not represent values or causal relationships.",
  },
  projects: {
    "spotify-top-50": [
      { pt: "Ranking", en: "Ranking" },
      { pt: "Artistas", en: "Artists" },
      { pt: "Músicas", en: "Songs" },
      { pt: "Popularidade", en: "Popularity" },
    ],
    xsales: [
      { pt: "Receita", en: "Revenue" },
      { pt: "Custo", en: "Cost" },
      { pt: "Lucro", en: "Profit" },
      { pt: "Margem", en: "Margin" },
    ],
    "acompanhamento-vendas": [
      { pt: "Visão geral", en: "Overview" },
      { pt: "Loja", en: "Store" },
      { pt: "Vendedor", en: "Salesperson" },
      { pt: "Produto", en: "Product" },
    ],
    "gestao-abastecimentos-frota-leve": [
      { pt: "Mês", en: "Month" },
      { pt: "UF", en: "State" },
      { pt: "Cidade", en: "City" },
      { pt: "Veículo", en: "Vehicle" },
    ],
  } satisfies Record<string, L[]>,
};
