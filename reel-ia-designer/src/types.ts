import type { ColorName, Palette } from "./theme";

export type LineEffect =
  | "slam" // entra gigante (escala 2.6 → 1) com impacto + tremida de câmera
  | "pop" // escala 0 → 1 com overshoot (spring)
  | "words" // palavra por palavra, sobe 40px e sai do blur
  | "mask" // texto sobe de trás de uma máscara (clip)
  | "type" // máquina de escrever com cursor
  | "strike" // aparece e uma barra risca o texto
  | "highlight" // marca-texto varre da esquerda p/ direita
  | "glitch" // separação RGB tremendo nos primeiros frames
  | "counter"; // número conta de `from` até `to`

export type Transition =
  | "cut" // corte seco
  | "flash" // flash de 4 frames na cor `palette.flash`
  | "zoomPunch" // entra com zoom 1.25 → 1
  | "whipLeft" // chicote horizontal com motion blur
  | "whipUp" // chicote vertical com motion blur
  | "glitch"; // fatias deslocadas + RGB split

export type IconName =
  | "pen"
  | "grid"
  | "brush"
  | "spark"
  | "bookmark"
  | "warning"
  | "folder"
  | "chat"
  | "steps"
  | "plug"
  | "file"
  | "check"
  | "asterisk";

export type Line = {
  text: string;
  effect: LineEffect;
  color?: ColorName; // padrão: "text"
  size?: number; // px
  delay?: number; // segundos após o início da cena
  counter?: { from: number; to: number; suffix?: string };
};

export type Scene = {
  id: string;
  duration: number; // segundos (1.5 a 2s = quebra visual constante)
  transition: Transition;
  accent: ColorName; // cor do brilho de fundo e dos elementos geométricos
  shake?: boolean;
  icon?: IconName;
  badge?: string; // etiqueta pequena acima do texto
  lines: Line[];
};

export type Video = {
  id: string; // vira o nome da composição: <id>30 e <id>60
  title: string;
  palette: Palette;
  scenes: Scene[];
};

export const totalSeconds = (v: Video) => v.scenes.reduce((s, sc) => s + sc.duration, 0);
