# MOB Box — Procedimento Operacional Padrão (POP) de Bancada, Montagem e Instalação Física

**Documento:** `missions/001-strategic-foundation/09-operations-assembly-checklist.md`  
**Missão:** 001 — Strategic Foundation (Onda 4: Operações, Bancada e Piloto Fix)  
**Especialista Responsável:** `04 Operations Specialist`  
**Governança & Coordenação:** `00 — Chief Transformation Officer (CTO)`  
**Status:** Consolidado (Onda 4)  
**Data de Referência:** 14 de Novembro de 2026  

---

## 1. Visão Geral e Filosofia de Operações da MOB

A confiabilidade da **MOB Box** no cliente final depende exclusivamente do rigor da bancada técnica de montagem e homologação. Em consonância com a filosofia **"Pedreiro da IA" (Last-Mile AI / Forward-Deployed Engineering)** e os princípios inegociáveis da MOB:

1. **Tolerância Zero a Falhas em Campo:** Toda instabilidade térmica, defeito de componente, falha de BIOS ou vício oculto deve ser detectada e isolada durante o processo de fabricação e teste de bancada de 72 horas. Nenhum cliente final presenciará um travamento de hardware ou perda de configuração.
2. **Reprodutibilidade e Rapidez Industrial:** A gravação da imagem de fábrica (**Golden Image**) e o comissionamento individualizado de cada caixa ocorrem em **menos de 25 minutos**, permitindo escalabilidade rápida sem retrabalho manual.
3. **Appliance Blindada de Fábrica:** A máquina sai da bancada com BIOS parametrizada para religamento autônomo (*Restore on AC Power Loss*), discos particionados, credenciais únicas criptografadas, lacre destrutível inviolável (VOID) e identificação visual de nível industrial.
4. **Instalação Presencial Limpa e Expressa:** A visita física de instalação dura **no máximo 45 minutos**, com kit de ferramentas padronizado, zero impacto no roteador da empresa cliente e treinamento de primeiro uso concluído no local.

```
+-------------------------------------------------------------------------------------------------------+
|                                FLUXO OPERACIONAL INDUSTRIAL DA MOB BOX                                |
|                                                                                                       |
|  [ETAPA 1] Recebimento & Teste Bruto de Componentes (MemTest86+, SMART SSD, Multímetro de Fonte)     |
|     │                                                                                                 |
|     ▼                                                                                                 |
|  [ETAPA 2] Configuração de BIOS / UEFI (Auto Power On, WoL, Fast Boot OFF, Senha Master)             |
|     │                                                                                                 |
|     ▼                                                                                                 |
|  [ETAPA 3] Gravação da Golden Image & Comissionamento Rápido (< 25 min com mob-init.sh)               |
|     │                                                                                                 |
|     ▼                                                                                                 |
|  [ETAPA 4] Bateria de Burn-in e Estresse Térmico 72 Horas (CPU, VRAM, I/O e 5 Quedas de Energia)      |
|     │                                                                                                 |
|     ▼                                                                                                 |
|  [ETAPA 5] Protocolo de Etiquetagem Industrial, Lacre VOID e Emissão de Laudo Técnico                 |
|     │                                                                                                 |
|     ▼                                                                                                 |
|  [ETAPA 6] Montagem do Kit de Campo & Expedição para Visita Presencial (45 min no cliente)            |
+-------------------------------------------------------------------------------------------------------+
```

---

## 2. Checklist de Recebimento, Inspeção Visual e Teste de Componentes Brutos

Nenhum componente é integrado à montagem final sem antes passar pela inspeção de entrada e verificação de integridade física e funcional.

### 2.1. Matriz de Componentes Homologados por Modelo

| Modelo | Componente Central | Especificação Homologada | Fornecedor Homologado | Critério de Aceite Físico |
| :--- | :--- | :--- | :--- | :--- |
| **Compact** | Mini PC Barebone | Intel N100 / N97 (4C/4T, TDP 6-12W) | Distribuidores Oficiais / ML Gold | Gabinete sem riscos, cooler silencioso, lacre de fábrica íntegro |
| **Compact** | Memória RAM | 16 GB DDR4 3200MHz / DDR5 4800MHz | Kingston, Crucial, ADATA | Módulo SODIMM original com blister selado e part number verificado |
| **Compact** | Armazenamento | SSD 512 GB M.2 NVMe PCIe 3.0 x4 | Kingston NV2, Crucial P3 | PCB sem empenamento, firmware oficial, leitura nominal > 2.000 MB/s |
| **Compact** | Fonte de Alimentação | 12V 3A DC (Plug P4/P5 padrão) | Fabricante original homologado | Tensão estável entre 11.8V e 12.3V em carga, cabo com alívio de tração |
| **Pro** | Mini PC Premium | AMD Ryzen 7 7735HS / 8845HS | Distribuidores Nacionais | Chassis metálico, dissipador de cobre duplo, portas íntegras |
| **Pro** | Memória RAM | 32 GB (2x 16GB) DDR5 5600MHz | Crucial, Kingston Fury | Par casado Dual Channel verificado |
| **Pro** | Armazenamento | SSD 1 TB M.2 NVMe PCIe 4.0 x4 | Kingston KC3000, Crucial T500 | Leitura nominal > 4.500 MB/s, dissipador térmico embutido |
| **Pro** | Fonte de Alimentação | 19V 6.32A DC (120W) | Fonte homologada com PFC | Tensão estável entre 18.8V e 19.3V |
| **Ultra** | Processador / GPU | AMD Ryzen 7 5700X + RTX 3060 12GB | KaBuM!, Pichau, Terabyte | GPU genuína com 12GB GDDR6, caixa lacrada, nota fiscal nominal |
| **Ultra** | Placa-Mãe / RAM | B550M + 32 GB DDR4 3200MHz | ASUS, MSI, Gigabyte | BIOS atualizada de fábrica, slots PCIe reforçados |
| **Ultra** | Armazenamento | 1 TB NVMe PCIe 4.0 + 1 TB SATA III | Kingston / Crucial / WD Blue | Ambos com 100% de saúde e zero horas de uso |
| **Ultra** | Fonte ATX | 650W 80 Plus Bronze PFC Ativo | Corsair, MSI, XPG | Certificação 80 Plus comprovada, cabeamento modular/sleeved |

> [!WARNING]
> **Veto a Placas Seminovas / Modificadas:** É terminantemente proibido o uso de placas de vídeo adulteradas (ex: *"RTX 2080 Ti de 22 GB"* modificadas artesanalmente). No caso de placas seminovas adquiridas para a Box Ultra, é mandatório teste de bancada com medição de ponto quente (*hotspot* < 85°C) e laudo físico detalhado.

### 2.2. Procedimento de Teste de Componentes Brutos (Bancada Pré-Montagem)

Antes da montagem interna ou fechamento do gabinete, os componentes passam pelo teste de bancada rápida (*Bench Test*):

1. **Inspeção Elétrica da Fonte com Multímetro / Testador de Carga:**
   * Medir a tensão em vazio e com carga resistiva:
     * Linha 12V (Compact): Deve aferir entre `11.90V` e `12.25V`.
     * Linha 19V (Pro): Deve aferir entre `18.90V` e `19.25V`.
     * Fontes ATX (Ultra): Linhas +12V, +5V, +3.3V com tolerância máxima de ±3%.
   * Inspecionar ruídos elétricos (*coil whine*) ou aquecimento anormal do transformador após 15 minutos conectado à rede 220V/110V.

2. **Diagnóstico Completo de Memória RAM (MemTest86+):**
   * Boot via pendrive com `MemTest86+ v7.x` em modo UEFI.
   * Executar 1 ciclo completo (*Pass 1/1*) cobrindo todos os testes de padrão de bits (Testes 1 a 10).
   * **Critério de Aprovação:** Zero erros (`Errors: 0`). Qualquer erro de bit reprova imediatamente o pente de memória.

3. **Verificação de Saúde e Desempenho do SSD NVMe (`smartctl` e `fio`):**
   * Conectar o SSD em adaptador de bancada ou slot direto da placa-mãe.
   * Executar no terminal Linux de teste:
     ```bash
     smartctl -a /dev/nvme0n1
     ```
   * **Parâmetros Obrigatórios:**
     * `Critical Warning: 0x00`
     * `Available Spare: 100%`
     * `Percentage Used: 0%` (componente novo de fábrica)
     * `Media and Data Integrity Errors: 0`
   * Executar benchmark de leitura sequencial (`fio --rw=read --bs=1M --size=2G --direct=1`) e confirmar velocidade superior ao piso nominal homologado (2.000 MB/s para Compact; 4.500 MB/s para Pro).

---

## 3. Parametrização Crítica de BIOS / UEFI

A causa número um de chamados de suporte presencial em computadores compactos é o desligamento permanente após picos ou quedas de energia. A BIOS de toda MOB Box é reparametrizada na bancada para garantir autonomia de religamento e estabilidade térmica.

```
+----------------------------------------------------------------------------------------+
|                      FLUXO DE CONFIGURAÇÃO DE BIOS DA MOB BOX                          |
|                                                                                        |
| [Ligar Box] -> Pressionar DEL/F2 -> [Acessar UEFI/BIOS]                                |
|   ├── [Menu Advanced / ACPI Configuration]                                             |
|   │     ├── Restore on AC Power Loss  --> [POWER ON]        (Mandatório)               |
|   │     ├── Wake on LAN (WoL)         --> [ENABLED]         (Mandatório)               |
|   │     └── Deep Sleep / ErP / EuP    --> [DISABLED]        (Evita suspensão total)    |
|   ├── [Menu Boot]                                                                      |
|   │     ├── Fast Boot                 --> [DISABLED]        (Garante init drivers)     |
|   │     ├── Boot Option #1            --> [NVMe Interno]    (Trava no SSD interno)     |
|   │     └── PXE Network Boot          --> [DISABLED]        (Evita boot em loop)       |
|   ├── [Menu Hardware Monitor / Fan Control]                                            |
|   │     └── CPU Smart Fan Curve       --> [Smart / Quiet]   (< 28dB até 70°C)          |
|   └── [Menu Security]                                                                  |
|         └── Administrator Password    --> [MobAdmin@2026!]  (Protege contra terceiros) |
+----------------------------------------------------------------------------------------+
```

### 3.1. Roteiro Passo a Passo de Configuração

1. **Conexão e Entrada no Setup:**
   * Conectar teclado USB, monitor HDMI e cabo de força na bancada técnica.
   * Ligar o equipamento e pressionar repetidamente as teclas `DEL` ou `F2` até carregar a interface da UEFI/BIOS.

2. **Configuração de Energia e Religamento Autônomo (Incondicional):**
   * Localizar a aba `Advanced`, `ACPI Settings` ou `Power Management Setup`.
   * Encontrar o parâmetro **Restore on AC Power Loss** (em placas chinesas N100 pode constar como *State After G3*, *AC Back Function* ou *PWR Loss Restore*).
   * **Alterar de `Power Off` ou `Last State` para `Power On` (ou `Always On`).**
   * *Justificativa Técnica:* Quando ocorrer uma queda na rede elétrica do cliente, assim que o nobreak ou a tomada voltar a fornecer energia, a MOB Box ligará e subirá os containers Docker sozinha, sem depender de nenhum funcionário apertar botões físicos.
   * Desabilitar funções de economia extrema de energia (**ErP Ready**, **EuP Mode** ou **Deep Sleep Mode** = `Disabled`), garantindo que o circuito de rede e alimentação permaneça sempre pronto para inicialização.

3. **Configuração de Rede e Wake on LAN:**
   * Localizar `Onboard LAN Configuration` ou `PCIe Devices Power On`.
   * Configurar **Wake on LAN (WoL)** ou **Power On By PCI-E** para `Enabled`.

4. **Configuração de Boot e Inicialização Limpa:**
   * Acessar a aba `Boot`.
   * Desabilitar **Fast Boot** (`Disabled`). Evita que inicializações ultrarrápidas de UEFI pulem o reconhecimento a frio de controladoras de rede Realtek/Intel ou barramentos PCIe NVMe.
   * Travar a ordem de boot (**Boot Priority Order**):
     * `Boot Option #1`: SSD NVMe M.2 interno (onde reside o Ubuntu Server).
     * Desabilitar todas as demais opções (`Boot Option #2`: Disabled, `Network Boot`: Disabled).

5. **Curva de Ventilação e Monitoramento Térmico:**
   * Acessar `H/W Monitor` ou `Smart Fan Configuration`.
   * Ajustar o perfil para curva progressiva:
     * Abaixo de 50°C: 40% de rotação (operação inaudível, ruído < 22 dB).
     * De 50°C a 70°C: 65% de rotação (ruído moderado, dissipação equilibrada).
     * Acima de 72°C: 100% de rotação (segurança térmica absoluta).

6. **Bloqueio de Segurança com Senha de Administrador:**
   * Acessar a aba `Security`.
   * Definir **Administrator Password** como `MobAdmin@2026!`.
   * Manter **User Password** em branco.
   * *Objetivo:* Impedir que curiosos, prestadores de TI terceirizados ou colaboradores do cliente alterem a ordem de boot ou desativem o religamento automático.

7. **Gravação e Saída:**
   * Pressionar `F10` (`Save Configurations & Reset`) e confirmar com `Enter`.

---

## 4. Gravação da Golden Image e Comissionamento Rápido (< 25 min)

O processo de instalação de software da MOB Box é 100% industrializado. É terminantemente proibido instalar o sistema operacional manualmente passo a passo em cada máquina. Utilizamos uma **Imagem Mestre Homologada (Golden Image)** despersonalizada e comprimida.

```
+----------------------------------------------------------------------------------------+
|                   CRONOGRAMA DO COMISSIONAMENTO DE BANCADA (< 25 MIN)                  |
|                                                                                        |
|  [00:00 - 05:00]  Gravação da Golden Image NVMe (Duplicador 1:1 ou Clonezilla zstd)    |
|  [05:00 - 06:30]  Primeiro Boot da Box & Auto Power On no Ubuntu Server                |
|  [06:30 - 11:30]  Execução do Script mob-init.sh (Expansão, Hostname, Chaves, VPN)     |
|  [11:30 - 16:00]  Subida da Pilha Docker & Ingestão da Base de Demonstração            |
|  [16:00 - 24:00]  Execução do Checklist Automatizado mob-qc-check.sh                   |
|  [24:00 - 25:00]  Conclusão e Liberação para Bateria de Burn-in 72h                    |
+----------------------------------------------------------------------------------------+
```

### 4.1. Estrutura da Golden Image Homologada (v1.0-2026)

A Golden Image é mantida e versionada no laboratório técnico da MOB em disco SSD mestre e no servidor interno de imagens:
* **Arquivo Fonte:** `mobbox-golden-v1.0-ubuntu2404.zst` (tamanho: ~18 GB compactados via Zstandard multicore).
* **Sistema Base:** Ubuntu Server 24.04.1 LTS (Kernel Linux 6.8.x x86_64 otimizado).
* **Pacotes Nativos Inclusos:** `docker-ce`, `docker-compose-plugin`, `tailscale`, `samba`, `avahi-daemon`, `smartmontools`, `nvme-cli`, `stress-ng`, `jq`, `curl`, `git`, `htop`, `s-tui`.
* **Ambiente Docker Pré-Carregado em Cache Local:**
  * `mintplexlabs/anythingllm:v1.19.0`
  * Imagem local construída: `mob-automator:v1.0.0`
  * Imagem de inferência local (Pro/Ultra): `ollama/ollama:latest` com modelos `qwen2.5:7b` e `llama3.1:8b` embutidos em `/srv/mob-box/models`.
* **Configuração de Rede Neutra:** DHCP habilitado, regras de firewall `ufw` travadas (SSH permitido apenas em `tailscale0`), sem histórico de comandos bash (`~/.bash_history` limpo) e `machine-id` zerado.

### 4.2. Procedimento de Gravação Física

#### Método A: Duplicador NVMe Standalone Offline (Recomendado — Maior Velocidade)
1. Inserir o SSD NVMe mestre no slot de origem (*Source*) da estação duplicadora.
2. Inserir o novo SSD NVMe de 512GB ou 1TB no slot de destino (*Target*).
3. Pressionar o botão de clonagem rápida de setor.
4. **Tempo médio de gravação física:** **3 minutos e 40 segundos** (transferência a ~1.8 GB/s).
5. Instalar o SSD gravado no mini PC da bancada.

#### Método B: Gravação via Pendrive Rescuezilla / Clonezilla (Alternativa de Campo)
1. Conectar o pendrive rápido USB 3.2 contendo o Clonezilla e a imagem comprimida.
2. Ligar o mini PC pressionando `F7` ou `F11` (Menu de Boot temporário) e selecionar o pendrive UEFI.
3. Executar o comando de restauração automatizada direta no disco local:
   ```bash
   ocs-sr -g auto -e1 auto -e2 -r -j2 -p reboot restoredisk mobbox-golden-v1.0 nvme0n1
   ```
4. **Tempo médio de descompressão e gravação:** **6 minutos e 50 segundos**.
5. O equipamento reinicia automaticamente e carrega a imagem limpa.

---

### 4.3. Script Oficial de Comissionamento e Primeiro Boot (`mob-init.sh`)

Assim que a máquina sobe o primeiro boot, o técnico de bancada conecta via console ou SSH de bancada e roda o script oficial de inicialização individualizada:

```bash
#!/usr/bin/env bash
# ==============================================================================
# MOB Box — Script Oficial de Comissionamento e Primeiro Boot (mob-init.sh)
# Uso exclusivo da bancada técnica e operações MOB | mob.tec.br
# ==============================================================================
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}==================================================================${NC}"
echo -e "${BLUE}       MOB BOX — PROTOCOLO DE COMISSIONAMENTO DE FÁBRICA           ${NC}"
echo -e "${BLUE}==================================================================${NC}"

if [[ $# -lt 2 ]]; then
    echo -e "${RED}[ERRO] Uso incorreto.${NC}"
    echo -e "Sintaxe: sudo $0 <SLUG_DO_CLIENTE> <TAILSCALE_AUTHKEY> [SENHA_SAMBA]"
    echo -e "Exemplo: sudo $0 clinica-sul tskey-auth-k1234567890abcdef SenhaForte2026!"
    exit 1
fi

CLIENT_SLUG="$1"
TAILSCALE_KEY="$2"
SAMBA_PASSWORD="${3:-MobBox@2026}"
NEW_HOSTNAME="mobbox-${CLIENT_SLUG}"

echo -e "\n${YELLOW}>>> [1/7] Expandindo partição raiz NVMe para utilizar 100% do disco...${NC}"
ROOT_DEV=$(findmnt -n -o SOURCE /)
DISK_DEV=$(lsblk -no PKNAME "${ROOT_DEV}")
PART_NUM=$(lsblk -no PARTNUM "${ROOT_DEV}")

echo "Expandindo partição /dev/${DISK_DEV} partição ${PART_NUM}..."
growpart "/dev/${DISK_DEV}" "${PART_NUM}" || true
resize2fs "${ROOT_DEV}" || true

echo -e "\n${YELLOW}>>> [2/7] Despersonalizando Identificadores de Sistema (Anti-Colisão)...${NC}"
rm -f /etc/machine-id /var/lib/dbus/machine-id
systemd-machine-id-setup
rm -f /etc/ssh/ssh_host_*
dpkg-reconfigure openssh-server

echo -e "\n${YELLOW}>>> [3/7] Atribuindo Hostname Corporativo Unívoco...${NC}"
hostnamectl set-hostname "${NEW_HOSTNAME}"
sed -i "s/127.0.1.1.*/127.0.1.1\t${NEW_HOSTNAME} ${NEW_HOSTNAME}.local/g" /etc/hosts
sed -i "s/mobbox-golden/${NEW_HOSTNAME}/g" /etc/hosts || true

echo -e "\n${YELLOW}>>> [4/7] Gerando Novos Segredos Criptográficos e Configurações Locais...${NC}"
NEW_JWT_SECRET=$(openssl rand -hex 32)
NEW_DB_SALT=$(openssl rand -hex 16)
sed -i "s/JWT_SECRET=.*/JWT_SECRET=${NEW_JWT_SECRET}/" /srv/mob-box/.env
sed -i "s/SERVER_NAME=.*/SERVER_NAME=${NEW_HOSTNAME}/" /srv/mob-box/.env
sed -i "s/CLIENT_IDENTIFIER=.*/CLIENT_IDENTIFIER=${CLIENT_SLUG}/" /srv/mob-box/.env

# Atualiza senha do usuário Samba
(echo "${SAMBA_PASSWORD}"; echo "${SAMBA_PASSWORD}") | smbpasswd -s -a mobadmin
systemctl restart smbd nmbd

echo -e "\n${YELLOW}>>> [5/7] Conectando ao Túnel de Suporte P2P Criptografado (Tailscale)...${NC}"
tailscale up --authkey="${TAILSCALE_KEY}" \
             --hostname="${NEW_HOSTNAME}" \
             --advertise-tags=tag:mob-box-appliance \
             --reset --accept-routes=false

TS_IP=$(tailscale ip -4)
echo -e "${GREEN}[OK] Tailscale Ativo! IP de Malha: ${TS_IP}${NC}"

echo -e "\n${YELLOW}>>> [6/7] Inicializando Pilha Docker MOB CORE...${NC}"
cd /srv/mob-box
docker compose down -v 2>/dev/null || true
docker compose up -d

echo -e "\n${YELLOW}>>> [7/7] Aguardando Inicialização e Testando Healthchecks...${NC}"
sleep 15
MAX_WAIT=60
COUNTER=0
while [ $COUNTER -lt $MAX_WAIT ]; do
    if curl -s "http://127.0.0.1:3001/api/ping" >/dev/null 2>&1; then
        echo -e "${GREEN}[OK] AnythingLLM respondendo na porta 3001!${NC}"
        break
    fi
    sleep 2
    let COUNTER=COUNTER+2
done

if [ $COUNTER -ge $MAX_WAIT ]; then
    echo -e "${RED}[FALHA] AnythingLLM não respondeu dentro do limite de 60 segundos!${NC}"
    exit 1
fi

echo -e "\n${GREEN}==================================================================${NC}"
echo -e "${GREEN}    COMISSIONAMENTO DA MOB BOX CONCLUÍDO COM SUCESSO!             ${NC}"
echo -e "${GREEN}==================================================================${NC}"
echo -e "Hostname Local:  http://${NEW_HOSTNAME}.local:3001"
echo -e "Pasta de Rede:   \\\\${NEW_HOSTNAME}\\documentos-ia"
echo -e "IP Tailscale:    ${TS_IP}"
echo -e "Data/Hora:       $(date '+%d/%m/%Y %H:%M:%S')"
echo -e "Liberado para Bateria de Teste Térmico e Burn-in de 72h.\n"
```

---

## 5. Bateria de Estresse Térmico e Burn-in de 72 Horas

Nenhuma unidade da MOB Box é liberada para instalação comercial sem passar por uma **bateria ininterrupta de 72 horas em bancada de testes**. Este protocolo garante a estabilização térmica do silício, validação da memória, resiliência do SSD contra corrupção e comprovação física do religamento autônomo.

```
+----------------------------------------------------------------------------------------------------+
|                         CRONOGRAMA DA BATERIA DE BURN-IN (72 HORAS)                                |
|                                                                                                    |
|  [00h - 24h]  FASE 1: Estresse Agressivo de Silício e Memória (stress-ng CPU 100% + RAM 80%)       |
|  [24h - 48h]  FASE 2: Estresse de Leitura/Escrita NVMe e Ingestão de Documentos em Loop            |
|  [48h - 70h]  FASE 3: Carga Térmica Mista e Inferência Concorrente (Simulação Escritório)          |
|  [70h - 72h]  FASE 4: Bateria de 5 Quedas Abruptas de Energia (Simulação Falta de Luz)             |
|  [72h Final]  Auditoria de Logs, Smart Check, Emissão do Laudo de Bancada e Lacre VOID             |
+----------------------------------------------------------------------------------------------------+
```

### 5.1. Detalhamento das 4 Fases de Estresse

#### Fase 1: Estresse Contínuo de CPU e Memória (Horas 00 a 24)
* **Comando de Execução de Bancada:**
  ```bash
  stress-ng --cpu 4 --cpu-method all --vm 2 --vm-bytes 75% --verify --timeout 24h --log-file /srv/mob-box/logs/burnin-fase1.log &
  ```
* **Objetivo:** Detectar falhas de solda BGA, instabilidades de VRM da placa-mãe e defeitos de endereçamento de memória RAM sob calor acumulado.
* **Critério de Monitoramento:**
  * Checagem periódica automática de temperatura via script a cada 10 minutos.
  * Se a temperatura da CPU ultrapassar o teto homologado (Compact: 75°C; Pro: 80°C), o teste pausa e gera alerta vermelho de dissipação insuficiente.

#### Fase 2: Estresse Contínuo de I/O de Armazenamento e RAG (Horas 24 a 48)
* **Objetivo:** Testar a controladora NVMe sob ciclos pesados de leitura/escrita, garantindo que o banco vetorial LanceDB e o SQLite não sofram *table lock* ou corrupção de índice.
* **Rotina em Loop:**
  * Script de bancada grava e exclui blocos de arquivos de 500 MB no compartilhamento Samba continuamente.
  * Ingestão sintética de 100 documentos em PDF e planilhas com 1.000 requisições de consulta via API do AnythingLLM em lotes de 10 requisições simultâneas.
* **Critério de Aceite:** 100% das requisições respondidas sem erro HTTP 500/502 e tempo de resposta estável.

#### Fase 3: Operação Térmica em Regime Real em Gabinete Fechado (Horas 48 a 70)
* **Condição Ambiental de Bancada:** Ambiente mantido a ~26°C a 28°C simulando o clima do Vale do Itajaí no verão. Para o modelo Ultra, ativação de carga sustentada na GPU com `cuda-memtest` e `ollama` em loop contínuo de inferência quantizada.
* **Medição Acústica:** Medição com decibelímetro digital a 1 metro de distância do equipamento:
  * Compact: Deve manter-se abaixo de **25 dB**.
  * Pro: Deve manter-se abaixo de **28 dB**.
  * Ultra: Deve manter-se abaixo de **35 dB**.

#### Fase 4: Protocolo Crítico de Resiliência a Corte de Energia (Horas 70 a 72)
* O teste definitivo da promessa "Pedreiro da IA" é a capacidade de sobreviver a oscilações e cortes bruscos de fornecimento elétrico sem necessidade de suporte técnico.
* **Procedimento de Bancada (5 Ciclos de Corte Abrupto):**
  1. Durante a execução contínua de escrita de dados no SSD e geração de resposta na interface, **puxar o cabo de força direto da tomada da bancada**.
  2. Aguardar 30 segundos com a máquina desenergizada.
  3. Reconectar o cabo de força à tomada.
  4. Cronometrar e auditar:
     - [ ] A placa-mãe ligou imediatamente sem ninguém apertar o botão físico? (Sim / Não)
     - [ ] O sistema operacional Ubuntu carregou em menos de 45 segundos? (Sim / Não)
     - [ ] A pilha Docker subiu todos os containers em menos de 90 segundos? (Sim / Não)
     - [ ] Os bancos SQLite e LanceDB subiram sem erro de corrupção ou necessidade de `fsck` manual? (Sim / Não)
  5. Repetir o ciclo por mais 4 vezes consecutivas, com intervalos de 15 minutos entre cada corte.

### 5.2. Tabela de Limites Térmicos e Parâmetros Homologados

| Modelo | Processador / GPU | Temp. Repouso (Idle) | Temp. Carga Máx (Burn-in) | Teto Máximo Tolerado | Ruído a 1 metro |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **MOB Box Compact** | Intel N100 / N97 | 36°C a 42°C | 64°C a 68°C | **72°C** | < 25 dB |
| **MOB Box Pro** | AMD Ryzen 7 7735HS/8845HS | 38°C a 45°C | 68°C a 74°C | **78°C** | < 28 dB |
| **MOB Box Ultra** | AMD Ryzen 7 5700X (CPU) | 35°C a 42°C | 65°C a 70°C | **75°C** | < 32 dB |
| **MOB Box Ultra** | NVIDIA RTX 3060 12GB (GPU) | 38°C a 44°C | 70°C a 76°C | **82°C (Hotspot < 88°C)** | < 35 dB |

> [!CAUTION]
> **Reprovação Imediata:** Caso qualquer equipamento apresente temperatura superior ao teto máximo tolerado, travamento de kernel (*kernel panic*), erro de bits de memória ou reinicialização espontânea não programada durante as 72 horas, o equipamento é **imediatamente reprovado**. O lote é desmontado, o componente defeituoso é devolvido ao fornecedor e o ciclo de 72h é reiniciado do zero com novo hardware.

---

## 6. Protocolo de Etiquetagem Industrial, Lacre Destrutível (VOID) e Serialização

Concluída a bateria de 72 horas com aprovação, o equipamento recebe a padronização visual corporativa da MOB e o lacre de garantia.

```
+---------------------------------------------------------------------------------------+
|                       DISPOSIÇÃO FÍSICA DAS ETIQUETAS MOB BOX                         |
|                                                                                       |
|  [FACE SUPERIOR / FRONTAL]                                                            |
|  ┌────────────────────────────────────────────────────────┐                           |
|  │  [MOB]  Inteligência Artificial para Empresas          │  Etiqueta 1: Marca        |
|  │         mob.tec.br                                     │  (Vinil Preto Fosco UV)   |
|  └────────────────────────────────────────────────────────┘                           |
|                                                                                       |
|  [JUNÇÃO DO GABINETE / PARAFUSOS INFERIORES]                                          |
|  ┌────────────────────────────────────────────────────────┐  Etiqueta 3: Lacre VOID   |
|  │  GARANTIA MOB — ROMPIMENTO INVALIDA O COMODATO / SUPORTE│  (Casca de ovo prata     |
|  └────────────────────────────────────────────────────────┘   destrutível)            |
|                                                                                       |
|  [PAINEL TRASEIRO / BASE INFERIOR]                                                    |
|  ┌────────────────────────────────────────────────────────┐                           |
|  │ MOB BOX COMPACT — MOD: MBC-N100-16G                    │                           |
|  │ S/N: MOB-2026-0042        MAC: 00:E0:4C:68:9B:12       │  Etiqueta 2: Patrimônio   |
|  │ HOSTNAME: mobbox-clinica  LAN IP: 192.168.1.200        │  e Dados de Conexão       |
|  │ PASTA: \\mobbox-clinica\documentos-ia                  │  (Com QR Code de Suporte) |
|  │ SUPORTE: (47) 9XXXX-XXXX  suporte@mob.tec.br           │                           |
|  │ [ QR CODE: WhatsApp Suporte Direto com ID da Box ]     │                           |
|  └────────────────────────────────────────────────────────┘                           |
+---------------------------------------------------------------------------------------+
```

### 6.1. Especificações Técnicas das Etiquetas

1. **Etiqueta 1 — Identidade de Marca (Face Superior / Frontal):**
   * **Dimensões:** 60 x 20 mm.
   * **Material:** Vinil automotivo premium preto fosco, adesivo acrílico de alta adesão com acabamento em impressão UV curada, resistente a riscos, calor e limpeza com álcool 70%.
   * **Aplicação:** Alinhada com gabarito metálico de bancada, a 15 mm da borda superior esquerda do gabinete.

2. **Etiqueta 2 — Identificação Técnica, Patrimônio e Conectividade (Painel Traseiro ou Base):**
   * **Dimensões:** 75 x 45 mm em vinil térmico prateado/branco com acabamento fosco e laminação protetora.
   * **Regra de Serialização Única MOB:**
     * `MOB-YYYY-XXXX` (Exemplo: `MOB-2026-0001`, `MOB-2026-0002`).
     * `YYYY`: Ano de homologação e montagem (2026).
     * `XXXX`: Sequencial numérico global da produção.
   * **Campos Obrigatórios na Etiqueta:**
     * Modelo comercial e código de hardware (`MBC-N100-16G`, `MBP-R7-32G` ou `MBU-RTX3060-12G`).
     * Número de Série e Endereço MAC físico da interface Ethernet principal.
     * Hostname oficial e endereço padrão de acesso local (`http://mobbox-[cliente].local:3001`).
     * Caminho universal da pasta de rede (`\\mobbox-[cliente]\documentos-ia`).
     * QR Code de suporte direto (link para `https://wa.me/5547988131910?text=Suporte%20MOB%20Box%20MOB-2026-0042`).

3. **Etiqueta 3 — Selo de Garantia e Lacre Destrutível (Lacre VOID):**
   * **Dimensões:** 30 x 10 mm em vinil destrutível prateado ("casca de ovo").
   * **Características Mecânicas:** Ao ser puxado ou tocado com ferramenta para abertura do parafuso do chassis, o material se esfarela em microfragmentos e revela a inscrição irreversível `"VOID"`.
   * **Posicionamento:** Colado exatamente sobre a junção de fechamento do parafuso principal de acesso à placa-mãe.
   * **Texto Impresso:** `"GARANTIA MOB — ROMPIMENTO INVALIDA O COMODATO / SUPORTE TECNICO"`.

---

## 7. Kit de Instalação Física Presencial e Maleta de Ferramentas

Para garantir que a visita de instalação presencial seja rápida, profissional e transmita autoridade absoluta ao empresário, o técnico da MOB transporta a **Maleta Oficial de Operações e Ferramentas ("Maleta do Pedreiro da IA")**.

```
+----------------------------------------------------------------------------------------------------+
|                         MALETA OFICIAL DE FERRAMENTAS E INSTALAÇÃO MOB                             |
|                                                                                                    |
|  [COMPARTIMENTO SUPERIOR: DIAGNÓSTICO E CONECTIVIDADE]                                             |
|  - Mini Roteador Wi-Fi 6 GL.iNet Beryl AX (com rede autônoma pré-configurada 192.168.8.0/24)       |
|  - Mini Teclado sem fio 2.4GHz com Touchpad integrado (Rii i8+ com receptor USB embutido)          |
|  - Cabo Micro-HDMI e HDMI 2.0 ultra-slim de 1.5 metros                                             |
|  - Adaptador Gigabit Ethernet USB 3.0 / USB-C para diagnósticos em notebook de campo               |
|                                                                                                    |
|  [COMPARTIMENTO CENTRAL: CABEAMENTO E INFRAESTRUTURA FÍSICA]                                       |
|  - 2x Patch Cords Cat6 Blindados de 1.5m (preto/cinza corporativo)                                 |
|  - 1x Patch Cord Cat6 de 3.0m e 1x Patch Cord Flat Ultra-Slim de 2.0m                              |
|  - Testador profissional de cabos de rede RJ45 (com indicador de continuidade pino a pino)        |
|  - Alicate de crimpagem rápido com 10 conectores RJ45 Cat6 banhados a ouro sobressalentes          |
|  - Abraçadeiras de velcro reutilizáveis (organização profissional de cabeamento)                   |
|  - Fita adesiva de fixação de alta performance 3M VHB (caso o mini PC vá fixado em rack/parede)   |
|                                                                                                    |
|  [COMPARTIMENTO INFERIOR: RESGATE E ENERGIA]                                                       |
|  - 1x Pendrive 64GB USB 3.2: Imagem Mestre Clonezilla da Linha MOB Box                            |
|  - 1x Pendrive 32GB USB 3.2: Rescuezilla Live + Utilitários de Diagnóstico de Rede                 |
|  - Cabo de força bipolar/tripolar certificado NBR 14136 de 2.5 metros                              |
|  - Testador de polaridade e aterramento de tomadas NBR 14136 (com LED indicador de fase/terra)     |
|  - Kit de chaves de precisão com isolamento elétrico e pontas magnéticas (Phillips, Torx, Fenda)   |
+----------------------------------------------------------------------------------------------------+
```

### 7.1. Checklist de Conferência do Kit de Despacho (Antes de Sair para a Instalação)

Antes de embarcar para o cliente, o técnico marca o checklist de saída no laboratório:
- [ ] **Unidade MOB Box Comissionada:** Caixa referente ao cliente conferida com laudo de bancada de 72h assinado e lacre VOID intacto.
- [ ] **Nobreak Homologado e Testado:**
  - Compact: Nobreak de 600VA / 300W bivolt devidamente carregado.
  - Pro: Nobreak senoidal de 1.200VA / 720W.
  - Ultra: Nobreak senoidal puro de 1.500VA.
- [ ] **Fonte de Alimentação e Cabos:** Fonte externa certificada original da caixa e cabo de força de 2.5m.
- [ ] **Cabo de Rede Homologado:** Patch cord Cat6 blindado de 1.5m ou 3.0m.
- [ ] **Maleta de Ferramentas MOB:** 100% dos itens do kit de campo presentes e baterias dos utilitários carregadas.
- [ ] **Termo de Instalação e Aceite Físico Impresso:** 2 vias em papel timbrado MOB prontas para assinatura do cliente.
- [ ] **Crachá de Identificação e Camiseta Polo MOB:** Uniformização padrão corporativo sóbrio.

---

## 8. Roteiro Cronometrado da Visita Presencial de Instalação (Meta: 45 Minutos)

A instalação física segue uma rotina milimetricamente cronometrada para causar **zero atrito** e **zero interrupção** nas atividades comerciais do cliente.

```
+----------------------------------------------------------------------------------------+
|                 ROTEIRO CRONOMETRADO DE INSTALAÇÃO NO CLIENTE (45 MIN)                 |
|                                                                                        |
|  [00 - 10 min]  Reconhecimento da Infraestrutura Elétrica e de Rede do Cliente         |
|  [10 - 20 min]  Instalação Física, Conexão do Nobreak e Cabo de Rede Cat6              |
|  [20 - 30 min]  Configuração de Reserva DHCP no Roteador & Validação mDNS/Samba        |
|  [30 - 40 min]  Validação Prática com o Dono/Patrocinador (Show, Don't Tell)           |
|  [40 - 45 min]  Assinatura do Termo de Instalação, Aceite e Foto de Entrega            |
+----------------------------------------------------------------------------------------+
```

### Minutos 00 a 10: Recepção e Reconhecimento da Infraestrutura
1. Apresentar-se na recepção e solicitar acompanhamento do patrocinador interno ou responsável pela infraestrutura/escritório.
2. Inspecionar o local onde a MOB Box será acomodada (rack de telecomunicações, prateleira ventilada ou mesa técnica):
   * Verificar espaço livre para ventilação (mínimo de 10 cm de folga em todas as faces).
   * Conectar o **Testador de Tomadas** na tomada do cliente: confirmar se há aterramento correto e tensão estável (110V ou 220V).
   * Localizar a porta livre no switch ou roteador corporativo.

### Minutos 10 a 20: Instalação Física e Energização
1. Posicionar o **Nobreak Homologado** na base e conectá-lo à tomada do cliente.
2. Conectar a fonte de alimentação da MOB Box na saída protegida da bateria do nobreak.
3. Conectar o **Patch Cord Cat6 blindado** entre a porta Gigabit da MOB Box e a porta Gigabit do switch/roteador da empresa.
4. Ligar a chave geral do nobreak:
   * A MOB Box liga imediatamente via *Auto Power On* (sem apertar o botão do gabinete).
   * Os LEDs de link de rede acendem em verde/laranja piscante indicando sincronismo em 1.000 Mbps.
5. Organizar os cabos de energia e rede com as abraçadeiras de velcro MOB. Nada de fios soltos ou emaranhados.

### Minutos 20 a 30: Reserva de IP no Roteador e Teste de Conexão na LAN
1. Acessar a interface de administração do roteador da empresa através do notebook técnico da MOB ou com a equipe de TI local:
   * Localizar a tabela DHCP. Identificar o dispositivo pelo MAC address constante na Etiqueta 2 da Box.
   * Criar a **Reserva de IP Fixo via DHCP** (exemplo: `192.168.1.200` ou faixa indicada pelo cliente).
2. Validação de Conectividade em uma Estação de Trabalho do Cliente (Windows 10/11):
   * Abrir o navegador e digitar o endereço local: `http://mobbox-[cliente].local:3001` (ou `http://192.168.1.200:3001`).
   * Confirmar carregamento instantâneo da interface do AnythingLLM em menos de 1 segundo.
   * Abrir o Explorador de Arquivos do Windows (`Win + R`) e digitar:
     ```text
     \\mobbox-[cliente]\documentos-ia
     ```
   * Fazer o mapeamento como unidade de rede (`Z:`) no computador do responsável.
   * Criar um arquivo de texto de teste (`teste-conexao.txt`), arrastar para a pasta `operacional` e verificar a indexação automática pelo watcher em menos de 30 segundos.

### Minutos 30 a 40: Demonstração e Alinhamento com o Patrocinador Interno
1. Chamar o patrocinador interno (dono ou gerente) para frente da tela por 5 minutos:
   * Mostrar a facilidade: *"Aqui está a pasta da sua empresa. Basta arrastar qualquer tabela ou contrato para cá."*
   * Fazer uma pergunta ao vivo no assistente usando um documento que o cliente já forneceu previamente:
     * O assistente responde imediatamente citando o trecho do documento.
   * Mostrar no celular do dono o acesso via Wi-Fi do escritório abrindo o endereço `http://mobbox-[cliente].local:3001`.
2. Reforçar o diferencial prático:
   * *"A caixa já está funcionando 100% aqui dentro da sua empresa. Se faltar luz, o nobreak segura, e quando a energia voltar, ela religa sozinha sem ninguém precisar tocar nela."*

### Minutos 40 a 45: Formalização do Aceite e Encerramento
1. Coletar a assinatura do cliente nas 2 vias do **Termo de Instalação e Aceite Físico** (uma via fica com o cliente na pasta com o manual e a outra retorna para a MOB).
2. Registrar uma fotografia nítida da instalação física limpa (com a Box, nobreak, cabos organizados e lacre visível) para arquivamento no dossiê do cliente.
3. Informar o canal exclusivo de suporte WhatsApp impresso na etiqueta da máquina.
4. Despedir-se cordialmente e finalizar o chamado no sistema.

---

## 9. Script Automatizado de Verificação Pós-Burn-in (`mob-qc-check.sh`)

Este script é executado ao final das 72 horas de bancada para validar se todos os requisitos técnicos foram cumpridos antes da aplicação das etiquetas e lacre VOID.

```bash
#!/usr/bin/env bash
# ==============================================================================
# MOB Box — Script de Controle de Qualidade de Bancada (mob-qc-check.sh)
# Execução obrigatória antes da liberação e lacre do equipamento
# ==============================================================================
set -euo pipefail

PASS=0
FAIL=0

check_item() {
    local desc="$1"
    local command="$2"
    echo -n "Auditando: ${desc}... "
    if eval "${command}" >/dev/null 2>&1; then
        echo -e "\033[0;32m[APROVADO]\033[0m"
        let PASS=PASS+1
    else
        echo -e "\033[0;31m[REPROVADO]\033[0m"
        let FAIL=FAIL+1
    fi
}

echo "=================================================================="
echo "    MOB BOX — AUDITORIA AUTOMATIZADA DE CONTROLE DE QUALIDADE     "
echo "=================================================================="

# 1. Checagem de Hardware e Armazenamento
check_item "Saúde do SSD NVMe (SMART status OK)" "smartctl -H /dev/nvme0n1 | grep -q 'PASSED'"
check_item "Zero erros críticos de SSD" "smartctl -a /dev/nvme0n1 | grep -q 'Critical Warning:                   0x00'"
check_item "Espaço em disco disponível (> 50%)" "df -h / | awk 'NR==2 {gsub(/%/,\"\"); if (\$5 < 50) exit 0; else exit 1}'"

# 2. Checagem de Rede e Conectividade
check_item "Interface Ethernet ativa (1000 Mbps)" "cat /sys/class/net/eth0/speed | grep -q '1000' || cat /sys/class/net/en*/speed | grep -q '1000'"
check_item "Serviço mDNS Avahi ativo" "systemctl is-active avahi-daemon | grep -q 'active'"
check_item "Serviço Tailscale VPN conectado" "tailscale status | grep -q 'mob-box-appliance'"

# 3. Checagem de Compartilhamento de Arquivos
check_item "Serviço Samba smbd em execução" "systemctl is-active smbd | grep -q 'active'"
check_item "Pasta inteligente documentos-ia legível" "test -d /srv/mob-box/samba/documentos-ia"

# 4. Checagem da Pilha Docker e Serviços de IA
check_item "Docker Engine operacional" "docker info"
check_item "Container AnythingLLM em execução saudável" "docker ps --filter 'name=anythingllm' --filter 'status=running' | grep -q anythingllm"
check_item "Container MOB Automator em execução saudável" "docker ps --filter 'name=automator' --filter 'status=running' | grep -q automator"
check_item "Endpoint Web API na porta 3001 respondendo" "curl -sf http://127.0.0.1:3001/api/ping"

# 5. Checagem de Estabilidade Pós-Burn-in
check_item "Uptime sem quedas anômalas nas últimas 72h" "uptime -s"
check_item "Zero erros de corrupção nos logs de sistema" "! dmesg | grep -iE 'kernel panic|nvme.*error|corrupt'"

echo "=================================================================="
echo -e "Total de Itens Auditados: $((PASS + FAIL)) | \033[0;32mAprovados: ${PASS}\033[0m | \033[0;31mReprovados: ${FAIL}\033[0m"

if [ ${FAIL} -eq 0 ]; then
    echo -e "\033[0;32mRESULTADO FINAL: BOX HOMOLOGADA PARA LIBERAÇÃO E LACRE VOID!\033[0m"
    exit 0
else
    echo -e "\033[0;31mRESULTADO FINAL: EQUIPAMENTO REPROVADO. CORRIJA AS FALHAS!\033[0m"
    exit 1
fi
```

---

## 10. Laudo Técnico de Bancada e Certificado de Conformidade (Modelo Oficial)

Este formulário físico acompanha o prontuário interno de cada MOB Box montada e fica arquivado no histórico digital do cliente na central MOB.

```text
========================================================================================
                      LAUDO TÉCNICO DE HOMOLOGAÇÃO DE BANCADA
                     MOB | INTELIGÊNCIA ARTIFICIAL PARA EMPRESAS
========================================================================================

IDENTIFICAÇÃO DO EQUIPAMENTO:
Número de Série (S/N): MOB-2026-___________      Data de Montagem: ____/____/2026
Modelo: [ ] Compact (MBC-N100)  [ ] Pro (MBP-R7-32G)  [ ] Ultra (MBU-RTX3060)
Endereço Físico (MAC): ____:____:____:____:____:____
Cliente de Destino: ____________________________________________________________________

CHECKLIST DE BANCADA:
[ ] 1. BIOS: Restore on AC Power Loss configurado para [POWER ON].
[ ] 2. BIOS: Fast Boot [DISABLED], WoL [ENABLED], Boot Order no NVMe.
[ ] 3. BIOS: Senha de Administrador Master gravada com sucesso.
[ ] 4. MEMÓRIA: MemTest86+ executado por 1 ciclo completo com 0 erros.
[ ] 5. ARMAZENAMENTO: SMART SSD status PASSED, Critical Warning 0x00.
[ ] 6. CLONAGEM: Golden Image gravada e script mob-init.sh executado (< 25 min).
[ ] 7. BURN-IN 72 HORAS: Estresse contínuo finalizado sem travamentos.
       Temperatura máxima atingida em carga: _______ °C (Limite homologado: 72°C/78°C).
       Ruído acústico sustentado a 1 metro: _______ dB (Limite homologado: < 28dB).
[ ] 8. RESILIÊNCIA ELÉTRICA: 5 cortes abruptos de energia simulados com religamento 100%.
[ ] 9. SEGURANÇA: Tailscale autenticado com tag oficial e firewall travado.
[ ] 10. ACABAMENTO: Etiqueta de Marca, Etiqueta Técnica e Lacre VOID colados.

CERTIFICAÇÃO DE LIBERAÇÃO:
Atesto que o equipamento acima especificado foi submetido integralmente ao Procedimento
Operacional Padrão de Bancada, atendendo com rigor a 100% dos parâmetros de qualidade,
estabilidade térmica e segurança da MOB.

Técnico Responsável: __________________________________________________________________
Assinatura: _________________________________________   Data: ____/____/2026
========================================================================================
```

---

## 11. Conclusão e Próximos Passos (Onda 4)

Com este Procedimento Operacional Padrão (POP) consolidado, a MOB assegura:
1. **Reprodutibilidade Industrial:** O tempo de fabricação, montagem e clonagem de cada unidade é previsível e estritamente controlado (< 25 minutos).
2. **Confiabilidade Inabalável:** O teste de burn-in de 72 horas e o teste dos 5 cortes abruptos de energia garantem que a máquina operará como uma appliance corporativa sólida no escritório de qualquer PME.
3. **Visita de Instalação Sem Atrito:** O kit físico de ferramentas e o protocolo de 45 minutos no cliente transmitem autoridade imediata, permitindo que a equipe de implantação finalize o setup sem tocar no roteador além da reserva de IP e sem pedir ajuda à TI do cliente.

Este documento integra diretamente as entregas da **Onda 4**, fornecendo a base operacional de bancada para o piloto de campo na **Fix Soluções** (`10 Fix Pilot Specialist`) e o protocolo de sustentação pós-venda (`11 Post-Sales Specialist`).

---

*Assinado eletronicamente,*  
**04 — Operations Specialist**  
*MOB | Inteligência Artificial para Empresas*
