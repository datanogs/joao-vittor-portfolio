import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { useI18n } from "@/lib/i18n";

type Props = Omit<ComponentProps<typeof Link>, "to" | "params"> & {
  to: string;
  params?: { slug: string };
};

/** Link interno que preserva o idioma atual e usa as URLs semânticas PT/EN. */
export function LocalizedLink({ to, params, ...props }: Props) {
  const { path } = useI18n();
  const target = params ? path(to).replace("$slug", encodeURIComponent(params.slug)) : path(to);
  return <Link {...props} to={target as never} />;
}
