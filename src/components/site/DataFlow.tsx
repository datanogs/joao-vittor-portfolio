import { DataScene, type SceneKind } from "./DataScene";
import type { CSSProperties } from "react";
import { visualLanguage } from "@/content/visual-language";
import { useI18n } from "@/lib/i18n";

export function DataFlow({ project }: { project?: string }) {
  const { l } = useI18n();
  const steps = project
    ? visualLanguage.projects[project as keyof typeof visualLanguage.projects]
    : visualLanguage.methodSteps;
  if (!steps) return null;
  return (
    <figure
      className={`data-flow ${project ? "project-flow" : "scroll-pipeline"}`}
      data-motion
      data-scroll-pipeline={!project || undefined}
      data-stage="0"
    >
      <figcaption className="text-eyebrow">
        {l(project ? visualLanguage.projectLabel : visualLanguage.method)}
      </figcaption>
      <DataScene
        grid={!project}
        kind={
          project
            ? ((
                {
                  "spotify-top-50": "ranking",
                  xsales: "finance",
                  "acompanhamento-vendas": "drill",
                  "gestao-abastecimentos-frota-leve": "refine",
                } as Record<string, SceneKind>
              )[project] ?? "structure")
            : "structure"
        }
      />
      <ol style={{ "--flow-count": steps.length } as CSSProperties}>
        {steps.map((step, i) => (
          <li key={step.en} style={{ "--step": i } as CSSProperties}>
            <span className="flow-node" aria-hidden="true" />
            <span>{l(step)}</span>
          </li>
        ))}
      </ol>
      {project && (
        <p className="text-meta text-muted-foreground mt-4">{l(visualLanguage.projectNote)}</p>
      )}
    </figure>
  );
}
