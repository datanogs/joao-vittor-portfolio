import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { ProjectsExplorer } from "@/components/site/ProjectsExplorer";
import { Section } from "@/components/site/primitives";
import { FeaturedProject } from "@/components/site/FeaturedProject";
import { profile } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/projetos/")({
  head: () => buildSeoHead("pt", seoPages.projects),
  component: ProjetosPage,
});

export function ProjetosPage() {
  const { t, l } = useI18n();

  return (
    <SiteLayout>
      <Section
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        description={l(profile.projectsIntro)}
        headingLevel="h1"
      >
        <FeaturedProject eager />
      </Section>

      <Section
        eyebrow={t.projects.libraryEyebrow}
        title={t.projects.libraryTitle}
        description={t.projects.libraryDescription}
      >
        <ProjectsExplorer />
      </Section>

      <section className="border-y border-border bg-surface/35">
        <div className="site-container section-space-compact grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <p className="text-eyebrow">{t.projects.ctaEyebrow}</p>
          <div>
            <h2 className="text-section-title max-w-3xl">{t.projects.ctaTitle}</h2>
            <p className="mt-5 max-w-xl text-body text-muted-foreground sm:text-base">
              {t.projects.ctaDescription}
            </p>
            <LocalizedLink to="/contato" className="button-base button-secondary mt-8">
              {t.nav.contact} <span aria-hidden="true">→</span>
            </LocalizedLink>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
