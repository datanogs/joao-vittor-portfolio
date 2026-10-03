import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "./index";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/en/")({
  head: () => buildSeoHead("en", seoPages.home),
  component: HomePage,
});
