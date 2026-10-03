import { createFileRoute } from "@tanstack/react-router";
import { DataNogsPage } from "./datanogs";
import { buildSeoHead, seoPages } from "@/lib/seo";

export const Route = createFileRoute("/en/datanogs")({
  head: () => buildSeoHead("en", seoPages.datanogs),
  component: DataNogsPage,
});
