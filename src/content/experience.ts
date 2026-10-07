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
      pt: "Atuo na área administrativa de uma empresa de transporte, com compras, registros e acompanhamento de indicadores. Utilizo SAP ERP e SAT nas rotinas administrativas, além de Excel e Power BI no trabalho com dados.",
      en: "I work in administration at a transportation company, handling purchasing, records and indicators. I use SAP ERP and SAT for administrative tasks, and Excel and Power BI for data work.",
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
