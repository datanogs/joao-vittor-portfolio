/**
 * Conteúdo editável — canais de contato.
 * Deixe `url` como string vazia enquanto o link não existir:
 * o site exibe um placeholder em vez de um link quebrado.
 * O e-mail é exibido como texto simples (com botão de copiar), sem link mailto.
 */
import type { L } from "@/lib/i18n";

export type SocialLink = {
  id: string;
  label: L;
  url: string;
  handle: string;
  primary: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: { pt: "LinkedIn", en: "LinkedIn" },
    url: "https://www.linkedin.com/in/joaovittornogueira",
    handle: "linkedin.com/in/joaovittornogueira",
    primary: true,
  },
  {
    id: "github",
    label: { pt: "GitHub", en: "GitHub" },
    url: "https://github.com/datanogs",
    handle: "github.com/datanogs",
    primary: true,
  },
  {
    id: "youtube",
    label: { pt: "YouTube", en: "YouTube" },
    url: "https://www.youtube.com/@datanogs",
    handle: "youtube.com/@datanogs",
    primary: false,
  },
  {
    id: "instagram",
    label: { pt: "Instagram", en: "Instagram" },
    url: "https://www.instagram.com/datanogs",
    handle: "instagram.com/datanogs",
    primary: false,
  },
  {
    id: "email",
    label: { pt: "E-mail", en: "Email" },
    url: "",
    handle: "eujoaovittornogueira@gmail.com",
    primary: true,
  },
];

export const getSocial = (id: string) => socialLinks.find((s) => s.id === id);
