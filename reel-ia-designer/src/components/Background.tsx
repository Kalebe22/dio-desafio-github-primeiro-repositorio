import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { colors, HEIGHT, WIDTH } from "../theme";

type Props = { accent: string; sceneFrame: number; sceneStarts: number[] };

/** Fundo escuro com grid em movimento, brilho na cor da cena e geometria girando no ritmo. */
export const Background: React.FC<Props> = ({ accent, sceneFrame, sceneStarts }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;

  // Pulso de "batida" a cada troca de cena
  const beat = interpolate(sceneFrame, [0, 0.4 * fps], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sceneIndex = sceneStarts.filter((s) => s <= frame).length;

  return (
    <AbsoluteFill style={{ background: colors.bg, overflow: "hidden" }}>
      {/* grid deslizando na diagonal */}
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${colors.grid} 2px, transparent 2px), linear-gradient(90deg, ${colors.grid} 2px, transparent 2px)`,
          backgroundSize: "90px 90px",
          backgroundPosition: `${t * 30}px ${t * 60}px`,
        }}
      />
      {/* brilho radial na cor de destaque da cena */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 45%, ${accent}${beat > 0 ? "40" : "26"} 0%, transparent 55%)`,
          transform: `scale(${1 + beat * 0.15})`,
        }}
      />
      {/* anel que expande a cada corte */}
      <div
        style={{
          position: "absolute",
          left: WIDTH / 2,
          top: HEIGHT * 0.45,
          width: 400,
          height: 400,
          marginLeft: -200,
          marginTop: -200,
          borderRadius: "50%",
          border: `6px solid ${accent}`,
          opacity: beat * 0.6,
          transform: `scale(${1 + (1 - beat) * 3})`,
        }}
      />
      {/* quadrado girando (canto superior direito) — gira 45° a cada cena */}
      <div
        style={{
          position: "absolute",
          right: -90,
          top: 260,
          width: 300,
          height: 300,
          border: `4px solid ${accent}`,
          opacity: 0.35,
          transform: `rotate(${sceneIndex * 45 + t * 12 - beat * 20}deg)`,
        }}
      />
      {/* círculo tracejado (canto inferior esquerdo) */}
      <div
        style={{
          position: "absolute",
          left: -140,
          bottom: 380,
          width: 360,
          height: 360,
          borderRadius: "50%",
          border: `4px dashed ${colors.white}`,
          opacity: 0.12,
          transform: `rotate(${-t * 25}deg) scale(${1 + beat * 0.1})`,
        }}
      />
      {/* marcadores "+" */}
      {[
        [140, 420],
        [930, 1280],
        [200, 1420],
        [880, 560],
      ].map(([x, y], i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: x,
            top: y + Math.sin(t * 2 + i) * 10,
            color: i % 2 ? accent : colors.white,
            opacity: 0.4,
            fontSize: 48,
            fontWeight: 700,
            fontFamily: "monospace",
            transform: `rotate(${t * 40 * (i % 2 ? 1 : -1)}deg)`,
          }}
        >
          +
        </div>
      ))}
      {/* vinheta */}
      <AbsoluteFill
        style={{ background: "radial-gradient(circle, transparent 50%, rgba(0,0,0,0.65) 100%)" }}
      />
    </AbsoluteFill>
  );
};
