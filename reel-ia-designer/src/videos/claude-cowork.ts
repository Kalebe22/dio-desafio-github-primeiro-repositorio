import { claudeWarm } from "../theme";
import { syncToVoice, type Video } from "../types";

/**
 * ROTEIRO — "Claude Cowork: como funciona" (com narração)
 * Paleta claudeWarm: fundo bege, laranja terracota (primary) e verde-oliva (secondary).
 *
 * Sincronia: `start` = segundo em que a fala da cena começa na narração
 * (public/claude-cowork-narracao.mp3, voz "Isabel" da ElevenLabs). Os `delay` das linhas
 * fazem cada palavra-chave entrar junto com a voz. Tempos tirados da transcrição com
 * marcação por palavra; se trocar o áudio, refaça os `start`/`delay`.
 */
const NARRATION_END = 36.7; // fim da fala (35,72 s) + respiro para o CTA

export const claudeCowork: Video = {
  id: "ClaudeCowork",
  title: "Claude Cowork: como funciona",
  palette: claudeWarm,
  audio: { src: "claude-cowork-narracao.mp3" },
  scenes: syncToVoice(
    [
      // ───────── GANCHO ─────────
      // "Você ainda só conversa"
      {
        start: 0,
        id: "hook-1",
        transition: "flash",
        accent: "primary",
        shake: true,
        lines: [
          { text: "você ainda só", effect: "words", size: 86, delay: 0.1 },
          { text: "CONVERSA", effect: "slam", color: "primary", size: 170, delay: 0.95 },
        ],
      },
      // "com a IA? Isso mudou!"
      {
        start: 1.5,
        id: "hook-2",
        transition: "zoomPunch",
        accent: "secondary",
        lines: [
          { text: "com a IA?", effect: "words", size: 130 },
          { text: "isso mudou.", effect: "type", color: "muted", size: 72, delay: 1.05 },
        ],
      },

      // ───────── REVELAÇÃO ─────────
      // "Conheça o Claude Cowork"
      {
        start: 3.4,
        id: "reveal",
        transition: "whipLeft",
        accent: "primary",
        icon: "asterisk",
        shake: true,
        lines: [
          { text: "CLAUDE", effect: "mask", size: 120, delay: 0.6 },
          { text: "COWORK", effect: "slam", color: "primary", size: 190, delay: 1.05 },
        ],
      },
      // "no app Desktop do Claude."
      {
        start: 5.0,
        id: "where",
        transition: "zoomPunch",
        accent: "secondary",
        lines: [
          { text: "no app", effect: "words", size: 96 },
          { text: "DESKTOP", effect: "highlight", color: "secondary", size: 170, delay: 0.45 },
          { text: "do Claude", effect: "words", size: 84, delay: 1.1 },
        ],
      },
      // "Ele não só responde,"
      {
        start: 6.75,
        id: "definition",
        transition: "glitch",
        accent: "primary",
        lines: [
          { text: "ele não só", effect: "words", size: 96, delay: 0.1 },
          { text: "RESPONDE", effect: "strike", size: 170, delay: 0.75 },
        ],
      },
      // "faz o trabalho."
      {
        start: 8.4,
        id: "work",
        transition: "zoomPunch",
        accent: "primary",
        shake: true,
        lines: [
          { text: "ele faz o", effect: "words", size: 96 },
          { text: "TRABALHO", effect: "highlight", color: "primary", size: 170, delay: 0.4 },
        ],
      },
      // "Como funciona? Três passos:"
      {
        start: 9.55,
        id: "how",
        transition: "flash",
        accent: "secondary",
        lines: [
          { text: "como funciona?", effect: "type", color: "muted", size: 72, delay: 0.1 },
          { text: "3 PASSOS", effect: "slam", color: "secondary", size: 170, delay: 1.15 },
        ],
      },

      // ───────── PASSOS ─────────
      // "um, dê acesso"
      {
        start: 11.7,
        id: "step-1",
        transition: "whipUp",
        accent: "primary",
        lines: [
          { text: "#1", effect: "pop", color: "primary", size: 220, delay: 0.1 },
          { text: "DÊ ACESSO", effect: "mask", size: 130, delay: 0.65 },
        ],
      },
      // "a uma pasta do seu computador."
      {
        start: 13.0,
        id: "step-1-folder",
        transition: "zoomPunch",
        accent: "primary",
        icon: "folder",
        lines: [
          { text: "a uma", effect: "words", size: 84 },
          { text: "PASTA", effect: "highlight", color: "primary", size: 170, delay: 0.3 },
          { text: "do seu computador", effect: "words", color: "muted", size: 70, delay: 0.8 },
        ],
      },
      // "Dois, descreva o resultado que você quer."
      {
        start: 14.75,
        id: "step-2",
        transition: "whipLeft",
        accent: "secondary",
        icon: "chat",
        lines: [
          { text: "#2", effect: "pop", color: "secondary", size: 190, delay: 0.1 },
          { text: "DESCREVA", effect: "mask", size: 124, delay: 0.75 },
          { text: "o resultado que você quer", effect: "words", color: "muted", size: 62, delay: 1.3 },
        ],
      },
      // "Três, ele executa,"
      {
        start: 17.35,
        id: "step-3",
        transition: "whipUp",
        accent: "primary",
        lines: [
          { text: "#3", effect: "pop", color: "primary", size: 220, delay: 0.1 },
          { text: "ELE EXECUTA", effect: "mask", size: 124, delay: 0.85 },
        ],
      },
      // "planeja, faz cada etapa e entrega."
      {
        start: 19.0,
        id: "step-3-flow",
        transition: "zoomPunch",
        accent: "secondary",
        icon: "steps",
        lines: [
          { text: "PLANEJA", effect: "pop", color: "primary", size: 120, delay: 0.1 },
          { text: "FAZ CADA ETAPA", effect: "mask", size: 100, delay: 0.85 },
          { text: "E ENTREGA", effect: "highlight", color: "secondary", size: 120, delay: 2.0 },
        ],
      },

      // ───────── O QUE ELE FAZ ─────────
      // "Ele lê, cria e edita arquivos reais"
      {
        start: 21.8,
        id: "files",
        transition: "whipLeft",
        accent: "secondary",
        icon: "file",
        badge: "PLANILHAS • DOCUMENTOS • SLIDES",
        lines: [
          { text: "lê, cria e edita", effect: "words", size: 88, delay: 0.4 },
          { text: "ARQUIVOS REAIS", effect: "highlight", color: "secondary", size: 118, delay: 1.9 },
        ],
      },
      // "e se conecta aos seus apps com conectores e plugins."
      {
        start: 24.8,
        id: "apps",
        transition: "zoomPunch",
        accent: "primary",
        icon: "plug",
        lines: [
          { text: "e se conecta aos", effect: "words", size: 88 },
          { text: "SEUS APPS", effect: "highlight", color: "primary", size: 150, delay: 0.85 },
          { text: "com conectores e plugins", effect: "words", color: "muted", size: 62, delay: 1.55 },
        ],
      },
      // "Você vê o plano e acompanha cada passo."
      {
        start: 28.0,
        id: "control",
        transition: "flash",
        accent: "secondary",
        icon: "check",
        lines: [
          { text: "você vê o plano e acompanha", effect: "words", size: 84, delay: 0.1 },
          { text: "CADA PASSO", effect: "highlight", color: "secondary", size: 140, delay: 1.85 },
        ],
      },

      // ───────── VIRADA ─────────
      // "Não é mais um chat,"
      {
        start: 30.75,
        id: "twist-1",
        transition: "glitch",
        accent: "alert",
        lines: [
          { text: "não é mais um", effect: "words", size: 92 },
          { text: "CHAT", effect: "strike", size: 210, delay: 0.7 },
        ],
      },
      // "é um colega de trabalho."
      {
        start: 31.95,
        id: "twist-2",
        transition: "zoomPunch",
        accent: "primary",
        shake: true,
        lines: [
          { text: "é um colega de", effect: "words", size: 92 },
          { text: "TRABALHO", effect: "slam", color: "primary", size: 170, delay: 0.8 },
        ],
      },

      // ───────── CTA ─────────
      // "Salve e teste no Claude Desktop."
      {
        start: 33.55,
        id: "cta",
        transition: "zoomPunch",
        accent: "secondary",
        icon: "bookmark",
        lines: [
          { text: "SALVE", effect: "pop", color: "primary", size: 210, delay: 0.1 },
          { text: "e teste no", effect: "words", size: 80, delay: 0.55 },
          { text: "CLAUDE DESKTOP", effect: "highlight", color: "secondary", size: 112, delay: 1.25 },
        ],
      },
    ],
    NARRATION_END,
  ),
};
