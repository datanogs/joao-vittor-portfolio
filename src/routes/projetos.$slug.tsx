import type { ReactNode } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LinkButton, Section, TagList } from "@/components/site/primitives";
import type { CaseBlock, Project } from "@/content/projects";
import { imageDimensions } from "@/content/image-dimensions";
import { getProject, projects } from "@/content/projects";
import { projectProcesses } from "@/content/project-process";
import { useI18n } from "@/lib/i18n";
import { buildProjectSeoHead } from "@/lib/seo";

export function loadProject(slug: string) {
  const project = getProject(slug);
  if (!project) throw notFound();
  return project;
}
export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => loadProject(params.slug),
  head: ({ loaderData }) => (loaderData ? buildProjectSeoHead("pt", loaderData) : { meta: [] }),
  component: ProjetoRoutePage,
});
function ProjetoRoutePage() {
  return <ProjectCasePage project={Route.useLoaderData()} />;
}

function Chapter({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={`case-${id}`} className="case-chapter">
      <h2 className="text-section-title">{title}</h2>
      {children}
    </section>
  );
}
function Narrative({ block }: { block: CaseBlock }) {
  const { l } = useI18n();
  return (
    <div className="case-prose text-body">
      <p>{l(block.content)}</p>
      {block.items?.length ? (
        <ul>
          {block.items.map((item) => (
            <li key={item.pt}>{l(item)}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function ProjectCasePage({ project }: { project: Project }) {
  const { t, l } = useI18n();
  const p = t.project;
  const process = projectProcesses[project.slug];
  const selectedMetrics = process?.metrics.flatMap((reading) => {
    const definition = project.metrics.definitions.find((metric) => metric.name === reading.name);
    return definition ? [{ ...definition, reading }] : [];
  });
  const others = projects.filter((item) => item.slug !== project.slug);
  const chapters = [
    ["01", p.overview],
    ...(process ? [["process", p.process]] : []),
    ["04", p.dataModel],
    ["08", p.metrics],
    ["09", p.explore],
    ["10", p.insights],
    ["11", p.challenges],
    ["12", p.results],
  ];
  return (
    <SiteLayout>
      <article className="case-study">
        <header className="site-container pt-8 pb-10 md:pt-12 md:pb-14">
          <LocalizedLink
            to="/projetos"
            className="link-underline inline-flex min-h-11 items-center text-sm text-muted-foreground"
          >
            ← {p.back}
          </LocalizedLink>
          <div className="mt-5 grid gap-6 xl:grid-cols-[1.3fr_.7fr] xl:items-end xl:gap-16">
            <div>
              <p className="text-eyebrow">{l(project.category)}</p>
              <h1 className="text-page-title mt-3">{l(project.title)}</h1>
              <p className="mt-5 text-lead text-muted-foreground">{l(project.shortDescription)}</p>
            </div>
            <div>
              <p className="mb-5 text-body text-muted-foreground">{l(project.approach)}</p>
              <TagList items={project.technologies} />
              <div className="mt-5 flex flex-wrap gap-3">
                <LinkButton href={project.dashboardUrl} variant="solid">
                  {p.openDashboard} ↗
                </LinkButton>
              </div>
            </div>
          </div>
          <a
            href={project.coverImage}
            target="_blank"
            rel="noreferrer noopener"
            className="featured-image mt-8 md:mt-10"
            aria-label={`${p.openImage}: ${l(project.title)} (${t.common.opensNewTab})`}
          >
            <img
              src={project.coverImage}
              alt={`${p.heroAlt}: ${l(project.title)}`}
              width={1440}
              height={810}
              fetchPriority="high"
            />
          </a>
        </header>
        <div className="site-container case-layout">
          <nav className="case-nav" aria-label={p.contents}>
            <div>
              <p className="text-eyebrow mb-3">{p.contents}</p>
              <ol>
                {chapters.map(([id, label]) => (
                  <li key={id}>
                    <a href={`#case-${id}`} className="link-underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <div className="case-body">
            <Chapter id="01" title={p.overview}>
              <Narrative block={project.context} />
              <div className="case-prose">
                <h3 className="text-card-title">{p.problem}</h3>
                <Narrative block={project.problem} />
                <h3 className="text-card-title">{p.objective}</h3>
                <Narrative block={project.objective} />
              </div>
            </Chapter>
            {process && (
              <Chapter id="process" title={p.process}>
                <p className="text-body text-muted-foreground mb-6">{p.processIntro}</p>
                <ol className="analysis-flow">
                  {process.stages.map((stage, index) => (
                    <li key={stage.title.pt}>
                      <a href={`#case-${stage.target}`}>
                        <span className="flow-index" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")} <span>→</span>
                        </span>
                        <strong>{l(stage.title)}</strong>
                        <span>{l(stage.detail)}</span>
                        {stage.pending && (
                          <small className="flow-pending">{p.validationPending}</small>
                        )}
                      </a>
                    </li>
                  ))}
                </ol>
              </Chapter>
            )}
            <Chapter id="04" title={p.dataModel}>
              <p className="text-body text-muted-foreground">{l(project.data.source)}</p>
              <p className="mt-4 text-body text-muted-foreground">{l(project.data.note)}</p>
              {process && (
                <div className="case-prose">
                  <h3 className="text-card-title">{p.excelRole}</h3>
                  <p className="text-body">{l(process.excel)}</p>
                  <p className="text-sm">{p.excelBoundary}</p>
                  <h3 id="case-etl" className="text-card-title case-anchor">
                    {p.etl}
                  </h3>
                  <dl className="etl-sequence">
                    <div>
                      <dt>
                        <span aria-hidden="true">E</span>
                        {p.extraction}
                      </dt>
                      <dd>{l(process.extraction)}</dd>
                    </div>
                    <div>
                      <dt>
                        <span aria-hidden="true">T</span>
                        {p.transformation}
                      </dt>
                      <dd>
                        <ul>
                          {process.transformation.map((item) => (
                            <li key={item.pt}>{l(item)}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div>
                      <dt>
                        <span aria-hidden="true">L</span>
                        {p.load}
                      </dt>
                      <dd>{l(process.load)}</dd>
                    </div>
                  </dl>
                </div>
              )}
              <dl className="case-technical">
                <div>
                  <dt>{p.dataEntities}</dt>
                  <dd>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {project.data.entities.map((entity) => (
                        <li key={entity}>
                          <code className="text-sm">{entity}</code>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>{p.dataFields}</dt>
                  <dd className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.data.fields.map((field) => (
                      <code className="text-sm text-muted-foreground" key={field}>
                        {field}
                      </code>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="case-prose">
                <h3 id="case-model" className="text-card-title case-anchor">
                  {p.model}
                </h3>
                <p className="text-body">{l(project.modeling.content)}</p>
                {!process && (
                  <>
                    <h3 className="text-card-title">{p.treatment}</h3>
                    <Narrative block={project.treatment} />
                  </>
                )}
              </div>
            </Chapter>
            <Chapter id="08" title={p.metrics}>
              <Narrative block={project.transformation} />
              <p className="text-body text-muted-foreground mb-6">{l(project.metrics.note)}</p>
              {selectedMetrics && <p className="metric-intro text-body">{p.selectedMetrics}</p>}
              <dl className="metric-list">
                {(
                  selectedMetrics ??
                  project.metrics.definitions.map((definition) => ({
                    ...definition,
                    reading: undefined,
                  }))
                ).map((metric) => (
                  <div key={metric.name}>
                    <dt>{metric.name}</dt>
                    <dd>
                      <p className="text-body text-muted-foreground">{l(metric.interpretation)}</p>
                      {metric.reading && (
                        <div className="metric-reading">
                          <p>
                            <strong>{p.metricPurpose}</strong>
                            {l(metric.reading.purpose)}
                          </p>
                          <p>
                            <strong>{p.metricUsage}</strong>
                            {l(metric.reading.usage)}
                          </p>
                          <p>
                            <strong>{p.metricLogic}</strong>
                            {l(metric.reading.logic)}
                          </p>
                        </div>
                      )}
                      <details>
                        <summary>{p.viewFormula}</summary>
                        <pre>
                          <code>{metric.formula}</code>
                        </pre>
                      </details>
                    </dd>
                  </div>
                ))}
              </dl>
            </Chapter>
            <Chapter id="09" title={p.explore}>
              <Narrative block={project.dashboard} />
              <div className="mt-5">
                <LinkButton href={project.dashboardUrl}>{p.openDashboard} ↗</LinkButton>
              </div>
              <div className="case-gallery">
                {project.gallery.map((image) => (
                  <figure key={image.src}>
                    <a
                      href={image.src}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${p.openImage}: ${l(image.label)} (${t.common.opensNewTab})`}
                    >
                      <img
                        src={image.src}
                        alt={l(image.alt)}
                        loading="lazy"
                        width={imageDimensions[image.src]?.width ?? 1440}
                        height={imageDimensions[image.src]?.height ?? 810}
                      />
                    </a>
                    <figcaption>
                      <span>{l(image.label)}</span>
                      <a
                        className="link-underline inline-flex min-h-11 items-center"
                        href={image.src}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {p.openImage} ↗ <span className="sr-only">({t.common.opensNewTab})</span>
                      </a>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Chapter>
            <Chapter id="10" title={p.insights}>
              <Narrative block={project.insights} />
              <div className="case-prose">
                <h3 className="text-card-title">{p.observations}</h3>
                {project.observations.map((item) => (
                  <p className="text-body" key={item.pt}>
                    {l(item)}
                  </p>
                ))}
              </div>
              <details className="case-note" open>
                <summary>{p.limitations}</summary>
                <ul className="list-disc pl-5 space-y-3 text-body text-muted-foreground mt-3">
                  {project.limitations.map((item) => (
                    <li key={item.pt}>{l(item)}</li>
                  ))}
                </ul>
              </details>
            </Chapter>
            <Chapter id="11" title={p.challenges}>
              <dl className="space-y-7">
                {project.challenges.map((item) => (
                  <div key={item.challenge.pt}>
                    <dt className="text-card-title">{l(item.challenge)}</dt>
                    <dd className="mt-3 text-body text-muted-foreground">{l(item.solution)}</dd>
                  </div>
                ))}
              </dl>
            </Chapter>
            <Chapter id="12" title={p.results}>
              <Narrative block={project.results} />
              <div className="case-prose">
                <h3 className="text-card-title">{p.learnings}</h3>
                <Narrative block={project.learnings} />
                <h3 className="text-card-title">{p.tools}</h3>
              </div>
              <TagList items={project.technologies} />
              <div className="mt-7 flex flex-wrap gap-3">
                <LinkButton href={project.dashboardUrl} variant="solid">
                  {p.openDashboard} ↗
                </LinkButton>
                {project.githubUrl && <LinkButton href={project.githubUrl}>GitHub ↗</LinkButton>}
                {project.youtubeUrl && <LinkButton href={project.youtubeUrl}>YouTube ↗</LinkButton>}
              </div>
            </Chapter>
          </div>
        </div>
      </article>
      <Section eyebrow={p.continue} title={p.others} className="border-t border-border">
        <ul>
          {others.map((item) => (
            <li key={item.slug}>
              <LocalizedLink
                to="/projetos/$slug"
                params={{ slug: item.slug }}
                className="interactive-row flex justify-between gap-6 border-b border-border py-6"
              >
                <span className="text-card-title">{l(item.title)}</span>
                <span aria-hidden="true">→</span>
              </LocalizedLink>
            </li>
          ))}
        </ul>
      </Section>
    </SiteLayout>
  );
}
