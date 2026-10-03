import { featuredProject } from "@/content/projects";
import { useI18n } from "@/lib/i18n";
import { LocalizedLink } from "./LocalizedLink";
import { TagList } from "./primitives";

export function FeaturedProject({ eager = false }: { eager?: boolean }) {
  const { t, l } = useI18n();
  const project = featuredProject;
  return (
    <article className="featured-project">
      <LocalizedLink
        to="/projetos/$slug"
        params={{ slug: project.slug }}
        className="featured-image"
        aria-label={`${t.projects.viewCase}: ${l(project.title)}`}
      >
        <img
          src={project.coverImage}
          alt={`${t.projects.dashboardAlt}: ${l(project.title)}`}
          width={1440}
          height={810}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
        />
      </LocalizedLink>
      <div className="featured-copy">
        <div>
          <p className="text-eyebrow">
            {t.projects.featured} · {l(project.category)}
          </p>
          <h2 className="mt-3 text-section-title">{l(project.title)}</h2>
          <div className="mt-4">
            <TagList items={project.technologies} />
          </div>
        </div>
        <div>
          <p className="text-body text-muted-foreground">{l(project.shortDescription)}</p>
          <LocalizedLink
            to="/projetos/$slug"
            params={{ slug: project.slug }}
            className="button-base button-secondary mt-5"
          >
            {t.projects.viewCase} <span aria-hidden="true">→</span>
          </LocalizedLink>
        </div>
      </div>
    </article>
  );
}
