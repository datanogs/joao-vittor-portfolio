/**
 * Conteúdo editável — certificados reais.
 *
 * Fonte: PDFs fornecidos para o portfólio. Não adicione metadados que não
 * estejam sustentados pelo documento correspondente.
 */
import type { L } from "@/lib/i18n";

export type Certification = {
  id: string;
  title: L;
  issuer: string;
  category: L;
  date: L;
  sortDate: string;
  workloadHours?: number;
  technologies: string[];
  topics: string[];
  pdfPath: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    id: "fundamentos-excel",
    title: { pt: "Fundamentos de Excel", en: "Excel Fundamentals" },
    issuer: "Daxus",
    category: { pt: "Excel", en: "Excel" },
    date: { pt: "07/02/2026", en: "Feb 7, 2026" },
    sortDate: "2026-02-07",
    workloadHours: 7,
    technologies: ["Excel"],
    topics: ["Fundamentos de Excel"],
    pdfPath: "/certificates/fundamentos-excel.pdf",
  },
  {
    id: "analise-dados-excel",
    title: { pt: "Análise de Dados com Excel", en: "Data Analysis with Excel" },
    issuer: "Daxus",
    category: { pt: "Excel", en: "Excel" },
    date: { pt: "12/02/2026", en: "Feb 12, 2026" },
    sortDate: "2026-02-12",
    workloadHours: 6,
    technologies: ["Excel"],
    topics: ["Análise de Dados"],
    pdfPath: "/certificates/analise-dados-excel.pdf",
  },
  {
    id: "dashboards-profissionais-excel",
    title: { pt: "Dashboards profissionais com Excel", en: "Professional Dashboards with Excel" },
    issuer: "Daxus",
    category: { pt: "Excel", en: "Excel" },
    date: { pt: "17/02/2026", en: "Feb 17, 2026" },
    sortDate: "2026-02-17",
    workloadHours: 7,
    technologies: ["Excel"],
    topics: ["Dashboards"],
    pdfPath: "/certificates/dashboards-profissionais-excel.pdf",
  },
  {
    id: "ia-storytelling-excel",
    title: {
      pt: "Inteligência Artificial e Storytelling no Excel",
      en: "Artificial Intelligence and Storytelling in Excel",
    },
    issuer: "Daxus",
    category: { pt: "Excel", en: "Excel" },
    date: { pt: "20/02/2026", en: "Feb 20, 2026" },
    sortDate: "2026-02-20",
    workloadHours: 3,
    technologies: ["Excel", "Inteligência Artificial"],
    topics: ["Storytelling"],
    pdfPath: "/certificates/ia-storytelling-excel.pdf",
  },
  {
    id: "dominando-macros-vba",
    title: { pt: "Dominando Macros e VBA", en: "Mastering Macros and VBA" },
    issuer: "Daxus",
    category: { pt: "Macros e VBA", en: "Macros and VBA" },
    date: { pt: "26/02/2026", en: "Feb 26, 2026" },
    sortDate: "2026-02-26",
    workloadHours: 10,
    technologies: ["VBA"],
    topics: ["Macros", "VBA"],
    pdfPath: "/certificates/dominando-macros-vba.pdf",
  },
  {
    id: "expert-excel",
    title: { pt: "Formação Expert em Excel", en: "Expert in Excel Program" },
    issuer: "Centro Universitário de Tecnologia de Curitiba (UNIFATEC) · Daxus Brasil",
    category: { pt: "Excel", en: "Excel" },
    date: { pt: "04/03/2026", en: "Mar 4, 2026" },
    sortDate: "2026-03-04",
    workloadHours: 60,
    technologies: ["Excel"],
    topics: [
      "Fundamentos de Excel",
      "Análise de dados",
      "Dashboards",
      "Inteligência Artificial",
      "Storytelling",
      "Programação no Excel",
    ],
    pdfPath: "/certificates/expert-excel-unifatec-daxus.pdf",
  },
  {
    id: "workshop-dados-ia",
    title: {
      pt: "Workshop de Análise de Dados com Inteligência Artificial",
      en: "Data Analysis with Artificial Intelligence Workshop",
    },
    issuer: "Daxus Brasil",
    category: { pt: "Dados + IA", en: "Data + AI" },
    date: { pt: "14–15/03/2026", en: "Mar 14–15, 2026" },
    sortDate: "2026-03-15",
    workloadHours: 16,
    technologies: ["Power BI", "Inteligência Artificial"],
    topics: ["Análise de Dados", "Dashboards", "Inteligência Artificial"],
    pdfPath: "/certificates/workshop-dados-ia.pdf",
  },
  {
    id: "fundamentos-power-bi",
    title: { pt: "Fundamentos de Power BI", en: "Power BI Fundamentals" },
    issuer: "Daxus",
    category: { pt: "Power BI", en: "Power BI" },
    date: { pt: "26/03/2026", en: "Mar 26, 2026" },
    sortDate: "2026-03-26",
    workloadHours: 12,
    technologies: ["Power BI"],
    topics: ["Fundamentos de Power BI"],
    pdfPath: "/certificates/fundamentos-power-bi.pdf",
  },
  {
    id: "primeiros-passos-ia",
    title: {
      pt: "Primeiros passos na Inteligência Artificial",
      en: "First Steps in Artificial Intelligence",
    },
    issuer: "Daxus",
    category: { pt: "Inteligência Artificial", en: "Artificial Intelligence" },
    date: { pt: "16/04/2026", en: "Apr 16, 2026" },
    sortDate: "2026-04-16",
    workloadHours: 5,
    technologies: ["Inteligência Artificial"],
    topics: ["Inteligência Artificial"],
    pdfPath: "/certificates/primeiros-passos-ia.pdf",
  },
  {
    id: "fundamentos-dax",
    title: { pt: "Fundamentos de DAX", en: "DAX Fundamentals" },
    issuer: "Daxus",
    category: { pt: "DAX", en: "DAX" },
    date: { pt: "25/09/2026", en: "Sep 25, 2026" },
    sortDate: "2026-09-25",
    workloadHours: 8,
    technologies: ["DAX"],
    topics: ["DAX"],
    pdfPath: "/certificates/fundamentos-dax.pdf",
  },
  {
    id: "design-dashboards",
    title: { pt: "Design de Dashboards", en: "Dashboard Design" },
    issuer: "Daxus",
    category: { pt: "Dashboards", en: "Dashboards" },
    date: { pt: "25/09/2026", en: "Sep 25, 2026" },
    sortDate: "2026-09-25",
    workloadHours: 5,
    technologies: [],
    topics: ["Design de Dashboards"],
    pdfPath: "/certificates/design-dashboards.pdf",
  },
  {
    id: "power-query-modelagem-dados",
    title: {
      pt: "Dominando Power Query e Modelagem de Dados",
      en: "Mastering Power Query and Data Modeling",
    },
    issuer: "Daxus",
    category: { pt: "Power Query e Modelagem", en: "Power Query & Modeling" },
    date: { pt: "25/09/2026", en: "Sep 25, 2026" },
    sortDate: "2026-09-25",
    workloadHours: 8,
    technologies: ["Power Query"],
    topics: ["Power Query", "Modelagem de Dados"],
    pdfPath: "/certificates/power-query-modelagem-dados.pdf",
  },
  {
    id: "fundamentos-sql",
    title: { pt: "Fundamentos de SQL", en: "SQL Fundamentals" },
    issuer: "Daxus",
    category: { pt: "SQL", en: "SQL" },
    date: { pt: "02/10/2026", en: "Oct 2, 2026" },
    sortDate: "2026-10-02",
    workloadHours: 7,
    technologies: ["SQL"],
    topics: ["SQL"],
    pdfPath: "/certificates/fundamentos-sql.pdf",
  },
  {
    id: "dominando-dax",
    title: { pt: "Dominando DAX", en: "Mastering DAX" },
    issuer: "Daxus",
    category: { pt: "DAX", en: "DAX" },
    date: { pt: "02/10/2026", en: "Oct 2, 2026" },
    sortDate: "2026-10-02",
    workloadHours: 12,
    technologies: ["DAX"],
    topics: ["DAX"],
    pdfPath: "/certificates/dominando-dax.pdf",
  },
];

export const certificationTechnologyLabels: Record<string, L> = {
  Excel: { pt: "Excel", en: "Excel" },
  VBA: { pt: "VBA", en: "VBA" },
  "Inteligência Artificial": { pt: "Inteligência Artificial", en: "Artificial Intelligence" },
  "Power BI": { pt: "Power BI", en: "Power BI" },
  DAX: { pt: "DAX", en: "DAX" },
  "Power Query": { pt: "Power Query", en: "Power Query" },
  SQL: { pt: "SQL", en: "SQL" },
};

export function certificationTechnologyLabel(value: string, lang: "pt" | "en") {
  return certificationTechnologyLabels[value]?.[lang] ?? value;
}

export const certificationCategories = Array.from(
  new Map(certifications.map((item) => [item.category.pt, item.category])).values(),
);

export const certificationTechnologies = Array.from(
  new Set(certifications.flatMap((item) => item.technologies)),
).sort((a, b) => a.localeCompare(b));
