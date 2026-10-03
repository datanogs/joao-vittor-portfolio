import { createFileRoute } from "@tanstack/react-router";
import { ProjectCasePage, loadProject } from "./projetos.$slug";
import { buildProjectSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/en/projects/$slug")({
  loader: ({ params }) => loadProject(params.slug),
  head: ({ loaderData }) => (loaderData ? buildProjectSeoHead("en", loaderData) : { meta: [] }),
  component: EnglishProjectPage,
});

function EnglishProjectPage() {
  return <ProjectCasePage project={Route.useLoaderData()} />;
}
