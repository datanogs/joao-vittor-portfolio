/**
 * Conteúdo editável — formação acadêmica.
 *
 * Regras:
 * - Não invente instituição, datas ou detalhes.
 * - Use string vazia para informações ainda não fornecidas.
 * - Mantenha pt/en sincronizados quando o campo for traduzível.
 */
import type { L } from "@/lib/i18n";

export type EducationItem = {
  id: string;
  degree: L;
  field: L;
  institution: string;
  status: L;
  startDate: string;
  endDate: string;
  description: L;
};

export const education: EducationItem[] = [
  {
    id: "ciencia-da-computacao",
    degree: {
      pt: "Ciência da Computação",
      en: "Computer Science",
    },
    field: {
      pt: "",
      en: "",
    },
    institution: "",
    status: {
      pt: "Cursando",
      en: "In progress",
    },
    startDate: "",
    endDate: "",
    description: {
      pt: "",
      en: "",
    },
  },
  {
    id: "mba-supply-chain-management",
    degree: {
      pt: "MBA em Supply Chain Management",
      en: "MBA in Supply Chain Management",
    },
    field: {
      pt: "",
      en: "",
    },
    institution: "",
    status: {
      pt: "Concluído",
      en: "Completed",
    },
    startDate: "",
    endDate: "",
    description: {
      pt: "",
      en: "",
    },
  },
  {
    id: "cst-logistica",
    degree: {
      pt: "CST em Logística",
      en: "Technology Degree in Logistics",
    },
    field: {
      pt: "",
      en: "",
    },
    institution: "",
    status: {
      pt: "Concluído",
      en: "Completed",
    },
    startDate: "",
    endDate: "",
    description: {
      pt: "",
      en: "",
    },
  },
];
