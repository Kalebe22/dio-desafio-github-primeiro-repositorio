# Roteiro: "Claude Cowork: como funciona"

**Formato:** 1080x1920 · 30 fps (`ClaudeCowork30`) ou 60 fps (`ClaudeCowork60`) · 36,7 s · 18 cenas sincronizadas com a narração
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

## Narração

- **Voz:** "Isabel" da ElevenLabs (português do Brasil, tom claro de explicador de tecnologia), modelo `eleven_v4`.
- **Arquivo:** `public/claude-cowork-narracao.mp3`, normalizado para -14 LUFS (padrão de Reels, TikTok e Shorts).
- **Texto lido:**

> Você ainda só conversa com a IA? Isso mudou! Conheça o Claude Cowork, no app desktop do Claude. Ele não só responde: faz o trabalho. Como funciona? Três passos. Um: dê acesso a uma pasta do seu computador. Dois: descreva o resultado que você quer. Três: ele executa. Planeja, faz cada etapa e entrega. Ele lê, cria e edita arquivos reais. E se conecta aos seus apps, com conectores e plugins. Você vê o plano e acompanha cada passo. Não é mais um chat. É um colega de trabalho. Salve e teste no Claude Desktop!

- **Sincronia:** o áudio foi transcrito com marcação de tempo por palavra. Cada cena começa no segundo em que a sua fala começa (`start`), e cada palavra-chave entra na tela junto com a voz (`delay`). A função `syncToVoice` em `src/types.ts` calcula a duração de cada cena a partir desses inícios. Se você trocar o áudio, refaça os `start` e os `delay` em `src/videos/claude-cowork.ts`.

## Cenas

| # | Início | Fala | Texto na tela | Motion |
|---|---|---|---|---|
| 1 | 0,0s | "Você ainda só conversa" | você ainda só **CONVERSA** | flash · `words` + `slam` laranja · tremida |
| 2 | 1,5s | "com a IA? Isso mudou!" | com a **IA?** / isso mudou. | `zoomPunch` · `type` com cursor verde |
| 3 | 3,4s | "Conheça o Claude Cowork" | CLAUDE / **COWORK** | `whipLeft` · ícone de asterisco · `mask` + `slam` · tremida |
| 4 | 5,0s | "no app Desktop do Claude" | no app **DESKTOP** do Claude | `zoomPunch` · marca-texto verde |
| 5 | 6,75s | "Ele não só responde," | ele não só ~~RESPONDE~~ | `glitch` · `strike` |
| 6 | 8,4s | "faz o trabalho." | ele faz o **TRABALHO** | `zoomPunch` · marca-texto laranja · tremida |
| 7 | 9,55s | "Como funciona? Três passos:" | como funciona? **3 PASSOS** | flash · `type` + `slam` verde |
| 8 | 11,7s | "um, dê acesso" | **#1 DÊ ACESSO** | `whipUp` · `pop` + `mask` |
| 9 | 13,0s | "a uma pasta do seu computador." | a uma **PASTA** do seu computador | `zoomPunch` · ícone de pasta · marca-texto laranja |
| 10 | 14,75s | "Dois, descreva o resultado que você quer." | **#2 DESCREVA** / o resultado que você quer | `whipLeft` · ícone de mensagem |
| 11 | 17,35s | "Três, ele executa," | **#3 ELE EXECUTA** | `whipUp` · `pop` + `mask` |
| 12 | 19,0s | "planeja, faz cada etapa e entrega." | **PLANEJA** / FAZ CADA ETAPA / **E ENTREGA** | `zoomPunch` · ícone de checklist · uma linha por trecho da fala |
| 13 | 21,8s | "Ele lê, cria e edita arquivos reais" | selo PLANILHAS • DOCUMENTOS • SLIDES · **ARQUIVOS REAIS** | `whipLeft` · ícone de arquivo · marca-texto verde |
| 14 | 24,8s | "e se conecta aos seus apps com conectores e plugins." | **SEUS APPS** / com conectores e plugins | `zoomPunch` · ícone de tomada · marca-texto laranja |
| 15 | 28,0s | "Você vê o plano e acompanha cada passo." | **CADA PASSO** | flash · ícone de check · marca-texto verde |
| 16 | 30,75s | "Não é mais um chat," | não é mais um ~~CHAT~~ | `glitch` · `strike` |
| 17 | 31,95s | "é um colega de trabalho." | é um colega de **TRABALHO** | `zoomPunch` · `slam` laranja · tremida |
| 18 | 33,55s | "Salve e teste no Claude Desktop." | **SALVE** / e teste no **CLAUDE DESKTOP** | `zoomPunch` · ícone de salvar |

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
