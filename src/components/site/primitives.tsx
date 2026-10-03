import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { useI18n } from "@/lib/i18n";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  headingLevel = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section id={id} className={`site-container section-space scroll-mt-24 ${className}`}>
      {(eyebrow || title || description) && (
        <header className="section-heading">
          {eyebrow && <p className="text-eyebrow mb-3">{eyebrow}</p>}
          <div className="max-w-3xl">
            {title && (
              <Heading className={headingLevel === "h1" ? "text-page-title" : "text-section-title"}>
                {title}
              </Heading>
            )}
            {description && <p className="mt-4 text-lead text-muted-foreground">{description}</p>}
          </div>
        </header>
      )}
      {children && (
        <div className={title || description || eyebrow ? "section-content" : ""}>{children}</div>
      )}
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center text-meta text-muted-foreground">{children}</span>
  );
}

export function TagList({ items }: { items: readonly string[] }) {
  return (
    <div className="project-meta">
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </div>
  );
}

/** Placeholder editorial para imagens ainda não disponíveis. */
export function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`grid-backdrop relative flex items-center justify-center overflow-hidden border border-dashed border-border-strong bg-surface ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="absolute left-4 top-4 h-2 w-2 bg-primary" aria-hidden="true" />
      <span className="max-w-xs px-6 text-center font-sans text-meta  text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function LinkButton({
  href,
  children,
  variant = "outline",
  fallbackLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  fallbackLabel?: string;
}) {
  const { t } = useI18n();
  const styles = variant === "solid" ? "button-primary" : "button-secondary";

  if (!href) {
    if (!fallbackLabel) return null;
    return (
      <span className="button-base cursor-not-allowed border border-dashed border-border text-muted-foreground/70">
        {fallbackLabel}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={`button-base ${styles}`}>
      {children}
      <span className="sr-only">({t.common.opensNewTab})</span>
    </a>
  );
}

/** Padrão visual para filtros futuros de projetos/certificados. */
export function FilterChip({
  children,
  active = false,
  ...props
}: { children: ReactNode; active?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="filter-chip"
      data-active={active ? "true" : "false"}
      aria-pressed={active}
      {...props}
    >
      {children}
    </button>
  );
}

/** Campo base para formulários futuros; label continua responsabilidade do consumidor. */
export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="input-field" {...props} />;
}
