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
      pt: "Atuação na área administrativa",
      en: "Work in administration",
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
      pt: "Trabalho na área administrativa de uma empresa de transporte, em uma rotina que envolve compras, acompanhamento de indicadores e informações operacionais. O uso de SAP ERP, SAT, Excel e Power BI conecta esse contexto de negócio ao meu desenvolvimento em Dados/BI.",
      en: "I work in administration at a transportation company, in a routine involving purchasing, indicator monitoring and operational information. Using SAP ERP, SAT, Excel and Power BI connects this business context with my development in Data/BI.",
    },
    activities: [
      {
        pt: "Compras e atividades administrativas de apoio à operação de transporte.",
        en: "Purchasing and administrative activities supporting transportation operations.",
      },
      {
        pt: "Uso de SAP ERP e SAT no contexto das rotinas administrativas.",
        en: "Use of SAP ERP and SAT in administrative routines.",
      },
    ],
    dataWork: [
      {
        pt: "Acompanhamento de indicadores e informações operacionais.",
        en: "Monitoring indicators and operational information.",
      },
      {
        pt: "Uso de Excel e Power BI nas atividades relacionadas a dados.",
        en: "Use of Excel and Power BI in data-related activities.",
      },
    ],
  },
];
