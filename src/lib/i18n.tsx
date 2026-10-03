import { useRouterState } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from "react";
import { ui, type UiDict } from "@/content/ui";

export type Lang = "pt" | "en";
export const LANGS: Lang[] = ["pt", "en"];

/** Texto com versão em português e inglês. */
export type L = { pt: string; en: string };

const STORAGE_KEY = "lang";

const PT_TO_EN: Array<[string, string]> = [
  ["/sobre", "/en/about"],
  ["/projetos", "/en/projects"],
  ["/formacao", "/en/education"],
  ["/datanogs", "/en/datanogs"],
  ["/contato", "/en/contact"],
];

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

/**
 * Converte uma rota canônica em português para a variante do idioma atual.
 * A interface continua única; somente a URL muda para permitir SSR/SEO por idioma.
 */
export function localizePath(path: string, lang: Lang): string {
  if (!path || path.startsWith("#") || /^[a-z]+:/i.test(path)) return path;

  const suffixIndex = path.search(/[?#]/u);
  const pathname = suffixIndex === -1 ? path : path.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : path.slice(suffixIndex);
  if (!pathname) return path;

  if (lang === "en") {
    if (pathname === "/en" || pathname.startsWith("/en/")) return path;
    if (pathname === "/") return `/en${suffix}`;

    for (const [pt, en] of PT_TO_EN) {
      if (pathname === pt) return `${en}${suffix}`;
      if (pathname.startsWith(`${pt}/`)) return `${en}${pathname.slice(pt.length)}${suffix}`;
    }
    return `/en${pathname}${suffix}`;
  }

  if (pathname === "/en") return `/${suffix}`;
  for (const [pt, en] of PT_TO_EN) {
    if (pathname === en) return `${pt}${suffix}`;
    if (pathname.startsWith(`${en}/`)) return `${pt}${pathname.slice(en.length)}${suffix}`;
  }
  if (pathname.startsWith("/en/")) return `${pathname.slice(3)}${suffix}` || "/";
  return path;
}

export function alternatePaths(ptPath: string) {
  return {
    pt: localizePath(ptPath, "pt"),
    en: localizePath(ptPath, "en"),
  } as const;
}

export const languageInitScript = `(function(){try{var p=location.pathname;var s=localStorage.getItem('${STORAGE_KEY}');if(p==='/'&&s==='en'){location.replace('/en'+location.search+location.hash);return;}document.documentElement.lang=(p==='/en'||p.indexOf('/en/')===0)?'en':'pt-BR';}catch(e){}})();`;

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Dicionário de textos da interface no idioma ativo. */
  t: UiDict;
  /** Resolve um texto bilíngue do conteúdo. */
  l: (value: L) => string;
  /** Localiza uma rota interna sem duplicar o componente de página. */
  path: (value: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const lang = langFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* armazenamento indisponível */
    }
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* armazenamento indisponível */
      }

      if (typeof window !== "undefined") {
        const target = localizePath(window.location.pathname, next);
        window.location.assign(`${target}${window.location.search}${window.location.hash}`);
      }
    },
    [lang],
  );

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: ui[lang],
      l: (value) => value[lang],
      path: (value) => localizePath(value, lang),
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
