/**
 * Conteúdo editável — experiência profissional (PT e EN).
 * Somente informações reais já fornecidas são registradas aqui.
 */
import type { L } from "@/lib/i18n";

export type ExperienceItem = {
  role: L;
  company: L;
  period: L;
  description: L;
  activities: L[];
  dataWork: L[];
};

export const experience: ExperienceItem[] = [
  {
    role: {
      pt: "Área administrativa",
      en: "Administration",
    },
    company: {
      pt: "Empresa de transporte",
      en: "Transportation company",
    },
    period: {
      pt: "Atual",
      en: "Current",
    },
    description: {
      pt: "Na empresa de transporte onde trabalho, acompanho informações que fazem parte da operação: compras, indicadores e registros administrativos. Essa rotina dá uma referência prática ao que estudo em BI.",
      en: "At the transportation company where I work, I deal with information used in daily operations: purchasing, indicators and administrative records. That routine gives my BI studies a practical reference.",
    },
    activities: [
      {
        pt: "Atuo nas compras e nas atividades administrativas de apoio à operação.",
        en: "Handle purchasing and administrative tasks that support operations.",
      },
      {
        pt: "Utilizo SAP ERP e SAT nas rotinas administrativas.",
        en: "Use SAP ERP and SAT in administrative work.",
      },
    ],
    dataWork: [
      {
        pt: "Acompanho indicadores e informações operacionais.",
        en: "Monitor indicators and operational information.",
      },
      {
        pt: "Utilizo Excel e Power BI no trabalho com dados da rotina.",
        en: "Use Excel and Power BI for day-to-day data work.",
      },
    ],
  },
];
