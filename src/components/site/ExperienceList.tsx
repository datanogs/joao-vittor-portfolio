import { experience } from "@/content/experience";
import { useI18n } from "@/lib/i18n";

export function ExperienceList() {
  const { t, l } = useI18n();

  return (
    <ol className="border-t border-border">
      {experience.map((item, index) => (
        <li
          key={`${item.company.pt}-${index}`}
          className="grid gap-5 border-b border-border py-7 sm:grid-cols-[8rem_1fr] sm:gap-8 lg:grid-cols-[10rem_1fr] lg:py-9"
        >
          <div className="flex items-start justify-between gap-4 sm:block">
            <span className="font-sans text-meta text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="font-sans text-meta  text-muted-foreground sm:mt-3">{l(item.period)}</p>
          </div>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-card-title">{l(item.role)}</h3>
              <span className="font-sans text-meta  text-primary">{l(item.company)}</span>
            </div>
            <p className="mt-4 text-body text-muted-foreground">{l(item.description)}</p>
            <div className="mt-7 grid gap-7 border-t border-border pt-6 md:grid-cols-2">
              {(
                [
                  [t.experience.activities, item.activities],
                  [t.experience.dataWork, item.dataWork],
                ] as const
              ).map(([title, list]) => (
                <div key={title}>
                  <p className="text-eyebrow">{title}</p>
                  <ul className="mt-4 space-y-2 text-body text-muted-foreground">
                    {list.map((activity, itemIndex) => (
                      <li key={itemIndex} className="grid grid-cols-[0.75rem_1fr] gap-2">
                        <span className="mt-[0.65rem] h-1 w-1 bg-primary" aria-hidden="true" />
                        <span>{l(activity)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
