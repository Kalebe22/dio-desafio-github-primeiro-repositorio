# Roteiro: "Claude Cowork: como funciona"

**Formato:** 1080x1920 · 30 fps (`ClaudeCowork30`) ou 60 fps (`ClaudeCowork60`) · 25,4 s · 14 cenas
**Paleta `claudeWarm`:** fundo bege `#F0EEE6` · laranja terracota `#D97757` (primary) · verde-oliva `#5F7A47` (secondary) · texto `#141413` · cinza quente `#8A877D` (muted) · laranja queimado `#B5482A` (alert)
**Fontes:** Source Serif 4 900/700 (títulos em serifa, no estilo editorial do Claude) · Inter 600 (texto de apoio)
**Fonte da verdade:** `src/videos/claude-cowork.ts`

## A mensagem em uma frase
O Cowork é um modo do app desktop do Claude em que você dá acesso a uma pasta, descreve o resultado que quer, e o Claude planeja e executa o trabalho em várias etapas, criando e editando arquivos de verdade enquanto você acompanha.

## Adaptações para o fundo claro
- O brilho neon foi trocado por cores sólidas, sem glow.
- No glitch, as camadas usam laranja e verde em `multiply` em vez de vermelho e ciano em `screen`.
- O flash de transição é laranja.
- A vinheta é de um marrom bem suave.

## Cenas

| # | Tempo | Texto na tela | Motion |
|---|---|---|---|
| 1 | 0–1,5s | você ainda só **CONVERSA** | flash laranja · `words` + `slam` laranja · tremida |
| 2 | 1,5–3s | com a **IA?** / isso mudou. | `zoomPunch` · "IA?" ganha destaque automático · `type` com cursor verde |
| 3 | 3–5s | selo NO APP DESKTOP DO CLAUDE · CLAUDE / **COWORK** | `whipLeft` com motion blur · ícone de asterisco desenhado pelo traço · `mask` + `slam` · tremida |
| 4 | 5–6,8s | não só responde: / **FAZ O TRABALHO** | `zoomPunch` · marca-texto laranja |
| 5 | 6,8–8,4s | como funciona? / **3 PASSOS** | `glitch` laranja/verde · `type` + `slam` verde |
| 6 | 8,4–10,2s | **#1 DÊ ACESSO** / a uma pasta do seu computador | `whipUp` · ícone de pasta · `pop` + `mask` + `words` |
| 7 | 10,2–12s | **#2 DESCREVA** / o resultado que você quer | `whipLeft` · ícone de mensagem |
| 8 | 12–13,8s | **#3 ELE EXECUTA** / planeja, faz cada etapa e entrega | `whipUp` · ícone de checklist |
| 9 | 13,8–15,6s | selo PLANILHAS • DOCUMENTOS • SLIDES · lê, cria e edita / **ARQUIVOS REAIS** | `zoomPunch` · ícone de arquivo · marca-texto verde |
| 10 | 15,6–17,4s | e se conecta aos / **SEUS APPS** / com conectores e plugins | `zoomPunch` · ícone de tomada · marca-texto laranja |
| 11 | 17,4–19,2s | você vê o plano e acompanha / **CADA PASSO** | flash · ícone de check · marca-texto verde |
| 12 | 19,2–21s | não é mais um / ~~CHAT~~ | `glitch` · `strike` (barra laranja-queimado riscando) |
| 13 | 21–22,8s | é um colega de / **TRABALHO** | `zoomPunch` · `slam` laranja · tremida |
| 14 | 22,8–25,4s | **SALVE** / e teste no / **CLAUDE DESKTOP** | `zoomPunch` · ícone de salvar · `pop` + marca-texto verde |

Os efeitos (`slam`, `mask`, `highlight` etc.) são os mesmos do primeiro vídeo e estão descritos em `ROTEIRO.md`.

## Legenda sugerida para o post

> O Claude agora não só responde. Ele faz o trabalho. 🧡
>
> Como o Claude Cowork funciona:
> 1. Você dá acesso a uma pasta do seu computador
> 2. Descreve o resultado que quer
> 3. Ele planeja, executa cada etapa e entrega arquivos prontos (planilhas, documentos, slides)
>
> Ele também se conecta aos seus apps por conectores e plugins, e você acompanha o plano o tempo todo.
> Disponível no app desktop do Claude (Mac e Windows), nos planos pagos.
> Salve para testar depois.
> #claude #ia #produtividade #automacao #cowork

## Renderizar
```bash
npm run render:cowork      # out/claude-cowork-30fps.mp4
npm run render:cowork:60   # out/claude-cowork-60fps.mp4
```
