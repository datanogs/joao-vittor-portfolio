import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { DataFlow, DataSignal } from "@/components/site/DataFlow";
import { ProfilePhoto } from "@/components/site/ProfilePhoto";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CertificationsList } from "@/components/site/CertificationsList";
import { experience } from "@/content/experience";
import { FeaturedProject } from "@/components/site/FeaturedProject";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { Section, TagList } from "@/components/site/primitives";
import { profile } from "@/content/profile";
import { heroStack, skillGroups } from "@/content/skills";
import { projects, featuredProject } from "@/content/projects";
import { datanogs } from "@/content/datanogs";
import { useI18n } from "@/lib/i18n";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => buildSeoHead("pt", seoPages.home),
  component: HomePage,
});

export function HomePage() {
  const { t, l } = useI18n();
  const h = t.home;
  const others = projects.filter((project) => project.slug !== featuredProject.slug);
  return (
    <SiteLayout>
      <section className="hero-stage border-b border-border">
        <div className="site-container home-hero">
          <div className="hero-identity animate-rise min-w-0">
            <h1 className="text-display hero-name">{profile.fullName}</h1>
            <p className="hero-role">{l(profile.role)}</p>
          </div>
          <div className="hero-copy min-w-0">
            <p className="text-lead font-medium">{l(profile.heroStatement)}</p>
            <p className="mt-3 text-body text-muted-foreground">{l(profile.heroDescription)}</p>
            <div className="hero-actions">
              <LocalizedLink to="/projetos" className="button-base button-primary">
                {h.exploreProjects} <span aria-hidden="true">→</span>
              </LocalizedLink>
              <LocalizedLink to="/contato" className="button-base button-secondary">
                {t.nav.contact} <span aria-hidden="true">→</span>
              </LocalizedLink>
            </div>
            <div className="mt-6">
              <TagList items={heroStack} />
              <p className="mt-3 text-sm text-muted-foreground">{h.studying}</p>
              <nav aria-label={h.quickNav} className="mt-2 flex flex-wrap gap-x-6">
                <a
                  href="#stack"
                  className="link-underline inline-flex min-h-11 items-center text-sm"
                >
                  {h.toolsLink}
                </a>
                <LocalizedLink
                  to="/sobre"
                  hash="experiencia"
                  className="link-underline inline-flex min-h-11 items-center text-sm"
                >
                  {t.nav.experience}
                </LocalizedLink>
                <LocalizedLink
                  to="/formacao"
                  className="link-underline inline-flex min-h-11 items-center text-sm"
                >
                  {t.nav.education}
                </LocalizedLink>
              </nav>
            </div>
          </div>
          <div className="hero-photo animate-rise reveal-delay-1">
            <DataSignal />
            <ProfilePhoto variant="hero" />
          </div>
        </div>
      </section>
      <section
        id="posicionamento"
        className="site-container py-8 md:py-10 grid gap-4 md:grid-cols-[.65fr_1.35fr] md:gap-12"
      >
        <div>
          <p className="text-eyebrow">{l(profile.positioning.eyebrow)}</p>
          <h2 className="mt-3 text-card-title">{l(profile.positioning.title)}</h2>
        </div>
        <div>
          <p className="text-body text-muted-foreground">{l(profile.positioning.text)}</p>
          <DataFlow />
        </div>
      </section>
      <section id="sobre" className="bg-surface">
        <div className="site-container section-space grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-eyebrow">{h.aboutEyebrow}</p>
            <h2 className="mt-3 text-section-title">{h.aboutTitle}</h2>
          </div>
          <div>
            <p className="text-body text-muted-foreground">{l(profile.about.summary)}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <LocalizedLink to="/sobre" className="button-base button-secondary">
                {h.aboutLink} →
              </LocalizedLink>
              <LocalizedLink to="/formacao" className="button-base button-ghost">
                {t.nav.education} →
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
      <Section
        id="stack"
        eyebrow={h.stackEyebrow}
        title={h.stackTitle}
        description={h.stackDescription}
      >
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.category.pt} className="border-t border-border pt-5">
              <h3 className="text-card-title">{l(group.category)}</h3>
              <dl className="mt-6 space-y-6">
                {group.tools.map((tool) => (
                  <div key={tool.name}>
                    <dt className="font-semibold text-sm">{tool.name}</dt>
                    <dd className="mt-2 text-body text-muted-foreground">{l(tool.context)}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Section>
      <div className="projects-band">
        <Section
          id="projetos"
          eyebrow={h.projectsEyebrow}
          title={h.projectsTitle}
          description={l(profile.projectsIntro)}
        >
          <FeaturedProject />
          <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      </div>
      {experience[0] && (
        <Section id="experiencia" eyebrow={h.experienceEyebrow} title={h.experienceTitle}>
          <p className="text-body text-muted-foreground">{l(experience[0].description)}</p>
          <LocalizedLink
            to="/sobre"
            hash="experiencia"
            className="button-base button-secondary mt-6"
          >
            {h.aboutLink} →
          </LocalizedLink>
        </Section>
      )}
      <Section
        id="formacao"
        eyebrow={h.educationEyebrow}
        title={h.educationTitle}
        description={h.educationDescription}
      >
        <LocalizedLink to="/formacao" className="button-base button-secondary">
          {t.nav.education} →
        </LocalizedLink>
      </Section>
      <Section
        id="certificacoes"
        eyebrow={h.certificationsEyebrow}
        title={h.certificationsTitle}
        description={h.certificationsDescription}
      >
        <CertificationsList limit={3} />
      </Section>
      <aside
        id="datanogs"
        className="site-container border-y border-border py-8 grid gap-5 md:grid-cols-[.65fr_1.35fr] md:gap-20"
      >
        <div>
          <p className="text-eyebrow">{h.datanogsEyebrow}</p>
          <h2 className="mt-2 text-card-title">DataNogs</h2>
        </div>
        <div>
          <p className="text-body text-muted-foreground">{l(datanogs.description)}</p>
          <LocalizedLink
            to="/datanogs"
            className="link-underline mt-4 inline-flex min-h-11 items-center text-sm font-medium"
          >
            DataNogs →
          </LocalizedLink>
        </div>
      </aside>
      <Section
        id="contato"
        eyebrow={h.contactEyebrow}
        title={h.contactTitle}
        description={l(profile.contactIntro)}
      >
        <LocalizedLink to="/contato" className="button-base button-primary">
          {h.contactChannels} →
        </LocalizedLink>
      </Section>
    </SiteLayout>
  );
}
