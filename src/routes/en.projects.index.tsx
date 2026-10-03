import { createFileRoute } from "@tanstack/react-router";
import { ProjetosPage } from "./projetos.index";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/en/projects/")({
  head: () => buildSeoHead("en", seoPages.projects),
  component: ProjetosPage,
});
