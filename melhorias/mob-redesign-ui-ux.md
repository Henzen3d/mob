# MOB | IA para Empresas — Plano de redesenho UI/UX

Documento de trabalho para o redesenho de **mob.tec.br**. Pode ser usado como contexto para o `/impeccable teach` (PRODUCT.md / DESIGN.md) ou como checklist de execução.

> Base da análise: print da página e `index.html` (Astro v5.18.2). Os assets de vídeo e imagem (`hero-aurora.mp4`, `fundo.webp`, `rodape.avif`) não foram revisados.

---

## 1. Objetivo e contexto

- **Problema:** o site ficou carregado. Serve ao técnico, mas o empresário precisa "bater o olho e decidir".
- **Meta:** visual **moderno e leve**, com **pequenas animações**, sem "AI slop".
- **Público:** donos e gestores de PMEs (advocacia, contabilidade, imobiliárias/vistorias, clínicas, prestadores técnicos) em Blumenau e região.
- **O que o visitante quer saber (nessa ordem):** o que isso faz por mim → quanto custa → posso confiar → como começo.
- **Tom:** direto, humano, português do dia a dia. Sem jargão no primeiro plano.
- **Anti-referências:** painel técnico/terminal, aurora genérica com brilhos, cards idênticos com chips de buzzword.

---

## 2. Diagnóstico geral

| Problema | Detalhe |
|---|---|
| Tudo é "3 cards" | Hero, pilares, implantação e planos têm o mesmo formato; nada se destaca. |
| Pilares e Implantação redundantes | Contam quase a mesma história (o que instalamos + como instalamos). |
| Fonte mono em excesso | Chips, listas de preço, tabela e rótulos em 10–12px criam a cara de "painel técnico". |
| Jargão vazando | Golden Image, Restore on AC Loss, Tailscale, Samba, AES-256, N100, HaaS, Hipercare, Zero Data Retention. |
| Sem prova visual | Não há foto da MOB Box, do Osmar, de cliente ou de um orçamento de exemplo. |
| Peso e legibilidade | Vídeo com `preload="auto"` + webp + avif; 3 famílias de fonte; textos zinc-500 sobre preto no limite de contraste. |

---

## 3. O que tem cara de "AI slop" (e como tirar)

- [ ] **Barra de status falsa no hero** (ponto verde pulsando, "APPLIANCE LOCAL ATIVA", "LATÊNCIA < 45ms") → trocar por demo real.
- [ ] **Rótulos em caixa-alta mono** ("DIRETRIZ CENTRAL", "ENTRADA DE ROTINA", "NUVEM PRIVADA", "APPLIANCE PRÓPRIA") → apagar; o título já diz.
- [ ] **Brilhos:** glow branco no botão, glow âmbar no plano destacado e no rodapé, aurora com vídeo + imagem + gradientes sobrepostos (`mix-blend-screen`) → uma única fonte de luz.
- [ ] **Chips de buzzword** ("Zero Alucinações", "Multi-usuário", "Citação Exata de Fontes") → remover ou levar para a ficha técnica.
- [ ] **Fórmulas de copy:** "Não somos X nem Y. Somos Z", "Chega de teoria sobre IA", "Alívio imediato" → dizer direto o que a MOB faz.
- [ ] **Tabela com vermelho/verde** e coluna "Consultorias Teóricas" (espantalho).
- [ ] **Selo "MAIS POPULAR"** num produto novo, sem base.
- [ ] **Comentários de código em produção** ("No AI Slop", "Zylon Density", "Asaas Tone") → limpar; aparecem no view-source.

Medidor objetivo: `npx impeccable detect src/` antes e depois.

---

## 4. Seção por seção

### 4.1 Menu
- Hoje: 7 links + CTA; botões pequenos para toque.
- Fazer: manter **Como funciona, Preços, Dúvidas + CTA**. Remover "Início". "Advocacia" vai para o rodapé ou link discreto.
- **Bug:** não existe `id="mob-box"` na página; o link "A MOB Box" (menu e rodapé) não leva a lugar nenhum. Criar a seção ou remover os links.
- Menu que compacta ao rolar (animação leve).

### 4.2 Hero
- H1 genérico e subtítulo de ~55 palavras com três ideias. **Uma promessa só.**
  - Exemplo: *"Mande o áudio. Receba o orçamento pronto."* + uma frase: *mini-servidor de IA no seu escritório, com a sua tabela de preços.*
- Trocar o card de painel por **demo animada de ~6s em loop**: onda do áudio → texto digitando → PDF do orçamento com valores.
- Linha de prova: virar 3 itens com ícone, em fonte normal — ou cortar.
- Aurora: é identidade, pode ficar. Usar **um único vídeo comprimido (< 1 MB) com poster**, ou CSS puro (radial-gradient animado). Desligar no mobile e com `prefers-reduced-motion`.

### 4.3 Pilares → "O que você leva"
- Hoje: três cards grandes com título numerado, rótulo, parágrafo e chips; coluna sticky repetindo o hero.
- Fazer: 3 itens com ícone e **uma linha cada** (Consultor interno, Redator de propostas, Analista de documentos), em português simples.
- Chips técnicos → página "ficha técnica" ou FAQ.

### 4.4 Implantação → "Como começa"
- Conteúdo bom, mas "Golden Image" e "estresse elétrico e térmico por 72h" assustam leigos.
- Fazer: **linha do tempo horizontal** — Demo de 15 min → Preparamos em 48–72h → Instalamos e treinamos no mesmo dia. Uma frase por passo; linha que se desenha ao rolar.
- Fundir com a seção de pilares.

### 4.5 Comparativo
- Afirmações categóricas sobre ChatGPT/Copilot ("dados trafegam nos EUA", "atendimento por robô") são frágeis (jurídica e perceptivamente).
- Fazer: 3 frases afirmativas sobre a MOB **ou** tabela de 2 colunas × 3 linhas, sem vermelho/verde. Sem coluna de "consultorias".

### 4.6 Preços
- **Três lógicas de cobrança** diferentes obrigam o leitor a fazer conta. Custo no 1º ano, pelos valores do site:

| Plano | Conta | 1º ano |
|---|---|---|
| MOB Start | 4.900 + 990 × 12 | **R$ 16.780** |
| MOB Box Compact | 6.490 + 990 × 12 | **R$ 18.370** |
| MOB Comodato | 2.900 + 1.290 × 12 | **R$ 18.380** |

  Compact e Comodato ficam praticamente iguais no 1º ano, e o Comodato **não diz o que acontece depois dos 12 meses**.
- Fazer: **2 cards** com a mensalidade em destaque e o setup menor; link "prefere alugar?" para o comodato (explicando o pós-12 meses).
- O rodapé cita "MOB Box Pro (100% Local)", que não existe nos planos — alinhar.
- **ROI:** "4h/semana pagam a mensalidade em 30 dias" ≈ 17h/mês; só fecha se a hora vale ~R$ 57 e ignora o setup. Trocar por **mini-calculadora** (orçamentos/mês × minutos por orçamento × custo da hora), com número animado.
- Botão sólido no lugar do gradiente âmbar com glow; "Mais popular" → "Recomendado".

### 4.7 FAQ e CTA final
- É a seção mais clara. Virar **accordion** (`<details>`) com 5–6 perguntas.
- Adicionar perguntas do dono: *"A IA erra?"*, *"E se eu quiser cancelar?"*, *"Em quanto tempo vejo resultado?"* (respostas honestas).
- CTA "Fale com Osmar": **adicionar foto**.

### 4.8 Rodapé
- 5 colunas + imagem aurora + blob → reduzir para **marca, contato, links**.
- Os "Segmentos" (Imobiliárias, Contabilidades, Clínicas, Prestadores) apontam todos para `#como-funciona`. Ou viram páginas (bom para SEO) ou saem.

---

## 5. Claims para revisar (credibilidade e risco)

- **"Zero Alucinações"** — nenhum modelo garante isso; risco jurídico e, para advocacia, desacredita. Alternativa (se for verdade): "mostra de onde tirou cada informação".
- **"< 45ms" e "orçamento em 8s"** — se não foram medidos, tirar. Transcrição + modelo local num N100 em 8s parece otimista; **medir e publicar o número real**.
- **"Dados não saem do escritório" / "imunes a vazamentos"** — valem para todos os planos? O FAQ diz "no modelo 100% local", sugerindo que o Compact pode não ser. Se algum plano usa nuvem/API, a copy precisa dizer (LGPD).
- **"Garantimos que até quem tem receio aprende no mesmo dia"** — suavizar.
- **"Mais popular"** — só com base real.

---

## 6. Animações (pequenas e leves)

| Animação | Onde |
|---|---|
| Reveal no scroll (fade + 12px, ~500ms, stagger leve) | Todas as seções |
| Demo em loop (áudio → texto → PDF) | Hero |
| Linha do tempo que se desenha | Como começa |
| Número que conta | Calculadora de ROI |
| Seta do botão +2px, card sobe 2px | Hover |
| Accordion suave | FAQ |
| Menu que compacta | Ao rolar |

**Regras:** animar só `transform` e `opacity`; 200–600ms, ease-out; sem parallax; respeitar `prefers-reduced-motion`.

---

## 7. Tema, tipografia e acessibilidade

- **Tema híbrido (recomendado):** hero escuro com a aurora (identidade) + resto em off-white com texto escuro e **um único acento âmbar**. Alternativa: 100% escuro, mas com mais espaço, sem bordas nos cards e contraste maior.
- **Tipografia:** tudo em sans; mono só para números/preços (com `tabular-nums`). Corpo mínimo de **16px**; nada abaixo de 12–13px. Carregar só as famílias usadas.
- **Consistência:** alinhamento e escala de H2 uniformes (hoje há 3xl, 4xl e 5xl extrabold; preços centralizado, resto à esquerda).
- **Toque:** botões e links com área mínima confortável no mobile.
- **Tabela/overflow:** nada que force rolagem horizontal no celular.

---

## 8. Estrutura proposta (de 8 para 6 blocos)

1. **Hero** — promessa única + demo animada + 1 CTA
2. **O que você leva** — 3 itens
3. **Como começa** — linha do tempo em 3 passos
4. **Quanto custa e ROI** — calculadora
5. **Planos** — 2 cards + link do comodato
6. **FAQ + CTA final + rodapé enxuto**

---

## 9. Plano de execução com Impeccable

Instalação: `npx skills add https://github.com/pbakaus/impeccable --skill impeccable` (confirmar o pacote `@impeccable/agent` do template do Hermes antes de usar). A sintaxe varia por versão: `/impeccable <comando>` nas novas, `/<comando>` nas antigas. Rodar no **código-fonte Astro**, não no HTML gerado.

| Etapa | Comando | Observação |
|---|---|---|
| 0 | `npx impeccable detect src/` | Linha de base do "slop" |
| 1 | `teach` | Usar este documento como contexto (PRODUCT.md / DESIGN.md) |
| 2 | `shape` | Fechar a estrutura de 6 blocos |
| 3 | `critique`, `audit` | Só diagnóstico; validar contra este documento |
| 4 | `distill` | **Sozinho** + commit (muda o que existe) |
| 5 | `clarify` | **Sozinho** + commit (reescreve copy) |
| 6 | `typeset` + `layout` + `quieter` | Podem agrupar (ajustes visuais) |
| 7 | `animate` | **Sozinho** |
| 8 | `optimize` | **Sozinho** (vídeo, fontes) |
| 9 | `adapt` | Se o mobile ainda estiver torto |
| 10 | `polish` | **Sempre por último, sozinho** |
| 11 | `npx impeccable detect src/` | Comparar com a linha de base |

Opcional: `live` para testar 2–3 variantes do hero no navegador.

**Regra prática:** se o comando decide *o que existe na página*, rode sozinho; se só ajusta *como parece*, pode agrupar com outro parecido. Faça `git commit` entre as etapas.

---

## 10. Checklist final

- [ ] Promessa única no hero + demo animada
- [ ] Nenhum rótulo mono em caixa-alta decorativo
- [ ] Sem glows; uma única fonte de luz
- [ ] Sem jargão técnico na home (movido para ficha técnica/FAQ)
- [ ] Foto da MOB Box e do Osmar
- [ ] Claims da seção 5 revisados/medidos
- [ ] Preços simplificados e pós-12 meses do comodato explicado
- [ ] Calculadora de ROI no lugar da frase fixa
- [ ] Link `#mob-box` e links de segmentos corrigidos
- [ ] Comentários de código removidos
- [ ] Texto mínimo 16px; contraste revisado
- [ ] Animações respeitam `prefers-reduced-motion`
- [ ] Vídeo do hero leve (ou CSS) e desligado no mobile
- [ ] `detect` com menos ocorrências que a linha de base
