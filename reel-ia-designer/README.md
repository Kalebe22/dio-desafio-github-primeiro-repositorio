# Reels faceless em Remotion

Gerador de Reels/Shorts verticais (1080x1920, 30 ou 60 fps) só com tipografia animada, transições e motion graphics. Cada vídeo é um arquivo de dados em `src/videos/`, com o roteiro e a paleta de cores.

| Vídeo | Arquivo | Paleta | Composições | Roteiro |
|---|---|---|---|---|
| 3 IAs que substituem um designer | `src/videos/ia-designer.ts` | `neonDark` (preto, amarelo, verde) | `ReelIA30`, `ReelIA60` | `ROTEIRO.md` |
| Claude Cowork: como funciona | `src/videos/claude-cowork.ts` | `claudeWarm` (bege, laranja, verde-oliva) | `ClaudeCowork30`, `ClaudeCowork60` | `ROTEIRO-claude-cowork.md` |

## Requisitos
- Node 18+ (testado no Node 22)
- O Remotion baixa o Chrome headless automaticamente. Se o download falhar, aponte para um Chromium local:
  `REMOTION_BROWSER=/caminho/do/chrome npm run render`

## Comandos
```bash
npm install
npm run studio             # editor/preview no navegador (localhost:3000), com todos os vídeos
npm run render             # → out/reel-30fps.mp4
npm run render:60          # → out/reel-60fps.mp4
npm run render:cowork      # → out/claude-cowork-30fps.mp4
npm run render:cowork:60   # → out/claude-cowork-60fps.mp4
npm run still:cowork       # → out/claude-cowork-thumb.png (capa)
```

Comando direto, para qualquer composição:
```bash
npx remotion render <Composição> out/arquivo.mp4    # ex.: ClaudeCowork30
```

## Estrutura
```
src/
  videos/
    index.ts             registro: cada vídeo listado aqui vira <id>30 e <id>60
    ia-designer.ts       roteiro + paleta do vídeo 1
    claude-cowork.ts     roteiro + paleta do vídeo 2
  types.ts               tipos do roteiro (Scene, Line, efeitos, transições, ícones)
  theme.ts               paletas (neonDark, claudeWarm), fontes, zona segura
  Reel.tsx               timeline: converte segundos em frames e aplica a paleta
  Root.tsx               gera as composições a partir de videos/index.ts
  components/
    AnimatedLine.tsx     efeitos de texto: slam, pop, words, mask, type, strike, highlight, glitch, counter
    SceneView.tsx        transições: cut, flash, zoomPunch, whipLeft, whipUp, glitch; Ken Burns, shake, saída
    Background.tsx       grid animado, brilho por cena, anel de batida, geometria
    ProgressBar.tsx      barra de progresso com marcadores por cena
    Icon.tsx             ícones SVG desenhados pelo traço
```

## Criar um novo vídeo
1. Copie um arquivo de `src/videos/`, troque o `id`, os textos e a `palette` (ou crie uma paleta nova em `theme.ts`).
2. Registre o vídeo em `src/videos/index.ts`.
3. Mantenha cada cena entre 1,5 e 2 s e ponha o gancho nas 2 primeiras cenas (até 3 s).
4. As cores são por função (`primary`, `secondary`, `alert`, `text`, `muted`), então o mesmo roteiro funciona com qualquer paleta. Dentro de um efeito `words`, palavras em CAIXA ALTA ou que começam com `#` ganham a cor `primary` automaticamente.
5. Rode `npm run studio` para ajustar e depois `npx remotion render <id>30 out/<nome>.mp4`.

## Áudio (opcional)
Coloque uma trilha em `public/musica.mp3` e adicione em `Reel.tsx`:
```tsx
import { Audio, staticFile } from "remotion";
// dentro do <AbsoluteFill>:
<Audio src={staticFile("musica.mp3")} volume={0.6} />
```
Para os cortes caírem na batida, ajuste o `duration` das cenas para múltiplos do tempo de uma batida (em 120 BPM, 1 batida = 0,5 s).
