import { claudeWarm } from "../theme";
import type { Video } from "../types";

/**
 * ROTEIRO — "Claude Cowork: como funciona"
 * Paleta claudeWarm: fundo bege, laranja terracota (primary) e verde-oliva (secondary).
 */
export const claudeCowork: Video = {
  id: "ClaudeCowork",
  title: "Claude Cowork: como funciona",
  palette: claudeWarm,
  scenes: [
    // ───────── GANCHO (0s → 3s) ─────────
    {
      id: "hook-1",
      duration: 1.5,
      transition: "flash",
      accent: "primary",
      shake: true,
      lines: [
        { text: "você ainda só", effect: "words", size: 86 },
        { text: "CONVERSA", effect: "slam", color: "primary", size: 170, delay: 0.2 },
      ],
    },
    {
      id: "hook-2",
      duration: 1.5,
      transition: "zoomPunch",
      accent: "secondary",
      lines: [
        { text: "com a IA?", effect: "words", size: 130 },
        { text: "isso mudou.", effect: "type", color: "muted", size: 72, delay: 0.55 },
      ],
    },

    // ───────── REVELAÇÃO ─────────
    {
      id: "reveal",
      duration: 2.0,
      transition: "whipLeft",
      accent: "primary",
      icon: "asterisk",
      shake: true,
      badge: "NO APP DESKTOP DO CLAUDE",
      lines: [
        { text: "CLAUDE", effect: "mask", size: 120 },
        { text: "COWORK", effect: "slam", color: "primary", size: 190, delay: 0.3 },
      ],
    },
    {
      id: "definition",
      duration: 1.8,
      transition: "zoomPunch",
      accent: "secondary",
      lines: [
        { text: "não só responde:", effect: "words", size: 84 },
        { text: "FAZ O TRABALHO", effect: "highlight", color: "primary", size: 118, delay: 0.35 },
      ],
    },
    {
      id: "how",
      duration: 1.6,
      transition: "glitch",
      accent: "secondary",
      lines: [
        { text: "como funciona?", effect: "type", color: "muted", size: 72 },
        { text: "3 PASSOS", effect: "slam", color: "secondary", size: 170, delay: 0.35 },
      ],
    },

    // ───────── PASSOS ─────────
    {
      id: "step-1",
      duration: 1.8,
      transition: "whipUp",
      accent: "primary",
      icon: "folder",
      lines: [
        { text: "#1", effect: "pop", color: "primary", size: 190 },
        { text: "DÊ ACESSO", effect: "mask", size: 124, delay: 0.2 },
        { text: "a uma pasta do seu computador", effect: "words", color: "muted", size: 62, delay: 0.5 },
      ],
    },
    {
      id: "step-2",
      duration: 1.8,
      transition: "whipLeft",
      accent: "secondary",
      icon: "chat",
      lines: [
        { text: "#2", effect: "pop", color: "secondary", size: 190 },
        { text: "DESCREVA", effect: "mask", size: 124, delay: 0.2 },
        { text: "o resultado que você quer", effect: "words", color: "muted", size: 62, delay: 0.5 },
      ],
    },
    {
      id: "step-3",
      duration: 1.8,
      transition: "whipUp",
      accent: "primary",
      icon: "steps",
      lines: [
        { text: "#3", effect: "pop", color: "primary", size: 190 },
        { text: "ELE EXECUTA", effect: "mask", size: 124, delay: 0.2 },
        { text: "planeja, faz cada etapa e entrega", effect: "words", color: "muted", size: 62, delay: 0.5 },
      ],
    },

    // ───────── O QUE ELE FAZ ─────────
    {
      id: "files",
      duration: 1.8,
      transition: "zoomPunch",
      accent: "secondary",
      icon: "file",
      badge: "PLANILHAS • DOCUMENTOS • SLIDES",
      lines: [
        { text: "lê, cria e edita", effect: "words", size: 88 },
        { text: "ARQUIVOS REAIS", effect: "highlight", color: "secondary", size: 118, delay: 0.3 },
      ],
    },
    {
      id: "apps",
      duration: 1.8,
      transition: "zoomPunch",
      accent: "primary",
      icon: "plug",
      lines: [
        { text: "e se conecta aos", effect: "words", size: 88 },
        { text: "SEUS APPS", effect: "highlight", color: "primary", size: 150, delay: 0.3 },
        { text: "com conectores e plugins", effect: "words", color: "muted", size: 62, delay: 0.7 },
      ],
    },
    {
      id: "control",
      duration: 1.8,
      transition: "flash",
      accent: "secondary",
      icon: "check",
      lines: [
        { text: "você vê o plano e acompanha", effect: "words", size: 84 },
        { text: "CADA PASSO", effect: "highlight", color: "secondary", size: 140, delay: 0.4 },
      ],
    },

    // ───────── VIRADA ─────────
    {
      id: "twist-1",
      duration: 1.8,
      transition: "glitch",
      accent: "alert",
      lines: [
        { text: "não é mais um", effect: "words", size: 92 },
        { text: "CHAT", effect: "strike", size: 210, delay: 0.3 },
      ],
    },
    {
      id: "twist-2",
      duration: 1.8,
      transition: "zoomPunch",
      accent: "primary",
      shake: true,
      lines: [
        { text: "é um colega de", effect: "words", size: 92 },
        { text: "TRABALHO", effect: "slam", color: "primary", size: 170, delay: 0.3 },
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
        { text: "SALVE", effect: "pop", color: "primary", size: 210 },
        { text: "e teste no", effect: "words", size: 80, delay: 0.35 },
        { text: "CLAUDE DESKTOP", effect: "highlight", color: "secondary", size: 112, delay: 0.7 },
      ],
    },
  ],
};
