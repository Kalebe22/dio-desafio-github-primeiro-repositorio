import React from "react";
import { Easing, interpolate } from "remotion";
import { usePalette } from "../theme";
import type { IconName } from "../types";

// Ícones desenhados em traço (viewBox 24x24). pathLength=1 permite animar o "desenho" do traço.
const shapes: Record<IconName, React.ReactElement<React.SVGProps<SVGElement>>[]> = {
  pen: [
    <path d="M2 2 L5.5 16.5 L13 18 L18 13 L16.5 5.5 Z" />,
    <path d="M2 2 L9.6 9.6" />,
    <circle cx="11" cy="11" r="2" />,
    <path d="M13 18 L16 21 L21 16 L18 13" />,
  ],
  grid: [
    <rect x="3" y="3" width="7" height="7" rx="1.5" />,
    <rect x="14" y="3" width="7" height="7" rx="1.5" />,
    <rect x="3" y="14" width="7" height="7" rx="1.5" />,
    <rect x="14" y="14" width="7" height="7" rx="1.5" />,
  ],
  brush: [
    <path d="M9 14 C6 14 4 16 4 19 C4 20 3 21 2 21 C4 22.5 9 22 10 19 C10.5 17 10 15 9 14 Z" />,
    <path d="M9.5 14.5 L20 4 C20.6 3.4 21.4 4.2 20.8 4.8 L10.5 15.5" />,
  ],
  spark: [<path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />],
  bookmark: [<path d="M6 3 H18 V21 L12 16 L6 21 Z" />],
  folder: [<path d="M3 6.5 C3 5.7 3.7 5 4.5 5 H9.5 L11.5 7.5 H19.5 C20.3 7.5 21 8.2 21 9 V18 C21 18.8 20.3 19.5 19.5 19.5 H4.5 C3.7 19.5 3 18.8 3 18 Z" />],
  chat: [
    <path d="M4 5 H20 C20.6 5 21 5.4 21 6 V15 C21 15.6 20.6 16 20 16 H10 L5 20 V16 H4 C3.4 16 3 15.6 3 15 V6 C3 5.4 3.4 5 4 5 Z" />,
    <path d="M7.5 9.5 H16.5" />,
    <path d="M7.5 12.5 H13" />,
  ],
  steps: [
    <path d="M3 6 L4.5 7.5 L7 5" />,
    <path d="M10 6.2 H21" />,
    <path d="M3 12 L4.5 13.5 L7 11" />,
    <path d="M10 12.2 H21" />,
    <path d="M3 18 L4.5 19.5 L7 17" />,
    <path d="M10 18.2 H17" />,
  ],
  plug: [
    <path d="M9 2 V7" />,
    <path d="M15 2 V7" />,
    <path d="M6 7 H18 V11 C18 14.3 15.3 17 12 17 C8.7 17 6 14.3 6 11 Z" />,
    <path d="M12 17 V22" />,
  ],
  file: [
    <path d="M6 2.5 H14 L19 7.5 V21.5 H6 Z" />,
    <path d="M14 2.5 V7.5 H19" />,
    <path d="M9 12 H16" />,
    <path d="M9 15.5 H16" />,
    <path d="M9 19 H13" />,
  ],
  check: [<circle cx="12" cy="12" r="9.5" />, <path d="M7.5 12.3 L10.6 15.4 L16.5 9" />],
  asterisk: [
    <path d="M12 2.5 V21.5" />,
    <path d="M3.8 7.2 L20.2 16.8" />,
    <path d="M3.8 16.8 L20.2 7.2" />,
  ],
  warning: [
    <path d="M12 3 L22 20 H2 Z" />,
    <path d="M12 9 V14" />,
    <path d="M12 17 V17.6" />,
  ],
};

export const Icon: React.FC<{
  name: IconName;
  color: string;
  frame: number;
  fps: number;
  size?: number;
}> = ({ name, color, frame, fps, size = 200 }) => {
  const palette = usePalette();
  const draw = interpolate(frame, [0, 0.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const float = Math.sin((frame / fps) * Math.PI * 2 * 0.8) * 8;
  const rot = interpolate(draw, [0, 1], [-20, 0]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="-1 -1 26 26"
      fill="none"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: `translateY(${float}px) rotate(${rot}deg) scale(${0.6 + draw * 0.4})`,
        filter: palette.mode === "dark" ? `drop-shadow(0 0 24px ${color}88)` : "none",
        marginBottom: 30,
      }}
    >
      {shapes[name].map((el, i) =>
        React.cloneElement(el, {
          key: i,
          pathLength: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1 - draw,
        }),
      )}
    </svg>
  );
};
