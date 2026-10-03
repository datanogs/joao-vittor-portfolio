import { createFileRoute } from "@tanstack/react-router";
import { ContatoPage } from "./contato";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/en/contact")({
  head: () => buildSeoHead("en", seoPages.contact),
  component: ContatoPage,
});
