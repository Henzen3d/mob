# MOB | Inteligência Artificial para Empresas

> Repositório oficial do projeto de reposicionamento estratégico, arquitetura de engenharia e website de **mob.tec.br**.  
> Documentação completa e contexto institucional para o **Hermes Agent**, desenvolvedores e agentes autônomos.

---

## 1. Visão Geral e Contexto de Transição

A **MOB** passou por um pivô estratégico de reposicionamento:
- **Origem:** *MOB — Marketing Online Blumenau* (agência focada em marketing digital e atração de tráfego).
- **Posicionamento Atual:** *MOB \| Inteligência Artificial para Empresas* — facilitadora de implantação prática de IA (**Last-Mile AI / Forward Deployed Engineering**), focada em donos e gestores de pequenas e médias empresas (PMEs) em Blumenau e região.
- **Narrativa Oficial:** *"Depois de anos ajudando empresas a atrair clientes no digital, percebemos que o maior gargalo dos negócios hoje não é só vender mais — é dar conta da operação, dos orçamentos e do atendimento sem afogar a equipe. Por isso a MOB evoluiu para colocar Inteligência Artificial funcionando dentro da rotina das empresas."*
- **Filosofia Central ("Pedreiro da IA"):** Zero teoria acadêmica ou relatórios conceituais. Entrega de hardware pronto, assistentes calibrados e automações práticas que aliviam o trabalho manual da equipe em menos de 15 dias.

---

## 2. Portfólio de Soluções e Produtos

| Solução | Descrição | Modelo Comercial |
|---|---|---|
| **MOB Box Compact** | Servidor físico próprio (Mini PC N100 + Nobreak com religamento automático + SSD criptografado) instalado no rack ou mesa da empresa. Os dados nunca saem da rede local. | R$ 6.490 (hardware + setup único) + R$ 990/mês (gestão e suporte) |
| **MOB Start** | Nuvem privada dedicada e isolada para empresas que querem começar sem aquisição imediata de hardware físico. | R$ 4.900 (setup único) + R$ 990/mês (operação e suporte) |
| **MOB Comodato** | Equipamento cedido em regime de locação com substituição expressa em até 24h e suporte total. Após 12 meses, a mensalidade reduz para R$ 990/mês. | R$ 2.900 (ativação de bancada) + R$ 1.290/mês (12 meses) |
| **MOB CORE** | Suite de software e 3 assistentes calibrados de fábrica: **Consultor Interno** (regras e tabelas), **Redator de Propostas** (áudios em orçamentos PDF timbrados) e **Analista de Documentos** (resumos e contratos). | Integrado em todos os planos |

---

## 3. Mapa de Pastas e Documentações

Este repositório reúne tanto o código-fonte da aplicação web de alta conversão quanto todo o conhecimento institucional, estratégico e operacional da empresa:

```
├── missions/                               # Documentação estratégica consolidada (Missões)
│   ├── 001-strategic-foundation/           # Fundação de Engenharia, Negócio e Operações
│   │   ├── 00-executive-summary-decisions.md # Sumário executivo e matriz de decisões
│   │   ├── 01-hardware-mob-box-spec.md       # Especificação técnica completa da MOB Box
│   │   ├── 02-mob-core-architecture.md       # Arquitetura de software (Docker, AnythingLLM)
│   │   ├── 03-security-lgpd-framework.md     # Framework de segurança e adequação à LGPD
│   │   ├── 04-business-pivot-model.md        # Modelo de negócio e transição da carteira
│   │   ├── 05-market-positioning.md          # Posicionamento B2B regional
│   │   ├── 06-financial-pricing-model.md     # Modelagem financeira e unit economics
│   │   ├── 07-brand-website-instagram-kit.md # Kit de reposicionamento de marca
│   │   ├── 08-sales-playbook-scripts.md      # Playbook de vendas e scripts de abordagem
│   │   ├── 09-operations-assembly-checklist.md # Procedimentos operacionais de bancada
│   │   ├── 10-pilot-implementation-protocol.md # Protocolo de implantação piloto
│   │   └── 11-customer-success-handover.md   # Metodologia de suporte e pós-venda
│   └── 002-website-deployment/             # Deploy e especificações do site institucional
│       └── 00-summary.md
│
├── referencias/                            # Dossiês técnicos e benchmarks de mercado
│   ├── dossi_completo_do_projeto_mob.md    # Dossiê de fundação do projeto
│   ├── MOB Box _ Arquitetura técnica...md  # Detalhamento de infraestrutura local
│   ├── MOB _ Plano de transição e...md     # Estratégia de migração
│   ├── MOB-Box-seguranca-APIs-e...md       # Análise de segurança e setor jurídico
│   ├── MOB-clausulas-IA-alucinacoes...md   # Cláusulas contratuais e mitigação de risco
│   ├── MOB-contratos-e-termos-MOB-Start.md # Minutas de contratos comerciais
│   ├── MOB-orcamento-hardware-GPUs.md      # Orçamentos de componentes e GPUs
│   └── MOB-precificacao-e-pacote-inicial.md# Estrutura histórica de preços
│
├── melhorias/                              # Planos de evolução contínua e UI/UX
│   └── mob-redesign-ui-ux.md               # Diretrizes anti-slop e foco no decisor PME
│
├── src/                                    # Código-fonte do site Astro (mob.tec.br)
│   ├── components/                         # Navbar, AuroraHero, Footer
│   ├── layouts/                            # Layout base, metatags, fontes e contraste
│   └── pages/                              # index.astro (Landing Page B2B) e advocacia.astro
│
├── public/                                 # Assets estáticos (vídeo aurora, texturas, ícones)
├── GEMINI.md / AGENTS.md                   # Diretrizes do orquestrador e regras de governança
├── plano_inicial.md                        # Planejamento original do projeto
├── package.json                            # Scripts Astro e Webhook de deploy Cloudflare
└── astro.config.mjs                        # Configuração do Astro com Tailwind CSS
```

---

## 4. Instruções para o Hermes Agent / Agentes de IA

Ao operar neste repositório:
1. **Regras de Governança:** Consulte sempre `AGENTS.md` e `GEMINI.md`. Todas as decisões estruturais seguem o modelo de validação executiva pelo fundador (Osmar).
2. **Tom de Voz ("Padrão Asaas"):** Linguagem confiante, direta, prática e humana. É estritamente proibido exibir jargões técnicos acadêmicos ("LLM", "RAG", "Embeddings", "Golden Image") nos materiais voltados aos clientes finais.
3. **Site & Produção:** O site é construído em **Astro v5** e hospedado no **Cloudflare Pages**. Para compilar localmente, utilize `npm run build`. O deploy é acionado automaticamente pelo push na branch `main` ou pelo comando `npm run deploy`.

---

## 5. Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Compilar para produção estática (gera /dist)
npm run build

# Disparar deploy hook oficial no Cloudflare Pages
npm run deploy
```

---
*Contato institucional: contato@mob.tec.br \| Blumenau - Santa Catarina*
