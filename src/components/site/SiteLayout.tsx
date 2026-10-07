import { useRef, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { useEditorialMotion } from "./useEditorialMotion";
import { useI18n } from "@/lib/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  const main = useRef<HTMLElement>(null);
  const route = useRouterState({ select: (state) => state.location.pathname });
  useEditorialMotion(main, route);
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary-solid focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        {t.nav.skip}
      </a>
      <Header />
      <main
        ref={main}
        key={route}
        id="conteudo"
        tabIndex={-1}
        className="page-enter flex-1 outline-none"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
