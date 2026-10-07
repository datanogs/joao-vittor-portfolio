import { profile } from "@/content/profile";
import type { L, Lang } from "@/lib/i18n";
import { alternatePaths } from "@/lib/i18n";

export type SeoConfig = {
  title: L;
  description: L;
  ptPath: string;
  type?: "website" | "article" | "profile";
  image?: string;
  imageAlt?: L;
};

function siteOrigin() {
  const raw = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env?.[
    "VITE_SITE_URL"
  ]?.trim();
  if (!raw) return "";
  try {
    const url = new URL(raw);
    return ["https:", "http:"].includes(url.protocol) ? url.origin : "";
  } catch {
    return "";
  }
}

function absoluteUrl(path: string) {
  const origin = siteOrigin();
  if (!origin) return "";
  return new URL(path, `${origin}/`).toString();
}

export const seoPages = {
  home: {
    title: {
      pt: `${profile.fullName} — Análise de Dados | Business Intelligence`,
      en: `${profile.fullName} — Data Analytics | Business Intelligence`,
    },
    description: profile.metaDescription,
    ptPath: "/",
  },
  about: {
    title: { pt: `Sobre — ${profile.name}`, en: `About — ${profile.name}` },
    description: {
      pt: `Trajetória profissional de ${profile.fullName}: Logística, rotina administrativa e desenvolvimento em Análise de Dados e Business Intelligence.`,
      en: `The professional background of ${profile.fullName}: Logistics, administrative work and development in Data Analytics and Business Intelligence.`,
    },
    ptPath: "/sobre",
    type: "profile" as const,
  },
  projects: {
    title: { pt: `Projetos — ${profile.name}`, en: `Projects — ${profile.name}` },
    description: {
      pt: "Projetos em Power BI sobre Spotify, vendas e abastecimentos: fontes de dados, modelagem, medidas DAX, dashboards e análises.",
      en: "Power BI projects exploring Spotify, sales and refueling: data sources, modeling, DAX measures, dashboards and analysis.",
    },
    ptPath: "/projetos",
  },
  education: {
    title: {
      pt: `Formação e Certificações — ${profile.name}`,
      en: `Education & Certifications — ${profile.name}`,
    },
    description: {
      pt: `Formação acadêmica e biblioteca de certificados de ${profile.fullName}, com cursos de Excel, Power BI, DAX e SQL e certificados em PDF.`,
      en: `Academic background and certificate library of ${profile.fullName}, with Excel, Power BI, DAX and SQL courses and PDF certificates.`,
    },
    ptPath: "/formacao",
  },
  datanogs: {
    title: {
      pt: `DataNogs — projeto autoral de ${profile.name}`,
      en: `DataNogs — personal project by ${profile.name}`,
    },
    description: {
      pt: "DataNogs é o projeto autoral de João Vittor Nogueira para registrar e compartilhar estudos, projetos e explicações sobre Dados e Tecnologia.",
      en: "DataNogs is João Vittor Nogueira's personal project for documenting and sharing studies, projects and explanations about Data and Technology.",
    },
    ptPath: "/datanogs",
  },
  contact: {
    title: {
      pt: `Contato — ${profile.name} | Análise de Dados`,
      en: `Contact — ${profile.name} | Data Analytics`,
    },
    description: {
      pt: `Canais profissionais para falar com ${profile.fullName}: LinkedIn, GitHub e e-mail.`,
      en: `Professional channels to contact ${profile.fullName}: LinkedIn, GitHub and email.`,
    },
    ptPath: "/contato",
  },
} satisfies Record<string, SeoConfig>;

export function buildSeoHead(lang: Lang, config: SeoConfig) {
  const paths = alternatePaths(config.ptPath);
  const title = config.title[lang];
  const description = config.description[lang];
  const currentPath = lang === "pt" ? paths.pt : paths.en;
  const canonical = absoluteUrl(currentPath);
  const ptAlternate = absoluteUrl(paths.pt);
  const enAlternate = absoluteUrl(paths.en);
  const image = absoluteUrl(config.image ?? profile.images.portrait);
  const imageAlt = config.imageAlt?.[lang] ?? profile.fullName;
  const locale = lang === "pt" ? "pt_BR" : "en_US";
  const alternateLocale = lang === "pt" ? "en_US" : "pt_BR";

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: config.type ?? "website" },
      { property: "og:locale", content: locale },
      { property: "og:locale:alternate", content: alternateLocale },
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
      ...(image ? [{ property: "og:image", content: image }] : []),
      ...(image ? [{ property: "og:image:alt", content: imageAlt }] : []),
      { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(image ? [{ name: "twitter:image", content: image }] : []),
      ...(image ? [{ name: "twitter:image:alt", content: imageAlt }] : []),
    ],
    links: [
      ...(canonical ? [{ rel: "canonical", href: canonical }] : []),
      ...(ptAlternate ? [{ rel: "alternate", hrefLang: "pt-BR", href: ptAlternate }] : []),
      ...(enAlternate ? [{ rel: "alternate", hrefLang: "en", href: enAlternate }] : []),
      ...(ptAlternate ? [{ rel: "alternate", hrefLang: "x-default", href: ptAlternate }] : []),
    ],
  };
}

export function buildProjectSeoHead(
  lang: Lang,
  project: { slug: string; title: L; shortDescription: L; coverImage?: string },
) {
  return buildSeoHead(lang, {
    title: {
      pt: `${project.title.pt} — ${profile.fullName}`,
      en: `${project.title.en} — ${profile.fullName}`,
    },
    description: project.shortDescription,
    ptPath: `/projetos/${project.slug}`,
    type: "article",
    ...(project.coverImage
      ? {
          image: project.coverImage,
          imageAlt: {
            pt: `Dashboard do projeto ${project.title.pt}`,
            en: `Dashboard for ${project.title.en}`,
          },
        }
      : {}),
  });
}

export function personJsonLd(lang: Lang) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    description: profile.metaDescription[lang],
    sameAs: ["https://www.linkedin.com/in/joaovittornogueira"],
  }).replace(/</g, "\\u003c");
}
