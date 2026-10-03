import { createFileRoute } from "@tanstack/react-router";
import { SobrePage } from "./sobre";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/en/about")({
  head: () => buildSeoHead("en", seoPages.about),
  component: SobrePage,
});
