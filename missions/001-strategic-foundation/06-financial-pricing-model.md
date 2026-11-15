# Modelagem Financeira, Estrutura de Custos e Precificação — Linha MOB Box & MOB Start

**Documento:** `missions/001-strategic-foundation/06-financial-pricing-model.md`  
**Missão:** 001 — Strategic Foundation (Onda 2: Transição de Negócio, Mercado e Finanças)  
**Especialista Responsável:** `08 Financial Strategist`  
**Governança & Coordenação:** `00 — Chief Transformation Officer (CTO)`  
**Data de Referência:** 14 de Novembro de 2026  
**Status:** Consolidado e Pronto para Validação Comercial  

---

## 1. Filosofia Financeira e Diretrizes de Caixa da MOB

A precificação e a governança financeira da **MOB | Inteligência Artificial para Empresas** são desenhadas para garantir crescimento sustentável, proteção radical do fluxo de caixa e alívio operacional tangível para PMEs de Blumenau e do Vale do Itajaí.

Adotamos quatro princípios inegociáveis de engenharia financeira:

1. **Cash-in Antes do Cash-out (Regra Anti-Subsídio):**
   - É terminantemente proibido imobilizar o capital de giro da MOB comprando hardware para estocar sem contrato assinado ou financiando máquinas parceladas para terceiros.
   - Toda compra de hardware é precedida pelo recebimento antecipado do cliente (seja o valor integral da venda no Formato A, seja a Taxa de Ativação que cobre 100% da BOM no Formato B).
2. **Margens Blindadas e Previsíveis:**
   - Margem bruta de implantação/setup superior a **50%**.
   - Margem bruta de receita recorrente (MRR) superior a **70%**.
   - Franquia de consumo de API (OpenAI/Anthropic ZDR) embutida na mensalidade com teto de segurança (*hard limit*) e margem de câmbio pré-calculada.
3. **Transparência Estilo Asaas (Zero Asteriscos):**
   - Proibido faturar em dólar oscilante ou cobrar por token incompreensível para o cliente final. A PME paga uma mensalidade fixa e previsível em Reais (BRL).
   - Sem taxas ocultas de "atualização de versão" ou suporte básico.
4. **Precificação por Valor Gerado (ROI Imediato):**
   - A MOB não vende "computadores com desconto" nem "consultoria por hora". A precificação é ancorada no custo evitado de contratação CLT de assistentes operacionais (R$ 3.800 a R$ 4.500/mês) e na eliminação de horas desperdiçadas pelos sócios e equipes em tarefas manuais.

---

## 2. Estrutura Detalhada de Custos Reais (Unit Economics)

A base de custos unitários é composta por 4 eixos operacionais: Hardware homologado na Onda 1, Consumo de API externa com contrato corporativo ZDR, Horas de bancada/instalação técnica e Infraestrutura central da MOB.

```
+-----------------------------------------------------------------------------------+
|                        ESTRUTURA DE CUSTO DIRETO DA MOB                           |
+-----------------------------------------------------------------------------------+
| 1. HARDWARE (BOM BRASIL)  | 2. API HÍBRIDA ZDR      | 3. MÃO DE OBRA BANCADA/FDE  |
| - Compact: R$ 1.628,00    | - Média PME: R$ 45/mês  | - Clonagem SSD: 20 min      |
| - Pro:     R$ 5.478,00    | - Pico PME:  R$ 70/mês  | - Homologação: 40 min       |
| - Ultra:   R$ 7.755,00    | - Franquia:  R$ 100/mês | - Instalação On-site: 2h    |
| (Nobreak + fretes inc.)   | (Ptax buffer R$ 6,50)   | Custo bancada: R$ 230/box   |
+-----------------------------------------------------------------------------------+
| 4. INFRAESTRUTURA CENTRAL DA MOB (POR CLIENTE / MÊS)                              |
| - VPN Tailscale Business: R$ 15,00  | - Backups Criptografados S3: R$ 10,00       |
| - Monitoramento Proativo: R$ 25,00  | - Custo Recorrente Total Direto: R$ 95/mês  |
+-----------------------------------------------------------------------------------+
```

### 2.1. Custos de Hardware Homologado (BOM Onda 1)

Custos auditados com base nas especificações técnicas de [01-hardware-mob-box-spec.md](file:///J:/Arquivos%20Osmar/MOB%20Transi%C3%A7%C3%A3o%20Marca/missions/001-strategic-foundation/01-hardware-mob-box-spec.md):

| Modelo | Componentes Principais | Nobreak Homologado | Custo Base | Reserva Técnica (10%) | Custo Total de Aquisição |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **MOB Box Compact** | Intel N100, 16GB DDR4, SSD 512GB NVMe | 600VA Interativo (R$ 380) | R$ 1.480,00 | R$ 148,00 | **R$ 1.628,00** |
| **MOB Box Pro** | AMD Ryzen 7 7735HS, 32GB DDR5, SSD 1TB NVMe | 1200VA Senoidal (R$ 780) | R$ 4.980,00 | R$ 498,00 | **R$ 5.478,00** |
| **MOB Box Ultra** | Ryzen 7 5700X, RTX 3060 12GB, 32GB, 2TB SSD | 1500VA Senoidal Puro (R$ 1.250) | R$ 7.050,00 | R$ 705,00 | **R$ 7.755,00** |

> [!NOTE]
> A reserva técnica de 10% cobre variações de frete interestadual, cabos Cat6 blindados, etiquetagem industrial em vinil UV, lacre Void de garantia e pequenos imprevistos de fornecimento.

---

### 2.2. Consumo Médio de API no Modelo Híbrido (ZDR Corporativo)

No modelo híbrido (MOB Box Compact e MOB Start), o armazenamento documental e a busca vetorial (RAG) ocorrem 100% no hardware local da empresa. Apenas o prompt contextualizado e a geração da resposta trafegam para endpoints corporativos com *Zero Data Retention* (OpenAI / Anthropic B2B).

#### Dimensionamento de Tráfego de uma PME Típica (10 Colaboradores Ativos):
- **Consultas RAG / Perguntas Internas:** 80 consultas/dia x 22 dias úteis = **1.760 consultas/mês**.
  - Tamanho médio de contexto injetado: 1.500 tokens de entrada (input).
  - Tamanho médio de resposta gerada: 350 tokens de saída (output).
  - Volume mensal de texto: ~2,64M tokens input / ~0,61M tokens output.
- **Transcrição de Áudios de WhatsApp (Whisper API):** 15 áudios/dia (média de 1 minuto cada) x 22 dias úteis = **330 minutos/mês**.
- **Modelos Utilizados:**
  - *Modelo Padrão (90% do volume):* OpenAI GPT-4o-mini (USD 0,15/1M input | USD 0,60/1M output).
  - *Modelo Avançado de Auditoria (10% das consultas complexas):* GPT-4o ou Claude 3.5 Sonnet (USD 2,50/1M input | USD 10,00/1M output).
  - *Whisper Transcription:* USD 0,006 / minuto.

#### Composição do Custo Mensal de API por Cliente:

| Recurso de IA | Volume Mensal | Custo Unitário (USD) | Custo Mensal (USD) | Custo em Reais (Buffer R$ 6,50 + IOF) |
| :--- | :---: | :---: | :---: | :---: |
| GPT-4o-mini (Input) | 2,38 M tokens | $ 0,15 / 1M | $ 0,36 | R$ 2,34 |
| GPT-4o-mini (Output) | 0,55 M tokens | $ 0,60 / 1M | $ 0,33 | R$ 2,15 |
| GPT-4o / Sonnet (Consultas Críticas) | 0,32 M tokens | $ 3,50 / 1M méd. | $ 1,12 | R$ 7,28 |
| Whisper API (Transcrição de Áudios) | 330 minutos | $ 0,006 / min | $ 1,98 | R$ 12,87 |
| Embeddings Locais (LanceDB) | Ilimitado | $ 0,00 (Local) | $ 0,00 | R$ 0,00 |
| **Subtotal Consumo Real Médio** | — | — | **$ 3,79** | **R$ 24,64** |
| Margem de Segurança / Picos Operacionais (100%) | — | — | $ 3,79 | R$ 24,64 |
| **Custo Mensal Orçado por Cliente (Provisão)** | — | — | **$ 7,58** | **R$ 49,28** |

> [!IMPORTANT]
> **Franquia de Segurança:** Toda mensalidade da MOB inclui uma franquia de consumo de API de até **R$ 100,00/mês**. O consumo médio real de uma PME gira entre **R$ 25,00 e R$ 50,00/mês**, garantindo que a MOB opere com folga técnica e margem recorrente preservada. Um teto programático no gateway corta abusos e alerta o CTO caso um cliente atinja 80% do teto.

---

### 2.3. Custo de Bancada, Montagem e Implantação Presencial (FDE / Last Mile)

A preparação de cada Box adota o processo industrial de clonagem rápida (*Golden Image*) detalhado em [02-mob-core-architecture.md](file:///J:/Arquivos%20Osmar/MOB%20Transi%C3%A7%C3%A3o%20Marca/missions/001-strategic-foundation/02-mob-core-architecture.md).

| Etapa Operacional | Duração | Descrição da Atividade | Custo Horas / Direto |
| :--- | :---: | :--- | :---: |
| **Clonagem & Provisionamento** | 25 min | Gravação da imagem mestre NVMe, ajuste de BIOS e first-boot script | R$ 25,00 |
| **Teste de Estresse de Bancada** | 35 min | Burn-in de CPU/RAM, corte de energia simulado e checagem de VPN | R$ 35,00 |
| **Etiquetagem & Expedição** | 15 min | Aplicação de vinil frontal, serial MAC e lacre Void nos parafusos | R$ 15,00 |
| **Implantação On-Site (Blumenau/Vale)** | 2 horas | Conexão física no switch, IP fixo, mapeamento da pasta Samba (`\\mob-box\documentos-ia`) e treinamento de 15 min da equipe | R$ 120,00 |
| **Deslocamento & Combustível** | — | Raio médio de 25 km na região metropolitana de Blumenau | R$ 35,00 |
| **Custo Direto Total de Implantação** | **~3h 15m** | **Entrega completa em funcionamento** | **R$ 230,00** |

---

### 2.4. Custos Recorrentes de Sustentação Operacional (Por Cliente / Mês)

Custos diretos para manter cada unidade ativa, segura e monitorada remotamente:

- **Tailscale Business (Túnel VPN Criptografado Ponto a Ponto):** R$ 15,00/cliente/mês.
- **Storage de Backup Noturno Secundário (S3 Criptografado AES-256):** R$ 10,00/cliente/mês (retenção de 30 dias de snapshots do banco vetorial e metadados).
- **Provisão de API Híbrida (OpenAI/Anthropic ZDR):** R$ 50,00/cliente/mês (R$ 0,00 nos modelos Pro e Ultra locais).
- **Suporte Técnico N1/N2 & Manutenção Preventiva (Média 1h/mês):** R$ 65,00/cliente/mês.
- **Custo Operacional Recorrente Direto Total:**
  - No Modelo Híbrido (Compact): **R$ 140,00 / mês**.
  - No Modelo 100% Local (Pro / Ultra): **R$ 90,00 / mês**.

---

## 3. Tabela Oficial de Preços MOB (Os 2 Formatos Comerciais)

Para atender tanto o empresário que prefere investir em ativo próprio (CapEx) quanto aquele que busca despesa operacional pura com dedução fiscal (OpEx / HaaS), a MOB estrutura duas modalidades oficiais de contratação.

---

### 3.1. FORMATO A — Venda Chave na Mão (CapEx + Retainer de Gestão)

Nesta modalidade, o cliente adquire a propriedade definitiva da MOB Box e contrata o *Retainer Mensal de Gestão & Sustentação* para garantir suporte contínuo, backups monitorados, atualizações de modelos e franquia de API.

```
+--------------------------------------------------------------------------------------------------------------------+
|                                    TABELA FORMATO A — VENDA CHAVE NA MÃO                                           |
+---------------------+-------------------+---------------------+--------------------+-------------------------------+
| Modelo              | Valor Setup/Box   | Custo Direto Setup  | Margem Bruta Setup | Retainer Mensal de Gestão     |
+---------------------+-------------------+---------------------+--------------------+-------------------------------+
| **MOB Box Compact** | **R$ 4.900,00**   | R$ 1.858,00         | **62,1%** (R$ 3.042) | **R$ 990,00 / mês**           |
| **MOB Box Pro**     | **R$ 11.900,00**  | R$ 5.708,00         | **52,0%** (R$ 6.192) | **R$ 1.490,00 / mês**         |
| **MOB Box Ultra**   | **R$ 16.900,00**  | R$ 7.985,00         | **52,8%** (R$ 8.915) | **R$ 1.990,00 / mês**         |
+---------------------+-------------------+---------------------+--------------------+-------------------------------+
```

#### O Que Está Incluso no Setup Chave na Mão (Formato A):
1. **Hardware Completo:** Servidor MOB Box homologado + Nobreak correspondente homologado + Cabeamento Cat6 + Etiquetagem de patrimônio.
2. **Implantação de Fábrica:** Instalação do Ubuntu LTS, Docker Compose, Tailscale VPN, pasta inteligente Samba (`\\mob-box\documentos-ia`) e AnythingLLM.
3. **Os 3 Assistentes de Fábrica Configurados:**
   - *Consultor Interno* (indexado com as tabelas de preços, manuais e catálogos da empresa);
   - *Redator de Padrão* (áudios e rascunhos virando propostas em PDF com timbrado oficial);
   - *Analista de Documentos* (revisão de contratos, editais e termos em 3 minutos).
4. **Treinamento Operacional Presencial:** Sessão prática de até 90 minutos para o time operacional e diretoria.
5. **Garantia Física de Balcão:** 12 meses contra defeitos de fabricação (com equipamento reserva imediato se mantiver o retainer ativo).

#### O Que Está Incluso no Retainer Mensal de Gestão (Formato A):
- Monitoramento proativo 24/7 de integridade dos containers via Tailscale;
- Backups noturnos automatizados criptografados com retenção de 30 dias;
- Atualizações de segurança de sistema e evolução das imagens Docker;
- Franquia mensal de consumo de API corporativa com ZDR (até R$ 100,00/mês na Compact);
- Suporte remoto em horário comercial (segunda a sexta, 08h às 18h) com SLA de até 4 horas;
- Ajustes finos mensais nos prompts dos 3 assistentes e inclusão de novas regras documentais.

---

### 3.2. FORMATO B — Comodato / Hardware as a Service (HaaS - Contrato 12 Meses)

A modalidade HaaS é o formato de menor atrito de entrada e maior valor presente líquido (LTV) para a MOB. É indicada para clientes que preferem não imobilizar capital em ativos de TI e desejam deduzir 100% da despesa operacional (OpEx) no lucro real/presumido.

> [!IMPORTANT]
> **A Regra de Ouro do Comodato MOB:**
> Para eliminar o risco de inadimplência e perda de capital, a **Taxa de Ativação cobre 100% do custo físico de aquisição do hardware e nobreak (BOM)**. Se o cliente rescindir ou quebrar a máquina, o equipamento já está 100% pago no primeiro dia de operação. A MOB nunca fica no prejuízo.

```
+--------------------------------------------------------------------------------------------------------------------+
|                               TABELA FORMATO B — COMODATO / HARDWARE AS A SERVICE                                  |
+---------------------+-------------------+---------------------+--------------------+-------------------------------+
| Modelo              | Taxa de Ativação  | Custo BOM Hardware  | Payback Hardware   | Assinatura Mensal (12 meses)  |
+---------------------+-------------------+---------------------+--------------------+-------------------------------+
| **MOB Box Compact** | **R$ 1.990,00**   | R$ 1.628,00         | **Imediato (Mês 0)**| **R$ 1.290,00 / mês**         |
| **MOB Box Pro**     | **R$ 5.990,00**   | R$ 5.478,00         | **Imediato (Mês 0)**| **R$ 1.890,00 / mês**         |
| **MOB Box Ultra**   | **R$ 8.900,00**   | R$ 7.755,00         | **Imediato (Mês 0)**| **R$ 2.490,00 / mês**         |
+---------------------+-------------------+---------------------+--------------------+-------------------------------+
```

#### Vantagens Estratégicas do Formato B para a MOB:
- **Receita Recorrente Anual Contratada (LTV):**
  - No modelo Compact: R$ 1.990 (ativação) + (12 x R$ 1.290) = **R$ 17.470,00 por contrato anual**.
  - No modelo Pro: R$ 5.990 (ativação) + (12 x R$ 1.890) = **R$ 28.670,00 por contrato anual**.
- **Troca Expressa em Caso de Falha (*Swap SLA*):**
  - Em caso de queima da placa-mãe ou falha de disco, a MOB substitui a Box no escritório do cliente em até **4 horas úteis**, restaurando o último backup íntegro do SSD. O cliente não gasta um centavo com peças nem espera prazo de assistência técnica.
- **Propriedade do Equipamento:**
  - O hardware permanece como propriedade fiduciária da MOB. Ao término de 12 meses, o contrato se renova automaticamente com possibilidade de upgrade de hardware para a versão mais recente sem nova taxa de ativação.

---

### 3.3. Oferta de Entrada Sem Hardware: MOB Start

Conforme alinhado nas referências de negócio, para clientes que desejam validar um primeiro fluxo sem instalação imediata de servidor físico no primeiro mês:

| Pacote | Implantação Inicial | Gestão Mensal | Escopo / Limites |
| :--- | :---: | :---: | :--- |
| **MOB Start** | **R$ 4.900,00** | **R$ 990,00 / mês** | 1 processo mapeado, até 50 documentos organizados, 3 modelos de saída, treinamento de até 6 pessoas e acompanhamento de 14 dias. |
| *Upgrade para MOB Box* | — | — | Crédito de R$ 2.000 da implantação abatido no Setup da Box após 60 dias de validação bem-sucedida. |

---

### 3.4. Tabela de Módulos Adicionais e Serviços Extras (Upsell)

Para evitar que demandas fora de escopo corroam a margem de suporte da MOB, todo serviço complementar possui precificação formal:

| Módulo Adicional | Setup / Valor Único | Impacto na Mensalidade |
| :--- | :---: | :---: |
| **Novo Assistente / Workflow Setorial** | R$ 2.500 a R$ 4.500 | + R$ 300,00 / mês |
| **Integração via Webhook / API REST (ERP ou CRM)** | R$ 3.000 a R$ 6.000 | + R$ 400,00 / mês |
| **Turma Adicional de Treinamento (até 8 pessoas / 2h)** | R$ 1.500,00 | — |
| **Preparação e Higienização de Base Histórica (> 100 docs)** | R$ 180,00 / hora técnica | — |
| **Banco de Horas de Suporte Técnico Adicional** | R$ 180,00 / hora | Pacote 10h com 15% desc. |
| **Visita Presencial Fora da Grande Blumenau** | R$ 2,50/km + diária R$ 600 | Cobrado sob demanda |

---

## 4. Políticas Comerciais, Faturamento e Blindagem do Fluxo de Caixa

Para blindar a operação contra inadimplência e descasamento de prazos, a MOB adota regras financeiras restritivas de faturamento inspiradas nas melhores práticas de SaaS B2B:

```
+-----------------------------------------------------------------------------------+
|                        FLUXO FINANCEIRO DE FATURAMENTO MOB                        |
+-----------------------------------------------------------------------------------+
| [1. Proposta Fechada] --> [2. Emissão Cobrança Asaas] --> [3. Compensação Pix/Boleto]|
|                           - Setup ou Taxa Ativação       - DINHEIRO NA CONTA MOB  |
|                           - 1ª Mensalidade Antecipada    - Status: Liberado Prod. |
|                                                                    |              |
|                                                                    v              |
| [6. Go-Live & Produção] <-- [5. Implantação On-Site]  <-- [4. Montagem Bancada]   |
| - SLA Ativo               - Treinamento 15 min            - Compra Peças / BOM    |
| - Próx. Recorrência D+30  - Termo de Entrega Assinado     - Imagem Mestre < 30min |
+-----------------------------------------------------------------------------------+
```

### 4.1. Regras Inegociáveis de Caixa:
1. **Compensação Prévia Obrigatória:**
   - Nenhuma peça de hardware é comprada e nenhum técnico se desloca para o cliente antes da compensação bancária confirmada da taxa de setup/ativação e da primeira mensalidade.
2. **Plataforma de Liquidação Oficial:**
   - Integração com gateway corporativo **Asaas**:
     - Cobranças geradas automaticamente com QR Code Pix dinâmico (liquidação em segundos) e boleto bancário registrado;
     - Opção de cartão de crédito recorrente (sem travar o limite total anual do cartão corporativo do cliente);
     - Régua de comunicação automatizada de vencimento via WhatsApp e e-mail com 3 dias de antecedência.
3. **Faturamento Recorrente Antecipado:**
   - As mensalidades vencem sempre de forma antecipada (ex: pagamento em 05/Novembro para cobertura do período de 05/Novembro a 04/Dezembro).
4. **Política Rígida de Inadimplência:**
   - *D+3 de atraso:* Notificação amigável automática via WhatsApp;
   - *D+10 de atraso:* Suspensão preventiva do suporte técnico não emergencial e da franquia de API híbrida;
   - *D+20 de atraso:* Bloqueio temporário do túnel de manutenção Tailscale;
   - *D+30 de atraso:* Rescisão unilateral do contrato de comodato, com emissão de ordem de recolhimento da MOB Box em conformidade com as cláusulas de comodato estabelecidas em [03-security-lgpd-framework.md](file:///J:/Arquivos%20Osmar/MOB%20Transi%C3%A7%C3%A3o%20Marca/missions/001-strategic-foundation/03-security-lgpd-framework.md).

---

## 5. Calculadora de Argumento de Venda (ROI do Cliente para Fechamento Comercial)

O dono de uma pequena ou média empresa não compra "banco vetorial", "processador N100" ou "Docker". Ele compra **economia na folha de pagamento, eliminação de erros e alívio do seu tempo pessoal**.

Abaixo está o modelo matemático comparativo oficial que o consultor comercial da MOB utiliza na reunião presencial de 15 minutos para comprovar que **a MOB Box se paga no primeiro ou segundo mês**.

---

### 5.1. Comparativo Direto dos 3 Cenários Operacionais

```
+--------------------------------------------------------------------------------------------------------------------+
|                                    COMPARATIVO DE CUSTO MENSAL PARA A PME                                          |
+---------------------------------------+-----------------------------+----------------------------------------------+
| Solução Avaliada                      | Custo Mensal Estimado       | Riscos Ocultos & Ineficiências               |
+---------------------------------------+-----------------------------+----------------------------------------------+
| **1. Contratar 1 Auxiliar/CLT Extra** | **R$ 3.850,00 a R$ 4.500,00**| Encargos (INSS/FGTS), férias, faltas, turnover|
| (Salário base R$ 2.200 + encargos)    |                             | Curva de aprendizado de 3 meses, erro humano |
+---------------------------------------+-----------------------------+----------------------------------------------+
| **2. Licenças de ChatGPT Plus Avulsas**| **R$ 1.350,00 a R$ 1.500,00**| Dados vazando para nuvem pública (Sem LGPD)  |
| (10 usuários x $20 + IOF + Câmbio)    |                             | Zero integração com pastas de rede locais    |
|                                       |                             | Não conhece as regras e tabelas da empresa   |
+---------------------------------------+-----------------------------+----------------------------------------------+
| **3. MOB Box Compact (Comodato HaaS)**| **R$ 1.290,00**             | **TUDO INCLUSO:** Servidor local no escritório|
| (Assinatura mensal com tudo incluso)  | *(Setup R$ 1.990 diluído)*  | Assistentes com as regras da empresa         |
|                                       |                             | Sem limite por usuário, 100% blindado LGPD   |
+---------------------------------------+-----------------------------+----------------------------------------------+
```

---

### 5.2. A Matemática do Tempo Poupado (Economia de Horas da Equipe)

Simulação conservadora para um escritório de serviços, imobiliária ou distribuidora com **10 colaboradores**:

| Atividade Operacional Diária | Tempo Gasto Manualmente | Tempo com Assistente MOB | Tempo Poupado por Dia |
| :--- | :---: | :---: | :---: |
| **Redação de Orçamentos e Propostas** (Vendedor ou Técnico) | 45 min por proposta (2x/dia = 90 min) | 5 min (áudio WhatsApp -> PDF pronto) | **80 min / dia** |
| **Consulta a Tabelas de Preços, Prazos e Regras** (Atendimento) | 30 min por dia (perguntando aos colegas) | 20 segundos (busca no Consultor Interno) | **25 min / dia** |
| **Conferência de Contratos e Documentos** (Diretor / Gerente) | 40 min por contrato (3x/semana) | 4 min (resumo de 5 pontos do Analista) | **25 min / dia** |
| **Tempo Total Poupado na Empresa** | — | — | **~2,15 horas / dia** |
| **Total de Horas Poupadas por Mês (22 dias úteis)** | — | — | **47,3 horas / mês** |

#### Valoração Financeira das Horas Poupadas:
- Custo médio da hora de trabalho na empresa (salário + encargos médios de R$ 4.000 / 160h mês): **R$ 25,00 / hora**.
- Custo da hora do sócio/diretor (retirada média / 160h): **R$ 65,00 / hora**.
- Economia mensal direta em produtividade recuperada:
  - 35h da equipe x R$ 25,00 = R$ 875,00
  - 12h do diretor x R$ 65,00 = R$ 780,00
  - **Valor Econômico Recuperado por Mês: R$ 1.655,00 / mês**.

```
    CÁLCULO DO ROI REAL (RETORNO SOBRE O INVESTIMENTO):
    
    Economia Mensal Gerada:    R$ 1.655,00
    (-) Custo Mensalidade MOB:  R$ 1.290,00
    ----------------------------------------
    SALDO LÍQUIDO POSITIVO:    + R$ 365,00 / mês (no bolso do cliente)
    
    PAYBACK DO INVESTIMENTO INICIAL:
    Investimento Inicial (Taxa de Ativação): R$ 1.990,00
    Tempo de Retorno do Investimento: 1,2 meses (Menos de 40 dias de operação)!
```

---

### 5.3. Scripts Numéricos Prontos para a Reunião de 15 Minutos

O consultor comercial deve utilizar estes 3 argumentos matemáticos objetivos durante a demonstração:

#### Argumento 1: "O Custo do Estagiário Invisível"
> *"Seu Roberto, para ter alguém redigindo orçamentos na sua formatação, tirando dúvidas de tabelas e revisando contratos, o senhor gastaria no mínimo R$ 3.800 por mês entre salário e encargos de um estagiário ou auxiliar. A MOB Box faz exatamente essa triagem por R$ 1.290 por mês — sem férias, sem atestado e respondendo em dois segundos no celular do seu time. O senhor economiza mais de R$ 30.000 por ano na folha."*

#### Argumento 2: "O Risco das Contas Avulsas em Dólar"
> *"Hoje, se o senhor pagar uma conta de ChatGPT Plus para cinco funcionários, já gasta quase R$ 700 por mês no cartão corporativo, sujeito à variação do dólar. Só que nenhum deles compartilha a mesma base, os dados da sua empresa vão para servidores públicos nos EUA e a ferramenta não sabe a sua tabela de preços. Na MOB Box, por R$ 990 a R$ 1.290 fixos em Reais, a inteligência fica gravada dentro do seu escritório, compartilhada por toda a sua equipe via rede local."*

#### Argumento 3: "O Orçamento Que Não Foi Feito na Hora"
> *"Quantos clientes o senhor já perdeu porque o vendedor demorou 24 horas para mandar um orçamento formal em PDF? Com o Redator de Padrão da MOB Box, o vendedor manda um áudio de 30 segundos no WhatsApp saindo da visita e a proposta timbrada sai pronta em 1 minuto. Se essa agilidade fizer o senhor fechar apenas 1 venda a mais por mês, a mensalidade da Box já se pagou três vezes."*

---

## 6. Projeção de Faturamento e Ponto de Equilíbrio da MOB (Plano 12 Meses)

Estrutura projetada para a unidade de negócios da MOB no mercado de Blumenau e Vale do Itajaí:

### 6.1. Custos Fixos Operacionais Próprios da MOB:
- Pró-labore inicial / Coordenação Técnica: R$ 5.000,00 / mês;
- Ferramental (Tailscale Business, GitHub, domínio, infra central): R$ 600,00 / mês;
- Contabilidade e taxas bancárias Asaas: R$ 550,00 / mês;
- Marketing local e prospecção ativa: R$ 850,00 / mês;
- **Custo Fixo Mensal Base da MOB:** **R$ 7.000,00 / mês**.

### 6.2. Ponto de Equilíbrio (Break-Even):
- Margem de contribuição média por contrato de assinatura (Formato B - Compact):
  - Mensalidade: R$ 1.290,00
  - (-) Impostos Simples Nacional (6%): R$ 77,40
  - (-) Taxas de liquidação Asaas (2%): R$ 25,80
  - (-) Custos diretos (API híbrida + Tailscale + Backup): R$ 140,00
  - **Margem de Contribuição Líquida Unitária:** **R$ 1.046,80 / cliente / mês**.
- **Clientes Necessários para o Break-Even:**
  $$\text{Break-Even} = \frac{\text{Custo Fixo}}{\text{Margem Unitária}} = \frac{\text{R\$\ } 7.000,00}{\text{R\$\ } 1.046,80} \approx \mathbf{7\ \text{Clientes Ativos em Assinatura}}.$$

---

### 6.3. Cenário de Escala Gradual (Metas de 3, 6 e 12 Meses)

```
+--------------------------------------------------------------------------------------------------------------------+
|                                    PROJEÇÃO DE CRESCIMENTO MOB (BLUMENAU E VALE)                                   |
+-------------------+-----------------+--------------------+--------------------+-------------------+----------------+
| Marco Temporal    | Clientes Ativos | Receita Setups/Mês | MRR Recorrente/Mês | Faturamento Bruto | Lucro Líquido  |
+-------------------+-----------------+--------------------+--------------------+-------------------+----------------+
| **Mês 1 (Setup)** | 2 clientes      | R$ 9.800,00        | R$ 1.980,00        | R$ 11.780,00      | R$ 4.250,00    |
| **Mês 3**         | 6 clientes      | R$ 5.970,00        | R$ 7.740,00        | R$ 13.710,00      | R$ 6.180,00    |
| **Mês 6**         | 18 clientes     | R$ 7.960,00        | R$ 23.220,00       | R$ 31.180,00      | R$ 17.840,00   |
| **Mês 12**        | 45 clientes     | R$ 9.950,00        | R$ 58.050,00       | R$ 68.000,00      | R$ 42.150,00   |
+-------------------+-----------------+--------------------+--------------------+-------------------+----------------+
```

> [!TIP]
> Com **45 clientes ativos** na região de Blumenau (representando menos de 0,5% das empresas de serviços e comércio da microrregião), a MOB atinge um faturamento anualizado superior a **R$ 800.000,00**, com **R$ 58.000,00 de receita mensal previsível (MRR)** e margem líquida superior a **60%**.

---

## 7. Checklist de Validação Comercial & Aprovações Pendentes

Para a execução da Onda 3 e início da prospecção de clientes reais, os seguintes pontos devem ser validados pelo Fundador (Osmar):

- [ ] **Aprovação da Tabela de Preços de Lançamento:** Validação dos preços de R$ 4.900 (Setup) / R$ 990 (Mensal) para o Formato A e R$ 1.990 (Ativação) / R$ 1.290 (Mensal) para o Formato B.
- [ ] **Abertura de Conta PJ no Asaas:** Configuração da régua de cobrança automática com suporte a Pix e Boletos registrados.
- [ ] **Definição da Condição dos Primeiros 3 Clientes ("Fundadores"):** Concessão de 20% de desconto no setup (R$ 3.900 ou Taxa de Ativação R$ 1.628 a preço de custo) em troca de depoimento em vídeo e estudo de caso autorizado.
- [ ] **Alinhamento do Script com a Equipe Comercial (Agente 09):** Homologação dos argumentos matemáticos de ROI para inclusão no playbook de vendas.

---

*Assinado eletronicamente,*  
**08 — Financial Strategist**  
*MOB | Inteligência Artificial para Empresas*  
`mob.tec.br`
