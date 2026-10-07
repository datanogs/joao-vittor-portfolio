import type { CSSProperties } from "react";

export type SceneKind = "structure" | "document" | "ranking" | "finance" | "drill" | "refine";
const offsets = [
  [-18, 28],
  [25, -19],
  [-12, 34],
  [32, 16],
  [-24, -30],
  [19, 27],
  [-30, 20],
  [16, -28],
  [25, 32],
  [-17, -22],
  [30, 14],
  [-25, 29],
];

/** Conceptual marks only: no axes, quantities, measurements or business results. */
export function DataScene({
  kind = "structure",
  grid = false,
}: {
  kind?: SceneKind;
  grid?: boolean;
}) {
  return (
    <div className={`data-scene scene-${kind}`} data-motion>
      <svg viewBox="0 0 360 150" fill="none" aria-hidden="true" focusable="false">
        {grid && (
          <g className="scene-grid">
            {[30, 60, 90, 120].map((y, i) => (
              <path
                key={y}
                pathLength="1"
                d={`M12 ${y}H348`}
                style={{ "--i": i } as CSSProperties}
              />
            ))}
            {[40, 110, 180, 250, 320].map((x, i) => (
              <path
                key={x}
                pathLength="1"
                d={`M${x} 12V138`}
                style={{ "--i": i + 4 } as CSSProperties}
              />
            ))}
          </g>
        )}
        <path
          className="scene-route"
          pathLength="1"
          d={
            kind === "drill" || kind === "refine"
              ? "M40 30H110V60H180V90H250V120H320"
              : "M40 75H110L180 45L250 75H320"
          }
        />
        {offsets.map(([dx, dy], i) => {
          const col = Math.floor(i / 3),
            row = i % 3;
          const x = kind === "document" ? 85 + row * 65 : 40 + col * 70;
          const y =
            kind === "drill" || kind === "refine"
              ? 24 + col * 24 + row * 8
              : kind === "ranking"
                ? 35 + row * 36
                : 45 + row * 30;
          return (
            <g
              key={i}
              className={`scene-mark mark-${i}`}
              style={{ "--dx": `${dx}px`, "--dy": `${dy}px`, "--i": i } as CSSProperties}
            >
              {kind === "document" ? (
                <path d={`M${x} ${y}h36`} className="document-stroke" />
              ) : (
                <circle cx={x} cy={y} r={kind === "finance" ? 4 : 3} />
              )}
            </g>
          );
        })}
        <circle
          className="scene-decision"
          cx="320"
          cy={kind === "drill" || kind === "refine" ? 120 : 75}
          r="6"
        />
        <path className="scene-scan" d="M0 12V138" />
      </svg>
    </div>
  );
}
