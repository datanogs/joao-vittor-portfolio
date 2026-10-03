import { LocalizedLink } from "./LocalizedLink";
import { certifications } from "@/content/certifications";
import { useI18n } from "@/lib/i18n";

export function CertificationsList({ limit }: { limit?: number }) {
  const { t, l } = useI18n();
  const visible = limit
    ? [...certifications].sort((a, b) => b.sortDate.localeCompare(a.sortDate)).slice(0, limit)
    : certifications;

  if (certifications.length === 0) {
    return (
      <div className="grid min-h-40 place-items-center border-y border-dashed border-border-strong bg-surface/40 px-6 py-10 text-center">
        <div>
          <span className="mx-auto block h-2 w-2 bg-primary" aria-hidden="true" />
          <p className="mt-5 font-sans text-meta  text-muted-foreground">
            {t.home.certificationsEmpty}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ul className="border-t border-border">
        {visible.map((item, index) => (
          <li
            key={item.id}
            className="grid gap-5 border-b border-border py-7 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-8"
          >
            <span className="font-sans text-meta text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-card-title">{l(item.title)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.issuer} · {l(item.date)}
                {item.workloadHours ? ` · ${item.workloadHours}h` : ""}
              </p>
            </div>
            <a
              href={item.pdfPath}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline inline-flex min-h-11 items-center self-start text-sm font-semibold"
            >
              PDF ↗ <span className="sr-only">({t.common.opensNewTab})</span>
            </a>
          </li>
        ))}
      </ul>
      {limit && certifications.length > limit && (
        <LocalizedLink to="/formacao" className="button-base button-secondary mt-7">
          {t.certifications.seeAll} <span aria-hidden="true">→</span>
        </LocalizedLink>
      )}
    </div>
  );
}
