# Roteiro: "3 ferramentas de IA que substituem um designer"

**Formato:** 1080x1920 · 30 fps (`ReelIA30`) ou 60 fps (`ReelIA60`) · 22 s · 12 cenas (uma quebra visual a cada 1,5 a 2,6 s)
**Paleta:** fundo `#0A0A0F` · amarelo `#FFD60A` · verde `#39FF88` · branco `#F5F5F7` · vermelho `#FF3B5C` (só para "riscar" e alertar)
**Fontes:** Montserrat 900/700 (títulos) · Inter 600 (texto de apoio)
**Fonte da verdade:** `src/videos/ia-designer.ts` (paleta `neonDark`). Este documento descreve o que está lá.

## Elementos fixos (o vídeo todo)

| Elemento | Comportamento | Código |
|---|---|---|
| Barra de progresso | No topo, enche do verde para o amarelo, com um marcador em cada corte de cena. Dá a sensação de "falta pouco" | `components/ProgressBar.tsx` |
| Grid de fundo | Linhas de 90 px deslizando na diagonal (30 px/s, 60 px/s) | `components/Background.tsx` |
| Brilho radial | Na cor `accent` da cena e pulsa (escala +15%) em cada corte | `Background.tsx` |
| Anel de batida | Círculo que expande de 1x a 4x e some em 0,4 s a cada corte | `Background.tsx` |
| Geometria | Quadrado no canto superior direito (gira 45° por cena), círculo tracejado e marcadores "+" girando | `Background.tsx` |
| Câmera | Zoom lento de 1.00 a 1.06 em toda cena (Ken Burns); na saída, zoom-out de 12% com fade nos últimos 5 frames | `components/SceneView.tsx` |
| Zona segura | Conteúdo entre y=220 e y=1500 px, com margens laterais de 90 px, longe da UI do Reels | `theme.ts → SAFE` |

No código, as cores são referenciadas por função: amarelo = `primary`, verde = `secondary`, vermelho = `alert`, branco = `text`.

## Cenas

### GANCHO (0,0 s a 3,0 s)

**Cena 1 · `hook-1` · 0,0 a 1,5 s**
1. **Texto:** `3 IAs` (amarelo, 330 px)
2. **Motion:** transição `flash` (tela branca de 90% a 0% em 5 frames). Texto `slam`: escala de 2,6 para 1 com spring (damping 14, stiffness 230) e blur de 16 para 0 px. `shake: true` faz a câmera tremer ±22 px, decaindo até zero entre os frames 2 e 14.
3. **Por quê:** impacto visual no frame 1. O número cria uma lista mental ("vou ver as 3").

**Cena 2 · `hook-2` · 1,5 a 3,0 s**
1. **Texto:** `que fazem o trabalho de um` / `DESIGNER`
2. **Motion:** transição `zoomPunch` (1,25 para 1 em 8 frames). A linha 1 usa `words`: cada palavra entra 3 frames depois da anterior, sobe 40 px e sai do blur. "DESIGNER" usa `strike`: entra com escala 1,4 para 1 e, no frame 9, uma barra vermelha inclinada (-4°) risca a palavra da esquerda para a direita em 7 frames, enquanto o texto escurece para 45%.

### LOOP ABERTO

**Cena 3 · `loop` · 3,0 a 4,8 s**
1. **Texto:** `e a #3 é` / `ABSURDA` (verde)
2. **Motion:** transição `glitch` (tela deslocada ±60 px, RGB split vermelho/ciano e 3 faixas horizontais em `mix-blend-mode: difference`). "#3" fica amarelo por destaque automático. "ABSURDA" entra com `glitch`: camadas vermelha e ciano deslocadas, jitter que muda a cada 2 frames e se estabiliza em 12 frames.
3. **Por quê:** promete a melhor ferramenta no final e segura o espectador até a cena 8.

### FERRAMENTA #1

**Cena 4 · `tool-1` · 4,8 a 6,6 s**
1. **Texto:** `#1` (amarelo) / `RECRAFT`
2. **Motion:** transição `whipLeft` (entra de x=+1000 px com motion blur horizontal via SVG `feGaussianBlur` de 40 para 0). Ícone de caneta vetorial desenhado pelo traço (`strokeDashoffset` de 1 para 0 em 0,5 s), flutuando ±8 px. "#1" usa `pop` (spring com overshoot e rotação de -12° para 0). "RECRAFT" usa `mask`: sobe de trás de uma máscara com `overflow: hidden`.

**Cena 5 · `tool-1-benefit` · 6,6 a 8,4 s**
1. **Texto:** selo `LOGOS • ÍCONES • ILUSTRAÇÕES` / `arte em` / `VETOR` / `em segundos` (verde)
2. **Motion:** `zoomPunch`. O selo faz fade-in. "VETOR" usa `highlight`: um marca-texto amarelo inclinado (skew -8°) varre da esquerda para a direita entre os frames 3 e 11, e o texto inverte para escuro com um pulso de escala de 6%.

### FERRAMENTA #2

**Cena 6 · `tool-2` · 8,4 a 10,2 s**
1. **Texto:** `#2` (verde) / `CANVA` / `MAGIC STUDIO` (verde)
2. **Motion:** transição `whipUp` (entra de y=+1400 px com motion blur vertical). Ícone de grid de layout desenhado pelo traço. `pop` no "#2" e duas máscaras em cascata (0,2 s e 0,4 s).

**Cena 7 · `tool-2-benefit` · 10,2 a 12,0 s**
1. **Texto:** `1 prompt =` / `30` (amarelo, 300 px) / `POSTS PRONTOS`
2. **Motion:** `zoomPunch`. O número usa `counter`: conta de 0 a 30 em 18 frames com easing out-cubic e dá um "bump" de escala de 12% ao terminar. "POSTS PRONTOS" usa `mask`.

### FERRAMENTA #3 (o pagamento do loop)

**Cena 8 · `tool-3` · 12,0 a 13,8 s**
1. **Texto:** `#3` (verde) / `KREA AI`
2. **Motion:** `whipLeft` + `shake`. O "#3" entra com `slam` (mais pesado que o #1 e o #2, para marcar que é "a absurda"). "KREA AI" usa `glitch`. Ícone de pincel desenhado pelo traço.

**Cena 9 · `tool-3-benefit` · 13,8 a 15,6 s**
1. **Texto:** `rabisco vira` / `ARTE FINAL` / `em tempo real` (verde)
2. **Motion:** `zoomPunch`, `words`, marca-texto amarelo em "ARTE FINAL" e `words` atrasado em 0,7 s.

### VIRADA (gera comentários e compartilhamentos)

**Cena 10 · `twist-1` · 15,6 a 17,4 s**
1. **Texto:** `mas atenção:` (cinza) / `elas NÃO substituem um designer.`
2. **Motion:** `flash`. Ícone de alerta vermelho desenhado pelo traço. "mas atenção:" usa `type` (máquina de escrever com cursor verde piscando a cada 8 frames). A frase seguinte usa `words`, e "NÃO" ganha destaque automático em amarelo.

**Cena 11 · `twist-2` · 17,4 a 19,4 s**
1. **Texto:** `substituem quem` / `NÃO USA IA.` (amarelo)
2. **Motion:** `glitch` + `shake`. "NÃO USA IA." entra com `slam` 0,35 s depois. É a frase de impacto do vídeo.

### CTA

**Cena 12 · `cta` · 19,4 a 22,0 s**
1. **Texto:** `SALVE` (amarelo) / `e siga para a` / `PARTE 2` (verde)
2. **Motion:** `zoomPunch`. Ícone de bookmark desenhado pelo traço. `pop` em "SALVE", `words` e um marca-texto verde em "PARTE 2". Esta cena dura 2,6 s para dar tempo de agir.

## Legenda sugerida para o post

> 3 IAs que fazem o trabalho de um designer (a #3 é absurda) 👀
> 1. Recraft: logos, ícones e ilustrações em vetor
> 2. Canva Magic Studio: dezenas de posts a partir de 1 prompt
> 3. Krea AI: rabisco vira arte final em tempo real
>
> Mas elas não substituem um designer. Substituem quem não usa IA.
> Salve e siga para a parte 2.
> #ia #design #designgrafico #ferramentasia #canva

## Renderizar

```bash
npm install
npm run render      # out/reel-30fps.mp4
npm run render:60   # out/reel-60fps.mp4
npm run studio      # pré-visualização interativa no navegador
```
