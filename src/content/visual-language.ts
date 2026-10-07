import type { L } from "@/lib/i18n";

/** Diagramas conceituais: etapas e recortes, nunca séries ou resultados quantitativos. */
export const visualLanguage = {
  method: { pt: "Meu processo de análise", en: "My analytical process" },
  methodSteps: [
    { pt: "Entender", en: "Understand" },
    { pt: "Organizar", en: "Organize" },
    { pt: "Estruturar", en: "Structure" },
    { pt: "Analisar", en: "Analyze" },
    { pt: "Comunicar", en: "Communicate" },
  ] satisfies L[],
  methodDescriptions: [
    {
      pt: "Definir o contexto e as perguntas que orientam a análise.",
      en: "Define the context and questions that guide the analysis.",
    },
    {
      pt: "Preparar uma base consistente antes de criar comparações.",
      en: "Prepare consistent data before making comparisons.",
    },
    {
      pt: "Relacionar informações e definir métricas coerentes com o problema.",
      en: "Connect information and define measures that address the problem.",
    },
    {
      pt: "Comparar, segmentar e investigar a partir das perguntas definidas.",
      en: "Compare, segment and investigate based on the questions defined.",
    },
    {
      pt: "Organizar indicadores e visualizações para tornar a leitura clara e permitir aprofundamento.",
      en: "Organize indicators and visuals for clear interpretation and further exploration.",
    },
  ] satisfies L[],
  projectLabel: { pt: "Percurso de leitura", en: "Reading path" },
  projectNote: {
    pt: "Temas que orientam a exploração do relatório.",
    en: "Topics that guide exploration of the report.",
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
