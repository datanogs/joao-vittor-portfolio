import { LocalizedLink } from "./LocalizedLink";
import type { Project } from "@/content/projects";
import { useI18n } from "@/lib/i18n";
import { ImagePlaceholder, TagList } from "./primitives";

export function ProjectCard({ project }: { project: Project }) {
  const { t, l } = useI18n();
  const title = l(project.title);

  return (
    <LocalizedLink
      to="/projetos/$slug"
      params={{ slug: project.slug }}
      className="project-card group"
    >
      <div className="project-card-media">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={`${t.projects.coverAlt}: ${title}`}
            loading="lazy"
            width={1440}
            height={900}
            className="h-full w-full object-contain"
          />
        ) : (
          <ImagePlaceholder
            label={t.projects.coverPlaceholder}
            className="h-full w-full border-0"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-eyebrow">{l(project.category)}</p>
        <h3 className="mt-3 text-card-title transition-colors group-hover:text-primary">{title}</h3>
        <p className="mt-3 text-body text-muted-foreground">{l(project.shortDescription)}</p>
        <div className="mt-5">
          <TagList items={project.technologies} />
        </div>
        <span className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-foreground">
          {t.projects.viewCase}
          <span
            aria-hidden="true"
            className="text-primary transition-transform duration-150 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </LocalizedLink>
  );
}
