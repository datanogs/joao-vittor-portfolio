import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social";
import { useI18n } from "@/lib/i18n";
import { BrandLogo } from "./BrandLogo";
import { LocalizedLink } from "./LocalizedLink";

export function Footer() {
  const { t, l } = useI18n();
  const social = socialLinks.filter((item) => item.id !== "email");
  const linkClass =
    "link-underline w-fit text-sm text-muted-foreground transition-colors hover:text-foreground";

  return (
    <footer className="site-footer border-t border-border">
      <div className="site-container py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <BrandLogo />
            <p className="mt-5 max-w-sm text-body text-muted-foreground">{l(profile.role)}</p>
            <p className="mt-3 max-w-md text-body text-muted-foreground">
              {l(profile.heroStatement)}
            </p>
          </div>

          <div className="grid gap-9 sm:grid-cols-3 sm:gap-10">
            <div>
              <p className="text-eyebrow">{t.footer.navigation}</p>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <LocalizedLink to="/sobre" className={linkClass}>
                    {t.nav.about}
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/projetos" className={linkClass}>
                    {t.nav.projects}
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/sobre" hash="experiencia" className={linkClass}>
                    {t.nav.experience}
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/contato" className={linkClass}>
                    {t.nav.contact}
                  </LocalizedLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-eyebrow">{t.nav.education}</p>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <LocalizedLink to="/formacao" className={linkClass}>
                    {t.nav.education}
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/formacao" hash="certificados" className={linkClass}>
                    {t.home.certificationsEyebrow}
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/datanogs" className={linkClass}>
                    DataNogs
                  </LocalizedLink>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-1">
              <p className="text-eyebrow">{t.footer.channels}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {social.map((item) =>
                  item.url ? (
                    <li key={item.id}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={linkClass}
                      >
                        {l(item.label)} ↗ <span className="sr-only">({t.common.opensNewTab})</span>
                      </a>
                    </li>
                  ) : (
                    <li key={item.id} className="text-sm text-muted-foreground">
                      {l(item.label)} <span className="text-meta">({t.footer.pending})</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-3 border-t border-border pt-6 font-sans text-meta  text-muted-foreground sm:grid-cols-2 sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.fullName}
          </p>
          {l(profile.lastUpdate) && (
            <p className="sm:text-right">
              {t.footer.lastUpdate}: {l(profile.lastUpdate)}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
