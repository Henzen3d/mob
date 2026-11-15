# MOB Box & MOB Start — Framework de Segurança da Informação, Privacidade e Conformidade LGPD

**Documento:** `missions/001-strategic-foundation/03-security-lgpd-framework.md`  
**Missão:** 001 — Strategic Foundation  
**Especialista Responsável:** `07 Security & Privacy Specialist`  
**Governança & Coordenação:** `00 — Chief Transformation Officer (CTO)`  
**Status:** Consolidado (Onda 1)  
**Data de Referência:** 14 de Novembro de 2026  

---

## 1. Princípios de Segurança e Filosofia de Blindagem

A atuação da **MOB | Inteligência Artificial para Empresas** é pautada na confiança operacional de empresários locais (PMEs). Para escritórios jurídicos, contabilidades, clínicas, imobiliárias e prestadores de serviços de Blumenau e Vale do Itajaí, o sigilo e a integridade dos dados empresariais não são diferenciais de marketing, mas requisitos vitais de sobrevivência.

Adotamos três princípios inegociáveis de segurança e governança:
1. **Transparência Tecnológica Absoluta (Anti-Falsas Promessas):** Proibido afirmar genericamente que *"os dados nunca saem da sua empresa"* se a arquitetura contratada for o Modo Híbrido. Informamos com exatidão cirúrgica o que fica na caixa física local e o que trafega via canal criptografado para inferência externa.
2. **Menor Privilégio & Segregação por Setor (Zero Trust Local):** O colaborador do balcão ou vendas não pode ter acesso, via busca da IA, às folhas de pagamento da diretoria, estratégias societárias ou ao balanço contábil da empresa. O isolamento lógico entre departamentos é garantido em nível de pastas de rede Samba e coleções vetoriais estanques.
3. **Cibersegurança Prática ("Pedreiro da IA"):** Criptografia de ponta a ponta (AES-256 e TLS 1.3), rotina noturna de backups automatizados imutáveis, túnel VPN invisível para manutenção remota sem escanear a rede do cliente, e blindagem jurídica preventiva (cláusulas de IA assistiva, cap de responsabilidade e comodato seguro).

---

## 2. Matriz de Transparência Técnica e Jurídica: Híbrido vs. 100% Local

A escolha entre o **Modo Híbrido Inteligente** e o **Modo 100% Local Offline** define os limites de privacidade, custos de hardware e garantias regulatórias perante a LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018).

```
+-------------------------------------------------------------------------------------------------------------------+
|                                       MATRIZ DE TRANSPARÊNCIA ARQUITETURAL                                         |
+------------------------------------+-------------------------------------------+----------------------------------+
| Critério Técnico / Jurídico        | MOB Box Compact (Modo Híbrido)            | MOB Box Pro / Ultra (100% Local) |
+------------------------------------+-------------------------------------------+----------------------------------+
| Hardware de Bancada                | Mini PC (Intel N100 / Ryzen 5, 16GB RAM)  | Mac Mini M4 ou Workstation RTX   |
| Onde ficam os Documentos Originais | 100% Local na MOB Box (Escritório)        | 100% Local na MOB Box (Escritório)|
| Armazenamento do Banco Vetorial    | Local (LanceDB na Box)                    | Local (LanceDB na Box)           |
| Onde ocorre a Busca (RAG)          | 100% Local na CPU com AVX2                | 100% Local na CPU/GPU da Box     |
| Onde ocorre a Leitura/Geração      | API Corporativa Privada Segura            | GPU Local Física na Box          |
| Conexão Externa de Internet        | Necessária apenas para envio de inferência| DESCONECTADA / ZERO WAN (Air-gap)|
| O que sai da rede da empresa?      | Apenas o prompt e trecho mínimo indexado  | ABSOLUTAMENTE NADA               |
| Política de Retenção de Dados      | Zero Data Retention (ZDR) corporativo     | Inexistente (Fisicamente nulo)   |
| Uso dos Dados para Treinar Modelos | NÃO (Vedação contratual formal da API)    | NÃO (Modelo estático local)      |
| Provedores de API Homologados      | OpenAI / Anthropic API (Contrato B2B)     | Nenhum (Inferência local)        |
| Provedores VETADOS                 | DeepSeek pública, ChatGPT/Claude pessoal  | N/A                              |
| Perfil Ideal de Cliente            | 90% das PMEs (Comércio, Vistoria, Clínicas| Advocacia contenciosa, patentes, |
|                                    | Contabilidade geral, Serviços técnicos)   | Compliance financeiro estrito    |
+------------------------------------+-------------------------------------------+----------------------------------+
```

### 2.1. Detalhamento do Modo Híbrido Inteligente (MOB Box Compact / MOB Start)
- **Como funciona:** O cliente armazena todos os seus arquivos, tabelas e manuais dentro do SSD da MOB Box no escritório. A indexação vetorial é realizada pela máquina local. No momento de uma pergunta, apenas o trecho contextual estritamente relevante e a pergunta são transmitidos via conexão segura e criptografada (TLS 1.3) para endpoints corporativos autorizados.
- **Garantia de Não-Retenção (*Zero Data Retention*):** As chaves corporativas fornecidas pela MOB possuem cláusula contratual estrita de ZDR: os servidores do provedor processam a resposta em memória RAM volátil e descartam imediatamente o conteúdo, sem salvar em logs permanentes de treinamento de modelos futuros.
- **A Verdade para o Cliente:** *A base documental e a orquestração ficam na sua empresa; apenas o texto mínimo da consulta trafega de forma criptografada para processamento e retorna imediatamente.*

### 2.2. Detalhamento do Modo 100% Local Offline (MOB Box Pro / Ultra)
- **Como funciona:** Toda e qualquer etapa (armazenamento, embeddings, transcrição e inferência do modelo de linguagem de 8B a 32B parâmetros) ocorre dentro dos chips de processamento físico da MOB Box (Apple Silicon ou GPU NVIDIA).
- **Isolamento Físico Estrito:** A Box pode operar conectada exclusivamente em uma VLAN interna isolada da empresa, sem qualquer rota de saída para a internet. Nenhum byte cruza as paredes do escritório do cliente.
- **Indicação Mandatória:** Escritórios de advocacia contenciosa com estratégias processuais sob sigilo judicial, auditorias fiscais com dados bancários e empresas sob regulação rígida de conformidade.

### 2.3. Diretriz Estrita de Provedores Externos no Modo Híbrido
1. **Provedores Homologados:**
   - **OpenAI API (Tier Corporativo / Enterprise):** Utilização sob chave de API dedicada por cliente. Política expressa de que dados enviados via API não são utilizados para treinamento de modelos generativos públicos. Habilitação de *Zero Data Retention (ZDR)* ou retenção mínima de 30 dias restrita a logs automatizados de auditoria e segurança.
   - **Anthropic API (Commercial Terms):** Termos comerciais com garantia contratual de não utilização de prompts ou outputs para refinamento de modelos fundacionais, com ZDR ativado para a organização.
2. **Provedores Expressamente VETADOS para Dados Confidenciais:**
   - **DeepSeek API (Pública / Endpoints sem contrato corporativo ocidental):** Proibido o uso como padrão para clientes corporativos. A política pública de privacidade prevê controle em jurisdição chinesa e autoriza explicitamente a retenção de prompts, arquivos e vozes para melhoria e treinamento de tecnologia, desaconselhando dados sensíveis.
   - **Contas de Consumidor (ChatGPT Free/Plus, Claude Pro individual):** Terminantemente proibido integrar contas de usuário pessoa física aos nós da MOB Box. Apenas chaves de API empresarial corporativas são permitidas.

---

## 3. Política de Controle de Acesso Baseado em Papéis (RBAC) por Setor

O cérebro da empresa não pode ser uma "caixa-preta aberta" onde qualquer colaborador pesquisa qualquer dado. O controle de acesso é aplicado de forma síncrona tanto na **Interface Web (AnythingLLM)** quanto no **Compartilhamento de Arquivos de Rede (Samba `\\mob-box\documentos-ia`)**.

```
+-----------------------------------------------------------------------------------+
|                            ROTEADOR DA EMPRESA (LAN)                              |
+-----------------------------------------------------------------------------------+
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
    [ SETOR COMERCIAL / ATENDIMENTO ]               [ DIRETORIA / RH / FINANCEIRO ]
    - Acesso: \\mob-box\comercial                   - Acesso: \\mob-box\diretoria
    - Workspace: "Comercial & Vendas"               - Workspace: "Diretoria & Estratégia"
    - Tabelas de preços, manuais, FAQs             - DREs, folha de pagamento, contratos
                 │                                               │
                 └───────────────────────┬───────────────────────┘
                                         ▼
            +──────────────────────────────────────────────────────────+
            |                    MOB BOX APPLIANCE                     |
            |                                                          |
            |  [ Samba Server ]   Segregação de grupos POSIX locais    |
            |  [ Watcher Daemon ] Ingestão automática no Workspace     |
            |  [ AnythingLLM ]    RBAC multiusuário com sessões JWT    |
            |  [ LanceDB ]        Coleções vetoriais isoladas por ID   |
            +──────────────────────────────────────────────────────────+
```

### 3.1. Estrutura de Pastas de Rede Samba (`\\mob-box\documentos-ia`)

O servidor Samba interno da MOB Box é configurado com permissões estritas de grupo no sistema operacional (`chown` e `chmod 2770`), impedindo leitura cruzada:

1. `\\mob-box\documentos-ia\comercial\`
   - **Grupo Autorizado:** `mob_comercial` e `mob_diretoria`.
   - **Conteúdo Homologado:** Catálogos de produtos, tabelas de preços vigentes, políticas comerciais de desconto, scripts de vendas, manuais de atendimento e modelos de proposta padrão.
2. `\\mob-box\documentos-ia\operacional\`
   - **Grupo Autorizado:** `mob_operacional` e `mob_diretoria`.
   - **Conteúdo Homologado:** Procedimentos Operacionais Padrão (POPs), laudos técnicos, formulários de vistoria, históricos de ordens de serviço e tabelas de compatibilidade técnica.
3. `\\mob-box\documentos-ia\diretoria-rh\`
   - **Grupo Autorizado:** Exclusivo `mob_diretoria`.
   - **Conteúdo Homologado:** Contratos de trabalho, tabelas salariais e comissionamento, balancetes, extratos e demonstrativos financeiros, atas societárias e relatórios de auditoria confidencial.

### 3.2. Matriz de Permissões e Perfis de Acesso

| Papel no Sistema | Escopo de Acesso na Interface | Permissão de Ingestão | Acesso ao Workspace Diretoria | Acesso a Logs Técnicos e Docker |
| :--- | :--- | :--- | :--- | :--- |
| **Colaborador Operacional** | Assistentes de Triagem e Documentos Operacionais | Leitura / Perguntas nos seus workspaces | **BLOQUEADO** | **BLOQUEADO** |
| **Vendedor / Atendimento** | Assistente Comercial e Redator de Padrão | Leitura / Perguntas e rascunhos de propostas | **BLOQUEADO** | **BLOQUEADO** |
| **Gestor / Admin da PME** | Todos os Workspaces da empresa | Ingestão, upload e exclusão de documentos | **LIBERADO** | **BLOQUEADO** |
| **Suporte Técnico MOB** | Painel administrativo do host via Tailscale fechado | Apenas manutenção sob chamado e auditoria | **BLOQUEADO** (conteúdo sigiloso) | **LIBERADO** (logs de sistema e métricas) |

### 3.3. Segregação no Banco Vetorial e Descarte de Documentos Revogados
- **Isolamento de Coleções:** No motor vetorial (LanceDB), cada Workspace do AnythingLLM gera uma partição de vetores (*collection*) completamente estanque. Uma consulta realizada no workspace comercial é matematicamente incapaz de calcular similaridade cosseno sobre vetores do workspace da diretoria.
- **Revogação e Purga de Documentos:** Quando uma tabela de preços ou documento sigiloso é revogado, a exclusão da pasta Samba aciona o sincronizador local que remove tanto o arquivo original quanto os *embeddings* vetoriais associados, expurgando imediatamente a memória ativa da IA.

---

## 4. Arquitetura e Rotina de Backups Noturnos Criptografados

A perda do banco de conhecimento ou a quebra de integridade do sistema da PME acarretaria retrabalho operacional severo. A política de continuidade de negócios da MOB Box opera sob metas estritas:
- **RPO (Recovery Point Objective):** Máximo de **24 horas** (perda tolerada limitada às atualizações do próprio dia útil).
- **RTO (Recovery Time Objective):** Restauração operacional completa em **menos de 60 minutos** (via imagem mestra ou restauração de snapshot Docker).

### 4.1. Escopo do Backup (O que é protegido)
1. **Banco de Dados Relacional da Aplicação:** Base SQLite do AnythingLLM (usuários, workspaces, conversas, configurações de sistema).
2. **Índices Vetoriais:** Diretório de dados persistentes do LanceDB (`/app/server/storage/lancedb`).
3. **Repositório de Documentos Originais:** Pasta física de armazenamento de PDFs e planilhas ingeridas.
4. **Arquivos de Configuração e Orquestração:** Arquivos `docker-compose.yml`, scripts de inicialização e variáveis de ambiente operacionais (com segredos sanitizados).

### 4.2. Padrão Criptográfico e Topologia 3-2-1 Adaptada à PME

```
+------------------------------------------------------------------------------------+
|                                 MOB BOX EM PRODUÇÃO                                |
|                                                                                    |
|  [ Documentos ] + [ SQLite ] + [ LanceDB ] ──( Cron diário 02:00h )                |
|                                                    │                               |
|                                                    ▼                               |
|                        [ Script Restic / AES-256-GCM Backup Engine ]                |
+------------------------------------------------------------------------------------+
                                 │                                   │
               ┌─────────────────┘                                   └─────────────────┐
               ▼                                                                       ▼
    [ CÓPIA LOCAL 1 ]                                                       [ CÓPIA OFFSITE 2 ]
    - Partição secundária / SSD isolado                                     - Nuvem Segura MOB (Bucket S3)
    - Retenção local: 7 dias                                                - Criptografado antes do upload
    - Restauração instantânea                                               - Imutabilidade (Object Lock)
    - Protegido contra exclusão acidental                                   - Retenção rotativa: 30 dias
```

1. **Criptografia na Origem (Client-Side Encryption):**
   - Todos os dados são compactados e cifrados localmente antes de qualquer transferência usando o padrão **AES-256-GCM** via motor utilitário (*Restic* ou script nativo com chave assimétrica RSA 4096-bit).
   - As chaves criptográficas de backup são geradas individualmente por cliente e armazenadas em cofre de senhas isolado da MOB.
2. **Armazenamento Local Redundante (Destino Primário):**
   - Snapshot gravado em partição separada do NVMe ou disco rígido secundário da MOB Box, garantindo rollback rápido de até 7 dias úteis sem necessidade de download em rede externa.
3. **Cópia Offsite Segura (Destino Secundário na Nuvem MOB):**
   - Upload noturno automático via túnel TLS para repositório de objetos compatível com S3 (ou NAS corporativo MOB), hospedado em data center certificado (ISO 27001 / SOC 2).
   - **Imutabilidade e Retenção:** Habilitação de *Object Lock* contra ataques de ransomware por 30 dias. Findo o período de 30 dias, os blocos antigos são purgados automaticamente por rotina FIFO (First-In, First-Out).

### 4.3. Procedimento Operacional de Teste de Restauração (Disaster Recovery)
- A cada 90 dias (trimestralmente), a equipe técnica da MOB executa um teste de restauração simulado em bancada para uma amostra de clientes ativos, validando a integridade dos blocos e medindo o tempo de recomposição do sistema.
- Em caso de falha física catastrófica na máquina do cliente (ex: raio, descarga elétrica no Mini PC), o técnico de campo desloca-se com uma MOB Box sobressalente, injeta a imagem base e restaura o snapshot noturno do cliente em até 30 minutos.

---

## 5. Cláusulas Contratuais Essenciais (Minutas Prontas para Uso)

As cláusulas a seguir foram elaboradas especificamente para o modelo operacional da MOB, servindo de base contratual para os instrumentos de **Prestação de Serviços MOB Start**, **Contrato de Licença de Software** e **Termo de Comodato de Hardware MOB Box**.

> **Nota de Governança:** O texto abaixo é uma especificação técnica e comercial elaborada por especialista em privacidade. Deve ser formalmente revisado por advogado habilitado no Brasil antes da assinatura com clientes finais.

```
=====================================================================================
MINUTA CONTRATUAL — ANEXO DE SEGURANÇA, RESPONSABILIDADES E HARDWARE MOB
=====================================================================================
```

### Cláusula 1 — Natureza Assistiva da Tecnologia e Limitação de Alucinações

> **1.1. Natureza Assistiva e Obrigação de Meio:** O CLIENTE reconhece e aceita expressamente que a solução de software, os fluxos de trabalho e os assistentes de inteligência artificial disponibilizados pela MOB possuem caráter estritamente **assistivo, operacional e de apoio às rotinas internas**. A obrigação assumida pela MOB é de **meio**, consubstanciada na correta configuração técnica, indexação documental e manutenção do ambiente, e **não de resultado econômico, comercial ou jurídico**.
>
> **1.2. Possibilidade de Inexatidões ("Alucinações"):** Em razão das características intrínsecas dos modelos generativos de inteligência artificial de última geração, as respostas, resumos, classificações, buscas vetoriais e minutas geradas podem, ocasionalmente, apresentar omissões, imprecisões factuais, interpretações textuais divergentes ou informações não respaldadas pela documentação da empresa, fenômeno tecnicamente denominado "alucinação".
>
> **1.3. Obrigatoriedade de Revisão e Homologação Humana:** É **terminantemente vedado** ao CLIENTE utilizar quaisquer minutas, relatórios, cálculos ou saídas produzidas pela solução como decisões automatizadas finais ou enviá-las a terceiros (incluindo clientes, fornecedores, órgãos públicos e judiciário) sem a prévia, diligente e obrigatória **revisão e validação por profissional humano responsável**.
>
> **1.4. Isenção sobre Decisões Operacionais:** A MOB não responde civil, administrativa ou comercialmente por decisões operacionais, orçamentos emitidos, precificações equivocadas, concessão indevida de crédito, descumprimento de prazos processuais ou prejuízos de qualquer natureza decorrentes do uso de relatórios ou minutas gerados pela inteligência artificial sem a conferência humana estabelecida na cláusula 1.3.

---

### Cláusula 2 — Posse dos Dados, Confidencialidade e Vedação a Treinamento

> **2.1. Titularidade e Posse Incondicional dos Dados:** Todos os documentos, planilhas, manuais, prompts, áudios, mensagens e dados empresariais inseridos pelo CLIENTE na MOB Box ou transmitidos via MOB Start permanecem como **propriedade exclusiva e incondicional do CLIENTE**. Em nenhum momento a celebração deste contrato outorgará à MOB direitos de propriedade sobre o acervo informativo do CLIENTE.
>
> **2.2. Vedação Expressa a Treinamento de Modelos:** A MOB compromete-se formalmente a **NÃO utilizar**, sob nenhuma hipótese ou pretexto, os dados do CLIENTE, seus documentos, prompts de consulta ou resultados gerados para treinar, retreinar, ajustar finamente (*fine-tuning*) ou calibrar modelos públicos ou privados de inteligência artificial, próprios ou de terceiros.
>
> **2.3. Provedores de Terceiros e Zero Data Retention:** No caso da contratação do Modo Híbrido, a MOB garante que as chamadas de inferência encaminhadas aos provedores de modelo de linguagem de grande porte (LLMs) corporativos serão realizadas sob chaves contratuais empresariais que asseguram a não retenção de dados para treinamento de modelos de consumo público e políticas de descarte seguro (*Zero Data Retention* ou retenção estritamente técnica de monitoramento de abuso).
>
> **2.4. Dever Rigoroso de Sigilo:** A MOB e seus colaboradores obrigam-se a manter sob rigoroso sigilo todas as informações comerciais, estratégicas, financeiras e societárias a que eventualmente tenham acesso em virtude da implantação ou manutenção técnica do sistema, sujeitando-se às penalidades cíveis e criminais por quebra de confidencialidade.

---

### Cláusula 3 — Regras de Comodato do Hardware (MOB Box)

> **3.1. Regime de Comodato:** O equipamento físico fornecido ao CLIENTE (identificado na Ordem de Serviço como **MOB Box**, compreendendo Mini PC/Servidor, fonte de alimentação, nobreak e acessórios de conexão) é entregue em regime de **comodato gratuito e vinculado à vigência da assinatura mensal** dos serviços da MOB, permanecendo a sua propriedade exclusiva e inalienável sob titularidade da MOB.
>
> **3.2. Dever de Guarda e Conservação:** O CLIENTE assume a posição de fiel depositário do equipamento, obrigando-se a:
> - Manter a MOB Box em ambiente arejado, limpo, protegido contra poeira excessiva, umidade, vibrações mecânicas e luz solar direta;
> - Manter o equipamento obrigatoriamente conectado ao nobreak fornecido ou homologado pela MOB, garantindo energia estabilizada;
> - **Não violar, abrir o chassi, remover o lacre de garantia físico ou modificar o sistema operacional/firmware de fábrica** sem autorização expressa e por escrito da MOB.
>
> **3.3. Danos, Avarias e Mau Uso:** Danos decorrentes de desgaste natural, falha espontânea de componentes eletrônicos ou defeito de fábrica do hardware são de responsabilidade integral da MOB, que providenciará a substituição da caixa sem custo adicional no prazo estabelecido pelo SLA. Danos provocados por imperícia comprovada, quedas mecânicas, derramamento de líquidos, descargas atmosféricas decorrentes do desligamento intencional do nobreak, ou roubo/furto nas dependências do CLIENTE ensejarão a indenização do valor de reposição do hardware especificado na OS.
>
> **3.4. Devolução e Sanitização ao Término do Contrato:** Findo o contrato por qualquer motivo, o CLIENTE obriga-se a restituir a MOB Box no prazo de até 5 (cinco) dias úteis. Antes do recolhimento físico, a MOB realizará, na presença do responsável indicado pelo CLIENTE (ou mediante emissão de laudo técnico digital), a extração dos dados locais e o subsequente **expurgo seguro (cripto-shredding / sobrescrita de dados)**, garantindo que nenhum resíduo de informação confidencial permaneça gravado na unidade de armazenamento do hardware devolvido.

---

### Cláusula 4 — Tratamento de Dados Pessoais (DPA) e Conformidade LGPD

> **4.1. Papéis Regulatórios:** Para todos os fins de direito e em estrita consonância com a Lei Federal nº 13.709/2018 (LGPD), as partes reconhecem que:
> - O **CLIENTE atua como CONTROLADOR** dos dados pessoais inseridos na plataforma, competindo-lhe exclusivamente a definição das finalidades de tratamento, a indicação das bases legais pertinentes (Art. 7º e 11 da LGPD) e a gestão do relacionamento com os titulares dos dados;
> - A **MOB atua como OPERADORA**, realizando o tratamento de dados pessoais (armazenamento, busca vetorial, indexação e suporte de inferência) estritamente sob as instruções lícitas documentadas do CLIENTE e nos limites necessários à execução do serviço.
>
> **4.2. Notificação e Cooperação em Incidentes de Segurança:** Havendo qualquer incidente de segurança comprovado na infraestrutura da MOB Box ou nos canais operados pela MOB que possa acarretar risco ou dano relevante aos titulares de dados pessoais, a MOB comunicará o CLIENTE em prazo não superior a **48 (quarenta e oito) horas úteis** após a confirmação do evento. A comunicação conterá a natureza dos dados afetados, as medidas de contenção adotadas e o plano de ação técnica, prestando assistência para que o CLIENTE cumpra eventuais deveres de notificação perante a Autoridade Nacional de Proteção de Dados (ANPD).
>
> **4.3. Apoio aos Direitos dos Titulares:** A MOB compromete-se a fornecer as ferramentas e o suporte técnico necessários para que o CLIENTE possa atender, em tempo hábil, às solicitações de titulares de dados pessoais relativas a confirmação de existência, acesso, correção, anonimização, bloqueio ou eliminação de registros constantes na base de conhecimento da solução.

---

### Cláusula 5 — Limitação de Responsabilidade Proporcional (Cap Financeiro)

> **5.1. Teto Máximo Indenizatório (Liability Cap):** Ressalvadas as exceções expressas na cláusula 5.2, a responsabilidade civil total e cumulativa da MOB perante o CLIENTE por perdas e danos diretos devidamente comprovados, decorrentes de falha de configuração imputável à MOB ou descumprimento do presente contrato, **limitar-se-á ao montante correspondente à soma das mensalidades efetivamente pagas pelo CLIENTE à MOB nos últimos 6 (seis) meses** anteriores ao fato gerador da reclamação.
>
> **5.2. Danos Indiretos e Lucros Cessantes:** Em nenhuma hipótese qualquer das partes responderá perante a outra por lucros cessantes, perda de oportunidade comercial, danos à imagem pública ou danos reflexos/indiretos decorrentes da indisponibilidade temporária do sistema, instabilidade de provedores externos ou falha de conectividade do CLIENTE.
>
> **5.3. Exceções Inaplicáveis ao Teto:** A limitação de responsabilidade disposta na cláusula 5.1 não se aplica às hipóteses de: (a) dolo ou culpa grave devidamente comprovados em juízo; (b) violação deliberada do dever de confidencialidade de segredos empresariais; e (c) infração dolosa às normas de proteção de dados pessoais (LGPD).

---

### Cláusula 6 — Política de Descarte e Direito ao Esquecimento (Offboarding)

> **6.1. Exportação Prévia de Dados:** Ocorrendo a rescisão ou término do contrato, a MOB disponibilizará ao CLIENTE, no prazo improrrogável de até **15 (quinze) dias corridos**, a exportação completa de seu acervo documental original e dos históricos de chats e automações em formato aberto e estruturado (JSON, CSV e arquivos binários nativos).
>
> **6.2. Eliminação Irreversível das Bases:** Decorrido o prazo para exportação estabelecido na cláusula 6.1, a MOB executará o expurgo criptográfico definitivo dos bancos de dados, coleções de embeddings vetoriais e eventuais cópias de backup offsite mantidas em sua custódia, em observância ao Art. 16 da LGPD, emitindo formalmente um **Termo de Eliminação Segura de Dados** subscrito pelo responsável técnico da MOB.

```
=====================================================================================
FIM DA MINUTA CONTRATUAL
=====================================================================================
```

---

## 6. Checklist de Segurança de Bancada e Implantação (Security Pre-Flight)

Antes de qualquer MOB Box sair do laboratório para instalação física no cliente, o técnico de bancada deve obrigatoriamente preencher e assinar este checklist:

- [ ] **1. Hardening do Sistema Operacional (Ubuntu Server LTS):**
  - Usuário `root` bloqueado para login via SSH (`PermitRootLogin no`).
  - Criação de usuário operacional sem privilégios padrão para execução dos containers.
  - Firewall local UFW ativado: liberadas apenas as portas `22` (restrita à VPN), `80/443` (HTTP/S reverso local) e portas de compartilhamento Samba restritas à sub-rede da empresa (`192.168.x.0/24`).
- [ ] **2. Túnel VPN Seguro (Tailscale / WireGuard):**
  - MOB Box registrada na rede privada da MOB com política de tags rígidas (`tag:mob-box-client`).
  - Roteamento de sub-rede (*Subnet Routers*) **desativado por padrão**: a VPN dá acesso exclusivo à porta do container de manutenção da MOB Box, sem escanear a rede interna do cliente.
  - Chaves de autenticação pré-autorizadas com prazo de expiração fixo.
- [ ] **3. Isolamento Docker e Gerenciamento de Credenciais:**
  - Containers operando com parâmetro `restart: unless-stopped`.
  - Nenhuma porta sensível do banco de dados vetorial ou banco relacional exposta para o host (`127.0.0.1` binding).
  - Variáveis de ambiente com chaves de API salvas em arquivo `.env` com permissões `0600` acessíveis unicamente pelo daemon Docker.
- [ ] **4. Autenticação e Workspaces no AnythingLLM:**
  - Troca mandatória da senha de administrador gerada de fábrica no primeiro boot.
  - Configuração do modo multiusuário com sessões seguras.
  - Workspaces criados e vinculados individualmente aos seus respectivos grupos Samba.
- [ ] **5. Hardware & Integridade Física:**
  - Verificação da ativação de *Restore on AC Power Loss* na BIOS (religamento autônomo).
  - Teste de autonomia do nobreak com carga de bancada simulando queda de energia de 5 minutos.
  - Aplicação do lacre físico destrutivo no chassi e etiquetagem padrão MOB com número de série e QR Code de suporte.

---

## 7. Avisos Obrigatórios na Interface e Termo de Treinamento

A proteção contra incidentes não reside apenas em cláusulas jurídicas e firewalls; ela exige a educação do usuário que opera o teclado diariamente.

### 7.1. Badge Permanente na Interface Web da MOB Box
No rodapé de todas as telas de conversa da MOB Box, é fixado o aviso de alerta operacional:

> 🛡️ **MOB CORE | Assistente de Apoio Operacional**  
> *As respostas são geradas por Inteligência Artificial com base nos documentos da sua empresa. Antes de enviar orçamentos, assinar minutas ou tomar decisões financeiras, revise atentamente datas, valores e cláusulas. O julgamento humano final é insubstituível.*

### 7.2. Roteiro de Alinhamento com a Equipe no Treinamento Presencial
Durante o treinamento prático de entrega da MOB Box, o facilitador da MOB reforça com os colaboradores:
1. **"A IA é seu estagiário super-rápido, não o diretor da empresa":** Ela produz rascunhos em 5 segundos, mas cabe a você conferir se a conta fecha e se o cliente é o correto.
2. **"Tabela errada gera orçamento errado":** Se um funcionário subir uma tabela de preços do ano passado na pasta de rede, a IA responderá o valor antigo. O responsável pelo setor deve manter a pasta limpa.
3. **"Cada setor no seu quadrado":** O que é colocado na pasta da diretoria não sai para a equipe de vendas. A segurança é garantida pela estrutura que configuramos.

---

## 8. Conclusão e Próximos Passos na Esteira

Este documento estabelece a blindagem técnica, operacional e jurídica para o lançamento da **MOB Box** e do **MOB Start**. 

Com a consolidação desta entrega pelo Especialista `07 Security & Privacy Specialist`:
1. Os limites de responsabilidade técnica alinham-se à arquitetura física consolidada em `01-hardware-mob-box-spec.md` (Hardware-05) e à pilha Docker do MOB CORE em `02-mob-core-architecture.md` (AI-Arch-06).
2. O material fica pronto para embasar o cálculo de custos e precificação em `06-financial-pricing-model.md` (Agente 08 na Onda 2), garantindo a inclusão das margens de backup offsite e seguro de hardware comodatado.
3. As minutas contratuais serão integradas aos playbooks de vendas do Agente 09 e à landing page oficial `mob.tec.br` desenvolvida pelo Agente 02 na Onda 3.
