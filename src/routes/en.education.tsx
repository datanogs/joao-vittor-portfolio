import { createFileRoute } from "@tanstack/react-router";
import { FormacaoPage } from "./formacao";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/en/education")({
  head: () => buildSeoHead("en", seoPages.education),
  component: FormacaoPage,
});
