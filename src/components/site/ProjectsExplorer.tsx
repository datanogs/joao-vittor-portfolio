import { useMemo, useState } from "react";
import { projects } from "@/content/projects";
import { useI18n } from "@/lib/i18n";
import { FilterChip } from "./primitives";
import { ProjectCard } from "./ProjectCard";

const ALL = "all";

export function ProjectsExplorer() {
  const { t, l } = useI18n();
  const [category, setCategory] = useState(ALL);
  const [technology, setTechnology] = useState(ALL);

  const categories = useMemo(() => {
    const seen = new Map<string, (typeof projects)[number]["category"]>();
    projects.forEach((project) => seen.set(project.categoryKey, project.category));
    return [...seen.entries()];
  }, []);

  const technologies = useMemo(
    () => [...new Set(projects.flatMap((project) => project.technologies))].sort(),
    [],
  );

  const filtered = projects.filter((project) => {
    const categoryMatch = category === ALL || project.categoryKey === category;
    const technologyMatch = technology === ALL || project.technologies.includes(technology);
    return categoryMatch && technologyMatch;
  });

  return (
    <div>
      <div className="grid gap-6 rounded-sm bg-surface p-5 lg:grid-cols-2 lg:gap-10">
        <fieldset>
          <legend className="text-eyebrow">{t.projects.filterCategory}</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            <FilterChip active={category === ALL} onClick={() => setCategory(ALL)}>
              {t.projects.filterAll}
            </FilterChip>
            {categories.map(([key, label]) => (
              <FilterChip key={key} active={category === key} onClick={() => setCategory(key)}>
                {l(label)}
              </FilterChip>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-eyebrow">{t.projects.filterTechnology}</legend>
          <div className="mt-4 flex flex-wrap gap-2">
            <FilterChip active={technology === ALL} onClick={() => setTechnology(ALL)}>
              {t.projects.filterAll}
            </FilterChip>
            {technologies.map((item) => (
              <FilterChip
                key={item}
                active={technology === item}
                onClick={() => setTechnology(item)}
              >
                {item}
              </FilterChip>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 border-b border-border pb-4">
        <p className="text-sm text-muted-foreground" aria-live="polite" aria-atomic="true">
          {filtered.length}{" "}
          {filtered.length === 1 ? t.projects.resultSingular : t.projects.resultPlural}
        </p>
        {(category !== ALL || technology !== ALL) && (
          <button
            type="button"
            className="link-underline inline-flex min-h-11 items-center text-sm font-semibold text-foreground"
            onClick={() => {
              setCategory(ALL);
              setTechnology(ALL);
            }}
          >
            {t.projects.clearFilters}
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-10 border-y border-border py-8 text-sm text-muted-foreground">
          {t.projects.noResults}
        </p>
      )}
    </div>
  );
}
