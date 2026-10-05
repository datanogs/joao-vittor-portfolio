import { profile } from "@/content/profile";
import { useI18n } from "@/lib/i18n";

/** Assinatura institucional da marca Synthesis. O símbolo é abstrato e não representa iniciais. */
export function BrandLogo({ className = "" }: { className?: string }) {
  const { l } = useI18n();

  return (
    <span className={`brand-logo inline-flex min-w-0 items-center gap-3 ${className}`}>
      <span className="brand-logo-symbol h-10 w-10 shrink-0" aria-hidden="true">
        <img
          src={profile.brandAssets.symbolLight}
          alt=""
          width="40"
          height="40"
          className="block h-10 w-10 dark:hidden"
        />
        <img
          src={profile.brandAssets.symbolDark}
          alt=""
          width="40"
          height="40"
          className="hidden h-10 w-10 dark:block"
        />
      </span>
      <span className="hidden min-w-0 sm:block">
        <span className="block truncate font-display text-[13px] font-semibold leading-none tracking-[0.08em] text-foreground">
          {profile.fullName.toUpperCase()}
        </span>
        <span className="mt-1.5 block font-sans text-meta text-muted-foreground">
          {l(profile.role)}
        </span>
      </span>
    </span>
  );
}
