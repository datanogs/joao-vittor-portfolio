import { profile } from "@/content/profile";

/** Marca principal de João Vittor Nogueira. O monograma é vetorial e adapta-se aos dois temas. */
export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex min-w-0 items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        width="36"
        height="36"
        aria-hidden="true"
        className="h-9 w-9 shrink-0 overflow-visible"
      >
        <path
          d="M8 10h19v29c0 10-5 15-15 15-3.7 0-7-.8-9.6-2.4l4.4-9.2c1.5.9 2.9 1.3 4.2 1.3 3.3 0 5-1.8 5-5.3V20H8z"
          fill="currentColor"
        />
        <path d="M22 10h11l8.5 24L50 10h10L46 54H36z" fill="var(--color-primary)" />
        <path d="M42 10h7l8 15V10h6v44h-7l-8-15v15h-6z" fill="currentColor" opacity=".94" />
      </svg>
      <span className="hidden min-w-0 sm:block">
        <span className="block truncate font-display text-[13px] font-semibold leading-none tracking-[-0.02em] text-foreground">
          {profile.fullName}
        </span>
        <span className="mt-1.5 block font-sans text-meta  text-muted-foreground">Data / BI</span>
      </span>
    </span>
  );
}
