import { createFileRoute } from "@tanstack/react-router";
import { CertificateLibrary } from "@/components/site/CertificateLibrary";
import { EducationList } from "@/components/site/EducationList";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/primitives";
import { useI18n } from "@/lib/i18n";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/formacao")({
  head: () => buildSeoHead("pt", seoPages.education),
  component: FormacaoPage,
});

export function FormacaoPage() {
  const { t } = useI18n();

  return (
    <SiteLayout>
      <Section
        eyebrow={t.certifications.pageEyebrow}
        title={t.certifications.pageTitle}
        description={t.certifications.pageDescription}
        className="page-intro"
        headingLevel="h1"
      >
        <LocalizedLink to="/formacao" hash="certificados" className="button-base button-secondary">
          {t.certifications.libraryTitle} <span aria-hidden="true">↓</span>
        </LocalizedLink>
      </Section>

      <Section
        eyebrow={t.about.educationEyebrow}
        title={t.about.educationTitle}
        description={t.about.educationDescription}
      >
        <EducationList />
      </Section>

      <Section
        id="certificados"
        eyebrow={t.certifications.libraryEyebrow}
        title={t.certifications.libraryTitle}
        description={t.certifications.libraryDescription}
      >
        <CertificateLibrary />
      </Section>
    </SiteLayout>
  );
}
