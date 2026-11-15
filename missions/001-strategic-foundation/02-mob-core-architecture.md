# MOB CORE — Arquitetura de Software, Imagem Mestre e Orquestração de IA

**Documento:** `missions/001-strategic-foundation/02-mob-core-architecture.md`  
**Missão:** 001 — Strategic Foundation  
**Especialista Responsável:** `06 AI Solutions Architect`  
**Governança & Coordenação:** `00 — Chief Transformation Officer (CTO)`  
**Status:** Consolidado (Onda 1)  
**Data de Referência:** 14 de Novembro de 2026  

---

## 1. Visão Geral e Filosofia de Engenharia do MOB CORE

O **MOB CORE** é a espinha dorsal de software embarcada na **MOB Box**. Sob a filosofia **"Pedreiro da IA" (Last-Mile AI / Forward-Deployed Engineering)**, o software foi desenhado para eliminar toda a fricção operacional de pequenas e médias empresas:

1. **Zero Atrito para o Cliente:** O usuário final nunca interage com comandos de terminal, conceitos de RAG ou prompts complexos. Ele utiliza o navegador na rede interna (`http://mobbox.local:3001`) ou simplesmente arrasta arquivos para uma pasta compartilhada no Windows (`\\mob-box\documentos-ia`).
2. **Appliance Isolada e Autônoma:** Todos os serviços rodam conteinerizados via **Docker Compose** sobre **Ubuntu Server LTS**, com política estrita de reinicialização (`restart: unless-stopped`) e recuperação imediata após quedas de energia.
3. **Privacidade Física e Híbrida Transparente:** Armazenamento documental, metadados, banco vetorial (LanceDB) e filas de automação operam 100% locais no disco NVMe da máquina. No modelo Compact (Híbrido), a inferência pesada é roteada para APIs corporativas privadas com política contratual de *Zero Data Retention (ZDR)*. No modelo Pro/Ultra, a inferência roda 100% offline via Ollama.
4. **Manutenção Remota Invisível:** O suporte da MOB ocorre por túnel seguro ponto a ponto (**Tailscale / WireGuard**), sem abertura de portas no roteador da empresa cliente.

```mermaid
flowchart TB
    subgraph LAN_CLIENTE["Rede Local da Empresa (LAN / Wi-Fi)"]
        WIN["Estações Windows / macOS<br/>Explorador de Arquivos"]
        BROWSER["Colaboradores via Navegador<br/>http://mobbox.local:3001"]
        CEL["Smartphones / WhatsApp Web<br/>Envio de Áudios e Fotos"]
    end

    subgraph MOB_BOX["MOB Box (Appliance Local - Ubuntu Server LTS)"]
        SAMBA["Servidor Samba Local<br/>\\\\mob-box\\documentos-ia"]
        
        subgraph DOCKER["Docker Engine (mob_internal)"]
            APP["AnythingLLM (v1.19+)<br/>Porta 3001 (LAN / Tailscale)<br/>Workspaces + RBAC"]
            AUTO["MOB Automator (FastAPI)<br/>Porta 8000 (Internal)<br/>Watcher + Parser + Pipelines"]
            VDB[("LanceDB Local<br/>Embeddings Vetoriais")]
            SQLITE[("SQLite / Metadados<br/>Histórico e Sessões")]
            OLLAMA["Ollama Engine (Local)<br/>Apenas Pro / Ultra (GPU)"]
        end

        STORAGE[("/srv/mob-box/storage<br/>Armazenamento Criptografado NVMe")]
        TS["Tailscale Daemon (Host)<br/>Túnel Seguro Ponto-a-Ponto"]
    end

    subgraph NUVEM_EXTERNA["Nuvem Corporativa Segura (Modo Híbrido Compact)"]
        API_ZDR["Provedor LLM Corporativo<br/>Zero Data Retention (ZDR)<br/>Não treina modelos"]
    end

    subgraph MOB_HQ["Central de Operações MOB"]
        SUPORTE["Console Central MOB<br/>Monitoramento & Updates"]
    end

    WIN -->|Gravação SMB2/3| SAMBA
    SAMBA -->|Gatilho inotify| AUTO
    AUTO -->|API Upload & Embeddings| APP
    BROWSER -->|HTTP Seguro LAN| APP
    CEL -.->|Upload via Painel/WhatsApp| AUTO
    APP <--> VDB
    APP <--> SQLITE
    APP --> STORAGE
    AUTO --> STORAGE

    APP -.->|Opção 1: Modo Local (Pro/Ultra)| OLLAMA
    APP -.->|Opção 2: Modo Híbrido (Compact)| API_ZDR

    TS <===>|Túnel WireGuard P2P| SUPORTE
```

---

## 2. Pilha Docker Compose Oficial do MOB CORE

### 2.1. Estrutura de Diretórios e Permissões no Host

Toda a infraestrutura do MOB CORE reside em `/srv/mob-box/`. É proibido o uso de `chmod -R 777`. As permissões seguem o princípio de privilégio mínimo mapeado para o UID/GID `1000:1000` (`mobadmin`).

```text
/srv/mob-box/
├── docker-compose.yml              # Definição oficial de produção dos serviços
├── .env                            # Segredos de ambiente (chmod 600, root:root)
├── anythingllm/
│   └── storage/                    # Persistência do AnythingLLM (chown 1000:1000)
├── automator/
│   ├── app/                        # Código do motor Python/FastAPI
│   │   ├── main.py
│   │   ├── watcher.py              # Ingestor da Pasta Inteligente
│   │   ├── pipelines.py            # Processamento de áudio e extração
│   │   └── requirements.txt
│   └── logs/                       # Logs de ingestão e execução
├── samba/
│   └── documentos-ia/              # Ponto de montagem da Pasta Inteligente
│       ├── comercial/
│       ├── operacional/
│       ├── diretoria/
│       ├── _processados/
│       └── _erros/
├── models/                         # Modelos locais GGUF/Ollama (Pro e Ultra)
├── backups/                        # Snapshots noturnos temporários antes da cifragem
└── scripts/
    ├── mob-init.sh                 # Script de primeiro boot (pós-clonagem)
    ├── backup-nightly.sh           # Rotina de backup criptografado 3-2-1
    └── healthcheck-daemon.sh       # Monitor de integridade e temperatura
```

### 2.2. Arquivo `docker-compose.yml` de Produção

O arquivo abaixo é o padrão de fábrica da MOB Box. Na **MOB Box Compact**, o serviço `ollama` permanece inativo (modo híbrido ativo). Na **MOB Box Pro/Ultra**, o profile `--profile local-gpu` sobe o motor local com aceleração de hardware.

```yaml
version: "3.8"

networks:
  mob_internal:
    name: mob_internal
    driver: bridge
    ipam:
      config:
        - subnet: 172.28.0.0/16

services:
  # -------------------------------------------------------------
  # 1. Interface de Usuário, RAG e Governança Documental
  # -------------------------------------------------------------
  anythingllm:
    image: mintplexlabs/anythingllm:v1.19.0
    container_name: mob-anythingllm
    restart: unless-stopped
    init: true
    user: "1000:1000"
    cap_add:
      - SYS_ADMIN
    ports:
      # Exposição na porta LAN da Box (acessível via http://mobbox.local:3001)
      - "3001:3001"
    environment:
      SERVER_PORT: 3001
      STORAGE_DIR: /app/server/storage
      JWT_SECRET: ${JWT_SECRET}
      PASSWORDMINCHAR: "12"
      VECTOR_DB: lancedb
      DISABLE_TELEMETRY: "true"
      # Configurações de Inferência gerenciadas dinamicamente via .env
      LLM_PROVIDER: ${LLM_PROVIDER:-generic-openai}
      GENERIC_OPENAI_BASE_PATH: ${GENERIC_OPENAI_BASE_PATH:-https://api.openai.com/v1}
      GENERIC_OPENAI_API_KEY: ${GENERIC_OPENAI_API_KEY}
      GENERIC_OPENAI_MODEL_PREF: ${GENERIC_OPENAI_MODEL_PREF:-gpt-4o-mini}
      EMBEDDING_ENGINE: native
      WHISPER_PROVIDER: local
      TTS_PROVIDER: native
    volumes:
      - /srv/mob-box/anythingllm/storage:/app/server/storage
    networks:
      - mob_internal
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3001/api/ping"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 20s

  # -------------------------------------------------------------
  # 2. Motor de Automações Invisíveis e Watcher da Pasta Inteligente
  # -------------------------------------------------------------
  mob-automator:
    build:
      context: /srv/mob-box/automator
      dockerfile: Dockerfile
    image: mob/automator:1.0.0
    container_name: mob-automator
    restart: unless-stopped
    depends_on:
      anythingllm:
        condition: service_healthy
    environment:
      ANYTHINGLLM_URL: http://mob-anythingllm:3001
      ANYTHINGLLM_API_KEY: ${ANYTHINGLLM_API_KEY}
      SAMBA_BASE_PATH: /data/documentos-ia
      LOG_LEVEL: INFO
      TZ: America/Sao_Paulo
    volumes:
      - /srv/mob-box/samba/documentos-ia:/data/documentos-ia
      - /srv/mob-box/automator/logs:/app/logs
    networks:
      - mob_internal
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 5s
      retries: 3

  # -------------------------------------------------------------
  # 3. Motor de Inferência 100% Local (MOB Box Pro / Ultra)
  # Ativado via: docker compose --profile local-gpu up -d
  # -------------------------------------------------------------
  ollama:
    image: ollama/ollama:0.5.7
    container_name: mob-ollama
    restart: unless-stopped
    profiles: ["local-gpu"]
    ports:
      # Isolado: nunca exposto diretamente na LAN externa
      - "127.0.0.1:11434:11434"
    volumes:
      - /srv/mob-box/models/ollama:/root/.ollama
    environment:
      OLLAMA_KEEP_ALIVE: "24h"
      OLLAMA_NUM_PARALLEL: "4"
      OLLAMA_ORIGINS: "http://mob-anythingllm:3001"
    # Configuração de GPU NVIDIA (ativado no Ubuntu com NVIDIA Container Toolkit)
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]
    networks:
      - mob_internal
```

### 2.3. Arquivo de Variáveis de Ambiente (`/srv/mob-box/.env`)

```bash
# ==============================================================================
# MOB CORE — Configurações de Ambiente de Produção
# Arquivo protegido: chmod 600 /srv/mob-box/.env (root:root)
# ==============================================================================

# Segurança e Sessão
JWT_SECRET=c8f5e1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0
PASSWORDMINCHAR=12

# Chave de Integração Interna (Gerada no AnythingLLM Settings -> API Keys)
ANYTHINGLLM_API_KEY=mob_sk_live_9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d

# Modo Híbrido Corporativo (MOB Box Compact - Padrão de Fábrica)
LLM_PROVIDER=generic-openai
GENERIC_OPENAI_BASE_PATH=https://api.openai.com/v1
GENERIC_OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GENERIC_OPENAI_MODEL_PREF=gpt-4o-mini

# Banco Vetorial e Embedder
VECTOR_DB=lancedb
EMBEDDING_ENGINE=native
WHISPER_PROVIDER=local

# Configuração de Fuso Horário
TZ=America/Sao_Paulo
```

---

## 3. A Pasta Inteligente na Rede Windows (`\\mob-box\documentos-ia`)

### 3.1. Conceito e Experiência do Usuário

A **Pasta Inteligente** elimina a necessidade de o cliente abrir painéis de administração para alimentar a base de conhecimento. Qualquer colaborador autorizado abre o **Windows Explorer** (ou Finder no macOS) no endereço `\\mobbox\documentos-ia` e simplesmente arrasta o arquivo para a pasta do respectivo setor.

```
\\mobbox\documentos-ia\
├── comercial\          --> Alimentador do Assistente Consultor Interno (Tabelas de preço, catálogos)
├── operacional\        --> Manuais técnicos, POPs, procedimentos internos, termos de garantia
├── diretoria\          --> Contratos confidenciais, atas, relatórios financeiros (acesso restrito)
├── _processados\       --> Arquivos lidos com sucesso (organizados automaticamente por data)
└── _erros\             --> Arquivos ilegíveis, corrompidos ou protegidos por senha + LOG explicativo
```

### 3.2. Configuração do Servidor Samba no Host (`/etc/samba/smb.conf`)

O Samba é instalado diretamente no host Ubuntu para integração nativa com o subsistema de rede e mDNS/Avahi. Desabilita-se expressamente o protocolo SMB1 para evitar vulnerabilidades de ransomware.

```ini
[global]
   workgroup = WORKGROUP
   server string = MOB Box AI Appliance
   netbios name = MOBBOX
   server role = standalone server
   security = user
   map to guest = Bad User
   dns proxy = no
   log file = /var/log/samba/log.%m
   max log size = 50000
   
   # Blindagem contra protocolos legados e ataques de rede
   server min protocol = SMB2_10
   server max protocol = SMB3_11
   client min protocol = SMB2_10
   client max protocol = SMB3_11
   smb encrypt = auto
   disable netbios = yes
   smb ports = 445

# -------------------------------------------------------------
# Compartilhamento Inteligente Aberto à Equipe (Comercial / Operacional)
# -------------------------------------------------------------
[documentos-ia]
   comment = Pasta de Ingestão de Documentos MOB CORE
   path = /srv/mob-box/samba/documentos-ia
   browsable = yes
   read only = no
   guest ok = yes
   create mask = 0660
   directory mask = 0770
   force user = mobadmin
   force group = mobadmin
   veto files = /*.exe/*.bat/*.cmd/*.scr/*.vbs/*.ps1/*.iso/*.zip/*.rar/*.7z/
   delete veto files = no

# -------------------------------------------------------------
# Compartilhamento Exclusivo da Diretoria (Com Senha de Rede)
# -------------------------------------------------------------
[documentos-ia-diretoria]
   comment = Documentos Confidenciais de Diretoria e Contratos
   path = /srv/mob-box/samba/documentos-ia/diretoria
   browsable = yes
   read only = no
   guest ok = no
   valid users = mobdiretoria
   create mask = 0600
   directory mask = 0700
   force user = mobadmin
   force group = mobadmin
```

### 3.3. Motor do Watcher / Ingestor Automatizado (`watcher.py`)

O serviço roda em segundo plano dentro do container `mob-automator`. Ele utiliza a biblioteca `watchdog` escutando eventos `on_closed` (evento do kernel Linux `IN_CLOSE_WRITE`), garantindo que o arquivo só seja processado após a cópia pelo Windows Explorer ser **100% finalizada**.

```python
"""
MOB Automator — Samba Watcher & Auto-Ingestor Daemon
Monitora /data/documentos-ia, sanitiza arquivos e dispara indexação no AnythingLLM.
"""

import os
import time
import shutil
import logging
import requests
from pathlib import Path
from datetime import datetime
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("/app/logs/watcher.log"),
        logging.StreamHandler()
    ]
)

ANYTHINGLLM_URL = os.getenv("ANYTHINGLLM_URL", "http://mob-anythingllm:3001")
API_KEY = os.getenv("ANYTHINGLLM_API_KEY", "")
BASE_WATCH_DIR = Path("/data/documentos-ia")

SECTOR_MAP = {
    "comercial": "comercial",
    "operacional": "operacional",
    "diretoria": "diretoria"
}

ALLOWED_EXTENSIONS = {".pdf", ".docx", ".xlsx", ".csv", ".txt", ".md"}
MAX_FILE_SIZE_MB = 50

class DocumentIngestionHandler(FileSystemEventHandler):
    def on_closed(self, event):
        if event.is_directory:
            return

        file_path = Path(event.src_path)
        
        # Ignora arquivos em pastas de controle interno e temporários do Office
        if any(part.startswith(("_", "~$", ".")) for part in file_path.parts):
            return

        self.process_document(file_path)

    def process_document(self, file_path: Path):
        logging.info(f"Detectado novo arquivo: {file_path.name}")
        sector = file_path.parent.name.lower()
        workspace_slug = SECTOR_MAP.get(sector)

        if not workspace_slug:
            logging.warning(f"Setor desconhecido para o arquivo {file_path}. Ignorando.")
            return

        # 1. Validação de Extensão
        ext = file_path.suffix.lower()
        if ext not in ALLOWED_EXTENSIONS:
            self.reject_file(file_path, f"Formato '{ext}' não suportado. Utilize PDF, DOCX, XLSX, CSV ou TXT.")
            return

        # 2. Validação de Tamanho
        size_mb = file_path.stat().st_size / (1024 * 1024)
        if size_mb > MAX_FILE_SIZE_MB:
            self.reject_file(file_path, f"Arquivo excede o limite máximo de {MAX_FILE_SIZE_MB}MB (Tamanho: {size_mb:.1f}MB).")
            return

        # 3. Envio para a API do AnythingLLM (Upload)
        try:
            headers = {"Authorization": f"Bearer {API_KEY}"}
            with open(file_path, "rb") as f:
                upload_res = requests.post(
                    f"{ANYTHINGLLM_URL}/api/v1/document/upload",
                    headers=headers,
                    files={"file": (file_path.name, f)},
                    timeout=60
                )

            if upload_res.status_code != 200:
                self.reject_file(file_path, f"Falha no upload para AnythingLLM: {upload_res.text}")
                return

            upload_data = upload_res.json()
            doc_location = upload_data.get("documents", [{}])[0].get("location")

            if not doc_location:
                self.reject_file(file_path, "Erro ao extrair localização do documento processado.")
                return

            # 4. Inclusão dos Embeddings no Workspace do Setor
            embed_payload = {
                "adds": [doc_location],
                "deletes": []
            }
            embed_res = requests.post(
                f"{ANYTHINGLLM_URL}/api/v1/workspace/{workspace_slug}/update-embeddings",
                headers=headers,
                json=embed_payload,
                timeout=120
            )

            if embed_res.status_code == 200:
                logging.info(f"Sucesso: {file_path.name} indexado no workspace '{workspace_slug}'.")
                self.archive_file(file_path, success=True)
            else:
                self.reject_file(file_path, f"Erro ao gerar embeddings no workspace: {embed_res.text}")

        except Exception as e:
            logging.error(f"Exceção durante ingestão de {file_path.name}: {str(e)}")
            self.reject_file(file_path, f"Erro de processamento interno: {str(e)}")

    def archive_file(self, file_path: Path, success: bool):
        today = datetime.now().strftime("%Y-%m-%d")
        dest_dir = BASE_WATCH_DIR / "_processados" / today
        dest_dir.mkdir(parents=True, exist_ok=True)
        shutil.move(str(file_path), str(dest_dir / file_path.name))

    def reject_file(self, file_path: Path, reason: str):
        logging.error(f"Arquivo rejeitado {file_path.name}: {reason}")
        err_dir = BASE_WATCH_DIR / "_erros"
        err_dir.mkdir(parents=True, exist_ok=True)
        
        # Move o arquivo para a pasta de erro
        target_path = err_dir / file_path.name
        shutil.move(str(file_path), str(target_path))
        
        # Cria um arquivo .txt explicativo na linguagem do empresário
        log_file = err_dir / f"{file_path.stem}__MOTIVO_ERRO.txt"
        with open(log_file, "w", encoding="utf-8") as f:
            f.write(f"Arquivo: {file_path.name}\n")
            f.write(f"Data da tentativa: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n")
            f.write(f"Motivo da rejeição: {reason}\n")
            f.write("\nOrientação MOB: Verifique se o arquivo está protegido por senha, danificado ou fora dos formatos aceitos.\n")

if __name__ == "__main__":
    logging.info(f"Iniciando MOB Samba Watcher em: {BASE_WATCH_DIR}")
    for sector in SECTOR_MAP.keys():
        (BASE_WATCH_DIR / sector).mkdir(parents=True, exist_ok=True)
    (BASE_WATCH_DIR / "_processados").mkdir(parents=True, exist_ok=True)
    (BASE_WATCH_DIR / "_erros").mkdir(parents=True, exist_ok=True)

    event_handler = DocumentIngestionHandler()
    observer = Observer()
    observer.schedule(event_handler, str(BASE_WATCH_DIR), recursive=True)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
```

---

## 4. Os 3 Assistentes Pré-Moldados de Fábrica

Toda MOB Box sai de fábrica com 3 assistentes configurados, calibrados e testados com base no padrão verbal do **Asaas** (direto, maduro, confiante e sem alucinações).

### 4.1. Assistente 1 — Consultor Interno (Tabelas de Preços, POPs e Regras)

- **Identificador / Workspace:** `consultor-interno`
- **Ícone / Identidade:** `🏢 Consultor de Regras e Preços MOB`
- **Público:** Atendentes, vendedores, balcão de suporte e operação interna.
- **Base Documental Vinculada:** Tabelas de preços atualizadas, catálogos técnicos, Procedimentos Operacionais Padrão (POP), políticas de prazo, devolução e garantia.
- **Calibração de Parâmetros:**
  - *Temperature:* `0.10` (Precisão máxima, tolerância zero a improvisos).
  - *Top-P:* `0.85`
  - *Chunk Size:* `512 tokens` (Overlap de 64 tokens)
  - *Similarity Threshold (Cosine):* `0.72`

#### System Prompt de Produção

```text
Você é o Consultor Interno oficial da empresa, operando através do MOB CORE.
Sua missão é responder dúvidas de colaboradores com precisão cirúrgica, consultando estritamente os manuais, tabelas de preços, normas operacionais e políticas internas indexadas na sua base de conhecimento.

DIRETRIZES FUNDAMENTAIS DE RESPOSTA:
1. PRECISÃO ABSOLUTA: Se a informação exata (preço, prazo, código de peça ou regra) constar nos documentos, forneça-a de forma clara, direta e objetiva, sempre citando o documento e a seção/página de origem entre colchetes. Exemplo: [Manual de Serviços 2026, pág. 12].
2. TOLERÂNCIA ZERO A SUPOSIÇÕES: Se a resposta não estiver nos documentos carregados ou se houver dúvida ou conflito de versões, responda EXATAMENTE: "Esta informação não consta na base de normas e preços atualizada da empresa. Por favor, consulte a gerência ou o responsável técnico antes de confirmar ao cliente."
3. TOM DE VOZ: Profissional, maduro, prestativo e direto ao ponto. Não use saudações floreadas nem jargões técnicos de Inteligência Artificial.
4. FORMATAÇÃO: Destaque valores em negrito (ex: R$ 350,00), use listas com marcadores para passos operacionais e tabelas para comparação de preços.
```

#### Exemplo Prático de Interação
- **Pergunta do Vendedor:** *"Qual é o valor da substituição de conector de carga tipo-C e qual o prazo de garantia para pessoa física?"*
- **Resposta do Assistente:**
  > O serviço de **Substituição de Conector de Carga USB-C** possui o valor padrão de **R$ 180,00 à vista** (ou 3x de R$ 68,00 no cartão).  
  > O prazo de garantia legal e contratual para pessoa física é de **90 (noventa) dias corridos** contra defeitos de solda ou fabricação do componente.  
  > *Fonte consultada: [Tabela_Mao_de_Obra_Fix_2026.xlsx — Aba 'Conectores', Linha 14]*

---

### 4.2. Assistente 2 — Redator de Padrão (Áudios do WhatsApp virando Orçamentos)

- **Identificador / Workspace:** `redator-padrao`
- **Ícone / Identidade:** `⚡ Redator de Propostas e Relatórios MOB`
- **Público:** Vendedores de campo, técnicos de rua, gestores e orçamentistas.
- **Base Documental Vinculada:** Modelos de propostas comerciais homologados, termos gerais de contratação, modelos de relatório de visita técnica e templates de Ordem de Serviço.
- **Calibração de Parâmetros:**
  - *Temperature:* `0.20` (Equilíbrio entre estruturação gramatical elegante e fidelidade aos dados).
  - *Top-P:* `0.90`

#### System Prompt de Produção

```text
Você é o Redator de Padrão da empresa, operando através do MOB CORE.
Sua função é transformar relatos brutos, anotações rápidas e transcrições de áudios informais do WhatsApp em documentos executivos impecáveis (Propostas Comerciais, Ordens de Serviço ou Relatórios de Visita Técnica).

DIRETRIZES DE FORMATAÇÃO:
1. ESTRUTURA PADRONIZADA: Toda proposta gerada deve conter:
   - Cabeçalho com identificação do cliente e data;
   - Objeto do serviço / Descrição detalhada dos itens apurados;
   - Tabela discriminando Itens, Quantidade, Valor Unitário e Valor Total;
   - Condições Comerciais (Forma de pagamento, prazo de execução e validade da proposta);
   - Termo de Garantia e Responsabilidades do Cliente.
2. SANEAMENTO DE VÍCIOS DE LINGUAGEM: Remova gírias, hesitações e repetições comuns de mensagens de voz, mantendo estritamente os fatos técnicos, marcas de peças e valores citados.
3. ALERTA DE DADOS FALTANTES: Se o relato do usuário não contiver dados essenciais (ex: faltou informar a forma de pagamento ou metragem), insira uma marcação evidente: `[ATENÇÃO: Definir prazo de entrega antes de enviar ao cliente]`.
```

#### Exemplo Prático de Interação
- **Entrada Bruta (Transcrição de Áudio de WhatsApp):**  
  *"Ô Osmar, anota aí pro seu Wilson da mecânica... troca de duas memórias de 16 giga DDR4 nos computadores do caixa e formatação com backup do sistema dele. Cada pente de memória cobrei 280 pau e a mão de obra de tudo deu 350. Prazo de entrega até amanhã às 17h. Pagamento no Pix com 5% de desconto ou 3x no cartão. Garantia das peças de um ano."*
- **Saída Estruturada do Assistente:**

```markdown
# PROPOSTA COMERCIAL & ORDEM DE SERVIÇO Nº [GERAR_NUMERO]

**Cliente:** Wilson (Mecânica)  
**Data:** 14/11/2026  
**Validade da Proposta:** 5 dias úteis  

---

### 1. Escopo dos Serviços e Fornecimento de Componentes
Substituição e upgrade de memória RAM em 02 (dois) terminais de ponto de venda (caixa), acompanhada de backup integral de dados e reinstalação limpa do sistema operacional.

| Item | Descrição | Qtd. | Vlr. Unitário | Vlr. Total |
| :---: | :--- | :---: | :---: | :---: |
| 01 | Módulo de Memória 16GB DDR4 3200MHz | 02 un | R$ 280,00 | R$ 560,00 |
| 02 | Mão de obra técnica especializada (Instalação + Backup + Formatação) | Global | R$ 350,00 | R$ 350,00 |
| **TOTAL** | **Investimento Global** | — | — | **R$ 910,00** |

---

### 2. Condições Comerciais & Prazos
- **Pagamento à vista (PIX):** R$ 864,50 (com 5% de desconto aplicado).
- **Parcelamento:** Em até 3x de R$ 303,33 sem juros no cartão de crédito.
- **Prazo de Conclusão:** Entrega dos equipamentos até 15/11/2026 às 17:00h.

### 3. Termos de Garantia
- **Componentes Físicos (Memórias RAM):** 01 (um) ano de garantia contra defeitos de fabricação.
- **Mão de Obra de Configuração de Sistema:** 90 (noventa) dias de suporte técnico.
```

---

### 4.3. Assistente 3 — Analista de Documentos (Resumo e Triagem de Riscos)

- **Identificador / Workspace:** `analista-documentos`
- **Ícone / Identidade:** `🛡️ Analista Crítico de Documentos e Contratos`
- **Público:** Diretoria, setor financeiro, compras e departamento jurídico/contábil.
- **Base Documental Vinculada:** Modelos contratuais, minutas aprovadas, tabela de retenções fiscais e histórico de editais.
- **Calibração de Parâmetros:**
  - *Temperature:* `0.10`
  - *Top-P:* `0.80`

#### System Prompt de Produção

```text
Você é o Analista de Documentos da empresa, operando através do MOB CORE.
Sua missão é realizar a dissecação executiva de contratos, editais, convenções de condomínio e relatórios extensos, destacando riscos ocultos, cláusulas onerosas, prazos fatais e divergências financeiras.

MATRIZ OBRIGATÓRIA DE ANÁLISE:
Para qualquer documento analisado, produza um parecer estruturado contendo:
1. RESUMO EXECUTIVO (Em até 4 linhas: Quem contrata quem, objeto e valor global).
2. TABELA DE PRAZOS & MARCOS VITAIS (Vigência, renovação automática, avisos prévios e datas de entrega).
3. MATRIZ DE RISCOS & CLÁUSULAS SENSÍVEIS (Identificação de multas rescisórias, juros moratórios, índice de reajuste, foro e obrigações unilaterais).
4. PONTOS DE ATENÇÃO IMEDIATA (O que deve ser negociado ou alterado antes da assinatura).
5. LIMITAÇÃO TÉCNICA: Finalize sempre com a ressalva: "Esta é uma análise operacional elaborada por inteligência artificial e não substitui a revisão formal de um advogado ou contador responsável."
```

---

## 5. Manutenção Remota Invisível e Clonagem Rápida

### 5.1. Arquitetura de VPN Segura via Tailscale

Para que a MOB forneça suporte gerenciado sem depender de abertura de portas de firewall (NAT traversal) no cliente, a Box utiliza o daemon **Tailscale** nativo sobre o Ubuntu LTS.

```mermaid
flowchart LR
    subgraph MOB_NOC["Bancada Central MOB"]
        ENG["Técnico / Engenheiro MOB"]
    end

    subgraph TAILSCALE_CTRL["Painel de Controle Tailscale (ACLs Rigorosas)"]
        ACL["Regras de Acesso:<br/>Somente grupo:mob-engineers<br/>Acesso exclusivo: Portas 3001, 8000 e 2222"]
    end

    subgraph CLIENTE_LAN["Escritório do Cliente"]
        ROUTER["Roteador LAN<br/>(Sem portas abertas)"]
        BOX["MOB Box<br/>tailscaled ativo<br/>IP: 100.x.y.z"]
    end

    ENG -->|Conexão P2P Criptografada| TAILSCALE_CTRL
    TAILSCALE_CTRL <===>|WireGuard Seguro| BOX
```

#### Diretrizes de Configuração no Host:
1. **Zero Port Forwarding:** Nenhuma porta do roteador do cliente é aberta na WAN.
2. **Tags de Segurança:** Cada Box recebe a tag `tag:mob-box-appliance`.
3. **Restrição por ACL (Tailscale Access Rules):**

```json
{
  "acls": [
    {
      "action": "accept",
      "src": ["group:mob-support"],
      "dst": ["tag:mob-box-appliance:3001", "tag:mob-box-appliance:8000", "tag:mob-box-appliance:2222"]
    }
  ]
}
```

4. **Porta SSH Alternativa:** SSH do host configurado na porta `2222`, escutando **apenas na interface Tailscale** (`tailscale0`).

---

### 5.2. Rotina de Clonagem Rápida de SSD (Meta: < 30 Minutos de Bancada)

Para viabilizar escala comercial sem retrabalho artesanal, a bancada técnica opera com a **Imagem Mestre MOB CORE (Golden Image)** gravada em pendrive de inicialização rápida com Clonezilla ou duplicador de SSD NVMe PCIe de alta velocidade (tempo de gravação física: ~4 minutos para 25GB compactados).

```
+-----------------------------------------------------------------------------------+
|               FLUXO DE BANCADA — CLONAGEM E LIBERAÇÃO EM 25 MINUTOS               |
|                                                                                   |
| [1. Gravação SSD] ---> [2. Primeiro Boot] ---> [3. Execução mob-init]             |
|   Duplicador NVMe        Bios Auto-Power On      - Expansão de partição           |
|   ou Clonezilla zstd     Ubuntu Server sobe      - Novos segredos .env & JWT      |
|   (4 minutos)            (1 minuto)              - Novo Hostname & Machine ID     |
|                                                  - Conexão Tailscale AuthKey      |
|                                                  (3 minutos)                      |
|                                                                                   |
| [4. Teste Automatizado] <---------------------------------------------------------+
|   - Verificação Samba Windows                                                     |
|   - Healthcheck Docker (3001 e 8000)                                              |
|   - Simulação corte de energia                                                    |
|   - Emissão de Laudo de Bancada e Lacre VOID                                      |
|   (15 minutos)                                                                    |
+-----------------------------------------------------------------------------------+
```

#### Script de Inicialização de Primeiro Boot (`/srv/mob-box/scripts/mob-init.sh`)

Executado como serviço único do systemd (`mob-firstboot.service`), este script despersonaliza a imagem mestre e individualiza a Box do cliente:

```bash
#!/usr/bin/env bash
# ==============================================================================
# MOB CORE — Script de Comissionamento e Primeiro Boot (mob-init.sh)
# Execução autônoma na bancada técnica da MOB
# ==============================================================================
set -euo pipefail

CLIENT_SLUG="${1:-cliente-demo}"
TAILSCALE_AUTHKEY="${2:-tskey-auth-kxxxxxxxxxxxxxxx}"

echo ">>> [1/6] Expandindo partição raiz NVMe..."
growpart /dev/nvme0n1 2 || true
resize2fs /dev/nvme0n1p2 || true

echo ">>> [2/6] Despersonalizando Identidade e Chaves de Sistema..."
rm -f /etc/machine-id /var/lib/dbus/machine-id
systemd-machine-id-setup
rm -f /etc/ssh/ssh_host_*
ssh-keygen -A

echo ">>> [3/6] Configurando Hostname Corporativo..."
NEW_HOSTNAME="mobbox-${CLIENT_SLUG}"
hostnamectl set-hostname "${NEW_HOSTNAME}"
sed -i "s/mobbox-master/${NEW_HOSTNAME}/g" /etc/hosts

echo ">>> [4/6] Gerando Novos Segredos Criptográficos Locais..."
NEW_JWT=$(openssl rand -hex 32)
sed -i "s/JWT_SECRET=.*/JWT_SECRET=${NEW_JWT}/" /srv/mob-box/.env

echo ">>> [5/6] Ativando Conexão Segura Tailscale..."
tailscale up --authkey="${TAILSCALE_AUTHKEY}" --hostname="${NEW_HOSTNAME}" --reset

echo ">>> [6/6] Reiniciando Pilha Docker MOB CORE..."
cd /srv/mob-box
docker compose down -v || true
docker compose up -d

echo "=========================================================="
echo " MOB Box [${NEW_HOSTNAME}] Comissionada com Sucesso!"
echo " Acesso Local: http://${NEW_HOSTNAME}.local:3001"
echo " IP Tailscale: $(tailscale ip -4)"
echo "=========================================================="
```

---

## 6. Escopo Técnico de Validação no Piloto Fix (Cliente Zero)

A **Fix Soluções** (assistência técnica e serviços de tecnologia) é a empresa homologadora oficial do Piloto Zero antes de qualquer venda externa.

### 6.1. Corpus de Documentos Reais do Piloto Fix

| Arquivo / Base de Dados | Formato | Volume Real | Objetivo de Validação no Piloto |
| :--- | :---: | :---: | :--- |
| **Tabela de Serviços Fix 2026** | `.xlsx` | 15 abas, 350 itens | Teste de recuperação de preços e códigos de mão de obra. |
| **Manual de Procedimentos de Balcão (POP)** | `.docx` | 42 páginas | Consulta de regras de devolução, prazos e conduta de atendimento. |
| **Termo Geral de Garantia Fix** | `.pdf` | 6 páginas | Teste de citações de cláusulas e restrições legais para clientes. |
| **Amostra de Orçamentos Históricos** | `.pdf` | 60 arquivos | Teste de síntese de histórico e identificação de recorrência. |

### 6.2. Bateria de Testes Homologatórios (Bancada & Campo)

```text
[TESTE T1] Ingestão em Lote via Windows Explorer:
- Ação: Arrastar 15 PDFs simultâneos (tamanho total 80MB) para \\mobbox\documentos-ia\operacional.
- Critério de Aceite: Todos os 15 arquivos devem ser processados pelo Watcher em menos de 120 segundos e movidos para _processados, com embeddings atualizados no AnythingLLM sem travar a interface.

[TESTE T2] Teste de Estresse de RAG e Alucinação:
- Ação: Executar 30 perguntas complexas no Assistente Consultor Interno, alternando entre dados existentes e pegadinhas (ex: perguntar o preço de um serviço que NÃO existe na tabela).
- Critério de Aceite: 100% de precisão nos itens existentes com citação correta da linha/página. Zero alucinação nos itens ausentes (recusa mandatória com a frase padrão).

[TESTE T3] Teste de Corte Abrupto de Energia (AC Loss Simulation):
- Ação: Durante uma operação de geração de resposta e cópia de arquivos no Samba, puxar o cabo de força da tomada. Reconectar após 30 segundos.
- Critério de Aceite: BIOS religa a Box sozinha sem intervenção manual (Restore on AC Power Loss). Docker restabelece os containers AnythingLLM e Automator em menos de 90 segundos sem corrupção das bases SQLite ou LanceDB.

[TESTE T4] Teste de Manutenção Remota Invisível:
- Ação: Engenheiro da MOB conecta via notebook 4G fora da rede local usando Tailscale e atualiza um prompt no AnythingLLM via API na porta 3001.
- Critério de Aceite: Atualização aplicada com sucesso sem interrupção para os usuários da LAN do escritório e sem abrir portas no roteador da Fix.
```

### 6.3. Critérios de Aceite Go / No-Go para Liberação Comercial

- [ ] **Latência Máxima de Resposta (Modo Híbrido Compact):** Inferência inicial em menos de **3.5 segundos** para perguntas com RAG.
- [ ] **Latência Máxima de Resposta (Modo Local Pro com GPU):** Inferência inicial em menos de **5.0 segundos** com modelo 8B/14B quantizado.
- [ ] **Estabilidade 24/7:** 72 horas consecutivas de operação em bancada com zero reinicializações anômalas dos containers.
- [ ] **Taxa de Rejeição de Ingestão:** Menor que **2%** para documentos bem formatados em PDF e planilhas.

---

## 7. Matriz de Governança e Ciclo de Vida do MOB CORE

| Componente | Versão Fixada de Homologação | Política de Atualização | Procedimento de Rollback |
| :--- | :--- | :--- | :--- |
| **Sistema Operacional** | Ubuntu Server 24.04 LTS (Kernel 6.8+) | Patches de segurança mensais via script automatizado. | Snapshot local do disco e restauração de partição. |
| **Interface / RAG** | AnythingLLM `v1.19.0` (Docker) | Atualização trimestral após teste prévio em laboratório MOB. Proibido tag `:latest`. | Retorno da tag no `docker-compose.yml` e restore do volume `/storage`. |
| **Banco Vetorial** | LanceDB Embutido (AVX2 nativo) | Acompanha a versão do AnythingLLM. | Backup diário dos índices em `/srv/mob-box/backups/`. |
| **Motor de Automações** | MOB Automator `v1.0.0` (FastAPI) | Atualização contínua via Git interno MOB. | `docker rollback` ou substituição da imagem do container. |
| **VPN Remota** | Tailscale Client `1.78+` | Atualização contínua via repositório oficial package. | Reinicialização do serviço `tailscaled`. |

---

## 8. Conclusão e Próximos Passos (Onda 1)

Com a arquitetura de software, configuração de Docker Compose, Pasta Inteligente Samba, os 3 Assistentes Pré-Moldados e o escopo do Piloto Fix consolidados, a fundação técnica do **MOB CORE** está completamente pronta para integração com o framework de conformidade LGPD e segurança (`07 Security & Privacy Specialist`).

O documento de hardware (`01-hardware-mob-box-spec.md`) e este documento de software (`02-mob-core-architecture.md`) formam o alicerce técnico inabalável para que a **Onda 2** precifique a MOB Box com margem saudável e modele a transição comercial da MOB.
