import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/primitives";
import { profile } from "@/content/profile";
import { socialLinks, type SocialLink } from "@/content/social";
import { useI18n } from "@/lib/i18n";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () => buildSeoHead("pt", seoPages.contact),
  component: ContatoPage,
});

export function ContatoPage() {
  const { t, l } = useI18n();
  const primary = socialLinks.filter((item) => item.primary);
  const secondary = socialLinks.filter((item) => !item.primary);

  return (
    <SiteLayout>
      <Section
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={l(profile.contactIntro)}
        headingLevel="h1"
      >
        <div className="border-y border-border">
          {[...primary, ...secondary].map((item) => (
            <ChannelRow key={item.id} link={item} />
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}

function ChannelRow({ link }: { link: SocialLink }) {
  const { t, l } = useI18n();
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const rowClass =
    "interactive-row grid min-w-0 gap-3 border-b border-border py-6 last:border-b-0 sm:grid-cols-[.65fr_minmax(0,1fr)_auto] sm:items-center sm:gap-6";

  if (!link.url) {
    const copy = async () => {
      setCopyError(false);
      try {
        await navigator.clipboard.writeText(link.handle);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        setCopyError(true);
      }
    };

    return (
      <div className={rowClass}>
        <p className="text-card-title">{l(link.label)}</p>
        <p className="min-w-0 break-words text-body text-muted-foreground">{link.handle}</p>
        <button
          type="button"
          onClick={copy}
          aria-label={t.contact.copyEmail}
          className="button-base button-ghost justify-self-start sm:justify-self-end"
        >
          <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
        </button>
        <p role="status" className="text-sm text-muted-foreground sm:col-span-3">
          {copyError ? t.contact.copyError : ""}
        </p>
      </div>
    );
  }

  return (
    <a href={link.url} target="_blank" rel="noreferrer noopener" className={`${rowClass} group`}>
      <p className="text-card-title">{l(link.label)}</p>
      <p className="min-w-0 break-words text-body text-muted-foreground">{link.handle}</p>
      <span className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
        {t.contact.open} ↗ <span className="sr-only">({t.common.opensNewTab})</span>
      </span>
    </a>
  );
}
