import React from "react";
import { Easing, interpolate } from "remotion";
import type { IconName } from "../script";

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
        filter: `drop-shadow(0 0 24px ${color}88)`,
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
