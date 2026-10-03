import { LANGS, useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function LanguageSwitch() {
  const { lang, setLang, t } = useI18n();
  return (
    <div
      role="group"
      aria-label={t.prefs.language}
      className="inline-flex h-11 items-center border border-border bg-background p-0.5 font-sans text-meta tracking-[0.08em]"
    >
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            aria-label={`${t.prefs.language}: ${code === "pt" ? "Português" : "English"}`}
            lang={code === "pt" ? "pt-BR" : "en"}
            className={`h-full min-w-11 px-2 uppercase transition-colors duration-150 ${
              active
                ? "bg-surface-2 text-foreground"
                : "text-muted-foreground hover:bg-surface hover:text-foreground"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const label = theme === "dark" ? t.prefs.toLight : t.prefs.toDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center border border-border text-muted-foreground transition-colors duration-150 hover:border-border-strong hover:bg-surface hover:text-foreground"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
        className="hidden dark:block"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="dark:hidden"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
