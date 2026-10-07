import { DataSignal } from "@/components/site/DataFlow";
import { createFileRoute } from "@tanstack/react-router";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section, TagList } from "@/components/site/primitives";
import { datanogs } from "@/content/datanogs";
import { profile } from "@/content/profile";
import { useI18n } from "@/lib/i18n";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/datanogs")({
  head: () => buildSeoHead("pt", seoPages.datanogs),
  component: DataNogsPage,
});

export function DataNogsPage() {
  const { t, l } = useI18n();
  const labels = t.datanogsPage;
  const topics = datanogs.topics.map((topic) => l(topic.label));
  const channels = [...datanogs.channels].sort((a, b) => a.priority - b.priority);

  return (
    <SiteLayout>
      <section className="site-container section-space datanogs-intro">
        <DataSignal />
        <div className="max-w-3xl">
          <p className="text-eyebrow">{profile.fullName} · DataNogs</p>
          <h1 className="text-page-title mt-4">{l(datanogs.tagline)}</h1>
          <p className="mt-4 text-lead text-muted-foreground">{l(datanogs.description)}</p>
          <p className="mt-6 text-body text-muted-foreground">{l(datanogs.relationship)}</p>
        </div>
      </section>

      <Section eyebrow={labels.scope} title={labels.scopeTitle} description={l(datanogs.purpose)}>
        <TagList items={topics} />
      </Section>

      <Section
        eyebrow={labels.presence}
        title={labels.presenceTitle}
        description={labels.presenceDescription}
      >
        <div className="border-t border-border">
          {channels.map((channel, index) => (
            <a
              key={channel.id}
              href={channel.url}
              target="_blank"
              rel="noreferrer noopener"
              className="interactive-row group grid min-w-0 gap-4 border-b border-border py-6 sm:grid-cols-[3rem_0.65fr_minmax(0,1.35fr)_auto] sm:items-center sm:gap-6"
            >
              <span className="font-sans text-meta text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="font-semibold tracking-[-0.02em]">{channel.label}</p>
                <p className="mt-1 break-all font-sans text-meta text-muted-foreground">
                  {channel.handle}
                </p>
              </div>
              <p className="max-w-xl text-body text-muted-foreground">{l(channel.context)}</p>
              <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                {labels.visit} ↗ <span className="sr-only">({t.common.opensNewTab})</span>
              </span>
            </a>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-surface/35">
        <div className="site-container section-space-compact grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <p className="text-eyebrow">{labels.portfolio}</p>
          <div>
            <h2 className="text-section-title max-w-3xl">{labels.portfolioTitle}</h2>
            <p className="mt-5 max-w-2xl text-body text-muted-foreground sm:text-base">
              {labels.portfolioDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LocalizedLink to="/projetos" className="button-base button-primary">
                {labels.viewProjects} <span aria-hidden="true">→</span>
              </LocalizedLink>
              <LocalizedLink to="/contato" className="button-base button-secondary">
                {labels.contact} <span aria-hidden="true">→</span>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
