# Especificação de Engenharia e Hardware — Linha MOB Box

**Documento:** `01-hardware-mob-box-spec.md`  
**Missão:** 001 — Strategic Foundation (Onda 1: Produto, Engenharia e Segurança)  
**Autor:** 05 — Hardware & Edge Architect  
**Data:** 14 de novembro de 2026  
**Status:** Pronto para Homologação de Bancada  

---

## 1. Visão Geral da Linha MOB Box

A **MOB Box** é a camada de infraestrutura física (*edge computing*) da MOB. Foi desenhada para atender a pequenas e médias empresas (PMEs) que buscam adotar Inteligência Artificial sem custos em dólar por usuário, sem risco de vazamento de dados confidenciais e sem depender de parametrizações complexas.

### Diretrizes de Projeto:
1. **Zero Manutenção pelo Cliente:** O equipamento opera como um eletrodoméstico corporativo (*appliance*). Não possui teclado, mouse ou monitor na operação diária (*headless*).
2. **Resiliência Energética:** Religa e reinicia todos os serviços automaticamente após qualquer oscilação ou queda de energia elétrica (*Restore on AC Power Loss*).
3. **Isolamento de Segurança:** Nenhuma porta é aberta no roteador do cliente. O suporte remoto da MOB opera exclusivamente via túnel VPN ponto a ponto criptografado.
4. **Graduação de Capacidade:** A linha é dividida em 3 modelos objetivos, cobrindo desde a entrada com alta margem (modelo híbrido) até operações 100% locais e isoladas com aceleração gráfica dedicada.

---

## 2. Ficha Técnica e BOM (Bill of Materials) no Brasil

### 2.1. MOB Box Compact (Entrada / Híbrida)
*Modelo carro-chefe de escala e maior margem bruta de implantação.*

* **Arquitetura Operacional:** **Híbrida**. Toda a interface multiusuário, armazenamento de arquivos, banco vetorial local (RAG) e rotinas de automação rodam 100% dentro da caixa. A geração pesada de linguagem é roteada para API corporativa privada com contrato de *Zero Data Retention* (sem retenção e sem uso dos dados para treino), com custos de consumo embutidos na assinatura da MOB.
* **Capacidade de Atendimento:** 5 a 15 usuários simultâneos no escritório.
* **Fator de Forma:** Mini PC Ultra-Compacto (dimensões médias: 115 x 105 x 45 mm, peso < 450 g).

#### Ficha Técnica Detalhada:
| Componente | Especificação Homologada | Alternativa Aceita |
| :--- | :--- | :--- |
| **Processador (CPU)** | Intel Alder Lake-N N100 (4C/4T, até 3.4 GHz, 6W TDP, suporte AVX2) | Intel N97 (12W TDP) ou AMD Ryzen 5 5500U/5560U |
| **Gráficos Integrados** | Intel UHD Graphics 24 EUs (decodificação de mídia por hardware) | AMD Radeon Graphics |
| **Memória RAM** | 16 GB DDR4 3200 MHz SODIMM (ou DDR5 4800 MHz) | 16 GB DDR5 onboard de canal duplo |
| **Armazenamento Primário**| SSD M.2 512 GB NVMe PCIe 3.0 x4 (Leitura > 2.000 MB/s) | SSD M.2 1 TB NVMe |
| **Conectividade de Rede**| 1x RJ45 Gigabit Ethernet 10/100/1000 Mbps (Realtek/Intel) | 2x RJ45 Gigabit (permite segregação física) |
| **Conexões Sem Fio** | Wi-Fi 6 (802.11ax) + Bluetooth 5.2 | Wi-Fi 5 (uso restrito a contingência de bancada) |
| **Portas de E/S** | 2x HDMI 2.0 (manutenção), 4x USB 3.2, 1x DC Jack | USB-C com saída de dados |
| **Alimentação Elétrica** | Fonte Externa Bivolt 100-240V AC -> 12V 3A DC (Plug P4/P5) | Fonte 19V 3.42A |
| **Consumo e Térmica** | 8W em repouso / 18W em carga máxima / Cooler silencioso (< 25 dB) | Dissipação passiva em alumínio |

#### Lista de Compras (BOM Brasil) — MOB Box Compact:
| Item | Fornecedor / Canal Homologado | Preço Médio (R$) | Prazo Médio |
| :--- | :--- | :---: | :---: |
| Mini PC N100 (Gabinete, Placa, CPU, Fonte) | Importadores com estoque BR / Mercado Livre Oficial / Amazon BR | R$ 980,00 | 3 a 5 dias |
| Memória 16 GB DDR4 3200MHz SODIMM | KaBuM! / Terabyte / Kingston Brasil | R$ 220,00 | 2 a 4 dias |
| SSD 512 GB NVMe PCIe M.2 (Kingston NV2 / Crucial P3) | KaBuM! / Pichau | R$ 240,00 | 2 a 4 dias |
| Nobreak Compacto 600VA / 300W Bivolt | Intelbras / SMS / Ragtech | R$ 380,00 | 3 a 5 dias |
| Patch Cord Cat6 1.5m Blindado + Abraçadeiras | Varejo de Rede Local | R$ 25,00 | Pronta Entrega |
| Etiquetagem de Patrimônio em Vinil Fosco + Lacre Void | Gráfica Rápida Local | R$ 15,00 | 2 dias |
| **Custo Base de Hardware** | | **R$ 1.480,00** | |
| Reserva Técnica de Montagem / Fretes (10%) | Margem para oscilação | R$ 148,00 | — |
| **Custo Total Unitário MOB Box Compact** | | **R$ 1.628,00** | |

---

### 2.2. MOB Box Pro (100% Local e Silenciosa)
*Indicada para escritórios de advocacia, consultórios médicos, financeiro e clientes com política rígida de sigilo total offline.*

* **Arquitetura Operacional:** **100% Local / Offline**. A ingestão documental, o banco vetorial e a inferência de LLM rodam fisicamente na máquina sem nenhuma transmissão de texto para fora da rede local.
* **Modelos Suportados:** LLMs locais quantizados de 8B a 14B parâmetros (ex: *Llama 3.1 8B Instruct Q4/Q5*, *Qwen 2.5 7B/14B Q4*, *DeepSeek-R1-Distill-Llama-8B*).
* **Capacidade de Atendimento:** 5 a 10 usuários com requisições espaçadas; processamento local com resposta de 15 a 35 tokens por segundo.
* **Fator de Forma:** Mini PC Premium de Alta Eficiência / Mac Mini M4.

#### Ficha Técnica Detalhada:
| Componente | Especificação Recomendada (Opção A - AMD Ryzen AI) | Especificação Alternativa (Opção B - Apple Silicon) |
| :--- | :--- | :--- |
| **Processador / SoC** | AMD Ryzen 7 7735HS / 8845HS (8C/16T, até 5.1 GHz, NPU Integrada) | Apple M4 (10-core CPU, 10-core GPU, 16-core Neural Engine) |
| **Acelerador de IA** | GPU Integrada AMD Radeon 780M (12 CUs RDNA 3) com suporte ROCm/Vulkan | 10-core GPU com aceleração Metal e largura de banda unificada |
| **Memória RAM** | 32 GB DDR5 5600 MHz SODIMM Dual-Channel (alocação de 16GB para VRAM) | 24 GB de Memória Unificada de Alta Velocidade (120 GB/s) |
| **Armazenamento Interno** | 1 TB SSD M.2 NVMe PCIe 4.0 x4 (Leitura > 4.500 MB/s) | 512 GB SSD NVMe interno + SSD Externo 1 TB USB4/Thunderbolt |
| **Rede Cabeada** | 1x RJ45 2.5 Gbps Ethernet | 1x Gigabit Ethernet (ou opcional 10 Gbps) |
| **Nível de Ruído** | Operação ultra-silenciosa (< 28 dB em carga sustentada) | Praticamente inaudível (< 20 dB) |
| **Alimentação Elétrica** | Fonte Externa Bivolt 19V / 6.32A (120W) | Fonte Interna 100-240V AC (Cabo padrão bipolar) |

#### Lista de Compras (BOM Brasil) — MOB Box Pro:
| Item | Fornecedor / Canal Homologado | Preço Médio (R$) | Prazo Médio |
| :--- | :--- | :---: | :---: |
| Mini PC Ryzen 7 7735HS/8845HS Barebone | Distribuidores Nacionais / Mercado Livre Gold | R$ 2.950,00 | 5 a 8 dias |
| Memória Kit 32 GB (2x 16GB) DDR5 5600MHz | KaBuM! / Terabyte | R$ 680,00 | 3 a 5 dias |
| SSD 1 TB NVMe PCIe 4.0 (Kingston KC3000 / Crucial T500) | KaBuM! / Pichau | R$ 520,00 | 3 a 5 dias |
| Nobreak Interativo Senoidal 1200VA / 720W | Ragtech / SMS Senoidal | R$ 780,00 | 4 a 6 dias |
| Acessórios, Cabos Cat6 e Etiquetagem Industrial | Varejo de Rede Local | R$ 50,00 | Pronta Entrega |
| **Custo Base de Hardware** | | **R$ 4.980,00** | |
| Reserva Técnica de Montagem e Testes de VRAM (10%) | Margem operacional | R$ 498,00 | — |
| **Custo Total Unitário MOB Box Pro** | | **R$ 5.478,00** | |

---

### 2.3. MOB Box Ultra (Workstation SFF com GPU Dedicada)
*Indicada para empresas com alta demanda de concorrência, transcrição de áudio em massa (Whisper local contínuo) ou modelos de 14B a 32B quantizados.*

* **Arquitetura Operacional:** **Workstation Compacta 100% Local**. Placa de vídeo dedicada com VRAM GDDR6 veloz, separando o pipeline de embeddings/Whisper da geração de texto.
* **Capacidade de Atendimento:** 15 a 30 usuários simultâneos com fila de inferência gerenciada.
* **Fator de Forma:** Gabinete SFF (*Small Form Factor*) ou Micro-ATX com excelente ventilação (Volume: 14 a 18 Litros).

#### Diretriz Inegociável de GPU:
> [!IMPORTANT]
> **VRAM Real e Procedência:** Usar exclusivamente **NVIDIA GeForce RTX 3060 de 12 GB GDDR6** (ou RTX 4060 Ti 16 GB).
> - **Proibido:** Anúncios enganosos de *"RTX 2080 Ti de 22 GB"* (placas modificadas com troca artesanal de memórias, BIOS alterada e alta taxa de queima térmica).
> - **Placas Usadas:** No caso de compra de RTX 3060/3090 seminovas para bancada de testes, é mandatório teste de estresse de VRAM contínuo por 2 horas (`cuda-memtest` e `FurMark`), medição de ponto quente (*hotspot* < 85°C) e laudo físico de ventoinhas e conectores.

#### Ficha Técnica Detalhada:
| Componente | Especificação Homologada |
| :--- | :--- |
| **Processador (CPU)** | AMD Ryzen 7 5700X (8C/16T, 65W TDP) ou Intel Core i5 13400F |
| **Placa de Vídeo (GPU)** | NVIDIA GeForce RTX 3060 12 GB GDDR6 (Dual Fan, largura 2 slots) |
| **Placa-Mãe** | Micro-ATX Chipset B550 (AMD) ou B760 (Intel) com VRM refrigerado e slots PCIe blindados |
| **Memória RAM** | 32 GB DDR4 3200 MHz (2x 16 GB) com dissipador térmico |
| **Armazenamento 1 (SO e Modelos)** | SSD 1 TB M.2 NVMe PCIe 4.0 (Leitura > 3.500 MB/s) |
| **Armazenamento 2 (Dados e Backups)**| SSD 1 TB SATA III / NVMe secundário dedicado a volumes Docker e Samba |
| **Fonte de Alimentação** | 650W 80 Plus Bronze/Gold com PFC Ativo (Corsair, MSI, XPG) e cabos PCIe individuais |
| **Gabinete & Refrigeração** | Gabinete SFF / Micro-ATX com painel frontal perfurado (*mesh*), 3x ventoinhas 120mm PWM + Air Cooler para CPU |
| **Rede** | 1x Gigabit Ethernet Realtek/Intel onboard |

#### Lista de Compras (BOM Brasil) — MOB Box Ultra:
| Item | Fornecedor / Canal Homologado | Preço Médio (R$) | Prazo Médio |
| :--- | :--- | :---: | :---: |
| Processador AMD Ryzen 7 5700X | KaBuM! / Pichau / Terabyte | R$ 1.150,00 | 3 a 5 dias |
| Cooler CPU Air Cooler DeepCool AG400 | KaBuM! / Terabyte | R$ 140,00 | 3 a 5 dias |
| Placa-Mãe B550M (MSI / ASUS / Gigabyte) | KaBuM! / Pichau | R$ 650,00 | 3 a 5 dias |
| Memória 32 GB (2x 16GB) DDR4 3200MHz | Terabyte / KaBuM! | R$ 440,00 | 3 a 5 dias |
| GPU NVIDIA RTX 3060 12 GB GDDR6 (Nova com NF) | KaBuM! / Pichau | R$ 1.850,00 | 3 a 5 dias |
| SSD 1 TB NVMe PCIe 4.0 (Sistema + Modelos) | KaBuM! | R$ 480,00 | 3 a 5 dias |
| SSD 1 TB SATA III (Storage e Backups locais) | Terabyte / KaBuM! | R$ 360,00 | 3 a 5 dias |
| Fonte 650W 80 Plus Bronze PFC Ativo | Pichau / KaBuM! | R$ 390,00 | 3 a 5 dias |
| Gabinete Micro-ATX Mesh + 3 Fans PWM | Pichau / Terabyte | R$ 280,00 | 3 a 5 dias |
| Nobreak Senoidal Puro 1500VA / 1050W | Ragtech / SMS / NHS | R$ 1.250,00 | 5 a 7 dias |
| Organização de Cabos, Cabos de Rede e Etiquetagem | Varejo Especializado | R$ 60,00 | Pronta Entrega |
| **Custo Base de Hardware** | | **R$ 7.050,00** | |
| Reserva Técnica de Montagem e Burn-in (10%) | Margem operacional | R$ 705,00 | — |
| **Custo Total Unitário MOB Box Ultra** | | **R$ 7.755,00** | |

---

## 3. Padrão Físico da "Maleta de Demonstração MOB Box"

A **Maleta de Demonstração MOB Box** é o ativo físico central para fechamento comercial nas reuniões de 15 minutos ("Show, Don't Tell"). Permite demonstrar o equipamento operando ao vivo, conectado aos celulares dos presentes, sem pedir a senha do Wi-Fi do cliente e sem abrir portas na rede alheia.

```
+-----------------------------------------------------------------+
|                   TAMPA DA MALETA (ESPUMA EVA)                  |
|                                                                 |
|   +---------------------------------------------------------+   |
|   |  PLACA COM QR CODE DE CONEXÃO RÁPIDA                    |   |
|   |  1. Escaneie para conectar: Wi-Fi "MOB-DEMO-IA"         |   |
|   |  2. Abra no navegador: http://mob.box                   |   |
|   +---------------------------------------------------------+   |
|                                                                 |
|   Checklist de Bolso Plastificado | Cabo de Força 3 Pinos (2m)  |
+-----------------------------------------------------------------+
|                   BASE DA MALETA (BERÇO MICRO-SERRILHADO)       |
|                                                                 |
|   +-------------------+    +-------------------+                |
|   |                   |    |                   |   Filtro de    |
|   |   MOB Box         |    |  Mini Roteador    |   Linha 3T     |
|   |   Compact         |    |  Wi-Fi 6          |   Embutido     |
|   |   (N100 16GB)     |    |  (GL.iNet Beryl)  |                |
|   |                   |    |                   |                |
|   +-------------------+    +-------------------+                |
|             \________ Cabo Flat Cat6 ________/                  |
|                                                                 |
|   Compartimento Acessórios:                                     |
|   - Pendrive Rescuezilla de Recuperação Rápida                  |
|   - Adaptador USB-C para RJ45                                   |
+-----------------------------------------------------------------+
```

### 3.1. Componentes do Setup da Maleta:
1. **Maleta Rígida Externa:** Case de alumínio reforçado ou case estanque antichoque em polipropileno (estilo Pelican/Vanguard) com válvula de alívio e fechos duplos. Dimensões: ~38 x 28 x 14 cm.
2. **Berço Interno sob Medida:** Espuma de alta densidade (EVA usinado ou espuma micro-serrilhada) acomodando os módulos sem jogo mecânico durante o transporte.
3. **Módulo de Processamento:** 1x **MOB Box Compact** com imagem mestre e base de dados de demonstração pré-carregada.
4. **Módulo de Rede Autônoma (Zero Dependência do Cliente):**
   * 1x Mini Roteador Portátil Wi-Fi 6 (ex: **GL.iNet GL-MT3000 / Beryl AX** ou **GL-SFT1200 Opal**).
   * Servidor DHCP pré-configurado na faixa `192.168.8.0/24`.
   * SSID broadcast: `MOB-DEMO-IA` (Rede sem senha ou com senha simplificada `mob12345`).
   * DNS local interceptando qualquer requisição ou apontando `mob.box` e `ia.local` diretamente para o IP fixo da Box (`192.168.8.2`).
   * Porta WAN livre caso queira plugar no cabo do cliente ou ancorar no 4G/5G do smartphone do consultor em segundos.
5. **Infraestrutura Elétrica Integrada:**
   * Filtro de linha interno de 3 tomadas padrão NBR 14136, interligando a fonte da Box e a fonte do roteador.
   * Cabo de força principal externo de 2,5 metros de alta flexibilidade.
   * Chave geral liga/desliga com LED indicador discreto.
6. **QR Code Adesivo de Acesso Rápido:**
   * Adesivo resinado fixado na face interna da tampa com QR Code Wi-Fi (conecta o smartphone automaticamente à rede `MOB-DEMO-IA`) e link direto para `http://mob.box`.

### 3.2. Roteiro Operacional de Bancada e Visita (15 Minutos):
* **Minutos 00 a 02 (Desembalagem e Boot):**
  1. Abrir a maleta na mesa da sala de reuniões.
  2. Plugar o cabo de força na tomada da sala.
  3. A MOB Box e o Mini Roteador ligam instantaneamente (Auto Power On). Em 45 segundos o sistema operacional sobe os containers Docker.
* **Minutos 02 a 05 (Apresentação Inicial e Conexão):**
  1. Pedir para o diretor/empresário apontar a câmera do seu próprio celular para o QR Code da maleta.
  2. O celular conecta na rede Wi-Fi interna da maleta e abre a tela de login do assistente (`http://mob.box`).
* **Minutos 05 a 09 (Teste do Áudio WhatsApp):**
  1. O consultor envia um áudio propositalmente rápido e com linguagem coloquial (ex: *"Oi Marcos, aqui é da obra da rua XV, preciso de 25 sacos de cimento CP-II, entrega na sexta às 8h, faturar para a construtora padrão, manda orçamento pro Roberto"*).
  2. A MOB Box transcreve e gera na hora um orçamento formal em PDF com cabeçalho, tabela de itens e prazo.
* **Minutos 09 a 13 (Teste do Documento Confidencial):**
  1. Abrir a pasta inteligente e demonstrar um contrato ou tabela de preços de exemplo.
  2. Fazer perguntas capciosas: *"Qual a multa de rescisão do contrato X?"* ou *"Qual o desconto máximo permitido na linha Y?"*.
  3. A IA responde em 2 segundos, destacando exatamente a página e o parágrafo de onde tirou a informação.
* **Minutos 13 a 15 (Fechamento Prático):**
  1. Mostrar o tamanho compacto da caixa na mesa.
  2. Destacar: *"Isso não vai para a nuvem aberta. Fica aqui na sua empresa. Amanhã podemos instalar uma dessas no seu roteador."*

---

## 4. Configurações de Fábrica e Padrão Industrial

Toda unidade da linha MOB Box passa por um processo fabril padronizado antes da liberação para expedição.

```
       FLUXO DE HOMOLOGAÇÃO DE FÁBRICA (CHECKLIST BANCADA)
       
  [1. BIOS / UEFI]       -->  [2. Instalação SO]     -->  [3. Docker & CORE]
  - Restore AC Loss: ON       - Ubuntu Server LTS         - Containers UP
  - WoL: Enabled              - IP Estático / DHCP Res    - Tailscale VPN UP
  - Fast Boot: Disabled       - Timezone América/SP       - Pasta Samba OK
           |                                                      |
           v                                                      v
  [4. Teste de Carga]    <--  [5. Etiquetagem]       <--  [6. Embalagem]
  - 1h Stress CPU/RAM         - Logo MOB Frontal          - Cabo Cat6 Flat
  - Check Temperatura         - Serial / MAC / IP         - Fonte Certificada
  - Check Queda de Luz        - Lacre Void nos Parafusos  - Termo de Entrega
```

### 4.1. Parametrização Crítica de BIOS / UEFI

O principal ponto de suporte físico em computadores pequenos é a máquina não religar após quedas de energia na empresa. Toda MOB Box **deve** ser ajustada na BIOS antes de instalar o sistema operacional.

#### Roteiro de Configuração:
1. Conectar teclado e monitor HDMI na bancada; ligar e pressionar `DEL` ou `F2` continuamente para acessar a UEFI/BIOS.
2. Navegar até o menu de energia (`Power Management`, `Advanced Chipset Control` ou `ACPI Settings`).
3. Localizar o parâmetro **Restore on AC Power Loss** (em algumas marcas chamado de *State After G3*, *AC Back Function* ou *Power Failure*).
4. **Alterar de `Power Off` (ou `Last State`) para `Power On` (ou `Always On`).**  
   *Justificativa:* Garante que assim que a energia retornar à tomada (ou ao nobreak), a placa-mãe ligará a máquina sem exigir que alguém aperte o botão de liga/desliga físico.
5. Habilitar **Wake on LAN (WoL)**: Configurar como `Enabled` (permite inicialização remota caso o equipamento esteja em standby).
6. Desabilitar **Fast Boot**: Configurar como `Disabled` (evita que a inicialização rápida do Windows/UEFI impeça o carregamento limpo dos drivers de rede Linux).
7. Ajustar prioridade de boot (*Boot Order*): Definir o SSD NVMe interno como opção 1 absoluta.
8. Salvar alterações e reiniciar (`F10` -> `Save & Exit`).

---

### 4.2. Padrão de Etiquetagem e Identificação Visual MOB

A estética da MOB Box reflete maturidade corporativa, discrição e robustez industrial. Toda máquina recebe três conjuntos de etiquetas de alta durabilidade (vinil automotivo fosco com impressão UV resistente a álcool 70%):

#### 1. Etiqueta de Marca (Face Superior / Frontal):
* Dimensão: 60 x 20 mm.
* Fundo: Preto fosco / Cinza chumbo.
* Conteúdo: Logotipo estilizado MOB + tipografia limpa:
  ```
  ┌──────────────────────────────────────────────┐
  │  [MOB]  Inteligência Artificial para Empresas│
  │         mob.tec.br                           │
  └──────────────────────────────────────────────┘
  ```

#### 2. Etiqueta Técnica e de Patrimônio (Face Inferior / Painel Traseiro):
* Dimensão: 75 x 45 mm.
* Conteúdo com identificação unívoca do cliente e da máquina:
  ```
  ┌────────────────────────────────────────────────────────┐
  │ MOB BOX COMPACT — MOD: MBC-N100-16G                    │
  │ S/N: MOB-2026-0012          MAC: 00:E0:4C:68:12:34     │
  │ IP LAN: 192.168.1.200       ACESSO: http://mob.local   │
  │ PASTA DE REDE: \\mob-box\documentos-ia                 │
  │ SUPORTE: (47) 9XXXX-XXXX   suporte@mob.tec.br          │
  │ [QR CODE: Link direto para WhatsApp de Suporte com ID] │
  └────────────────────────────────────────────────────────┘
  ```

#### 3. Selo de Garantia e Lacre Destrutível (Lacre Void):
* Dimensão: 30 x 10 mm.
* Material: Casca de ovo / Vinil destrutível prata (*void* ao descolar).
* Aplicação: Posicionado sobre a junção dos parafusos do gabinete inferior.
* Texto: `"GARANTIA MOB — ROMPIMENTO INVALIDA A COBERTURA DE COMODATO"`.

---

## 5. Requisitos de Infraestrutura e Rede Local do Cliente

Para que a MOB Box funcione com alta disponibilidade e sem oscilações, a empresa cliente deve atender aos seguintes pré-requisitos mínimos antes da visita de implantação:

### 5.1. Conectividade e Cabeamento:
* **Conexão Física Obrigatória:** Conexão direta via cabo de rede Cat5e ou Cat6 (RJ45) a uma porta do switch principal ou roteador da empresa.  
  > [!CAUTION]
  > **É expressamente vedado o uso de Wi-Fi como interface principal do servidor em ambiente de produção.** A instabilidade de canal, interferências e variações de sinal afetam a conexão contínua do banco vetorial e dos nós Samba.

### 5.2. Endereçamento IP e Resolução de Nomes:
1. **Reserva DHCP por MAC Address:** O técnico da MOB solicita previamente ou configura no roteador do cliente a reserva do endereço IP da Box com base no endereço físico MAC da placa de rede.
2. **Faixa Padrão Recomendada:** Caso o cliente não tenha restrições, reservar preferencialmente um IP estático alto na sub-rede (ex: `192.168.1.200`, `192.168.0.200` ou `10.0.0.200`).
3. **Resolução de Nome na Rede Local:**
   * A Box roda internamente o serviço `avahi-daemon` (mDNS), permitindo acesso instantâneo pelo endereço amigável: `http://mob.local:3001` em redes que suportam Bonjour/mDNS (Windows 10/11, macOS, Android, iOS).
   * Em redes corporativas com controlador de domínio Windows Server ou firewall pfSense/MikroTik, o técnico auxilia na inserção de um registro DNS tipo `A` apontando `ia.empresa.local` ou `ia.local` para o IP da Box.

### 5.3. Política de Portas e Segurança Perimetral:
* **Portas Abertas EXCLUSIVAMENTE na Rede Local (LAN Interna):**
  * `TCP 3001` -> Acesso Web à Interface do Assistente.
  * `TCP 445` e `TCP 139` -> Compartilhamento de arquivos Samba (`\\mob-box\documentos-ia`).
  * `UDP 137` e `UDP 138` -> Resolução de nomes NetBIOS.
* **Portas TERMINANTEMENTE BLOQUEADAS na Interface de Rede:**
  * Portas de inferência interna (`TCP 11434` do Ollama ou portas do banco vetorial) **nunca** são expostas fora do host Docker.
  * A porta SSH (`TCP 22`) fica aberta **exclusivamente** na interface virtual da VPN Tailscale (`tailscale0`). Qualquer tentativa de conexão SSH via IP local do cliente é descartada pelo firewall `ufw` do servidor.
* **Zero Exposição na Internet:**
  * Não é necessário nem permitido abrir regras de redirecionamento de portas (*Port Forwarding* ou DMZ) no roteador da empresa. O tráfego de suporte remoto passa por túnel de saída seguro estabelecido pela própria Box.

### 5.4. Requisitos Elétricos e Proteção:
* **Tomada:** Padrão brasileiro NBR 14136 (3 pinos) com aterramento funcional.
* **Nobreak Obrigatório:** Toda MOB Box deve ser conectada a um nobreak com autonomia mínima de 20 minutos para proteger o SSD contra corrupção em cortes bruscos de energia:
  * **Compact:** Nobreak interativo de 600 VA a 800 VA (consumo da Box ~15W).
  * **Pro:** Nobreak interativo senoidal de 1.000 VA a 1.200 VA (consumo ~45W).
  * **Ultra:** Nobreak senoidal puro de 1.500 VA a 2.000 VA (consumo de pico ~400W).

---

## 6. Checklist de Homologação de Bancada (Saída de Fábrica)

Antes de qualquer caixa ir para a maleta ou ser despachada para o cliente, o técnico deve marcar 100% dos itens abaixo no terminal:

- [ ] **BIOS:** *Restore on AC Power Loss* configurado para `Power On`.
- [ ] **BIOS:** *Fast Boot* desabilitado e ordem de boot travada no SSD NVMe.
- [ ] **Hardware:** Temperatura de operação em repouso < 45°C e sob estresse de 30 min < 72°C.
- [ ] **Sistema Operacional:** Ubuntu Server LTS atualizado, timezone configurado para `America/Sao_Paulo`.
- [ ] **Docker Engine:** `docker compose` operacional e configurado com `restart: unless-stopped`.
- [ ] **VPN de Suporte:** Tailscale conectado e autenticado no painel central da MOB com IP fixo de malha.
- [ ] **Rede Samba:** Compartilhamento `\\mob-box\documentos-ia` testado via máquina Windows na bancada.
- [ ] **Interface Web:** AnythingLLM acessível via navegador em `http://<IP-DA-BOX>:3001`.
- [ ] **Assistentes Pré-Moldados:** Os 3 assistentes de fábrica carregados e testados com prompt de validação.
- [ ] **Corte de Energia Simulado:** Desconectar o cabo de força direto da tomada da bancada enquanto um arquivo está sendo indexado; reconectar a tomada e cronometrar:
  - O sistema deve religar sozinho em até 60 segundos;
  - Todos os containers devem voltar ao status `healthy`;
  - O banco de dados vetorial deve subir íntegro sem erros de lock.
- [ ] **Acabamento:** Etiqueta frontal MOB, etiqueta técnica com MAC e lacre destrutível Void colados.

---

*Assinado eletronicamente,*  
**05 — Hardware & Edge Architect**  
*MOB | Inteligência Artificial para Empresas*
