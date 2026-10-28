import React from "react";
import { AbsoluteFill, Easing, interpolate, random } from "remotion";
import type { Scene } from "../types";
import { SAFE, usePalette } from "../theme";
import { AnimatedLine } from "./AnimatedLine";
import { Icon } from "./Icon";

type Props = { scene: Scene; frame: number; fps: number; durationInFrames: number };

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/**
 * Uma cena = transição de entrada + "câmera" (zoom lento / tremida) + linhas animadas + saída.
 */
export const SceneView: React.FC<Props> = ({ scene, frame, fps, durationInFrames }) => {
  const palette = usePalette();
  const k = fps / 30;
  const accent = palette[scene.accent];
  const inLen = 8 * k;
  const pIn = interpolate(frame, [0, inLen], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });

  // ── Transição de entrada ──
  let tx = 0;
  let ty = 0;
  let scale = 1;
  let blurX = 0;
  let blurY = 0;
  let rgb = 0;
  switch (scene.transition) {
    case "zoomPunch":
      scale = interpolate(pIn, [0, 1], [1.25, 1]);
      break;
    case "whipLeft":
      tx = interpolate(pIn, [0, 1], [1000, 0]);
      blurX = interpolate(pIn, [0, 1], [40, 0]);
      break;
    case "whipUp":
      ty = interpolate(pIn, [0, 1], [1400, 0]);
      blurY = interpolate(pIn, [0, 1], [40, 0]);
      break;
    case "glitch": {
      const step = Math.floor(frame / (2 * k));
      const amp = interpolate(frame, [0, inLen], [60, 0], clamp);
      tx = (random(`sg-${scene.id}-${step}`) - 0.5) * amp * 2;
      rgb = amp * 0.4;
      break;
    }
    default:
      break;
  }

  // ── Câmera: zoom contínuo (Ken Burns) para a tela nunca ficar parada ──
  const drift = interpolate(frame, [0, durationInFrames], [1, 1.06]);

  // ── Tremida de impacto ──
  if (scene.shake) {
    const amp = interpolate(frame, [2 * k, 14 * k], [22, 0], clamp);
    const step = Math.floor(frame / k);
    tx += (random(`shx-${scene.id}-${step}`) - 0.5) * amp * 2;
    ty += (random(`shy-${scene.id}-${step}`) - 0.5) * amp * 2;
  }

  // ── Saída: zoom-out rápido + fade nos últimos 5 frames ──
  const outStart = durationInFrames - 5 * k;
  const exitP = interpolate(frame, [outStart, durationInFrames], [0, 1], clamp);
  scale *= 1 + exitP * 0.12;
  const opacity = 1 - exitP;

  const flash =
    scene.transition === "flash" ? interpolate(frame, [0, 5 * k], [0.9, 0], clamp) : 0;
  const filterId = `mb-${scene.id}`;

  return (
    <AbsoluteFill>
      <svg width={0} height={0} style={{ position: "absolute" }}>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation={`${blurX} ${blurY}`} />
        </filter>
      </svg>
      <AbsoluteFill
        style={{
          paddingTop: SAFE.top,
          paddingBottom: SAFE.bottom,
          paddingLeft: SAFE.side,
          paddingRight: SAFE.side,
          justifyContent: "center",
          alignItems: "center",
          gap: 18,
          opacity,
          transform: `translate(${tx}px, ${ty}px) scale(${scale * drift})`,
          filter: [
            blurX || blurY ? `url(#${filterId})` : "",
            rgb
              ? palette.mode === "dark"
                ? `drop-shadow(${rgb}px 0 0 #FF2D55) drop-shadow(${-rgb}px 0 0 #00E5FF)`
                : `drop-shadow(${rgb}px 0 0 ${palette.primary}) drop-shadow(${-rgb}px 0 0 ${palette.secondary})`
              : "",
          ].join(" ") || undefined,
        }}
      >
        {scene.icon && <Icon name={scene.icon} color={accent} frame={frame} fps={fps} />}
        {scene.badge && (
          <div
            style={{
              fontFamily: palette.fonts.body,
              fontWeight: 600,
              fontSize: 34,
              letterSpacing: "0.12em",
              color: accent,
              border: `3px solid ${accent}`,
              borderRadius: 999,
              padding: "12px 30px",
              marginBottom: 20,
              opacity: interpolate(frame, [0, 6 * k], [0, 1], clamp),
            }}
          >
            {scene.badge}
          </div>
        )}
        {scene.lines.map((line, i) => (
          <AnimatedLine key={i} line={line} frame={frame} fps={fps} index={i} />
        ))}
      </AbsoluteFill>

      {/* faixas de glitch na entrada */}
      {scene.transition === "glitch" && frame < inLen && (
        <>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: random(`gb-${scene.id}-${i}-${Math.floor(frame / (2 * k))}`) * 1800,
                height: 20 + i * 18,
                background: i === 1 ? accent : palette.text,
                opacity: 0.5,
                mixBlendMode: palette.mode === "dark" ? "difference" : "multiply",
              }}
            />
          ))}
        </>
      )}
      {flash > 0 && <AbsoluteFill style={{ background: palette.flash, opacity: flash }} />}
    </AbsoluteFill>
  );
};
