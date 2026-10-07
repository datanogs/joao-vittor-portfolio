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
    <figure className="data-flow" data-reveal>
      <figcaption className="text-eyebrow">
        {l(project ? visualLanguage.projectLabel : visualLanguage.method)}
      </figcaption>
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

/** A fixed arrangement, without numeric data, particles or an animation loop. */
export function DataSignal() {
  const points = [
    [20, 38],
    [30, 128],
    [18, 213],
    [82, 76],
    [77, 171],
    [150, 50],
    [150, 127],
    [150, 203],
    [225, 76],
    [225, 175],
    [294, 125],
  ];
  return (
    <svg
      className="data-signal"
      viewBox="0 0 320 250"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="signal-grid"
        d="M0 50H320M0 125H320M0 200H320M75 0V250M150 0V250M225 0V250M300 0V250"
      />
      <g className="signal-paths">
        <path
          pathLength="1"
          d="M20 38L82 76L150 127L225 76L294 125M30 128L82 76L150 50L225 76M18 213L77 171L150 127L225 175L294 125M77 171L150 203L225 175"
        />
      </g>
      {points.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === 10 ? 5 : 2.5}
          className={i === 10 ? "signal-insight" : "signal-point"}
          style={{ "--step": i } as CSSProperties}
        />
      ))}
    </svg>
  );
}
