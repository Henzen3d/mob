# Prompt de Contexto e Avaliação Estratégica — Projeto MOB (mob.tec.br)

> **Instrução para a IA Avaliadora (ChatGPT):**
> Abaixo está o dossiê completo de concepção, posicionamento, modelo de negócios, comunicação e arquitetura técnica da **MOB | Inteligência Artificial para Empresas**, uma startup B2B focada em facilitação e infraestrutura prática de IA para pequenas e médias empresas (PMEs).
> 
> Leia todo o contexto abaixo como se fosse a transcrição integral do nosso planejamento estratégico. Ao final, faça uma **avaliação crítica, honesta e aprofundada** sobre:
> 1. **Furos ou pontos cegos do modelo de negócios** (riscos comerciais, operacionais, jurídicos/LGPD e financeiros).
> 2. **Viabilidade técnica e de suporte da "MOB Box"** (gargalos reais no dia a dia dos clientes).
> 3. **Precificação e Margem** (se os valores de Setup, Hardware e Mensalidade fazem sentido para o mercado brasileiro de PMEs).
> 4. **Estratégia de Go-To-Market (Aquisição dos primeiros clientes)** e sugestões práticas para acelerar a tração inicial.

---

## 1. A Tese Central do Negócio: O "Pedreiro da IA" (Last-Mile AI)

* **O Problema Real do Mercado:** Os modelos de Inteligência Artificial estão se tornando *commodities* e ficando cada vez mais acessíveis, mas os donos de Pequenas e Médias Empresas (PMEs) sofrem de paralisia operacional. Eles sabem que a IA existe, mas:
  1. Não têm tempo nem interesse em aprender engenharia de prompts ou configurar ferramentas;
  2. Têm medo de implantar sistemas complexos que a equipe vai abandonar na segunda semana;
  3. Têm receio de jogar dados sensíveis (contratos, financeiro, tabelas de custos) em contas gratuitas ou abertas na nuvem;
  4. Não querem pagar assinaturas caras em dólar por cada funcionário (ex: ChatGPT Team/Plus para 10 ou 15 pessoas).
* **A Proposta de Valor (A Analogia do Pedreiro):** Quando uma empresa precisa levantar um muro, o empresário não vai estudar alvenaria — ele contrata um pedreiro de confiança que entrega o muro pronto. A **MOB** nasce para ser esse **facilitador mão na massa ("o pedreiro da IA")**: alguém que entra na empresa, instala um servidor próprio ou estrutura pronta, configura as instruções com as regras reais do negócio e treina a equipe na prática.
* **Filosofia de Produto ("Automação Invisível / Zero Atrito"):** A tecnologia se adapta ao hábito que o cliente já tem (como mandar áudios e fotos no WhatsApp para gerar relatórios/orçamentos em PDF ou jogar arquivos numa pasta normal do Windows para alimentar a IA), sem forçar o empresário a virar um operador de software complexo.

---

## 2. Histórico, Marca e Reposicionamento (Pivot)

* **Ponto de Partida:** O fundador já possuía uma operação e estrutura de marketing digital em Blumenau/SC (antiga *Marketing Online Blumenau*), detendo o domínio **`https://mob.tec.br`** e um perfil ativo no Instagram.
* **A Virada (Pivot):** Decidiu-se encerrar o foco em marketing digital e reaproveitar a autoridade do domínio `.tec.br` e a base de contatos para transformar a **MOB** em uma startup de facilitação e infraestrutura de IA para empresas de qualquer setor.
* **Nome Escolhido:** **MOB | Inteligência Artificial para Empresas** (tendo como conceitos internos de apoio *Mão na Obra* ou *Modelos, Operação e Base*).

---

## 3. Estratégia de Comunicação e Vendas (Benchmarking: Asaas)

A comunicação da MOB foi desenhada estudando o posicionamento verbal e visual da fintech **Asaas (`asaas.com`)**, referência em B2B para PMEs no Brasil.

### Pilares de Comunicação Adotados:
1. **Zero "Tecniquês" (Foco no Alívio Operacional):**
   * *Em vez de dizer:* "Implementamos LLMs locais open-source com RAG e agentes via API."
   * *A MOB diz:* "Sua empresa com Inteligência Artificial própria. Seus contratos e dados financeiros não saem do seu escritório e você não paga mensalidade em dólar por funcionário."
2. **Tecnologia nos Bastidores, Pessoas Reais na Frente:**
   * Forte destaque para o atendimento humano direto (presencial ou via WhatsApp), quebrando o medo que o empresário tem de contratar tecnologia e ficar preso falando com robôs de suporte.
3. **Economia de Tempo Matemática:**
   * A venda é ancorada nas horas economizadas pela equipe (ex: recuperar 10 a 15 horas semanais de digitação de orçamentos, vistorias, triagem e revisão de documentos custa uma fração de um funcionário extra).

### Arquitetura da Landing Page (`mob.tec.br`):
* **Dobra 1 (Hero):** *"Inteligência Artificial funcionando na sua empresa, sem complicação. Montamos servidores próprios, configuramos assistentes treinados com as regras do seu negócio e preparamos sua equipe para usar no dia a dia. Você não precisa entender de tecnologia — nós entregamos pronto."* + CTA direto para WhatsApp.
* **Dobra 2 (Os 3 Pilares - "Menos digitação, mais operação"):**
  1. IA Própria e Privada no Escritório;
  2. Assistentes que Conhecem a Sua Empresa;
  3. Automação de Rotina e Treinamento.
* **Dobra 3 (Como Funciona em 3 Passos - Estilo "Fácil Assim"):** 1. Conversa de Diagnóstico -> 2. Mão na Massa -> 3. Entrega e Treinamento.
* **Dobra 4 (Quebra de Objeção):** *"Tecnologia configurada por gente de verdade."*

### Estratégia de Aquisição (Instagram + Prospecção Ativa):
* **Conteúdo no Instagram ("Obra Pronta", não "Dica de IA"):** Evitar vídeos ensinando ferramentas gratuitas (que atraem curiosos sem dinheiro). Focar em Reels curtos mostrando:
  1. *Bastidores da Obra:* Mostrando o equipamento físico (Mini PC) rodando IA privada no escritório.
  2. *Demonstração de 30s:* Áudio bagunçado no WhatsApp virando orçamento/relatório em PDF no padrão da empresa.
  3. *O Cérebro da Empresa:* IA respondendo dúvidas exatas com base na tabela de preços e contratos de um cliente.
* **SEO Local e Busca por Dor:** Otimizar presença local (Google Meu Negócio e página) para buscas baseadas na dor (*"IA privada para empresas"*, *"treinar IA com documentos da empresa"*, *"automatizar orçamentos no WhatsApp"*).
* **Venda Direta com "Maleta de Demonstração":** Visitar clientes da base antiga e escritórios locais (contabilidades, advocacia, imobiliárias, clínicas) levando uma unidade física da **MOB Box** + demonstração no celular funcionando ao vivo em 15 minutos.

---

## 4. Visão de Startup e Referências Globais

Para que a MOB seja uma **startup escalável** (com receita recorrente/MRR e produtos padronizados) e não apenas uma consultoria artesanal que vende horas, o modelo foi inspirado em startups globais de *Last-Mile AI* e *Forward-Deployed AI*:
* **Zylon / PrivateGPT (Espanha/EUA):** Servidores privados chave na mão para PMEs conversarem com seus documentos com sigilo total.
* **Dust.tt (França) & Cassidy AI (EUA):** Criação de assistentes internos conectados ao "cérebro" (documentos, tabelas e processos) da empresa.
* **Mintplex Labs / AnythingLLM (EUA):** Empacotamento de IA local e leitura de documentos em hardware compacto.
* **Palantir (Modelo Forward-Deployed Engineer adaptado para PMEs):** Ir até a ponta instalar a solução sobre uma base pré-moldada.

---

## 5. O Produto Carro-Chefe: "MOB Box"

Escolheu-se a **MOB Box** como produto âncora porque o empresário tradicional valoriza ativos físicos palpáveis (como o DVR das câmeras ou o PABX) muito mais do que "prompts abstratos na nuvem".

### O que o cliente recebe com a MOB Box:
1. **Zero mensalidade por usuário:** 5, 10 ou 20 funcionários acessam pelo navegador na rede local sem custo extra por cabeça.
2. **Cofre de Dados Físico:** Os documentos, contratos e histórico ficam fisicamente dentro do escritório do cliente.
3. **3 Assistentes Pré-Moldados na Instalação:**
   * *Consultor Interno:* Conectado aos PDFs, manuais e tabelas de preços da empresa.
   * *Redator de Padrão:* Transforma áudios e anotações rápidas em orçamentos, relatórios ou respostas comerciais no tom da empresa.
   * *Analista de Documentos:* Resume contratos, editais e planilhas apontando riscos, prazos e valores.

### Linha de Hardware (3 Níveis):
1. **MOB Box Compact (Campeã de Margem / Entrada):**
   * *Hardware:* Mini PC Intel N100/N97 ou Ryzen 5 • 16GB RAM • SSD NVMe 512GB (Custo: R$ 1.100 a R$ 1.700).
   * *Arquitetura Híbrida:* Interface multiusuário, banco de dados, histórico, automações e indexação de documentos (RAG) rodam 100% locais na caixa. A geração pesada de texto usa roteamento de API privada (com política de *Zero Data Retention*, sem treino de dados) já embutida na mensalidade da MOB. Atende até 15 usuários simultâneos com velocidade instantânea e baixíssimo custo de hardware.
2. **MOB Box Pro (100% Local e Silenciosa):**
   * *Hardware:* Mac Mini M4 (16GB/24GB memória unificada) ou Mini PC Ryzen 7/AI com 32GB DDR5 (Custo: R$ 4.200 a R$ 5.800).
   * *Arquitetura 100% Offline:* Roda modelos locais de 8B a 14B parâmetros (Llama 3, Qwen 2.5, DeepSeek) direto na máquina, sem depender de nuvem externa. Foco em advocacia, contabilidade e financeiro.
3. **MOB Box Ultra (Força Bruta Local):**
   * *Hardware:* Workstation compacta SFF + 32GB/64GB RAM + GPU dedicada RTX 3060 12GB ou RTX 4060 Ti 16GB (Custo: R$ 5.500 a R$ 7.500).
   * *Arquitetura:* Múltiplos modelos locais simultâneos + transcrição de áudio local pesada (Whisper) para 15 a 30+ usuários.

### Arquitetura de Software ("Imagem Mestre" Clonável):
* **Sistema Base:** Ubuntu Server LTS / Debian configurado com *Restore on AC Power Loss* na BIOS (religa sozinho após queda de luz) + todos os serviços em **Docker Compose** (`restart: unless-stopped`).
* **Interface Web:** Painel multiusuário limpo em modo escuro na rede local (`http://mob.local`), com controle de permissões por setor.
* **O Pulo do Gato Operacional (Pasta na Rede Windows):** Configuração de pasta compartilhada via Samba (`\\mob-box\documentos-ia`). Quando o cliente joga um PDF ou planilha nova lá dentro pelo Windows Explorer, um script Python na MOB Box detecta e atualiza a base de conhecimento da IA automaticamente.
* **Manutenção Remota Invisível:** Túnel VPN seguro (**Tailscale / WireGuard**) instalado de fábrica. Permite que a MOB atualize prompts, suba novos assistentes, monitore saúde do SSD e faça backups noturnos criptografados remotamente, sem precisar deslocamento físico e sem abrir portas no roteador do cliente.

### Modelo de Precificação Proposto:
* **Opção A — Compra Chave na Mão + Manutenção:**
  * *Setup + Equipamento:* R$ 3.500 a R$ 5.500 (no modelo Compact, paga o hardware à vista e gera margem imediata de implantação).
  * *Mensalidade de Gestão MOB (Retainer):* R$ 490 a R$ 890/mês (inclui atualizações, backups, consumo de API no modelo híbrido e até 2 ajustes de assistentes/mês).
* **Opção B — Comodato / Assinatura (Hardware as a Service):**
  * *Taxa de Instalação (Ativação):* R$ 1.500 a R$ 2.000 (cobre o custo físico do Mini PC Compact logo na entrada).
  * *Assinatura Mensal:* R$ 790 a R$ 1.290/mês (contrato de 12 meses).

---

## 6. Perguntas Diretas para o Avaliador (ChatGPT)

Com base em todo esse plano da **MOB (`mob.tec.br`)**:
1. Qual a sua nota geral para a coerência entre posicionamento, produto (**MOB Box**) e público-alvo (PMEs tradicionais)?
2. Na arquitetura híbrida vs. 100% local da **MOB Box**, quais cuidados jurídicos, técnicos e comerciais devo tomar para não prometer "privacidade local" de forma equivocada ao cliente?
3. O que pode dar errado na rotina real de uso pelas equipes dos clientes (adoção, qualidade das respostas no RAG quando jogam PDFs mal formatados na pasta da rede, suporte) e como blindar o negócio contra isso?
4. Se você fosse o conselheiro estratégico da MOB em Blumenau/SC hoje, qual seria o seu plano de ação exato para os próximos 30 dias para fechar os primeiros 5 clientes pagantes?