import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { EducationList } from "@/components/site/EducationList";
import { ExperienceList } from "@/components/site/ExperienceList";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { ProfilePhoto } from "@/components/site/ProfilePhoto";
import { Section } from "@/components/site/primitives";
import { profile } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () => buildSeoHead("pt", seoPages.about),
  component: SobrePage,
});

export function SobrePage() {
  const { t, l } = useI18n();

  return (
    <SiteLayout>
      <Section eyebrow={t.about.eyebrow} title={profile.fullName} headingLevel="h1">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start lg:gap-20">
          <ProfilePhoto
            variant="about"
            className="mx-auto w-full max-w-sm lg:mx-0 lg:sticky lg:top-28"
          />
          <div className="about-narrative">
            {profile.aboutPage.map((block, index) => (
              <div key={block.title.pt}>
                {index > 0 && <h2 className="text-card-title">{l(block.title)}</h2>}
                <p className={index === 0 ? "text-lead" : "text-body text-muted-foreground"}>
                  {l(block.text)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="experiencia"
        eyebrow={t.about.experienceEyebrow}
        title={t.about.experienceTitle}
        description={t.home.experienceDescription}
      >
        <ExperienceList />
      </Section>

      <Section
        id="formacao"
        eyebrow={t.about.educationEyebrow}
        title={t.about.educationTitle}
        description={t.about.educationDescription}
      >
        <EducationList />
        <div className="mt-10 flex flex-wrap gap-3">
          <LocalizedLink to="/projetos" className="button-base button-secondary">
            {t.about.seeProjects} <span aria-hidden="true">→</span>
          </LocalizedLink>
          <LocalizedLink to="/contato" className="button-base button-primary">
            {t.nav.cta} <span aria-hidden="true">→</span>
          </LocalizedLink>
        </div>
      </Section>
    </SiteLayout>
  );
}
