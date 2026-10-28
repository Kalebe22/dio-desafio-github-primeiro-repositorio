import { neonDark } from "../theme";
import type { Video } from "../types";

/**
 * ROTEIRO — tempos em SEGUNDOS: o mesmo roteiro renderiza em 30 ou 60 fps.
 * Cores por função (primary/secondary/alert/text/muted); a paleta define os tons.
 */
export const iaDesigner: Video = {
  id: "ReelIA",
  title: "3 ferramentas de IA que substituem um designer",
  palette: neonDark,
  scenes: [
    // ───────── GANCHO (0s → 3s) ─────────
    {
      id: "hook-1",
      duration: 1.5,
      transition: "flash",
      accent: "primary",
      shake: true,
      lines: [{ text: "3 IAs", effect: "slam", color: "primary", size: 330 }],
    },
    {
      id: "hook-2",
      duration: 1.5,
      transition: "zoomPunch",
      accent: "alert",
      lines: [
        { text: "que fazem o trabalho de um", effect: "words", size: 78 },
        { text: "DESIGNER", effect: "strike", color: "text", size: 170, delay: 0.35 },
      ],
    },
    {
      id: "loop",
      duration: 1.8,
      transition: "glitch",
      accent: "secondary",
      lines: [
        { text: "e a #3 é", effect: "words", size: 96 },
        { text: "ABSURDA", effect: "glitch", color: "secondary", size: 190, delay: 0.3 },
      ],
    },

    // ───────── FERRAMENTA #1 ─────────
    {
      id: "tool-1",
      duration: 1.8,
      transition: "whipLeft",
      accent: "primary",
      icon: "pen",
      lines: [
        { text: "#1", effect: "pop", color: "primary", size: 240 },
        { text: "RECRAFT", effect: "mask", size: 150, delay: 0.25 },
      ],
    },
    {
      id: "tool-1-benefit",
      duration: 1.8,
      transition: "zoomPunch",
      accent: "primary",
      badge: "LOGOS • ÍCONES • ILUSTRAÇÕES",
      lines: [
        { text: "arte em", effect: "words", size: 96 },
        { text: "VETOR", effect: "highlight", color: "primary", size: 200, delay: 0.25 },
        { text: "em segundos", effect: "words", color: "secondary", size: 80, delay: 0.7 },
      ],
    },

    // ───────── FERRAMENTA #2 ─────────
    {
      id: "tool-2",
      duration: 1.8,
      transition: "whipUp",
      accent: "secondary",
      icon: "grid",
      lines: [
        { text: "#2", effect: "pop", color: "secondary", size: 240 },
        { text: "CANVA", effect: "mask", size: 150, delay: 0.2 },
        { text: "MAGIC STUDIO", effect: "mask", color: "secondary", size: 92, delay: 0.4 },
      ],
    },
    {
      id: "tool-2-benefit",
      duration: 1.8,
      transition: "zoomPunch",
      accent: "secondary",
      lines: [
        { text: "1 prompt =", effect: "words", size: 100 },
        {
          text: "30",
          effect: "counter",
          color: "primary",
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
      accent: "secondary",
      icon: "brush",
      shake: true,
      lines: [
        { text: "#3", effect: "slam", color: "secondary", size: 240 },
        { text: "KREA AI", effect: "glitch", size: 150, delay: 0.25 },
      ],
    },
    {
      id: "tool-3-benefit",
      duration: 1.8,
      transition: "zoomPunch",
      accent: "primary",
      lines: [
        { text: "rabisco vira", effect: "words", size: 96 },
        { text: "ARTE FINAL", effect: "highlight", color: "primary", size: 150, delay: 0.25 },
        { text: "em tempo real", effect: "words", color: "secondary", size: 84, delay: 0.7 },
      ],
    },

    // ───────── VIRADA (gera comentário) ─────────
    {
      id: "twist-1",
      duration: 1.8,
      transition: "flash",
      accent: "alert",
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
      accent: "primary",
      shake: true,
      lines: [
        { text: "substituem quem", effect: "words", size: 100 },
        { text: "NÃO USA IA.", effect: "slam", color: "primary", size: 170, delay: 0.35 },
      ],
    },

    // ───────── CTA ─────────
    {
      id: "cta",
      duration: 2.6,
      transition: "zoomPunch",
      accent: "secondary",
      icon: "bookmark",
      lines: [
        { text: "SALVE", effect: "pop", color: "primary", size: 230 },
        { text: "e siga para a", effect: "words", size: 84, delay: 0.35 },
        { text: "PARTE 2", effect: "highlight", color: "secondary", size: 150, delay: 0.7 },
      ],
    },
  ],
};
