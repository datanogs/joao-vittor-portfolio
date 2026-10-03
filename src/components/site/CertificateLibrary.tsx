import { useEffect, useMemo, useRef, useState } from "react";
import {
  certificationCategories,
  certifications,
  certificationTechnologies,
  certificationTechnologyLabel,
  type Certification,
} from "@/content/certifications";
import { useI18n } from "@/lib/i18n";

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function CertificateCard({
  item,
  onPreview,
}: {
  item: Certification;
  onPreview: (item: Certification, trigger: HTMLButtonElement) => void;
}) {
  const { t, l } = useI18n();
  return (
    <article className="certificate-row">
      <div className="min-w-0">
        <h3 className="font-semibold">{l(item.title)}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{item.issuer}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          <time dateTime={item.sortDate}>{l(item.date)}</time>
          {item.workloadHours !== undefined && <span> · {item.workloadHours}h</span>}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={(event) => onPreview(item, event.currentTarget)}
          className="button-base button-secondary"
        >
          {t.certifications.preview}
        </button>
        <a
          href={item.pdfPath}
          target="_blank"
          rel="noreferrer noopener"
          className="button-base button-ghost"
        >
          {t.certifications.openPdf} ↗ <span className="sr-only">({t.common.opensNewTab})</span>
        </a>
      </div>
    </article>
  );
}

export function CertificateLibrary() {
  const { t, l, lang } = useI18n();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [technology, setTechnology] = useState("all");
  const [preview, setPreview] = useState<Certification | null>(null);
  const previewTitleRef = useRef<HTMLHeadingElement>(null);
  const previewTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!preview) return;
    requestAnimationFrame(() => previewTitleRef.current?.focus());
  }, [preview]);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return certifications
      .filter((item) => category === "all" || item.category.pt === category)
      .filter((item) => technology === "all" || item.technologies.includes(technology))
      .filter((item) => {
        if (!q) return true;
        return normalize(
          [
            item.title.pt,
            item.title.en,
            item.issuer,
            item.category.pt,
            item.category.en,
            ...item.technologies,
            ...item.technologies.map((value) => certificationTechnologyLabel(value, "en")),
            ...item.topics,
          ].join(" "),
        ).includes(q);
      })
      .sort((a, b) => b.sortDate.localeCompare(a.sortDate));
  }, [query, category, technology]);

  const openPreview = (item: Certification, trigger: HTMLButtonElement) => {
    previewTriggerRef.current = trigger;
    setPreview(item);
  };

  const closePreview = () => {
    setPreview(null);
    requestAnimationFrame(() => previewTriggerRef.current?.focus());
  };

  const reset = () => {
    setQuery("");
    setCategory("all");
    setTechnology("all");
  };

  return (
    <div className="min-w-0">
      <div className="grid min-w-0 gap-5 border-y border-border py-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <label className="grid min-w-0 gap-2">
          <span className="text-eyebrow">{t.certifications.search}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="input-field max-w-xl"
            placeholder={t.certifications.searchPlaceholder}
            autoComplete="off"
          />
        </label>
        <div className="font-sans text-meta  text-muted-foreground" aria-live="polite">
          {filtered.length}{" "}
          {filtered.length === 1 ? t.certifications.resultSingular : t.certifications.resultPlural}
        </div>
      </div>

      <div className="grid min-w-0 gap-4 border-b border-border py-5 sm:grid-cols-2">
        <label className="grid min-w-0 gap-2">
          <span className="text-eyebrow">{t.certifications.category}</span>
          <select
            className="input-field"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="all">{t.certifications.all}</option>
            {certificationCategories.map((item) => (
              <option key={item.pt} value={item.pt}>
                {l(item)}
              </option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-2">
          <span className="text-eyebrow">{t.certifications.technology}</span>
          <select
            className="input-field"
            value={technology}
            onChange={(event) => setTechnology(event.target.value)}
          >
            <option value="all">{t.certifications.all}</option>
            {certificationTechnologies.map((item) => (
              <option key={item} value={item}>
                {certificationTechnologyLabel(item, lang)}
              </option>
            ))}
          </select>
        </label>
        {(query || category !== "all" || technology !== "all") && filtered.length > 0 && (
          <button
            type="button"
            onClick={reset}
            className="button-base button-ghost justify-self-start"
          >
            {t.certifications.clear}
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="grid min-h-56 place-items-center border-b border-dashed border-border px-6 py-12 text-center">
          <div>
            <p className="text-sm text-muted-foreground">{t.certifications.empty}</p>
            <button type="button" onClick={reset} className="button-base button-secondary mt-5">
              {t.certifications.clear}
            </button>
          </div>
        </div>
      ) : (
        <div className="min-w-0 pt-4">
          {filtered.map((item) => (
            <CertificateCard key={item.id} item={item} onPreview={openPreview} />
          ))}
        </div>
      )}

      {preview && (
        <section
          className="mt-10 min-w-0 border-y border-border bg-surface/35 py-6"
          aria-labelledby="certificate-preview-title"
        >
          <div className="flex min-w-0 flex-wrap items-start justify-between gap-4 px-4 sm:px-6">
            <div className="min-w-0">
              <p className="text-eyebrow">{t.certifications.preview}</p>
              <h3
                ref={previewTitleRef}
                tabIndex={-1}
                id="certificate-preview-title"
                className="mt-2 break-words text-card-title outline-none"
              >
                {l(preview.title)}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={preview.pdfPath}
                target="_blank"
                rel="noreferrer noopener"
                className="button-base button-secondary"
              >
                {t.certifications.openPdf} <span aria-hidden="true">↗</span>
                <span className="sr-only">({t.common.opensNewTab})</span>
              </a>
              <button type="button" onClick={closePreview} className="button-base button-ghost">
                {t.certifications.close}
              </button>
            </div>
          </div>
          <div className="mt-6 h-[65dvh] min-h-[24rem] max-h-[52rem] min-w-0 overflow-hidden border-y border-border bg-background sm:min-h-[32rem]">
            <iframe
              src={`${preview.pdfPath}#view=FitH`}
              title={`${t.certifications.preview}: ${l(preview.title)}`}
              loading="lazy"
              className="h-full w-full border-0"
            />
          </div>
        </section>
      )}
    </div>
  );
}
