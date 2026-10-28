# Reel faceless em Remotion

Gerador de Reels/Shorts verticais (1080x1920, 30 ou 60 fps) só com tipografia animada, transições e motion graphics. O roteiro inteiro é um arquivo de dados: para trocar de tema, edite `src/script.ts`.

## Requisitos
- Node 18+ (testado no Node 22)
- O Remotion baixa o Chrome headless automaticamente. Se o download falhar, aponte para um Chromium local:
  `REMOTION_BROWSER=/caminho/do/chrome npm run render`

## Comandos
```bash
npm install
npm run studio      # editor/preview no navegador (localhost:3000)
npm run render      # → out/reel-30fps.mp4  (H.264, CRF 16, yuv420p)
npm run render:60   # → out/reel-60fps.mp4
npm run still       # → out/thumb.png (frame 20, sugestão de capa)
```

Comando direto, sem npm scripts:
```bash
npx remotion render ReelIA30 out/reel-30fps.mp4 --codec=h264 --crf=16
```

## Estrutura
```
src/
  script.ts              ← ROTEIRO (texto, efeito, cor, tempo de cada cena)
  theme.ts               cores, fontes, zona segura do Reels
  Reel.tsx               timeline: converte segundos em frames e monta as camadas
  Root.tsx               composições ReelIA30 e ReelIA60
  components/
    AnimatedLine.tsx     efeitos de texto: slam, pop, words, mask, type, strike, highlight, glitch, counter
    SceneView.tsx        transições: cut, flash, zoomPunch, whipLeft, whipUp, glitch; Ken Burns, shake, saída
    Background.tsx       grid animado, brilho por cena, anel de batida, geometria
    ProgressBar.tsx      barra de progresso com marcadores por cena
    Icon.tsx             ícones SVG desenhados pelo traço
ROTEIRO.md               roteiro cena a cena com a descrição do motion
```

## Criar um novo vídeo
1. Duplique ou edite o array `scenes` em `src/script.ts`.
2. Mantenha cada cena entre 1,5 e 2 s e ponha o gancho nas 2 primeiras cenas (até 3 s).
3. Palavras em CAIXA ALTA ou começando com `#` dentro de um efeito `words` ficam amarelas automaticamente.
4. Rode `npm run studio` para ajustar e depois `npm run render`.

Os tempos ficam em segundos e os efeitos são calculados com `k = fps / 30`, por isso o mesmo roteiro sai com o mesmo ritmo em 30 e em 60 fps.

## Áudio (opcional)
Coloque uma trilha em `public/musica.mp3` e adicione em `Reel.tsx`:
```tsx
import { Audio, staticFile } from "remotion";
// dentro do <AbsoluteFill>:
<Audio src={staticFile("musica.mp3")} volume={0.6} />
```
Para os cortes caírem na batida, ajuste o `duration` das cenas para múltiplos do tempo de uma batida (em 120 BPM, 1 batida = 0,5 s).
