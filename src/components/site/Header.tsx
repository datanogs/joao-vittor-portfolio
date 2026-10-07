import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { BrandLogo } from "./BrandLogo";
import { LocalizedLink } from "./LocalizedLink";
import { LanguageSwitch, ThemeToggle } from "./Preferences";

type NavKey = "about" | "projects" | "education" | "datanogs" | "contact";
type NavItem = { key: NavKey; to: string; hash?: string };

const nav: NavItem[] = [
  { key: "about", to: "/sobre" },
  { key: "projects", to: "/projetos" },
  { key: "education", to: "/formacao" },
  { key: "datanogs", to: "/datanogs" },
  { key: "contact", to: "/contato" },
];

export function Header() {
  const { t, path } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hash = useRouterState({ select: (state) => state.location.hash });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const isActive = (item: NavItem) => {
    const target = path(item.to);
    if (item.hash) return pathname === target && hash === item.hash;
    return target === "/" || target === "/en"
      ? pathname === target && !hash
      : pathname === target || pathname.startsWith(`${target}/`);
  };

  return (
    <header
      data-scrolled={scrolled || open}
      className={`site-header sticky top-0 z-50 w-full transition-[background-color,border-color] duration-200 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur-xl"
          : "border-b border-transparent bg-background/78 backdrop-blur-md"
      }`}
    >
      <div className="site-container flex h-[4.5rem] min-w-0 items-center justify-between gap-3">
        <LocalizedLink
          to="/"
          className="inline-flex min-w-0 shrink items-center"
          aria-label={`${profile.fullName} — ${t.nav.home}`}
        >
          <BrandLogo />
        </LocalizedLink>

        <nav
          className="hidden min-w-0 items-center gap-4 xl:flex 2xl:gap-5"
          aria-label={t.nav.main}
        >
          {nav.map((item) => (
            <LocalizedLink
              key={item.key}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              className="link-underline inline-flex min-h-11 items-center whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              data-active={isActive(item) ? "true" : "false"}
              aria-current={isActive(item) ? "page" : undefined}
            >
              {t.nav[item.key]}
            </LocalizedLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
          <LocalizedLink
            to="/contato"
            className="button-base button-primary ml-1 hidden xl:inline-flex"
          >
            {t.nav.cta}
          </LocalizedLink>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-border-strong hover:bg-surface xl:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="1.4">
                {open ? (
                  <>
                    <line x1="3" y1="3" x2="15" y2="15" />
                    <line x1="15" y1="3" x2="3" y2="15" />
                  </>
                ) : (
                  <>
                    <line x1="2" y1="5" x2="16" y2="5" />
                    <line x1="2" y1="12" x2="16" y2="12" />
                  </>
                )}
              </g>
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="animate-rise max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background xl:hidden"
          aria-label={t.nav.mobile}
        >
          <div className="site-container pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3">
            <ul className="flex flex-col">
              {nav.map((item, index) => (
                <li key={item.key}>
                  <LocalizedLink
                    to={item.to}
                    {...(item.hash ? { hash: item.hash } : {})}
                    aria-current={isActive(item) ? "page" : undefined}
                    className="interactive-row grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center border-b border-border py-4 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <span className="font-sans text-meta text-muted-foreground/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 truncate">{t.nav[item.key]}</span>
                    <span aria-hidden="true">→</span>
                  </LocalizedLink>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 md:hidden">
              <LanguageSwitch />
              <ThemeToggle />
            </div>
            <LocalizedLink to="/contato" className="button-base button-primary mt-5 w-full">
              {t.nav.cta}
            </LocalizedLink>
          </div>
        </nav>
      )}
    </header>
  );
}
