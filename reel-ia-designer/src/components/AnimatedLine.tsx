import React from "react";
import { Easing, interpolate, random, spring } from "remotion";
import type { Line } from "../script";
import { colors, fonts } from "../theme";

type Props = { line: Line; frame: number; fps: number; index: number };

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

// Palavras em CAIXA ALTA ou começando com "#" ganham destaque automático em amarelo
const isEmphasis = (w: string) =>
  w.startsWith("#") || (/[A-ZÀ-Ú]{2,}/.test(w) && w === w.toUpperCase());

export const AnimatedLine: React.FC<Props> = ({ line, frame, fps, index }) => {
  // k converte "frames a 30fps" para o fps atual: o timing é idêntico em 30 e 60 fps
  const k = fps / 30;
  const f = frame - Math.round((line.delay ?? 0) * fps);
  const size = line.size ?? 96;
  const color = colors[line.color ?? "white"];
  const isDisplay = size >= 120 || line.text === line.text.toUpperCase();

  const base: React.CSSProperties = {
    fontFamily: fonts.display,
    fontWeight: isDisplay ? 900 : 700,
    fontSize: size,
    lineHeight: 1.02,
    letterSpacing: isDisplay ? "-0.03em" : "-0.01em",
    color,
    textAlign: "center",
    position: "relative",
    textShadow: line.color && line.color !== "white" ? `0 0 40px ${color}55` : "none",
  };

  // Antes do delay: ocupa espaço (layout estável) mas invisível
  if (f < 0) return <div style={{ ...base, opacity: 0 }}>{line.text}</div>;

  const pop = (damping = 12, stiffness = 200) =>
    spring({ frame: f, fps, config: { damping, stiffness, mass: 0.8 } });

  switch (line.effect) {
    case "slam": {
      const s = pop(14, 230);
      const scale = interpolate(s, [0, 1], [2.6, 1]);
      const opacity = interpolate(f, [0, 2 * k], [0, 1], clamp);
      const blur = interpolate(s, [0, 1], [16, 0]);
      return (
        <div style={{ ...base, opacity, transform: `scale(${scale})`, filter: `blur(${blur}px)` }}>
          {line.text}
        </div>
      );
    }

    case "pop": {
      const s = pop(9, 180);
      const rot = interpolate(s, [0, 1], [-12, 0]);
      return (
        <div style={{ ...base, transform: `scale(${s}) rotate(${rot}deg)` }}>{line.text}</div>
      );
    }

    case "words": {
      const words = line.text.split(" ");
      return (
        <div
          style={{
            ...base,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            columnGap: "0.28em",
            maxWidth: 900,
          }}
        >
          {words.map((w, i) => {
            const p = spring({
              frame: f - i * 3 * k,
              fps,
              config: { damping: 14, stiffness: 220 },
            });
            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  opacity: p,
                  transform: `translateY(${(1 - p) * 40}px)`,
                  filter: `blur(${(1 - p) * 10}px)`,
                  color: isEmphasis(w) && !line.color ? colors.yellow : color,
                  fontWeight: isEmphasis(w) ? 900 : base.fontWeight,
                }}
              >
                {w}
              </span>
            );
          })}
        </div>
      );
    }

    case "mask": {
      const p = spring({ frame: f, fps, config: { damping: 16, stiffness: 160 } });
      return (
        <div style={{ overflow: "hidden", paddingBottom: size * 0.08 }}>
          <div style={{ ...base, transform: `translateY(${(1 - p) * 110}%)` }}>{line.text}</div>
        </div>
      );
    }

    case "type": {
      const chars = Math.floor(
        interpolate(f, [0, line.text.length * 1.2 * k], [0, line.text.length], clamp),
      );
      const cursorOn = Math.floor(f / (8 * k)) % 2 === 0;
      return (
        <div style={{ ...base, fontFamily: fonts.body, fontWeight: 600 }}>
          {line.text.slice(0, chars)}
          <span style={{ opacity: cursorOn ? 1 : 0, color: colors.green }}>▍</span>
        </div>
      );
    }

    case "strike": {
      const s = pop(13, 220);
      const bar = interpolate(f, [9 * k, 16 * k], [0, 1], {
        ...clamp,
        easing: Easing.out(Easing.cubic),
      });
      const dim = interpolate(bar, [0, 1], [1, 0.45]);
      return (
        <div style={{ ...base, transform: `scale(${interpolate(s, [0, 1], [1.4, 1])})`, opacity: s }}>
          <span style={{ opacity: dim }}>{line.text}</span>
          <div
            style={{
              position: "absolute",
              left: "-4%",
              right: "-4%",
              top: "50%",
              height: size * 0.13,
              marginTop: -size * 0.065,
              background: colors.red,
              transform: `scaleX(${bar}) rotate(-4deg)`,
              transformOrigin: "left center",
              boxShadow: `0 0 30px ${colors.red}`,
              borderRadius: 6,
            }}
          />
        </div>
      );
    }

    case "highlight": {
      const appear = interpolate(f, [0, 4 * k], [0, 1], clamp);
      const box = interpolate(f, [3 * k, 11 * k], [0, 1], {
        ...clamp,
        easing: Easing.inOut(Easing.cubic),
      });
      return (
        <div style={{ position: "relative", padding: `0 ${size * 0.18}px`, opacity: appear }}>
          <div
            style={{
              position: "absolute",
              inset: `${size * 0.04}px 0`,
              background: color,
              transform: `scaleX(${box}) skewX(-8deg)`,
              transformOrigin: "left center",
              borderRadius: 10,
            }}
          />
          <div
            style={{
              ...base,
              color: box > 0.55 ? colors.bg : color,
              textShadow: "none",
              transform: `scale(${interpolate(box, [0, 0.6, 1], [1, 1.06, 1])})`,
            }}
          >
            {line.text}
          </div>
        </div>
      );
    }

    case "glitch": {
      const active = f < 12 * k;
      const step = Math.floor(f / (2 * k)); // jitter muda a cada 2 frames (a 30fps)
      const amp = active ? interpolate(f, [0, 12 * k], [26, 0], clamp) : 0;
      const dx = (random(`gx-${index}-${step}`) - 0.5) * amp * 2;
      const dy = (random(`gy-${index}-${step}`) - 0.5) * amp * 0.6;
      const opacity = interpolate(f, [0, 2 * k], [0, 1], clamp);
      const layer = (c: string, ox: number): React.CSSProperties => ({
        ...base,
        position: "absolute",
        inset: 0,
        color: c,
        mixBlendMode: "screen",
        textShadow: "none",
        transform: `translate(${ox}px, 0)`,
        opacity: active ? 0.85 : 0,
      });
      return (
        <div style={{ position: "relative", opacity, transform: `translate(${dx}px, ${dy}px)` }}>
          <div style={layer("#FF2D55", amp * 0.7)}>{line.text}</div>
          <div style={layer("#00E5FF", -amp * 0.7)}>{line.text}</div>
          <div style={base}>{line.text}</div>
        </div>
      );
    }

    case "counter": {
      const c = line.counter ?? { from: 0, to: Number(line.text) || 0 };
      const value = Math.round(
        interpolate(f, [0, 18 * k], [c.from, c.to], { ...clamp, easing: Easing.out(Easing.cubic) }),
      );
      const done = f - 18 * k;
      const bump = done >= 0 ? spring({ frame: done, fps, config: { damping: 8, stiffness: 300 } }) : 0;
      const scale = 1 + Math.sin(bump * Math.PI) * 0.12;
      return (
        <div style={{ ...base, transform: `scale(${scale})`, fontVariantNumeric: "tabular-nums" }}>
          {value}
          {c.suffix ?? ""}
        </div>
      );
    }
  }
};
