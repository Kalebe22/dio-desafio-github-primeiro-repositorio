import { createContext, useContext } from "react";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/inter/600.css";
import "@fontsource/source-serif-4/700.css";
import "@fontsource/source-serif-4/900.css";

export const WIDTH = 1080;
export const HEIGHT = 1920;

// Zona segura do Reels: evita a UI do app (legenda/botões embaixo, ícones à direita)
export const SAFE = { top: 220, bottom: 420, side: 90 };

/** Cores por FUNÇÃO: o roteiro usa "primary", "secondary"... e cada vídeo escolhe a paleta. */
export type Palette = {
  mode: "dark" | "light";
  bg: string;
  grid: string;
  text: string;
  primary: string; // destaque principal (números, palavras-chave, marca-texto)
  secondary: string; // destaque de apoio
  alert: string; // riscar / alertar
  muted: string;
  flash: string; // cor do flash de transição
  fonts: { display: string; body: string; displayWeight: number; boldWeight: number };
};

export type ColorName = "text" | "primary" | "secondary" | "alert" | "muted";

/** Neon escuro: fundo preto, amarelo e verde. */
export const neonDark: Palette = {
  mode: "dark",
  bg: "#0A0A0F",
  grid: "rgba(255,255,255,0.045)",
  text: "#F5F5F7",
  primary: "#FFD60A",
  secondary: "#39FF88",
  alert: "#FF3B5C",
  muted: "#8A8A99",
  flash: "#FFFFFF",
  fonts: { display: "Montserrat", body: "Inter", displayWeight: 900, boldWeight: 700 },
};

/** Tons quentes inspirados no Claude: fundo bege, laranja terracota e verde-oliva. */
export const claudeWarm: Palette = {
  mode: "light",
  bg: "#F0EEE6",
  grid: "rgba(20,20,19,0.06)",
  text: "#141413",
  primary: "#D97757",
  secondary: "#5F7A47",
  alert: "#B5482A",
  muted: "#8A877D",
  flash: "#D97757",
  fonts: { display: "Source Serif 4", body: "Inter", displayWeight: 900, boldWeight: 700 },
};

export const PaletteContext = createContext<Palette>(neonDark);
export const usePalette = () => useContext(PaletteContext);
