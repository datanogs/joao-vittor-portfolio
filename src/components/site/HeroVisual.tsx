import { useI18n } from "@/lib/i18n";

/**
 * Artefato conceitual do hero: representa método de análise, não métricas.
 * Não há números de performance, gráficos ou dados fictícios.
 */
export function HeroVisual() {
  const { t } = useI18n();
  const steps = t.home.analysisFlow.steps;

  return (
    <div aria-hidden="true" className="editorial-panel relative overflow-hidden p-5 sm:p-7">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <span className="text-eyebrow">{t.home.analysisFlow.label}</span>
          <span className="font-sans text-meta tracking-[0.14em] text-primary">01 → 05</span>
        </div>

        <div className="mt-2">
          {steps.map((step, index) => (
            <div
              key={step}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-4 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)_auto]"
            >
              <span className="font-sans text-meta text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-sm font-medium tracking-[-0.02em] text-foreground sm:text-base">
                {step}
              </span>
              <span className="h-px w-8 bg-border-strong sm:w-12" />
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="font-sans text-meta  text-muted-foreground">
            {t.home.analysisFlow.footer}
          </span>
          <span className="h-2 w-2 bg-primary" />
        </div>
      </div>
    </div>
  );
}
