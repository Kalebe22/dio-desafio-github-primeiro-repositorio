import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { colors, WIDTH } from "../theme";

/** Barra de progresso no topo com marcações de cada cena (cria sensação de "falta pouco"). */
export const ProgressBar: React.FC<{ sceneStarts: number[] }> = ({ sceneStarts }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const progress = frame / (durationInFrames - 1);

  return (
    <div style={{ position: "absolute", top: 70, left: 60, right: 60, height: 14 }}>
      <div
        style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.12)", borderRadius: 7 }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: `${progress * 100}%`,
          background: `linear-gradient(90deg, ${colors.green}, ${colors.yellow})`,
          borderRadius: 7,
          boxShadow: `0 0 20px ${colors.green}`,
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
            background: frame >= s ? colors.bg : "rgba(255,255,255,0.35)",
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
};
