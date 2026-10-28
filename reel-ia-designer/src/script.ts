import type { ColorName } from "./theme";

/**
 * ROTEIRO DO REEL — edite apenas este arquivo para trocar o tema.
 * Tempos em SEGUNDOS: o mesmo roteiro renderiza em 30 ou 60 fps.
 */

export type LineEffect =
  | "slam" // entra gigante (escala 2.6 → 1) com impacto + tremida de câmera
  | "pop" // escala 0 → 1 com overshoot (spring)
  | "words" // palavra por palavra, sobe 40px e sai do blur
  | "mask" // texto sobe de trás de uma máscara (clip)
  | "type" // máquina de escrever com cursor
  | "strike" // aparece e uma barra vermelha risca o texto
  | "highlight" // marca-texto amarelo varre da esquerda p/ direita
  | "glitch" // separação RGB tremendo nos primeiros frames
  | "counter"; // número conta de `from` até `to`

export type Transition =
  | "cut" // corte seco
  | "flash" // flash branco de 4 frames
  | "zoomPunch" // entra com zoom 1.25 → 1
  | "whipLeft" // chicote horizontal com motion blur
  | "whipUp" // chicote vertical com motion blur
  | "glitch"; // fatias deslocadas + RGB split

export type IconName = "pen" | "grid" | "brush" | "spark" | "bookmark" | "warning";

export type Line = {
  text: string;
  effect: LineEffect;
  color?: ColorName;
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

export const TITLE = "3 ferramentas de IA que substituem um designer";

export const scenes: Scene[] = [
  // ───────── GANCHO (0s → 3s) ─────────
  {
    id: "hook-1",
    duration: 1.5,
    transition: "flash",
    accent: "yellow",
    shake: true,
    lines: [{ text: "3 IAs", effect: "slam", color: "yellow", size: 330 }],
  },
  {
    id: "hook-2",
    duration: 1.5,
    transition: "zoomPunch",
    accent: "red",
    lines: [
      { text: "que fazem o trabalho de um", effect: "words", size: 78 },
      { text: "DESIGNER", effect: "strike", color: "white", size: 170, delay: 0.35 },
    ],
  },
  {
    id: "loop",
    duration: 1.8,
    transition: "glitch",
    accent: "green",
    lines: [
      { text: "e a #3 é", effect: "words", size: 96 },
      { text: "ABSURDA", effect: "glitch", color: "green", size: 190, delay: 0.3 },
    ],
  },

  // ───────── FERRAMENTA #1 ─────────
  {
    id: "tool-1",
    duration: 1.8,
    transition: "whipLeft",
    accent: "yellow",
    icon: "pen",
    lines: [
      { text: "#1", effect: "pop", color: "yellow", size: 240 },
      { text: "RECRAFT", effect: "mask", size: 150, delay: 0.25 },
    ],
  },
  {
    id: "tool-1-benefit",
    duration: 1.8,
    transition: "zoomPunch",
    accent: "yellow",
    badge: "LOGOS • ÍCONES • ILUSTRAÇÕES",
    lines: [
      { text: "arte em", effect: "words", size: 96 },
      { text: "VETOR", effect: "highlight", color: "yellow", size: 200, delay: 0.25 },
      { text: "em segundos", effect: "words", color: "green", size: 80, delay: 0.7 },
    ],
  },

  // ───────── FERRAMENTA #2 ─────────
  {
    id: "tool-2",
    duration: 1.8,
    transition: "whipUp",
    accent: "green",
    icon: "grid",
    lines: [
      { text: "#2", effect: "pop", color: "green", size: 240 },
      { text: "CANVA", effect: "mask", size: 150, delay: 0.2 },
      { text: "MAGIC STUDIO", effect: "mask", color: "green", size: 92, delay: 0.4 },
    ],
  },
  {
    id: "tool-2-benefit",
    duration: 1.8,
    transition: "zoomPunch",
    accent: "green",
    lines: [
      { text: "1 prompt =", effect: "words", size: 100 },
      {
        text: "30",
        effect: "counter",
        color: "yellow",
        size: 300,
        delay: 0.2,
        counter: { from: 0, to: 30 },
      },
      { text: "POSTS PRONTOS", effect: "mask", size: 96, delay: 0.6 },
    ],
  },

  // ───────── FERRAMENTA #3 (a "absurda") ─────────
  {
    id: "tool-3",
    duration: 1.8,
    transition: "whipLeft",
    accent: "green",
    icon: "brush",
    shake: true,
    lines: [
      { text: "#3", effect: "slam", color: "green", size: 240 },
      { text: "KREA AI", effect: "glitch", size: 150, delay: 0.25 },
    ],
  },
  {
    id: "tool-3-benefit",
    duration: 1.8,
    transition: "zoomPunch",
    accent: "yellow",
    lines: [
      { text: "rabisco vira", effect: "words", size: 96 },
      { text: "ARTE FINAL", effect: "highlight", color: "yellow", size: 150, delay: 0.25 },
      { text: "em tempo real", effect: "words", color: "green", size: 84, delay: 0.7 },
    ],
  },

  // ───────── VIRADA (gera comentário) ─────────
  {
    id: "twist-1",
    duration: 1.8,
    transition: "flash",
    accent: "red",
    icon: "warning",
    lines: [
      { text: "mas atenção:", effect: "type", color: "muted", size: 70 },
      { text: "elas NÃO substituem um designer.", effect: "words", size: 104, delay: 0.4 },
    ],
  },
  {
    id: "twist-2",
    duration: 2.0,
    transition: "glitch",
    accent: "yellow",
    shake: true,
    lines: [
      { text: "substituem quem", effect: "words", size: 100 },
      { text: "NÃO USA IA.", effect: "slam", color: "yellow", size: 170, delay: 0.35 },
    ],
  },

  // ───────── CTA ─────────
  {
    id: "cta",
    duration: 2.6,
    transition: "zoomPunch",
    accent: "green",
    icon: "bookmark",
    lines: [
      { text: "SALVE", effect: "pop", color: "yellow", size: 230 },
      { text: "e siga para a", effect: "words", size: 84, delay: 0.35 },
      { text: "PARTE 2", effect: "highlight", color: "green", size: 150, delay: 0.7 },
    ],
  },
];

export const totalSeconds = scenes.reduce((s, sc) => s + sc.duration, 0);
