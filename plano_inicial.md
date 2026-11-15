# Plano Inicial de Execução — MOB | Inteligência Artificial para Empresas (`mob.tec.br`)

> **INSTRUÇÕES DE EXECUÇÃO PARA O ORQUESTRADOR (`00 — Chief Transformation Officer`):**
> 1. Execute este plano **passo a passo, uma Onda por vez**, utilizando `/swarm` para delegar as tarefas aos especialistas indicados.
> 2. **Não pule etapas** e não acione agentes de ondas futuras antes de concluir e salvar os arquivos da onda atual.
> 3. **Diretriz Central de Transição:** Todas as entregas devem considerar que a MOB está realizando um **pivô estratégico** — deixando de ser a antiga *"MOB — Marketing Online Blumenau"* para se tornar a **MOB | Inteligência Artificial para Empresas**, reaproveitando o domínio `mob.tec.br`, o perfil do Instagram e a carteira de clientes e contatos existentes.
> 4. **Padrão de Qualidade:** Filosofia *"Pedreiro da IA"* (execução prática, zero teoria, automação invisível) e comunicação inspirada no **Asaas** (direta, madura, leve e sem jargões técnicos para o cliente final).
> 5. Ao concluir cada subtarefa, marque o checkbox como `[x]` neste arquivo e gere o documento correspondente na pasta da missão.

---

## ONDA 1: Produto, Engenharia e Segurança (Fundação Técnica)
**Objetivo:** Definir a engenharia exata, custos reais de bancada e blindagem jurídica da **MOB Box** e do **MOB CORE** antes da precificação comercial.
**Agentes Acionados via `/swarm`:** `05 Hardware & Edge Architect`, `06 AI Solutions Architect`, `07 Security & Privacy Specialist`.

### Tarefa 1.1 — Especificação da Linha MOB Box (`05 Hardware & Edge Architect`)
- [x] **1.1.1.** Definir a ficha técnica exata e lista de compras (BOM) no Brasil para os 3 modelos:
  - **MOB Box Compact** (Entrada/Híbrida: Mini PC N100/N97 ou Ryzen 5, 16GB RAM, 512GB NVMe).
  - **MOB Box Pro** (100% Local Silenciosa: Mac Mini M4 ou Mini PC Ryzen AI 32GB).
  - **MOB Box Ultra** (Workstation compacta SFF com GPU dedicada 12GB/16GB VRAM).
- [x] **1.1.2.** Criar o padrão físico da **"Maleta de Demonstração MOB Box"** (setup portátil para levar em reuniões presenciais de 15 minutos e demonstrar funcionando ao vivo).
- [x] **1.1.3.** Documentar a configuração física de fábrica (ajuste de BIOS *Restore on AC Power Loss* para religar sozinho após queda de energia, etiquetagem minimalista MOB e requisitos de rede local).
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/01-hardware-mob-box-spec.md`.

### Tarefa 1.2 — Arquitetura do MOB CORE e Imagem Mestre (`06 AI Solutions Architect`)
- [x] **1.2.1.** Desenhar a pilha oficial em **Docker Compose** (`restart: unless-stopped`) sobre Ubuntu Server LTS contendo: Interface Web Multiusuário limpa, Banco Vetorial Local (RAG) e Motor de Automações em Python/FastAPI.
- [x] **1.2.2.** Especificar o funcionamento da **"Pasta Inteligente na Rede" (Samba `\\mob-box\documentos-ia`)**, permitindo que o cliente atualize o cérebro da IA apenas arrastando PDFs e planilhas pelo Windows Explorer.
- [x] **1.2.3.** Definir os **3 Assistentes Pré-Moldados de Fábrica** que acompanham toda MOB Box:
  1. *Consultor Interno* (Tabelas de preços, manuais e regras da empresa);
  2. *Redator de Padrão* (Áudios e rascunhos do WhatsApp virando orçamentos/relatórios em PDF);
  3. *Analista de Documentos* (Resumo de contratos, editais e planilhas).
- [x] **1.2.4.** Estruturar a arquitetura de manutenção remota invisível via túnel VPN seguro (**Tailscale / WireGuard**) e rotina de clonagem rápida de SSD (meta: preparar uma caixa em menos de 30 minutos).
- [x] **1.2.5.** Definir o escopo técnico de validação no **Piloto Fix (Cliente Zero)** antes das vendas externas.
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/02-mob-core-architecture.md`.

### Tarefa 1.3 — Blindagem de Dados e Conformidade LGPD (`07 Security & Privacy Specialist`)
- [x] **1.3.1.** Criar a matriz de transparência técnica e jurídica diferenciando claramente para o cliente o **Modo Híbrido** (dados/documentos salvos localmente na caixa + inferência via API privada com *Zero Data Retention*) e o **Modo 100% Local Offline** (processamento físico isolado).
- [x] **1.3.2.** Definir a política de controle de acesso por setor dentro da empresa cliente (Diretoria vs. Comercial/Atendimento) e rotina de backups noturnos criptografados.
- [x] **1.3.3.** Redigir o resumo de cláusulas essenciais para o contrato de prestação de serviços/comodato da MOB (limitação de responsabilidade sobre alucinações de IA, posse dos dados e regras do equipamento em comodato).
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/03-security-lgpd-framework.md`.

### Checkpoint da Onda 1 (`00 — CTO`)
- [x] **1.4.** Revisar a consistência entre Hardware, Software e LGPD, atualizar o progresso neste arquivo e iniciar a Onda 2.

---

## ONDA 2: Transição de Negócio, Mercado e Finanças (Viabilidade e Pivô)
**Objetivo:** Transformar a base técnica da Onda 1 em um modelo comercial lucrativo e traçar o plano exato de migração da antiga agência de marketing para a nova startup de IA.
**Agentes Acionados via `/swarm`:** `01 Business Strategist`, `03 Market Intelligence`, `08 Financial Strategist`.

### Tarefa 2.1 — Plano de Transição de Ramo e Modelo de Negócios (`01 Business Strategist`)
- [x] **2.1.1.** Estruturar o **Plano de Pivô ("De Marketing Online Blumenau para MOB | Inteligência Artificial para Empresas")**: como fazer a transição suave mantendo a autoridade acumulada no domínio `mob.tec.br` e nas redes sociais.
- [x] **2.1.2.** Criar a estratégia de **Mineração da Carteira Antiga**: como classificar os ex-clientes e leads da época de marketing digital para oferecer a MOB Box e automações operacionais.
- [x] **2.1.3.** Formalizar a **Esteira de Receita em 3 Degraus**:
  1. *Diagnóstico Rápido / Demonstração Prática* (Porta de entrada);
  2. *Setup Inicial / Implantação Chave na Mão* (MOB Box + Assistentes + Treinamento da equipe);
  3. *Assinatura Mensal / Retainer de Gestão MOB* (Suporte, atualizações, backups e novos fluxos).
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/04-business-pivot-model.md`.

### Tarefa 2.2 — Inteligência de Mercado e Posicionamento Local (`03 Market Intelligence`)
- [x] **2.2.1.** Mapear os **4 nichos de dinheiro rápido** em Blumenau e Vale do Itajaí (Imobiliárias/Vistorias/Condomínios, Escritórios de Contabilidade/Advocacia, Clínicas e Prestadores de Serviços Técnicos), listando o principal "ralo de tempo" de cada um.
- [x] **2.2.2.** Construir o **Mapa de Busca por Dor (SEO Local e Google Meu Negócio)**: traduzir os termos técnicos da MOB para as frases exatas que o empresário digita quando está perdendo tempo ou preocupado com sigilo.
- [x] **2.2.3.** Criar a tabela comparativa de posicionamento: **MOB ("Pedreiro da IA" / Solução Pronta)** vs. *Agências de Marketing Comuns* vs. *Consultorias Teóricas de IA* vs. *Assinaturas avulsas do ChatGPT por funcionário*.
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/05-market-positioning.md`.

### Tarefa 2.3 — Modelagem Financeira e Precificação (`08 Financial Strategist`)
- [x] **2.3.1.** Calcular a estrutura de custos reais (Hardware da Onda 1 + consumo médio de API no modelo híbrido + horas de bancada/instalação).
- [x] **2.3.2.** Definir a Tabela Oficial de Preços nos 2 formatos comerciais:
  - **Formato A (Compra Chave na Mão + Mensalidade de Manutenção):** Valor de Setup/Equipamento + Retainer mensal.
  - **Formato B (Comodato / Hardware as a Service - Contrato 12 meses):** Taxa de Ativação (cobrindo o custo físico do Mini PC Compact) + Assinatura mensal.
- [x] **2.3.3.** Montar a **Calculadora de Argumento de Venda (ROI do Cliente)**: demonstrar matematicamente quantas horas poupadas por semana pagam a MOB Box já no primeiro ou segundo mês em comparação ao custo de um funcionário extra ou múltiplas licenças em dólar.
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/06-financial-pricing-model.md`.

### Checkpoint da Onda 2 (`00 — CTO`)
- [x] **2.4.** Validar se os preços cobrem os custos da Onda 1 com margem saudável, atualizar este arquivo e iniciar a Onda 3.

---

## ONDA 3: Reposicionamento de Marca, Site e Vendas (Kit de Virada de Chave)
**Objetivo:** Entregar todos os textos, roteiros e scripts prontos para atualizar o site `mob.tec.br`, reposicionar o Instagram e abordar os primeiros clientes ainda esta semana.
**Agentes Acionados via `/swarm`:** `02 Brand Manager`, `09 Sales & Growth Manager`.

### Tarefa 3.1 — Identidade Verbal, Site `mob.tec.br` e Transição do Instagram (`02 Brand Manager`)
- [x] **3.1.1.** Criar o **Guia Rápido de Tom de Voz MOB (Padrão Asaas)**: tabela prática de *"Como NÃO falar (Tecniquês)"* vs. *"Como a MOB fala (Alívio Operacional, Maturidade Confiante e Leveza)"*.
- [x] **3.1.2.** Escrever a **Copy Completa da Nova Landing Page (`mob.tec.br`)** dividida em 5 dobras de alta conversão:
  1. *Hero Section* (Promessa direta + CTA WhatsApp);
  2. *Os 3 Pilares Práticos* (IA Privada no Escritório / MOB Box, Assistentes com as Regras da Empresa, Automação de Rotina e Treinamento);
  3. *Como Funciona em 3 Passos* (Estilo "Fácil Assim");
  4. *Diferencial Humano* ("Tecnologia configurada por gente de verdade");
  5. *Comparativo de Economia e Chamada Final*.
- [x] **3.1.3.** Entregar o **Kit de Transição do Instagram**:
  - Checklist do que arquivar/limpar da época de Marketing Online;
  - Novo Nome de Exibição, Nova Bio escaneável e estrutura dos 4 Destaques (*Como Funciona*, *MOB Box*, *Na Prática*, *Agendar*);
  - Texto e roteiro do **Post/Reels Fixado de Reposicionamento** explicando a evolução da MOB do marketing para a inteligência operacional com IA.
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/07-brand-website-instagram-kit.md`.

### Tarefa 3.2 — Playbook Comercial e Roteiros de Conteúdo (`09 Sales & Growth Manager`)
- [x] **3.2.1.** Escrever os **3 Scripts de Abordagem pelo WhatsApp** (curtos, humanos e focados em agendar 15 minutos de demonstração prática):
  - *Script 1 (Ouro):* Para ex-clientes e contatos da época de Marketing Online Blumenau;
  - *Script 2 (Rede Próxima):* Para empresários conhecidos, parceiros e indicações;
  - *Script 3 (Prospecção Ativa Local):* Para donos de contabilidades, imobiliárias, clínicas e escritórios da região.
- [x] **3.2.2.** Estruturar o **Roteiro da Reunião Presencial de 15 Minutos ("Show, Don't Tell")**: passo a passo de como colocar a MOB Box na mesa do empresário, demonstrar um áudio virando documento/orçamento e a leitura de um contrato em PDF na hora, e conduzir para o fechamento.
- [x] **3.2.3.** Criar os **Roteiros dos 3 Primeiros Vídeos Curtos (Reels "Obra Pronta")**:
  - *Vídeo 1:* Bastidores da MOB Box (O servidor silencioso de IA privada no escritório sem mensalidade por usuário);
  - *Vídeo 2:* Demonstração de 30s (Áudio no WhatsApp virando relatório/orçamento pronto);
  - *Vídeo 3:* O Cérebro da Empresa (Por que a IA genérica falha e como funciona uma IA treinada com a tabela de preços e regras do negócio).
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/08-sales-playbook-scripts.md`.

### Checkpoint Final das Ondas 1, 2 e 3 (`00 — CTO`)
- [x] **3.3.** Consolidar um **Resumo Executivo da Missão 001** em `missions/001-strategic-foundation/00-executive-summary-decisions.md` listando todas as entregas geradas e os pontos que dependem da aprovação final do fundador (Osmar) antes de iniciar a execução de bancada e o Piloto Fix.

---

## ONDA 4: Operações, Piloto Fix e Pós-Venda (Execução de Campo)
**Objetivo:** Padronizar a montagem industrial de bancada da **MOB Box**, estruturar a esteira de implantação do **Cliente Zero** (capturado através do novo site horizontal `mob.tec.br`) e formalizar a metodologia de treinamento e retenção de clientes.
**Agentes Acionados via `/swarm`:** `04 Operations Specialist`, `10 Pilot Implementation Engineer`, `11 Customer Success Specialist`.

### Tarefa 4.1 — Procedimento Operacional Padrão (POP) de Bancada da MOB Box (`04 Operations Specialist`)
- [x] **4.1.1.** Criar o checklist de bancada para recebimento, inspeção física e teste de componentes de hardware (Mini PC, memória, SSD, nobreak).
- [x] **4.1.2.** Documentar o passo a passo de gravação da **Golden Image do MOB CORE** via script automatizado (`zstd | dd`), com tempo de produção inferior a 25 minutos.
- [x] **4.1.3.** Estabelecer a rotina de testes de estresse térmico e burn-in de 72 horas contínuas antes da liberação para expedição.
- [x] **4.1.4.** Padronizar o kit de expedição e montagem física no cliente (etiquetagem industrial, lacre destrutivo VOID, cabo Cat6 blindado, nobreak e maleta de transporte).
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/09-operations-assembly-checklist.md`.

### Tarefa 4.2 — Protocolo de Ativação do Cliente Zero Inbound (`10 Pilot Implementation Engineer`)
- [x] **4.2.1.** Estruturar o roteiro da **Reunião de Kickoff de 90 Minutos** com o decisor da empresa cliente vinda do site horizontal.
- [x] **4.2.2.** Definir o procedimento de mapeamento e seleção do **1º Fluxo Prioritário** (áudios de WhatsApp, leitura de PDFs contratuais ou consulta a tabelas).
- [x] **4.2.3.** Estruturar a esteira de testes de aceite com 10 dados reais do cliente e protocolo de homologação em até 15-30 dias corridos.
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/10-pilot-implementation-protocol.md`.

### Tarefa 4.3 — Metodologia "Mão na Massa" e Retenção Pós-Venda (`11 Customer Success Specialist`)
- [x] **4.3.1.** Redigir o **Guia de Treinamento Presencial da Equipe (2 a 3 horas)**: como ensinar colaboradores comuns a usar a IA na rotina diária sem falar de termos técnicos.
- [x] **4.3.2.** Desenvolver o **Protocolo de Acompanhamento dos Primeiros 14 Dias**: régua de contato, suporte proativo e métricas de adoção.
- [x] **4.3.3.** Criar o roteiro oficial para gravação do **Depoimento em Vídeo do Empresário (Prova Social Pioneira)** e manual de prevenção de cancelamentos (*anti-churn*).
- [x] **Entrega Obrigatória:** Salvar em `missions/001-strategic-foundation/11-customer-success-handover.md`.

### Checkpoint Geral de Conclusão da Onda 4 (`00 — CTO`)
- [x] **4.4.** Revisar a integração entre Operações, Engenharia de Campo e CS, consolidar a aprovação das decisões D1, D2 e D6 e atualizar o relatório executivo final.