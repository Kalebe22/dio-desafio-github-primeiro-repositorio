import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/inter/600.css";

export const WIDTH = 1080;
export const HEIGHT = 1920;

export const colors = {
  bg: "#0A0A0F",
  bgAlt: "#13131C",
  grid: "rgba(255,255,255,0.045)",
  white: "#F5F5F7",
  yellow: "#FFD60A",
  green: "#39FF88",
  red: "#FF3B5C",
  muted: "#8A8A99",
} as const;

export type ColorName = keyof typeof colors;

export const fonts = {
  display: "Montserrat, sans-serif",
  body: "Inter, sans-serif",
};

// Zona segura do Reels: evita a UI do app (legenda/botões embaixo, ícones à direita)
export const SAFE = { top: 220, bottom: 420, side: 90 };
