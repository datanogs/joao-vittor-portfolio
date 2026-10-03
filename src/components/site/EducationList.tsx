import { education } from "@/content/education";
import { useI18n } from "@/lib/i18n";

export function EducationList() {
  const { l } = useI18n();

  return (
    <ol className="border-t border-border">
      {education.map((item, index) => {
        const dates = [item.startDate, item.endDate].filter(Boolean).join(" — ");
        return (
          <li
            key={item.id}
            className="grid gap-5 border-b border-border py-7 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-start sm:gap-8 lg:py-9"
          >
            <span className="font-sans text-meta text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-card-title">{l(item.degree)}</h3>
              {item.field.pt && (
                <p className="mt-2 text-sm text-muted-foreground">{l(item.field)}</p>
              )}
              {item.institution && (
                <p className="mt-2 text-sm text-muted-foreground">{item.institution}</p>
              )}
              {l(item.description) && (
                <p className="mt-4 max-w-2xl text-body text-muted-foreground">
                  {l(item.description)}
                </p>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:flex-col sm:items-end">
              <span className="border border-border bg-surface px-2.5 py-1 font-sans text-meta  text-foreground">
                {l(item.status)}
              </span>
              {dates && <span className="font-sans text-meta  text-muted-foreground">{dates}</span>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
