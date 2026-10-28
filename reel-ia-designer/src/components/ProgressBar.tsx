import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { usePalette, WIDTH } from "../theme";

/** Barra de progresso no topo com marcações de cada cena (cria sensação de "falta pouco"). */
export const ProgressBar: React.FC<{ sceneStarts: number[] }> = ({ sceneStarts }) => {
  const palette = usePalette();
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = frame / (durationInFrames - 1);

  return (
    <div style={{ position: "absolute", top: 70, left: 60, right: 60, height: 14 }}>
      <div
        style={{ position: "absolute", inset: 0, background: palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "rgba(20,20,19,0.10)", borderRadius: 7 }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: `${progress * 100}%`,
          background: `linear-gradient(90deg, ${palette.secondary}, ${palette.primary})`,
          borderRadius: 7,
          boxShadow: palette.mode === "dark" ? `0 0 20px ${palette.secondary}` : "none",
        }}
      />
      {sceneStarts.slice(1).map((s) => (
        <div
          key={s}
          style={{
            position: "absolute",
            top: -4,
            width: 4,
            height: 22,
            left: (s / durationInFrames) * (WIDTH - 120) - 2,
            background: frame >= s ? palette.bg : palette.mode === "dark" ? "rgba(255,255,255,0.35)" : "rgba(20,20,19,0.25)",
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
};
